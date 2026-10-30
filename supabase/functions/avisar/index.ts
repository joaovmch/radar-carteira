// Notificações push da carteira. Dois usos:
//  - usuário logado manda { modo: "teste" } para receber uma notificação agora (botão "testar");
//  - o agendamento do banco manda { quando: "abre" | "fecha" | "hora" } com o cabeçalho secreto.
// Calcula o resumo do dia (função resumo_push) e envia via Web Push (VAPID). Inscrições mortas são apagadas.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

const VAPID_PUBLIC = "BFmYg43HIsjq5R857GS7uCZOA8n_LPkjwcS7bpFCI8FSuJYtvbffSr0xOB-Rl4MUyhbCNVMWWB1qN-T5QJKW2yw";
const SUBJECT = "https://joaovmch.github.io/radar-carteira/";
const APP = "https://joaovmch.github.io/radar-carteira/";
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-cron-secret", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...cors, "Content-Type": "application/json" } });

const nf = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const brl = (v: number) => "R$ " + nf.format(v);
const pct = (v: number) => (v > 0 ? "+" : v < 0 ? "−" : "") + nf.format(Math.abs(v)) + "%";

function conteudo(quando: string, r: any) {
  if (!r || !r.n) return { title: "Valoriza+", body: "Adicione ativos à sua carteira para receber o resumo do dia." };
  const dp = Number(r.dia_pct) || 0, drs = Number(r.dia_rs) || 0;
  const seta = dp > 0 ? "📈" : dp < 0 ? "📉" : "➖";
  if (quando === "abre") {
    return { title: "☀️ Pregão aberto", body: `Seus ativos: ${brl(Number(r.patr) || 0)} (sem a renda fixa). Bom acompanhamento!` };
  }
  const subiu = dp > 0 ? "subiu" : dp < 0 ? "caiu" : "estável";
  const partes: string[] = [`${(drs >= 0 ? "+" : "−")}${brl(Math.abs(drs)).slice(3)} hoje`];
  if (r.melhor) partes.push(`maior alta ${r.melhor.t} ${pct(r.melhor.pct)}`);
  if (r.pior && r.pior.t !== (r.melhor && r.melhor.t)) partes.push(`maior baixa ${r.pior.t} ${pct(r.pior.pct)}`);
  const quadro = quando === "fecha" ? "Fechamento do pregão" : "Seus ativos";
  return { title: `${seta} ${quadro}: ${subiu === "estável" ? "estável" : subiu + " " + pct(dp).replace("+", "").replace("−", "")}`, body: partes.join(" · ") };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ ok: false, erro: "metodo" }, 405);
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  let body: any = {}; try { body = await req.json(); } catch (_) { /* vazio */ }
  const seg = req.headers.get("x-cron-secret");
  let cron = false, uid: string | null = null;
  if (seg) { const { data } = await sb.rpc("cron_segredo_ok", { s: seg }); cron = data === true; }
  if (!cron) {
    const tok = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (tok) { const { data } = await sb.auth.getUser(tok); uid = data?.user?.id || null; }
    if (!uid) return json({ ok: false, erro: "login" }, 401);
  }
  const quando = cron ? String(body.quando || "fecha") : "teste";

  const { data: priv } = await sb.rpc("vapid_priv");
  if (!priv) return json({ ok: false, erro: "sem_chave" }, 500);
  webpush.setVapidDetails(SUBJECT, VAPID_PUBLIC, priv as string);

  let q = sb.from("push_subs").select("*");
  if (uid) q = q.eq("user_id", uid);
  else q = q.in("modo", quando === "hora" ? ["horario"] : ["abre_fecha"]);
  const { data: subs } = await q;
  if (!subs || !subs.length) return json({ ok: true, enviados: 0 });

  // um resumo por usuário (vários aparelhos do mesmo usuário reaproveitam)
  const porUser: Record<string, any[]> = {};
  for (const s of subs) (porUser[s.user_id] ||= []).push(s);
  let enviados = 0, limpos = 0;
  for (const [u, lista] of Object.entries(porUser)) {
    const { data: r } = await sb.rpc("resumo_push", { uid: u });
    if (cron && (!r || !r.n)) continue;   // no automático, não incomoda quem está sem ativos
    const msg = conteudo(quando, r);
    for (const s of lista) {
      const payload = JSON.stringify({ ...msg, url: APP, tag: "radar-" + quando, req: !!s.permanente });
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 3600, urgency: "normal" });
        enviados++;
        await sb.from("push_subs").update({ ultimo_ok: new Date().toISOString(), falhas: 0 }).eq("id", s.id);
      } catch (e: any) {
        const code = e?.statusCode || 0;
        if (code === 404 || code === 410) { await sb.from("push_subs").delete().eq("id", s.id); limpos++; }
        else { const f = (s.falhas || 0) + 1; if (f > 5) { await sb.from("push_subs").delete().eq("id", s.id); limpos++; } else await sb.from("push_subs").update({ falhas: f }).eq("id", s.id); }
      }
    }
  }
  return json({ ok: true, enviados, limpos });
});
