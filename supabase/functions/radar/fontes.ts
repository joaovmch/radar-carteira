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

export const TICKER_RE = /^[A-Z][A-Z0-9]{2}[A-Z]\d{1,2}$/;
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
const r2 = (n: number | null | undefined, d = 2) => (n == null || !isFinite(n) ? null : Math.round(n * 10 ** d) / 10 ** d);

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

// Série reduzida (uma cotação por semana) para o gráfico do perfil
export function serieSemanal(h: Historico) {
  const out: [number, number][] = [];
  for (let i = 0; i < h.ts.length; i++) {
    if (i % 5 === 0 || i === h.ts.length - 1) out.push([h.ts[i], r2(h.close[i])!]);
  }
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
// Google Notícias; se falhar ou vier vazio, Bing Notícias.
export async function noticias(consulta: string, max = 10, dias = 7): Promise<Noticia[]> {
  let lista: Noticia[] = [];
  try {
    const xml = await texto(`https://news.google.com/rss/search?q=${encodeURIComponent(consulta + ` when:${dias}d`)}&hl=pt-BR&gl=BR&ceid=BR:pt-419`, 10000);
    lista = lerRss(xml, false, dias);
  } catch (_) { /* tenta o Bing */ }
  if (!lista.length) {
    const simples = consulta.replace(/"/g, "").replace(/\s+OR\s+/g, " ").trim();
    const xml = await texto(`https://www.bing.com/news/search?q=${encodeURIComponent(simples)}&format=rss&setlang=pt-BR&cc=BR`, 10000);
    lista = lerRss(xml, true, dias);
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
  let proventos: { tipo: string; dataCom: string; pagamento: string; valor: number }[] = [];
  const dl = html.indexOf("dividend-heat-map");
  if (dl > 0) {
    const ini = html.indexOf('data-list="', dl);
    const fim = html.indexOf('"', ini + 11);
    if (ini > 0 && fim > ini) {
      try {
        const arr = JSON.parse(decodificar(html.slice(ini + 11, fim)));
        proventos = arr.slice(0, 40).map((p: any) => ({ tipo: p.etd || p.et || "", dataCom: p.ed || "", pagamento: p.pd || "", valor: Number(p.v) || 0 }));
      } catch (_) { /* formato mudou */ }
    }
  }
  const hoje = Date.now();
  const dt = (s: string) => { const [d, mo, a] = (s || "").split("/").map(Number); return a ? Date.UTC(a, mo - 1, d) : NaN; };
  const ult12 = proventos.filter((p) => { const t = dt(p.dataCom); return !isNaN(t) && hoje - t < 365 * 864e5 && t <= hoje; });
  const soma12m = r2(ult12.reduce((a, p) => a + p.valor, 0), 4);
  const proximos = proventos.filter((p) => dt(p.pagamento) > hoje).sort((a, b) => dt(a.pagamento) - dt(b.pagamento));

  return {
    ind, tagAlong: tagAlong ? num(tagAlong[1]) : null, liquidezDiaria: liq ? num(liq[1]) : null,
    valorizacao12m: val12 ? num(val12[1]) : null, segmentoListagem: segmento, setor, subsetor, segmento: seg2,
    razaoSocial: razao, cnpj, capa: capa && /^https:\/\/static\.statusinvest\.com\.br\//.test(capa) ? capa : null,
    proventos: proventos.slice(0, 12), proventos12m: soma12m, proximosProventos: proximos.slice(0, 4),
  };
}

/* ---------------- Wikidata + Wikipedia: perfil, fatos e fotos ---------------- */
const WD = "https://query.wikidata.org/sparql?format=json&query=";
async function sparql(q: string) {
  const d = await obj(WD + encodeURIComponent(q), 15000, { Accept: "application/sparql-results+json" });
  return d?.results?.bindings || [];
}
export async function wikiPerfil(ticker: string, nome: string) {
  const raiz = ticker.slice(0, 4);
  let rows = await sparql(`SELECT ?item ?t ?art WHERE { ?item p:P414 ?s. ?s pq:P249 ?t. FILTER(?t IN ("${ticker}","${raiz}3","${raiz}4","${raiz}11","${raiz}")) OPTIONAL{?art schema:about ?item; schema:isPartOf <https://pt.wikipedia.org/>} } LIMIT 5`);
  let qid: string | null = rows[0]?.item?.value?.split("/").pop() || null;
  let titulo: string | null = rows.find((r: any) => r.art)?.art?.value?.split("/wiki/")[1] || null;
  if (titulo) titulo = decodeURIComponent(titulo);
  if (!titulo) {
    // Plano B: busca na Wikipedia pelo nome da empresa
    const busca = await obj(`https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=3&srsearch=${encodeURIComponent(nomeCurto(nome) + " empresa")}`);
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
export async function perfilEmpresa(sb: SupabaseClient, ticker: string, horas = 12, forcar = false) {
  const { data: cache } = await sb.from("empresas").select("dados,atualizado_em").eq("ticker", ticker).maybeSingle();
  if (!forcar && cache && Date.now() - Date.parse(cache.atualizado_em) < horas * 36e5) return cache.dados;
  const { data: cot } = await sb.from("cotacoes").select("nome,setor,setor_macro,preco,var_dia,valor_mercado_mi").eq("ticker", ticker).maybeSingle();
  const nomeB3 = cot?.nome || ticker;
  const ant = (cache?.dados || {}) as any;
  const [si, wiki, hist] = await Promise.allSettled([statusInvest(ticker), wikiPerfil(ticker, nomeB3), historico(ticker + ".SA")]);
  const w = wiki.status === "fulfilled" ? wiki.value : ant.wiki || null;
  const nome = w?.titulo || nomeCurto(nomeB3);
  const not = await noticias(`"${ticker}" OR "${nome.replace(/\s*\(.*\)$/, "")}"`, 12, 30).catch(() => ant.noticias || []);
  const h = hist.status === "fulfilled" ? hist.value : null;
  const dados: any = {
    ticker, nome, nomeB3, setor: cot?.setor || null, setorMacro: cot?.setor_macro || null,
    logo: `https://icons.brapi.dev/icons/${ticker}.svg`,
    wiki: w,
    fundamentos: si.status === "fulfilled" ? si.value : ant.fundamentos || null,
    desempenho: h ? indicadores(h) : ant.desempenho || null,
    serie: h ? serieSemanal(h) : ant.serie || [],
    noticias: not,
    fontesComErro: [si, wiki, hist].map((x, i) => (x.status === "rejected" ? ["StatusInvest", "Wikipedia", "Yahoo"][i] : null)).filter(Boolean),
    atualizadoEm: new Date().toISOString(),
  };
  dados.reputacao = reputacao(dados);
  await sb.from("empresas").upsert({ ticker, dados, atualizado_em: dados.atualizadoEm });
  return dados;
}

/* ---------------- Reputação (0 a 100) a partir de dados públicos ---------------- */
export function reputacao(d: any) {
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

/* ---------------- Sinal por ação ---------------- */
export function sinalAcao(ind: any, fund: any, nots: Noticia[], varDia: number | null) {
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
  if (i.margemLiquida != null && i.margemLiquida < 0) add(-2, "A empresa está com prejuízo nos últimos 12 meses.");
  else if (i.pl != null && i.pl > 0 && i.pl < 8 && (i.roe ?? 0) >= 12) add(1, `Preço baixo em relação ao lucro (P/L ${br(i.pl)}) com boa rentabilidade.`);
  else if (i.pl != null && i.pl > 35) add(-1, `Preço alto em relação ao lucro (P/L ${br(i.pl)}).`);
  if (i.dy != null && i.dy >= 7) add(1, `Dividendos altos: ${br(i.dy)}% em 12 meses.`);
  if (i.divLiqEbitda != null && i.divLiqEbitda > 3.5) add(-1, `Dívida elevada (${br(i.divLiqEbitda)}x o EBITDA).`);
  const recentes = nots.filter((n) => n.data && Date.now() - Date.parse(n.data) < 7 * 864e5);
  const pos = recentes.filter((n) => n.tom === "positivo").length, neg = recentes.filter((n) => n.tom === "negativo").length;
  const grave = recentes.find((n) => n.grave);
  if (grave) add(-3, `Notícia que pede cuidado: "${grave.titulo}".`);
  else if (pos - neg >= 2) add(1, `Noticiário da semana positivo (${pl(pos, "boa", "boas")}, ${pl(neg, "ruim", "ruins")}).`);
  else if (neg - pos >= 2) add(-1, `Noticiário da semana negativo (${pl(neg, "ruim", "ruins")}, ${pl(pos, "boa", "boas")}).`);
  if (varDia != null && varDia <= -5) add(-1, `Cai ${br(-varDia)}% hoje.`);

  const sinal = grave && pts < 0 ? "reduzir" : pts >= 4 ? "reforcar" : pts >= 0 ? "manter" : pts >= -3 ? "atencao" : "reduzir";
  motivos.sort((a, b) => Math.abs(b.peso) - Math.abs(a.peso));
  const intro = { reforcar: "Os sinais estão favoráveis.", manter: "Sem motivo forte para mexer.", atencao: "Alguns sinais pedem atenção.", reduzir: "Vários sinais negativos ao mesmo tempo." }[sinal];
  const motivo = [intro, ...motivos.slice(0, 4).map((m) => m.t)].join(" ");
  return { sinal, pontos: pts, motivo, fatores: motivos };
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
export async function selic() {
  const d = await obj("https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json");
  return d?.[0] ? Number(String(d[0].valor).replace(",", ".")) : null;
}
