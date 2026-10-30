// Fontes públicas usadas pelo Radar da Carteira (sem IA):
// Yahoo Finance (histórico de preços), Banco Central (Selic), Google Notícias (RSS),
// Wikidata/Wikipedia (perfil e fotos da empresa) e StatusInvest (indicadores e dividendos).
import { createClient, SupabaseClient } from "jsr:@supabase/supabase-js@2";

export const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-cron-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
export const json = (o: unknown, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { ...cors, "Content-Type": "application/json" } });

export const TICKER_RE = /^[A-Z][A-Z0-9]{2}[A-Z]\d{1,2}$/; // código da B3
export const ATIVO_RE = /^[A-Z][A-Z0-9.\-]{0,9}$/; // B3 ou EUA (VOO, AAPL, BRK.B)
export type Classe = "acao" | "fii" | "etf" | "bdr" | "acao_ext" | "etf_ext" | "cripto";
export const CRIPTO = (c: string | null | undefined) => c === "cripto";
export const EXTERIOR = (c: string | null | undefined) => c === "acao_ext" || c === "etf_ext";
export const FUNDO = (c: string | null | undefined) => c === "fii" || c === "etf" || c === "etf_ext";
// Símbolo no Yahoo Finance: B3 com ".SA"; EUA com hífen no lugar do ponto (BRK.B -> BRK-B)
// Cripto: o próprio código (BTC-BRL), montado a partir do par em dólar e do câmbio em historico()
export const simboloYahoo = (t: string, classe?: string | null) => (CRIPTO(classe) ? t : EXTERIOR(classe) ? t.replace(/\./g, "-") : t + ".SA");
export const moedaSimb = (m?: string | null) => (m === "USD" ? "US$" : "R$");
const UA = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
  "Accept-Language": "pt-BR,pt;q=0.9",
};

export function admin(): SupabaseClient {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
}

// Quem está chamando: o agendamento do banco (cabeçalho secreto) ou um usuário logado.
export async function quemChama(req: Request, sb: SupabaseClient): Promise<{ cron: boolean; userId: string | null }> {
  const seg = req.headers.get("x-cron-secret");
  if (seg) {
    const { data } = await sb.rpc("cron_segredo_ok", { s: seg });
    if (data === true) return { cron: true, userId: null };
  }
  const tok = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!tok) return { cron: false, userId: null };
  const { data } = await sb.auth.getUser(tok);
  return { cron: false, userId: data?.user?.id || null };
}

// Limite diário de chamadas por usuário. Retorna true se ainda pode.
export async function dentroDoLimite(sb: SupabaseClient, uid: string, acao: string, limite: number) {
  const { data, error } = await sb.rpc("uso_registrar", { uid, acao, limite });
  return !error && data !== -1;
}

async function buscar(url: string, ms = 12000, extra: Record<string, string> = {}): Promise<Response> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), ms);
  try {
    return await fetch(url, { headers: { ...UA, ...extra }, signal: ac.signal });
  } finally {
    clearTimeout(t);
  }
}
async function texto(url: string, ms = 12000) {
  const r = await buscar(url, ms);
  if (!r.ok) throw new Error(`${new URL(url).host} respondeu ${r.status}`);
  return await r.text();
}
async function obj(url: string, ms = 12000, extra: Record<string, string> = {}) {
  const r = await buscar(url, ms, { Accept: "application/json", ...extra });
  if (!r.ok) throw new Error(`${new URL(url).host} respondeu ${r.status}`);
  return await r.json();
}

const pl = (n: number, um: string, varios: string) => `${n} ${n === 1 ? um : varios}`;
const r2 = (n: number | null | undefined, d = 2) => (n == null || !isFinite(n) ? null : d === 2 && n !== 0 && Math.abs(n) < 1 ? Number(n.toPrecision(5)) : Math.round(n * 10 ** d) / 10 ** d);

export function decodificar(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
}
const semTags = (s: string) => decodificar(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const num = (s: string | null | undefined) => {
  if (s == null) return null;
  const t = String(s).replace(/[R$%\s]/g, "").replace(/\./g, "").replace(",", ".");
  if (!t || t === "-" || t === "--") return null;
  const n = Number(t);
  return isFinite(n) ? n : null;
};

/* ---------------- Preços (Yahoo Finance) ---------------- */
export type Historico = { ts: number[]; close: number[]; vol: number[]; preco: number | null; anterior: number | null };
export async function historico(simbolo: string, range = "1y"): Promise<Historico> {
  if (/^[A-Z0-9]{2,6}-BRL$/.test(simbolo)) return historicoCripto(simbolo, range);
  const d = await obj(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(simbolo)}?range=${range}&interval=1d`);
  const res = d?.chart?.result?.[0];
  if (!res) throw new Error("sem histórico para " + simbolo);
  const q = res.indicators?.quote?.[0] || {};
  const ts: number[] = [], close: number[] = [], vol: number[] = [];
  (res.timestamp || []).forEach((t: number, i: number) => {
    const c = q.close?.[i];
    if (c != null && isFinite(c)) { ts.push(t); close.push(c); vol.push(q.volume?.[i] || 0); }
  });
  const m = res.meta || {};
  return { ts, close, vol, preco: m.regularMarketPrice ?? close.at(-1) ?? null, anterior: m.chartPreviousClose ?? null };
}

// Cripto em reais: par em dólar do Yahoo (BTC-USD) vezes o dólar do mesmo dia; se o Yahoo não tiver a moeda,
// usa o histórico diário da CoinGecko
async function historicoCripto(t: string, range: string): Promise<Historico> {
  try {
    const [a, f] = await Promise.all([historico(t.replace(/-BRL$/, "-USD"), range), historico("BRL=X", range)]);
    if (a.close.length < 5 || f.close.length < 5) throw new Error("curto");
    const ts: number[] = [], close: number[] = [], vol: number[] = [];
    let j = 0, fxv = f.close[0];
    for (let i = 0; i < a.ts.length; i++) {
      while (j < f.ts.length && f.ts[j] <= a.ts[i] + 43200) { fxv = f.close[j]; j++; }
      ts.push(a.ts[i]); close.push(a.close[i] * fxv); vol.push(a.vol[i]);
    }
    const fxAgora = f.preco ?? f.close.at(-1)!;
    return { ts, close, vol, preco: a.preco != null ? a.preco * fxAgora : close.at(-1) ?? null, anterior: null };
  } catch (_) {
    const sym = t.replace(/-BRL$/, "");
    const s = await obj(`https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(sym)}`);
    const coin = (s?.coins || []).filter((c: any) => String(c.symbol || "").toUpperCase() === sym).sort((x: any, y: any) => (x.market_cap_rank ?? 1e9) - (y.market_cap_rank ?? 1e9))[0];
    if (!coin) throw new Error("sem histórico para " + t);
    const dias = range === "1mo" ? 30 : range === "5d" ? 5 : 365;
    const m = await obj(`https://api.coingecko.com/api/v3/coins/${encodeURIComponent(coin.id)}/market_chart?vs_currency=brl&days=${dias}&interval=daily`);
    const ts: number[] = [], close: number[] = [], vol: number[] = [];
    (m?.prices || []).forEach(([ms, v]: [number, number], i: number) => { if (v > 0) { ts.push(Math.round(ms / 1000)); close.push(v); vol.push(m.total_volumes?.[i]?.[1] || 0); } });
    if (close.length < 5) throw new Error("sem histórico para " + t);
    return { ts, close, vol, preco: close.at(-1)!, anterior: null };
  }
}

export function indicadores(h: Historico) {
  const c = h.close, n = c.length;
  if (n < 5) return null;
  const ult = h.preco ?? c[n - 1];
  const ret = (k: number) => (n > k ? (ult / c[n - 1 - k] - 1) * 100 : null);
  const mm = (k: number) => (n >= k ? c.slice(n - k).reduce((a, b) => a + b, 0) / k : null);
  let ganho = 0, perda = 0;
  for (let i = Math.max(1, n - 14); i < n; i++) { const d = c[i] - c[i - 1]; if (d > 0) ganho += d; else perda -= d; }
  const rsi = perda === 0 ? 100 : 100 - 100 / (1 + ganho / perda);
  const rets: number[] = [];
  for (let i = Math.max(1, n - 21); i < n; i++) rets.push(Math.log(c[i] / c[i - 1]));
  const media = rets.reduce((a, b) => a + b, 0) / (rets.length || 1);
  const dp = Math.sqrt(rets.reduce((a, b) => a + (b - media) ** 2, 0) / Math.max(1, rets.length - 1));
  const ano = c.slice(Math.max(0, n - 252));
  const max = Math.max(...ano), min = Math.min(...ano);
  return {
    preco: r2(ult), ret5d: r2(ret(5)), ret1m: r2(ret(21)), ret3m: r2(ret(63)), ret6m: r2(ret(126)), ret12m: r2(ret(n - 1 >= 250 ? 250 : n - 1)),
    mm20: r2(mm(20)), mm50: r2(mm(50)), mm200: r2(mm(200)), rsi: r2(rsi, 0), volAnual: r2(dp * Math.sqrt(252) * 100, 1),
    max52: r2(max), min52: r2(min), distMax: r2((ult / max - 1) * 100, 1),
  };
}

// Cotação de fechamento de cada dia do último ano, para o gráfico interativo do perfil
export function serieSemanal(h: Historico) {
  const out: [number, number][] = [];
  for (let i = 0; i < h.ts.length; i++) out.push([h.ts[i], r2(h.close[i])!]);
  if (out.length && h.preco != null) out[out.length - 1][1] = r2(h.preco)!;
  return out;
}

