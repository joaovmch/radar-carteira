// Perfil completo de uma empresa da B3 para a seção "Empresas": sobre a empresa, fotos, fatos,
// indicadores, dividendos, desempenho, analistas, reputação e notícias.
// Texto, fotos e balanço ficam em cache por 12 horas; gráfico, desempenho e analistas
// são renovados se tiverem mais de 15 minutos, e as notícias a cada hora.
import { SupabaseClient } from "jsr:@supabase/supabase-js@2";
import { atualizarDinamico, dentroDoLimite, perfilEmpresa, TICKER_RE } from "./fontes.ts";

export async function rodarEmpresa(sb: SupabaseClient, quem: { cron: boolean; userId: string | null }, body: any): Promise<[unknown, number]> {
  const t = String(body.ticker || "").toUpperCase();
  if (!TICKER_RE.test(t)) return [{ ok: false, erro: "ticker" }, 400];
  const { data: existe } = await sb.from("cotacoes").select("ticker").eq("ticker", t).maybeSingle();
  if (!existe) return [{ ok: false, erro: "nao_encontrada" }, 404];
  const { data: cache } = await sb.from("empresas").select("dados,atualizado_em").eq("ticker", t).maybeSingle();
  if (cache && Date.now() - Date.parse(cache.atualizado_em) < 12 * 36e5) {
    const d: any = cache.dados || {};
    const dinamico = d.dinamicoEm || d.atualizadoEm;
    if (dinamico && Date.now() - Date.parse(dinamico) < 15 * 60000) return [{ ok: true, dados: d }, 200];
    if (quem.userId && !(await dentroDoLimite(sb, quem.userId, "empresa_rapido", 400))) return [{ ok: true, dados: d }, 200];
    try { return [{ ok: true, dados: await atualizarDinamico(sb, t, d) }, 200]; }
    catch (_) { return [{ ok: true, dados: d }, 200]; }
  }
  if (quem.userId && !(await dentroDoLimite(sb, quem.userId, "empresa", 150))) {
    return cache ? [{ ok: true, dados: cache.dados }, 200] : [{ ok: false, erro: "limite" }, 429];
  }
  return [{ ok: true, dados: await perfilEmpresa(sb, t, 12, true) }, 200];
}
