// Câmbio para o conversor de moedas: cotação comercial de várias moedas em reais (TradingView, 24 horas)
// e das principais criptomoedas (tabela cotacoes). Guardado em painel.id = "cambio" e renovado no máximo a cada 30 s.
import { SupabaseClient } from "jsr:@supabase/supabase-js@2";
import { buscarTV } from "./fontes.ts";

export const MOEDAS: Record<string, string> = {
  USD: "Dólar americano", EUR: "Euro", GBP: "Libra esterlina", ARS: "Peso argentino", CLP: "Peso chileno",
  UYU: "Peso uruguaio", PYG: "Guarani paraguaio", MXN: "Peso mexicano", CAD: "Dólar canadense", AUD: "Dólar australiano",
  CHF: "Franco suíço", JPY: "Iene japonês", CNY: "Yuan chinês",
};
const CRIPTOS = ["BTC", "ETH", "USDT", "SOL", "XRP"];

export async function cambio(sb: SupabaseClient, forcar = false) {
  const { data: ant } = await sb.from("painel").select("dados,atualizado_em").eq("id", "cambio").maybeSingle();
  if (!forcar && ant && Date.now() - Date.parse(ant.atualizado_em) < 30_000) return ant.dados;
  const r = await buscarTV("forex", { symbols: { tickers: Object.keys(MOEDAS).map((m) => `FX_IDC:${m}BRL`) }, columns: ["close", "change"] });
  const moedas: Record<string, { nome: string; valor: number; varDia: number | null }> = { ...(ant?.dados?.moedas || {}) };
  for (const row of r?.data || []) {
    const m = String(row.s || "").replace("FX_IDC:", "").replace(/BRL$/, "");
    const v = row.d?.[0];
    if (MOEDAS[m] && typeof v === "number" && v > 0) moedas[m] = { nome: MOEDAS[m], valor: v, varDia: typeof row.d?.[1] === "number" ? Math.round(row.d[1] * 100) / 100 : null };
  }
  const { data: cr } = await sb.from("cotacoes").select("ticker,nome,preco,var_dia").in("ticker", CRIPTOS.map((c) => c + "-BRL"));
  const cripto: Record<string, { nome: string; valor: number; varDia: number | null }> = {};
  for (const c of cr || []) cripto[String(c.ticker).replace("-BRL", "")] = { nome: c.nome, valor: Number(c.preco), varDia: c.var_dia != null ? Number(c.var_dia) : null };
  if (!moedas.USD) throw new Error("câmbio indisponível");
  const dados = { moedas, cripto, fonte: "TradingView (câmbio comercial) e CoinGecko (cripto)", atualizadoEm: new Date().toISOString() };
  await sb.from("painel").upsert({ id: "cambio", dados, atualizado_em: dados.atualizadoEm });
  return dados;
}
