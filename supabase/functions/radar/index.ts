// Função única do Radar da Carteira (sem IA).
// Ações: "cotacoes" (preços da B3), "analisar" (mercado, destaques e sinais) e "empresa" (perfil completo).
// Aceita só o agendamento do banco (cabeçalho x-cron-secret) ou usuários logados.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { admin, cors, json, quemChama } from "./fontes.ts";
import { atualizarCotacoes } from "./cotacoes.ts";
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
      case "cotacoes": return json(await atualizarCotacoes(sb, quem.cron && !!body.forcar), 200);
      case "analisar": { const [r, s] = await rodarAnalise(sb, quem, body); return json(r, s); }
      case "empresa": { const [r, s] = await rodarEmpresa(sb, quem, body); return json(r, s); }
      default: return json({ ok: false, erro: "acao" }, 400);
    }
  } catch (e) {
    return json({ ok: false, erro: String((e as Error).message || e) }, 502);
  }
});
