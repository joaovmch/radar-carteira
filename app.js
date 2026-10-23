/* Radar da Carteira: site estático com login e dados no Supabase. */
(function () {
  "use strict";
  const SUPABASE_URL = "https://urdtzrquiypewetklwxm.supabase.co";
  // Chave pública (anon), feita para ficar no navegador. A proteção dos dados vem das regras de RLS do banco.
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZHR6cnF1aXlwZXdldGtsd3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0MzYzODksImV4cCI6MjEwODAxMjM4OX0.kd8j09OBpMrUcnKVyYqgFcBLhbOqSfPi3ccmlviAFdo";
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const $ = (s) => document.querySelector(s);
  const S = { user: null, carteira: [], cot: [], cotMap: {}, cotTs: null, analises: {}, painel: {}, empresas: {}, open: null, newsTk: null, confirmDel: null, lim: 50, signup: false, emp: null };

  const brl = (n) => (n == null || isNaN(n)) ? "—" : Number(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const num = (n, d = 2) => (n == null || isNaN(n)) ? "—" : Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const pct = (n) => (n == null || isNaN(n)) ? "—" : (n > 0 ? "+" : "") + num(n, 2) + "%";
  const cls = (n) => n > 0 ? "up" : n < 0 ? "down" : "";
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => /^https:\/\/[^\s"'<>]+$/i.test(u || "") ? u : (/^http:\/\/[^\s"'<>]+$/i.test(u || "") ? u.replace(/^http:/i, "https:") : null);
  const IMG_OK = /^https:\/\/(icons\.brapi\.dev|upload\.wikimedia\.org|commons\.wikimedia\.org)\//;
  const safeImg = (u) => IMG_OK.test(u || "") ? u : null;
  const TICKER_RE = /^[A-Z][A-Z0-9]{2}[A-Z]\d{1,2}$/;
  const compacto = (n) => n >= 1e12 ? num(n / 1e12, 2) + " tri" : n >= 1e9 ? num(n / 1e9, 1) + " bi" : n >= 1e6 ? num(n / 1e6, 1) + " mi" : n >= 1e3 ? num(n / 1e3, 0) + " mil" : num(n, 0);
  function bonito(s) { return String(s || "").toLowerCase().replace(/(^|[\s\-\/(])(\p{L})/gu, (m, a, b) => a + b.toUpperCase()).replace(/\bS\.a\.?/gi, "S.A."); }
  function ago(iso) {
    if (!iso) return ""; const t = Date.parse(iso); if (isNaN(t)) return "";
    const m = Math.round((Date.now() - t) / 60000);
    if (m < 1) return "agora há pouco"; if (m < 60) return "há " + m + " min";
    const h = Math.round(m / 60); if (h < 24) return "há " + h + " h";
    const d = Math.round(h / 24); return "há " + d + (d === 1 ? " dia" : " dias");
  }
  const fresco = (iso, dias) => iso && Date.now() - Date.parse(iso) < dias * 864e5;
  function showNotice(t) { const n = $("#notice"); n.textContent = t; n.hidden = false; clearTimeout(showNotice._t); showNotice._t = setTimeout(() => { n.hidden = true; }, 10000); }
  async function radar(body) {
    const { data, error } = await sb.functions.invoke("radar", { body });
    if (error) { let ctx = null; try { ctx = await error.context.json(); } catch (_) { /* sem corpo */ } throw Object.assign(new Error((ctx && ctx.erro) || "falha"), { ctx }); }
    return data;
  }

  /* ---------- Pregão (com feriados da B3) ---------- */
  const FERIADOS = new Set(["2026-11-02", "2026-11-20", "2026-12-24", "2026-12-25", "2026-12-31", "2027-01-01", "2027-02-08", "2027-02-09", "2027-03-26", "2027-04-21", "2027-05-27", "2027-09-07", "2027-10-12", "2027-11-02", "2027-11-15", "2027-12-24", "2027-12-31"]);
  function pregao() {
    const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
    const g = (t) => (parts.find((p) => p.type === t) || {}).value;
    const dia = g("year") + "-" + g("month") + "-" + g("day");
    const mins = (+g("hour") % 24) * 60 + (+g("minute"));
    const feriado = FERIADOS.has(dia);
    const util = !["Sat", "Sun"].includes(g("weekday")) && !feriado;
    const aberto = util && mins >= 600 && mins < 1020;
    $("#pregao").classList.toggle("aberto", aberto);
    $("#pregao-txt").textContent = aberto ? "Pregão aberto" : feriado ? "Feriado na B3" : (util && mins < 600 ? "Pregão abre às 10h" : "Pregão fechado");
  }
  pregao(); setInterval(pregao, 60000);

  /* ---------- Login ---------- */
  function setAuthMode(signup) {
    S.signup = signup;
    $("#auth-title").textContent = signup ? "Criar conta" : "Entrar";
    $("#auth-sub").textContent = signup ? "Use seu e-mail e uma senha de pelo menos 8 caracteres, com letras e números." : "Acesse sua carteira de qualquer celular ou computador.";
    $("#a-go").textContent = signup ? "Criar conta" : "Entrar";
    $("#a-toggle").textContent = signup ? "Já tenho conta" : "Criar conta";
    $("#a-senha").autocomplete = signup ? "new-password" : "current-password";
    $("#a-msg").textContent = ""; $("#a-reset").hidden = signup;
  }
  const senhaFraca = (s) => s.length < 8 || !/[a-z]/i.test(s) || !/\d/.test(s);
  let modoNovaSenha = false;
  $("#a-toggle").addEventListener("click", () => setAuthMode(!S.signup));
  $("#auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (modoNovaSenha) return salvarNovaSenha();
    const email = $("#a-email").value.trim(), senha = $("#a-senha").value, msg = $("#a-msg");
    msg.className = "msg down";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = "Digite um e-mail válido."; return; }
    if (!senha) { msg.textContent = "Digite sua senha."; return; }
    if (S.signup && senhaFraca(senha)) { msg.textContent = "Use pelo menos 8 caracteres, com letras e números."; return; }
    $("#a-go").disabled = true; msg.className = "msg"; msg.textContent = S.signup ? "Criando conta…" : "Entrando…";
    try {
      if (S.signup) {
        const { data, error } = await sb.auth.signUp({ email, password: senha, options: { emailRedirectTo: location.origin + location.pathname } });
        if (error) throw error;
        if (!data.session) { setAuthMode(false); msg.className = "msg"; msg.textContent = "Conta criada. Confirme pelo link enviado para " + email + " e depois entre aqui."; }
      } else {
        const { error } = await sb.auth.signInWithPassword({ email, password: senha });
        if (error) throw error;
      }
      $("#a-senha").value = "";
    } catch (err) {
      const m = String(err && err.message || "");
      msg.className = "msg down";
      msg.textContent = /invalid login/i.test(m) ? "E-mail ou senha incorretos." : /not confirmed/i.test(m) ? "Confirme seu e-mail pelo link que enviamos antes de entrar." : /already registered/i.test(m) ? "Este e-mail já tem conta. Use Entrar." : /rate limit|too many/i.test(m) ? "Muitas tentativas. Espere alguns minutos e tente de novo." : /signups? not allowed|disabled/i.test(m) ? "O cadastro de novas contas está fechado." : /weak|pwned|leaked/i.test(m) ? "Essa senha é fraca ou apareceu em vazamentos. Escolha outra." : "Não deu certo agora. Tente de novo.";
    } finally { $("#a-go").disabled = false; }
  });
  $("#a-reset").addEventListener("click", async () => {
    const email = $("#a-email").value.trim(), msg = $("#a-msg");
    if (!email) { msg.className = "msg down"; msg.textContent = "Digite seu e-mail acima e toque de novo em Esqueci minha senha."; return; }
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
    msg.className = error ? "msg down" : "msg";
    // Mesma mensagem exista ou não a conta, para não revelar quais e-mails estão cadastrados
    msg.textContent = error ? "Não foi possível enviar agora. Tente em alguns minutos." : "Se houver uma conta com " + email + ", enviamos um link para criar uma nova senha.";
  });
  $("#btn-sair").addEventListener("click", async () => { await sb.auth.signOut({ scope: "local" }); });

  function pedirNovaSenha() {
    modoNovaSenha = true;
    setAuthMode(false); $("#auth").hidden = false; $("#app").hidden = true;
    $("#auth-title").textContent = "Nova senha"; $("#auth-sub").textContent = "Digite a nova senha da sua conta (pelo menos 8 caracteres, com letras e números).";
    $("#a-email").closest("label").hidden = true; $("#a-toggle").hidden = true; $("#a-reset").hidden = true; $("#a-go").textContent = "Salvar senha";
    $("#a-senha").value = ""; $("#a-senha").autocomplete = "new-password"; $("#a-senha").focus();
  }
  async function salvarNovaSenha() {
    const nova = $("#a-senha").value, msg = $("#a-msg");
    if (senhaFraca(nova)) { msg.className = "msg down"; msg.textContent = "Use pelo menos 8 caracteres, com letras e números."; return; }
    $("#a-go").disabled = true;
    const { error } = await sb.auth.updateUser({ password: nova });
    $("#a-go").disabled = false;
    if (error) { msg.className = "msg down"; msg.textContent = "Não foi possível trocar a senha. Peça um novo link."; return; }
    modoNovaSenha = false; $("#a-senha").value = "";
    $("#a-email").closest("label").hidden = false; $("#a-toggle").hidden = false;
    showNotice("Senha alterada.");
    mostrarApp(!!S.user);
  }
  function mostrarApp(logado) {
    ["#app", "#btn-sair", "#btn-refresh", "#tabs"].forEach((s) => { $(s).hidden = !logado; });
    $("#auth").hidden = logado;
  }

  // Não chamar outras funções do Supabase com await dentro deste callback (pode travar a sessão)
  sb.auth.onAuthStateChange((ev, session) => {
    setTimeout(() => {
      if (ev === "PASSWORD_RECOVERY") { S.user = session ? session.user : null; pedirNovaSenha(); return; }
      if (modoNovaSenha) return;
      const u = session ? session.user : null;
      if ((u && u.id) === (S.user && S.user.id)) return;
      S.user = u;
      mostrarApp(!!u);
      if (u) iniciar(); else { fecharEmpresa(); parar(); setAuthMode(false); }
    }, 0);
  });

  /* ---------- Dados ---------- */
  let canal = null;
  async function iniciar() {
    await Promise.all([carregarCarteira().then(carregarEmpresas), carregarCotacoes(), carregarAnalises(), carregarPainel()]);
    renderAll();
    if (canal) sb.removeChannel(canal);
    let tCot = null;
    canal = sb.channel("radar")
      .on("postgres_changes", { event: "*", schema: "public", table: "cotacoes" }, () => { clearTimeout(tCot); tCot = setTimeout(async () => { await carregarCotacoes(); renderCarteira(); renderTodas(); renderDiv(); renderRecs(); renderEmpresas(); renderStatus(); }, 1500); })
      .on("postgres_changes", { event: "*", schema: "public", table: "analises" }, async () => { await carregarAnalises(); renderCarteira(); renderNews(); renderEmpresas(); })
      .on("postgres_changes", { event: "*", schema: "public", table: "painel" }, async () => { await carregarPainel(); renderMercado(); renderRecs(); renderDiv(); renderNews(); })
      .on("postgres_changes", { event: "*", schema: "public", table: "carteira" }, async () => { await carregarCarteira(); await carregarEmpresas(); renderAll(); })
      .subscribe();
    abrirPeloEndereco();
  }
  function parar() { if (canal) { sb.removeChannel(canal); canal = null; } S.carteira = []; S.analises = {}; S.painel = {}; S.empresas = {}; }
  async function carregarCarteira() {
    const { data, error } = await sb.from("carteira").select("id,ticker,qtd,pm").order("criado_em");
    if (error) { showNotice("Não foi possível carregar sua carteira. Recarregue a página."); return; }
    S.carteira = data || [];
  }
  async function carregarCotacoes() {
    const { data, error } = await sb.from("cotacoes").select("ticker,nome,preco,var_dia,volume,setor,setor_macro,valor_mercado_mi,atualizado_em").order("volume", { ascending: false }).limit(1000);
    if (error || !data) return;
    S.cot = data; const mp = {}; let ts = null; data.forEach((r) => { mp[r.ticker] = r; if (!ts || r.atualizado_em > ts) ts = r.atualizado_em; }); S.cotMap = mp; S.cotTs = ts;
  }
  async function carregarAnalises() {
    const { data } = await sb.from("analises").select("*"); const o = {}; (data || []).forEach((a) => { o[a.ticker] = a; }); S.analises = o;
  }
  async function carregarPainel() {
    const { data } = await sb.from("painel").select("id,dados,atualizado_em"); const o = {}; (data || []).forEach((p) => { o[p.id] = { ...p.dados, _ts: p.atualizado_em }; }); S.painel = o;
  }
  async function carregarEmpresas() {
    const tks = S.carteira.map((p) => p.ticker); if (!tks.length) return;
    const { data } = await sb.from("empresas").select("ticker,dados,atualizado_em").in("ticker", tks);
    (data || []).forEach((e) => { S.empresas[e.ticker] = e.dados; });
  }
  setInterval(() => { if (S.user && document.visibilityState === "visible") { renderStatus(); renderMercado(); } }, 60000);
  document.addEventListener("visibilitychange", async () => { if (S.user && document.visibilityState === "visible") { await Promise.all([carregarCotacoes(), carregarAnalises(), carregarPainel()]); renderAll(); } });

  /* Atualizar cotações agora */
  $("#btn-refresh").addEventListener("click", async () => {
    const b = $("#btn-refresh"); b.disabled = true; b.textContent = "Atualizando…";
    try {
      const data = await radar({ acao: "cotacoes" });
      if (!data || !data.ok) throw new Error(data && data.erro);
      await carregarCotacoes(); renderAll();
      showNotice(data.pulado ? "As cotações já foram atualizadas no último minuto." : "Cotações de " + data.acoes + " ações atualizadas.");
    } catch (e) { showNotice("Não foi possível atualizar agora. As cotações seguem se atualizando sozinhas a cada 2 minutos no pregão."); }
    finally { b.disabled = false; b.textContent = "Atualizar cotações"; }
  });

  function renderAll() { renderStatus(); renderMercado(); renderCarteira(); renderDiv(); renderRecs(); renderNews(); renderEmpresas(); renderTodas(); }
  function renderStatus() { $("#last-upd").textContent = S.cotTs ? "Cotações " + ago(S.cotTs) : ""; }

  /* ---------- Termômetro ---------- */
  const ZONES = [[0, 25, "var(--down)"], [25, 45, "var(--warn)"], [45, 60, "var(--muted)"], [60, 80, "var(--up)"], [80, 100, "var(--up)"]];
  function polar(r, deg) { const a = deg * Math.PI / 180; return [110 + r * Math.cos(a), 110 - r * Math.sin(a)]; }
  (function () { let h = ""; ZONES.forEach(([a, b, c], i) => { const [x1, y1] = polar(88, 180 - a * 1.8), [x2, y2] = polar(88, 180 - b * 1.8 + (b < 100 ? 1.2 : 0)); h += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} A88 88 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${c}" stroke-width="${i === 4 ? 16 : 14}" fill="none" opacity="${i === 2 ? .55 : i === 3 ? .7 : 1}"/>`; }); $("#arcs").innerHTML = h; })();
  function rotulo(n) { return n < 25 ? "Risco de queda" : n < 45 ? "Cautela" : n < 60 ? "Neutro" : n < 80 ? "Favorável" : "Muito favorável"; }
  function renderMercado() {
    const m = S.painel.mercado; if (!m) return;
    const t = m.termometro || {}; const nota = Math.max(0, Math.min(100, Number(t.nota) || 50));
    $("#needle").style.transform = `rotate(${(nota - 50) * 1.8}deg)`;
    $("#thermo-rot").textContent = t.rotulo || rotulo(nota); $("#thermo-rot").className = "rot " + (nota < 45 ? "negativo" : nota >= 60 ? "positivo" : "");
    $("#thermo-score").textContent = "nota " + Math.round(nota) + " de 100";
    $("#thermo-resumo").textContent = t.resumo || "";
    $("#fatores").innerHTML = (t.fatores || []).map((f) => { const e = ["positivo", "negativo"].includes(f.efeito) ? f.efeito : "neutro"; return `<li><span class="mark ${e}">${e === "positivo" ? "+" : e === "negativo" ? "−" : "·"}</span><span>${esc(f.texto)}</span></li>`; }).join("");
    const ts = m.atualizadoEm || m._ts;
    $("#thermo-when").textContent = ts ? "Atualizado " + ago(ts) : "";
    if (m.ibov) { $("#m-ibov").textContent = num(m.ibov.pontos, 0); $("#m-ibov-v").textContent = pct(m.ibov.varDia); $("#m-ibov-v").className = cls(m.ibov.varDia); }
    if (m.dolar) { $("#m-dolar").textContent = "R$ " + num(m.dolar.valor, 3); $("#m-dolar-v").textContent = pct(m.dolar.varDia); $("#m-dolar-v").className = cls(-m.dolar.varDia); }
    if (m.selic && m.selic.taxa != null) { $("#m-selic").textContent = num(m.selic.taxa, 2) + "%"; $("#m-copom").textContent = m.selic.proximoCopom ? "Copom " + m.selic.proximoCopom : ""; }
    $("#news-mkt").innerHTML = newsItems((m.manchetes || []).map((n) => ({ ...n, ticker: null })), "Sem manchetes ainda.");
  }
  function newsItems(list, emptyText) {
    if (!list.length) return `<li class="skel" style="display:block">${esc(emptyText)}</li>`;
    return list.map((n) => {
      const u = safeUrl(n.url), tom = ["positivo", "negativo"].includes(n.tom) ? n.tom : "neutro";
      const title = u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(n.titulo)}</a>` : `<span>${esc(n.titulo)}</span>`;
      return `<li>${n.ticker ? `<span class="tag">${esc(n.ticker)}</span>` : `<span class="tom ${tom}" style="margin-top:8px"></span>`}<div style="min-width:0">${title}</div><div class="src">${n.ticker ? `<span class="tom ${tom}"></span>` : ""}<span>${esc(n.fonte || "")}</span><span>${esc(n.data ? ago(n.data) : n.quando || "")}</span></div></li>`;
    }).join("");
  }

  /* ---------- Carteira ---------- */
  const SINAL = { reforcar: "Considerar reforçar", manter: "Manter", atencao: "Atenção", reduzir: "Considerar reduzir" };
  function cotacao(t) {
    const c = S.cotMap[t], a = S.analises[t];
    if (c) return { preco: Number(c.preco), varDia: Number(c.var_dia), nome: (a && a.nome) || bonito(c.nome), setor: c.setor_macro };
    if (a && a.preco != null) return { preco: Number(a.preco), varDia: a.var_dia != null ? Number(a.var_dia) : null, nome: a.nome, setor: null };
    return null;
  }
  function linhas() {
    let patr = 0;
    const rows = S.carteira.map((p) => {
      const q = cotacao(p.ticker); const preco = q ? q.preco : null, vd = q ? q.varDia : null; const valor = preco != null ? preco * p.qtd : null; if (valor) patr += valor;
      const res = (preco != null && p.pm) ? (preco / p.pm - 1) * 100 : null; return { p, a: S.analises[p.ticker] || null, preco, vd, valor, res, nome: q ? q.nome : "", setor: (q && q.setor) || "Outros" };
    });
    rows.forEach((r) => { r.peso = (r.valor && patr) ? r.valor / patr : 0; });
    rows.sort((x, y) => (y.valor || 0) - (x.valor || 0));
    return { rows, patr };
  }
  function indHtml(ind) {
    if (!ind || ind.preco == null) return "";
    const it = [["1 mês", ind.ret1m], ["3 meses", ind.ret3m], ["12 meses", ind.ret12m]].filter((x) => x[1] != null);
    return `<div class="meta">${it.map(([l, v]) => `<span>${l}<b class="${cls(v)}">${pct(v)}</b></span>`).join("")}${ind.rsi != null ? `<span>IFR (14 dias)<b>${num(ind.rsi, 0)}</b></span>` : ""}${ind.mm50 ? `<span>Média 50 dias<b>${brl(ind.mm50)}</b></span>` : ""}</div>`;
  }
  function renderCarteira() {
    const box = $("#pos-list"), list = S.carteira;
    if (S.cot.length && !$("#dl-tickers").children.length) $("#dl-tickers").innerHTML = S.cot.map((r) => `<option value="${esc(r.ticker)}">${esc(bonito(r.nome))}</option>`).join("");
    $("#pos-head").hidden = !list.length;
    if (!list.length) {
      box.innerHTML = `<div class="empty"><strong>Sua carteira está vazia</strong>Adicione abaixo o código de cada ação e quantas você tem, ou toque em "+ Adicionar" nas recomendações ou na lista de todas as ações.</div>`;
      ["#t-patr", "#t-dia", "#t-res"].forEach((s) => { $(s).textContent = "—"; $(s).className = ""; }); $("#alerts").hidden = true; $("#cart-when").textContent = "";
      $("#addbox").open = true;
      return;
    }
    const { rows, patr } = linhas(); let dia = 0, custo = 0, base = 0, temPreco = false;
    rows.forEach((r) => { if (r.valor != null) { temPreco = true; if (r.vd != null) dia += r.valor - r.valor / (1 + r.vd / 100); if (r.p.pm) { custo += r.p.pm * r.p.qtd; base += r.valor; } } });
    $("#t-patr").textContent = temPreco ? brl(patr) : "—";
    $("#t-dia").innerHTML = temPreco ? esc((dia >= 0 ? "+" : "") + brl(dia)) + (patr ? `<small>${esc(pct(dia / (patr - dia) * 100))}</small>` : "") : "—"; $("#t-dia").className = cls(dia);
    if (custo) { const res = base - custo; $("#t-res").innerHTML = esc((res >= 0 ? "+" : "") + brl(res)) + `<small>${esc(pct((base / custo - 1) * 100))}</small>`; $("#t-res").className = cls(res); }
    else { $("#t-res").innerHTML = `<span class="hint">Informe o preço médio para ver seu lucro</span>`; $("#t-res").className = ""; }
    const sinais = rows.filter((r) => r.a && r.a.atualizado_em).map((r) => r.a.atualizado_em).sort();
    $("#cart-when").textContent = list.length + (list.length === 1 ? " ação" : " ações") + (sinais.length ? " · sinais " + ago(sinais[sinais.length - 1]) : "");

    const al = [];
    rows.forEach((r) => {
      const s = r.a && r.a.sinal, frase = (txt) => (txt || "").replace(/^(Os sinais estão favoráveis|Sem motivo forte para mexer|Alguns sinais pedem atenção|Vários sinais negativos ao mesmo tempo)\.\s*/, "").split(". ")[0];
      if (s === "reduzir") al.push({ t: r.p.ticker, k: "neg", txt: "Sinal: considerar reduzir. " + frase(r.a.motivo) + "." });
      else if (s === "atencao") al.push({ t: r.p.ticker, k: "", txt: (frase(r.a.motivo) || "Pede atenção") + "." });
      if (r.vd != null && Math.abs(r.vd) >= 3) al.push({ t: r.p.ticker, k: r.vd < 0 ? "neg" : "pos", txt: (r.vd < 0 ? "Cai " : "Sobe ") + pct(Math.abs(r.vd)).replace("+", "") + " hoje." });
      if (r.res != null && r.res <= -15) al.push({ t: r.p.ticker, k: "neg", txt: "Está " + num(-r.res, 1) + "% abaixo do seu preço médio." });
    });
    $("#alerts").hidden = !al.length;
    $("#alerts").innerHTML = al.slice(0, 6).map((a) => `<button type="button" class="alert ${a.k}" data-open="${esc(a.t)}"><span class="tk" style="font-size:15px">${esc(a.t)}</span><span>${esc(a.txt)}</span></button>`).join("");

    box.innerHTML = rows.map((r) => {
      const { p, a, preco, vd, valor, res, nome } = r; const sinal = a && SINAL[a.sinal] ? a.sinal : "pendente"; const open = S.open === p.ticker;
      const temSent = !!(a && a.sentimento && fresco(a.sentimento.atualizadoEm || a.atualizado_em, 15));
      const nNews = a && Array.isArray(a.noticias) ? a.noticias.length : 0;
      const ind = a && a.indicadores; const fat = (ind && ind.fatores) || [];
      const detail = !open ? "" : `<div class="pos-detail two">
        <div class="pd-col">
          ${a ? `<p class="motivo">${esc(a.motivo || "")}</p>` : `<p class="neutro">A análise de ${esc(p.ticker)} está sendo preparada e aparece aqui em instantes.</p>`}
          <div class="meta"><span>Quantidade<b>${num(p.qtd, 0)}</b></span><span>Preço médio<b>${p.pm ? brl(p.pm) : "—"}</b></span><span>Hoje<b class="${vd != null ? cls(vd) : ""}">${vd != null ? pct(vd) : "—"}</b></span><span>Peso<b>${num(r.peso * 100, 1)}%</b></span><span>Setor<b style="font-family:var(--body);font-size:12.5px">${esc(r.setor)}</b></span></div>
          <div class="acts"><button type="button" class="btn sm primary" data-emp="${esc(p.ticker)}">Ver empresa</button>${nNews ? `<button type="button" class="btn sm" data-news="${esc(p.ticker)}">Ver ${nNews} ${nNews === 1 ? "notícia" : "notícias"}</button>` : ""}<button type="button" class="btn sm" data-edit="${esc(p.ticker)}">Editar</button>
          ${S.confirmDel === p.ticker ? `<button type="button" class="btn sm danger" data-del-ok="${esc(p.ticker)}">Confirmar remoção</button><button type="button" class="btn ghost sm" data-del-no="1">Cancelar</button>` : `<button type="button" class="btn ghost sm" data-del="${esc(p.ticker)}">Remover</button>`}</div>
          ${a && a.atualizado_em ? `<span class="hint">Sinal recalculado ${esc(ago(a.atualizado_em))}</span>` : ""}
        </div>
        <div class="pd-col">
          ${fat.length ? `<div><div class="h3" style="font-size:14px;margin-bottom:6px">Por que esse sinal</div><ul class="fat-list">${fat.map((f) => `<li><span class="mark ${f.peso > 0 ? "positivo" : f.peso < 0 ? "negativo" : "neutro"}">${f.peso > 0 ? "+" : f.peso < 0 ? "−" : "·"}</span><span>${esc(f.t)}</span></li>`).join("")}</ul></div>` : ""}
          ${indHtml(ind)}
          ${temSent ? sentHtml(a.sentimento, preco) : ""}
        </div>
      </div>`;
      return `<div class="pos${open ? " open" : ""}"><button type="button" class="pos-row" data-open="${esc(p.ticker)}" aria-expanded="${open}">
        <span style="min-width:0"><span class="tk">${esc(p.ticker)}</span><span class="chev" aria-hidden="true"></span><span class="nm">${esc(nome)}</span></span>
        <span class="cell c-preco"><b>${brl(preco)}</b><small class="${vd != null ? cls(vd) : ""}">${vd != null ? pct(vd) : ""}</small></span>
        <span class="cell"><b>${brl(valor)}</b><small class="${res != null ? cls(res) : ""}">${res != null ? pct(res) : num(p.qtd, 0) + " ações"}</small></span>
        <span class="c-sent">${repChip(p.ticker)}</span>
        <span class="c-sig"><span class="pill s-${sinal}">${sinal === "pendente" ? "Aguardando" : SINAL[sinal]}</span></span></button>${detail}</div>`;
    }).join("");
  }
  function repChip(t) {
    const e = S.empresas[t]; const r = e && e.reputacao;
    if (!r || r.nota == null) return '<span class="hint">—</span>';
    const c = r.nota >= 70 ? "otim" : r.nota < 50 ? "pess" : "div";
    return `<span class="chip-s ${c}" title="Reputação da empresa: ${Math.round(r.nota)} de 100">${esc(r.rotulo || "")} · ${Math.round(r.nota)}</span>`;
  }

  /* ---------- Sentimento de analistas (revisão manual, só se recente) ---------- */
  function sentClasse(n) { return n >= 60 ? "otim" : n < 45 ? "pess" : "div"; }
  function sentChip(s) { const n = Number(s.nota); if (isNaN(n)) return ""; return `<span class="chip-s ${sentClasse(n)}" title="Sentimento de analistas e investidores: ${Math.round(n)} de 100">${esc(s.rotulo || "")}</span>`; }
  function sentHtml(s, preco) {
    const an = s.analistas || {}; const c = +an.compra || 0, n = +an.neutro || 0, v = +an.venda || 0, t = c + n + v;
    const alvo = an.alvoMedio != null ? Number(an.alvoMedio) : null; const pot = (alvo && preco) ? (alvo / preco - 1) * 100 : (an.potencial != null ? Number(an.potencial) : null);
    const fontes = (s.fontes || []).map((f) => { const u = safeUrl(f.url); return u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(f.nome || "fonte")}</a>` : ""; }).filter(Boolean).join(" · ");
    return `<div class="sent">
      <div class="sent-h"><strong>O que os analistas acham</strong><span>${sentChip(s)}</span></div>
      ${t ? `<div class="sbar" role="img" aria-label="${c} compra, ${n} neutro, ${v} venda"><i class="c" style="width:${c / t * 100}%"></i><i class="n" style="width:${n / t * 100}%"></i><i class="v" style="width:${v / t * 100}%"></i></div>
      <div class="sleg"><span><b>${c}</b> compra</span><span><b>${n}</b> neutro</span><span><b>${v}</b> venda</span>${alvo ? `<span>Alvo médio <b>${brl(alvo)}</b>${pot != null ? ` <span class="${cls(pot)}">(${pct(pot)})</span>` : ""}</span>` : ""}</div>` : ""}
      ${an.obs ? `<p class="hint" style="font-size:13px">${esc(an.obs)}</p>` : ""}
      <span class="src">${an.fonte ? esc(an.fonte) + (fontes ? " · " : "") : ""}${fontes}</span>
    </div>`;
  }

  /* ---------- Notícias ---------- */
  function renderNews() {
    if (S.newsTk && !S.carteira.some((p) => p.ticker === S.newsTk)) S.newsTk = null;
    const own = []; S.carteira.forEach((p) => { if (S.newsTk && p.ticker !== S.newsTk) return; const a = S.analises[p.ticker]; if (a && Array.isArray(a.noticias)) a.noticias.slice(0, S.newsTk ? 10 : 3).forEach((n) => own.push({ ...n, ticker: p.ticker })); });
    own.sort((x, y) => (y.data || "") > (x.data || "") ? 1 : -1);
    const f = $("#news-filtro"); f.hidden = !S.newsTk;
    if (S.newsTk) f.innerHTML = `<span>Só notícias de <b>${esc(S.newsTk)}</b></span><button type="button" class="btn ghost sm" data-news-all="1">Ver todas</button>`;
    $("#news-own").innerHTML = newsItems(own.slice(0, 24), S.carteira.length ? "As notícias das suas ações aparecem aqui em instantes." : "As notícias aparecem aqui depois que você cadastrar suas ações.");
    const h = S.painel.em_alta;
    $("#hot").innerHTML = h && (h.itens || []).length ? (h.itens || []).map((i) => {
      const q = S.cotMap[i.ticker]; const tom = ["positivo", "negativo"].includes(i.tom) ? i.tom : "neutro"; const u = safeUrl(i.url);
      return `<div class="hot"><button type="button" class="tk-btn" data-emp="${esc(i.ticker)}"><span class="tk" style="font-size:16px">${esc(i.ticker)}</span></button><span style="min-width:0"><span class="tom ${tom}"></span> ${u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="color:inherit">${esc(i.motivo)}</a>` : esc(i.motivo)}</span><span class="price ${q ? cls(q.var_dia) : ""}">${q ? pct(q.var_dia) : ""}</span></div>`;
    }).join("") + (h.fonte ? `<p class="when" style="margin:6px 0 0">${esc(h.fonte)} ${h._ts ? "Atualizado " + esc(ago(h._ts)) + "." : ""}</p>` : "") : `<p class="skel">Carregando…</p>`;
  }
  function abaNoticias(k) {
    document.querySelectorAll("#sec-noticias [data-nt]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.nt === k)));
    document.querySelectorAll("#sec-noticias [data-np]").forEach((p) => { p.hidden = p.dataset.np !== k; });
    $(".news-scroll").scrollTop = 0;
  }
  $("#sec-noticias").addEventListener("click", (e) => {
    const t = e.target.closest("[data-nt]"); if (t) { abaNoticias(t.dataset.nt); return; }
    if (e.target.closest("[data-news-all]")) { S.newsTk = null; renderNews(); }
  });
  function verNoticias(tk) {
    S.newsTk = tk; renderNews(); abaNoticias("own");
    const p = $("#sec-noticias"); const r = p.getBoundingClientRect();
    if (r.top > innerHeight - 80 || r.bottom < 120) p.scrollIntoView({ behavior: "smooth", block: "start" });
    p.classList.remove("flash"); void p.offsetWidth; p.classList.add("flash");
  }
  $("#alerts").addEventListener("click", (e) => { const b = e.target.closest("[data-open]"); if (!b) return; S.open = b.dataset.open; S.confirmDel = null; renderCarteira(); const row = document.querySelector(`.pos-row[data-open="${CSS.escape(b.dataset.open)}"]`); if (row) row.scrollIntoView({ behavior: "smooth", block: "center" }); });
  $("#pos-list").addEventListener("click", async (e) => {
    const b = e.target.closest("button"); if (!b || b.dataset.emp) return;
    if (b.dataset.open) { S.open = S.open === b.dataset.open ? null : b.dataset.open; S.confirmDel = null; renderCarteira(); return; }
    if (b.dataset.news) { verNoticias(b.dataset.news); return; }
    if (b.dataset.edit) { const p = S.carteira.find((x) => x.ticker === b.dataset.edit); if (p) { $("#addbox").open = true; $("#f-ticker").value = p.ticker; $("#f-qtd").value = p.qtd; $("#f-pm").value = p.pm || ""; $("#f-submit").textContent = "Salvar"; $("#form-add").scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => $("#f-qtd").focus({ preventScroll: true }), 300); } return; }
    if (b.dataset.del) { S.confirmDel = b.dataset.del; renderCarteira(); return; }
    if (b.dataset.delNo) { S.confirmDel = null; renderCarteira(); return; }
    if (b.dataset.delOk) {
      const t = b.dataset.delOk; S.confirmDel = null; S.open = null;
      const { error } = await sb.from("carteira").delete().eq("user_id", S.user.id).eq("ticker", t);
      msg(error ? "Não foi possível remover agora." : t + " removida da carteira.", !error);
      await carregarCarteira(); renderAll();
    }
  });
  function msg(t, ok) { const o = $("#form-msg"); o.textContent = t; o.className = "form-msg " + (ok ? "up" : ok === false ? "down" : ""); }
  $("#f-ticker").addEventListener("input", () => { const t = $("#f-ticker").value.trim().toUpperCase(); $("#f-submit").textContent = S.carteira.some((x) => x.ticker === t) ? "Salvar" : "Adicionar"; });
  $("#form-add").addEventListener("submit", async (e) => {
    e.preventDefault();
    const t = $("#f-ticker").value.trim().toUpperCase(), q = Math.round(Number($("#f-qtd").value)), pmRaw = $("#f-pm").value.trim(), pm = pmRaw ? Number(pmRaw.replace(",", ".")) : null;
    if (!TICKER_RE.test(t)) return msg("Use o código da B3, como PETR4, B3SA3 ou TAEE11.", false);
    if (S.cot.length && !S.cotMap[t]) return msg("Não encontrei " + t + " entre as ações da B3. Confira o código na lista de todas as ações.", false);
    if (!(q > 0) || q > 1e9) return msg("Informe uma quantidade entre 1 e 1 bilhão.", false);
    if (pm != null && !(pm > 0 && pm <= 1e7)) return msg("O preço médio precisa ser um valor em reais, como 38,50.", false);
    const existe = S.carteira.some((x) => x.ticker === t);
    $("#f-submit").disabled = true;
    const { error } = await sb.from("carteira").upsert({ ticker: t, qtd: q, pm: pm, user_id: S.user.id }, { onConflict: "user_id,ticker" });
    $("#f-submit").disabled = false;
    if (error) return msg(/Limite de 200/.test(error.message || "") ? "Sua carteira chegou ao limite de 200 ações." : "Não foi possível salvar agora. Tente de novo em instantes.", false);
    $("#form-add").reset(); $("#f-submit").textContent = "Adicionar";
    msg(existe ? t + " atualizada." : t + " adicionada. Calculando o sinal e buscando as notícias dela…", true);
    await carregarCarteira(); renderAll();
    if (!existe) {
      try { await radar({ acao: "analisar", ticker: t }); await Promise.all([carregarAnalises(), carregarEmpresas()]); renderAll(); msg(t + " adicionada, com sinal e notícias.", true); }
      catch (_) { msg(t + " adicionada. O sinal dela aparece na próxima atualização automática.", true); }
    }
  });
  function escolher(t) {
    fecharEmpresa();
    $("#f-ticker").value = t; $("#f-submit").textContent = S.carteira.some((x) => x.ticker === t) ? "Salvar" : "Adicionar";
    msg("Informe quantas ações de " + t + " você tem.");
    $("#addbox").open = true;
    const f = $("#form-add"); f.scrollIntoView({ behavior: "smooth", block: "center" }); f.classList.remove("flash"); void f.offsetWidth; f.classList.add("flash");
    setTimeout(() => $("#f-qtd").focus({ preventScroll: true }), 350);
  }
  document.addEventListener("click", (e) => {
    const p = e.target.closest("[data-pick]"); if (p) { escolher(p.dataset.pick); return; }
    const em = e.target.closest("[data-emp]"); if (em) { e.preventDefault(); abrirEmpresa(em.dataset.emp); return; }
    if (e.target.closest("[data-emp-close]")) fecharEmpresa();
  });

  /* ---------- Empresas ---------- */
  function logoHtml(t, big) {
    return `<img class="lg${big ? " big" : ""}" src="https://icons.brapi.dev/icons/${encodeURIComponent(t)}.svg" alt="" loading="lazy" referrerpolicy="no-referrer" data-fallback="${esc(t.slice(0, 4))}">`;
  }
  // Logo que não carrega vira as letras do código
  document.addEventListener("error", (e) => { const i = e.target; if (i && i.tagName === "IMG" && i.dataset.fallback != null) { const s = document.createElement("span"); s.className = i.className + " lg-x"; s.textContent = i.dataset.fallback; i.replaceWith(s); } else if (i && i.tagName === "IMG" && i.closest(".gal")) { const f = i.closest("figure"); if (f) f.remove(); } }, true);
  function renderEmpresas() {
    const box = $("#emp-grid");
    if (!S.carteira.length) { box.innerHTML = `<p class="skel">Cadastre ações na carteira para vê-las aqui. Você também pode buscar qualquer ação da B3 acima.</p>`; return; }
    box.innerHTML = S.carteira.map((p) => {
      const e = S.empresas[p.ticker], q = S.cotMap[p.ticker], a = S.analises[p.ticker];
      const nome = (e && e.nome) || (a && a.nome) || (q ? bonito(q.nome) : p.ticker);
      const desc = e && e.wiki && e.wiki.descricaoCurta ? e.wiki.descricaoCurta : (e && e.setor) || (q && q.setor) || "";
      return `<button type="button" class="emp-card" data-emp="${esc(p.ticker)}">${logoHtml(p.ticker)}<span style="min-width:0"><span class="tk" style="font-size:16px">${esc(p.ticker)}</span><span class="nm">${esc(nome)}</span></span>${repChip(p.ticker)}<span class="nm" style="grid-column:1 / -1;white-space:normal">${esc(desc)}</span></button>`;
    }).join("");
  }
  $("#emp-form").addEventListener("submit", (e) => {
    e.preventDefault(); const t = $("#emp-q").value.trim().toUpperCase();
    if (!TICKER_RE.test(t) || (S.cot.length && !S.cotMap[t])) { showNotice("Não encontrei " + (t || "esse código") + " entre as ações da B3."); return; }
    $("#emp-q").value = ""; abrirEmpresa(t);
  });

  let empVoltar = null, empPedido = 0;
  async function abrirEmpresa(t) {
    t = String(t || "").toUpperCase(); if (!TICKER_RE.test(t)) return;
    const d = $("#emp-drawer");
    if (d.hidden) { empVoltar = document.activeElement; d.hidden = false; document.body.classList.add("no-scroll"); }
    S.emp = t;
    if (location.hash !== "#empresa-" + t) history.replaceState(null, "", "#empresa-" + t);
    const q = S.cotMap[t];
    cabecalhoEmpresa(t, S.empresas[t] || null);
    const id = ++empPedido;
    if (S.empresas[t]) renderEmpresa(t, S.empresas[t], true);
    else $("#emp-body").innerHTML = `<div class="panel carregando" aria-busy="true"><p class="skel">Buscando o perfil de ${esc(t)}: história, fotos, balanço, dividendos e notícias. Pode levar alguns segundos na primeira vez.</p><i style="width:90%"></i><i style="width:75%"></i><i style="width:82%"></i><i style="width:60%"></i></div>`;
    try {
      const r = await radar({ acao: "empresa", ticker: t });
      if (id !== empPedido) return;
      if (r && r.ok && r.dados) { S.empresas[t] = r.dados; cabecalhoEmpresa(t, r.dados); renderEmpresa(t, r.dados, false); renderEmpresas(); if (S.open === t) renderCarteira(); }
    } catch (e) {
      if (id !== empPedido) return;
      if (!S.empresas[t]) $("#emp-body").innerHTML = `<div class="panel"><p>${e.message === "limite" ? "Você atingiu o limite de consultas de empresas por hoje. Tente amanhã." : "Não foi possível carregar o perfil agora. Tente de novo em instantes."}</p></div>`;
    }
    setTimeout(() => { const b = $("#emp-drawer [data-emp-close].btn"); if (b) b.focus({ preventScroll: true }); }, 50);
    void q;
  }
  function fecharEmpresa() {
    const d = $("#emp-drawer"); if (d.hidden) return;
    d.hidden = true; document.body.classList.remove("no-scroll"); S.emp = null; empPedido++;
    if (location.hash.startsWith("#empresa-")) history.replaceState(null, "", location.pathname + location.search);
    if (empVoltar && empVoltar.focus) empVoltar.focus({ preventScroll: true });
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#emp-drawer").hidden) fecharEmpresa(); });
  function abrirPeloEndereco() { const m = location.hash.match(/^#empresa-([A-Z0-9]{5,7})$/); if (m) abrirEmpresa(m[1]); }
  window.addEventListener("hashchange", () => { if (S.user) abrirPeloEndereco(); });

  function cabecalhoEmpresa(t, e) {
    const q = S.cotMap[t];
    const nome = (e && e.nome) || (q ? bonito(q.nome) : t);
    $("#emp-head").firstElementChild.outerHTML = logoHtml(t, true);
    $("#emp-titulo").textContent = t + " · " + nome;
    $("#emp-sub").textContent = [e && e.fundamentos && e.fundamentos.setor, e && e.fundamentos && e.fundamentos.segmento || (q && q.setor)].filter(Boolean).join(" · ");
    $("#emp-px").innerHTML = q ? `<b>${brl(q.preco)}</b><small class="${cls(q.var_dia)}">${pct(q.var_dia)} hoje</small>` : "";
  }

  // Explicações curtas e faixas de bom/ruim para cada indicador
  const IND = [
    ["pl", "P/L", (v) => num(v, 1), "Anos de lucro para pagar o preço da ação. Mais baixo = mais barata.", (v) => v < 0 ? "ruim" : v < 10 ? "bom" : v > 30 ? "ruim" : ""],
    ["pvp", "P/VP", (v) => num(v, 2), "Preço em relação ao patrimônio. Abaixo de 1, a bolsa paga menos que o valor contábil.", (v) => v < 1.5 ? "bom" : v > 5 ? "ruim" : ""],
    ["dy", "Dividend yield", (v) => num(v, 2) + "%", "Quanto a empresa pagou em proventos nos últimos 12 meses, em relação ao preço.", (v) => v >= 6 ? "bom" : v < 2 ? "ruim" : ""],
    ["roe", "ROE", (v) => num(v, 1) + "%", "Lucro sobre o patrimônio dos acionistas. Mostra o quanto a empresa é rentável.", (v) => v >= 15 ? "bom" : v < 5 ? "ruim" : ""],
    ["margemLiquida", "Margem líquida", (v) => num(v, 1) + "%", "Quanto sobra de lucro de cada R$ 100 vendidos.", (v) => v < 0 ? "ruim" : v >= 15 ? "bom" : ""],
    ["divLiqEbitda", "Dívida líq./EBITDA", (v) => num(v, 2) + "x", "Anos de geração de caixa para pagar a dívida. Abaixo de 2 é confortável.", (v) => v <= 2 ? "bom" : v > 3.5 ? "ruim" : ""],
    ["cagrLucro5a", "Crescimento do lucro", (v) => num(v, 1) + "% ao ano", "Média de crescimento do lucro nos últimos 5 anos.", (v) => v > 10 ? "bom" : v < 0 ? "ruim" : ""],
    ["cagrReceita5a", "Crescimento da receita", (v) => num(v, 1) + "% ao ano", "Média de crescimento das vendas nos últimos 5 anos.", (v) => v > 10 ? "bom" : v < 0 ? "ruim" : ""],
    ["liqCorrente", "Liquidez corrente", (v) => num(v, 2), "Bens de curto prazo para cada R$ 1 de dívidas de curto prazo.", (v) => v >= 1.5 ? "bom" : v < 1 ? "ruim" : ""],
    ["evEbitda", "EV/EBITDA", (v) => num(v, 1), "Valor da empresa (com dívida) sobre a geração de caixa. Mais baixo = mais barata.", (v) => v > 0 && v < 6 ? "bom" : v > 15 ? "ruim" : ""],
  ];
  // Gráfico interativo: passe o mouse (ou o dedo) para ver a cotação de cada dia
  const PERIODOS = [["1M", 23], ["3M", 66], ["6M", 130], ["1A", 9999]];
  let grafSerie = [], grafPeriodo = "1A";
  function grafico(serie) {
    if (!serie || serie.length < 3) return "";
    grafSerie = serie;
    return `<div class="g-per" role="group" aria-label="Período">${PERIODOS.map(([p]) => `<button type="button" data-per="${p}" aria-pressed="${p === grafPeriodo}">${p}</button>`).join("")}</div>
      <div class="chart-wrap" id="chart-wrap">${desenharGrafico()}<div class="g-tip" id="g-tip" hidden></div></div>`;
  }
  function recorte() {
    const n = (PERIODOS.find((p) => p[0] === grafPeriodo) || PERIODOS[3])[1];
    return grafSerie.slice(-Math.min(n, grafSerie.length));
  }
  const G = { W: 640, H: 180, P: 6 };
  function desenharGrafico() {
    const serie = recorte(); const { W, H, P } = G;
    if (serie.length < 2) return "";
    const ys = serie.map((p) => p[1]), min = Math.min(...ys), max = Math.max(...ys), rng = max - min || 1;
    const x = (i) => P + i * (W - 2 * P) / (serie.length - 1), y = (v) => H - P - (v - min) / rng * (H - 2 * P);
    const d = serie.map((p, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(p[1]).toFixed(1)).join(" ");
    const sobe = ys[ys.length - 1] >= ys[0]; const cor = sobe ? "var(--up)" : "var(--down)";
    const longo = (serie[serie.length - 1][0] - serie[0][0]) > 100 * 86400;
    const f = (ts) => new Date(ts * 1000).toLocaleDateString("pt-BR", longo ? { month: "short", year: "2-digit" } : { day: "2-digit", month: "short" });
    const varP = (ys[ys.length - 1] / ys[0] - 1) * 100;
    return `<p class="g-res">No período: <b class="${cls(varP)}">${pct(varP)}</b> <span class="hint">(${esc(brl(ys[0]))} → ${esc(brl(ys[ys.length - 1]))})</span></p>
    <svg class="chart" id="chart-svg" viewBox="0 0 ${W} ${H + 18}" role="img" aria-label="Cotação no período, de ${brl(ys[0])} para ${brl(ys[ys.length - 1])}">
      <path d="${d} L${x(serie.length - 1).toFixed(1)} ${H - P} L${P} ${H - P} Z" fill="${cor}" opacity=".08"/>
      <path d="${d}" fill="none" stroke="${cor}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
      <text x="${P}" y="${H + 14}" font-size="11" fill="var(--muted)">${esc(f(serie[0][0]))}</text>
      <text x="${W - P}" y="${H + 14}" font-size="11" fill="var(--muted)" text-anchor="end">${esc(f(serie[serie.length - 1][0]))}</text>
      <text x="${W - P}" y="${y(max) + 12}" font-size="11" fill="var(--muted)" text-anchor="end">máx. ${esc(brl(max))}</text>
      <text x="${W - P}" y="${y(min) - 4}" font-size="11" fill="var(--muted)" text-anchor="end">mín. ${esc(brl(min))}</text>
      <g id="g-mira" visibility="hidden"><line id="g-linha" y1="${P}" y2="${H - P}" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3" vector-effect="non-scaling-stroke"/><circle id="g-ponto" r="4.5" fill="${cor}" stroke="var(--surface)" stroke-width="2"/></g>
      <rect id="g-area" x="0" y="0" width="${W}" height="${H}" fill="transparent" style="cursor:crosshair;touch-action:pan-y"/>
    </svg>`;
  }
  function ligarGrafico() {
    const svg = $("#chart-svg"), wrap = $("#chart-wrap"); if (!svg || !wrap) return;
    const serie = recorte(); const { W, H, P } = G;
    const ys = serie.map((p) => p[1]), min = Math.min(...ys), max = Math.max(...ys), rng = max - min || 1;
    const tip = $("#g-tip"), mira = $("#g-mira"), linha = $("#g-linha"), ponto = $("#g-ponto");
    const mover = (ev) => {
      const r = svg.getBoundingClientRect(); if (!r.width) return;
      const px = (ev.clientX - r.left) / r.width * W;
      const i = Math.max(0, Math.min(serie.length - 1, Math.round((px - P) / (W - 2 * P) * (serie.length - 1))));
      const [ts, v] = serie[i];
      const cx = P + i * (W - 2 * P) / (serie.length - 1), cy = H - P - (v - min) / rng * (H - 2 * P);
      linha.setAttribute("x1", cx); linha.setAttribute("x2", cx); ponto.setAttribute("cx", cx); ponto.setAttribute("cy", cy);
      mira.setAttribute("visibility", "visible");
      const desde = (v / ys[0] - 1) * 100;
      tip.innerHTML = `<span>${esc(new Date(ts * 1000).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }))}</span><b>${esc(brl(v))}</b><small class="${cls(desde)}">${esc(pct(desde))} no período</small>`;
      tip.hidden = false;
      const escala = r.width / W, xTela = cx * escala, larg = tip.offsetWidth;
      tip.style.left = Math.max(0, Math.min(r.width - larg, xTela - larg / 2)) + "px";
      const yTela = cy * (r.height / (H + 18)), alt = tip.offsetHeight;
      const topo = r.top - wrap.getBoundingClientRect().top;
      tip.style.top = (topo + (yTela - alt - 12 >= 0 ? yTela - alt - 12 : yTela + 14)) + "px";
    };
    const sair = () => { mira.setAttribute("visibility", "hidden"); tip.hidden = true; };
    const area = $("#g-area");
    area.addEventListener("pointermove", mover);
    area.addEventListener("pointerdown", mover);
    area.addEventListener("pointerleave", sair);
    area.addEventListener("pointercancel", sair);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-per]"); if (!b) return;
    grafPeriodo = b.dataset.per;
    document.querySelectorAll("[data-per]").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.per === grafPeriodo)));
    const w = $("#chart-wrap"); if (!w) return;
    w.innerHTML = desenharGrafico() + `<div class="g-tip" id="g-tip" hidden></div>`; ligarGrafico();
  });
  function fato(rot, val, link) {
    if (val == null || val === "") return "";
    const u = link ? safeUrl(val) : null;
    return `<div><span>${esc(rot)}</span><b>${u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a>` : esc(val)}</b></div>`;
  }
  function renderEmpresa(t, e, doCache) {
    if (S.emp !== t) return;
    const q = S.cotMap[t], a = S.analises[t], w = e.wiki || {}, f = e.fundamentos || {}, i = f.ind || {}, fa = w.fatos || {}, ds = e.desempenho || {};
    const tem = S.carteira.some((p) => p.ticker === t);
    const fotos = [], vistas = new Set();
    const addFoto = (u, legenda) => { u = safeImg(u); const k = u && u.split("?")[0]; if (u && !vistas.has(k) && !/\.svg/i.test(k)) { vistas.add(k); fotos.push({ url: u, legenda: legenda || "" }); } };
    addFoto(w.imagem, ""); (w.fotos || []).forEach((x) => addFoto(x.url, x.legenda));
    const rep = e.reputacao || {};
    const repCor = rep.nota >= 70 ? "var(--up)" : rep.nota >= 50 ? "var(--warn)" : "var(--down)";
    // Bancos e seguradoras não usam dívida/EBITDA, liquidez corrente nem EV/EBITDA
    const financeira = /Bancos|Seguros/.test(e.setorMacro || "") || /Financeiro|Seguro|Banco/i.test(f.setor || "");
    const inds = IND.filter(([k]) => i[k] != null && !(financeira && ["divLiqEbitda", "liqCorrente", "evEbitda"].includes(k))).map(([k, rot, fmt, exp, aval]) => `<div class="ind ${aval(i[k])}"><span>${esc(rot)}</span><b>${esc(fmt(i[k]))}</b><small>${esc(exp)}</small></div>`).join("");
    const prov = (f.proventos || []).slice(0, 8);
    const proximos = f.proximosProventos || [];
    const nomeBusca = encodeURIComponent((e.nome || t).replace(/\s*\(.*\)$/, ""));
    const posicao = S.carteira.find((p) => p.ticker === t);
    const sinal = a && SINAL[a.sinal] ? a.sinal : null;

    $("#emp-body").innerHTML = `
      <div class="emp-acts">${tem ? `<span class="have">✓ Na sua carteira${posicao ? " · " + num(posicao.qtd, 0) + " ações" : ""}</span>` : `<button type="button" class="btn primary sm" data-pick="${esc(t)}">+ Adicionar à carteira</button>`}
        ${sinal ? `<span class="pill s-${sinal}">${SINAL[sinal]}</span>` : ""}${rep.nota != null ? `<span class="chip-s ${rep.nota >= 70 ? "otim" : rep.nota < 50 ? "pess" : "div"}">Reputação ${esc(rep.rotulo || "")} · ${Math.round(rep.nota)}/100</span>` : ""}
        ${doCache ? `<span class="hint">Atualizando…</span>` : ""}</div>

      ${fotos.length ? `<div class="gal">${fotos.map((x) => `<figure><img src="${esc(x.url)}" alt="${esc(x.legenda || "Foto de " + (e.nome || t))}" loading="lazy" referrerpolicy="no-referrer">${x.legenda ? `<figcaption>${esc(x.legenda)}</figcaption>` : ""}</figure>`).join("")}</div>` : ""}

      <section class="panel sobre" aria-labelledby="emp-sobre">
        <h3 id="emp-sobre">O que você está comprando</h3>
        ${(w.paragrafos || []).length ? w.paragrafos.map((p) => `<p>${esc(p)}</p>`).join("") : `<p class="skel">Não encontramos uma descrição pública desta empresa.</p>`}
        <div class="fatos">
          ${fato("Razão social", f.razaoSocial)}${fato("CNPJ", f.cnpj)}${fato("Fundação", fa.fundacao)}${fato("Sede", fa.sede)}
          ${fato("Presidente", fa.presidente)}${fato("Funcionários", fa.funcionarios != null ? num(fa.funcionarios, 0) : null)}${fato("Fundadores", fa.fundadores)}
          ${fato("Controlador", fa.controlador)}${fato("Setor", f.setor)}${fato("Segmento", f.segmento)}${fato("Produtos e marcas", fa.produtos)}
          ${fato("Valor de mercado", i.valorMercado != null ? "R$ " + compacto(i.valorMercado) : null)}${fato("Negociação diária", f.liquidezDiaria != null ? "R$ " + compacto(f.liquidezDiaria) : null)}
          ${fato("Site", fa.site, true)}
        </div>
      </section>

      <section class="panel" aria-labelledby="emp-desemp">
        <h3 id="emp-desemp">Desempenho na bolsa</h3>
        ${grafico(e.serie)}
        <div class="rets">${[["1 mês", ds.ret1m], ["3 meses", ds.ret3m], ["6 meses", ds.ret6m], ["12 meses", ds.ret12m]].map(([l, v]) => `<div><span>${l}</span><b class="${cls(v)}">${pct(v)}</b></div>`).join("")}</div>
        <p class="hint" style="margin:10px 0 0">Passe o mouse ou o dedo sobre o gráfico para ver a cotação de cada dia. ${ds.min52 != null ? `No último ano variou de ${esc(brl(ds.min52))} a ${esc(brl(ds.max52))}. ` : ""}${ds.volAnual != null ? `Oscilação anual de ${esc(num(ds.volAnual, 0))}% (${ds.volAnual > 45 ? "bem arriscada" : ds.volAnual > 28 ? "risco médio" : "mais estável"}).` : ""}</p>
      </section>

      ${a ? `<section class="panel" aria-labelledby="emp-sinal"><h3 id="emp-sinal">Sinal do Radar ${sinal ? `<span class="pill s-${sinal}" style="vertical-align:middle;margin-left:6px">${SINAL[sinal]}</span>` : ""}</h3>
        <p style="margin:0 0 8px">${esc(a.motivo || "")}</p>${a.indicadores && a.indicadores.fatores ? `<ul class="fat-list">${a.indicadores.fatores.map((x) => `<li><span class="mark ${x.peso > 0 ? "positivo" : x.peso < 0 ? "negativo" : "neutro"}">${x.peso > 0 ? "+" : x.peso < 0 ? "−" : "·"}</span><span>${esc(x.t)}</span></li>`).join("")}</ul>` : ""}
        <p class="hint" style="margin:8px 0 0">Recalculado ${esc(ago(a.atualizado_em))} com tendência de preço, indicadores e notícias. Regras fixas, não é recomendação individual.</p></section>` : ""}

      ${inds ? `<section class="panel" aria-labelledby="emp-ind"><h3 id="emp-ind">Saúde financeira e preço</h3><div class="ind-grid">${inds}</div><p class="hint" style="margin:10px 0 0">Verde costuma ser bom sinal e vermelho pede atenção, mas cada setor tem sua faixa normal.${financeira ? " Para bancos e seguradoras, dívida e liquidez não se medem do mesmo jeito, por isso esses indicadores ficam de fora." : ""}</p></section>` : ""}

      <section class="panel" aria-labelledby="emp-div">
        <h3 id="emp-div">Dividendos</h3>
        <div class="rets" style="margin-top:0">
          <div><span>Dividend yield</span><b>${i.dy != null ? esc(num(i.dy, 2)) + "%" : "—"}</b></div>
          <div><span>Por ação em 12 meses</span><b>${f.proventos12m != null ? esc(brl(f.proventos12m)) : "—"}</b></div>
          ${posicao && f.proventos12m ? `<div><span>Na sua posição (12m)</span><b>${esc(brl(f.proventos12m * posicao.qtd))}</b></div>` : ""}
          ${proximos[0] ? `<div><span>Próximo pagamento</span><b>${esc(proximos[0].pagamento)}</b></div>` : ""}
        </div>
        ${prov.length ? `<table class="prov"><thead><tr><th>Tipo</th><th>Data com</th><th>Pagamento</th><th class="r">Valor por ação</th></tr></thead><tbody>${prov.map((p) => `<tr><td>${esc(p.tipo)}</td><td>${esc(p.dataCom)}</td><td>${esc(p.pagamento || "—")}</td><td class="r">${esc(num(p.valor, 4))}</td></tr>`).join("")}</tbody></table><p class="hint" style="margin:8px 0 0">"Data com" é o último dia para ter a ação e receber aquele provento.</p>` : `<p class="skel">Sem proventos recentes registrados.</p>`}
      </section>

      <section class="panel" aria-labelledby="emp-rep">
        <h3 id="emp-rep">Reputação</h3>
        ${rep.nota != null ? `<div class="rep-top"><div class="dscore" style="--p:${Math.round(rep.nota)};--sc:${repCor};width:92px;height:92px"><span><b style="font-size:24px">${Math.round(rep.nota)}</b><small>de 100</small></span></div>
          <div><div class="h3" style="color:${repCor};margin-bottom:4px">${esc(rep.rotulo || "")}</div><p class="hint" style="margin:0;font-size:13px">Nota do Radar a partir de governança, solidez, resultados, dividendos e do tom do noticiário. Para ver reclamações de clientes, consulte o Reclame Aqui.</p></div></div>
          <ul class="rep-it">${(rep.itens || []).map((x) => `<li><span class="mark ${esc(x.efeito)}">${x.efeito === "positivo" ? "+" : x.efeito === "negativo" ? "−" : "·"}</span><span class="ar">${esc(x.area)}</span><span>${esc(x.texto)}</span></li>`).join("")}</ul>` : `<p class="skel">Sem dados suficientes para a nota.</p>`}
        <div class="emp-acts" style="margin-top:12px">
          <a class="btn sm" href="https://www.reclameaqui.com.br/busca/?q=${nomeBusca}" target="_blank" rel="noopener noreferrer">Ver no Reclame Aqui</a>
          ${fa.site && safeUrl(fa.site) ? `<a class="btn sm" href="${esc(safeUrl(fa.site))}" target="_blank" rel="noopener noreferrer">Site da empresa</a>` : ""}
          <a class="btn sm" href="https://statusinvest.com.br/acoes/${encodeURIComponent(t.toLowerCase())}" target="_blank" rel="noopener noreferrer">StatusInvest</a>
          ${safeUrl(w.wikipedia) ? `<a class="btn sm" href="${esc(safeUrl(w.wikipedia))}" target="_blank" rel="noopener noreferrer">Wikipedia</a>` : ""}
        </div>
      </section>

      <section class="panel" aria-labelledby="emp-news"><h3 id="emp-news">Notícias do último mês</h3><ul class="news">${newsItems(e.noticias || [], "Sem notícias recentes.")}</ul></section>

      <p class="fontes-emp">Fontes: Wikipedia e Wikidata (texto, fotos e fatos), StatusInvest (indicadores e proventos), Yahoo Finance (cotações históricas), Google Notícias. Perfil atualizado ${esc(ago(e.atualizadoEm))}.${(e.fontesComErro || []).length ? " Não foi possível consultar agora: " + esc(e.fontesComErro.join(", ")) + "." : ""} Nada aqui é recomendação de investimento.</p>`;
    ligarGrafico();
    void q;
  }

  /* ---------- Diversificação ---------- */
  const SETORES = ["Bancos e Financeiro", "Seguros", "Energia Elétrica", "Saneamento e Gás", "Petróleo e Gás", "Mineração e Siderurgia", "Papel, Química e Materiais", "Agro e Alimentos", "Saúde", "Indústria", "Tecnologia e Telecom", "Varejo e Consumo", "Imóveis e Construção", "Transporte e Logística", "Educação e Serviços"];
  const DOLAR = new Set(["Petróleo e Gás", "Mineração e Siderurgia", "Papel, Química e Materiais", "Agro e Alimentos"]);
  const DOLAR_TK = new Set(["EMBJ3", "WEGE3", "SUZB3", "KLBN11", "GGBR4", "VALE3", "PETR4", "PETR3", "PRIO3", "JBSS3", "MBRF3"]);
  const DEFENSIVOS = new Set(["Energia Elétrica", "Saneamento e Gás", "Seguros", "Bancos e Financeiro"]);
  const PRIORIDADE = ["Petróleo e Gás", "Mineração e Siderurgia", "Saúde", "Indústria", "Bancos e Financeiro", "Energia Elétrica", "Saneamento e Gás", "Agro e Alimentos", "Imóveis e Construção", "Transporte e Logística", "Tecnologia e Telecom", "Varejo e Consumo", "Seguros", "Papel, Química e Materiais", "Educação e Serviços"];
  function candidatos(setor, mine) {
    const cons = (S.painel.consenso && S.painel.consenso.itens) || []; const sug = S.painel.sugestoes_setor || {};
    const out = []; const seen = new Set();
    const add = (t, tese, casas, orig) => { if (!t || seen.has(t) || mine.has(t)) return; seen.add(t); out.push({ t, tese, casas, orig }); };
    cons.filter((c) => c.setor === setor).sort((a, b) => (b.casas || 0) - (a.casas || 0)).forEach((c) => add(c.ticker, c.tese, c.casas, "consenso"));
    ((sug.setores || {})[setor] || []).forEach((t) => { const c = cons.find((x) => x.ticker === t); add(t, (c && c.tese) || (sug.teses || {})[t] || "", c && c.casas, "carteiras"); });
    if (out.length < 2) S.cot.filter((r) => r.setor_macro === setor).slice(0, 4).forEach((r) => add(r.ticker, "Uma das ações mais negociadas do setor hoje. Veja o perfil da empresa antes de investir.", null, "liquidez"));
    return out.slice(0, 3);
  }
  function renderDiv() {
    const box = $("#div-body");
    if (!S.carteira.length) { box.innerHTML = `<p class="skel">Cadastre suas ações para ver como a carteira está distribuída entre os setores e quais áreas estão faltando.</p>`; return; }
    const { rows, patr } = linhas(); if (!patr) { box.innerHTML = `<p class="skel">Aguardando cotações para calcular a distribuição.</p>`; return; }
    const porSetor = {}; rows.forEach((r) => { porSetor[r.setor] = (porSetor[r.setor] || 0) + r.peso; });
    const setoresOrd = Object.entries(porSetor).sort((a, b) => b[1] - a[1]);
    const n = setoresOrd.length, w1 = rows[0] ? rows[0].peso : 0, s1 = setoresOrd[0] ? setoresOrd[0][1] : 0;
    const dol = rows.reduce((s, r) => s + ((DOLAR.has(r.setor) || DOLAR_TK.has(r.p.ticker)) ? r.peso : 0), 0);
    const def = rows.reduce((s, r) => s + (DEFENSIVOS.has(r.setor) ? r.peso : 0), 0);
    const clamp = (x) => Math.max(0, Math.min(1, x));
    const score = Math.round(40 * Math.min(n, 8) / 8 + 25 * (1 - clamp((w1 - 0.15) / 0.35)) + 20 * (1 - clamp((s1 - 0.25) / 0.45)) + 15 * clamp(dol / 0.15));
    const sc = score >= 70 ? "var(--up)" : score >= 45 ? "var(--warn)" : "var(--down)";
    const lbl = score >= 70 ? "Bem diversificada" : score >= 45 ? "Pode melhorar" : "Pouco diversificada";
    const obs = [];
    obs.push({ e: n >= 6 ? "positivo" : "negativo", t: `Sua carteira está em ${n} ${n === 1 ? "setor" : "setores"} de ${SETORES.length}. ${n < 6 ? "Espalhar por pelo menos 6 setores reduz o impacto de uma notícia ruim em um só segmento." : "Boa variedade de setores."}` });
    if (w1 > 0.25) obs.push({ e: "negativo", t: `${rows[0].p.ticker} pesa ${num(w1 * 100, 0)}% da carteira. Acima de 25% numa única ação, uma queda dela pesa muito no total.` });
    if (s1 > 0.4) obs.push({ e: "negativo", t: `${setoresOrd[0][0]} concentra ${num(s1 * 100, 0)}% do patrimônio.` });
    obs.push(dol < 0.1 ? { e: "negativo", t: "Quase nada da carteira ganha em dólar. Exportadoras (petróleo, mineração, celulose, Embraer) protegem quando o real se desvaloriza." } : { e: "positivo", t: `${num(dol * 100, 0)}% da carteira está em empresas que ganham em dólar, o que protege contra alta do câmbio.` });
    obs.push(def > 0.7 ? { e: "neutro", t: `${num(def * 100, 0)}% está em setores defensivos (bancos, seguros, energia, saneamento): boa renda em dividendos, mas pouca exposição a crescimento.` } : { e: "neutro", t: `${num(def * 100, 0)}% está em setores defensivos, que costumam pagar bons dividendos e oscilar menos.` });
    const mine = new Set(S.carteira.map((p) => p.ticker));
    const faltando = PRIORIDADE.filter((s) => !porSetor[s]).map((s) => ({ s, c: candidatos(s, mine) })).filter((x) => x.c.length);
    faltando.sort((a, b) => ((b.c[0] && b.c[0].casas) || 0) - ((a.c[0] && a.c[0].casas) || 0));
    const motivo = { "Petróleo e Gás": "Gera caixa em dólar e paga dividendos altos.", "Mineração e Siderurgia": "Receita em dólar, protege contra alta do câmbio.", "Saúde": "Demanda estável, pouco ligada ao ciclo da economia.", "Indústria": "Exportadoras e empresas de bens de capital diversificam o risco Brasil.", "Agro e Alimentos": "Setor forte do Brasil, muitas vezes com receita externa.", "Tecnologia e Telecom": "Receita recorrente e potencial de crescimento.", "Imóveis e Construção": "Ganha muito quando os juros caem.", "Transporte e Logística": "Concessões com contratos corrigidos pela inflação.", "Varejo e Consumo": "Sobe quando a renda e o crédito melhoram.", "Energia Elétrica": "Receita previsível e bons dividendos.", "Saneamento e Gás": "Monopólio regulado com crescimento contratado.", "Bancos e Financeiro": "Lucros altos e dividendos constantes.", "Seguros": "Muito caixa e dividendos altos.", "Papel, Química e Materiais": "Celulose é exportada e ganha com dólar alto.", "Educação e Serviços": "Ganha com juros menores e economia aquecida." };
    box.innerHTML = `<div class="div-grid">
      <div style="min-width:0">
        <div class="div-top">
          <div class="dscore" style="--p:${score};--sc:${sc}"><span><b>${score}</b><small>de 100</small></span></div>
          <div style="min-width:0"><div class="h3" style="margin-bottom:6px;color:${sc}">${lbl}</div><ul class="obs">${obs.map((o) => `<li><span class="mark ${o.e}">${o.e === "positivo" ? "+" : o.e === "negativo" ? "−" : "·"}</span><span>${esc(o.t)}</span></li>`).join("")}</ul></div>
        </div>
        <div class="h3">Onde está seu dinheiro</div>
        <div class="bars">${setoresOrd.map(([s, w]) => `<div class="bar"><span class="nm2">${esc(s)}</span><span class="track"><i class="${w > 0.4 ? "hot" : ""}" style="width:${(w * 100).toFixed(1)}%"></i></span><span class="pc">${num(w * 100, 0)}%</span></div>`).join("")}</div>
      </div>
      <div style="min-width:0">
      ${faltando.length ? `<div class="h3">Setores que faltam na sua carteira</div><p class="sub" style="margin:0 0 12px">Ações desses setores citadas nas carteiras recomendadas das corretoras ou entre as mais negociadas. Veja o perfil da empresa antes de comprar.</p>
      <div class="gaps">${faltando.slice(0, 4).map((x) => `<div class="gap"><div class="gap-h"><strong>${esc(x.s)}</strong></div><span class="why">${esc(motivo[x.s] || "")}</span>
        ${x.c.slice(0, 2).map((c) => { const q = S.cotMap[c.t]; return `<div class="cand"><span><button type="button" class="tk-btn" data-emp="${esc(c.t)}"><span class="tk" style="font-size:16px">${esc(c.t)}</span></button> <span class="price">${q ? brl(q.preco) : ""}</span>${c.casas ? ` <span class="hint">· em ${c.casas} ${c.casas === 1 ? "carteira" : "carteiras"}</span>` : ""}</span><button type="button" class="add-btn" data-pick="${esc(c.t)}">+ Adicionar</button>${c.tese ? `<p>${esc(c.tese)}</p>` : ""}</div>`; }).join("")}
      </div>`).join("")}</div>` : `<p class="skel">Sua carteira já cobre os principais setores da bolsa.</p>`}
      </div></div>`;
  }

  /* ---------- Recomendações das corretoras ---------- */
  function renderRecs() {
    const c = S.painel.consenso; const mine = new Set(S.carteira.map((p) => p.ticker));
    if (!c) { $("#recs").innerHTML = `<p class="skel">Sem recomendações registradas.</p>`; return; }
    const max = Math.max(7, ...(c.itens || []).map((i) => i.casas || 0));
    const itens = (c.itens || []).slice().sort((a, b) => (b.casas || 0) - (a.casas || 0));
    $("#recs").innerHTML = itens.length ? itens.map((i) => {
      const q = S.cotMap[i.ticker]; const k = i.casas || 0; const tem = mine.has(i.ticker); const an = S.analises[i.ticker];
      return `<article class="rec${tem ? " mine" : ""}">
        <div class="rec-top"><div style="min-width:0"><button type="button" class="tk-btn" data-emp="${esc(i.ticker)}"><span class="tk">${esc(i.ticker)}</span></button><span class="nm">${esc(i.nome)}${i.setor ? " · " + esc(i.setor) : ""}</span></div>
          ${q ? `<div class="rec-px"><b>${brl(q.preco)}</b><small class="${cls(q.var_dia)}">${pct(q.var_dia)}</small></div>` : ""}</div>
        <div class="casas" title="Em ${k} carteiras recomendadas">${Array.from({ length: max }, (_, j) => `<i class="${j < k ? "on" : ""}"></i>`).join("")}<span>${k} ${k === 1 ? "carteira" : "carteiras"}</span></div>
        ${i.tese ? `<p>${esc(i.tese)}</p>` : ""}
        ${i.risco ? `<p class="risco">Risco: ${esc(i.risco)}</p>` : ""}
        <div class="rec-foot"><span>${an && an.sinal && SINAL[an.sinal] ? `<span class="pill s-${an.sinal}">${SINAL[an.sinal]}</span>` : `<button type="button" class="lk" data-emp="${esc(i.ticker)}">Ver empresa</button>`}</span>${tem ? '<span class="have">✓ Na sua carteira</span>' : `<button type="button" class="add-btn" data-pick="${esc(i.ticker)}">+ Adicionar</button>`}</div>
      </article>`;
    }).join("") : `<p class="skel">Sem recomendações ainda.</p>`;
    $("#recs-fonte").textContent = c.fonte || ""; $("#recs-when").textContent = c._ts ? "Revisado " + ago(c._ts) : "";
  }

  /* ---------- Todas as ações ---------- */
  let setoresFeitos = false;
  function renderTodas() {
    if (!S.cot.length) return;
    $("#all-when").textContent = S.cotTs ? "Cotações de " + new Date(S.cotTs).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "";
    if (!setoresFeitos) { const st = [...new Set(S.cot.map((r) => r.setor_macro).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR")); $("#q-setor").insertAdjacentHTML("beforeend", st.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join("")); setoresFeitos = true; }
    const q = $("#q-busca").value.trim().toLowerCase(), setor = $("#q-setor").value, ordem = $("#q-ordem").value;
    let rows = S.cot.filter((r) => (!setor || r.setor_macro === setor) && (!q || r.ticker.toLowerCase().includes(q) || String(r.nome).toLowerCase().includes(q)));
    const so = { volume: (a, b) => b.volume - a.volume, alta: (a, b) => b.var_dia - a.var_dia, baixa: (a, b) => a.var_dia - b.var_dia, mc: (a, b) => (b.valor_mercado_mi || 0) - (a.valor_mercado_mi || 0), az: (a, b) => a.ticker.localeCompare(b.ticker) };
    rows = rows.slice().sort(so[ordem] || so.volume); if (ordem === "alta" || ordem === "baixa") rows = rows.filter((r) => r.volume > 0);
    const mine = new Set(S.carteira.map((p) => p.ticker)); const shown = rows.slice(0, S.lim);
    $("#all-body").innerHTML = shown.length ? shown.map((r) => `<tr><td><button type="button" class="tk-btn" data-emp="${esc(r.ticker)}"><span class="tk">${esc(r.ticker)}</span><span class="nm">${esc(bonito(r.nome))}</span></button></td><td class="r">${brl(r.preco)}</td><td class="r ${cls(r.var_dia)}">${pct(r.var_dia)}</td><td class="r hide-sm">${compacto(r.volume)}</td><td class="r hide-sm">${r.valor_mercado_mi ? "R$ " + compacto(r.valor_mercado_mi * 1e6) : "—"}</td><td class="r">${mine.has(r.ticker) ? '<span class="have">Na carteira</span>' : `<button type="button" class="add-btn" data-pick="${esc(r.ticker)}">+ Adicionar</button>`}</td></tr>`).join("") : `<tr><td colspan="6" class="skel">Nenhuma ação encontrada${q ? " para “" + esc(q) + "”" : ""}.</td></tr>`;
    $("#all-count").textContent = rows.length ? `Mostrando ${shown.length} de ${rows.length} ações · toque no código para ver a empresa` : ""; $("#all-more").hidden = shown.length >= rows.length;
  }
  let tB; $("#q-busca").addEventListener("input", () => { clearTimeout(tB); tB = setTimeout(() => { S.lim = 50; renderTodas(); }, 150); });
  $("#q-ordem").addEventListener("change", () => { S.lim = 50; renderTodas(); });
  $("#q-setor").addEventListener("change", () => { S.lim = 50; renderTodas(); });
  $("#all-more").addEventListener("click", () => { S.lim += 50; renderTodas(); });

  /* Início */
  sb.auth.getSession().then(({ data }) => { if (!data.session && !modoNovaSenha) { $("#auth").hidden = false; setAuthMode(false); } });
})();
