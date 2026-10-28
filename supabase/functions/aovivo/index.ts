// Cotações "ao vivo" só dos ativos da carteira de quem pede, para o gráfico do dia andar de poucos em poucos segundos.
// Não grava nada no banco: só consulta as fontes e devolve. B3 e EUA pelo TradingView, criptos pela CoinGecko.
// Aceita usuários logados (e o agendamento do banco, para teste), com limite diário por usuário.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-cron-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, "Content-Type": "application/json" } });
const B3_RE = /^[A-Z][A-Z0-9]{2}[A-Z]\d{1,2}$/;
const EUA_RE = /^(NASDAQ|NYSE|AMEX):[A-Z][A-Z0-9.\-]{0,9}$/;
const CG_RE = /^[a-z0-9\-]{1,60}$/;
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36" };

// guarda as respostas por alguns segundos: vários usuários com o mesmo ativo não multiplicam as consultas
const cache = new Map<string, { t: number; v: any }>();
async function guardado<T>(k: string, ms: number, f: () => Promise<T>): Promise<T> {
  const c = cache.get(k); if (c && Date.now() - c.t < ms) return c.v;
  const v = await f(); cache.set(k, { t: Date.now(), v }); if (cache.size > 300) cache.delete(cache.keys().next().value!);
  return v;
}
async function tv(mercado: "brazil" | "america", simbolos: string[]) {
  const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 8000);
  const pede = (cols: string[]) => fetch(`https://scanner.tradingview.com/${mercado}/scan`, {
    method: "POST", signal: ac.signal,
    headers: { ...UA, "Content-Type": "application/json", Origin: "https://www.tradingview.com", Referer: "https://www.tradingview.com/" },
    body: JSON.stringify({ symbols: { tickers: simbolos }, columns: cols }),
  });
  try {
    let r = await pede(["close", "change", "update_mode"]); let comModo = true;
    if (!r.ok) { r = await pede(["close", "change"]); comModo = false; }
    if (!r.ok) throw new Error("tradingview " + r.status);
    const d = await r.json(); const out: Record<string, { p: number; v: number; m: string | null }> = {};
    for (const row of d?.data || []) {
      const t = String(row.s || "").split(":")[1]; const [p, v, m] = row.d || [];
      if (t && typeof p === "number" && isFinite(p)) out[t] = { p, v: typeof v === "number" ? Math.round(v * 100) / 100 : 0, m: comModo ? (m ?? null) : null };
    }
    return out;
  } finally { clearTimeout(to); }
}
async function cripto(ids: string[]) {
  const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 8000);
  try {
    const r = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(",")}&vs_currencies=brl&include_24hr_change=true`, { headers: { Accept: "application/json", ...UA }, signal: ac.signal });
    if (!r.ok) throw new Error("coingecko " + r.status);
    const d = await r.json(); const out: Record<string, { p: number; v: number }> = {};
    for (const id of ids) { const x = d?.[id]; if (x && x.brl > 0) out[id] = { p: x.brl, v: Math.round((x.brl_24h_change || 0) * 100) / 100 }; }
    return out;
  } finally { clearTimeout(to); }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ ok: false, erro: "metodo" }, 405);
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  let uid: string | null = null, cron = false;
  const seg = req.headers.get("x-cron-secret");
  if (seg) { const { data } = await sb.rpc("cron_segredo_ok", { s: seg }); cron = data === true; }
  if (!cron) {
    const tok = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (tok) { const { data } = await sb.auth.getUser(tok); uid = data?.user?.id || null; }
    if (!uid) return json({ ok: false, erro: "login" }, 401);
    // uma consulta a cada poucos segundos durante o dia todo cabe com folga neste limite diário
    const { data, error } = await sb.rpc("uso_registrar", { uid, acao: "aovivo", limite: 12000 });
    if (error || data === -1) return json({ ok: false, erro: "limite" }, 429);
  }
  let body: any = {}; try { body = await req.json(); } catch (_) { /* vazio */ }
  const lista = (x: unknown, re: RegExp) => [...new Set((Array.isArray(x) ? x : []).map(String).filter((s) => re.test(s)))].slice(0, 80).sort();
  const b3 = lista(body.b3, B3_RE), eua = lista(body.eua, EUA_RE), cg = lista(body.cripto, CG_RE);
  const [rb, re, rc] = await Promise.allSettled([
    b3.length ? guardado("b3:" + b3.join(","), 3000, () => tv("brazil", b3.map((t) => "BMFBOVESPA:" + t))) : Promise.resolve({}),
    eua.length ? guardado("us:" + eua.join(","), 3000, () => tv("america", eua)) : Promise.resolve({}),
    cg.length ? guardado("cg:" + cg.join(","), 20000, () => cripto(cg)) : Promise.resolve({}),
  ]);
  const ok = (r: PromiseSettledResult<any>) => (r.status === "fulfilled" ? r.value : null);
  return json({ ok: true, ts: Date.now(), b3: ok(rb), eua: ok(re), cripto: ok(rc) });
});
