// Atualiza, sem IA, o termômetro do mercado, os destaques do dia e o sinal de cada ação das carteiras.
// Rodado pelo agendamento a cada 5 minutos no pregão e a cada 3 horas fora dele.
// Um usuário logado também pode pedir a análise imediata de uma ação da própria carteira.
import { SupabaseClient } from "jsr:@supabase/supabase-js@2";
import {
  analistas, atualizarDinamico, dentroDoLimite, historico, indicadores, noticias, nomeCurto, perfilEmpresa, proximoCopom, selic, sinalAcao, TICKER_RE,
} from "./fontes.ts";

const cl = (x: number) => Math.max(-1, Math.min(1, x));
const br = (n: number, d = 1) => n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });

type Contexto = { ibovVar: number | null; sent: any };

async function analisarTicker(sb: SupabaseClient, t: string, ctx: Contexto) {
  const [{ data: cot }, { data: ant }] = await Promise.all([
    sb.from("cotacoes").select("nome,preco,var_dia,setor_macro").eq("ticker", t).maybeSingle(),
    sb.from("analises").select("noticias,indicadores").eq("ticker", t).maybeSingle(),
  ]);
  const perfil: any = await perfilEmpresa(sb, t, 24).catch(() => null);
  const nome = perfil?.nome || nomeCurto(cot?.nome || t);
  // Notícias da semana: renovadas a cada 15 minutos (o resto do sinal é recalculado em toda rodada)
  const notEm = ant?.indicadores?.noticiasEm;
  const reusar = notEm && Date.now() - Date.parse(notEm) < 15 * 60000 && Array.isArray(ant?.noticias);
  const [h, nots] = await Promise.all([
    historico(t + ".SA").catch(() => null),
    reusar ? Promise.resolve(ant!.noticias) : noticias(`"${t}" OR "${nome.replace(/\s*\(.*\)$/, "")}"`, 8, 7).catch(() => ant?.noticias || []),
  ]);
  const ind = h ? indicadores(h) : null;
  const varDia = cot?.var_dia != null ? Number(cot.var_dia) : null;
  const s = sinalAcao(ind, perfil?.fundamentos, nots, varDia, ctx);
  const row: any = {
    ticker: t, nome, setor: cot?.setor_macro || null,
    preco: cot?.preco ?? ind?.preco ?? null, var_dia: varDia,
    sinal: s.sinal, motivo: s.motivo,
    noticias: nots.map(({ titulo, url, fonte, quando, tom, data }: any) => ({ titulo, url, fonte, quando, tom, data })),
    indicadores: { ...(ind || {}), pontos: s.pontos, fatores: s.fatores, ibovVar: ctx.ibovVar, noticiasEm: reusar ? notEm : new Date().toISOString() },
    atualizado_em: new Date().toISOString(),
  };
  if (ctx.sent) row.sentimento = ctx.sent;
  const { error } = await sb.from("analises").upsert(row, { onConflict: "ticker" });
  if (error) throw error;
  // Mantém o gráfico, o desempenho e os analistas do perfil da empresa em dia, sem custo extra
  if (perfil) await atualizarDinamico(sb, t, perfil, { h, sent: ctx.sent ?? null }).catch(() => null);
  return { ticker: t, sinal: s.sinal };
}

async function ibovHoje(sb: SupabaseClient): Promise<number | null> {
  const { data } = await sb.from("painel").select("dados").eq("id", "mercado").maybeSingle();
  const v = (data?.dados as any)?.ibov?.varDia;
  return typeof v === "number" ? v : null;
}

