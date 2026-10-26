// Cotações de ações, FIIs, ETFs e BDRs da B3 (brapi.dev) e de ações e ETFs dos EUA (TradingView), gravadas na tabela cotacoes.
import { SupabaseClient } from "jsr:@supabase/supabase-js@2";
import { ATIVO_RE, buscarTV, TICKER_RE } from "./fontes.ts";

const norm = (s: string) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

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

const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));
// brapi.dev aceita uma consulta por vez no plano gratuito: chamadas em sequência, com uma nova tentativa
async function brapi(tipo: "stock" | "fund" | "bdr"): Promise<any[]> {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(`https://brapi.dev/api/quote/list?type=${tipo}&limit=3000`);
    if (r.status === 429) { await espera(1500); continue; }
    if (!r.ok) throw new Error("brapi respondeu " + r.status);
    const d = await r.json();
    return (d.stocks || []).filter((x: any) => TICKER_RE.test(x.stock || "") && x.close != null);
  }
  throw new Error("brapi ocupada");
}
// Nome dos fundos e BDRs (a brapi só traz o código) e logos, pelo TradingView
async function nomesB3(tickers: string[]) {
  const out: Record<string, { nome: string; logo: string | null }> = {};
  for (let i = 0; i < tickers.length; i += 300) {
    try {
      const d = await buscarTV("brazil", { symbols: { tickers: tickers.slice(i, i + 300).map((t) => "BMFBOVESPA:" + t) }, columns: ["description", "logoid"] });
      for (const row of d?.data || []) {
        const t = String(row.s || "").split(":")[1];
        if (t) out[t] = { nome: String(row.d?.[0] || ""), logo: row.d?.[1] || null };
      }
    } catch (_) { /* fica sem nome */ }
  }
  return out;
}
const limpaNome = (s: string) => s.replace(/\s*[-–]?\s*(Fundo de (Investimento|[IÍ]ndice)|Fundo Imobili|FII\b|FIAGRO|Fiagro|Cotas\b|Responsabilidade Limitada).*$/i, "").replace(/\s+(Shs|Brazilian Depositary|Brazilian Depository|Unsponsored|Sponsored)\b.*$/i, "").trim() || s;

// Ações e ETFs dos EUA (TradingView): as maiores por valor de mercado, os maiores ETFs e o que estiver nas carteiras
const TV_EUA = ["name", "description", "close", "change", "volume", "market_cap_basic", "logoid", "sector", "industry", "exchange", "type", "aum", "expense_ratio"];
const BOLSAS_EUA = ["NASDAQ", "NYSE", "AMEX"];
function linhaEua(row: any, agora: string) {
  const v: Record<string, any> = {};
  TV_EUA.forEach((c, k) => { v[c] = row.d?.[k] ?? null; });
  if (!v.name || v.close == null || !ATIVO_RE.test(v.name)) return null;
  const etf = v.type === "fund";
  return {
    ticker: v.name, nome: String(v.description || v.name).slice(0, 60),
    preco: Math.round(v.close * 100) / 100, var_dia: Math.round((v.change || 0) * 100) / 100, volume: Math.round(v.volume || 0),
    setor: etf ? "ETF" : v.industry || null, setor_macro: etf ? "ETFs" : EN[norm(v.sector || "")] || "Outros",
    valor_mercado_mi: etf ? (v.aum ? Math.round(v.aum / 1e6) : null) : v.market_cap_basic ? Math.round(v.market_cap_basic / 1e6) : null,
    classe: etf ? "etf_ext" : "acao_ext", moeda: "USD", bolsa: String(v.exchange || "NASDAQ"), logo: v.logoid || null,
    extra: etf ? { taxaAdm: v.expense_ratio ?? null, patrimonio: v.aum ?? null } : null,
    atualizado_em: agora,
  };
}
async function eua(sb: SupabaseClient, agora: string) {
  const { data: cart } = await sb.from("carteira").select("ticker");
  const daCarteira = [...new Set((cart || []).map((c: any) => String(c.ticker)).filter((t) => !TICKER_RE.test(t)))];
  const filtroBolsa = { left: "exchange", operation: "in_range", right: BOLSAS_EUA };
  const consultas = [
    buscarTV("america", { filter: [{ left: "type", operation: "equal", right: "stock" }, { left: "subtype", operation: "equal", right: "common" }, filtroBolsa], columns: TV_EUA, sort: { sortBy: "market_cap_basic", sortOrder: "desc" }, range: [0, 150] }),
    buscarTV("america", { filter: [{ left: "typespecs", operation: "has", right: ["etf"] }, filtroBolsa], columns: TV_EUA, sort: { sortBy: "aum", sortOrder: "desc" }, range: [0, 70] }),
  ];
  if (daCarteira.length) consultas.push(buscarTV("america", { filter: [{ left: "name", operation: "in_range", right: daCarteira }, filtroBolsa], columns: TV_EUA, range: [0, 200] }));
  const res = await Promise.allSettled(consultas);
  const rows: Record<string, any> = {};
  for (const r of res) if (r.status === "fulfilled") for (const row of r.value?.data || []) { const l = linhaEua(row, agora); if (l && !rows[l.ticker]) rows[l.ticker] = l; }
  return Object.values(rows);
}
export async function buscarAtivoEua(sb: SupabaseClient, t: string) {
  const d = await buscarTV("america", { filter: [{ left: "name", operation: "equal", right: t }, { left: "exchange", operation: "in_range", right: BOLSAS_EUA }], columns: TV_EUA, range: [0, 3] });
  const l = (d?.data || []).map((row: any) => linhaEua(row, new Date().toISOString())).find(Boolean);
  if (!l) return null;
  const { error } = await sb.from("cotacoes").upsert(l, { onConflict: "ticker" });
  if (error) throw error;
  return l;
}

