// Criptomoedas (CoinGecko, consulta pública): preço em reais, variação de 24 h, valor de mercado e dados
// da moeda, gravados na tabela cotacoes com classe "cripto" e código no formato SIMBOLO-BRL (BTC-BRL).
import { SupabaseClient } from "jsr:@supabase/supabase-js@2";

const CG = "https://api.coingecko.com/api/v3";
export const CRIPTO_RE = /^[A-Z0-9]{2,6}-BRL$/;
// Versões "embrulhadas" ou de staking repetem o preço de outra moeda: ficam de fora da lista
const RUIDO = /wrapped|staked|bridged|restaked|liquid staking|binance-peg|\bweth\b|\bwbtc\b|\bsteth\b|cbbtc|bitcoin bep2/i;
const ESTAVEL = /usd|tether|dai\b|stable|euro|brl/i;

async function cg(path: string) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 15000);
  try {
    const r = await fetch(CG + path, { headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0 (Radar da Carteira)" }, signal: ac.signal });
    if (!r.ok) throw new Error("coingecko respondeu " + r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

const sig = (n: number) => (n >= 100 ? Math.round(n * 100) / 100 : Number(n.toPrecision(6)));
function linha(x: any, agora: string) {
  const sym = String(x.symbol || "").toUpperCase();
  const preco = Number(x.current_price);
  if (!/^[A-Z0-9]{2,6}$/.test(sym) || !(preco > 0)) return null;
  // A variação de 24 h é calculada pelo valor em reais (o percentual da fonte às vezes vem em outra base)
  const ch = Number(x.price_change_24h);
  const ant = preco - ch;
  const var24 = isFinite(ch) && ant > 0 ? (preco / ant - 1) * 100 : Number(x.price_change_percentage_24h) || 0;
  const r = (v: any, d = 2) => (typeof v === "number" && isFinite(v) ? Math.round(v * 10 ** d) / 10 ** d : null);
  return {
    ticker: sym + "-BRL", nome: String(x.name || sym).slice(0, 60),
    preco: sig(preco), var_dia: Math.round(var24 * 100) / 100, volume: Math.round(Number(x.total_volume) || 0),
    setor: "Criptomoeda", setor_macro: "Cripto",
    valor_mercado_mi: x.market_cap ? Math.round(x.market_cap / 1e6) : null,
    classe: "cripto", moeda: "BRL", bolsa: "CRIPTO", logo: null,
    extra: {
      id: String(x.id || ""), img: /^https:\/\/(coin-images|assets)\.coingecko\.com\//.test(x.image || "") ? x.image : null,
      rank: x.market_cap_rank ?? null, ath: r(x.ath, 8), athPct: r(x.ath_change_percentage, 1), athData: x.ath_date ? String(x.ath_date).slice(0, 10) : null,
      circulante: r(x.circulating_supply, 0), maxima: r(x.max_supply, 0), ret7d: r(x.price_change_percentage_7d_in_currency, 1),
      ret30d: r(x.price_change_percentage_30d_in_currency, 1), ret1a: r(x.price_change_percentage_1y_in_currency, 1),
      estavel: ESTAVEL.test(String(x.id) + " " + String(x.name)) && Math.abs(var24) < 3,
    },
    atualizado_em: agora,
  };
}

// As 100 maiores criptomoedas por valor de mercado e as que estiverem nas carteiras
export async function atualizarCripto(sb: SupabaseClient, forcar = false) {
  const { data: ult } = await sb.from("cotacoes").select("atualizado_em").eq("classe", "cripto").order("atualizado_em", { ascending: false }).limit(1);
  if (!forcar && ult && ult[0] && Date.now() - Date.parse(ult[0].atualizado_em) < 60_000) return { ok: true, pulado: true };
  const agora = new Date().toISOString();
  const lista: any[] = await cg("/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=150&page=1&price_change_percentage=24h,7d,30d,1y");
  const rows: Record<string, any> = {};
  for (const x of lista || []) {
    if (RUIDO.test(String(x.id) + " " + String(x.name))) continue;
    const l = linha(x, agora);
    if (l && !rows[l.ticker]) rows[l.ticker] = l;
    if (Object.keys(rows).length >= 100) break;
  }
  // Criptos das carteiras que não estão entre as maiores: busca pelo id já salvo
  const { data: cart } = await sb.from("carteira").select("ticker");
  const faltam = [...new Set((cart || []).map((c: any) => String(c.ticker)).filter((t) => CRIPTO_RE.test(t) && !rows[t]))];
  if (faltam.length) {
    const { data: salvos } = await sb.from("cotacoes").select("ticker,extra").in("ticker", faltam);
    const ids = (salvos || []).map((s: any) => s.extra?.id).filter((x: any) => /^[a-z0-9\-]+$/.test(x || ""));
    if (ids.length) {
      const extra: any[] = await cg(`/coins/markets?vs_currency=brl&ids=${ids.join(",")}&price_change_percentage=24h,7d,30d,1y`).catch(() => []);
      for (const x of extra || []) { const l = linha(x, agora); if (l) rows[l.ticker] = l; }
    }
  }
  const todas = Object.values(rows);
  if (todas.length < 20) throw new Error("lista de cripto incompleta: " + todas.length);
  const { error } = await sb.from("cotacoes").upsert(todas, { onConflict: "ticker" });
  if (error) throw error;
  return { ok: true, cripto: todas.length, atualizadoEm: agora };
}

// Uma cripto fora da lista (ex.: PEPE-BRL): procura pelo símbolo e grava a cotação
export async function buscarCripto(sb: SupabaseClient, t: string) {
  const sym = t.replace(/-BRL$/, "");
  const s = await cg(`/search?query=${encodeURIComponent(sym)}`);
  const coin = (s?.coins || []).filter((c: any) => String(c.symbol || "").toUpperCase() === sym && !RUIDO.test(String(c.id) + " " + String(c.name)))
    .sort((a: any, b: any) => (a.market_cap_rank ?? 1e9) - (b.market_cap_rank ?? 1e9))[0];
  if (!coin || !/^[a-z0-9\-]+$/.test(coin.id || "")) return null;
  const m: any[] = await cg(`/coins/markets?vs_currency=brl&ids=${coin.id}&price_change_percentage=24h,7d,30d,1y`);
  const l = m?.[0] ? linha(m[0], new Date().toISOString()) : null;
  if (!l) return null;
  const { error } = await sb.from("cotacoes").upsert(l, { onConflict: "ticker" });
  if (error) throw error;
  return l;
}