async function mercado(sb: SupabaseClient) {
  const [ibovH, dolH, taxa, manch, top] = await Promise.all([
    historico("^BVSP", "1y").catch(() => null),
    historico("BRL=X", "1mo").catch(() => null),
    selic().catch(() => null),
    noticias('Ibovespa OR "bolsa de valores" OR "mercado financeiro"', 10, 2).catch(() => []),
    sb.from("cotacoes").select("ticker,var_dia,volume").gt("volume", 0).order("volume", { ascending: false }).limit(150),
  ]);
  const { data: anterior } = await sb.from("painel").select("dados").eq("id", "mercado").maybeSingle();
  const ant: any = anterior?.dados || {};
  const fatores: { texto: string; efeito: string }[] = [];
  let nota = 50;
  const partes: string[] = [];

  let ibov: any = ant.ibov || null;
  if (ibovH && ibovH.close.length > 2) {
    const c = ibovH.close, n = c.length;
    const pontos = ibovH.preco ?? c[n - 1];
    const varDia = (pontos / c[n - 2] - 1) * 100;
    const ind = indicadores(ibovH)!;
    ibov = { pontos: Math.round(pontos), varDia: Math.round(varDia * 100) / 100, ret1m: ind.ret1m, ret12m: ind.ret12m, max52: ind.max52 };
    nota += 12 * cl(varDia / 1.5) + 8 * cl((ind.ret5d || 0) / 3) + 6 * cl((ind.ret1m || 0) / 5);
    if (ind.mm50) nota += pontos > ind.mm50 ? 4 : -4;
    fatores.push({ texto: `Ibovespa ${varDia >= 0 ? "sobe" : "cai"} ${br(Math.abs(varDia), 2)}% no dia, a ${pontos.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} pontos.`, efeito: varDia > 0.3 ? "positivo" : varDia < -0.3 ? "negativo" : "neutro" });
    if (ind.ret1m != null) fatores.push({ texto: `No último mês o índice ${ind.ret1m >= 0 ? "acumula alta" : "acumula queda"} de ${br(Math.abs(ind.ret1m))}%${ind.distMax != null && ind.distMax > -2 ? ", perto da máxima do ano" : ""}.`, efeito: ind.ret1m > 2 ? "positivo" : ind.ret1m < -2 ? "negativo" : "neutro" });
    partes.push(`O Ibovespa ${varDia >= 0 ? "sobe" : "cai"} ${br(Math.abs(varDia), 2)}% e está em ${pontos.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} pontos`);
  }
  const lista = top.data || [];
  if (lista.length > 20) {
    const altas = lista.filter((r: any) => Number(r.var_dia) > 0).length;
    const amp = altas / lista.length;
    nota += 8 * cl((amp - 0.5) / 0.25);
    fatores.push({ texto: `${altas} das ${lista.length} ações mais negociadas estão em alta.`, efeito: amp > 0.6 ? "positivo" : amp < 0.4 ? "negativo" : "neutro" });
    partes.push(`${Math.round(amp * 100)}% das ações mais negociadas sobem`);
  }
  let dolar: any = ant.dolar || null;
  if (dolH && dolH.close.length > 2) {
    const c = dolH.close, n = c.length;
    const valor = dolH.preco ?? c[n - 1];
    const varDia = (valor / c[n - 2] - 1) * 100;
    dolar = { valor: Math.round(valor * 1000) / 1000, varDia: Math.round(varDia * 100) / 100 };
    nota += 6 * cl(-varDia / 1);
    fatores.push({ texto: `Dólar ${varDia >= 0 ? "sobe" : "cai"} ${br(Math.abs(varDia), 2)}%, a R$ ${br(valor, 3)}.`, efeito: varDia < -0.3 ? "positivo" : varDia > 0.3 ? "negativo" : "neutro" });
    partes.push(`o dólar ${varDia >= 0 ? "sobe" : "cai"} a R$ ${br(valor, 2)}`);
  }
  if (manch.length >= 3) {
    const pos = manch.filter((m) => m.tom === "positivo").length, neg = manch.filter((m) => m.tom === "negativo").length;
    nota += 6 * cl((pos - neg) / 4);
    fatores.push({ texto: `Manchetes recentes: ${pos} ${pos === 1 ? "positiva" : "positivas"} e ${neg} ${neg === 1 ? "negativa" : "negativas"}.`, efeito: pos > neg + 1 ? "positivo" : neg > pos + 1 ? "negativo" : "neutro" });
  }
  const sel = taxa ?? ant.selic?.taxa ?? null;
  if (sel != null && sel >= 12) fatores.push({ texto: `Selic em ${br(sel, 2)}% ao ano: juros altos deixam a renda fixa atrativa e pesam sobre a bolsa.`, efeito: "negativo" });
  nota = Math.max(0, Math.min(100, Math.round(nota)));
  const rotulo = nota < 25 ? "Risco de queda" : nota < 45 ? "Cautela" : nota < 60 ? "Neutro" : nota < 80 ? "Favorável" : "Muito favorável";
  const resumo = partes.length ? partes.join("; ").replace(/^./, (c) => c.toUpperCase()) + "." : ant.termometro?.resumo || "";
  const dados = {
    ibov, dolar, selic: { taxa: sel, proximoCopom: proximoCopom() },
    manchetes: manch.length ? manch.map(({ titulo, url, fonte, quando, tom, data }) => ({ titulo, url, fonte, quando, tom, data })) : ant.manchetes || [],
    termometro: { nota, rotulo, resumo, fatores },
    atualizadoEm: new Date().toISOString(),
  };
  await sb.from("painel").upsert({ id: "mercado", dados, atualizado_em: dados.atualizadoEm });

  // Destaques do dia: maiores variações entre as mais negociadas, com a notícia mais recente de cada uma
  const mov = lista.slice().sort((a: any, b: any) => Math.abs(b.var_dia) - Math.abs(a.var_dia)).slice(0, 6);
  if (mov.length) {
    const { data: nomes } = await sb.from("cotacoes").select("ticker,nome").in("ticker", mov.map((m: any) => m.ticker));
    const itens = await Promise.all(mov.map(async (m: any) => {
      const nome = nomeCurto((nomes || []).find((x: any) => x.ticker === m.ticker)?.nome || m.ticker);
      const n = (await noticias(`"${m.ticker}" OR "${nome}"`, 1, 2).catch(() => []))[0];
      const v = Number(m.var_dia);
      return {
        ticker: m.ticker, nome, tom: v > 0 ? "positivo" : v < 0 ? "negativo" : "neutro",
        motivo: `${v >= 0 ? "Sobe" : "Cai"} ${br(Math.abs(v), 2)}% hoje.` + (n ? ` ${n.titulo} (${n.fonte})` : ""),
        url: n?.url || null,
      };
    }));
    await sb.from("painel").upsert({ id: "em_alta", dados: { fonte: "Maiores variações do dia entre as 150 ações mais negociadas, com a notícia mais recente de cada uma.", itens }, atualizado_em: new Date().toISOString() });
  }
  return { nota, rotulo };
}

