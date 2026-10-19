import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const norm = (s: string) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// Agrupa os subsetores da B3 em setores amplos, usados na analise de diversificacao
const REGRAS: [RegExp, string][] = [
  [/segur|ressegur/, "Seguros"],
  [/banco|financeir|bolsa|holding|fideliza/, "Bancos e Financeiro"],
  [/energia eletrica/, "Energia Elétrica"],
  [/saneamento|^gas$/, "Saneamento e Gás"],
  [/petroleo|refino|exploracao e producao/, "Petróleo e Gás"],
  [/minera|minerais|siderurg|ferro e aco|cobre/, "Mineração e Siderurgia"],
  [/papel|celulose|quimic|petroquim|embalag|madeira|materiais diversos/, "Papel, Química e Materiais"],
  [/agricult|aliment|carnes|acucar|cerveja|fertiliz/, "Agro e Alimentos"],
  [/medicament|hospit|diagnost|saude/, "Saúde"],
  [/programas e servicos|computador|telecom/, "Tecnologia e Telecom"],
  [/incorpora|imove|imobil/, "Imóveis e Construção"],
  [/maq|maquina|material rodoviario|material de transporte|automove|armas|equipamento|produtos para constru|construcao pesada/, "Indústria"],
  [/rodovia|transporte|aluguel de carros|logist/, "Transporte e Logística"],
  [/educaciona/, "Educação e Serviços"],
  [/varejo|vestuario|tecido|calcado|eletrodomest|movei|acessorio|uso pessoal|produtos diversos|restaurante|viage|esportiv|evento|bicicleta|fios/, "Varejo e Consumo"],
  [/servicos diversos|outros/, "Educação e Serviços"],
];
// Pelo nome da empresa, quando a fonte nao traz o subsetor
const POR_NOME: [RegExp, string][] = [
  [/saneamento|sanepar|sabesp|copasa|aguas/, "Saneamento e Gás"],
  [/embraer|taurus|marcopolo|randon|weg /, "Indústria"],
  [/cyrela|mrv|construtora|incorporad/, "Imóveis e Construção"],
  [/localiza|azul s|gol linhas|logistica|rumo/, "Transporte e Logística"],
  [/klabin|suzano|celulose|papel/, "Papel, Química e Materiais"],
  [/brf|jbs|minerva|marfrig|alimentos/, "Agro e Alimentos"],
  [/transmissora|energia|eletric/, "Energia Elétrica"],
  [/seguridade|seguros/, "Seguros"],
  [/^bco |banco|itausa|bradespar/, "Bancos e Financeiro"],
  [/saude|oncoclinicas|hospital/, "Saúde"],
  [/educa/, "Educação e Serviços"],
];
const EN: Record<string, string> = {
  "finance": "Bancos e Financeiro", "utilities": "Energia Elétrica", "energy minerals": "Petróleo e Gás",
  "non-energy minerals": "Mineração e Siderurgia", "process industries": "Papel, Química e Materiais",
  "consumer non-durables": "Varejo e Consumo", "retail trade": "Varejo e Consumo", "consumer durables": "Varejo e Consumo",
  "consumer services": "Varejo e Consumo", "distribution services": "Varejo e Consumo", "health services": "Saúde",
  "health technology": "Saúde", "technology services": "Tecnologia e Telecom", "electronic technology": "Tecnologia e Telecom",
  "communications": "Tecnologia e Telecom", "producer manufacturing": "Indústria", "industrial services": "Indústria",
  "transportation": "Transporte e Logística", "commercial services": "Educação e Serviços", "miscellaneous": "Educação e Serviços",
};
function macro(sub: string | null, en: string | null, nome: string): string {
  const s = norm(sub || "");
  if (s) for (const [re, m] of REGRAS) if (re.test(s)) return m;
  const n = norm(nome);
  for (const [re, m] of POR_NOME) if (re.test(n)) return m;
  return EN[norm(en || "")] || "Outros";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  let forcar = false;
  try { forcar = !!(await req.json()).forcar; } catch (_) { /* corpo vazio */ }
  try {
    // Evita buscar de novo se a ultima atualizacao tem menos de 60 segundos
    const { data: ult } = await sb.from("cotacoes").select("atualizado_em").order("atualizado_em", { ascending: false }).limit(1);
    if (!forcar && ult && ult[0] && Date.now() - Date.parse(ult[0].atualizado_em) < 60_000) {
      return new Response(JSON.stringify({ ok: true, pulado: true, atualizadoEm: ult[0].atualizado_em }), { headers: { ...cors, "Content-Type": "application/json" } });
    }
    const r = await fetch("https://brapi.dev/api/quote/list?type=stock&limit=3000");
    if (!r.ok) throw new Error("brapi respondeu " + r.status);
    const d = await r.json();
    const lista = (d.stocks || []).filter((x: any) => /^[A-Z][A-Z0-9]{2}[A-Z]\d{1,2}$/.test(x.stock || "") && x.close != null);
    // Outras classes da mesma empresa (SAPR3, SAPR4, SAPR11) herdam o subsetor quando ele vem vazio
    const subPorRaiz: Record<string, string> = {};
    for (const x of lista) if (x.subsector) subPorRaiz[x.stock.slice(0, 4)] = x.subsector;
    const agora = new Date().toISOString();
    const rows = lista.map((x: any) => {
      const sub = x.subsector || subPorRaiz[x.stock.slice(0, 4)] || null;
      return {
        ticker: x.stock,
        nome: String(x.name || x.stock).slice(0, 60),
        preco: Math.round(x.close * 100) / 100,
        var_dia: Math.round((x.change || 0) * 100) / 100,
        volume: Math.round(x.volume || 0),
        setor: sub,
        setor_macro: macro(sub, x.sector, x.name || ""),
        valor_mercado_mi: x.market_cap ? Math.round(x.market_cap / 1e6) : null,
        atualizado_em: agora,
      };
    });
    if (rows.length < 100) throw new Error("lista incompleta: " + rows.length);
    const { error } = await sb.from("cotacoes").upsert(rows, { onConflict: "ticker" });
    if (error) throw error;
    return new Response(JSON.stringify({ ok: true, acoes: rows.length, atualizadoEm: agora }), { headers: { ...cors, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, erro: String((e as Error).message || e) }), { status: 502, headers: { ...cors, "Content-Type": "application/json" } });
  }
});