/* ---------------- Notícias (Google Notícias RSS) ---------------- */
const POS = /\b(sobe|subindo|alta|avan[çc]a|dispara|salta|recorde|lucro (cresce|sobe|avan|dispara|recorde)|supera|melhora|eleva|eleva[çc][aã]o|compra|recomenda[çc][aã]o de compra|dividendos?|proventos|jcp|recompra|aprova|ganha|otimis|valoriza|forte|cresce|expans|contrato|acordo|upgrade|positiv|bate|surpreende)/i;
const NEG = /\b(cai|caindo|queda|recua|despenca|desaba|tomba|afunda|preju[ií]zo|perde|perda|rebaix|corta|corte|reduz|piora|fraco|fraude|investiga|recupera[çc][aã]o judicial|fal[eê]ncia|multa|processo|greve|acidente|crise|d[ií]vida (sobe|cresce)|downgrade|venda|vend[ae]r|negativ|risco|alerta|pressiona|frustra|abaixo|rombo|escândalo|denúncia|medo|p[aâ]nico|tens[aã]o|incerteza|turbul[eê]ncia|volatilidade)/i;
const GRAVE = /recupera[çc][aã]o judicial|fal[eê]ncia|fraude|esc[aâ]ndalo|investiga[çc][aã]o|opera[çc][aã]o da pol[ií]cia|rombo/i;

export function tom(titulo: string): "positivo" | "negativo" | "neutro" {
  const p = POS.test(titulo), n = NEG.test(titulo);
  if (p && !n) return "positivo";
  if (n && !p) return "negativo";
  return "neutro";
}

export type Noticia = { titulo: string; url: string; fonte: string; quando: string; data: string; tom: string; grave?: boolean };
function quando(ms: number) {
  const m = Math.round((Date.now() - ms) / 60000);
  if (m < 60) return `há ${Math.max(1, m)} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `há ${h} h`;
  const d = Math.round(h / 24);
  return d === 1 ? "ontem" : `há ${d} dias`;
}
function lerRss(xml: string, bing: boolean, dias: number): Noticia[] {
  const out: Noticia[] = [];
  const limite = Date.now() - dias * 864e5;
  for (const it of xml.split("<item>").slice(1)) {
    const g = (tag: string) => { const m = it.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)); return m ? decodificar(m[1]).trim() : ""; };
    const fonte = (bing ? g("News:Source") : g("source")).replace(/ on MSN$/, "");
    let titulo = g("title");
    if (fonte && titulo.endsWith(" - " + fonte)) titulo = titulo.slice(0, -(fonte.length + 3));
    let link = g("link");
    if (bing) { try { link = new URL(link).searchParams.get("url") || link; } catch (_) { /* mantém */ } }
    const dt = Date.parse(g("pubDate"));
    if (!titulo || !/^https?:\/\//.test(link) || (!isNaN(dt) && dt < limite)) continue;
    out.push({ titulo, url: link.replace(/^http:/, "https:"), fonte: fonte || (bing ? "Bing Notícias" : "Google Notícias"), data: isNaN(dt) ? "" : new Date(dt).toISOString(), quando: isNaN(dt) ? "" : quando(dt), tom: tom(titulo), ...(GRAVE.test(titulo) ? { grave: true } : {}) });
  }
  return out;
}
// Páginas de cotação/indicadores que o Google indexa como "notícia" e não trazem fato novo
const LIXO_NOTICIA = /Cota[çc][aã]o hoje\s*[—–-]|^A[çc][aã]o [A-Z0-9.]+:\s*Cota|Resultados, Dividendos, Cota[çc][aã]o e Indicadores|^[A-Z]{3,5}\d{1,2}\s*[-–]\s*[^-–]+\s*[-–]\s*Cota/i;
const NOME_RUIDO = /\b(inc|corp|corporation|co|ltd|plc|holdings?|group|company|class [a-c]|common stock|ordinary shares|shares|trust|etf|fund|index|sa|s\.a)\b\.?/gi;
const INDICES_ETF: [RegExp, string][] = [
  [/s&p ?500|sp ?500/i, "S&P 500"], [/nasdaq[- ]?100|qqq/i, "Nasdaq-100"], [/russell ?2000/i, "Russell 2000"],
  [/dow jones/i, "Dow Jones"], [/total stock market/i, "Total Stock Market"], [/total world/i, "Total World"],
];
const escRe = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Monta a busca de notícias de um ativo e o filtro que descarta manchetes sem relação.
// Ativos dos EUA têm códigos que são palavras comuns (VOO = "voo" de avião, ON, ALL, COST...),
// então nunca buscamos o código sozinho: usamos o nome do fundo/empresa e exigimos que o
// título cite o nome, o índice ou o código EM MAIÚSCULAS.
export function buscaNoticias(ticker: string, nome: string, classe?: string | null) {
  const nm = String(nome || ticker).replace(/\s*\(.*\)$/, "").trim();
  if (CRIPTO(classe)) {
    // Cripto: pelo nome (Bitcoin, Solana) e pelo símbolo em maiúsculas (BTC, SOL)
    const sym = ticker.replace(/-BRL$/, "");
    const reSym = new RegExp(`(^|[^A-Za-z])${escRe(sym)}([^A-Za-z]|$)`);
    const chaveC = nm.toLowerCase();
    return {
      consulta: `"${nm}" OR "${sym}" cripto OR "${sym}" criptomoeda`,
      relevante: (titulo: string) => titulo.toLowerCase().includes(chaveC) || reSym.test(titulo),
      exterior: true,
    };
  }
  if (!EXTERIOR(classe)) {
    return { consulta: ticker.length <= 2 ? `"${nm}"` : `"${ticker}" OR "${nm}"`, relevante: (_t: string) => true, exterior: false };
  }
  const nucleo = nm.replace(NOME_RUIDO, " ").replace(/[,.]+/g, " ").replace(/\s+/g, " ").trim() || nm;
  const idx = classe === "etf_ext" ? INDICES_ETF.find(([re]) => re.test(nm))?.[1] || null : null;
  const termos = [`"${nucleo}"`];
  if (classe === "etf_ext") termos.push(`"ETF ${ticker}"`, `"${ticker} ETF"`);
  if (idx) termos.push(`"${idx}"`);
  // Palavra que identifica o emissor/empresa ("Vanguard", "Apple"); a 1ª com 4+ letras
  const chave = (nucleo.split(" ").find((w) => w.replace(/[^\p{L}]/gu, "").length >= 4) || nucleo).toLowerCase();
  const reTicker = new RegExp(`(^|[^A-Za-z])${escRe(ticker)}([^A-Za-z]|$)`); // diferencia maiúsculas: "VOO" ≠ "voo"
  const relevante = (titulo: string) => {
    const t = titulo.toLowerCase();
    return reTicker.test(titulo) || t.includes(nucleo.toLowerCase()) || t.includes(chave) || (!!idx && t.includes(idx.toLowerCase()));
  };
  return { consulta: [...new Set(termos)].join(" OR "), relevante, exterior: true };
}

async function buscarRss(consulta: string, dias: number, ingles = false): Promise<Noticia[]> {
  let lista: Noticia[] = [];
  const reg = ingles ? "hl=en-US&gl=US&ceid=US:en" : "hl=pt-BR&gl=BR&ceid=BR:pt-419";
  try {
    const xml = await texto(`https://news.google.com/rss/search?q=${encodeURIComponent(consulta + ` when:${dias}d`)}&${reg}`, 10000);
    lista = lerRss(xml, false, dias);
  } catch (_) { /* tenta o Bing */ }
  if (!lista.length && !ingles) {
    const simples = consulta.replace(/"/g, "").replace(/\s+OR\s+/g, " ").trim();
    const xml = await texto(`https://www.bing.com/news/search?q=${encodeURIComponent(simples)}&format=rss&setlang=pt-BR&cc=BR`, 10000);
    lista = lerRss(xml, true, dias);
  }
  return lista;
}

// Google Notícias; se falhar ou vier vazio, Bing Notícias. Com "filtro", descarta manchetes
// sem relação com o ativo; para ativos dos EUA, completa com notícias em inglês se faltar.
export async function noticias(consulta: string, max = 10, dias = 7, filtro?: { relevante: (t: string) => boolean; exterior?: boolean }): Promise<Noticia[]> {
  const ok = (n: Noticia) => !LIXO_NOTICIA.test(n.titulo) && (!filtro || filtro.relevante(n.titulo));
  let lista = (await buscarRss(consulta, dias)).filter(ok);
  if (filtro?.exterior && lista.length < Math.min(max, 5)) {
    const en = await buscarRss(consulta, dias, true).catch(() => [] as Noticia[]);
    lista = lista.concat(en.filter(ok));
  }
  const vistos = new Set<string>();
  lista = lista.filter((n) => { const k = n.titulo.toLowerCase().slice(0, 60); if (vistos.has(k)) return false; vistos.add(k); return true; });
  lista.sort((a, b) => (b.data > a.data ? 1 : -1));
  return lista.slice(0, max);
}

/* ---------------- Nome curto da empresa ---------------- */
export function nomeCurto(nome: string) {
  let s = (nome || "").toUpperCase().replace(/\s+/g, " ").trim();
  const depoisSA = s.match(/(?:^|\s)S\.?A\.?\s+([A-ZÀ-Ü][A-ZÀ-Ü0-9]+)$/);
  if (depoisSA) s = depoisSA[1];
  else {
    const traco = s.match(/ - ([A-ZÀ-Ü0-9 ]{2,30})$/);
    if (traco && !/\./.test(traco[1]) && traco[1].split(" ").length <= 3) s = traco[1];
    s = s.replace(/ - .*$/, "");
  }
  s = s.replace(/\b(S\.?A\.?|SA|CIA|BCO|HOLDING|PARTICIPA[ÇC][ÕO]ES|PART|ON|PN|UNT|N[12M]|NM|ED|EJ|EDJ)\b\.?/g, " ").replace(/\s+/g, " ").trim();
  return s.toLowerCase().replace(/(^|\s)(\p{L})/gu, (_m, a, b) => a + b.toUpperCase()) || nome;
}

