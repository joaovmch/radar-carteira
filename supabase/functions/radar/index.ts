// Função única do Radar da Carteira (sem IA).
// Ações: "cotacoes" (preços de ações, FIIs, ETFs, BDRs e EUA), "analisar" (mercado, destaques e sinais),
// "empresa" (perfil completo), "buscar" (ação ou ETF dos EUA, ou cripto, fora da lista) "cripto" (criptomoedas) e "cambio" (conversor de moedas).
// Aceita só o agendamento do banco (cabeçalho x-cron-secret) ou usuários logados.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { admin, ATIVO_RE, cors, dentroDoLimite, json, quemChama, TICKER_RE } from "./fontes.ts";
import { atualizarCotacoes, buscarAtivoEua } from "./cotacoes.ts";
import { atualizarCripto, buscarCripto, CRIPTO_RE } from "./cripto.ts";
import { cambio } from "./cambio.ts";
import { rodarAnalise } from "./analisar.ts";
import { rodarEmpresa } from "./empresa.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ ok: false, erro: "metodo" }, 405);
  const sb = admin();
  const quem = await quemChama(req, sb);
  if (!quem.cron && !quem.userId) return json({ ok: false, erro: "login" }, 401);
  let body: any = {};
  try { body = await req.json(); } catch (_) { /* vazio */ }
  try {
    switch (body.acao) {
      case "cotacoes": {
        const r: any = await atualizarCotacoes(sb, quem.cron && !!body.forcar);
        r.cripto = await atualizarCripto(sb).then((c: any) => c.cripto ?? 0).catch(() => 0);
        return json(r, 200);
      }
      // Criptomoedas: negociadas 24 horas, atualizadas pelo agendamento a cada 10 minutos, todos os dias
      case "cripto": {
        const r: any = await atualizarCripto(sb, quem.cron && !!body.forcar);
        await cambio(sb).catch(() => null);
        return json(r, 200);
      }
      // Conversor de moedas: cotações do momento (guardadas por 30 s para não sobrecarregar a fonte)
      case "cambio": {
        if (quem.userId && !(await dentroDoLimite(sb, quem.userId, "cambio", 3000))) return json({ ok: false, erro: "limite" }, 429);
        return json({ ok: true, dados: await cambio(sb) }, 200);
      }
      case "analisar": { const [r, s] = await rodarAnalise(sb, quem, body); return json(r, s); }
      case "empresa": { const [r, s] = await rodarEmpresa(sb, quem, body); return json(r, s); }
      case "buscar": {
        // Ação ou ETF dos EUA que ainda não está na lista (ex.: PLTR): busca e grava a cotação
        const t = String(body.ticker || "").toUpperCase().trim();
        if (!ATIVO_RE.test(t) || TICKER_RE.test(t)) return json({ ok: false, erro: "ticker" }, 400);
        if (quem.userId && !(await dentroDoLimite(sb, quem.userId, "buscar", 60))) return json({ ok: false, erro: "limite" }, 429);
        const l = CRIPTO_RE.test(t) ? await buscarCripto(sb, t) : await buscarAtivoEua(sb, t);
        return json(l ? { ok: true, ativo: l } : { ok: false, erro: "nao_encontrada" }, l ? 200 : 404);
      }
      default: return json({ ok: false, erro: "acao" }, 400);
    }
  } catch (e) {
    return json({ ok: false, erro: String((e as Error).message || e) }, 502);
  }
});