export async function rodarAnalise(sb: SupabaseClient, quem: { cron: boolean; userId: string | null }, body: any): Promise<[unknown, number]> {
  // Usuário: só uma ação da própria carteira
  if (!quem.cron) {
    const t = String(body.ticker || "").toUpperCase();
    if (!TICKER_RE.test(t)) return [{ ok: false, erro: "ticker" }, 400];
    const { data: tem } = await sb.from("carteira").select("id").eq("user_id", quem.userId).eq("ticker", t).limit(1);
    if (!tem || !tem.length) return [{ ok: false, erro: "fora_da_carteira" }, 403];
    const { data: a } = await sb.from("analises").select("atualizado_em").eq("ticker", t).maybeSingle();
    if (a && Date.now() - Date.parse(a.atualizado_em) < 4 * 60000) return [{ ok: true, pulado: true }, 200];
    if (!(await dentroDoLimite(sb, quem.userId!, "analisar", 120))) return [{ ok: false, erro: "limite" }, 429];
    const [ibovVar, an] = await Promise.all([ibovHoje(sb), analistas([t]).catch(() => ({} as Record<string, any>))]);
    return [{ ok: true, ...(await analisarTicker(sb, t, { ibovVar, sent: an[t] || null })) }, 200];
  }

  // Agendamento: mercado + todas as ações das carteiras que estão há mais de 4 minutos sem análise
  const res: any = { ok: true };
  const { data: pm } = await sb.from("painel").select("atualizado_em").eq("id", "mercado").maybeSingle();
  if (body.forcar || !pm || Date.now() - Date.parse(pm.atualizado_em) > 4 * 60000) res.mercado = await mercado(sb).catch((e) => ({ erro: String(e?.message || e) }));
  const { data: cart } = await sb.from("carteira").select("ticker");
  const tickers: string[] = [...new Set<string>((cart || []).map((c: any) => String(c.ticker)))];
  const { data: ans } = await sb.from("analises").select("ticker,atualizado_em").in("ticker", tickers.length ? tickers : ["-"]);
  const idade = (t: string) => { const a = (ans || []).find((x: any) => x.ticker === t); return a ? Date.now() - Date.parse(a.atualizado_em) : Infinity; };
  const velhas = tickers.filter((t) => body.forcar || idade(t) > 4 * 60000).sort((a, b) => idade(b) - idade(a));
  // Até 20 por rodada, 5 em paralelo, para caber no tempo máximo da função
  const fila = velhas.slice(0, Math.min(Number(body.lote) || 20, 30));
  const [ibovVar, sentMap] = await Promise.all([ibovHoje(sb), analistas(fila).catch((e) => { res.analistasErro = String(e?.message || e); return {} as Record<string, any>; })]);
  res.acoes = [];
  for (let i = 0; i < fila.length; i += 5) {
    res.acoes.push(...await Promise.all(fila.slice(i, i + 5).map((t) => analisarTicker(sb, t, { ibovVar, sent: sentMap[t] || null }).catch((e) => ({ ticker: t, erro: String(e?.message || e) })))));
  }
  res.restantes = velhas.length - fila.length;
  return [res, 200];
}