/* ---------------- StatusInvest: indicadores, governança e dividendos ---------------- */
export async function statusInvest(ticker: string) {
  const html = await texto(`https://statusinvest.com.br/acoes/${ticker.toLowerCase()}`, 15000);
  const ind: Record<string, number | null> = {};
  const re = /<h3 class="title[^"]*"[^>]*>([\s\S]{1,200}?)<\/h3>[\s\S]{0,600}?<strong class="value[^"]*"[^>]*>([\s\S]{0,80}?)<\/strong>/g;
  let m: RegExpExecArray | null;
  const txt: Record<string, string> = {};
  while ((m = re.exec(html))) {
    const t = semTags(m[1]);
    if (t && t.length < 50 && !(t in txt)) txt[t] = semTags(m[2]);
  }
  const pega = (rot: string) => num(txt[rot]);
  const mapa: Record<string, string> = {
    dy: "D.Y", pl: "P/L", pvp: "P/VP", evEbitda: "EV/EBITDA", lpa: "LPA", vpa: "VPA",
    divLiqPl: "Dív. líquida/PL", divLiqEbitda: "Dív. líquida/EBITDA", liqCorrente: "Liq. corrente",
    margemBruta: "M. Bruta", margemEbitda: "M. EBITDA", margemLiquida: "M. Líquida", roe: "ROE", roa: "ROA", roic: "ROIC",
    cagrReceita5a: "CAGR Receitas 5 anos", cagrLucro5a: "CAGR Lucros 5 anos", valorMercado: "Valor de mercado",
    dividaLiquida: "Dívida líquida", partIbov: "PART. IBOV",
  };
  for (const [k, rot] of Object.entries(mapa)) ind[k] = pega(rot);

  const depois = (rot: string, tam = 1500) => {
    const i = html.indexOf(rot);
    return i < 0 ? "" : semTags(html.slice(i, i + tam));
  };
  const tagAlong = depois(">Tag Along<").match(/(\d{1,3}(?:,\d+)?)\s*%/);
  const liq = depois("Liquidez média diária").match(/R\$\s*([\d.]+,\d+)/);
  const val12 = depois("Valorização (12m)", 400).match(/(-?[\d.]+,\d+)%/);
  const segmento = txt["Segmento de listagem"] || null;
  const rotuloSub = (rot: string) => {
    const i = html.indexOf(`>${rot}</span>`);
    if (i < 0) return null;
    const m = html.slice(i, i + 900).match(/<strong class="value">([\s\S]*?)<\/strong>/);
    return m ? semTags(m[1]).replace(/\. /g, ", ") : null;
  };
  const setor = rotuloSub("Setor de Atuação"), subsetor = rotuloSub("Subsetor de Atuação"), seg2 = rotuloSub("Segmento de Atuação");

  let razao: string | null = null, cnpj: string | null = null, capa: string | null = null;
  const cd = html.indexOf("company-description");
  if (cd > 0) {
    const bloco = html.slice(cd - 400, cd + 900);
    capa = (bloco.match(/data-img="url\(([^)]+)\)"/) || [])[1] || null;
    razao = semTags((bloco.match(/<span class="d-block fw-600[^"]*">([\s\S]*?)<\/span>/) || [])[1] || "") || null;
    cnpj = (bloco.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/) || [])[0] || null;
  }

  // Proventos: lista embutida no mapa de calor de dividendos
  let lista: any[] = [];
  const dl = html.indexOf("dividend-heat-map");
  if (dl > 0) {
    const ini = html.indexOf('data-list="', dl);
    const fim = html.indexOf('"', ini + 11);
    if (ini > 0 && fim > ini) {
      try { lista = JSON.parse(decodificar(html.slice(ini + 11, fim))); } catch (_) { /* formato mudou */ }
    }
  }

  return {
    ind, tagAlong: tagAlong ? num(tagAlong[1]) : null, liquidezDiaria: liq ? num(liq[1]) : null,
    valorizacao12m: val12 ? num(val12[1]) : null, segmentoListagem: segmento, setor, subsetor, segmento: seg2,
    razaoSocial: razao, cnpj, capa: capa && /^https:\/\/static\.statusinvest\.com\.br\//.test(capa) ? capa : null,
    ...resumoProventos(lista),
  };
}

// Alíquota de IR retida na fonte sobre JCP para pessoa física (confira se a lei mudar)
const IR_JCP = 0.15;
// Lista de proventos no formato do StatusInvest (ed = data com, pd = pagamento, et/etd = tipo, v = valor)
function resumoProventos(arr: any[]) {
  const proventos = (arr || []).slice(0, 40).map((p: any) => ({ tipo: p.etd || p.et || "", dataCom: p.ed || "", pagamento: p.pd || "", valor: Number(p.v) || 0 }));
  const hoje = Date.now();
  const dt = (s: string) => { const [d, mo, a] = (s || "").split("/").map(Number); return a ? Date.UTC(a, mo - 1, d) : NaN; };
  const ult12 = proventos.filter((p) => { const t = dt(p.dataCom); return !isNaN(t) && hoje - t < 365 * 864e5 && t <= hoje; });
  return {
    proventos: proventos.slice(0, 12),
    proventos12m: r2(ult12.reduce((a, p) => a + p.valor, 0), 4),
    // Líquido para pessoa física: JCP tem IR retido na fonte (IR_JCP); dividendos e rendimentos de FII, não
    proventos12mLiq: r2(ult12.reduce((a, p) => a + p.valor * (/jcp|juros/i.test(p.tipo) ? 1 - IR_JCP : 1), 0), 4),
    proximosProventos: proventos.filter((p) => dt(p.pagamento) > hoje).sort((a, b) => dt(a.pagamento) - dt(b.pagamento)).slice(0, 4),
  };
}

/* ---------------- StatusInvest: fundos imobiliários ---------------- */
export async function statusInvestFii(ticker: string) {
  const html = await texto(`https://statusinvest.com.br/fundos-imobiliarios/${ticker.toLowerCase()}`, 15000);
  // Valor do primeiro <strong class="value"> depois do rótulo
  const valor = (rot: string, max = 2500) => {
    const i = html.indexOf(rot);
    if (i < 0) return null;
    const m = html.slice(i, i + max).match(/<strong class="value[^"]*"[^>]*>([\s\S]{0,80}?)<\/strong>/);
    return m ? num(semTags(m[1])) : null;
  };
  const txtDepois = (rot: string, tam = 600) => { const i = html.indexOf(rot); return i < 0 ? "" : semTags(html.slice(i, i + tam)); };
  const ultimo = txtDepois("Último rendimento").match(/R\$\s*([\d.]+,\d+)/);
  const liq = txtDepois("Liquidez média diária", 1500).match(/R\$\s*([\d.]+,\d+)/);
  const patr = html.match(/Patrim[oô]nio l[ií]quido"[^}]{0,80}?"value":\s*([\d.]+)/);
  const nomePregao = txtDepois(">Nome Pregão", 300).replace(/^Nome Pregão\s*/, "").split(/\s{2,}| Ínicio| Início/)[0].trim() || null;
  const inicio = (txtDepois("do fundo", 200).match(/\d{2}\/\d{2}\/\d{4}/) || [])[0] || null;
  const cnpj = (html.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/) || [])[0] || null;
  const admin = (() => { const i = html.indexOf("Administrador"); if (i < 0) return null; const m = html.slice(i, i + 1500).match(/<strong[^>]*>([\s\S]{2,120}?)<\/strong>/); return m ? semTags(m[1]) || null : null; })();
  let lista: any[] = [];
  const ri = html.indexOf('id="results"');
  if (ri > 0) {
    const ini = html.indexOf('value="', ri), fim = html.indexOf('"', ini + 7);
    if (ini > 0 && fim > ini) { try { lista = JSON.parse(decodificar(html.slice(ini + 7, fim))); } catch (_) { /* formato mudou */ } }
  }
  const ind: Record<string, number | null> = {
    dy: valor(">Dividend Yield", 3000) ?? valor("Dividend Yield", 3000),
    pvp: valor(">P/VP<"), vpa: valor("Val. patrimonial p/cota"), caixa: valor(">Valor em caixa"),
    cotistas: valor("Cotistas"), partIfix: valor("NO IFIX"), contratos: valor("DE CONTRATOS"),
    rendMedio24m: valor("RENDIMENTO MENSAL MÉDIO"), valorizacao12m: valor("Valorização (12m)"),
    ultimoRendimento: ultimo ? num(ultimo[1]) : null, patrimonio: patr ? Number(patr[1]) : null,
  };
  return {
    ind, liquidezDiaria: liq ? num(liq[1]) : null, nomePregao, inicio, cnpj, administrador: admin,
    ...resumoProventos(lista),
  };
}

/* ---------------- TradingView: fundamentos de ações e ETFs dos EUA e BDRs ---------------- */
const TV_FUND = ["description", "price_earnings_ttm", "price_book_fq", "dividends_yield_current", "return_on_equity", "net_margin", "market_cap_basic", "number_of_employees", "sector", "industry", "expense_ratio", "aum", "logoid", "exchange"];
export async function fundamentosTV(ticker: string, bolsa: string | null) {
  const ext = !!bolsa && bolsa !== "B3";
  const r = await buscarTV(ext ? "america" : "brazil", { symbols: { tickers: [(ext ? bolsa : "BMFBOVESPA") + ":" + ticker] }, columns: TV_FUND });
  const d = r?.data?.[0]?.d;
  if (!d) return null;
  const v: Record<string, any> = {};
  TV_FUND.forEach((c, k) => { v[c] = d[k] ?? null; });
  const n = (x: any, k = 2) => (typeof x === "number" && isFinite(x) ? r2(x, k) : null);
  return {
    descricao: v.description, setor: v.sector, subsetor: v.industry, funcionarios: v.number_of_employees, logoid: v.logoid, bolsa: v.exchange,
    taxaAdm: n(v.expense_ratio), patrimonio: n(v.aum, 0),
    ind: { pl: n(v.price_earnings_ttm, 1), pvp: n(v.price_book_fq), dy: n(v.dividends_yield_current), roe: n(v.return_on_equity, 1), margemLiquida: n(v.net_margin, 1), valorMercado: n(v.market_cap_basic, 0) },
  };
}
export async function buscarTV(mercado: "america" | "brazil" | "forex", corpo: unknown) {
  const ac = new AbortController();
  const to = setTimeout(() => ac.abort(), 12000);
  try {
    const r = await fetch(`https://scanner.tradingview.com/${mercado}/scan`, {
      method: "POST", signal: ac.signal,
      headers: { ...UA, "Content-Type": "application/json", Origin: mercado === "brazil" ? "https://br.tradingview.com" : "https://www.tradingview.com", Referer: mercado === "brazil" ? "https://br.tradingview.com/" : "https://www.tradingview.com/" },
      body: JSON.stringify(corpo),
    });
    if (!r.ok) throw new Error("tradingview respondeu " + r.status);
    return await r.json();
  } finally { clearTimeout(to); }
}

/* ---------------- Wikidata + Wikipedia: perfil, fatos e fotos ---------------- */
const WD = "https://query.wikidata.org/sparql?format=json&query=";
async function sparql(q: string) {
  const d = await obj(WD + encodeURIComponent(q), 15000, { Accept: "application/sparql-results+json" });
  return d?.results?.bindings || [];
}
export async function wikiPerfil(ticker: string, nome: string, ext = false) {
  const raiz = ticker.slice(0, 4);
  // EUA: só listagens na NASDAQ (Q82059) ou na NYSE (Q13677), para não pegar outra empresa com o mesmo código
  const filtro = ext
    ? `?s pq:P249 "${ticker.replace(/[^A-Z.\-]/g, "")}". ?s ps:P414 ?ex. FILTER(?ex IN (wd:Q82059, wd:Q13677))`
    : `?s pq:P249 ?t. FILTER(?t IN ("${ticker}","${raiz}3","${raiz}4","${raiz}11","${raiz}"))`;
  const rows = await sparql(`SELECT ?item ?art WHERE { ?item p:P414 ?s. ${filtro} OPTIONAL{?art schema:about ?item; schema:isPartOf <https://pt.wikipedia.org/>} } LIMIT 5`).catch(() => []);
  let qid: string | null = rows[0]?.item?.value?.split("/").pop() || null;
  let titulo: string | null = rows.find((r: any) => r.art)?.art?.value?.split("/wiki/")[1] || null;
  if (titulo) titulo = decodeURIComponent(titulo);
  if (!titulo) {
    // Plano B: busca na Wikipedia pelo nome da empresa
    const termo = (ext ? nome.replace(/\b(Inc|Corp|Corporation|Co|Ltd|plc|N\.?V|S\.?A|Class [A-C]|Holdings?)\b\.?/gi, " ").replace(/\s+/g, " ").trim() : nomeCurto(nome)) + " empresa";
    const busca = await obj(`https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=3&srsearch=${encodeURIComponent(termo)}`);
    const hit = (busca?.query?.search || [])[0];
    if (hit) titulo = hit.title;
  }
  if (!titulo) return null;
  const resumo = await obj(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo.replace(/ /g, "_"))}`);
  if (resumo?.type === "disambiguation") return null;
  qid = qid || resumo?.wikibase_item || null;

  // Introdução mais longa (até 3 parágrafos)
  let intro = resumo?.extract || "";
  try {
    const ex = await obj(`https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&format=json&titles=${encodeURIComponent(titulo)}`);
    const pg: any = Object.values(ex?.query?.pages || {})[0];
    if (pg?.extract && pg.extract.length > intro.length) intro = pg.extract;
  } catch (_) { /* fica o resumo curto */ }
  const paragrafos = intro.split(/\n+/).map((p: string) => p.trim()).filter((p: string) => p.length > 40).slice(0, 3);

  // Fotos do artigo
  let fotos: { url: string; legenda: string }[] = [];
  try {
    const ml = await obj(`https://pt.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(titulo.replace(/ /g, "_"))}`);
    fotos = (ml?.items || [])
      .filter((i: any) => i.type === "image" && i.showInGallery !== false && !/\.svg$/i.test(i.title || "") && !/logo|logotipo|mapa|map|flag|bandeira|icon/i.test(i.title || ""))
      .map((i: any) => {
        const src = (i.srcset || []).slice(-1)[0]?.src || "";
        return { url: src.startsWith("//") ? "https:" + src : src, legenda: semTags(i.caption?.text || "") };
      })
      .filter((f: any) => /^https:\/\/upload\.wikimedia\.org\//.test(f.url))
      .slice(0, 8);
  } catch (_) { /* sem fotos */ }

  // Fatos estruturados
  const fatos: Record<string, string | number | null> = {};
  if (qid) {
    try {
      const f = await sparql(`SELECT
        (SAMPLE(?inc) AS ?fundacao) (SAMPLE(?hqL) AS ?sede) (SAMPLE(?ceoL) AS ?presidente) (MAX(?emp) AS ?funcionarios)
        (SAMPLE(?site) AS ?site) (SAMPLE(?logo) AS ?logo) (GROUP_CONCAT(DISTINCT ?fundL; separator=", ") AS ?fundadores)
        (GROUP_CONCAT(DISTINCT ?prodL; separator=", ") AS ?produtos) (SAMPLE(?donoL) AS ?controlador)
        WHERE {
          OPTIONAL { wd:${qid} wdt:P571 ?inc }
          OPTIONAL { wd:${qid} wdt:P159 ?hq. ?hq rdfs:label ?hqL FILTER(lang(?hqL)="pt") }
          OPTIONAL { wd:${qid} wdt:P169 ?ceo. ?ceo rdfs:label ?ceoL FILTER(lang(?ceoL)="pt") }
          OPTIONAL { wd:${qid} wdt:P1128 ?emp }
          OPTIONAL { wd:${qid} wdt:P856 ?site }
          OPTIONAL { wd:${qid} wdt:P154 ?logo }
          OPTIONAL { wd:${qid} wdt:P112 ?fund. ?fund rdfs:label ?fundL FILTER(lang(?fundL)="pt") }
          OPTIONAL { wd:${qid} wdt:P1056 ?prod. ?prod rdfs:label ?prodL FILTER(lang(?prodL)="pt") }
          OPTIONAL { wd:${qid} wdt:P127 ?dono. ?dono rdfs:label ?donoL FILTER(lang(?donoL)="pt") }
        }`);
      const b = f[0] || {};
      const v = (k: string) => b[k]?.value || null;
      fatos.fundacao = v("fundacao") ? new Date(v("fundacao")!).getUTCFullYear() : null;
      fatos.sede = v("sede");
      fatos.presidente = v("presidente");
      fatos.funcionarios = v("funcionarios") ? Math.round(Number(v("funcionarios"))) : null;
      fatos.site = v("site") && /^https?:\/\//.test(v("site")!) ? v("site") : null;
      fatos.fundadores = v("fundadores") ? v("fundadores")!.split(", ").slice(0, 4).join(", ") : null;
      fatos.produtos = v("produtos") ? v("produtos")!.split(", ").slice(0, 8).join(", ") : null;
      fatos.controlador = v("controlador");
      const logo = v("logo");
      fatos.logo = logo ? logo.replace(/^http:/, "https:") + "?width=240" : null;
    } catch (_) { /* fatos opcionais */ }
  }
  return {
    titulo: resumo?.title || titulo, descricaoCurta: resumo?.description || null, paragrafos,
    imagem: resumo?.originalimage?.source || resumo?.thumbnail?.source || null,
    wikipedia: resumo?.content_urls?.desktop?.page || `https://pt.wikipedia.org/wiki/${encodeURIComponent(titulo)}`,
    fotos, fatos, qid,
  };
}