export async function atualizarCotacoes(sb: SupabaseClient, forcar: boolean) {
  // Evita buscar de novo se a ultima atualizacao tem menos de 60 segundos
  const { data: ult } = await sb.from("cotacoes").select("atualizado_em").eq("classe", "acao").order("atualizado_em", { ascending: false }).limit(1);
  if (!forcar && ult && ult[0] && Date.now() - Date.parse(ult[0].atualizado_em) < 60_000) {
    return { ok: true, pulado: true, atualizadoEm: ult[0].atualizado_em };
  }
  const agora = new Date().toISOString();
  const lista = await brapi("stock");
  // Outras classes da mesma empresa (SAPR3, SAPR4, SAPR11) herdam o subsetor quando ele vem vazio
  const subPorRaiz: Record<string, string> = {};
  for (const x of lista) if (x.subsector) subPorRaiz[x.stock.slice(0, 4)] = x.subsector;
  const acoes = lista.map((x: any) => {
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
      classe: "acao", moeda: "BRL", bolsa: "B3", logo: null, extra: null,
      atualizado_em: agora,
    };
  });
  if (acoes.length < 100) throw new Error("lista incompleta: " + acoes.length);
  const acaoSet = new Set(acoes.map((r) => r.ticker));

  // FIIs, ETFs e BDRs da B3 (uma consulta por vez na brapi)
  const { data: cart } = await sb.from("carteira").select("ticker");
  const naCarteira = new Set((cart || []).map((c: any) => String(c.ticker)));
  const fundos = (await brapi("fund").catch(() => [])).filter((x: any) => !acaoSet.has(x.stock) && ((x.volume || 0) > 0 || naCarteira.has(x.stock)));
  const bdrs = (await brapi("bdr").catch(() => [])).filter((x: any) => !acaoSet.has(x.stock)).sort((a: any, b: any) => (b.volume || 0) - (a.volume || 0))
    .filter((x: any, i: number) => i < 200 || naCarteira.has(x.stock));
  const nomes = await nomesB3([...fundos, ...bdrs].map((x: any) => x.stock));
  const outros = [...fundos.map((x: any) => ({ x, classe: x.subType === "etf" ? "etf" : "fii" })), ...bdrs.map((x: any) => ({ x, classe: "bdr" }))].map(({ x, classe }) => {
    const tv = nomes[x.stock];
    const nome = limpaNome(tv?.nome || (x.name !== x.stock ? x.name : "") || x.stock);
    return {
      ticker: x.stock, nome: nome.slice(0, 60),
      preco: Math.round(x.close * 100) / 100, var_dia: Math.round((x.change || 0) * 100) / 100, volume: Math.round(x.volume || 0),
      setor: classe === "fii" ? x.subsector || "Outros" : classe === "etf" ? "ETF" : null,
      setor_macro: classe === "fii" ? "Fundos Imobiliários" : classe === "etf" ? "ETFs" : EN[norm(x.sector || "")] || "Outros",
      valor_mercado_mi: classe === "bdr" && x.market_cap ? Math.round(x.market_cap / 1e6) : null,
      classe, moeda: "BRL", bolsa: "B3", logo: tv?.logo || null, extra: null,
      atualizado_em: agora,
    };
  });
  const exterior = await eua(sb, agora).catch(() => []);

  const todas = [...acoes, ...outros, ...exterior];
  for (let i = 0; i < todas.length; i += 500) {
    const { error } = await sb.from("cotacoes").upsert(todas.slice(i, i + 500), { onConflict: "ticker" });
    if (error) throw error;
  }
  return { ok: true, acoes: acoes.length, fiis: outros.filter((r) => r.classe === "fii").length, etfs: outros.filter((r) => r.classe === "etf").length, bdrs: bdrs.length, exterior: exterior.length, atualizadoEm: agora };
}