/* ---------------- Perfil completo (com cache na tabela empresas) ---------------- */
// Índice que um ETF acompanha, pelo nome
function indiceDoEtf(nome: string): string | null {
  const n = nome.toLowerCase();
  const tab: [RegExp, string][] = [
    [/s&p 500|s&p500|sp500/, "o S&P 500, as 500 maiores empresas dos Estados Unidos"],
    [/nasdaq|qqq/, "a Nasdaq-100, as 100 maiores empresas não financeiras da Nasdaq (muita tecnologia)"],
    [/total (stock )?market/, "o mercado de ações americano inteiro (milhares de empresas)"],
    [/total world|all.?world|acwi/, "ações do mundo inteiro"],
    [/russell 2000|small.?cap|smll|smal/, "empresas pequenas (small caps)"],
    [/dividend|divo|dividendos/, "empresas boas pagadoras de dividendos"],
    [/ibovespa|bova/, "o Ibovespa, as ações mais negociadas da B3"],
    [/ibrx|brax/, "o IBrX-100, as 100 ações mais negociadas da B3"],
    [/ifix|fii/, "o IFIX, índice dos fundos imobiliários"],
    [/gold|ouro/, "o preço do ouro"],
    [/bitcoin|btc|cripto|crypto|ether/, "criptomoedas"],
    [/treasury|bond|tesouro|ima-b|imab|renda fixa/, "títulos de renda fixa"],
    [/emerging|emergentes/, "ações de países emergentes"],
    [/europe|europa/, "ações europeias"],
    [/china/, "ações chinesas"],
    [/semicondutor|semiconductor|smh|soxx/, "empresas de semicondutores"],
    [/technology|tecnologia|xlk/, "empresas de tecnologia"],
  ];
  for (const [re, t] of tab) if (re.test(n)) return t;
  return null;
}
const nomeFundo = (s: string) => s.replace(/\s*[-–]?\s*(Fundo de (Investimento|[IÍ]ndice)|Fundo Imobili|FII\b|FIAGRO|Fiagro|Cotas\b|Responsabilidade Limitada).*$/i, "").replace(/\s+(Shs|Brazilian Depositary|Brazilian Depository|Unsponsored|Sponsored)\b.*$/i, "").trim() || s;
const bi = (n: number) => n >= 1e12 ? (n / 1e12).toLocaleString("pt-BR", { maximumFractionDigits: 2 }) + " tri" : n >= 1e9 ? (n / 1e9).toLocaleString("pt-BR", { maximumFractionDigits: 1 }) + " bi" : (n / 1e6).toLocaleString("pt-BR", { maximumFractionDigits: 0 }) + " mi";

export async function perfilEmpresa(sb: SupabaseClient, ticker: string, horas = 12, forcar = false) {
  const { data: cache } = await sb.from("empresas").select("dados,atualizado_em").eq("ticker", ticker).maybeSingle();
  if (!forcar && cache && Date.now() - Date.parse(cache.atualizado_em) < horas * 36e5) return cache.dados;
  const { data: cot } = await sb.from("cotacoes").select("nome,setor,setor_macro,preco,var_dia,valor_mercado_mi,classe,moeda,bolsa,logo,extra").eq("ticker", ticker).maybeSingle();
  const classe: string = cot?.classe || "acao";
  const bolsa: string = cot?.bolsa || "B3";
  const nomeB3 = cot?.nome || ticker;
  const ant = (cache?.dados || {}) as any;
  const ext = EXTERIOR(classe);
  const fundoListado = classe === "fii" || classe === "etf" || classe === "etf_ext";
  const cripto = CRIPTO(classe);
  const [si, wiki, hist, tv, tvf] = await Promise.allSettled([
    classe === "acao" ? statusInvest(ticker) : classe === "fii" ? statusInvestFii(ticker) : Promise.resolve(null),
    fundoListado ? Promise.resolve(null) : cripto ? wikiCripto(nomeB3) : wikiPerfil(ticker, classe === "acao" ? nomeB3 : nomeFundo(nomeB3), ext || classe === "bdr"),
    historico(simboloYahoo(ticker, classe)),
    cripto ? Promise.resolve({}) : analistas([ticker], { [ticker]: bolsa }),
    classe === "acao" || classe === "fii" || cripto ? Promise.resolve(null) : fundamentosTV(ticker, bolsa),
  ]);
  let w: any = wiki.status === "fulfilled" ? wiki.value : ant.wiki || null;
  const f2: any = tvf.status === "fulfilled" ? tvf.value : null;
  // BDR: P/L, P/VP e valor de mercado do TradingView vêm distorcidos pela proporção do recibo
  if (f2 && classe === "bdr") { f2.ind.pl = null; f2.ind.pvp = null; f2.ind.valorMercado = null; }
  const nome = cripto ? nomeB3 : (classe === "acao" || classe === "bdr" || classe === "acao_ext") && w?.titulo ? w.titulo : classe === "acao" ? nomeCurto(nomeB3) : nomeFundo(nomeB3);
  const bn = buscaNoticias(ticker, nome, classe);
  const not = await noticias(bn.consulta, 12, 30, bn).catch(() => ant.noticias || []);
  const h = hist.status === "fulfilled" ? hist.value : null;

  // Fundamentos no mesmo formato para todos os tipos (ind = indicadores)
  let fundamentos: any = si.status === "fulfilled" && si.value ? si.value : null;
  if (!fundamentos && f2) fundamentos = { ind: f2.ind, setor: f2.setor, subsetor: f2.subsetor, segmento: f2.subsetor, taxaAdm: f2.taxaAdm, patrimonio: f2.patrimonio, proventos: [], proximosProventos: [], proventos12m: null };
  if (!fundamentos) fundamentos = ant.fundamentos || null;
  if (classe === "fii" && fundamentos) { fundamentos.setor = "Fundo imobiliário"; fundamentos.segmento = cot?.setor || fundamentos.segmento || null; }

  // Texto "o que você está comprando" para fundos (não costumam ter artigo na Wikipedia)
  if (fundoListado) {
    const par: string[] = [];
    const ind = fundamentos?.ind || {};
    if (classe === "fii") {
      par.push(`${nome} é um fundo imobiliário (FII) negociado na B3${cot?.setor ? `, do segmento ${cot.setor.toLowerCase()}` : ""}. Ao comprar cotas, você vira sócio de imóveis ou de títulos ligados a imóveis e recebe, em geral todo mês, a maior parte do que o fundo arrecada, isento de imposto de renda para pessoa física.`);
      const det: string[] = [];
      if (ind.patrimonio) det.push(`patrimônio de R$ ${bi(ind.patrimonio)}`);
      if (ind.cotistas) det.push(`${Math.round(ind.cotistas).toLocaleString("pt-BR")} cotistas`);
      if (ind.contratos) det.push(`${Math.round(ind.contratos)} contratos`);
      if (det.length) par.push(`O fundo tem ${det.join(", ")}.`);
      if (ind.ultimoRendimento) par.push(`O último rendimento foi de R$ ${ind.ultimoRendimento.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 })} por cota${ind.dy ? `, e nos últimos 12 meses o fundo rendeu ${ind.dy.toLocaleString("pt-BR")}% em proventos sobre o preço atual` : ""}.`);
    } else {
      const idx = indiceDoEtf(nomeB3 + " " + (f2?.descricao || ""));
      const onde = classe === "etf_ext" ? `nos Estados Unidos (${bolsa === "AMEX" ? "NYSE Arca" : bolsa})` : "na B3";
      par.push(`${nome} é um ETF (fundo de índice) negociado ${onde}. Com uma única cota você compra, de uma vez, uma cesta de ativos${idx ? ` que acompanha ${idx}` : ""}, sem precisar escolher empresa por empresa.`);
      const det: string[] = [];
      if (f2?.patrimonio) det.push(`patrimônio de ${classe === "etf_ext" ? "US$" : "R$"} ${bi(f2.patrimonio)}`);
      if (f2?.taxaAdm != null) det.push(`taxa de administração de ${f2.taxaAdm.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}% ao ano`);
      if (det.length) par.push(`O fundo tem ${det.join(" e ")}.`);
      if (classe === "etf_ext") par.push("Por ser cotado em dólar, além do desempenho do índice o valor em reais também sobe ou desce com o câmbio. Dividendos de ETFs americanos têm 30% de imposto retido na fonte nos EUA.");
    }
    w = { titulo: nome, descricaoCurta: classe === "fii" ? "Fundo imobiliário" : "ETF · fundo de índice", paragrafos: par, imagem: null, fotos: [], fatos: { site: null }, wikipedia: null };
  }

  // Cripto: texto da Wikipedia (se houver) mais o resumo com ranking, máxima histórica, risco e imposto
  const ce: any = cot?.extra || {};
  if (cripto) {
    const par: string[] = [...(w?.paragrafos || [])];
    const sym = ticker.replace(/-BRL$/, "");
    const det: string[] = [];
    if (ce.rank) det.push(`é a ${ce.rank}ª maior criptomoeda do mundo em valor de mercado`);
    if (cot?.valor_mercado_mi) det.push(`vale cerca de R$ ${bi(cot.valor_mercado_mi * 1e6)} no total`);
    if (ce.ath && ce.athPct != null) det.push(`está ${Math.abs(ce.athPct).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}% ${ce.athPct < 0 ? "abaixo" : "acima"} da máxima histórica de R$ ${Number(ce.ath).toLocaleString("pt-BR", { maximumFractionDigits: ce.ath < 1 ? 6 : 2 })}${ce.athData ? ` (${ce.athData.split("-").reverse().join("/")})` : ""}`);
    if (!par.length) par.push(`${nome} (${sym}) é uma criptomoeda negociada 24 horas por dia, todos os dias, em corretoras do mundo inteiro.`);
    if (det.length) par.push(`Hoje ${nome} ${det.join(", ")}.`);
    par.push(ce.estavel
      ? "Por ser uma stablecoin, o preço acompanha o dólar e oscila pouco. Não tem FGC nem garantia do governo: o risco é o emissor deixar de manter o lastro."
      : "Criptomoedas não têm FGC nem garantia do governo e podem subir ou cair muito em poucos dias. Pela regra atual, vendas de até R$ 35 mil por mês em corretoras brasileiras são isentas de IR; acima disso, o lucro paga a partir de 15%. As regras de cripto vêm mudando: confira antes de vender.");
    w = { titulo: nome, descricaoCurta: w?.descricaoCurta || "Criptomoeda", paragrafos: par, imagem: w?.imagem || null, fotos: [], fatos: { site: null }, wikipedia: w?.wikipedia || null };
  }

  const logo = cripto ? ce.img || null : cot?.logo ? `https://s3-symbol-logo.tradingview.com/${cot.logo}.svg` : `https://icons.brapi.dev/icons/${ticker}.svg`;
  const dados: any = {
    ticker, nome, nomeB3, classe, moeda: cot?.moeda || "BRL", bolsa,
    setor: cot?.setor || f2?.subsetor || null, setorMacro: cot?.setor_macro || null,
    logo, wiki: w, fundamentos,
    desempenho: h ? indicadores(h) : ant.desempenho || null,
    serie: h ? serieSemanal(h) : ant.serie || [],
    noticias: not,
    ...(cripto ? { cripto: { ...ce, valorMercado: cot?.valor_mercado_mi ? cot.valor_mercado_mi * 1e6 : null } } : {}),
    analistas: tv.status === "fulfilled" ? tv.value[ticker] || null : ant.analistas || null,
    fontesComErro: [si, wiki, hist].map((x, i) => (x.status === "rejected" ? ["StatusInvest", "Wikipedia", "Yahoo"][i] : null)).filter(Boolean),
    atualizadoEm: new Date().toISOString(),
  };
  if (f2?.funcionarios && dados.wiki?.fatos && !dados.wiki.fatos.funcionarios) dados.wiki.fatos.funcionarios = f2.funcionarios;
  dados.dinamicoEm = dados.atualizadoEm;
  dados.noticiasEm = dados.atualizadoEm;
  dados.reputacao = reputacao(dados);
  await sb.from("empresas").upsert({ ticker, dados, atualizado_em: dados.atualizadoEm });
  return dados;
}

// Atualiza só o que muda ao longo do dia (cotações do gráfico, desempenho, analistas e,
// a cada hora, as notícias), sem refazer Wikipedia e StatusInvest. Não mexe em atualizado_em,
// que controla a atualização completa a cada 12 horas.
export async function atualizarDinamico(sb: SupabaseClient, ticker: string, dados: any, pronto: { h?: Historico | null; sent?: any } = {}) {
  const d = { ...dados };
  const precisaNoticias = !d.noticiasEm || Date.now() - Date.parse(d.noticiasEm) > 60 * 60000;
  const bn = buscaNoticias(ticker, String(d.nome || ticker), d.classe);
  const [hist, tv, not] = await Promise.allSettled([
    pronto.h ? Promise.resolve(pronto.h) : historico(simboloYahoo(ticker, d.classe)),
    pronto.sent !== undefined ? Promise.resolve({ [ticker]: pronto.sent }) : analistas([ticker], { [ticker]: d.bolsa || "B3" }),
    precisaNoticias ? noticias(bn.consulta, 12, 30, bn) : Promise.resolve(null),
  ]);
  if (hist.status === "fulfilled" && hist.value) { d.desempenho = indicadores(hist.value) || d.desempenho; d.serie = serieSemanal(hist.value); }
  if (tv.status === "fulfilled" && tv.value[ticker]) d.analistas = tv.value[ticker];
  if (not.status === "fulfilled" && not.value && not.value.length) { d.noticias = not.value; d.noticiasEm = new Date().toISOString(); }
  d.dinamicoEm = new Date().toISOString();
  d.reputacao = reputacao(d);
  await sb.from("empresas").update({ dados: d }).eq("ticker", ticker);
  return d;
}

/* ---------------- Reputação (0 a 100) a partir de dados públicos ---------------- */
export function reputacao(d: any) {
  if (CRIPTO(d.classe)) return reputacaoCripto(d);
  if (FUNDO(d.classe)) return reputacaoFundo(d);
  const f = d.fundamentos || {}, i = f.ind || {};
  const itens: { area: string; efeito: "positivo" | "negativo" | "neutro"; texto: string }[] = [];
  let pts = 50;
  const seg = (f.segmentoListagem || "").toLowerCase();
  if (seg.includes("novo mercado")) { pts += 12; itens.push({ area: "Governança", efeito: "positivo", texto: "Listada no Novo Mercado, o nível mais exigente de governança da B3 (só ações com direito a voto e regras mais rígidas de transparência)." }); }
  else if (seg.includes("2")) { pts += 6; itens.push({ area: "Governança", efeito: "positivo", texto: "Listada no Nível 2 de governança da B3, com regras de proteção acima do mínimo." }); }
  else if (seg.includes("1")) { pts += 2; itens.push({ area: "Governança", efeito: "neutro", texto: "Listada no Nível 1 de governança da B3: regras de transparência um pouco acima do mínimo." }); }
  else if (seg) { pts -= 4; itens.push({ area: "Governança", efeito: "negativo", texto: `Segmento de listagem "${f.segmentoListagem}", sem as exigências extras de governança do Novo Mercado.` }); }
  if (f.tagAlong != null) {
    if (f.tagAlong >= 100) { pts += 5; itens.push({ area: "Governança", efeito: "positivo", texto: "Tag along de 100%: se o controle for vendido, você recebe o mesmo preço pago ao controlador." }); }
    else if (f.tagAlong < 80) { pts -= 4; itens.push({ area: "Governança", efeito: "negativo", texto: `Tag along de ${f.tagAlong}%: em uma venda do controle, o minoritário recebe menos que o controlador.` }); }
  }
  if (i.divLiqEbitda != null) {
    if (i.divLiqEbitda < 0) { pts += 6; itens.push({ area: "Solidez", efeito: "positivo", texto: "Tem mais dinheiro em caixa do que dívidas." }); }
    else if (i.divLiqEbitda <= 2) { pts += 4; itens.push({ area: "Solidez", efeito: "positivo", texto: `Dívida controlada: ${String(i.divLiqEbitda).replace(".", ",")} vezes a geração de caixa anual (EBITDA).` }); }
    else if (i.divLiqEbitda > 3.5) { pts -= 8; itens.push({ area: "Solidez", efeito: "negativo", texto: `Dívida alta: ${String(i.divLiqEbitda).replace(".", ",")} vezes a geração de caixa anual. Juros altos pesam mais.` }); }
  }
  if (i.margemLiquida != null) {
    if (i.margemLiquida < 0) { pts -= 10; itens.push({ area: "Resultados", efeito: "negativo", texto: "Está dando prejuízo nos últimos 12 meses." }); }
    else if (i.roe != null && i.roe >= 15) { pts += 6; itens.push({ area: "Resultados", efeito: "positivo", texto: `Rentável: retorno sobre o patrimônio (ROE) de ${String(i.roe).replace(".", ",")}% ao ano.` }); }
  }
  if (i.cagrLucro5a != null && i.cagrLucro5a > 10) { pts += 3; itens.push({ area: "Resultados", efeito: "positivo", texto: `Lucro cresceu em média ${String(i.cagrLucro5a).replace(".", ",")}% ao ano nos últimos 5 anos.` }); }
  if (i.dy != null) {
    if (i.dy >= 6) { pts += 5; itens.push({ area: "Dividendos", efeito: "positivo", texto: `Boa pagadora: dividend yield de ${String(i.dy).replace(".", ",")}% nos últimos 12 meses.` }); }
    else if (i.dy < 1) itens.push({ area: "Dividendos", efeito: "neutro", texto: "Paga poucos dividendos; o retorno depende mais da valorização da ação." });
  }
  const nots: any[] = d.noticias || [];
  const pos = nots.filter((n) => n.tom === "positivo").length, neg = nots.filter((n) => n.tom === "negativo").length;
  const graves = nots.filter((n) => n.grave);
  if (graves.length) { pts -= 12; itens.push({ area: "Imagem", efeito: "negativo", texto: `Notícias sensíveis no último mês: "${graves[0].titulo}".` }); }
  if (nots.length >= 4) {
    if (pos > neg + 2) { pts += 4; itens.push({ area: "Imagem", efeito: "positivo", texto: `Noticiário do último mês mais positivo: ${pl(pos, "notícia boa", "notícias boas")} e ${pl(neg, "ruim", "ruins")}.` }); }
    else if (neg > pos + 2) { pts -= 5; itens.push({ area: "Imagem", efeito: "negativo", texto: `Noticiário do último mês mais negativo: ${pl(neg, "notícia ruim", "notícias ruins")} e ${pl(pos, "boa", "boas")}.` }); }
    else itens.push({ area: "Imagem", efeito: "neutro", texto: `Noticiário equilibrado no último mês (${pl(pos, "boa", "boas")}, ${pl(neg, "ruim", "ruins")}).` });
  }
  const nota = Math.max(0, Math.min(100, Math.round(pts)));
  return { nota, rotulo: nota >= 70 ? "Boa" : nota >= 50 ? "Regular" : "Fraca", itens };
}

// FIIs e ETFs: nota a partir de tamanho, custo, desconto sobre o patrimônio, rendimento e noticiário
function reputacaoFundo(d: any) {
  const f = d.fundamentos || {}, i = f.ind || {};
  const itens: { area: string; efeito: "positivo" | "negativo" | "neutro"; texto: string }[] = [];
  let pts = 55;
  const br = (n: number, k = 2) => n.toLocaleString("pt-BR", { maximumFractionDigits: k });
  if (d.classe === "fii") {
    if (i.patrimonio != null) {
      if (i.patrimonio >= 1e9) { pts += 8; itens.push({ area: "Tamanho", efeito: "positivo", texto: `Fundo grande: patrimônio de R$ ${bi(i.patrimonio)}, o que costuma trazer imóveis mais diversificados.` }); }
      else if (i.patrimonio < 2e8) { pts -= 6; itens.push({ area: "Tamanho", efeito: "negativo", texto: `Fundo pequeno: patrimônio de R$ ${bi(i.patrimonio)}. Depende de poucos imóveis ou devedores.` }); }
    }
    if (i.cotistas != null && i.cotistas >= 100000) { pts += 4; itens.push({ area: "Liquidez", efeito: "positivo", texto: `${Math.round(i.cotistas).toLocaleString("pt-BR")} cotistas: fácil de comprar e vender.` }); }
    if (f.liquidezDiaria != null && f.liquidezDiaria < 500000) { pts -= 5; itens.push({ area: "Liquidez", efeito: "negativo", texto: `Pouco negociado: cerca de R$ ${bi(f.liquidezDiaria)} por dia. Pode ser difícil vender rápido.` }); }
    if (i.pvp != null) {
      if (i.pvp < 0.85) { pts += 2; itens.push({ area: "Preço", efeito: "neutro", texto: `Cota ${br((1 - i.pvp) * 100, 0)}% abaixo do valor patrimonial (P/VP ${br(i.pvp)}): pode ser oportunidade ou sinal de desconfiança do mercado.` }); }
      else if (i.pvp <= 1.05) { pts += 4; itens.push({ area: "Preço", efeito: "positivo", texto: `Cota perto do valor patrimonial (P/VP ${br(i.pvp)}).` }); }
      else if (i.pvp > 1.2) { pts -= 5; itens.push({ area: "Preço", efeito: "negativo", texto: `Cota ${br((i.pvp - 1) * 100, 0)}% acima do valor patrimonial (P/VP ${br(i.pvp)}).` }); }
    }
    if (i.dy != null) {
      if (i.dy >= 8 && i.dy <= 16) { pts += 6; itens.push({ area: "Rendimentos", efeito: "positivo", texto: `Rendimento de ${br(i.dy)}% nos últimos 12 meses.` }); }
      else if (i.dy > 16) { itens.push({ area: "Rendimentos", efeito: "neutro", texto: `Rendimento muito alto (${br(i.dy)}% em 12 meses): confira se não foi pontual ou se a cota caiu por algum problema.` }); }
      else if (i.dy < 6) { pts -= 5; itens.push({ area: "Rendimentos", efeito: "negativo", texto: `Rendimento baixo para um FII: ${br(i.dy)}% em 12 meses.` }); }
    }
  } else {
    if (f.patrimonio != null) {
      const grande = d.classe === "etf_ext" ? 1e10 : 1e9;
      if (f.patrimonio >= grande) { pts += 12; itens.push({ area: "Tamanho", efeito: "positivo", texto: `ETF grande e consolidado: ${d.moeda === "USD" ? "US$" : "R$"} ${bi(f.patrimonio)} sob gestão.` }); }
      else if (f.patrimonio < grande / 50) { pts -= 6; itens.push({ area: "Tamanho", efeito: "negativo", texto: `ETF pequeno (${d.moeda === "USD" ? "US$" : "R$"} ${bi(f.patrimonio)}): menos negociado e com mais risco de ser encerrado.` }); }
    }
    if (f.taxaAdm != null) {
      if (f.taxaAdm <= 0.1) { pts += 12; itens.push({ area: "Custo", efeito: "positivo", texto: `Taxa de administração baixíssima: ${br(f.taxaAdm)}% ao ano.` }); }
      else if (f.taxaAdm <= 0.4) { pts += 5; itens.push({ area: "Custo", efeito: "positivo", texto: `Taxa de administração de ${br(f.taxaAdm)}% ao ano.` }); }
      else if (f.taxaAdm >= 0.75) { pts -= 6; itens.push({ area: "Custo", efeito: "negativo", texto: `Taxa de administração alta: ${br(f.taxaAdm)}% ao ano, que sai do seu retorno todo ano.` }); }
    }
    const v = d.desempenho?.volAnual;
    if (v != null) itens.push({ area: "Risco", efeito: v > 35 ? "negativo" : "neutro", texto: `Oscilação anual de ${br(v, 0)}%${v > 35 ? ": bem arriscado." : v < 20 ? ": relativamente estável para renda variável." : "."}` });
  }
  const nots: any[] = d.noticias || [];
  const graves = nots.filter((n) => n.grave);
  if (graves.length) { pts -= 12; itens.push({ area: "Imagem", efeito: "negativo", texto: `Notícias sensíveis no último mês: "${graves[0].titulo}".` }); }
  const nota = Math.max(0, Math.min(100, Math.round(pts)));
  return { nota, rotulo: nota >= 70 ? "Boa" : nota >= 50 ? "Regular" : "Fraca", itens };
}

// Cripto: tamanho e posição no ranking, oscilação, distância da máxima histórica e noticiário
function reputacaoCripto(d: any) {
  const c = d.cripto || {};
  const itens: { area: string; efeito: "positivo" | "negativo" | "neutro"; texto: string }[] = [];
  let pts = 45;
  const br = (n: number, k = 0) => n.toLocaleString("pt-BR", { maximumFractionDigits: k });
  if (c.estavel) { pts += 15; itens.push({ area: "Tipo", efeito: "neutro", texto: "Stablecoin: acompanha o dólar (ou outra moeda) e quase não oscila. Serve para guardar valor em dólar, não para buscar valorização." }); }
  if (c.rank != null) {
    if (c.rank <= 10) { pts += 18; itens.push({ area: "Tamanho", efeito: "positivo", texto: `Uma das ${c.rank <= 2 ? "duas" : "dez"} maiores criptomoedas do mundo (${c.rank}ª em valor de mercado): muito negociada e mais difícil de sumir.` }); }
    else if (c.rank <= 50) { pts += 6; itens.push({ area: "Tamanho", efeito: "neutro", texto: `${c.rank}ª maior criptomoeda em valor de mercado.` }); }
    else { pts -= 8; itens.push({ area: "Tamanho", efeito: "negativo", texto: `${c.rank}ª em valor de mercado: moedas menores sobem e caem muito mais e podem perder liquidez.` }); }
  }
  const v = d.desempenho?.volAnual;
  if (v != null && !c.estavel) {
    if (v > 90) { pts -= 10; itens.push({ area: "Risco", efeito: "negativo", texto: `Oscilação anual de ${br(v)}%: extremamente arriscado.` }); }
    else if (v > 55) { pts -= 4; itens.push({ area: "Risco", efeito: "negativo", texto: `Oscilação anual de ${br(v)}%: bem mais arriscado que ações.` }); }
    else itens.push({ area: "Risco", efeito: "neutro", texto: `Oscilação anual de ${br(v)}%, baixa para uma cripto, mas ainda acima da bolsa.` });
  }
  if (c.athPct != null && !c.estavel) {
    if (c.athPct < -80) { pts -= 6; itens.push({ area: "Preço", efeito: "negativo", texto: `Está ${br(-c.athPct)}% abaixo da máxima histórica.` }); }
    else if (c.athPct > -15) itens.push({ area: "Preço", efeito: "neutro", texto: `Perto da máxima histórica (${br(-c.athPct)}% abaixo).` });
    else itens.push({ area: "Preço", efeito: "neutro", texto: `${br(-c.athPct)}% abaixo da máxima histórica.` });
  }
  const graves = (d.noticias || []).filter((n: any) => n.grave);
  if (graves.length) { pts -= 12; itens.push({ area: "Imagem", efeito: "negativo", texto: `Notícias sensíveis no último mês: "${graves[0].titulo}".` }); }
  const nota = Math.max(0, Math.min(100, Math.round(pts)));
  return { nota, rotulo: nota >= 70 ? "Boa" : nota >= 50 ? "Regular" : "Fraca", itens };
}

// Texto da Wikipedia sobre uma criptomoeda, pelo nome
async function wikiCripto(nome: string) {
  const busca = await obj(`https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=4&srsearch=${encodeURIComponent(nome + " criptomoeda")}`);
  const chave = nome.toLowerCase().split(" ")[0];
  const hit = (busca?.query?.search || []).find((h: any) => String(h.title).toLowerCase().includes(chave));
  if (!hit) return null;
  const titulo = hit.title;
  const resumo = await obj(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo.replace(/ /g, "_"))}`);
  if (!resumo || resumo.type === "disambiguation") return null;
  let intro = resumo.extract || "";
  try {
    const ex = await obj(`https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&format=json&titles=${encodeURIComponent(titulo)}`);
    const pg: any = Object.values(ex?.query?.pages || {})[0];
    if (pg?.extract && pg.extract.length > intro.length) intro = pg.extract;
  } catch (_) { /* fica o resumo */ }
  return {
    titulo: resumo.title || titulo, descricaoCurta: resumo.description || "Criptomoeda",
    paragrafos: intro.split(/\n+/).map((p: string) => p.trim()).filter((p: string) => p.length > 40).slice(0, 2),
    imagem: resumo.originalimage?.source || resumo.thumbnail?.source || null,
    wikipedia: resumo.content_urls?.desktop?.page || null,
  };
}

/* ---------------- Sinal por ação ---------------- */
export function sinalAcao(ind: any, fund: any, nots: Noticia[], varDia: number | null, extra: { ibovVar?: number | null; sent?: any; indice?: string; moeda?: string; classe?: string } = {}) {
  const IDX = extra.indice || "Ibovespa";
  const SIMB = moedaSimb(extra.moeda);
  const classe = extra.classe || "acao";
  let pts = 0;
  const motivos: { peso: number; t: string }[] = [];
  const add = (p: number, t: string) => { pts += p; motivos.push({ peso: p, t }); };
  const br = (n: number, d = 1) => n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  if (ind) {
    const p = ind.preco;
    if (ind.mm50 && ind.mm200) {
      if (p > ind.mm50 && ind.mm50 > ind.mm200) add(2, "Tendência de alta: o preço está acima das médias de 50 e 200 dias.");
      else if (p < ind.mm50 && ind.mm50 < ind.mm200) add(-2, "Tendência de baixa: o preço está abaixo das médias de 50 e 200 dias.");
      else if (p > ind.mm50) add(1, "Preço acima da média dos últimos 50 dias.");
      else add(-1, "Preço abaixo da média dos últimos 50 dias.");
    } else if (ind.mm20) add(p > ind.mm20 ? 1 : -1, p > ind.mm20 ? "Preço acima da média de 20 dias." : "Preço abaixo da média de 20 dias.");
    if (ind.ret1m != null) {
      if (ind.ret1m >= 10) add(1, `Subiu ${br(ind.ret1m)}% no último mês.`);
      else if (ind.ret1m <= -10) add(-1, `Caiu ${br(-ind.ret1m)}% no último mês.`);
    }
    if (ind.rsi != null) {
      if (ind.rsi >= 75) add(-1, `Subiu rápido demais (IFR ${ind.rsi}): risco de realização de lucros no curto prazo.`);
      else if (ind.rsi <= 28 && !(p < (ind.mm200 || 0))) add(1, `Caiu muito em pouco tempo (IFR ${ind.rsi}): pode estar barata no curto prazo.`);
    }
  }
  const i = fund?.ind || {};
  if (classe === "fii") {
    // FIIs: desconto sobre o valor patrimonial e rendimento mensal
    if (i.pvp != null && i.pvp < 0.9 && (i.dy ?? 0) >= 9) add(1, `Cota abaixo do valor patrimonial (P/VP ${br(i.pvp, 2)}) com rendimento de ${br(i.dy)}% em 12 meses.`);
    else if (i.pvp != null && i.pvp > 1.15) add(-1, `Cota cara: ${br((i.pvp - 1) * 100, 0)}% acima do valor patrimonial (P/VP ${br(i.pvp, 2)}).`);
    if (i.dy != null && i.dy < 6) add(-1, `Rendimento baixo para um fundo imobiliário: ${br(i.dy)}% em 12 meses.`);
    else if (i.dy != null && i.dy >= 10 && i.dy <= 16) add(1, `Bom rendimento: ${br(i.dy)}% em 12 meses, pagos todo mês.`);
  } else if (classe !== "etf" && classe !== "etf_ext" && classe !== "cripto") {
    if (i.margemLiquida != null && i.margemLiquida < 0) add(-2, "A empresa está com prejuízo nos últimos 12 meses.");
    else if (i.pl != null && i.pl > 0 && i.pl < 8 && (i.roe ?? 0) >= 12) add(1, `Preço baixo em relação ao lucro (P/L ${br(i.pl)}) com boa rentabilidade.`);
    else if (i.pl != null && i.pl > 35 && !(classe === "acao_ext" && (i.roe ?? 0) >= 25)) add(-1, `Preço alto em relação ao lucro (P/L ${br(i.pl)}).`);
    if (i.dy != null && i.dy >= 7) add(1, `Dividendos altos: ${br(i.dy)}% em 12 meses.`);
    if (i.divLiqEbitda != null && i.divLiqEbitda > 3.5) add(-1, `Dívida elevada (${br(i.divLiqEbitda)}x o EBITDA).`);
  }
  const recentes = nots.filter((n) => n.data && Date.now() - Date.parse(n.data) < 7 * 864e5);
  const pos = recentes.filter((n) => n.tom === "positivo").length, neg = recentes.filter((n) => n.tom === "negativo").length;
  const grave = recentes.find((n) => n.grave);
  if (grave) add(-3, `Notícia que pede cuidado: "${grave.titulo}".`);
  else if (pos - neg >= 2) add(1, `Noticiário da semana positivo (${pl(pos, "boa", "boas")}, ${pl(neg, "ruim", "ruins")}).`);
  else if (neg - pos >= 2) add(-1, `Noticiário da semana negativo (${pl(neg, "ruim", "ruins")}, ${pl(pos, "boa", "boas")}).`);
  // O que está acontecendo hoje: a própria ação e o mercado inteiro
  const ib = extra.ibovVar;
  if (varDia != null && varDia <= -7) add(-2, `Queda forte hoje: ${br(-varDia)}%.`);
  else if (varDia != null && varDia <= -3) add(-1, `Cai ${br(-varDia)}% hoje.`);
  if (ib != null && ib <= -2) add(-1, `O mercado todo está em queda hoje (${IDX} ${br(ib, 2)}%).`);
  else if (ib != null && ib >= 2) add(0, `O mercado todo sobe hoje (${IDX} +${br(ib, 2)}%).`);

  // Termômetro técnico de curto prazo (médias e osciladores do dia) e consenso dos analistas
  const s = extra.sent;
  const tec = s?.tecnico?.valor;
  if (tec != null && tec <= -0.5) add(-1, "Indicadores técnicos de curto prazo apontam venda forte.");
  else if (tec != null && tec >= 0.5) add(1, "Indicadores técnicos de curto prazo apontam compra forte.");
  const an = s?.analistas;
  if (an && an.total >= 3) {
    const alvo = an.alvoMedio != null ? ` Preço-alvo médio de ${SIMB} ${br(an.alvoMedio, 2)}${an.potencial != null ? ` (${an.potencial >= 0 ? "+" : ""}${br(an.potencial)}%)` : ""}.` : "";
    const txt = `${an.compra} de ${an.total} analistas recomendam compra e ${an.venda} venda.${alvo}`;
    if (s.nota >= 70 && (an.potencial ?? 0) >= 15) add(1, txt);
    else if (s.nota < 40) add(-1, txt);
    else add(0, txt);
  }

  const sinal = grave && pts < 0 ? "reduzir" : pts >= 4 ? "reforcar" : pts >= 0 ? "manter" : pts >= -3 ? "atencao" : "reduzir";
  motivos.sort((a, b) => Math.abs(b.peso) - Math.abs(a.peso));
  const intro = { reforcar: "Os sinais estão favoráveis.", manter: "Sem motivo forte para mexer.", atencao: "Alguns sinais pedem atenção.", reduzir: "Vários sinais negativos ao mesmo tempo." }[sinal];
  // Frase do dia logo no começo, para o resumo nunca falar só do passado
  let hoje = "";
  if (varDia != null && Math.abs(varDia) >= 0.5) {
    hoje = `Hoje ${varDia < 0 ? "cai" : "sobe"} ${br(Math.abs(varDia))}%`;
    if (ib != null && Math.abs(ib) >= 0.5) hoje += `, com o ${IDX} ${ib < 0 ? "em queda de" : "em alta de"} ${br(Math.abs(ib))}%`;
    hoje += ".";
  } else if (ib != null && Math.abs(ib) >= 1) hoje = `Hoje ${CRIPTO(classe) ? "a moeda" : FUNDO(classe) ? "a cota" : "a ação"} está estável, enquanto o ${IDX} ${ib < 0 ? "cai" : "sobe"} ${br(Math.abs(ib))}%.`;
  const resto = motivos.filter((m) => !/hoje|Ibovespa|S&P 500|IFIX/.test(m.t)).slice(0, 4).map((m) => m.t);
  const motivo = [intro, hoje, ...resto].filter(Boolean).join(" ");
  return { sinal, pontos: pts, motivo, fatores: motivos };
}

/* ---------------- Analistas e técnico (TradingView, consulta pública) ---------------- */
// Uma chamada traz, para várias ações de uma vez: consenso dos analistas (compra/neutro/venda),
// preço-alvo médio, máximo e mínimo, e a leitura técnica de curto prazo.
const TV_COLS = ["close", "change", "Recommend.All", "recommendation_mark", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "price_target_average", "price_target_high", "price_target_low"];
// bolsas: código -> bolsa ("B3", "NASDAQ", "NYSE", "AMEX"). Sem bolsa = B3.
export async function analistas(tickers: string[], bolsas: Record<string, string | null | undefined> = {}): Promise<Record<string, any>> {
  const out: Record<string, any> = {};
  const lista = [...new Set(tickers.filter((t) => ATIVO_RE.test(t)))];
  const grupos: Record<"brazil" | "america", string[]> = { brazil: [], america: [] };
  for (const t of lista) { const b = bolsas[t]; if (b === "CRIPTO" || /-BRL$/.test(t)) continue; if (b && b !== "B3") grupos.america.push(b + ":" + t); else if (TICKER_RE.test(t)) grupos.brazil.push("BMFBOVESPA:" + t); }
  for (const mercado of ["brazil", "america"] as const) {
    const simbolos = grupos[mercado];
    for (let i = 0; i < simbolos.length; i += 100) {
      const d = await buscarTV(mercado, { symbols: { tickers: simbolos.slice(i, i + 100) }, columns: TV_COLS });
      for (const row of d?.data || []) {
        const [ex, t] = String(row.s || "").split(":");
        const v: Record<string, number | null> = {};
        TV_COLS.forEach((c, k) => { const x = row.d?.[k]; v[c] = typeof x === "number" && isFinite(x) ? x : null; });
        if (t) out[t] = montarSentimento(t, v, ex);
      }
    }
  }
  return out;
}
function montarSentimento(t: string, v: Record<string, number | null>, ex = "BMFBOVESPA") {
  const compra = (v.recommendation_buy || 0) + (v.recommendation_over || 0);
  const neutro = v.recommendation_hold || 0;
  const venda = (v.recommendation_under || 0) + (v.recommendation_sell || 0);
  const total = v.recommendation_total || compra + neutro + venda;
  // Média ponderada do TradingView: compra = 1, sobreponderar = 1,5, manter = 2, subponderar = 2,5, venda = 3
  const mark = v.recommendation_mark;
  const preco = v.close;
  const alvo = v.price_target_average;
  const tec = v["Recommend.All"]; // -1 = venda forte … +1 = compra forte
  const temAn = total > 0 && mark != null;
  const nota = temAn ? Math.round(Math.max(0, Math.min(100, (3 - mark!) / 2 * 100))) : null;
  const rotulo = !temAn ? "" : mark! <= 1.3 ? "Compra forte" : mark! <= 1.7 ? "Compra" : mark! <= 2.3 ? "Neutro" : mark! <= 2.7 ? "Venda" : "Venda forte";
  const rotTec = tec == null ? null : tec > 0.5 ? "Compra forte" : tec > 0.1 ? "Compra" : tec >= -0.1 ? "Neutro" : tec >= -0.5 ? "Venda" : "Venda forte";
  return {
    nota, rotulo,
    analistas: temAn ? {
      compra, neutro, venda, total,
      alvoMedio: r2(alvo), alvoMax: r2(v.price_target_high), alvoMin: r2(v.price_target_low),
      potencial: alvo && preco ? r2((alvo / preco - 1) * 100, 1) : null,
      fonte: `Consenso de ${total} ${total === 1 ? "analista" : "analistas"} de corretoras e bancos`,
    } : null,
    tecnico: tec != null ? { valor: r2(tec, 2), rotulo: rotTec } : null,
    preco: r2(preco), varDia: r2(v.change),
    fontes: [{ nome: "TradingView", url: `https://br.tradingview.com/symbols/${ex}-${t.replace(".", "_")}/forecast/` }],
    atualizadoEm: new Date().toISOString(),
  };
}

/* ---------------- Mercado ---------------- */
// Reuniões do Copom (segundo dia de cada reunião). Atualize quando o BC divulgar o calendário de 2027.
const COPOM = ["2026-11-04", "2026-12-09"];
export function proximoCopom() {
  const hoje = new Date().toISOString().slice(0, 10);
  const d = COPOM.find((x) => x >= hoje);
  if (!d) return null;
  const [a, m, dia] = d.split("-").map(Number);
  const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${dia - 1}–${dia} ${meses[m - 1]}${a !== new Date().getUTCFullYear() ? " " + a : ""}`;
}
// CDI diário (% ao dia, série 12 do Banco Central) desde a aplicação mais antiga das carteiras (no mínimo ~3 anos)
// e a taxa anual de hoje (série 4389). Usado no navegador para calcular quanto rende cada aplicação de renda fixa.
// O Banco Central limita a série diária a 10 anos por consulta: períodos maiores são buscados em partes.
export async function cdi(desde?: string | null) {
  const tresAnos = new Date(Date.now() - 3 * 366 * 864e5);
  let ini = tresAnos;
  if (desde && /^\d{4}-\d{2}-\d{2}$/.test(desde)) { const d = new Date(desde + "T12:00:00Z"); if (d < ini) ini = d; }
  if (ini < new Date("2000-01-01T12:00:00Z")) ini = new Date("2000-01-01T12:00:00Z");
  const dd = (d: Date) => `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${d.getUTCFullYear()}`;
  const hoje = new Date();
  const partes: [Date, Date][] = [];
  for (let a = ini; a <= hoje;) {
    const b = new Date(Math.min(hoje.getTime(), a.getTime() + 9 * 365 * 864e5));
    partes.push([a, b]);
    a = new Date(b.getTime() + 864e5);
  }
  const [blocos, ano] = await Promise.all([
    Promise.all(partes.map(([a, b]) => obj(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados?formato=json&dataInicial=${dd(a)}&dataFinal=${dd(b)}`, 20000))),
    obj("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4389/dados/ultimos/1?formato=json").catch(() => null),
  ]);
  const n = (v: any) => Number(String(v).replace(",", "."));
  const vistos = new Set<string>();
  const serie: [string, number][] = blocos.flatMap((dia: any) => (Array.isArray(dia) ? dia : []))
    .map((x: any) => { const [d, m, a] = String(x.data).split("/"); return [`${a}-${m}-${d}`, n(x.valor)] as [string, number]; })
    .filter(([d, v]) => /^\d{4}-\d{2}-\d{2}$/.test(d) && isFinite(v) && v >= 0 && v < 1 && !vistos.has(d) && !!vistos.add(d))
    .sort((x, y) => (x[0] < y[0] ? -1 : 1));
  if (serie.length < 50) throw new Error("CDI incompleto");
  const ult = serie[serie.length - 1][1];
  const anual = ano?.[0] ? n(ano[0].valor) : Math.round((Math.pow(1 + ult / 100, 252) - 1) * 10000) / 100;
  return { anual, diario: ult, serie, inicio: serie[0][0], pedido: ini.toISOString().slice(0, 10), fonte: "Banco Central (SGS 12 e 4389)", atualizadoEm: new Date().toISOString() };
}

export async function selic() {
  const d = await obj("https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json");
  return d?.[0] ? Number(String(d[0].valor).replace(",", ".")) : null;
}
