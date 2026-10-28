/* Radar da Carteira: site estático com login e dados no Supabase.
   Ações, FIIs, ETFs e BDRs da B3 e ações/ETFs dos EUA (convertidos para reais pelo dólar do momento). */
(function () {
  "use strict";
  const SUPABASE_URL = "https://urdtzrquiypewetklwxm.supabase.co";
  // Chave pública (anon), feita para ficar no navegador. A proteção dos dados vem das regras de RLS do banco.
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZHR6cnF1aXlwZXdldGtsd3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0MzYzODksImV4cCI6MjEwODAxMjM4OX0.kd8j09OBpMrUcnKVyYqgFcBLhbOqSfPi3ccmlviAFdo";
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const $ = (s) => document.querySelector(s);
  const S = { user: null, carteira: [], cot: [], cotMap: {}, cotTs: null, analises: {}, painel: {}, empresas: {}, open: null, newsTk: null, confirmDel: null, lim: 50, signup: false, emp: null, fcls: null, exCls: "acao", prevPx: {}, anim: new Set() };
  const reduz = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Formatação ---------- */
  const num = (n, d = 2) => (n == null || isNaN(n)) ? "—" : Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const brl = (n) => (n == null || isNaN(n)) ? "—" : Number(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const usd = (n) => (n == null || isNaN(n)) ? "—" : "US$ " + num(n, Math.abs(n) < 1 && n !== 0 ? 4 : 2);
  // Preço em reais com mais casas para valores abaixo de R$ 1 (criptos como SHIB ou PEPE)
  const brlPx = (n) => (n == null || isNaN(n)) ? "—" : (n !== 0 && Math.abs(n) < 1) ? "R$ " + Number(n).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: Math.abs(n) < 0.01 ? 8 : 4 }) : brl(n);
  const money = (n, m) => m === "USD" ? usd(n) : brlPx(n);
  const pct = (n) => (n == null || isNaN(n)) ? "—" : (n > 0 ? "+" : "") + num(n, 2) + "%";
  const sinal = (n, f) => (n > 0 ? "+" : n < 0 ? "−" : "") + f(Math.abs(n));
  const cls = (n) => n > 0 ? "up" : n < 0 ? "down" : "";
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => /^https:\/\/[^\s"'<>]+$/i.test(u || "") ? u : (/^http:\/\/[^\s"'<>]+$/i.test(u || "") ? u.replace(/^http:/i, "https:") : null);
  const IMG_OK = /^https:\/\/(icons\.brapi\.dev|s3-symbol-logo\.tradingview\.com|upload\.wikimedia\.org|commons\.wikimedia\.org|coin-images\.coingecko\.com|assets\.coingecko\.com)\//;
  const safeImg = (u) => IMG_OK.test(u || "") ? u : null;
  const TICKER_RE = /^[A-Z][A-Z0-9]{2}[A-Z]\d{1,2}$/; // B3
  const ATIVO_RE = /^[A-Z][A-Z0-9.\-]{0,9}$/; // B3 ou EUA
  const compacto = (n) => n >= 1e12 ? num(n / 1e12, 2) + " tri" : n >= 1e9 ? num(n / 1e9, 1) + " bi" : n >= 1e6 ? num(n / 1e6, 1) + " mi" : n >= 1e3 ? num(n / 1e3, 0) + " mil" : num(n, 0);
  const fmtQtd = (q) => { q = Number(q); return Number.isInteger(q) ? num(q, 0) : q.toLocaleString("pt-BR", { maximumFractionDigits: 6 }); };
  function bonito(s) { return String(s || "").toLowerCase().replace(/(^|[\s\-\/(])(\p{L})/gu, (m, a, b) => a + b.toUpperCase()).replace(/\bS\.a\.?/gi, "S.A."); }
  const nomeBom = (s) => { s = String(s || ""); return s && s === s.toUpperCase() && /[A-Z]{3}/.test(s) ? bonito(s) : s; };
  function ago(iso) {
    if (!iso) return ""; const t = Date.parse(iso); if (isNaN(t)) return "";
    const m = Math.round((Date.now() - t) / 60000);
    if (m < 1) return "agora há pouco"; if (m < 60) return "há " + m + " min";
    const h = Math.round(m / 60); if (h < 24) return "há " + h + " h";
    const d = Math.round(h / 24); return "há " + d + (d === 1 ? " dia" : " dias");
  }
  const fresco = (iso, dias) => iso && Date.now() - Date.parse(iso) < dias * 864e5;
  function toast(t) {
    const r = $("#toast-root"); r.innerHTML = ""; const d = document.createElement("div"); d.className = "toast"; d.setAttribute("role", "status"); d.textContent = t; r.appendChild(d);
    clearTimeout(toast._t); toast._t = setTimeout(() => { d.remove(); }, 6000);
  }
  async function radar(body) {
    const { data, error } = await sb.functions.invoke("radar", { body });
    if (error) { let ctx = null; try { ctx = await error.context.json(); } catch (_) { /* sem corpo */ } throw Object.assign(new Error((ctx && ctx.erro) || "falha"), { ctx }); }
    return data;
  }

  /* ---------- Classes de ativos ---------- */
  const CLS = {
    acao: { nome: "Ações", longo: "Ações brasileiras", un: "ações" },
    fii: { nome: "FIIs", longo: "Fundos imobiliários", un: "cotas" },
    etf: { nome: "ETFs", longo: "ETFs na B3", un: "cotas" },
    bdr: { nome: "BDRs", longo: "BDRs (empresas de fora na B3)", un: "BDRs" },
    acao_ext: { nome: "Ações EUA", longo: "Ações dos EUA", un: "ações" },
    etf_ext: { nome: "ETFs EUA", longo: "ETFs dos EUA", un: "cotas" },
    cripto: { nome: "Cripto", longo: "Criptomoedas", un: "unidades" },
    rf: { nome: "Renda fixa", longo: "Renda fixa (CDBs e caixinhas)", un: "" },
    renda_fixa: { nome: "Renda fixa", longo: "Renda fixa (CDBs e caixinhas)", un: "" },
  };
  const ORDEM_CLS = ["acao", "fii", "etf", "bdr", "acao_ext", "etf_ext", "cripto"];
  const CRIPTO_TK = /^[A-Z0-9]{2,6}-BRL$/;
  const fracionado = (c) => c === "acao_ext" || c === "etf_ext" || c === "cripto";
  const ext = (c) => c === "acao_ext" || c === "etf_ext";
  const clsChip = (c) => CLS[c] ? `<span class="cl" data-cl="${c}">${CLS[c].nome}</span>` : "";
  function classeDe(t) { const c = S.cotMap[t]; if (c && c.classe) return c.classe; const e = S.empresas[t]; if (e && e.classe) return e.classe; return TICKER_RE.test(t) ? "acao" : CRIPTO_TK.test(t) ? "cripto" : "acao_ext"; }
  function moedaDe(t) { const c = S.cotMap[t]; if (c && c.moeda) return c.moeda; const e = S.empresas[t]; if (e && e.moeda) return e.moeda; return ext(classeDe(t)) ? "USD" : "BRL"; }
  const px = (t, n) => money(n, moedaDe(t));
  function fx() { const d = S.painel.mercado && S.painel.mercado.dolar; return d && d.valor ? Number(d.valor) : null; }
  function fxVar() { const d = S.painel.mercado && S.painel.mercado.dolar; return d && d.varDia != null ? Number(d.varDia) : 0; }
  const paraBRL = (v, m) => v == null ? null : m === "USD" ? (fx() ? v * fx() : null) : v;

  /* ---------- Tema ---------- */
  try { const t = localStorage.getItem("tema"); if (t === "dark" || t === "light") document.documentElement.dataset.theme = t; } catch (_) { /* sem storage */ }
  $("#btn-tema").addEventListener("click", () => {
    const atual = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const novo = atual === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    try { localStorage.setItem("tema", novo); } catch (_) { /* sem storage */ }
  });

  /* ---------- Animações ---------- */
  // Número que "rola" até o valor novo
  function contar(el, alvo, fmt) {
    if (!el) return;
    if (alvo == null || isNaN(alvo)) { el.innerHTML = "—"; el._v = null; return; }
    const de = el._v == null ? (reduz ? alvo : alvo * 0.6) : el._v; el._v = alvo;
    cancelAnimationFrame(el._raf);
    if (reduz || Math.abs(de - alvo) < 1e-9) { el.innerHTML = fmt(alvo); return; }
    const t0 = performance.now(), dur = 900;
    const passo = (t) => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.innerHTML = fmt(de + (alvo - de) * e); if (k < 1) el._raf = requestAnimationFrame(passo); };
    el._raf = requestAnimationFrame(passo);
  }
  // Primeira vez que um bloco aparece ganha animação de entrada; depois, só atualiza
  const primeira = (k) => { if (S.anim.has(k)) return false; S.anim.add(k); return !reduz; };
  let revObs = null;
  function prepararEntrada() {
    if (reduz || !("IntersectionObserver" in window)) return;
    revObs = revObs || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); } }), { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("#app > *").forEach((el) => { if (!el.classList.contains("in")) { el.classList.add("reveal"); revObs.observe(el); } });
  }
  // Aba ativa conforme a rolagem, com indicador deslizante
  function marcarAba(id) {
    const tabs = [...document.querySelectorAll("#tabs a")];
    const a = tabs.find((x) => x.getAttribute("href") === "#" + id); if (!a) return;
    tabs.forEach((x) => x.setAttribute("aria-current", String(x === a)));
    const ind = $("#tab-ind"); ind.style.width = a.offsetWidth + "px"; ind.style.transform = `translateX(${a.offsetLeft}px)`; ind.style.opacity = "1";
    const nav = $("#tabs"); if (a.offsetLeft < nav.scrollLeft || a.offsetLeft + a.offsetWidth > nav.scrollLeft + nav.clientWidth) nav.scrollTo({ left: a.offsetLeft - 20, behavior: reduz ? "auto" : "smooth" });
  }
  let spyObs = null;
  function prepararAbas() {
    if (spyObs || !("IntersectionObserver" in window)) return;
    const vis = new Map();
    spyObs = new IntersectionObserver((es) => {
      es.forEach((e) => vis.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
      const ids = [...document.querySelectorAll("#tabs a")].map((a) => a.getAttribute("href").slice(1));
      const ativo = ids.find((id) => vis.get(id) > 0); if (ativo) marcarAba(ativo);
    }, { rootMargin: "-160px 0px -55% 0px", threshold: [0, 0.01] });
    document.querySelectorAll("#tabs a").forEach((a) => { const s = document.getElementById(a.getAttribute("href").slice(1)); if (s) spyObs.observe(s); });
    $("#tabs").addEventListener("click", (e) => { const a = e.target.closest("a"); if (a) setTimeout(() => marcarAba(a.getAttribute("href").slice(1)), 50); });
    window.addEventListener("resize", () => { const a = document.querySelector('#tabs a[aria-current="true"]'); if (a) marcarAba(a.getAttribute("href").slice(1)); });
    setTimeout(() => marcarAba("sec-resumo"), 100);
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
    toast("Senha alterada.");
    mostrarApp(!!S.user);
  }
  function mostrarApp(logado) {
    ["#app", "#btn-sair", "#btn-refresh", "#tabs", "#tape", "#btn-perfil"].forEach((s) => { $(s).hidden = !logado; });
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
    prepararEntrada(); prepararAbas();
    await Promise.all([carregarCarteira().then(carregarEmpresas), carregarCotacoes(), carregarAnalises(), carregarPainel(), carregarRF(), carregarPerfil()]);
    renderAll();
    if (canal) sb.removeChannel(canal);
    let tCot = null, tAn = null, tEmp = null;
    canal = sb.channel("radar")
      .on("postgres_changes", { event: "*", schema: "public", table: "cotacoes" }, () => { clearTimeout(tCot); tCot = setTimeout(async () => { await carregarCotacoes(); renderAll(); if (S.emp) cabecalhoEmpresa(S.emp, S.empresas[S.emp] || null); }, 2500); })
      .on("postgres_changes", { event: "*", schema: "public", table: "analises" }, () => { clearTimeout(tAn); tAn = setTimeout(async () => { await carregarAnalises(); renderCarteira(); renderDia(); renderAnalistas(); renderNews(); renderEmpresas(); atualizarGaveta(); }, 1500); })
      .on("postgres_changes", { event: "*", schema: "public", table: "empresas" }, () => { clearTimeout(tEmp); tEmp = setTimeout(async () => { await carregarEmpresas(); renderHero(); renderDia(); renderEmpresas(); }, 4000); })
      .on("postgres_changes", { event: "*", schema: "public", table: "painel" }, async () => { await carregarPainel(); renderMercado(); renderHero(); renderCarteira(); renderRecs(); renderDiv(); renderNews(); renderTape(); renderRF(); renderDia(); renderEscritorio(); })
      .on("postgres_changes", { event: "*", schema: "public", table: "carteira" }, async () => { await carregarCarteira(); await carregarEmpresas(); renderAll(); })
      .on("postgres_changes", { event: "*", schema: "public", table: "renda_fixa" }, async () => { await carregarRF(); aposRF(); })
      .subscribe();
    abrirPeloEndereco();
    carregarCambio(true);
    vivoIniciar();
  }
  function parar() { vivoParar(); if (canal) { sb.removeChannel(canal); canal = null; } S.carteira = []; S.analises = {}; S.painel = {}; S.empresas = {}; S.rf = []; S.anim.clear(); }
  async function carregarCarteira() {
    const { data, error } = await sb.from("carteira").select("id,ticker,qtd,pm").order("criado_em");
    if (error) { toast("Não foi possível carregar sua carteira. Recarregue a página."); return; }
    S.carteira = (data || []).map((p) => ({ ...p, qtd: Number(p.qtd), pm: p.pm != null ? Number(p.pm) : null }));
  }
  async function carregarCotacoes() {
    const cols = "ticker,nome,preco,var_dia,volume,setor,setor_macro,valor_mercado_mi,classe,moeda,bolsa,logo,extra,atualizado_em";
    let todas = [], campos = cols;
    for (let i = 0; i < 6; i++) {
      let { data, error } = await sb.from("cotacoes").select(campos).order("ticker").range(i * 1000, i * 1000 + 999);
      // Banco ainda sem as colunas novas (classe, moeda...): usa as antigas
      if (error && i === 0 && campos === cols) { campos = "ticker,nome,preco,var_dia,volume,setor,setor_macro,valor_mercado_mi,atualizado_em"; ({ data, error } = await sb.from("cotacoes").select(campos).order("ticker").range(0, 999)); }
      if (error || !data) break;
      todas = todas.concat(data); if (data.length < 1000) break;
    }
    if (!todas.length) return;
    todas.forEach((r) => { r.classe = r.classe || "acao"; r.moeda = r.moeda || "BRL"; r.preco = Number(r.preco); r.var_dia = Number(r.var_dia); r.volume = Number(r.volume) || 0; });
    todas.sort((a, b) => b.volume - a.volume);
    S.cot = todas; const mp = {}; let ts = null;
    todas.forEach((r) => { mp[r.ticker] = r; if (r.classe === "acao" && (!ts || r.atualizado_em > ts)) ts = r.atualizado_em; });
    S.cotMap = mp; S.cotTs = ts;
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
  // Reserva caso a conexão em tempo real caia: recarrega tudo a cada 2 minutos com a página aberta
  setInterval(async () => {
    if (!S.user || document.visibilityState !== "visible") return;
    await Promise.all([carregarCotacoes(), carregarAnalises(), carregarPainel(), carregarEmpresas()]);
    renderAll(); atualizarGaveta();
  }, 120000);
  document.addEventListener("visibilitychange", async () => { if (S.user && document.visibilityState === "visible") { await Promise.all([carregarCotacoes(), carregarAnalises(), carregarPainel(), carregarEmpresas(), carregarRF()]); renderAll(); atualizarGaveta(); } });

  /* Atualizar cotações agora */
  $("#btn-refresh").addEventListener("click", async () => {
    const b = $("#btn-refresh"); b.disabled = true; b.classList.add("spin");
    try {
      const data = await radar({ acao: "cotacoes" });
      if (!data || !data.ok) throw new Error(data && data.erro);
      await carregarCotacoes(); renderAll();
      toast(data.pulado ? "As cotações já foram atualizadas no último minuto." : "Cotações atualizadas: " + [data.acoes && data.acoes + " ações", data.fiis && data.fiis + " FIIs", data.etfs && data.etfs + " ETFs", data.exterior && data.exterior + " ativos dos EUA"].filter(Boolean).join(", ") + ".");
    } catch (e) { toast("Não foi possível atualizar agora. As cotações seguem se atualizando sozinhas a cada 2 minutos no pregão."); }
    finally { b.disabled = false; b.classList.remove("spin"); }
  });

  function renderAll() { renderStatus(); renderMercado(); renderConv(); renderHero(); renderDia(); renderEscritorio(); renderCarteira(); renderRF(); renderAnalistas(); renderDiv(); renderRecs(); renderNews(); renderEmpresas(); renderTodas(); renderTape(); renderRanking(); }
  function renderStatus() { const el = $("#last-upd"); const v = typeof VIVO !== "undefined" && VIVO.ativo(); el.classList.toggle("vivo", v); el.textContent = v ? "Cotações " + VIVO.rotulo() : S.cotTs ? "Cotações " + ago(S.cotTs) : ""; }

  /* ---------- Logos ---------- */
  function logoUrl(t) {
    const c = S.cotMap[t];
    if (c && c.classe === "cripto") return c.extra && safeImg(c.extra.img) ? c.extra.img : null;
    if (c && c.logo && /^[a-z0-9\-\/]+$/i.test(c.logo)) return `https://s3-symbol-logo.tradingview.com/${c.logo}.svg`;
    return TICKER_RE.test(t) ? `https://icons.brapi.dev/icons/${encodeURIComponent(t)}.svg` : null;
  }
  function logoHtml(t, big) {
    const u = logoUrl(t), letras = esc(t.replace(/\..*$/, "").replace(/-BRL$/, "").slice(0, 4));
    return u ? `<img class="lg${big ? " big" : ""}" src="${esc(u)}" alt="" loading="lazy" referrerpolicy="no-referrer" data-fallback="${letras}">` : `<span class="lg${big ? " big" : ""} lg-x" aria-hidden="true">${letras}</span>`;
  }
  // Logo que não carrega vira as letras do código
  document.addEventListener("error", (e) => { const i = e.target; if (i && i.tagName === "IMG" && i.dataset.fallback != null) { const s = document.createElement("span"); s.className = i.className + " lg-x"; s.textContent = i.dataset.fallback; i.replaceWith(s); } else if (i && i.tagName === "IMG" && i.closest(".gal")) { const f = i.closest("figure"); if (f) f.remove(); } }, true);

  /* ---------- Gráficos interativos (perfil do ativo e evolução da carteira) ---------- */
  /* ---------- Gráficos: desenho vivo, que anda suave quando chega um ponto novo ---------- */
  const PERIODOS = [["1M", 23], ["3M", 66], ["6M", 130], ["1A", 9999]];
  const INTRA = [["Hoje", "dia"], ["5D", "5d"]];   // ao longo do dia
  const CH = {};
  const G = { W: 640, H: 200, P: 8, R: 86 };   // R: margem da direita, para a escala e o preço atual
  const ehIntra = (per) => INTRA.some((x) => x[0] === per);
  const diaSP = (ts) => new Date(ts * 1000).toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });
  const horaSP = (ts) => new Date(ts * 1000).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
  const suaveG = (k) => k < 0 ? 0 : k > 1 ? 1 : 1 - Math.pow(1 - k, 3);
  const compactoG = (v) => { const a = Math.abs(v); return a >= 1e6 ? num(v / 1e6, a >= 1e7 ? 1 : 2) + " mi" : a >= 1e4 ? num(v / 1e3, a >= 1e5 ? 0 : 1) + " mil" : num(v, a >= 100 ? 0 : 2); };
  // opt.intra: série [ts, valor] ao longo do dia; opt.base: fechamento do dia anterior; opt.vivo: recebe pontos novos a cada poucos segundos
  function chartBox(key, serie, opt) {
    if (!serie || serie.length < 3) return "";
    const ant = CH[key] || {};
    const intra = opt.intra && opt.intra.length ? opt.intra : null;
    const temHoje = intra && diaSP(intra[intra.length - 1][0]) === hojeISO();
    let per = ant.escolhido ? ant.per : temHoje ? "Hoje" : (ant.per || "1A"); if (ehIntra(per) && !intra) per = "1A";
    CH[key] = { escolhido: !!ant.escolhido, serie, intra, per, fmt: opt.fmt, cor: opt.cor || null, base: opt.base ?? null, vivo: !!opt.vivo, vis: null, raf: 0, novo: true };
    const bts = (intra ? INTRA : []).concat(PERIODOS);
    return `<div class="g-per" role="group" aria-label="Período" data-chart="${key}">${bts.map(([p]) => `<button type="button" data-per="${p}" aria-pressed="${p === per}">${p}</button>`).join("")}</div>
      <div class="chart-wrap" data-cw="${key}">${chartSvg(key)}<div class="g-tip" hidden></div></div>`;
  }
  function recorte(key) {
    const c = CH[key];
    if (ehIntra(c.per) && c.intra) {
      if (c.per === "5D") return c.intra;
      const ult = diaSP(c.intra[c.intra.length - 1][0]);   // hoje, ou o último pregão se hoje ainda não teve
      return c.intra.filter((p) => diaSP(p[0]) === ult);
    }
    const n = (PERIODOS.find((p) => p[0] === c.per) || PERIODOS[3])[1]; return c.serie.slice(-Math.min(n, c.serie.length));
  }
  // Pontos prontos para desenhar. "Hoje" usa o relógio no eixo x (o dia inteiro do pregão, a linha vai avançando);
  // os outros períodos usam a ordem dos pontos. Séries longas viram blocos fixos (o último ponto de cada bloco),
  // assim um ponto novo só mexe no fim da linha e a animação fica contínua.
  function prepGrafico(key) {
    const c = CH[key], s = recorte(key); if (s.length < 2) return null;
    const hoje = c.per === "Hoje";
    let x0, x1, tx, ts, v;
    if (hoje) {
      const d = diaSP(s[0][0]); const ab = Date.parse(d + "T10:00:00-03:00") / 1000, fe = Date.parse(d + "T18:00:00-03:00") / 1000;
      x0 = Math.min(s[0][0], ab); x1 = Math.max(s[s.length - 1][0], fe);
      const B = (x1 - x0) / 360; const out = [];
      s.forEach((p) => { const b = Math.floor((p[0] - x0) / B); if (out.length && out[out.length - 1].b === b) out[out.length - 1].p = p; else out.push({ b, p }); });
      ts = out.map((o) => o.p[0]); v = out.map((o) => o.p[1]); tx = ts.slice();
    } else {
      let B = 1; while (s.length / B > 420) B *= 2;
      const out = []; for (let i = 0; i < s.length; i += B) out.push(s[Math.min(s.length - 1, i + B - 1)]);
      if (out[out.length - 1] !== s[s.length - 1]) out.push(s[s.length - 1]);
      ts = out.map((p) => p[0]); v = out.map((p) => p[1]); tx = out.map((_, i) => i); x0 = 0; x1 = out.length - 1;
    }
    const hojeMesmo = hoje && diaSP(ts[ts.length - 1]) === hojeISO();
    const base = hojeMesmo && c.base > 0 ? c.base : v[0];
    let mn = Math.min(base, ...v), mx = Math.max(base, ...v);
    const minR = Math.abs(mx) * 0.003 || 1; if (mx - mn < minR) { const m = (mx + mn) / 2; mn = m - minR / 2; mx = m + minR / 2; }
    const fol = (mx - mn) * 0.12;
    return { hoje, tx, ts, v, x0, x1, y0: mn - fol, y1: mx + fol, base, n: tx.length };
  }
  function passoBonito(r) { const p = Math.pow(10, Math.floor(Math.log10(r))); const f = r / p; return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p; }
  function chartSvg(key) {
    const lw = window.innerWidth || 1024; G.W = lw < 700 ? Math.max(300, lw - 48) : 640; G.H = lw < 700 ? 180 : 200; G.R = lw < 700 ? 76 : 86;   // 1 unidade ≈ 1 pixel: texto legível no celular
    const c = CH[key]; const pr = prepGrafico(key); const { W, H } = G;
    if (!pr) return ehIntra(c.per) ? `<p class="hint" style="margin:14px 0;${c.cor ? "color:rgba(255,255,255,.8)" : ""}">O gráfico do dia vai se formando durante o pregão. Volte depois da abertura da bolsa (10h).</p>` : "";
    const gid = "gr-" + key;
    return `<p class="g-res"><span class="g-rot"></span> <b class="g-var"></b> <span class="hint g-de"></span>${c.vivo && c.per === "Hoje" ? ` <span class="g-vivo" hidden><i></i><em>ao vivo</em></span>` : ""}</p>
    <svg class="chart" data-svg="${key}" viewBox="0 0 ${W} ${H + 22}" role="img" aria-label="Gráfico do período">
      <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop class="g-s0" offset="0" stop-opacity=".30"/><stop class="g-s1" offset="1" stop-opacity="0"/></linearGradient>
        <clipPath id="${gid}-r"><rect class="g-rev" x="0" y="-10" width="${W}" height="${H + 20}"/></clipPath>
        <clipPath id="${gid}-a"><rect class="g-ca" x="0" y="-10" width="${W}" height="0"/></clipPath><clipPath id="${gid}-b"><rect class="g-cb" x="0" y="0" width="${W}" height="${H + 10}"/></clipPath></defs>
      <g class="g-grade"></g><g class="g-eixo"></g>
      <line class="g-base" stroke-dasharray="4 4"/>
      <g clip-path="url(#${gid}-r)"><path class="g-area" fill="url(#${gid})"/>
        <path class="g-ln g-up" clip-path="url(#${gid}-a)" fill="none" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
        <path class="g-ln g-dn" clip-path="url(#${gid}-b)" fill="none" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></g>
      <g class="g-fim"><circle class="g-pulso" r="4"/><circle class="g-dot" r="4.2"/></g>
      <g class="g-preco"><rect rx="5" height="20"/><text font-size="11.5" font-weight="700" text-anchor="middle"></text></g>
      <g class="g-mira" visibility="hidden"><line class="g-linha" stroke-width="1" stroke-dasharray="3 3"/><circle class="g-ponto" r="5" stroke-width="2"/></g>
      <rect class="g-toque" x="0" y="0" width="${W}" height="${H}" fill="transparent" style="cursor:crosshair;touch-action:pan-y"/>
    </svg>`;
  }
  // Desenha um estado (no meio de uma animação, os valores vêm interpolados)
  function desenharGrafico(key, e) {
    const c = CH[key]; const wrap = document.querySelector(`[data-cw="${key}"]`); const svg = wrap && wrap.querySelector("svg"); if (!svg || !e) return;
    const { W, H, P, R } = G; const x1p = W - R, y1p = H - P;
    const X = (t) => P + (t - e.x0) / ((e.x1 - e.x0) || 1) * (x1p - P), Y = (v) => P + (e.y1 - v) / ((e.y1 - e.y0) || 1) * (y1p - P);
    const xs = e.tx.map(X), ys = e.v.map(Y);
    const d = xs.map((x, i) => (i ? "L" : "M") + x.toFixed(1) + " " + ys[i].toFixed(1)).join(" ");
    const q = (s) => svg.querySelector(s);
    const ult = e.v[e.v.length - 1], sobe = ult >= e.base;
    const cUp = c.cor || "var(--up)", cDn = c.cor || "var(--down)", cor = sobe ? cUp : cDn;
    q(".g-up").setAttribute("d", d); q(".g-dn").setAttribute("d", d); q(".g-up").style.stroke = cUp; q(".g-dn").style.stroke = cDn;
    q(".g-area").setAttribute("d", d + ` L${xs[xs.length - 1].toFixed(1)} ${y1p} L${xs[0].toFixed(1)} ${y1p} Z`);
    q(".g-s0").style.stopColor = cor; q(".g-s1").style.stopColor = cor;
    const yb = Math.max(-10, Math.min(H + 10, Y(e.base)));
    q(".g-ca").setAttribute("height", Math.max(0, yb + 10)); q(".g-cb").setAttribute("y", yb); q(".g-cb").setAttribute("height", Math.max(0, H + 10 - yb));
    const bl = q(".g-base"); bl.setAttribute("x1", P); bl.setAttribute("x2", x1p); bl.setAttribute("y1", yb); bl.setAttribute("y2", yb); bl.setAttribute("visibility", e.base > e.y0 && e.base < e.y1 ? "visible" : "hidden");
    q(".g-rev").setAttribute("width", W * (e.rev ?? 1));
    // escala: linhas e valores à direita
    const passo = passoBonito((e.y1 - e.y0) / 3.2); let g = "";
    const lyE = Y(e.v[e.v.length - 1]); for (let v = Math.ceil(e.y0 / passo) * passo; v < e.y1; v += passo) { const y = Y(v).toFixed(1); g += `<line x1="${P}" x2="${x1p}" y1="${y}" y2="${y}"/>` + (Math.abs(+y - lyE) < 16 ? "" : `<text x="${x1p + 8}" y="${(+y + 4).toFixed(1)}" font-size="10.5">${esc(compactoG(v))}</text>`); }
    q(".g-grade").innerHTML = g;
    // eixo do tempo
    let ex = "";
    if (e.hoje) { const d0 = diaSP(e.ts[0]); for (let h = 10; h <= 18; h += 2) { const t = Date.parse(d0 + "T" + String(h).padStart(2, "0") + ":00:00-03:00") / 1000; if (t >= e.x0 && t <= e.x1) ex += `<text x="${X(t).toFixed(1)}" y="${H + 16}" font-size="10.5" text-anchor="middle">${h}h</text>`; } }
    else {
      const longo = (e.ts[e.ts.length - 1] - e.ts[0]) > 100 * 86400, intra = c.per === "5D";
      const f = (ts) => intra ? new Date(ts * 1000).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", timeZone: "America/Sao_Paulo" }) : new Date(ts * 1000).toLocaleDateString("pt-BR", longo ? { month: "short", year: "2-digit" } : { day: "2-digit", month: "short" });
      const n = e.ts.length, ks = W < 500 ? [0, 0.5, 1] : [0, 0.33, 0.66, 1]; ks.forEach((k, j) => { const i = Math.round(k * (n - 1)); ex += `<text x="${X(e.tx[i]).toFixed(1)}" y="${H + 16}" font-size="10.5" text-anchor="${j === 0 ? "start" : j === ks.length - 1 ? "end" : "middle"}">${esc(f(e.ts[i]))}</text>`; });
    }
    q(".g-eixo").innerHTML = ex;
    // fim da linha: ponto (pulsando quando está ao vivo) e o valor atual na escala
    const lx = xs[xs.length - 1], ly = ys[ys.length - 1];
    q(".g-fim").setAttribute("transform", `translate(${lx.toFixed(1)} ${ly.toFixed(1)})`); q(".g-fim").setAttribute("visibility", (e.rev ?? 1) > 0.98 ? "visible" : "hidden");
    q(".g-dot").style.fill = cor; q(".g-pulso").style.fill = cor;
    svg.classList.toggle("g-aovivo", !!(c.vivo && e.hoje && VIVO.ativo()));
    const pz = q(".g-preco"), txt = c.fmt(ult); const larg = Math.max(52, txt.length * 6.6 + 12);
    const py = Math.max(0, Math.min(H - 20, ly - 10));
    pz.querySelector("rect").setAttribute("x", W - larg); pz.querySelector("rect").setAttribute("y", py); pz.querySelector("rect").setAttribute("width", larg);
    pz.querySelector("rect").style.fill = c.cor ? "#fff" : cor;
    const tt = pz.querySelector("text"); tt.setAttribute("x", W - larg / 2); tt.setAttribute("y", py + 14); tt.textContent = txt; tt.style.fill = c.cor ? "var(--hero-a)" : "#fff";
    // resumo em cima: quanto variou desde o fechamento de ontem (Hoje) ou no período
    const rot = e.hoje ? (diaSP(e.ts[e.ts.length - 1]) === hojeISO() ? "Hoje" : "No último pregão") : "No período";
    const varP = (ult / e.base - 1) * 100;
    const res = wrap.querySelector(".g-res");
    if (res) {
      res.querySelector(".g-rot").textContent = rot + ":"; const vb = res.querySelector(".g-var"); vb.textContent = pct(varP) + " (" + sinal(ult - e.base, (x) => c.fmt(Math.round(x * 100) / 100)) + ")"; vb.className = "g-var " + cls(varP);
      res.querySelector(".g-de").textContent = e.hoje ? (c.base && diaSP(e.ts[e.ts.length - 1]) === hojeISO() ? "sobre o fechamento de ontem" : "") : `(${c.fmt(e.v[0])} → ${c.fmt(ult)})`;
      const vv = res.querySelector(".g-vivo"); if (vv) { vv.hidden = !VIVO.ativo(); const em = vv.querySelector("em"); em.textContent = VIVO.rotulo(); }
    }
    c.desenho = { e, xs, ys };
    if (c.mira) c.mira();
  }
  // Leva o gráfico do estado atual até os dados novos. Se a série só cresceu no fim, só o fim anda (a escala acompanha suave);
  // se mudou o período, a linha entra da esquerda para a direita.
  function animarGrafico(key) {
    const c = CH[key]; if (!c) return; const novo = prepGrafico(key); if (!novo) return;
    const de = c.vis; cancelAnimationFrame(c.raf);
    const cont = de && !c.novo && de.hoje === novo.hoje && de.n >= 2 && novo.n >= de.n && novo.n - de.n <= 6 && de.ts[0] === novo.ts[0];
    c.novo = false;
    const fim = (k) => {
      if (!cont) return { ...novo, rev: suaveG(k) };
      const j = de.n - 1; const L = (a, b) => a + (b - a) * suaveG(k);
      const tx = novo.tx.map((t, i) => i < j ? t : L(de.tx[j], t)), v = novo.v.map((x, i) => i < j ? x : L(de.v[j], x));
      return { ...novo, tx, v, x0: L(de.x0, novo.x0), x1: L(de.x1, novo.x1), y0: L(de.y0, novo.y0), y1: L(de.y1, novo.y1), base: L(de.base, novo.base), rev: 1 };
    };
    c.vis = novo;
    if (reduz || document.hidden) { desenharGrafico(key, fim(1)); return; }
    const t0 = performance.now(), dur = cont ? 900 : 1100;
    const passo = (t) => { const k = Math.min(1, (t - t0) / dur); desenharGrafico(key, fim(k)); if (k < 1) c.raf = requestAnimationFrame(passo); };
    c.raf = requestAnimationFrame(passo);
  }
  // Dados novos num gráfico que já está na tela (sem refazer o HTML)
  function atualizarGrafico(key, serie, opt) {
    const c = CH[key]; const w = document.querySelector(`[data-cw="${key}"]`); if (!c || !w) return false;
    const intra = opt.intra && opt.intra.length ? opt.intra : null;
    const tinhaIntra = !!c.intra; c.serie = serie; c.intra = intra; if (opt.base !== undefined) c.base = opt.base;
    if (!!intra !== tinhaIntra || (ehIntra(c.per) && !intra)) return false;   // botões mudaram: refaz
    if (!w.querySelector("svg")) { if (prepGrafico(key)) { w.innerHTML = chartSvg(key) + `<div class="g-tip" hidden></div>`; c.novo = true; ligarGrafico(key); } return true; }
    animarGrafico(key); return true;
  }
  function ligarGrafico(key) {
    const wrap = document.querySelector(`[data-cw="${key}"]`); if (!wrap || !CH[key]) return;
    const svg = wrap.querySelector("svg"); if (!svg) return;
    const c = CH[key]; c.novo = true; c.vis = null; c.mira = null;
    const { W, H } = G; const fmt = c.fmt;
    const tip = wrap.querySelector(".g-tip"), mira = svg.querySelector(".g-mira"), linha = svg.querySelector(".g-linha"), ponto = svg.querySelector(".g-ponto");
    linha.style.stroke = c.cor ? "rgba(255,255,255,.6)" : "var(--muted)"; ponto.style.stroke = c.cor ? "var(--hero-a)" : "var(--surface)";
    let ultX = null;
    const mover = (clientX) => {
      const dz = c.desenho; const r = svg.getBoundingClientRect(); if (!dz || !r.width) return;
      const pxl = (clientX - r.left) / r.width * W; const { xs, ys, e } = dz;
      let lo = 0, hi = xs.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (xs[m] < pxl) lo = m; else hi = m; }
      const i = Math.abs(xs[lo] - pxl) <= Math.abs(xs[hi] - pxl) ? lo : hi;
      const ts = e.ts[i], v = e.v[i], cx = xs[i], cy = ys[i];
      linha.setAttribute("x1", cx); linha.setAttribute("x2", cx); linha.setAttribute("y1", G.P); linha.setAttribute("y2", H - G.P); ponto.setAttribute("cx", cx); ponto.setAttribute("cy", cy);
      ponto.style.fill = v >= e.base ? (c.cor || "var(--up)") : (c.cor || "var(--down)");
      mira.setAttribute("visibility", "visible");
      const desde = (v / e.base - 1) * 100; const intra = ehIntra(c.per);
      tip.innerHTML = `<span>${esc(new Date(ts * 1000).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short", year: intra ? undefined : "numeric", timeZone: "America/Sao_Paulo" }) + (intra ? " · " + new Date(ts * 1000).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: c.per === "Hoje" ? "2-digit" : undefined, timeZone: "America/Sao_Paulo" }) : ""))}</span><b>${esc(fmt(v))}</b><small class="${cls(desde)}">${esc(pct(desde))} ${c.per === "Hoje" ? (c.base ? "sobre ontem" : "desde a abertura") : "no período"}</small>`;
      tip.hidden = false;
      const escala = r.width / W, xTela = cx * escala, larg = tip.offsetWidth;
      tip.style.left = Math.max(0, Math.min(r.width - larg, xTela - larg / 2)) + "px";
      const yTela = cy * (r.height / (H + 22)), alt = tip.offsetHeight;
      const topo = r.top - wrap.getBoundingClientRect().top;
      tip.style.top = (topo + (yTela - alt - 12 >= 0 ? yTela - alt - 12 : yTela + 14)) + "px";
    };
    c.mira = () => { if (ultX != null) mover(ultX); };
    const sair = () => { ultX = null; mira.setAttribute("visibility", "hidden"); tip.hidden = true; };
    const area = svg.querySelector(".g-toque");
    const ev = (e) => { ultX = e.clientX; mover(ultX); };
    area.addEventListener("pointermove", ev); area.addEventListener("pointerdown", ev);
    area.addEventListener("pointerleave", sair); area.addEventListener("pointercancel", sair);
    animarGrafico(key);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-per]"); if (!b) return;
    const g = b.closest("[data-chart]"); if (!g) return; const key = g.dataset.chart; if (!CH[key]) return;
    CH[key].per = b.dataset.per; CH[key].escolhido = true;
    g.querySelectorAll("[data-per]").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.per === CH[key].per)));
    const w = document.querySelector(`[data-cw="${key}"]`); if (!w) return;
    cancelAnimationFrame(CH[key].raf);
    w.innerHTML = chartSvg(key) + `<div class="g-tip" hidden></div>`; ligarGrafico(key);
  });

  /* ---------- Ao vivo: cotações dos ativos da carteira a cada poucos segundos ----------
     Só enquanto a página está aberta e o mercado do ativo está funcionando (B3, bolsas dos EUA; cripto o dia todo).
     Cada consulta vira um ponto do gráfico "Hoje"; os pontos do dia ficam guardados neste aparelho. */
  const VIVO = {
    q: {}, pts: [], tk: {}, dia: null, uid: null, timer: 0, falhas: 0, ultimo: 0, atraso: null, salvo: 0,
    ativo() { return Date.now() - this.ultimo < 30000; },
    rotulo() { return this.atraso ? `ao vivo · atraso de ${this.atraso} min da fonte` : "ao vivo"; },
  };
  function partesEm(tz) {
    const p = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
    const g = (t) => (p.find((x) => x.type === t) || {}).value;
    return { dia: g("year") + "-" + g("month") + "-" + g("day"), mins: (+g("hour") % 24) * 60 + (+g("minute")), fds: ["Sat", "Sun"].includes(g("weekday")) };
  }
  function mercadosAbertos() {
    const sp = partesEm("America/Sao_Paulo"), ny = partesEm("America/New_York");
    return { b3: !sp.fds && !FERIADOS.has(sp.dia) && sp.mins >= 595 && sp.mins < 1095, eua: !ny.fds && ny.mins >= 570 && ny.mins < 965 };
  }
  function vivoCarregar() {
    const uid = S.user && S.user.id; if (VIVO.uid === uid && VIVO.dia === hojeISO()) return;
    VIVO.uid = uid; VIVO.dia = hojeISO(); VIVO.pts = []; VIVO.tk = {}; VIVO.q = {};
    try { const s = JSON.parse(localStorage.getItem("radar-vivo") || "null"); if (s && s.uid === uid && s.dia === VIVO.dia) { VIVO.pts = s.pts || []; VIVO.tk = s.tk || {}; } } catch (_) { /* sem storage */ }
  }
  function vivoGuardar(forca) {
    if (!forca && Date.now() - VIVO.salvo < 30000) return; VIVO.salvo = Date.now();
    try { localStorage.setItem("radar-vivo", JSON.stringify({ uid: VIVO.uid, dia: VIVO.dia, pts: VIVO.pts, tk: VIVO.tk })); } catch (_) { /* cheio ou modo privado */ }
  }
  const afinar = (a, max) => { if (a.length <= max) return a; const meio = a.length >> 1; return a.slice(0, meio).filter((_, i) => i % 2 === 0).concat(a.slice(meio)); };
  // junta o histórico do dia (a cada 2 min, do banco) com os pontos ao vivo, sem repetir o mesmo trecho
  function comVivo(hist, vivo) {
    if (!vivo || vivo.length < 1) return hist;
    const out = []; let j = 0;
    (hist || []).forEach((p) => { while (j < vivo.length && vivo[j][0] < p[0] - 300) j++; const perto = (j < vivo.length && Math.abs(vivo[j][0] - p[0]) < 300) || (j > 0 && Math.abs(vivo[j - 1][0] - p[0]) < 300); if (!perto) out.push(p); });
    return out.concat(vivo).sort((a, b) => a[0] - b[0]);
  }
  function vivoAgendar(ms) { clearTimeout(VIVO.timer); VIVO.timer = setTimeout(vivoPasso, ms); }
  async function vivoPasso() {
    if (!S.user) return;
    if (document.hidden || !S.carteira.length) return vivoAgendar(15000);
    vivoCarregar();
    const ab = mercadosAbertos(); const b3 = [], eua = [], cg = {}, cgT = {};
    S.carteira.forEach((p) => {
      const t = p.ticker, c = S.cotMap[t], cl = classeDe(t);
      if (cl === "cripto") { const id = c && c.extra && c.extra.id; if (id) { cg[id] = t; cgT[t] = id; } }
      else if (ext(cl)) { const bo = String((c && c.bolsa) || "NASDAQ").toUpperCase(); if (ab.eua && /^(NASDAQ|NYSE|AMEX)$/.test(bo)) eua.push(bo + ":" + t); }
      else if (TICKER_RE.test(t) && ab.b3) b3.push(t);
    });
    const ids = Object.keys(cg);
    if (!b3.length && !eua.length && !ids.length) { renderStatus(); return vivoAgendar(60000); }
    let ok = false;
    try {
      const { data, error } = await sb.functions.invoke("aovivo", { body: { b3, eua, cripto: ids } });
      if (error || !data || !data.ok) throw error || new Error((data && data.erro) || "sem resposta");
      const agora = Math.round(Date.now() / 1000); let atraso = null;
      const usa = (t, x) => { if (!x || !(x.p > 0)) return; VIVO.q[t] = { p: x.p, v: x.v, ts: agora }; const a = (VIVO.tk[t] ||= []); if (!a.length || a[a.length - 1][1] !== x.p || agora - a[a.length - 1][0] > 60) { a.push([agora, x.p]); VIVO.tk[t] = afinar(a, 2500); } const m = /_(\d+)$/.exec(x.m || ""); if (m) atraso = Math.max(atraso || 0, Math.round(+m[1] / 60)); };
      Object.entries(data.b3 || {}).forEach(([t, x]) => usa(t, x));
      Object.entries(data.eua || {}).forEach(([t, x]) => usa(t, x));
      Object.entries(data.cripto || {}).forEach(([id, x]) => cg[id] && usa(cg[id], x));
      VIVO.atraso = atraso; VIVO.ultimo = Date.now(); VIVO.falhas = 0; ok = true;
      // um ponto novo para o gráfico da carteira
      const tot = totalCarteira(); if (tot != null) { VIVO.pts.push([agora, Math.round(tot * 100) / 100]); VIVO.pts = afinar(VIVO.pts, 5000); }
      vivoGuardar();
      aplicarVivo();
    } catch (_) { VIVO.falhas++; }
    vivoAgendar(ok ? (b3.length || eua.length ? 5000 : 20000) : Math.min(120000, 5000 * 2 ** VIVO.falhas));
  }
  // patrimônio agora (mesma conta do topo): ativos com o preço ao vivo + renda fixa
  function totalCarteira() { try { const RF = S.rf.length ? rfTotais() : null; const { rows, patr } = linhas(); return rows.some((r) => r.valor != null) || RF ? patr + (RF ? RF.bruto : 0) : null; } catch (_) { return null; } }
  // atualiza o que mostra preço sem redesenhar a página inteira
  function aplicarVivo() {
    renderStatus(); renderHero(); renderEscritorio();
    if (Date.now() - (VIVO.diaT || 0) > 20000) { VIVO.diaT = Date.now(); try { renderDia(); renderTape(); } catch (_) { /* seção ainda não montada */ } }
    try {
      const { rows } = linhas();
      rows.forEach((r) => {
        const row = document.querySelector(`.pos-row[data-open="${CSS.escape(r.t)}"]`); if (!row || r.preco == null) return;
        const cel = row.querySelectorAll(".cell"); if (cel.length < 2) return;
        const b = cel[0].querySelector("b"), sm = cel[0].querySelector("small"), prev = S.prevPx[r.t];
        if (prev != null && prev !== r.preco) { b.classList.remove("tick-up", "tick-down"); void b.offsetWidth; b.classList.add(r.preco > prev ? "tick-up" : "tick-down"); }
        b.textContent = money(r.preco, r.moeda); if (sm && r.vd != null) { sm.textContent = pct(r.vd); sm.className = cls(r.vd); }
        const bv = cel[1].querySelector("b"); if (bv) bv.textContent = brl(r.valor);
        const sv = cel[1].querySelector("small"); if (sv && r.res != null) { sv.textContent = pct(r.res); sv.className = cls(r.res); }
        S.prevPx[r.t] = r.preco;
      });
    } catch (_) { /* tabela ainda não montada */ }
    if (S.emp && VIVO.q[S.emp] && CH.emp) { try { cabecalhoEmpresa(S.emp, S.empresas[S.emp] || null); const q = VIVO.q[S.emp]; atualizarGrafico("emp", CH.emp.serie, { intra: comVivo(S.intra && S.intra[S.emp], VIVO.tk[S.emp]), base: q.p / (1 + q.v / 100) }); } catch (_) { /* página do ativo fechou */ } }
  }
  function vivoIniciar() { vivoCarregar(); vivoAgendar(800); }
  function vivoParar() { clearTimeout(VIVO.timer); VIVO.q = {}; VIVO.pts = []; VIVO.tk = {}; VIVO.uid = null; VIVO.ultimo = 0; try { localStorage.removeItem("radar-vivo"); } catch (_) { /* sem storage */ } }
  document.addEventListener("visibilitychange", () => { if (S.user && !document.hidden) vivoAgendar(300); });

  /* ---------- Carteira: linhas com valores em reais ---------- */
  const SINAL = { reforcar: "Considerar reforçar", manter: "Manter", atencao: "Atenção", reduzir: "Considerar reduzir" };
  function cotacao(t) {
    const c = S.cotMap[t], a = S.analises[t];
    const lv = VIVO.q[t]; if (lv && Date.now() / 1000 - lv.ts < 120) return { preco: lv.p, varDia: lv.v, nome: (a && a.nome) || (c ? nomeBom(c.nome) : t), setor: c ? c.setor_macro : a && a.setor, seg: c ? c.setor : null };
    if (c) return { preco: Number(c.preco), varDia: Number(c.var_dia), nome: (a && a.nome) || nomeBom(c.nome), setor: c.setor_macro, seg: c.setor };
    if (a && a.preco != null) return { preco: Number(a.preco), varDia: a.var_dia != null ? Number(a.var_dia) : null, nome: a.nome, setor: a.setor, seg: null };
    return null;
  }
  function linhas() {
    let patr = 0;
    const rows = S.carteira.map((p) => {
      const t = p.ticker, q = cotacao(t), classe = classeDe(t), moeda = moedaDe(t);
      const preco = q ? q.preco : null, vd = q ? q.varDia : null, qtd = Number(p.qtd);
      const valorNat = preco != null ? preco * qtd : null;
      const valor = paraBRL(valorNat, moeda); if (valor) patr += valor;
      // Variação do dia em reais: ativo em dólar também sobe ou cai com o câmbio
      const vdBRL = vd != null ? ((1 + vd / 100) * (1 + (moeda === "USD" ? fxVar() : 0) / 100) - 1) * 100 : null;
      const res = (preco != null && p.pm) ? (preco / p.pm - 1) * 100 : null;
      return { p, t, qtd, classe, moeda, a: S.analises[t] || null, preco, vd, vdBRL, valor, valorNat, res, nome: q ? q.nome : "", setor: (q && q.setor) || "Outros", seg: q && q.seg };
    });
    rows.forEach((r) => { r.peso = (r.valor && patr) ? r.valor / patr : 0; });
    rows.sort((x, y) => (y.valor || 0) - (x.valor || 0));
    return { rows, patr };
  }
  function totais(rows) {
    let dia = 0, custo = 0, base = 0, temPreco = false, prov = 0, temProv = false;
    rows.forEach((r) => {
      if (r.valor == null) return; temPreco = true;
      if (r.vdBRL != null) dia += r.valor - r.valor / (1 + r.vdBRL / 100);
      if (r.p.pm) { custo += paraBRL(r.p.pm * r.qtd, r.moeda) || 0; base += r.valor; }
      const e = S.empresas[r.t]; const p12 = e && e.fundamentos && e.fundamentos.proventos12m;
      if (p12 && r.moeda === "BRL") { prov += p12 * r.qtd; temProv = true; }
      else if (r.moeda === "USD" && e && e.fundamentos && e.fundamentos.ind && e.fundamentos.ind.dy) { prov += r.valor * e.fundamentos.ind.dy / 100 * 0.7; temProv = true; }
    });
    return { dia, custo, base, temPreco, prov, temProv };
  }

  /* ---------- Resumo (topo) ---------- */
  function serieCarteira() {
    const f = fx();
    const dia = (ts) => new Date(ts * 1000).toISOString().slice(0, 10);
    const comps = []; let fora = 0;
    S.carteira.forEach((p) => {
      const e = S.empresas[p.ticker], s = e && e.serie; const m = moedaDe(p.ticker);
      const mult = Number(p.qtd) * (m === "USD" ? (f || 0) : 1);
      if (!s || s.length < 10 || !mult) { fora++; return; }
      const mp = new Map(); s.forEach(([ts, v]) => mp.set(dia(ts), v));
      comps.push({ mp, ent: [...mp.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1), mult });
    });
    // Renda fixa: o valor de hoje "descontado" pelo CDI (ou pela taxa prefixada) até cada dia do gráfico
    let RF = null; try { RF = S.rf.length ? rfTotais() : null; } catch (_) { RF = null; }
    const temRF = !!(RF && RF.bruto > 0);
    if (!comps.length && !temRF) return { serie: null, fora, rf: false };
    const hoje = hojeISO();
    let dias;
    if (comps.length) {
      const inicio = comps.reduce((a, c) => c.ent[0][0] > a ? c.ent[0][0] : a, "");
      dias = [...new Set(comps.flatMap((c) => c.ent.map((x) => x[0])))].filter((d) => d >= inicio).sort();
    } else { dias = []; for (let d = somaDias(hoje, -365); d <= hoje; d = somaDias(d, 1)) if (ehUtil(d)) dias.push(d); }
    const rfDia = new Array(dias.length).fill(0);
    if (temRF) {
      const C = RF.C;
      RF.itens.forEach(({ a, k }) => {
        if (!(k.bruto > 0)) return;
        let g = 1; const taxa = Number(a.taxa);
        for (let i = dias.length - 1; i >= 0; i--) {
          const prox = i === dias.length - 1 ? (dias[i] < hoje ? hoje : dias[i]) : dias[i + 1];
          if (dias[i] < prox && !k.futuro) g *= fatorRF(dias[i], prox, a.indexador, taxa, C).f;
          rfDia[i] += k.bruto / g;
        }
      });
    }
    let ult = [];
    if (comps.length) { const inicio = dias[0]; ult = comps.map((c) => { let v = null; for (const [d, x] of c.ent) { if (d > inicio) break; v = x; } return v; }); }
    const serie = dias.map((d, i) => { let tot = 0; comps.forEach((c, j) => { const v = c.mp.get(d); if (v != null) ult[j] = v; if (ult[j] != null) tot += ult[j] * c.mult; }); return [Date.parse(d + "T15:00:00Z") / 1000, Math.round((tot + rfDia[i]) * 100) / 100]; });
    return { serie: serie.length > 5 ? serie : null, fora, rf: temRF };
  }
  // Cotações ao longo do dia (tabela cotacoes_hist, gravada pelo banco a cada atualização de preço)
  S.intra = null; S.intraT = 0;
  async function carregarIntradia() {
    const tk = [...new Set(S.carteira.map((p) => p.ticker))]; if (!tk.length) { S.intra = null; return; }
    S.intraT = Date.now();
    const desde = new Date(Date.now() - 7 * 864e5).toISOString();
    const { data, error } = await sb.from("cotacoes_hist").select("ticker,em,preco").in("ticker", tk).gte("em", desde).order("em").limit(20000);
    if (error) { S.intra = null; return; }
    const por = {}; (data || []).forEach((r) => { (por[r.ticker] ||= []).push([Date.parse(r.em) / 1000, Number(r.preco)]); });
    S.intra = por;
  }
  function pedirIntradia() { if (Date.now() - S.intraT > 110000 && S.user) carregarIntradia().then(() => { if (S.intra) { renderHero(); renderEscritorio(); } }); }
  // soma da carteira em blocos de 5 minutos, carregando o último preço conhecido de cada ativo
  function serieIntradia(rfFixo) {
    if (!S.intra) return null;
    const f = fx(); const pos = S.carteira.map((p) => ({ t: p.ticker, mult: Number(p.qtd) * (moedaDe(p.ticker) === "USD" ? (f || 0) : 1), h: S.intra[p.ticker] || [] })).filter((x) => x.h.length && x.mult);
    if (!pos.length) return null;
    const B = 300, blocos = [...new Set(pos.flatMap((x) => x.h.map(([ts]) => Math.floor(ts / B) * B)))].sort((a, b) => a - b);
    const idx = pos.map(() => 0), ult = pos.map((x) => x.h[0][1]);
    const out = blocos.map((b) => { let tot = 0; pos.forEach((x, i) => { while (idx[i] < x.h.length && Math.floor(x.h[idx[i]][0] / B) * B <= b) { ult[i] = x.h[idx[i]][1]; idx[i]++; } tot += ult[i] * x.mult; }); return [b, Math.round((tot + (rfFixo || 0)) * 100) / 100]; });
    return out.length > 1 ? out : null;
  }
  function renderHero() {
    const RF = S.rf.length ? rfTotais() : null, rfV = RF ? RF.bruto : 0;
    if (!S.carteira.length && !rfV) {
      $("#t-patr").innerHTML = brl(0); $("#t-patr")._v = 0; ["#t-dia", "#t-res", "#t-prov"].forEach((s) => { $(s).innerHTML = "—"; });
      $("#alloc").innerHTML = `<p class="hint" style="margin:0">Adicione seus ativos na carteira para ver o patrimônio, a divisão por classe e a evolução.</p>`;
      $("#hero-chart").innerHTML = ""; $("#hero-fx").textContent = ""; return;
    }
    const { rows, patr } = linhas(); const T = totais(rows);
    const patrTot = patr + rfV;
    contar($("#t-patr"), T.temPreco || rfV ? patrTot : null, brl);
    // Hoje: variação dos ativos mais o que a renda fixa rende em um dia útil
    const rfDia = RF && ehUtil(hojeISO()) ? RF.mes / 21 : 0;
    const dia = (T.temPreco ? T.dia : 0) + rfDia;
    contar($("#t-dia"), T.temPreco || rfV ? dia : null, (v) => esc(sinal(v, brl)) + (patrTot ? ` <small>${esc(pct(v / (patrTot - v) * 100))}</small>` : ""));
    $("#t-dia").className = cls(dia);
    const custo = T.custo + (RF ? RF.apl : 0), base = T.base + (RF ? RF.bruto : 0);
    if (custo) { const res = base - custo; contar($("#t-res"), res, (v) => esc(sinal(v, brl)) + ` <small>${esc(pct((base / custo - 1) * 100))}</small>`); $("#t-res").className = cls(res); }
    else { $("#t-res").innerHTML = `<span class="hint">Informe o preço médio</span>`; $("#t-res")._v = null; $("#t-res").className = ""; }
    if (T.temProv) contar($("#t-prov"), T.prov, (v) => esc(brl(v)) + (patr ? ` <small>${esc(num(T.prov / patr * 100, 1))}% a.a.</small>` : ""));
    else { $("#t-prov").innerHTML = `<span class="hint">Aguardando dados</span>`; $("#t-prov")._v = null; }
    // Divisão por classe
    const porCls = {}; rows.forEach((r) => { porCls[r.classe] = (porCls[r.classe] || 0) + (patrTot ? (r.valor || 0) / patrTot : 0); });
    if (rfV && patrTot) porCls.rf = rfV / patrTot;
    const cl = ORDEM_CLS.concat("rf").filter((c) => porCls[c] > 0);
    const nomeCl = (c) => CLS[c].nome;
    const anim = primeira("alloc");
    $("#alloc").innerHTML = `<div class="alloc-bar${anim ? " anim" : ""}" role="img" aria-label="Divisão por classe: ${esc(cl.map((c) => nomeCl(c) + " " + num(porCls[c] * 100, 0) + "%").join(", "))}">${cl.map((c) => `<i style="width:${(porCls[c] * 100).toFixed(2)}%;background:var(--c-${c})"></i>`).join("")}</div>
      <div class="alloc-leg">${cl.map((c) => `<span><i style="background:var(--c-${c})"></i>${nomeCl(c)} <b>${num(porCls[c] * 100, 0)}%</b></span>`).join("")}</div>`;
    const temUsd = rows.some((r) => r.moeda === "USD");
    $("#hero-fx").textContent = temUsd && fx() ? "Dólar R$ " + num(fx(), 3) : "";
    const { serie, fora, rf: comRF } = serieCarteira();
    const box = $("#hero-chart");
    if (!serie) { box.innerHTML = `<p class="hint" style="color:rgba(255,255,255,.8);margin-top:14px">O gráfico aparece assim que o histórico dos seus ativos for carregado (alguns minutos depois de adicioná-los).</p>`; return; }
    pedirIntradia();
    const intraH = comVivo(serieIntradia(RF ? RF.bruto : 0), VIVO.pts), baseH = T.temPreco || rfV ? patrTot - dia : null;
    if (box.querySelector('[data-cw="hero"]') && atualizarGrafico("hero", serie, { intra: intraH, base: baseH })) return;
    box.innerHTML = chartBox("hero", serie, { fmt: brl, cor: "#fff", intra: intraH, base: baseH, vivo: true }) + `<p class="hint g-nota" style="color:rgba(255,255,255,.75);margin:6px 0 0">Com as quantidades de hoje${temUsd ? " · dólar ao câmbio atual" : ""}${comRF ? " · renda fixa incluída" : ""}${fora ? ` · ${fora} ${fora === 1 ? "ativo sem histórico ficou" : "ativos sem histórico ficaram"} de fora` : ""}.</p>`;
    ligarGrafico("hero");
  }

  /* ---------- Escritório animado ---------- */
  S.escSim = null; S.escTudo = false;
  function diaPct() {
    const RF = S.rf.length ? rfTotais() : null, rfV = RF ? RF.bruto : 0;
    if (!S.carteira.length && !rfV) return null;
    const { rows, patr } = linhas(); const T = totais(rows);
    const rfDia = RF && ehUtil(hojeISO()) ? RF.mes / 21 : 0;
    const total = patr + rfV, dia = (T.temPreco ? T.dia : 0) + rfDia;
    return total - dia ? dia / (total - dia) * 100 : 0;
  }
  // Arrumação do escritório (onde ficam os móveis e o que está guardado): no perfil, com cópia neste aparelho
  const escLocal = () => { try { return JSON.parse(localStorage.getItem("radar-escritorio") || "null"); } catch (_) { return null; } };
  const escLayout = () => (S.perfil && S.perfil.escritorio) || escLocal();
  let tSalvaEsc = 0;
  function salvarEsc(L) {
    try { localStorage.setItem("radar-escritorio", JSON.stringify(L)); } catch (_) { /* modo privado */ }
    if (S.perfil) S.perfil.escritorio = L;
    renderDeco();
    clearTimeout(tSalvaEsc);
    tSalvaEsc = setTimeout(async () => {
      if (!S.perfil || !S.user) return;
      const { error } = await sb.from("perfis").update({ escritorio: L }).eq("user_id", S.user.id);
      if (error && !/escritorio|column|schema cache/i.test(error.message || "")) console.warn("Não deu para salvar o escritório:", error.message);
    }, 1200);
  }
  function renderDeco() {
    if (!window.RadarEscritorio) return;
    const lib = new Set((S.conq && S.conq.itens) || []); const off = new Set(((escLayout() || {}).off) || []);
    const itens = window.RadarEscritorio.DECOR.map((x) => {
      const ok = lib.has(x.item) || S.escTudo;
      if (!ok) return `<span class="lock" title="${esc(x.req)}">${IC(x.ic + ":d")} ${esc(x.nome)} · ${esc(x.req)}</span>`;
      const on = !off.has(x.id);
      return `<button type="button" data-deco="${x.id}" aria-pressed="${on}" title="${on ? "No escritório. Toque para guardar." : "Guardado. Toque para colocar de volta."}">${IC(x.ic + ":d")} ${esc(x.nome)} ${IC(on ? "check" : "eye-slash")}</button>`;
    }).join("");
    const nLib = window.RadarEscritorio.DECOR.filter((x) => lib.has(x.item) || S.escTudo).length, det = $("#esc-deco").querySelector("details");
    $("#esc-deco").innerHTML = `<details class="deco-det"${det && det.open ? " open" : ""}><summary>${IC("sparkle")} Decoração do escritório <b>${nLib} de ${window.RadarEscritorio.DECOR.length}</b> <span class="hint">libera com as recompensas · toque para guardar ou colocar</span></summary><div class="deco-l">${itens}</div></details>`;
  }
  $("#esc-deco").addEventListener("click", (e) => {
    const b = e.target.closest("[data-deco]"); if (!b || !window.RadarEscritorio) return;
    window.RadarEscritorio.equipar(b.dataset.deco, b.getAttribute("aria-pressed") !== "true");
  });
  // Gráfico do monitor do escritório: os mesmos pontos do gráfico "Hoje", em % sobre o fechamento anterior
  // (com a renda fixa somada, como no gráfico de cima). Se hoje ainda não teve pregão, mostra o último dia que teve.
  function serieMonitor() {
    pedirIntradia(); if (!S.intra) return null;
    const RF = S.rf.length ? rfTotais() : null, rfV = RF ? RF.bruto : 0;
    const s = comVivo(serieIntradia(rfV), VIVO.pts); if (!s || s.length < 2) return null;
    const ult = diaSP(s[s.length - 1][0]); const dia0 = s.filter((q) => diaSP(q[0]) === ult);
    // blocos fixos de 2 minutos (o último ponto de cada um): o monitor anda só no fim quando chega um ponto novo
    const dia = []; dia0.forEach((q, i) => { const b = Math.floor(q[0] / 120); if (dia.length && dia[dia.length - 1].b === b) dia[dia.length - 1] = { b, q }; else dia.push({ b, q }); });
    for (let i = 0; i < dia.length; i++) dia[i] = dia[i].q;
    if (dia.length < 2) return null;
    const pc = diaPct(), fim = dia[dia.length - 1][1];
    const hoje = ult === diaSP(Date.now() / 1000);
    const base = hoje && pc != null && isFinite(pc) && pc > -100 ? fim / (1 + pc / 100) : dia[0][1];
    if (!(base > 0)) return null;
    return { pts: dia.map(([ts, v]) => [ts, Math.round((v / base - 1) * 1e4) / 1e4]), hoje };
  }
  function renderEscritorio() {
    const box = $("#esc-body"); if (!box || !window.RadarEscritorio) return;
    const eb = $("#esc-boneco"); if (eb) eb.hidden = !S.user || !S.perfilOk;
    const sim = S.escSim != null;
    const pct = sim ? S.escSim : diaPct();
    const p = S.perfil || {};
    if (S.conq === undefined && S.perfil && S.perfilOk) { S.conq = null; carregarConquistas().then(() => { if (S.conq) renderEscritorio(); }); }
    const itens = (S.conq && S.conq.itens) || [];
    let ativos = [];
    try { if (S.carteira.length) ativos = linhas().rows.slice(0, 8).map((r) => ({ t: r.t, preco: r.preco, vd: r.vd, moeda: r.moeda })); } catch (_) { /* sem cotações ainda */ }
    const k = avKey(p.avatar);
    let serie = null; if (!sim) { try { serie = serieMonitor(); } catch (_) { /* sem histórico do dia */ } }
    window.RadarEscritorio.render(box, { serie, pct, cor: p.cor || "#2457F5", icone: k ? AV_IC[k] : "", boneco: p.boneco || bonecoLocal(), acessorio: p.acessorio || "", fechado: !sim && !ehUtil(hojeISO()), itens, tudo: S.escTudo, sim, ativos, layout: escLayout(), onLayout: salvarEsc });
    renderDeco();
  }
  $("#esc-sim").addEventListener("click", (e) => {
    const b = e.target.closest("[data-humor],[data-tudo]"); if (!b) return;
    if (b.dataset.tudo != null) { S.escTudo = !S.escTudo; b.setAttribute("aria-pressed", String(S.escTudo)); renderEscritorio(); return; }
    S.escSim = b.dataset.humor === "" ? null : Number(b.dataset.humor);
    $("#esc-sim").querySelectorAll("[data-humor]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    renderEscritorio();
  });
  if ("IntersectionObserver" in window) new IntersectionObserver((es) => es.forEach((x) => $("#esc-body").classList.toggle("of-pausa", !x.isIntersecting))).observe($("#esc-body"));
  document.addEventListener("visibilitychange", () => $("#esc-body").classList.toggle("of-pausa", document.hidden));

  /* ---------- Resumo do dia ---------- */
  const dataBRparse = (s) => { const m = String(s || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/); return m ? `${m[3]}-${m[2]}-${m[1]}` : null; };
  function renderDia() {
    const box = $("#dia-body"); if (!box) return;
    const m = S.painel.mercado || {};
    const RF = S.rf.length ? rfTotais() : null, rfV = RF ? RF.bruto : 0;
    const hoje = hojeISO();
    $("#dia-data").textContent = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo", weekday: "long", day: "numeric", month: "long" });
    if (!S.carteira.length && !rfV) { box.innerHTML = `<p class="skel">Adicione seus ativos e aplicações para ver aqui, todo dia, o que mudou na sua carteira, as notícias que importam e o que vem pela frente.</p>`; return; }
    const { rows, patr } = linhas(); const T = totais(rows);
    const util = ehUtil(hoje);
    const rfDia = RF && util ? RF.mes / 21 : 0;
    const total = patr + rfV, dia = (T.temPreco ? T.dia : 0) + rfDia;
    const pDia = total ? dia / (total - dia) * 100 : 0;
    // Contexto do mercado
    const ctx = [];
    const idx = (n, o) => { if (o && o.varDia != null) ctx.push(`${n} <b class="${cls(o.varDia)}">${esc(pct(o.varDia))}</b>`); };
    idx("Ibovespa", m.ibov); idx("IFIX", m.ifix); idx("S&amp;P 500", m.sp500);
    if (m.dolar) ctx.push(`Dólar <b class="${cls(-m.dolar.varDia)}">${esc(pct(m.dolar.varDia))}</b>`);
    const btc = S.cotMap["BTC-BRL"]; if (btc) ctx.push(`Bitcoin <b class="${cls(btc.var_dia)}">${esc(pct(btc.var_dia))}</b>`);
    const comp = [];
    if (T.temPreco) comp.push(`ativos ${esc(sinal(T.dia, brl))}`);
    if (rfDia) comp.push(`renda fixa +${esc(brl(rfDia))}`);
    // Quem mais mexeu hoje
    const mov = rows.filter((r) => r.vdBRL != null && r.valor).map((r) => ({ r, imp: r.valor - r.valor / (1 + r.vdBRL / 100) }));
    const altas = mov.filter((x) => x.r.vdBRL > 0).sort((a, b) => b.r.vdBRL - a.r.vdBRL).slice(0, 3);
    const baixas = mov.filter((x) => x.r.vdBRL < 0).sort((a, b) => a.r.vdBRL - b.r.vdBRL).slice(0, 3);
    const movHtml = (x) => `<button type="button" class="dia-mov" data-emp="${esc(x.r.t)}">${logoHtml(x.r.t)}<span class="tk">${esc(x.r.t)}</span><b class="${cls(x.r.vdBRL)}">${esc(pct(x.r.vdBRL))}</b><small class="${cls(x.imp)}">${esc(sinal(x.imp, brl))}</small></button>`;
    // O que pede atenção
    const at = [];
    const frase = (txt) => (txt || "").replace(/^(Os sinais estão favoráveis|Sem motivo forte para mexer|Alguns sinais pedem atenção|Vários sinais negativos ao mesmo tempo)\.\s*/, "").replace(/^Hoje [^.]*\.\s*/, "").split(". ")[0].replace(/\.$/, "").trim();
    rows.forEach((r) => {
      const sn = r.a && r.a.sinal;
      if (sn === "reduzir") at.push({ k: "neg", t: r.t, txt: "Sinal: considerar reduzir. " + frase(r.a.motivo) + "." });
      else if (sn === "atencao") at.push({ k: "warn", t: r.t, txt: (frase(r.a.motivo) || "Pede atenção") + "." });
      if (r.vdBRL != null && r.vdBRL <= -4) at.push({ k: "neg", t: r.t, txt: `Cai ${num(-r.vdBRL, 1)}% hoje.` });
      if (r.res != null && r.res <= -20) at.push({ k: "neg", t: r.t, txt: `Está ${num(-r.res, 0)}% abaixo do seu preço médio.` });
      const g = ((r.a && r.a.noticias) || []).find((n) => n.grave && n.data && Date.now() - Date.parse(n.data) < 3 * 864e5);
      if (g) at.push({ k: "neg", t: r.t, txt: "Notícia sensível: " + g.titulo });
      if (total && r.valor / total > 0.3 && r.classe !== "etf" && r.classe !== "etf_ext") at.push({ k: "warn", t: r.t, txt: `Pesa ${num(r.valor / total * 100, 0)}% do seu patrimônio.` });
    });
    if (RF) RF.itens.forEach(({ a, k }) => {
      rfAvisos(a, k).filter(([c]) => c === "neg" || c === "warn").forEach(([c, txt]) => at.push({ k: c, t: a.banco, rf: true, txt: a.nome + ": " + txt }));
      const m2 = RF_MAP[a.produto];
      if (m2 && m2.ciclo && !k.futuro) { const rest = m2.ciclo - (k.dias % m2.ciclo); if (rest <= 5) at.push({ k: "warn", t: a.banco, rf: true, txt: `${a.nome}: o ciclo de ${m2.ciclo} dias termina em ${rest} ${rest === 1 ? "dia" : "dias"}. Confira se as entradas de ${brl(m2.reqMes)} já foram feitas.` }); }
    });
    const ordem = { neg: 0, warn: 1, "": 2 };
    at.sort((a, b) => ordem[a.k] - ordem[b.k]);
    // Notícias dos seus ativos (últimas 48 h primeiro)
    const vistos = new Set(); let nots = [];
    S.carteira.forEach((p) => { ((S.analises[p.ticker] && S.analises[p.ticker].noticias) || []).forEach((n) => { const k = n.titulo.slice(0, 50); if (!vistos.has(k)) { vistos.add(k); nots.push({ ...n, ticker: p.ticker }); } }); });
    nots.sort((a, b) => (b.grave ? 1 : 0) - (a.grave ? 1 : 0) || (b.data > a.data ? 1 : -1));
    const recentes = nots.filter((n) => n.data && Date.now() - Date.parse(n.data) < 2 * 864e5);
    nots = (recentes.length >= 3 ? recentes : nots).slice(0, 6);
    // Agenda: proventos, data com, renda fixa e Copom
    const ag = [];
    S.carteira.forEach((p) => {
      const f = S.empresas[p.ticker] && S.empresas[p.ticker].fundamentos; if (!f) return;
      (f.proximosProventos || []).forEach((pv) => { const d = dataBRparse(pv.pagamento); if (d && d >= hoje) ag.push({ d, t: p.ticker, txt: `${pv.tipo || "Provento"} de ${p.ticker}: ${brl(pv.valor * p.qtd)} na sua posição` }); });
      (f.proventos || []).forEach((pv) => { const d = dataBRparse(pv.dataCom); if (d && d >= hoje && diasEntre(hoje, d) <= 30) ag.push({ d, t: p.ticker, txt: `Data com de ${p.ticker}: quem tiver a ${CLS[classeDe(p.ticker)] && classeDe(p.ticker) === "fii" ? "cota" : "ação"} no fim do dia recebe ${num(pv.valor, 4)} por unidade` }); });
    });
    if (RF) RF.itens.forEach(({ a, k }) => {
      if (a.vencimento && a.vencimento >= hoje && diasEntre(hoje, a.vencimento) <= 60) ag.push({ d: a.vencimento, rf: true, txt: `Vence ${a.nome} (${a.banco}): ${brl(k.bruto)}` });
      if (k.iofPct > 0) ag.push({ d: somaDias(a.data_aplicacao, 30), rf: true, txt: `IOF de ${a.nome} zera` });
      const m2 = RF_MAP[a.produto];
      if (m2 && m2.renova && !k.futuro) { const d = somaDias(a.data_aplicacao, Math.round(m2.renova * 30.44) * Math.max(1, Math.ceil((k.dias + 1) / (m2.renova * 30.44)))); if (diasEntre(hoje, d) <= 45) ag.push({ d, rf: true, txt: `${a.nome} é renovada (resgate e reaplicação, com IR)` }); }
    });
    const cop = ["2026-11-04", "2026-12-09"].find((d) => d >= hoje); // mesmas datas do servidor (fontes.ts)
    if (m.selic && m.selic.proximoCopom) ag.push({ d: cop || "9999", txt: `Copom decide a Selic (${m.selic.proximoCopom}); hoje em ${num(m.selic.taxa, 2)}%` });
    ag.sort((a, b) => a.d < b.d ? -1 : 1);
    const dTxt = (d) => d === "9999" ? "" : d === hoje ? "Hoje" : diasEntre(hoje, d) === 1 ? "Amanhã" : dataBR(d).slice(0, 5);
    // Sinais da carteira
    const cont = { reforcar: 0, manter: 0, atencao: 0, reduzir: 0 };
    rows.forEach((r) => { const sn = r.a && r.a.sinal; if (cont[sn] != null) cont[sn]++; });

    box.innerHTML = `
      <div class="dia-head">
        <div class="dia-main">
          <span class="label">${util ? "Hoje" : "Último pregão"}</span>
          <div class="dia-tit">Seu patrimônio ${dia >= 0 ? "sobe" : "cai"} <b class="${cls(dia)}">${esc(pct(pDia))}</b> <span class="${cls(dia)}">(${esc(sinal(dia, brl))})</span></div>
          <p class="hint" style="margin:4px 0 0">${comp.join(" · ")}${total ? ` · patrimônio de ${esc(brl(total))}` : ""}</p>
        </div>
        <div class="dia-ctx">${ctx.map((c) => `<span>${c}</span>`).join("")}</div>
      </div>
      ${rows.length ? `<div class="dia-sinais">${[["reforcar", "Considerar reforçar"], ["manter", "Manter"], ["atencao", "Atenção"], ["reduzir", "Considerar reduzir"]].filter(([k]) => cont[k]).map(([k, l]) => `<span class="pill s-${k}">${cont[k]} · ${l}</span>`).join("")}<a class="hint" href="#sec-carteira">ver carteira →</a></div>` : ""}
      <div class="dia-grid">
        <section class="dia-card">
          <h3>Quem mais mexeu</h3>
          ${altas.length || baixas.length ? `<div class="dia-movs">${altas.map(movHtml).join("")}${baixas.map(movHtml).join("")}</div>` : `<p class="skel">Sem variação registrada ainda hoje.</p>`}
          ${RF ? `<p class="hint" style="margin:10px 0 0">Renda fixa: ${esc(brl(rfV))}, rendendo cerca de ${esc(brl(RF.mes / 21))} por dia útil.</p>` : ""}
        </section>
        <section class="dia-card">
          <h3>Pede sua atenção</h3>
          ${at.length ? `<ul class="dia-at">${at.slice(0, 7).map((x) => `<li class="${x.k}">${x.rf ? `<a class="tag" href="#sec-rf">${esc(x.t)}</a>` : `<button type="button" class="tag" data-emp="${esc(x.t)}">${esc(x.t)}</button>`}<span>${esc(x.txt)}</span></li>`).join("")}</ul>${at.length > 7 ? `<p class="hint" style="margin:6px 0 0">e mais ${at.length - 7}.</p>` : ""}` : `<p class="ok-msg">Nada fora do normal na sua carteira hoje.</p>`}
        </section>
        <section class="dia-card dia-news">
          <h3>Notícias dos seus ativos</h3>
          <ul class="news">${newsItems(nots, "Sem notícias recentes dos seus ativos.")}</ul>
          <a class="hint" href="#sec-noticias">todas as notícias →</a>
        </section>
        <section class="dia-card">
          <h3>Vem por aí</h3>
          ${ag.length ? `<ul class="dia-ag">${ag.slice(0, 7).map((x) => `<li><span class="dt">${esc(dTxt(x.d))}</span><span>${esc(x.txt)}</span></li>`).join("")}</ul>` : `<p class="skel">Nenhum provento, vencimento ou evento nas próximas semanas.</p>`}
        </section>
      </div>`;
  }

  /* ---------- Fita de cotações ---------- */
  function renderTape() {
    const m = S.painel.mercado || {}; const it = [];
    const idx = (nome, o, d) => { if (o && o.pontos != null) it.push({ n: nome, v: num(o.pontos, d), vd: o.varDia }); };
    idx("Ibovespa", m.ibov, 0); idx("IFIX", m.ifix, 0); idx("S&P 500", m.sp500, 0); idx("Nasdaq", m.nasdaq, 0);
    if (m.dolar) it.push({ n: "Dólar", v: "R$ " + num(m.dolar.valor, 3), vd: m.dolar.varDia });
    const btc = S.cotMap["BTC-BRL"]; if (btc) it.push({ t: "BTC-BRL", n: "Bitcoin", v: brl(btc.preco), vd: btc.var_dia });
    const mine = new Set(S.carteira.map((p) => p.ticker));
    S.carteira.forEach((p) => { const q = cotacao(p.ticker); if (q && q.preco != null) it.push({ t: p.ticker, n: p.ticker, v: px(p.ticker, q.preco), vd: q.varDia, mine: true }); });   // com o preço ao vivo
    S.cot.filter((r) => r.classe === "acao" && !mine.has(r.ticker)).slice(0, 10).forEach((r) => it.push({ t: r.ticker, n: r.ticker, v: brl(r.preco), vd: r.var_dia }));
    if (!it.length) return;
    const h = it.map((x) => `<${x.t ? `button type="button" data-emp="${esc(x.t)}"` : "span"} class="tape-it${x.mine ? " mine" : ""}"><b>${esc(x.n)}</b><span class="num">${esc(x.v)}</span><span class="num ${cls(x.vd)}">${esc(pct(x.vd))}</span></${x.t ? "button" : "span"}>`).join("");
    const tr = $("#tape-track");
    tr.innerHTML = h + `<span aria-hidden="true" style="display:contents">${h.replace(/<button /g, '<button tabindex="-1" ')}</span>`;
    tr.style.animationDuration = Math.max(35, it.length * 4) + "s";
  }

  /* ---------- Termômetro e índices ---------- */
  const ZONES = [[0, 25, "var(--down)"], [25, 45, "var(--warn)"], [45, 60, "var(--muted)"], [60, 80, "var(--up)"], [80, 100, "var(--up)"]];
  function polar(r, deg) { const a = deg * Math.PI / 180; return [110 + r * Math.cos(a), 110 - r * Math.sin(a)]; }
  (function () { let h = ""; ZONES.forEach(([a, b, c], i) => { const [x1, y1] = polar(88, 180 - a * 1.8), [x2, y2] = polar(88, 180 - b * 1.8 + (b < 100 ? 1.2 : 0)); h += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} A88 88 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${c}" stroke-width="${i === 4 ? 16 : 14}" fill="none" opacity="${i === 2 ? .55 : i === 3 ? .7 : 1}"/>`; }); $("#arcs").innerHTML = h; })();
  function rotulo(n) { return n < 25 ? "Risco de queda" : n < 45 ? "Cautela" : n < 60 ? "Neutro" : n < 80 ? "Favorável" : "Muito favorável"; }
  function renderMercado() {
    const m = S.painel.mercado; if (!m) return;
    const t = m.termometro || {}; const nota = Math.max(0, Math.min(100, Number(t.nota) || 50));
    requestAnimationFrame(() => { $("#needle").style.transform = `rotate(${(nota - 50) * 1.8}deg)`; });
    $("#thermo-rot").textContent = t.rotulo || rotulo(nota); $("#thermo-rot").className = "rot " + (nota < 45 ? "negativo" : nota >= 60 ? "positivo" : "");
    contar($("#thermo-score"), nota, (v) => "nota " + Math.round(v) + " de 100");
    $("#thermo-resumo").textContent = t.resumo || "";
    $("#fatores").innerHTML = (t.fatores || []).map((f) => { const e = ["positivo", "negativo"].includes(f.efeito) ? f.efeito : "neutro"; return `<li><span class="mark ${e}">${e === "positivo" ? "+" : e === "negativo" ? "−" : "·"}</span><span>${esc(f.texto)}</span></li>`; }).join("");
    const fd = $("#fat-det"); if (fd && !fd.dataset.ini) { fd.dataset.ini = "1"; if (window.innerWidth >= 900) fd.open = true; }   // no computador o espaço já existe: mostra os motivos abertos
    const ts = m.atualizadoEm || m._ts;
    $("#thermo-when").textContent = ts ? "Atualizado " + ago(ts) : "";
    const k = [];
    const kpi = (lbl, val, vd, extra, inv) => k.push(`<div class="kpi"><span class="label">${lbl}</span><span class="lv"><b>${esc(val)}</b><small class="${vd != null ? cls(inv ? -vd : vd) : "neutro"}">${vd != null ? esc(pct(vd)) : esc(extra || "")}</small></span></div>`);
    if (m.ibov) kpi("Ibovespa", num(m.ibov.pontos, 0), m.ibov.varDia);
    if (m.ifix) kpi("IFIX · FIIs", num(m.ifix.pontos, 0), m.ifix.varDia);
    if (m.sp500) kpi("S&amp;P 500", num(m.sp500.pontos, 0), m.sp500.varDia);
    if (m.nasdaq) kpi("Nasdaq", num(m.nasdaq.pontos, 0), m.nasdaq.varDia);
    if (m.dolar) kpi("Dólar", "R$ " + num(m.dolar.valor, 3), m.dolar.varDia, null, true);
    const btc = S.cotMap["BTC-BRL"]; if (btc) kpi("Bitcoin · 24h", "R$ " + compacto(btc.preco).replace(" mil", " mil"), btc.var_dia);
    if (m.selic && m.selic.taxa != null) kpi("Selic", num(m.selic.taxa, 2) + "%", null, m.selic.proximoCopom ? "Copom " + m.selic.proximoCopom : "");
    const box = $("#kpis"); const anim = primeira("kpis");
    box.className = "kpis" + (anim ? " stagger" : ""); box.innerHTML = k.join("");
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
  function indHtml(ind, t) {
    if (!ind || ind.preco == null) return "";
    const it = [["1 mês", ind.ret1m], ["3 meses", ind.ret3m], ["12 meses", ind.ret12m]].filter((x) => x[1] != null);
    return `<div class="meta">${it.map(([l, v]) => `<span>${l}<b class="${cls(v)}">${pct(v)}</b></span>`).join("")}${ind.rsi != null ? `<span>IFR (14 dias)<b>${num(ind.rsi, 0)}</b></span>` : ""}${ind.mm50 ? `<span>Média 50 dias<b>${px(t, ind.mm50)}</b></span>` : ""}</div>`;
  }
  function renderFiltroClasse(rows) {
    const cont = {}; rows.forEach((r) => { cont[r.classe] = (cont[r.classe] || 0) + 1; });
    const cl = ORDEM_CLS.filter((c) => cont[c]);
    if (S.fcls && !cont[S.fcls]) S.fcls = null;
    const box = $("#cart-filtro"); box.hidden = cl.length < 2;
    box.innerHTML = `<button type="button" class="fchip" data-fcls="" aria-pressed="${!S.fcls}">Tudo <small>${rows.length}</small></button>` + cl.map((c) => `<button type="button" class="fchip" data-cl="${c}" data-fcls="${c}" aria-pressed="${S.fcls === c}">${CLS[c].nome} <small>${cont[c]}</small></button>`).join("");
  }
  $("#cart-filtro").addEventListener("click", (e) => { const b = e.target.closest("[data-fcls]"); if (!b) return; S.fcls = b.dataset.fcls || null; S.open = null; renderCarteira(); });
  function renderCarteira() {
    const box = $("#pos-list"), list = S.carteira;
    if (S.cot.length && $("#dl-tickers").children.length < S.cot.length) $("#dl-tickers").innerHTML = S.cot.map((r) => `<option value="${esc(r.ticker)}">${esc(nomeBom(r.nome))} · ${esc((CLS[r.classe] || CLS.acao).nome)}</option>`).join("");
    $("#pos-head").hidden = !list.length;
    if (!list.length) {
      box.innerHTML = `<div class="empty"><strong>Sua carteira está vazia</strong>Adicione abaixo o código de cada ativo e quanto você tem (ações, FIIs, ETFs, ativos dos EUA como VOO ou criptos como BTC), ou toque em "+ Adicionar" nas sugestões e na lista de ativos.</div>`;
      $("#alerts").hidden = true; $("#cart-when").textContent = ""; $("#cart-filtro").hidden = true;
      $("#addbox").open = true;
      return;
    }
    const { rows } = linhas();
    renderFiltroClasse(rows);
    const sinais = rows.filter((r) => r.a && r.a.atualizado_em).map((r) => r.a.atualizado_em).sort();
    $("#cart-when").textContent = list.length + (list.length === 1 ? " ativo" : " ativos") + (sinais.length ? " · sinais " + ago(sinais[sinais.length - 1]) : "");

    const al = [];
    rows.forEach((r) => {
      const s = r.a && r.a.sinal, frase = (txt) => (txt || "").replace(/^(Os sinais estão favoráveis|Sem motivo forte para mexer|Alguns sinais pedem atenção|Vários sinais negativos ao mesmo tempo)\.\s*/, "").replace(/^Hoje [^.]*\.\s*/, "").split(". ")[0].replace(/\.$/, "").trim();
      if (s === "reduzir") al.push({ t: r.t, k: "neg", txt: "Sinal: considerar reduzir" + (frase(r.a.motivo) ? ". " + frase(r.a.motivo) : "") + "." });
      else if (s === "atencao") al.push({ t: r.t, k: "", txt: (frase(r.a.motivo) || "Pede atenção") + "." });
      if (r.vd != null && Math.abs(r.vd) >= 3) al.push({ t: r.t, k: r.vd < 0 ? "neg" : "pos", txt: (r.vd < 0 ? "Cai " : "Sobe ") + pct(Math.abs(r.vd)).replace("+", "") + " hoje." });
      if (r.res != null && r.res <= -15) al.push({ t: r.t, k: "neg", txt: "Está " + num(-r.res, 1) + "% abaixo do seu preço médio." });
    });
    $("#alerts").hidden = !al.length;
    $("#alerts").innerHTML = al.slice(0, 6).map((a) => `<button type="button" class="alert ${a.k}" data-open="${esc(a.t)}"><span class="tk" style="font-size:15px">${esc(a.t)}</span><span>${esc(a.txt)}</span></button>`).join("");

    const vis = rows.filter((r) => !S.fcls || r.classe === S.fcls);
    const anim = primeira("pos");
    box.className = "pos-list" + (anim ? " stagger" : "");
    box.innerHTML = vis.map((r) => {
      const { p, t, a, preco, vd, valor, valorNat, res, nome, classe, moeda } = r; const sn = a && SINAL[a.sinal] ? a.sinal : "pendente"; const open = S.open === t;
      const temSent = !!sentDe(t);
      const nNews = a && Array.isArray(a.noticias) ? a.noticias.length : 0;
      const ind = a && a.indicadores; const fat = (ind && ind.fatores) || [];
      const prev = S.prevPx[t]; const tick = prev != null && preco != null && prev !== preco ? (preco > prev ? " tick-up" : " tick-down") : "";
      const un = CLS[classe] ? CLS[classe].un : "ações";
      const detail = !open ? "" : `<div class="pos-detail two">
        <div class="pd-col">
          ${a ? `<p class="motivo">${esc(a.motivo || "")}</p>` : `<p class="neutro">A análise de ${esc(t)} está sendo preparada e aparece aqui em instantes.</p>`}
          <div class="meta"><span>Quantidade<b>${fmtQtd(r.qtd)}</b></span><span>Preço médio<b>${p.pm ? money(p.pm, moeda) : "—"}</b></span><span>Hoje<b class="${vd != null ? cls(vd) : ""}">${vd != null ? pct(vd) : "—"}</b></span><span>Peso<b>${num(r.peso * 100, 1)}%</b></span>${moeda === "USD" ? `<span>Em dólar<b>${usd(valorNat)}</b></span>` : ""}<span>${classe === "fii" ? "Segmento" : "Setor"}<b style="font-family:var(--body);font-size:12.5px">${esc(classe === "fii" ? r.seg || "—" : classe === "etf" || classe === "etf_ext" ? "ETF" : r.setor)}</b></span></div>
          <div class="acts"><button type="button" class="btn sm primary" data-emp="${esc(t)}">Ver ${classe === "fii" || classe === "etf" || classe === "etf_ext" ? "fundo" : classe === "cripto" ? "cripto" : "empresa"}</button>${nNews ? `<button type="button" class="btn sm" data-news="${esc(t)}">Ver ${nNews} ${nNews === 1 ? "notícia" : "notícias"}</button>` : ""}<button type="button" class="btn sm" data-edit="${esc(t)}">Editar</button>
          ${S.confirmDel === t ? `<button type="button" class="btn sm danger" data-del-ok="${esc(t)}">Confirmar remoção</button><button type="button" class="btn ghost sm" data-del-no="1">Cancelar</button>` : `<button type="button" class="btn ghost sm" data-del="${esc(t)}">Remover</button>`}</div>
          ${a && a.atualizado_em ? `<span class="hint">Sinal recalculado ${esc(ago(a.atualizado_em))}${ind && ind.indice && ind.indice !== "Ibovespa" ? " · comparado com o " + esc(ind.indice) : ""}</span>` : ""}
        </div>
        <div class="pd-col">
          ${fat.length ? `<div><div class="h3" style="font-size:14px;margin-bottom:6px">Por que esse sinal</div><ul class="fat-list">${fat.map((f) => `<li><span class="mark ${f.peso > 0 ? "positivo" : f.peso < 0 ? "negativo" : "neutro"}">${f.peso > 0 ? "+" : f.peso < 0 ? "−" : "·"}</span><span>${esc(f.t)}</span></li>`).join("")}</ul></div>` : ""}
          ${indHtml(ind, t)}
          ${temSent ? sentHtml(sentDe(t), preco, moeda) : ""}
        </div>
      </div>`;
      return `<div class="pos${open ? " open" : ""}" data-cl="${classe}"><button type="button" class="pos-row" data-open="${esc(t)}" aria-expanded="${open}">
        <span class="pos-id">${logoHtml(t)}<span style="min-width:0"><span class="tk">${esc(t)}</span><span class="chev" aria-hidden="true"></span> ${clsChip(classe)}</span><span class="nm">${esc(nome)}</span></span>
        <span class="cell c-preco"><b class="${tick}">${money(preco, moeda)}</b><small class="${vd != null ? cls(vd) : ""}">${vd != null ? pct(vd) : ""}</small></span>
        <span class="cell"><b>${brl(valor)}</b><small class="${res != null ? cls(res) : ""}">${res != null ? pct(res) : fmtQtd(r.qtd) + " " + un}</small></span>
        <span class="c-sent">${anChip(t, preco)}</span>
        <span class="c-sig"><span class="pill s-${sn}">${sn === "pendente" ? "Aguardando" : SINAL[sn]}</span></span></button>${detail}</div>`;
    }).join("") || `<p class="skel" style="padding:12px">Nenhum ativo desta classe.</p>`;
    rows.forEach((r) => { if (r.preco != null) S.prevPx[r.t] = r.preco; });
  }
  function repChip(t) {
    const e = S.empresas[t]; const r = e && e.reputacao;
    if (!r || r.nota == null) return '<span class="hint">—</span>';
    const c = r.nota >= 70 ? "otim" : r.nota < 50 ? "pess" : "div";
    return `<span class="chip-s ${c}" title="Reputação: ${Math.round(r.nota)} de 100">${esc(r.rotulo || "")} · ${Math.round(r.nota)}</span>`;
  }

  /* ---------- O que os analistas acham ---------- */
  // Pega a versão mais recente entre a análise da carteira e o perfil do ativo
  function sentDe(t) {
    const a = S.analises[t], e = S.empresas[t];
    const xs = [a && a.sentimento, e && e.analistas].filter((x) => x && fresco(x.atualizadoEm, 3));
    xs.sort((x, y) => (y.atualizadoEm || "") > (x.atualizadoEm || "") ? 1 : -1);
    return xs[0] || null;
  }
  function sentClasse(n) { return n >= 60 ? "otim" : n < 45 ? "pess" : "div"; }
  function sentChip(s) { const n = Number(s && s.nota); if (s == null || s.nota == null || isNaN(n)) return ""; return `<span class="chip-s ${sentClasse(n)}" title="Consenso dos analistas: ${Math.round(n)} de 100">${esc(s.rotulo || "")}</span>`; }
  function potencialDe(s, preco) { const an = (s && s.analistas) || {}; const alvo = an.alvoMedio != null ? Number(an.alvoMedio) : null; return (alvo && preco) ? (alvo / preco - 1) * 100 : (an.potencial != null ? Number(an.potencial) : null); }
  function anChip(t, preco) {
    const s = sentDe(t); if (!s || s.nota == null) return '<span class="hint">—</span>';
    const pot = potencialDe(s, preco);
    return `<span class="chip-s ${sentClasse(s.nota)}" title="Consenso de ${esc((s.analistas || {}).total || "")} analistas${pot != null ? "; preço-alvo médio " + esc(pct(pot)) + " do preço atual" : ""}">${esc(s.rotulo)}${pot != null ? " · " + esc(pct(pot).replace(/,\d+%/, "%")) : ""}</span>`;
  }
  function tecHtml(tec) {
    if (!tec || !tec.rotulo) return "";
    const c = /Compra/.test(tec.rotulo) ? "up" : /Venda/.test(tec.rotulo) ? "down" : "";
    return `<span>Técnico de curto prazo <b class="${c}">${esc(tec.rotulo)}</b></span>`;
  }
  function sentHtml(s, preco, moeda) {
    const an = s.analistas || {}; const c = +an.compra || 0, n = +an.neutro || 0, v = +an.venda || 0, t = c + n + v;
    const alvo = an.alvoMedio != null ? Number(an.alvoMedio) : null; const pot = potencialDe(s, preco);
    const fontes = (s.fontes || []).map((f) => { const u = safeUrl(f.url); return u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(f.nome || "fonte")}</a>` : ""; }).filter(Boolean).join(" · ");
    return `<div class="sent">
      <div class="sent-h"><strong>O que os analistas acham</strong><span>${sentChip(s)}</span></div>
      ${t ? `<div class="sbar" role="img" aria-label="${c} compra, ${n} neutro, ${v} venda"><i class="c" style="width:${c / t * 100}%"></i><i class="n" style="width:${n / t * 100}%"></i><i class="v" style="width:${v / t * 100}%"></i></div>
      <div class="sleg"><span><b>${c}</b> compra</span><span><b>${n}</b> neutro</span><span><b>${v}</b> venda</span>${alvo ? `<span>Alvo médio <b>${money(alvo, moeda)}</b>${pot != null ? ` <span class="${cls(pot)}">(${pct(pot)})</span>` : ""}</span>` : ""}${an.alvoMin != null && an.alvoMax != null ? `<span>Alvos de <b>${money(an.alvoMin, moeda)}</b> a <b>${money(an.alvoMax, moeda)}</b></span>` : ""}</div>` : `<p class="hint">Nenhum analista cobre este ativo${s.tecnico ? "; abaixo, só a leitura técnica" : ""}.</p>`}
      ${s.tecnico ? `<div class="sleg">${tecHtml(s.tecnico)}</div>` : ""}
      <span class="src">${an.fonte ? esc(an.fonte) + (fontes ? " · " : "") : ""}${fontes}${s.atualizadoEm ? " · atualizado " + esc(ago(s.atualizadoEm)) : ""}</span>
    </div>`;
  }
  function renderAnalistas() {
    const box = $("#an-list"); if (!box) return;
    if (!S.carteira.length) { box.innerHTML = `<p class="skel">Cadastre seus ativos para ver o que os analistas acham de cada um.</p>`; $("#an-when").textContent = ""; return; }
    const { rows } = linhas(); let ultimo = null;
    const itens = rows.map((r) => {
      const s = sentDe(r.t); if (s && (!ultimo || s.atualizadoEm > ultimo)) ultimo = s.atualizadoEm;
      const an = (s && s.analistas) || null; const pot = s ? potencialDe(s, r.preco) : null;
      const c = an ? +an.compra || 0 : 0, n = an ? +an.neutro || 0 : 0, v = an ? +an.venda || 0 : 0, t = c + n + v;
      return { r, s, an, pot, c, n, v, t };
    });
    itens.sort((x, y) => ((y.s && y.s.nota != null) ? y.s.nota : -1) - ((x.s && x.s.nota != null) ? x.s.nota : -1) || (y.pot || 0) - (x.pot || 0));
    box.innerHTML = itens.map(({ r, s, an, pot, c, n, v, t }) => `<button type="button" class="an-row" data-emp="${esc(r.t)}">
        <span class="an-tk"><span><span class="tk" style="font-size:15px">${esc(r.t)}</span> ${clsChip(r.classe)}</span><span class="nm">${esc(r.nome)}</span></span>
        <span class="an-bar">${t ? `<span class="sbar" role="img" aria-label="${c} compra, ${n} neutro, ${v} venda"><i class="c" style="width:${c / t * 100}%"></i><i class="n" style="width:${n / t * 100}%"></i><i class="v" style="width:${v / t * 100}%"></i></span><small>${c} de ${t} recomendam compra${v ? ", " + v + " venda" : ""}</small>` : `<small class="hint">${s ? (r.classe === "fii" || r.classe === "etf" || r.classe === "etf_ext" ? "Fundos não têm cobertura de analistas" : "Sem cobertura de analistas") : r.classe === "fii" || r.classe === "etf" || r.classe === "etf_ext" ? "Fundos não têm cobertura de analistas" : r.classe === "cripto" ? "Criptomoedas não têm cobertura de analistas" : "Aguardando a próxima atualização"}</small>`}</span>
        <span class="an-alvo">${an && an.alvoMedio != null ? `<b>${money(an.alvoMedio, r.moeda)}</b><small class="${cls(pot)}">${pot != null ? pct(pot) + " até o alvo" : ""}</small>` : `<small class="hint">—</small>`}</span>
        <span class="an-tec">${s && s.tecnico ? `<small class="hint">Técnico</small><b class="${/Compra/.test(s.tecnico.rotulo) ? "up" : /Venda/.test(s.tecnico.rotulo) ? "down" : ""}">${esc(s.tecnico.rotulo)}</b>` : ""}</span>
        <span class="an-chip">${s ? sentChip(s) : ""}</span>
      </button>`).join("");
    $("#an-when").textContent = ultimo ? "Atualizado " + ago(ultimo) : "";
  }

  /* ---------- Notícias ---------- */
  function renderNews() {
    if (S.newsTk && !S.carteira.some((p) => p.ticker === S.newsTk)) S.newsTk = null;
    const own = []; S.carteira.forEach((p) => { if (S.newsTk && p.ticker !== S.newsTk) return; const a = S.analises[p.ticker]; if (a && Array.isArray(a.noticias)) a.noticias.slice(0, S.newsTk ? 10 : 3).forEach((n) => own.push({ ...n, ticker: p.ticker })); });
    own.sort((x, y) => (y.data || "") > (x.data || "") ? 1 : -1);
    const f = $("#news-filtro"); f.hidden = !S.newsTk;
    if (S.newsTk) f.innerHTML = `<span>Só notícias de <b>${esc(S.newsTk)}</b></span><button type="button" class="btn ghost sm" data-news-all="1">Ver todas</button>`;
    $("#news-own").innerHTML = newsItems(own.slice(0, 24), S.carteira.length ? "As notícias dos seus ativos aparecem aqui em instantes." : "As notícias aparecem aqui depois que você cadastrar seus ativos.");
    const h = S.painel.em_alta;
    $("#hot").innerHTML = h && (h.itens || []).length ? (h.itens || []).map((i) => {
      const q = S.cotMap[i.ticker]; const tom = ["positivo", "negativo"].includes(i.tom) ? i.tom : "neutro"; const u = safeUrl(i.url);
      return `<div class="hot"><button type="button" class="tk-btn" data-emp="${esc(i.ticker)}"><span class="tk" style="font-size:16px">${esc(i.ticker)}</span></button><span style="min-width:0"><span class="tom ${tom}"></span> ${u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="color:inherit">${esc(i.motivo)}</a>` : esc(i.motivo)}</span><span class="price ${q ? cls(q.var_dia) : ""}">${q ? pct(q.var_dia) : ""}</span></div>`;
    }).join("") + (h.fonte ? `<p class="when" style="margin:6px 0 0">${esc(h.fonte)} ${h._ts ? "Atualizado " + esc(ago(h._ts)) + "." : ""}</p>` : "") : `<p class="skel">Carregando…</p>`;
  }
  function abaNoticias(k) {
    document.querySelectorAll("#sec-noticias [data-nt]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.nt === k)));
    document.querySelectorAll("#sec-noticias [data-np]").forEach((p) => { p.hidden = p.dataset.np !== k; if (!p.hidden && !reduz) { p.style.animation = "none"; void p.offsetWidth; p.style.animation = "rise .35s var(--ease)"; } });
    $(".news-scroll").scrollTop = 0;
  }
  $("#sec-noticias").addEventListener("click", (e) => {
    const t = e.target.closest("[data-nt]"); if (t) { abaNoticias(t.dataset.nt); return; }
    if (e.target.closest("[data-news-all]")) { S.newsTk = null; renderNews(); }
  });
  function verNoticias(tk) {
    S.newsTk = tk; renderNews(); abaNoticias("own");
    const p = $("#sec-noticias"); const r = p.getBoundingClientRect();
    if (r.top > innerHeight - 80 || r.bottom < 120) p.scrollIntoView({ behavior: reduz ? "auto" : "smooth", block: "start" });
    p.classList.remove("flash"); void p.offsetWidth; p.classList.add("flash");
  }
  $("#alerts").addEventListener("click", (e) => { const b = e.target.closest("[data-open]"); if (!b) return; S.open = b.dataset.open; S.fcls = null; S.confirmDel = null; renderCarteira(); const row = document.querySelector(`.pos-row[data-open="${CSS.escape(b.dataset.open)}"]`); if (row) row.scrollIntoView({ behavior: reduz ? "auto" : "smooth", block: "center" }); });
  $("#pos-list").addEventListener("click", async (e) => {
    const b = e.target.closest("button"); if (!b || b.dataset.emp) return;
    if (b.dataset.open) { S.open = S.open === b.dataset.open ? null : b.dataset.open; S.confirmDel = null; renderCarteira(); return; }
    if (b.dataset.news) { verNoticias(b.dataset.news); return; }
    if (b.dataset.edit) { const p = S.carteira.find((x) => x.ticker === b.dataset.edit); if (p) { $("#addbox").open = true; $("#f-ticker").value = p.ticker; $("#f-qtd").value = p.qtd; $("#f-pm").value = p.pm || ""; ajustarForm(); $("#form-add").scrollIntoView({ behavior: reduz ? "auto" : "smooth", block: "center" }); setTimeout(() => $("#f-qtd").focus({ preventScroll: true }), 300); } return; }
    if (b.dataset.del) { S.confirmDel = b.dataset.del; renderCarteira(); return; }
    if (b.dataset.delNo) { S.confirmDel = null; renderCarteira(); return; }
    if (b.dataset.delOk) {
      const t = b.dataset.delOk; S.confirmDel = null; S.open = null;
      const { error } = await sb.from("carteira").delete().eq("user_id", S.user.id).eq("ticker", t);
      msg(error ? "Não foi possível remover agora." : t + " removido da carteira.", !error);
      await carregarCarteira(); renderAll();
    }
  });

  /* ---------- Formulário: adicionar ou editar ---------- */
  function msg(t, ok) { const o = $("#form-msg"); o.textContent = t; o.className = "form-msg " + (ok ? "up" : ok === false ? "down" : ""); }
  const normTicker = (s) => {
    let t = String(s || "").trim().toUpperCase(); if (/^[A-Z]{1,5}-[A-Z]$/.test(t)) t = t.replace("-", ".");
    // "BTC" vira "BTC-BRL" quando o código existe como cripto e não como ação
    if (/^[A-Z0-9]{2,6}$/.test(t) && !S.cotMap[t] && S.cotMap[t + "-BRL"]) t = t + "-BRL";
    return t;
  };
  function ajustarForm() {
    const t = normTicker($("#f-ticker").value);
    $("#f-submit").textContent = S.carteira.some((x) => x.ticker === t) ? "Salvar" : "Adicionar";
    const usdT = t && (S.cotMap[t] ? S.cotMap[t].moeda === "USD" : (ATIVO_RE.test(t) && !TICKER_RE.test(t) && t.length >= 1 && /^[A-Z.]+$/.test(t)));
    $("#f-pm-lbl").textContent = usdT ? "Preço médio (US$)" : "Preço médio (R$)";
    const c = S.cotMap[t];
    $("#f-qtd").placeholder = c && c.classe === "cripto" ? "0,0025" : c && ext(c.classe) ? "0,35" : "100";
  }
  $("#f-ticker").addEventListener("input", ajustarForm);
  $("#form-add").addEventListener("submit", async (e) => {
    e.preventDefault();
    let t = normTicker($("#f-ticker").value); const qRaw = String($("#f-qtd").value).replace(",", "."), pmRaw = String($("#f-pm").value).trim().replace(",", ".");
    const q = Number(qRaw), pm = pmRaw ? Number(pmRaw) : null;
    if (!ATIVO_RE.test(t)) return msg("Use o código do ativo, como PETR4, HGLG11, BOVA11, VOO ou BTC.", false);
    if (!S.cotMap[t]) {
      if (TICKER_RE.test(t)) return msg("Não encontrei " + t + " entre os ativos negociados na B3. Confira o código em Explorar ativos.", false);
      // Ação ou ETF dos EUA (ou cripto) fora da lista: busca no servidor
      msg("Procurando " + t + "…");
      $("#f-submit").disabled = true;
      const achou = await buscarFora(t);
      $("#f-submit").disabled = false;
      if (!achou) return msg("Não encontrei " + t + " na B3, nas bolsas dos EUA (NASDAQ, NYSE) nem entre as criptomoedas.", false);
      t = achou;
    }
    const c = S.cotMap[t], fora = ext(c.classe), frac = fracionado(c.classe);
    if (!(q > 0) || q > 1e9) return msg("Informe uma quantidade maior que zero.", false);
    if (!frac && !Number.isInteger(q)) return msg("Na B3 a quantidade é um número inteiro de " + CLS[c.classe].un + ".", false);
    if (frac && Math.round(q * 1e8) / 1e8 !== q) return msg("Use no máximo 8 casas decimais na quantidade.", false);
    if (pm != null && !(pm > 0 && pm <= 1e7)) return msg("O preço médio precisa ser um valor " + (fora ? "em dólares, como 512,30." : "em reais, como 38,50."), false);
    const existe = S.carteira.some((x) => x.ticker === t);
    $("#f-submit").disabled = true;
    const { error } = await sb.from("carteira").upsert({ ticker: t, qtd: q, pm: pm, user_id: S.user.id }, { onConflict: "user_id,ticker" });
    $("#f-submit").disabled = false;
    if (error) return msg(/Limite de 200/.test(error.message || "") ? "Sua carteira chegou ao limite de 200 ativos." : /check/i.test(error.message || "") ? "O banco ainda não aceita esse tipo de ativo. Tente de novo em alguns minutos." : "Não foi possível salvar agora. Tente de novo em instantes.", false);
    $("#form-add").reset(); ajustarForm();
    msg(existe ? t + " atualizado." : t + " adicionado. Calculando o sinal e buscando as notícias…", true);
    await carregarCarteira(); renderAll();
    if (!existe) {
      try { await radar({ acao: "analisar", ticker: t }); await Promise.all([carregarAnalises(), carregarEmpresas()]); renderAll(); msg(t + " adicionado, com sinal e notícias.", true); }
      catch (_) { msg(t + " adicionado. O sinal aparece na próxima atualização automática.", true); }
    }
  });
  // Busca no servidor um código fora da lista: ação/ETF dos EUA e, se não achar, cripto (BTC -> BTC-BRL)
  async function buscarFora(t) {
    const tentativas = CRIPTO_TK.test(t) ? [t] : /^[A-Z0-9]{2,6}$/.test(t) ? [t, t + "-BRL"] : [t];
    for (const x of tentativas) {
      try {
        const r = await radar({ acao: "buscar", ticker: x });
        if (r && r.ok && r.ativo) { const a = { ...r.ativo, preco: Number(r.ativo.preco), var_dia: Number(r.ativo.var_dia) }; S.cot.push(a); S.cotMap[a.ticker] = a; ajustarForm(); return a.ticker; }
      } catch (err) { if (err.message === "limite") { toast("Limite de buscas de hoje atingido."); return null; } }
    }
    return null;
  }
  function escolher(t) {
    fecharEmpresa();
    $("#f-ticker").value = t; ajustarForm();
    msg("Informe quanto de " + t + " você tem.");
    $("#addbox").open = true;
    const f = $("#form-add"); f.scrollIntoView({ behavior: reduz ? "auto" : "smooth", block: "center" }); f.classList.remove("flash"); void f.offsetWidth; f.classList.add("flash");
    setTimeout(() => $("#f-qtd").focus({ preventScroll: true }), 350);
  }
  document.addEventListener("click", (e) => {
    const p = e.target.closest("[data-pick]"); if (p) { escolher(p.dataset.pick); return; }
    const em = e.target.closest("[data-emp]"); if (em) { e.preventDefault(); abrirEmpresa(em.dataset.emp); return; }
    if (e.target.closest("[data-emp-close]")) fecharEmpresa();
  });

  /* ---------- Cartões dos ativos ---------- */
  function renderEmpresas() {
    const box = $("#emp-grid");
    if (!S.carteira.length) { box.innerHTML = `<p class="skel">Cadastre ativos na carteira para vê-los aqui. Você também pode buscar qualquer ativo acima.</p>`; return; }
    const anim = primeira("emp");
    box.className = "emp-grid" + (anim ? " stagger" : "");
    box.innerHTML = S.carteira.map((p) => {
      const t = p.ticker, e = S.empresas[t], q = S.cotMap[t], a = S.analises[t], c = classeDe(t);
      const nome = (e && e.nome) || (a && a.nome) || (q ? nomeBom(q.nome) : t);
      const desc = e && e.wiki && e.wiki.descricaoCurta && !/^(Fundo imobiliário|ETF)/.test(e.wiki.descricaoCurta) ? e.wiki.descricaoCurta : c === "fii" ? (q && q.setor) || "" : (e && e.setor) || (q && q.setor) || "";
      return `<button type="button" class="emp-card" data-cl="${c}" data-emp="${esc(t)}">${logoHtml(t)}<span style="min-width:0"><span class="tk" style="font-size:16px">${esc(t)}</span><span class="nm">${esc(nome)}</span></span>${repChip(t)}<span class="nm desc">${clsChip(c)} ${esc(desc)}</span></button>`;
    }).join("");
  }
  $("#emp-form").addEventListener("submit", async (e) => {
    e.preventDefault(); let t = normTicker($("#emp-q").value);
    if (!ATIVO_RE.test(t)) { toast("Digite um código, como WEGE3, HGLG11, VOO ou BTC."); return; }
    if (!S.cotMap[t]) {
      if (TICKER_RE.test(t)) { toast("Não encontrei " + t + " entre os ativos da B3."); return; }
      const achou = await buscarFora(t);
      if (!achou) { toast("Não encontrei " + t + " na B3, nos EUA nem entre as criptomoedas."); return; }
      t = achou;
    }
    $("#emp-q").value = ""; abrirEmpresa(t);
  });

  /* ---------- Gaveta com o perfil do ativo ---------- */
  let empVoltar = null, empPedido = 0;
  async function abrirEmpresa(t) {
    t = String(t || "").toUpperCase(); if (!ATIVO_RE.test(t)) return;
    const d = $("#emp-drawer");
    if (d.hidden) { empVoltar = document.activeElement; d.hidden = false; document.body.classList.add("no-scroll"); }
    if (S.emp !== t) delete CH.emp;
    S.emp = t;
    if (location.hash !== "#empresa-" + t) history.replaceState(null, "", "#empresa-" + t);
    cabecalhoEmpresa(t, S.empresas[t] || null);
    const id = ++empPedido;
    if (S.empresas[t]) renderEmpresa(t, S.empresas[t], true);
    else $("#emp-body").innerHTML = `<div class="panel carregando" aria-busy="true"><p class="skel">Buscando o perfil de ${esc(t)}: história, números, rendimentos e notícias. Pode levar alguns segundos na primeira vez.</p><i style="width:90%"></i><i style="width:75%"></i><i style="width:82%"></i><i style="width:60%"></i></div>`;
    try {
      const r = await radar({ acao: "empresa", ticker: t });
      if (id !== empPedido) return;
      if (r && r.ok && r.dados) { S.empresas[t] = r.dados; cabecalhoEmpresa(t, r.dados); renderEmpresa(t, r.dados, false); renderEmpresas(); if (S.open === t) renderCarteira(); }
    } catch (e) {
      if (id !== empPedido) return;
      if (!S.empresas[t]) $("#emp-body").innerHTML = `<div class="panel"><p>${e.message === "limite" ? "Você atingiu o limite de consultas por hoje. Tente amanhã." : e.message === "nao_encontrada" ? "Ainda não temos a cotação deste ativo. Tente de novo em alguns minutos." : "Não foi possível carregar o perfil agora. Tente de novo em instantes."}</p></div>`;
    }
    setTimeout(() => { const b = $("#emp-drawer [data-emp-close].btn"); if (b) b.focus({ preventScroll: true }); }, 50);
  }
  function atualizarGaveta() {
    const t = S.emp; if (!t || !S.empresas[t]) return;
    const body = $("#emp-body"); if (body.querySelector(".carregando") || body.querySelector(".g-tip:not([hidden])")) return;
    const y = body.scrollTop;
    cabecalhoEmpresa(t, S.empresas[t]); renderEmpresa(t, S.empresas[t], false);
    body.scrollTop = y;
  }
  function fecharEmpresa() {
    const d = $("#emp-drawer"); if (d.hidden) return;
    d.hidden = true; document.body.classList.remove("no-scroll"); S.emp = null; empPedido++;
    if (location.hash.startsWith("#empresa-")) history.replaceState(null, "", location.pathname + location.search);
    if (empVoltar && empVoltar.focus) empVoltar.focus({ preventScroll: true });
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#emp-drawer").hidden) fecharEmpresa(); });
  function abrirPeloEndereco() { const m = location.hash.match(/^#empresa-([A-Z][A-Z0-9.\-]{0,9})$/); if (m) abrirEmpresa(m[1]); }
  window.addEventListener("hashchange", () => { if (S.user) abrirPeloEndereco(); });

  function cabecalhoEmpresa(t, e) {
    const q = S.cotMap[t]; const c = (e && e.classe) || classeDe(t);
    const nome = (e && e.nome) || (q ? nomeBom(q.nome) : t);
    $("#emp-head").firstElementChild.outerHTML = logoHtml(t, true);
    $("#emp-titulo").textContent = t + " · " + nome;
    const f = e && e.fundamentos;
    const cx = (q && q.extra) || (e && e.cripto) || {};
    const sub = c === "cripto" ? ["Criptomoeda", cx.rank ? cx.rank + "ª em valor de mercado" : null, "variação em 24 h"] : c === "fii" ? ["Fundo imobiliário", f && f.segmento || (q && q.setor)] : c === "etf" ? ["ETF na B3"] : c === "etf_ext" ? ["ETF", (e && e.bolsa) || (q && q.bolsa)] : [f && f.setor, (f && f.segmento) || (q && q.setor)];
    $("#emp-sub").innerHTML = clsChip(c) + " " + esc(sub.filter(Boolean).join(" · "));
    $("#emp-px").innerHTML = q ? `<b>${money(q.preco, q.moeda)}</b><small class="${cls(q.var_dia)}">${pct(q.var_dia)} ${q.classe === "cripto" ? "em 24 h" : "hoje"}</small>${q.moeda === "USD" && fx() ? `<small class="hint" style="display:block">≈ ${brl(q.preco * fx())}</small>` : ""}` : "";
  }

  // Explicações curtas e faixas de bom/ruim para cada indicador
  const IND = [
    ["pl", "P/L", (v) => num(v, 1), "Anos de lucro para pagar o preço da ação. Mais baixo = mais barata.", (v) => v < 0 ? "ruim" : v < 10 ? "bom" : v > 30 ? "ruim" : ""],
    ["pvp", "P/VP", (v) => num(v, 2), "Preço em relação ao patrimônio. Abaixo de 1, a bolsa paga menos que o valor contábil.", (v) => v < 1.5 ? "bom" : v > 5 ? "ruim" : ""],
    ["dy", "Dividend yield", (v) => num(v, 2) + "%", "Quanto a empresa pagou em proventos nos últimos 12 meses, em relação ao preço.", (v) => v >= 6 ? "bom" : v < 2 ? "ruim" : ""],
    ["roe", "ROE", (v) => num(v, 1) + "%", "Lucro sobre o patrimônio dos acionistas. Mostra o quanto a empresa é rentável.", (v) => v >= 15 ? "bom" : v < 5 ? "ruim" : ""],
    ["margemLiquida", "Margem líquida", (v) => num(v, 1) + "%", "Quanto sobra de lucro de cada 100 vendidos.", (v) => v < 0 ? "ruim" : v >= 15 ? "bom" : ""],
    ["divLiqEbitda", "Dívida líq./EBITDA", (v) => num(v, 2) + "x", "Anos de geração de caixa para pagar a dívida. Abaixo de 2 é confortável.", (v) => v <= 2 ? "bom" : v > 3.5 ? "ruim" : ""],
    ["cagrLucro5a", "Crescimento do lucro", (v) => num(v, 1) + "% ao ano", "Média de crescimento do lucro nos últimos 5 anos.", (v) => v > 10 ? "bom" : v < 0 ? "ruim" : ""],
    ["cagrReceita5a", "Crescimento da receita", (v) => num(v, 1) + "% ao ano", "Média de crescimento das vendas nos últimos 5 anos.", (v) => v > 10 ? "bom" : v < 0 ? "ruim" : ""],
    ["liqCorrente", "Liquidez corrente", (v) => num(v, 2), "Bens de curto prazo para cada 1 de dívidas de curto prazo.", (v) => v >= 1.5 ? "bom" : v < 1 ? "ruim" : ""],
    ["evEbitda", "EV/EBITDA", (v) => num(v, 1), "Valor da empresa (com dívida) sobre a geração de caixa. Mais baixo = mais barata.", (v) => v > 0 && v < 6 ? "bom" : v > 15 ? "ruim" : ""],
  ];
  const IND_FII = [
    ["dy", "Dividend yield", (v) => num(v, 2) + "%", "Rendimentos pagos nos últimos 12 meses sobre o preço da cota. Para FIIs, isento de IR.", (v) => v >= 8 ? "bom" : v < 6 ? "ruim" : ""],
    ["pvp", "P/VP", (v) => num(v, 2), "Preço da cota sobre o valor patrimonial. Abaixo de 1 = cota com desconto.", (v) => v <= 1.02 && v >= 0.8 ? "bom" : v > 1.2 ? "ruim" : ""],
    ["ultimoRendimento", "Último rendimento", (v) => brl(v), "Valor pago por cota no último mês.", () => ""],
    ["rendMedio24m", "Rendimento médio (24m)", (v) => brl(v), "Média mensal paga por cota nos últimos 2 anos.", () => ""],
    ["vpa", "Valor patrimonial por cota", (v) => brl(v), "Quanto vale cada cota pelos imóveis e títulos do fundo.", () => ""],
    ["caixa", "Em caixa", (v) => num(v, 1) + "%", "Parte do patrimônio parada em caixa, esperando ser investida.", (v) => v > 20 ? "ruim" : ""],
  ];
  function fato(rot, val, link) {
    if (val == null || val === "") return "";
    const u = link ? safeUrl(val) : null;
    return `<div><span>${esc(rot)}</span><b>${u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a>` : esc(val)}</b></div>`;
  }
  function renderEmpresa(t, e, doCache) {
    if (S.emp !== t) return;
    const q = S.cotMap[t], a = S.analises[t], w = e.wiki || {}, f = e.fundamentos || {}, i = f.ind || {}, fa = w.fatos || {}, ds = e.desempenho || {};
    const classe = e.classe || classeDe(t), moeda = e.moeda || moedaDe(t), fora = ext(classe);
    const fundo = classe === "fii" || classe === "etf" || classe === "etf_ext";
    const cripto = classe === "cripto", cx = e.cripto || (q && q.extra) || {};
    const M = (v) => money(v, moeda);
    const tem = S.carteira.some((p) => p.ticker === t);
    const fotos = [], vistas = new Set();
    const addFoto = (u, legenda) => { u = safeImg(u); const k = u && u.split("?")[0]; if (u && !vistas.has(k) && !/\.svg/i.test(k)) { vistas.add(k); fotos.push({ url: u, legenda: legenda || "" }); } };
    addFoto(w.imagem, ""); (w.fotos || []).forEach((x) => addFoto(x.url, x.legenda));
    const rep = e.reputacao || {};
    const repCor = rep.nota >= 70 ? "var(--up)" : rep.nota >= 50 ? "var(--warn)" : "var(--down)";
    const financeira = /Bancos|Seguros/.test(e.setorMacro || "") || /Financeiro|Seguro|Banco|Finance/i.test(f.setor || "");
    const lista = classe === "fii" ? IND_FII : fundo || cripto ? [] : IND;
    const inds = lista.filter(([k]) => i[k] != null && !(financeira && ["divLiqEbitda", "liqCorrente", "evEbitda"].includes(k))).map(([k, rot, fmt, exp, aval]) => `<div class="ind ${aval(i[k])}"><span>${esc(rot)}</span><b>${esc(fmt(i[k]))}</b><small>${esc(exp)}</small></div>`).join("");
    const prov = (f.proventos || []).slice(0, 8);
    const proximos = f.proximosProventos || [];
    const nomeBusca = encodeURIComponent((e.nome || t).replace(/\s*\(.*\)$/, ""));
    const posicao = S.carteira.find((p) => p.ticker === t);
    const sn = a && SINAL[a.sinal] ? a.sinal : null;
    const siPath = { acao: "acoes", fii: "fundos-imobiliarios", etf: "etfs", bdr: "bdrs" }[classe];
    const tvUrl = cripto ? `https://br.tradingview.com/symbols/${t.replace("-", "")}/` : `https://br.tradingview.com/symbols/${fora ? (e.bolsa || (q && q.bolsa) || "NASDAQ") : "BMFBOVESPA"}-${t.replace(".", "_")}/`;
    const un = CLS[classe] ? CLS[classe].un : "ações";

    let fatosHtml;
    if (cripto) fatosHtml = fato("Símbolo", t.replace("-BRL", "")) + fato("Posição no ranking", cx.rank ? cx.rank + "ª maior do mundo" : null) + fato("Valor de mercado", cx.valorMercado || (q && q.valor_mercado_mi) ? "R$ " + compacto(cx.valorMercado || q.valor_mercado_mi * 1e6) : null) + fato("Volume em 24 h", q && q.volume ? "R$ " + compacto(q.volume) : null) + fato("Máxima histórica", cx.ath ? M(cx.ath) + (cx.athData ? " em " + cx.athData.split("-").reverse().join("/") : "") : null) + fato("Distância da máxima", cx.athPct != null ? num(cx.athPct, 1) + "%" : null) + fato("Em circulação", cx.circulante ? compacto(cx.circulante) + " unidades" : null) + fato("Oferta máxima", cx.maxima ? compacto(cx.maxima) + " unidades" : cx.circulante ? "Sem limite definido" : null) + fato("Negociação", "24 horas, todos os dias");
    else if (classe === "fii") fatosHtml = fato("CNPJ", f.cnpj) + fato("Início do fundo", f.inicio) + fato("Administrador", f.administrador) + fato("Segmento", f.segmento) + fato("Cotistas", i.cotistas != null ? num(i.cotistas, 0) : null) + fato("Patrimônio", i.patrimonio != null ? "R$ " + compacto(i.patrimonio) : null) + fato("Participação no IFIX", i.partIfix != null ? num(i.partIfix, 2) + "%" : null) + fato("Negociação diária", f.liquidezDiaria != null ? "R$ " + compacto(f.liquidezDiaria) : null);
    else if (fundo) fatosHtml = fato("Onde é negociado", fora ? (e.bolsa === "AMEX" ? "NYSE Arca (EUA)" : (e.bolsa || "EUA")) : "B3") + fato("Moeda", moeda === "USD" ? "Dólar (US$)" : "Real (R$)") + fato("Taxa de administração", f.taxaAdm != null ? num(f.taxaAdm, 2) + "% ao ano" : null) + fato("Patrimônio", f.patrimonio != null ? (moeda === "USD" ? "US$ " : "R$ ") + compacto(f.patrimonio) : (q && q.extra && q.extra.patrimonio ? "US$ " + compacto(q.extra.patrimonio) : null)) + fato("Dividend yield", i.dy != null ? num(i.dy, 2) + "%" : null);
    else fatosHtml = fato("Razão social", f.razaoSocial) + fato("CNPJ", f.cnpj) + fato("Fundação", fa.fundacao) + fato("Sede", fa.sede) + fato("Presidente", fa.presidente) + fato("Funcionários", fa.funcionarios != null ? num(fa.funcionarios, 0) : null) + fato("Fundadores", fa.fundadores) + fato("Controlador", fa.controlador) + fato("Setor", f.setor) + fato("Segmento", f.segmento) + fato("Produtos e marcas", fa.produtos) + fato("Onde é negociada", fora ? e.bolsa || (q && q.bolsa) : classe === "bdr" ? "B3, como BDR (recibo de ação de fora)" : null) + fato("Valor de mercado", i.valorMercado != null ? (moeda === "USD" ? "US$ " : "R$ ") + compacto(i.valorMercado) : null) + fato("Negociação diária", f.liquidezDiaria != null ? "R$ " + compacto(f.liquidezDiaria) : null) + fato("Site", fa.site, true);

    const dividendos = cripto ? "" : fora ? `<section class="panel" aria-labelledby="emp-div">
        <h3 id="emp-div">Dividendos</h3>
        <div class="rets" style="margin-top:0"><div><span>Dividend yield</span><b>${i.dy != null ? esc(num(i.dy, 2)) + "%" : "—"}</b></div>${posicao && i.dy && q ? `<div><span>Na sua posição (12m)</span><b>≈ ${esc(usd(q.preco * posicao.qtd * i.dy / 100))}</b></div>` : ""}</div>
        <p class="hint" style="margin:10px 0 0">Ativos dos EUA pagam dividendos em dólar, geralmente a cada 3 meses, com 30% de imposto retido na fonte nos EUA.${classe === "etf_ext" ? " Alguns ETFs reinvestem os dividendos automaticamente." : ""}</p></section>`
      : `<section class="panel" aria-labelledby="emp-div">
        <h3 id="emp-div">${classe === "fii" ? "Rendimentos" : "Dividendos"}</h3>
        <div class="rets" style="margin-top:0">
          <div><span>Dividend yield</span><b>${i.dy != null ? esc(num(i.dy, 2)) + "%" : "—"}</b></div>
          <div><span>Por ${classe === "fii" || classe === "etf" ? "cota" : "ação"} em 12 meses</span><b>${f.proventos12m != null ? esc(brl(f.proventos12m)) : "—"}</b></div>
          ${posicao && f.proventos12m ? `<div><span>Na sua posição (12m)</span><b>${esc(brl(f.proventos12m * posicao.qtd))}</b></div>` : ""}
          ${proximos[0] ? `<div><span>Próximo pagamento</span><b>${esc(proximos[0].pagamento)}</b></div>` : ""}
        </div>
        ${prov.length ? `<table class="prov"><thead><tr><th>Tipo</th><th>Data com</th><th>Pagamento</th><th class="r">Valor por ${classe === "fii" ? "cota" : "ação"}</th></tr></thead><tbody>${prov.map((p) => `<tr><td>${esc(p.tipo)}</td><td>${esc(p.dataCom)}</td><td>${esc(p.pagamento || "—")}</td><td class="r">${esc(num(p.valor, 4))}</td></tr>`).join("")}</tbody></table><p class="hint" style="margin:8px 0 0">"Data com" é o último dia para ter o ativo e receber aquele provento.${classe === "fii" ? " Rendimentos de FIIs são isentos de IR para pessoa física." : ""}</p>` : `<p class="skel">${classe === "etf" ? "A maioria dos ETFs da B3 reinveste os dividendos em vez de pagá-los." : "Sem proventos recentes registrados."}</p>`}
      </section>`;

    const fontes = cripto ? "CoinGecko (preço, ranking e máxima histórica), Yahoo Finance e Banco Central via dólar (cotações históricas), Wikipedia (texto), Google Notícias"
      : classe === "fii" ? "StatusInvest (indicadores e rendimentos), Yahoo Finance (cotações históricas), Google Notícias"
      : fundo ? "TradingView (taxa, patrimônio e técnico), Yahoo Finance (cotações históricas), Google Notícias"
      : `Wikipedia e Wikidata (texto, fotos e fatos), ${classe === "acao" ? "StatusInvest" : "TradingView"} (indicadores${classe === "acao" ? " e proventos" : ""}), Yahoo Finance (cotações históricas), TradingView (analistas), Google Notícias`;

    $("#emp-body").innerHTML = `
      <div class="emp-acts">${tem ? `<span class="have">${IC("check")} Na sua carteira${posicao ? " · " + fmtQtd(posicao.qtd) + " " + un : ""}</span>` : `<button type="button" class="btn primary sm" data-pick="${esc(t)}">+ Adicionar à carteira</button>`}
        ${sn ? `<span class="pill s-${sn}">${SINAL[sn]}</span>` : ""}${rep.nota != null ? `<span class="chip-s ${rep.nota >= 70 ? "otim" : rep.nota < 50 ? "pess" : "div"}">${fundo || cripto ? "Qualidade" : "Reputação"} ${esc(rep.rotulo || "")} · ${Math.round(rep.nota)}/100</span>` : ""}
        ${doCache ? `<span class="hint">Atualizando…</span>` : ""}</div>

      ${fotos.length ? `<div class="gal">${fotos.map((x) => `<figure><img src="${esc(x.url)}" alt="${esc(x.legenda || "Foto de " + (e.nome || t))}" loading="lazy" referrerpolicy="no-referrer">${x.legenda ? `<figcaption>${esc(x.legenda)}</figcaption>` : ""}</figure>`).join("")}</div>` : ""}

      <section class="panel sobre" aria-labelledby="emp-sobre">
        <h3 id="emp-sobre">O que você está comprando</h3>
        ${(w.paragrafos || []).length ? w.paragrafos.map((p) => `<p>${esc(p)}</p>`).join("") : `<p class="skel">Não encontramos uma descrição pública deste ativo.</p>`}
        <div class="fatos">${fatosHtml}</div>
      </section>

      <section class="panel" aria-labelledby="emp-desemp">
        <h3 id="emp-desemp">Desempenho</h3>
        ${(() => { const iv = comVivo(S.intra && S.intra[t] && S.intra[t].length > 1 ? S.intra[t] : null, VIVO.tk[t]); const q = cotacao(t); return chartBox("emp", e.serie, { fmt: M, intra: iv && iv.length > 1 ? iv : null, base: q && q.varDia != null ? q.preco / (1 + q.varDia / 100) : null, vivo: !!VIVO.tk[t] }); })()}
        <div class="rets">${[["1 mês", ds.ret1m], ["3 meses", ds.ret3m], ["6 meses", ds.ret6m], ["12 meses", ds.ret12m]].map(([l, v]) => `<div><span>${l}</span><b class="${cls(v)}">${pct(v)}</b></div>`).join("")}</div>
        <p class="hint" style="margin:10px 0 0">Passe o mouse ou o dedo sobre o gráfico para ver a cotação de cada dia${fora ? " (em dólar)" : ""}. ${ds.min52 != null ? `No último ano variou de ${esc(M(ds.min52))} a ${esc(M(ds.max52))}. ` : ""}${ds.volAnual != null ? `Oscilação anual de ${esc(num(ds.volAnual, 0))}% (${ds.volAnual > 45 ? "bem arriscado" : ds.volAnual > 28 ? "risco médio" : "mais estável"}).` : ""}</p>
      </section>

      ${a ? `<section class="panel" aria-labelledby="emp-sinal"><h3 id="emp-sinal">Sinal do Radar ${sn ? `<span class="pill s-${sn}" style="vertical-align:middle;margin-left:6px">${SINAL[sn]}</span>` : ""}</h3>
        <p style="margin:0 0 8px">${esc(a.motivo || "")}</p>${a.indicadores && a.indicadores.fatores ? `<ul class="fat-list">${a.indicadores.fatores.map((x) => `<li><span class="mark ${x.peso > 0 ? "positivo" : x.peso < 0 ? "negativo" : "neutro"}">${x.peso > 0 ? "+" : x.peso < 0 ? "−" : "·"}</span><span>${esc(x.t)}</span></li>`).join("")}</ul>` : ""}
        <p class="hint" style="margin:8px 0 0">Recalculado ${esc(ago(a.atualizado_em))} com o movimento de hoje, tendência de preço, ${fundo ? "" : "analistas, "}indicadores e notícias. Regras fixas, não é recomendação individual.</p></section>` : ""}

      ${(() => { const s = sentDe(t); return s ? `<section class="panel" aria-label="O que os analistas acham" style="padding:4px">${sentHtml(s, q ? Number(q.preco) : null, moeda)}</section>` : ""; })()}

      ${inds ? `<section class="panel" aria-labelledby="emp-ind"><h3 id="emp-ind">${classe === "fii" ? "Números do fundo" : "Saúde financeira e preço"}</h3><div class="ind-grid">${inds}</div><p class="hint" style="margin:10px 0 0">Verde costuma ser bom sinal e vermelho pede atenção, mas cada ${classe === "fii" ? "segmento" : "setor"} tem sua faixa normal.${financeira && classe !== "fii" ? " Para bancos e seguradoras, dívida e liquidez não se medem do mesmo jeito, por isso esses indicadores ficam de fora." : ""}</p></section>` : ""}

      ${dividendos}

      <section class="panel" aria-labelledby="emp-rep">
        <h3 id="emp-rep">${fundo ? "Qualidade do fundo" : cripto ? "Avaliação da moeda" : "Reputação"}</h3>
        ${rep.nota != null ? `<div class="rep-top"><div class="dscore${reduz ? "" : " anim"}" style="--p:${Math.round(rep.nota)};--sc:${repCor};width:92px;height:92px"><span><b style="font-size:24px">${Math.round(rep.nota)}</b><small>de 100</small></span></div>
          <div><div class="h3" style="color:${repCor};margin-bottom:4px">${esc(rep.rotulo || "")}</div><p class="hint" style="margin:0;font-size:13px">${cripto ? "Nota do Radar a partir do tamanho, oscilação, distância da máxima histórica e noticiário." : fundo ? (classe === "fii" ? "Nota do Radar a partir de tamanho, liquidez, preço sobre o patrimônio, rendimentos e noticiário." : "Nota do Radar a partir de tamanho, custo (taxa de administração), oscilação e noticiário.") : "Nota do Radar a partir de governança, solidez, resultados, dividendos e do tom do noticiário. Para ver reclamações de clientes, consulte o Reclame Aqui."}</p></div></div>
          <ul class="rep-it">${(rep.itens || []).map((x) => `<li><span class="mark ${esc(x.efeito)}">${x.efeito === "positivo" ? "+" : x.efeito === "negativo" ? "−" : "·"}</span><span class="ar">${esc(x.area)}</span><span>${esc(x.texto)}</span></li>`).join("")}</ul>` : `<p class="skel">Sem dados suficientes para a nota.</p>`}
        <div class="emp-acts" style="margin-top:12px">
          ${cripto && cx.id && /^[a-z0-9-]+$/.test(cx.id) ? `<a class="btn sm" href="https://www.coingecko.com/pt/moedas/${esc(cx.id)}" target="_blank" rel="noopener noreferrer">CoinGecko</a>` : ""}
          ${!fundo && !cripto ? `<a class="btn sm" href="https://www.reclameaqui.com.br/busca/?q=${nomeBusca}" target="_blank" rel="noopener noreferrer">Ver no Reclame Aqui</a>` : ""}
          ${fa.site && safeUrl(fa.site) ? `<a class="btn sm" href="${esc(safeUrl(fa.site))}" target="_blank" rel="noopener noreferrer">Site da empresa</a>` : ""}
          ${siPath ? `<a class="btn sm" href="https://statusinvest.com.br/${siPath}/${encodeURIComponent(t.toLowerCase())}" target="_blank" rel="noopener noreferrer">StatusInvest</a>` : ""}
          <a class="btn sm" href="${esc(tvUrl)}" target="_blank" rel="noopener noreferrer">TradingView</a>
          ${safeUrl(w.wikipedia) ? `<a class="btn sm" href="${esc(safeUrl(w.wikipedia))}" target="_blank" rel="noopener noreferrer">Wikipedia</a>` : ""}
        </div>
      </section>

      <section class="panel" aria-labelledby="emp-news"><h3 id="emp-news">Notícias do último mês</h3><ul class="news">${newsItems(e.noticias || [], "Sem notícias recentes.")}</ul></section>

      <p class="fontes-emp">Fontes: ${fontes}. Gráfico e analistas atualizados ${esc(ago(e.dinamicoEm || e.atualizadoEm))}; texto e números ${esc(ago(e.atualizadoEm))}.${(e.fontesComErro || []).length ? " Não foi possível consultar agora: " + esc(e.fontesComErro.join(", ")) + "." : ""} Nada aqui é recomendação de investimento.</p>`;
    ligarGrafico("emp");
  }

  /* ---------- Diversificação ---------- */
  const SETORES = ["Bancos e Financeiro", "Seguros", "Energia Elétrica", "Saneamento e Gás", "Petróleo e Gás", "Mineração e Siderurgia", "Papel, Química e Materiais", "Agro e Alimentos", "Saúde", "Indústria", "Tecnologia e Telecom", "Varejo e Consumo", "Imóveis e Construção", "Transporte e Logística", "Educação e Serviços"];
  const DOLAR = new Set(["Petróleo e Gás", "Mineração e Siderurgia", "Papel, Química e Materiais", "Agro e Alimentos"]);
  const DOLAR_TK = new Set(["EMBJ3", "WEGE3", "SUZB3", "KLBN11", "GGBR4", "VALE3", "PETR4", "PETR3", "PRIO3", "JBSS3", "MBRF3"]);
  const DEFENSIVOS = new Set(["Energia Elétrica", "Saneamento e Gás", "Seguros", "Bancos e Financeiro"]);
  const PRIORIDADE = ["Petróleo e Gás", "Mineração e Siderurgia", "Saúde", "Indústria", "Bancos e Financeiro", "Energia Elétrica", "Saneamento e Gás", "Agro e Alimentos", "Imóveis e Construção", "Transporte e Logística", "Tecnologia e Telecom", "Varejo e Consumo", "Seguros", "Papel, Química e Materiais", "Educação e Serviços"];
  const ETF_FORA = /S&P|SP500|NASDAQ|IVVB|EUA|USA|GLOBAL|WORLD|EXTERIOR|ACWI|EUROPA|CHINA|NASD|SPXI|WRLD|BITCOIN|BTC|ETH|CRIPTO|GOLD|OURO|HASH|QBTC|XINA|EURP|ACWI|USTK/i;
  function candidatos(setor, mine) {
    const cons = (S.painel.consenso && S.painel.consenso.itens) || []; const sug = S.painel.sugestoes_setor || {};
    const out = []; const seen = new Set();
    const add = (t, tese, casas) => { if (!t || seen.has(t) || mine.has(t)) return; seen.add(t); out.push({ t, tese, casas }); };
    cons.filter((c) => c.setor === setor).sort((a, b) => (b.casas || 0) - (a.casas || 0)).forEach((c) => add(c.ticker, c.tese, c.casas));
    ((sug.setores || {})[setor] || []).forEach((t) => { const c = cons.find((x) => x.ticker === t); add(t, (c && c.tese) || (sug.teses || {})[t] || "", c && c.casas); });
    if (out.length < 2) S.cot.filter((r) => r.classe === "acao" && r.setor_macro === setor).slice(0, 4).forEach((r) => add(r.ticker, "Uma das ações mais negociadas do setor hoje. Veja o perfil da empresa antes de investir.", null));
    return out.slice(0, 3);
  }
  function donut(partes, centro) {
    const R = 54, C = 2 * Math.PI * R; let acc = 0; const anim = primeira("donut");
    const segs = partes.map((p) => { const len = Math.max(0, p.w * C - (partes.length > 1 ? 2 : 0)); const s = `<circle class="seg" cx="70" cy="70" r="${R}" stroke="var(--c-${p.c})" stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}"/>`; acc += p.w * C; return s; }).join("");
    return `<div class="donut-wrap"><svg class="donut${anim ? " anim" : ""}" viewBox="0 0 140 140" role="img" aria-label="Divisão por classe"><circle cx="70" cy="70" r="${R}" fill="none" stroke="var(--sunk)" stroke-width="16"/>${segs}</svg><div class="donut-c"><span>${centro}</span></div></div>`;
  }
  function renderDiv() {
    const box = $("#div-body");
    const RF = S.rf.length ? rfTotais() : null, rfV = RF ? RF.bruto : 0;
    if (!S.carteira.length && !rfV) { box.innerHTML = `<p class="skel">Cadastre seus ativos e aplicações de renda fixa para ver como o patrimônio está distribuído entre classes, setores e países, e o que está faltando.</p>`; return; }
    const L = linhas(); const total = L.patr + rfV;
    if (!total) { box.innerHTML = `<p class="skel">Aguardando cotações para calcular a distribuição.</p>`; return; }
    // Pesos sobre o patrimônio total (ações, fundos, cripto e renda fixa)
    const rows = L.rows.map((r) => ({ ...r, peso: (r.valor || 0) / total }));
    const porCls = {}; rows.forEach((r) => { porCls[r.classe] = (porCls[r.classe] || 0) + r.peso; });
    const rfW = rfV / total; if (rfW > 0) porCls.rf = rfW;
    const cl = ORDEM_CLS.concat("rf").filter((c) => porCls[c] > 0);
    const etfFora = (r) => r.classe === "etf" && ETF_FORA.test(r.nome + " " + r.t);
    const foraW = rows.reduce((s, r) => s + ((ext(r.classe) || r.classe === "bdr" || etfFora(r)) ? r.peso : 0), 0);
    const expW = rows.reduce((s, r) => s + ((r.classe === "acao" && (DOLAR.has(r.setor) || DOLAR_TK.has(r.t))) ? r.peso : 0), 0);
    const dol = foraW + expW;
    const criW = porCls.cripto || 0;
    // Onde está o dinheiro: ações por setor, FIIs por segmento, ETFs juntos, cripto junto e renda fixa por banco
    const grupo = (r) => r.classe === "fii" ? "FII · " + (r.seg || "Outros") : r.classe === "etf" ? "ETFs na B3" : r.classe === "etf_ext" ? "ETFs dos EUA" : r.classe === "cripto" ? "Criptomoedas" : r.setor;
    const grupos = {}; const corG = {};
    rows.forEach((r) => { const g = grupo(r); grupos[g] = (grupos[g] || 0) + r.peso; corG[g] = corG[g] && corG[g] !== r.classe ? "acao" : r.classe; });
    const porBanco = {};
    if (RF) RF.itens.forEach(({ a, k }) => { porBanco[a.banco] = (porBanco[a.banco] || 0) + k.bruto; });
    Object.entries(porBanco).forEach(([b, v]) => { const g = "Renda fixa · " + b; grupos[g] = v / total; corG[g] = "rf"; });
    const gOrd = Object.entries(grupos).sort((a, b) => b[1] - a[1]);
    // ETFs e renda fixa já são diversificados (ou garantidos): não contam como concentração
    const ehDiv = (g) => g === "ETFs na B3" || g === "ETFs dos EUA" || g.startsWith("Renda fixa");
    const indiv = rows.filter((r) => r.classe !== "etf" && r.classe !== "etf_ext").sort((a, b) => b.peso - a.peso);
    const top = indiv[0]; const w1 = top ? top.peso : 0;
    const gNaoDiv = gOrd.filter(([g]) => !ehDiv(g)); const s1 = gNaoDiv[0] ? gNaoDiv[0][1] : 0;
    const nG = gOrd.length + gOrd.filter(([g]) => g.startsWith("ETFs")).length * 2;
    const clamp = (x) => Math.max(0, Math.min(1, x));
    // Nota: classes, grupos, maior ativo, maior setor, dólar, colchão de renda fixa e excesso de cripto
    let score = 22 * Math.min(cl.length, 4) / 4 + 20 * Math.min(nG, 8) / 8 + 18 * (1 - clamp((w1 - 0.15) / 0.35)) + 12 * (1 - clamp((s1 - 0.3) / 0.4)) + 14 * clamp(dol / 0.2)
      + 14 * (rfW >= 0.1 && rfW <= 0.7 ? 1 : rfW > 0.7 ? 0.6 : clamp(rfW / 0.1)) - 15 * clamp((criW - 0.1) / 0.2);
    score = Math.max(0, Math.min(100, Math.round(score)));
    const sc = score >= 70 ? "var(--up)" : score >= 45 ? "var(--warn)" : "var(--down)";
    const lbl = score >= 70 ? "Bem diversificada" : score >= 45 ? "Pode melhorar" : "Pouco diversificada";
    const obs = [];
    obs.push({ e: cl.length >= 3 ? "positivo" : cl.length === 2 ? "neutro" : "negativo", t: `Você tem ${cl.length} ${cl.length === 1 ? "classe de ativo" : "classes de ativos"} (${cl.map((c) => CLS[c].nome).join(", ")}). ${cl.length < 3 ? "Misturar renda fixa, ações, fundos imobiliários e ativos de fora reduz o risco de tudo cair junto." : "Boa mistura de classes."}` });
    if (top && w1 > 0.25) obs.push({ e: "negativo", t: `${top.t} pesa ${num(w1 * 100, 0)}% do patrimônio. Acima de 25% num único ativo (fora ETFs e renda fixa), uma queda dele pesa muito no total.` });
    if (s1 > 0.4) obs.push({ e: "negativo", t: `${gNaoDiv[0][0]} concentra ${num(s1 * 100, 0)}% do patrimônio.` });
    // Renda fixa: colchão, taxa média e limite do FGC
    if (rfW === 0) obs.push({ e: "neutro", t: "Nada em renda fixa. Uma reserva em CDB ou caixinha com liquidez diária cobre imprevistos sem precisar vender ações na hora errada." });
    else {
      const cdiItens = RF.itens.filter(({ a }) => a.indexador === "cdi");
      const media = cdiItens.length ? cdiItens.reduce((sm, { a, k }) => sm + Number(a.taxa) * k.bruto, 0) / cdiItens.reduce((sm, { k }) => sm + k.bruto, 0) : null;
      obs.push({ e: rfW > 0.85 ? "neutro" : "positivo", t: `${num(rfW * 100, 0)}% em renda fixa (${brl(rfV)})${media ? `, rendendo em média ${num(media, 0)}% do CDI` : ""}. ${rfW > 0.85 ? "É seguro, mas quase sem exposição a crescimento no longo prazo." : "Amortece as quedas da bolsa e serve de reserva."}` });
      Object.entries(porBanco).forEach(([b, v]) => { if (v > 250000) obs.push({ e: "negativo", t: `${brl(v)} em renda fixa no ${b}: o FGC garante até R$ 250 mil por CPF em cada banco. Divida o excedente entre outros bancos.` }); });
    }
    if (criW > 0.15) obs.push({ e: "negativo", t: `${num(criW * 100, 0)}% em criptomoedas: oscilam muito mais que ações. Muita gente limita cripto a 5% ou 10% do patrimônio.` });
    else if (criW > 0) obs.push({ e: "neutro", t: `${num(criW * 100, 1)}% em criptomoedas: uma parte pequena, que pode oscilar bastante sem comprometer o todo.` });
    obs.push(foraW >= 0.1 ? { e: "positivo", t: `${num(foraW * 100, 0)}% do patrimônio está fora do Brasil (EUA, BDRs ou ETFs internacionais): protege quando o real se desvaloriza e reduz o risco Brasil.` }
      : dol >= 0.1 ? { e: "neutro", t: foraW > 0 ? `${num(foraW * 100, 0)}% está fora do Brasil e ${num(expW * 100, 0)}% em exportadoras que ganham em dólar. Levar a parte de fora para 10% ou mais completa a proteção contra a alta do dólar.` : `${num(dol * 100, 0)}% está em exportadoras que ganham em dólar, mas nada diretamente fora do Brasil. Um ETF como VOO ou IVVB11 completa a proteção.` }
      : { e: "negativo", t: "Quase nada do patrimônio ganha em dólar. Ativos dos EUA (como VOO) ou exportadoras protegem quando o real se desvaloriza." });
    if (porCls.fii) obs.push({ e: "positivo", t: `${num(porCls.fii * 100, 0)}% em fundos imobiliários, que pagam renda todo mês isenta de IR.` });
    const def = rows.reduce((sm, r) => sm + (r.classe === "acao" && DEFENSIVOS.has(r.setor) ? r.peso : 0), 0);
    const acoesW = porCls.acao || 0;
    if (acoesW && def / acoesW > 0.5 && def > 0.15) obs.push({ e: "neutro", t: `${num(def / acoesW * 100, 0)}% das suas ações estão em setores defensivos (bancos, seguros, energia, saneamento): bons dividendos, mas pouca exposição a crescimento.` });

    // Sugestões: primeiro as classes que faltam, depois os setores
    const mine = new Set(S.carteira.map((p) => p.ticker));
    const topCls = (c, n, pref) => { const out = []; (pref || []).forEach((t) => { const r = S.cotMap[t]; if (r && r.classe === c && !mine.has(t)) out.push(r); }); S.cot.filter((r) => r.classe === c && !mine.has(r.ticker) && !out.includes(r)).slice(0, n).forEach((r) => out.push(r)); return out.slice(0, n).map((r) => ({ t: r.ticker, tese: "" })); };
    const faltaCls = [];
    if (!rfW) faltaCls.push({ s: "Renda fixa (reserva)", c: "rf", why: "CDBs e caixinhas com liquidez diária rendem perto de 100% do CDI ou mais, têm FGC e podem ser resgatados a qualquer hora.", rf: true, cands: [] });
    if (!porCls.fii) faltaCls.push({ s: "Fundos imobiliários", c: "fii", why: "Renda mensal isenta de IR, vinda de aluguéis de galpões, shoppings, escritórios e títulos imobiliários.", cands: topCls("fii", 2, ["HGLG11", "KNCR11", "XPML11"]) });
    if (foraW < 0.05) faltaCls.push({ s: "Exterior (EUA)", c: "etf_ext", why: "Coloca você nas maiores empresas do mundo e protege contra a alta do dólar. Dá para comprar pela B3 (IVVB11) ou direto nos EUA (VOO).", cands: [...topCls("etf", 1, ["IVVB11"]), ...topCls("etf_ext", 1, ["VOO"])] });
    if (!porCls.etf && !porCls.etf_ext) faltaCls.push({ s: "ETFs", c: "etf", why: "Uma cota compra dezenas de empresas de uma vez, com custo baixo. Bom para a base da carteira.", cands: topCls("etf", 2, ["BOVA11", "SMAL11"]) });
    const temAcoes = rows.some((r) => r.classe === "acao");
    const porSetor = {}; rows.forEach((r) => { if (r.classe === "acao") porSetor[r.setor] = 1; });
    const faltando = temAcoes ? PRIORIDADE.filter((sx) => !porSetor[sx]).map((sx) => ({ s: sx, c: candidatos(sx, mine) })).filter((x) => x.c.length) : [];
    faltando.sort((a, b) => ((b.c[0] && b.c[0].casas) || 0) - ((a.c[0] && a.c[0].casas) || 0));
    const motivo = { "Petróleo e Gás": "Gera caixa em dólar e paga dividendos altos.", "Mineração e Siderurgia": "Receita em dólar, protege contra alta do câmbio.", "Saúde": "Demanda estável, pouco ligada ao ciclo da economia.", "Indústria": "Exportadoras e empresas de bens de capital diversificam o risco Brasil.", "Agro e Alimentos": "Setor forte do Brasil, muitas vezes com receita externa.", "Tecnologia e Telecom": "Receita recorrente e potencial de crescimento.", "Imóveis e Construção": "Ganha muito quando os juros caem.", "Transporte e Logística": "Concessões com contratos corrigidos pela inflação.", "Varejo e Consumo": "Sobe quando a renda e o crédito melhoram.", "Energia Elétrica": "Receita previsível e bons dividendos.", "Saneamento e Gás": "Monopólio regulado com crescimento contratado.", "Bancos e Financeiro": "Lucros altos e dividendos constantes.", "Seguros": "Muito caixa e dividendos altos.", "Papel, Química e Materiais": "Celulose é exportada e ganha com dólar alto.", "Educação e Serviços": "Ganha com juros menores e economia aquecida." };
    const cand = (c) => { const r = S.cotMap[c.t]; return `<div class="cand"><span><button type="button" class="tk-btn" data-emp="${esc(c.t)}"><span class="tk" style="font-size:16px">${esc(c.t)}</span></button> <span class="price">${r ? money(r.preco, r.moeda) : ""}</span>${c.casas ? ` <span class="hint">· em ${c.casas} ${c.casas === 1 ? "carteira" : "carteiras"}</span>` : ""}${r && !c.casas ? ` <span class="hint">· ${esc(nomeBom(r.nome))}</span>` : ""}</span><button type="button" class="add-btn" data-pick="${esc(c.t)}">+ Adicionar</button>${c.tese ? `<p>${esc(c.tese)}</p>` : ""}</div>`; };
    const cards = [
      ...faltaCls.filter((x) => x.cands.length || x.rf).map((x) => `<div class="gap" data-cl="${x.c}"><div class="gap-h">${clsChip(x.c)}<strong>${esc(x.s)}</strong></div><span class="why">${esc(x.why)}</span>${x.rf ? `<div class="cand"><span class="hint">Veja em “Comparar bancos” onde rende mais.</span><a class="add-btn" href="#sec-rf">+ Adicionar aplicação</a></div>` : x.cands.map(cand).join("")}</div>`),
      ...faltando.slice(0, Math.max(0, 4 - faltaCls.length)).map((x) => `<div class="gap" data-cl="acao"><div class="gap-h"><strong>${esc(x.s)}</strong></div><span class="why">${esc(motivo[x.s] || "")}</span>${x.c.slice(0, 2).map(cand).join("")}</div>`),
    ];
    const animB = primeira("bars");
    box.innerHTML = `<div class="div-grid">
      <div style="min-width:0">
        <div class="div-top">
          <div class="dscore${primeira("dscore") ? " anim" : ""}" style="--p:${score};--sc:${sc}"><span><b>${score}</b><small>de 100</small></span></div>
          <div style="min-width:0"><div class="h3" style="margin-bottom:6px;color:${sc}">${lbl}</div><p class="hint" style="margin:0 0 8px">Patrimônio total de ${brl(total)}, contando renda fixa${criW ? " e cripto" : ""}.</p><ul class="obs">${obs.map((o) => `<li><span class="mark ${o.e}">${o.e === "positivo" ? "+" : o.e === "negativo" ? "−" : "·"}</span><span>${esc(o.t)}</span></li>`).join("")}</ul></div>
        </div>
        <div class="h3">Por classe de ativo</div>
        <div class="cls-box">
          ${donut(cl.map((c) => ({ c, w: porCls[c] })), `<b>${cl.length}</b><small>${cl.length === 1 ? "classe" : "classes"}</small>`)}
          <div class="cls-leg">${cl.map((c) => `<div data-cl="${c}"><i></i><span>${CLS[c].longo}</span><b>${num(porCls[c] * 100, 1)}%</b><small>${brl(porCls[c] * total)}</small></div>`).join("")}<div><i style="background:var(--faint)"></i><span>Fora do Brasil</span><b>${num(foraW * 100, 1)}%</b></div></div>
        </div>
        <div class="h3">Onde está seu dinheiro</div>
        <div class="bars${animB ? " anim" : ""}">${gOrd.map(([g, w]) => `<div class="bar" data-cl="${corG[g]}"><span class="nm2"><i></i>${esc(g)}</span><span class="track"><i class="${w > 0.4 && !ehDiv(g) ? "hot" : ""}" style="width:${(w * 100).toFixed(1)}%"></i></span><span class="pc">${num(w * 100, 0)}%</span></div>`).join("")}</div>
      </div>
      <div style="min-width:0">
      ${cards.length ? `<div class="h3">O que falta no seu patrimônio</div><p class="sub" style="margin:0 0 12px">Classes e setores que você ainda não tem, com ativos citados nas carteiras recomendadas das corretoras ou entre os mais negociados. Veja o perfil antes de comprar.</p>
      <div class="gaps">${cards.join("")}</div>` : `<p class="skel">Seu patrimônio já cobre as principais classes e setores.</p>`}
      </div></div>`;
  }

  /* ---------- Recomendações das corretoras ---------- */
  function renderRecs() {
    const c = S.painel.consenso; const mine = new Set(S.carteira.map((p) => p.ticker));
    if (!c) { $("#recs").innerHTML = `<p class="skel">Sem recomendações registradas.</p>`; return; }
    const max = Math.max(7, ...(c.itens || []).map((i) => i.casas || 0));
    const itens = (c.itens || []).slice().sort((a, b) => (b.casas || 0) - (a.casas || 0));
    const anim = primeira("recs");
    $("#recs").className = "recs" + (anim ? " stagger" : "");
    $("#recs").innerHTML = itens.length ? itens.map((i) => {
      const q = S.cotMap[i.ticker]; const k = i.casas || 0; const tem = mine.has(i.ticker); const an = S.analises[i.ticker];
      return `<article class="rec${tem ? " mine" : ""}">
        <div class="rec-top"><div style="min-width:0"><button type="button" class="tk-btn" data-emp="${esc(i.ticker)}"><span class="tk">${esc(i.ticker)}</span></button><span class="nm">${esc(i.nome)}${i.setor ? " · " + esc(i.setor) : ""}</span></div>
          ${q ? `<div class="rec-px"><b>${brl(q.preco)}</b><small class="${cls(q.var_dia)}">${pct(q.var_dia)}</small></div>` : ""}</div>
        <div class="casas" title="Em ${k} carteiras recomendadas">${Array.from({ length: max }, (_, j) => `<i class="${j < k ? "on" : ""}"></i>`).join("")}<span>${k} ${k === 1 ? "carteira" : "carteiras"}</span></div>
        ${i.tese ? `<p>${esc(i.tese)}</p>` : ""}
        ${i.risco ? `<p class="risco">Risco: ${esc(i.risco)}</p>` : ""}
        <div class="rec-foot"><span>${an && an.sinal && SINAL[an.sinal] ? `<span class="pill s-${an.sinal}">${SINAL[an.sinal]}</span>` : `<button type="button" class="lk" data-emp="${esc(i.ticker)}">Ver empresa</button>`}</span>${tem ? `<span class="have">${IC("check")} Na sua carteira</span>` : `<button type="button" class="add-btn" data-pick="${esc(i.ticker)}">+ Adicionar</button>`}</div>
      </article>`;
    }).join("") : `<p class="skel">Sem recomendações ainda.</p>`;
    $("#recs-fonte").textContent = c.fonte || ""; $("#recs-when").textContent = c._ts ? "Revisado " + ago(c._ts) : "";
  }

  /* ---------- Explorar ativos ---------- */
  let setorDe = null;
  function renderExTabs() {
    const cont = {}; S.cot.forEach((r) => { cont[r.classe] = (cont[r.classe] || 0) + 1; });
    $("#ex-tabs").innerHTML = ORDEM_CLS.filter((c) => cont[c]).map((c) => `<button type="button" class="fchip" data-cl="${c}" data-excls="${c}" aria-pressed="${S.exCls === c}">${CLS[c].nome} <small>${cont[c]}</small></button>`).join("");
  }
  function renderTodas() {
    if (!S.cot.length) return;
    renderExTabs();
    $("#all-when").textContent = S.cotTs ? "Cotações de " + new Date(S.cotTs).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "";
    const q = $("#q-busca").value.trim().toLowerCase(), ordem = $("#q-ordem").value;
    const todasCls = !!q; const c = S.exCls;
    // Filtro de setor muda conforme a classe (segmento para FIIs, sem setor para ETFs)
    if (setorDe !== c) {
      const campo = c === "fii" ? "setor" : "setor_macro";
      const st = c === "etf" || c === "etf_ext" || c === "cripto" ? [] : [...new Set(S.cot.filter((r) => r.classe === c).map((r) => r[campo]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
      $("#q-setor").innerHTML = `<option value="">${c === "fii" ? "Todos os segmentos" : "Todos os setores"}</option>` + st.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join("");
      $("#q-setor").disabled = !st.length; setorDe = c;
    }
    const setor = $("#q-setor").value; const campo = c === "fii" ? "setor" : "setor_macro";
    $("#th-mc").textContent = c === "cripto" ? "Valor de mercado" : c === "etf_ext" ? "Patrimônio" : c === "fii" || c === "etf" ? "—" : "Valor de mercado";
    let rows = S.cot.filter((r) => (todasCls || r.classe === c) && (todasCls || !setor || r[campo] === setor) && (!q || r.ticker.toLowerCase().includes(q) || String(r.nome).toLowerCase().includes(q)));
    const so = { volume: (a, b) => b.volume - a.volume, alta: (a, b) => b.var_dia - a.var_dia, baixa: (a, b) => a.var_dia - b.var_dia, mc: (a, b) => (b.valor_mercado_mi || 0) - (a.valor_mercado_mi || 0), az: (a, b) => a.ticker.localeCompare(b.ticker) };
    rows = rows.slice().sort(so[ordem] || so.volume); if (ordem === "alta" || ordem === "baixa") rows = rows.filter((r) => r.volume > 0);
    if (q) rows.sort((a, b) => (b.ticker.toLowerCase() === q) - (a.ticker.toLowerCase() === q) || (b.ticker.toLowerCase().startsWith(q)) - (a.ticker.toLowerCase().startsWith(q)));
    const mine = new Set(S.carteira.map((p) => p.ticker)); const shown = rows.slice(0, S.lim);
    $("#all-body").innerHTML = shown.length ? shown.map((r) => `<tr><td><button type="button" class="tk-btn idc" data-emp="${esc(r.ticker)}">${logoHtml(r.ticker)}<span class="tk">${esc(r.ticker)}${todasCls ? " " + clsChip(r.classe) : ""}</span><span class="nm">${esc(nomeBom(r.nome))}</span></button></td><td class="r">${money(r.preco, r.moeda)}</td><td class="r ${cls(r.var_dia)}">${pct(r.var_dia)}</td><td class="r hide-sm">${compacto(r.volume)}</td><td class="r hide-sm">${r.valor_mercado_mi ? (r.moeda === "USD" ? "US$ " : "R$ ") + compacto(r.valor_mercado_mi * 1e6) : "—"}</td><td class="r">${mine.has(r.ticker) ? '<span class="have">Na carteira</span>' : `<button type="button" class="add-btn" data-pick="${esc(r.ticker)}">+ Adicionar</button>`}</td></tr>`).join("")
      : `<tr><td colspan="6" class="skel">Nenhum ativo encontrado${q ? " para “" + esc(q) + "”" : ""}.${q && /^[a-z.\-]{1,6}$/.test(q) ? ` Se for uma ação ou ETF dos EUA, adicione pelo código na carteira que buscamos para você.` : ""}</td></tr>`;
    $("#all-count").textContent = rows.length ? `Mostrando ${shown.length} de ${rows.length} ${todasCls ? "ativos" : "· " + CLS[c].longo} · toque no código para ver o perfil${c === "acao_ext" && !todasCls ? " · as 150 maiores dos EUA" : c === "cripto" && !todasCls ? " · as 100 maiores do mundo, variação em 24 h" : c === "etf_ext" && !todasCls ? " · os maiores ETFs dos EUA" : ""}` : ""; $("#all-more").hidden = shown.length >= rows.length;
  }
  $("#ex-tabs").addEventListener("click", (e) => { const b = e.target.closest("[data-excls]"); if (!b) return; S.exCls = b.dataset.excls; S.lim = 50; $("#q-busca").value = ""; renderTodas(); });
  let tB; $("#q-busca").addEventListener("input", () => { clearTimeout(tB); tB = setTimeout(() => { S.lim = 50; renderTodas(); }, 150); });
  $("#q-ordem").addEventListener("change", () => { S.lim = 50; renderTodas(); });
  $("#q-setor").addEventListener("change", () => { S.lim = 50; renderTodas(); });
  $("#all-more").addEventListener("click", () => { S.lim += 50; renderTodas(); });

  /* ---------- Renda fixa ---------- */
  // Taxas e regras pesquisadas em out/2026 (sites e comunicados dos bancos, portais de finanças).
  // reqMes: entradas mínimas na conta por ciclo para manter a taxa; renova: meses até a renovação.
  const RF_MOD = [
    { id: "nubank_turbo", banco: "Nubank", nome: "Caixinha Turbo", taxa: 115, limite: 5000, tipo: "RDB", req: "Entradas de R$ 900 a cada 31 dias", reqMes: 900, ciclo: 31, renova: 12,
      regras: "<b>115% do CDI até R$ 5 mil</b>, resgate na hora (RDB com FGC). Para manter a taxa, as entradas na conta (Pix, TED, depósito, salário) precisam somar <b>R$ 900 a cada ciclo de 31 dias</b>; o dinheiro pode sair em seguida. Se não bater a meta, o saldo vai para um RDB de 100% do CDI e o IR e o IOF são cobrados nessa hora. A Caixinha Turbo é renovada a cada 12 meses (resgate e reaplicação)." },
    { id: "nubank_turbo_plus", banco: "Nubank", nome: "Caixinha Turbo (Nubank+ / Ultravioleta)", taxa: 120, limite: 10000, tipo: "RDB", req: "Assinatura Nubank+ ou Ultravioleta", renova: 12,
      regras: "<b>120% do CDI até R$ 10 mil</b> para clientes Nubank+ e Ultravioleta, sem exigência de movimentação. Resgate na hora, RDB com FGC. Clientes NuCel podem ter as duas Turbo ao mesmo tempo." },
    { id: "nubank_caixinha", banco: "Nubank", nome: "Caixinha", taxa: 100, tipo: "RDB", req: "Nenhum",
      regras: "<b>100% do CDI</b>, resgate na hora, sem limite. RDB do Nubank com FGC até R$ 250 mil." },
    { id: "nubank_conta", banco: "Nubank", nome: "Saldo da conta", taxa: 100, tipo: "RDB", req: "Nenhum",
      regras: "<b>100% do CDI</b> para o dinheiro que fica na conta. O rendimento dos primeiros 30 dias entra no 31º dia; se sair antes, não rende." },
    { id: "mp_cofrinho_meli", banco: "Mercado Pago", nome: "Cofrinho (Meli+)", taxa: 120, limite: 10000, exc: 100, tipo: "CDB", req: "Assinatura Meli+",
      regras: "<b>120% do CDI até R$ 10 mil</b> para assinantes Meli+; o que passar disso rende 100% do CDI. Rende em dias úteis, resgate na hora." },
    { id: "mp_conta_105", banco: "Mercado Pago", nome: "Conta (com R$ 1.000/mês de entradas)", taxa: 105, tipo: "CDB", req: "Entradas de R$ 1.000 no mês", reqMes: 1000,
      regras: "<b>105% do CDI</b> quando as entradas do mês (Pix, transferências, depósitos, salário) somam pelo menos R$ 1.000. Sem isso, rende 100%." },
    { id: "mp_conta", banco: "Mercado Pago", nome: "Conta / Cofrinho", taxa: 100, tipo: "CDB", req: "Nenhum",
      regras: "<b>100% do CDI</b> no saldo da conta e nos cofrinhos comuns, rendendo todo dia útil." },
    { id: "picpay_turbinado", banco: "PicPay", nome: "Cofrinho Turbinado", taxa: 121, tipo: "CDB", req: "PicPay Mais ou R$ 999/mês + chave Pix CPF", reqMes: 999,
      regras: "<b>Até 121% do CDI</b> para assinantes PicPay Mais ou para quem movimenta R$ 999 por mês e tem chave Pix com o CPF. Resgate na hora. Confira o limite no app (a campanha pode mudar)." },
    { id: "picpay_cofrinho", banco: "PicPay", nome: "Cofrinho", taxa: 102, tipo: "CDB", req: "Nenhum",
      regras: "<b>102% do CDI</b> todo dia útil, sem carência, resgate na hora." },
    { id: "pagbank_cdb130", banco: "PagBank", nome: "CDB 130% (1ª aplicação)", taxa: 130, tipo: "CDB", req: "Nunca investiu no PagBank (ou há 6+ meses)",
      regras: "<b>130% do CDI</b> só na primeira aplicação de quem nunca investiu no PagBank ou não investe há mais de 6 meses, de R$ 500 a R$ 2 milhões, com liquidez diária depois da carência." },
    { id: "pagbank_cdb", banco: "PagBank", nome: "CDB liquidez diária", taxa: 103, tipo: "CDB", req: "Nenhum",
      regras: "<b>Cerca de 103% do CDI</b> no CDB de liquidez diária. O CDB do PagBank também pode virar limite no cartão." },
    { id: "inter_objetivo", banco: "Inter", nome: "Meu Porquinho por Objetivo", taxa: 100, tipo: "CDB", req: "Nenhum",
      regras: "<b>100% do CDI</b> nos porquinhos criados por você (Reserva, Viagem...). Resgate na hora." },
    { id: "inter_diadia", banco: "Inter", nome: "Porquinho Dia a Dia", taxa: 80, tipo: "CDB", req: "Nenhum",
      regras: "<b>80% do CDI</b> para aportes feitos desde 01/09/2025 (o saldo anterior segue a 100%). Vale mais criar um Porquinho por Objetivo, que rende 100%." },
    { id: "inter_limite", banco: "Inter", nome: "Porquinho Mais Limite", taxa: 82, tipo: "CDB", req: "Nenhum",
      regras: "<b>82% do CDI</b>; cada real guardado vira limite no cartão." },
    { id: "c6_cdb", banco: "C6 Bank", nome: "CDB liquidez diária", taxa: 101.5, tipo: "CDB", req: "Nenhum",
      regras: "<b>101,5% do CDI</b> (taxa padrão informada pelo C6). O CDB Cartão rende 102% e vira limite no cartão, com resgate em até 2 dias úteis." },
    { id: "sofisa_cdb", banco: "Sofisa", nome: "CDB liquidez diária", taxa: 105, tipo: "CDB", req: "Nenhum", regras: "<b>Cerca de 105% do CDI</b>, a partir de R$ 1, sem limite." },
    { id: "daycoval_cdb", banco: "Daycoval", nome: "CDB liquidez diária", taxa: 104, tipo: "CDB", req: "Mínimo de R$ 1 mil", regras: "<b>Cerca de 104% do CDI</b>, a partir de R$ 1 mil." },
    { id: "itau_cdb", banco: "Itaú", nome: "CDB liquidez diária", taxa: 100, tipo: "CDB", req: "Nenhum", regras: "<b>Cerca de 100% do CDI</b> no CDB de liquidez diária. Grandes bancos variam a taxa por perfil: confira no app." },
    { id: "bradesco_cdb", banco: "Bradesco", nome: "CDB liquidez diária", taxa: 100, tipo: "CDB", req: "Mínimo de R$ 100", regras: "<b>Cerca de 100% do CDI</b>, a partir de R$ 100. A taxa varia por perfil: confira no app." },
    { id: "santander_cdb", banco: "Santander", nome: "CDB liquidez diária", taxa: 100, tipo: "CDB", req: "Nenhum", regras: "<b>Cerca de 100% do CDI</b>. A taxa varia por perfil: confira no app." },
    { id: "bb_cdb", banco: "Banco do Brasil", nome: "CDB liquidez diária", taxa: 97, tipo: "CDB", req: "Mínimo de R$ 500", regras: "<b>Cerca de 97% do CDI</b>, a partir de R$ 500. A taxa varia por perfil: confira no app." },
    { id: "btg_cdb", banco: "BTG Pactual", nome: "CDB liquidez diária", taxa: 100, tipo: "CDB", req: "Mínimo de R$ 50", regras: "<b>Cerca de 100% do CDI</b>, a partir de R$ 50." },
    { id: "lci_lca", banco: "Outro banco", nome: "LCI / LCA", taxa: 90, tipo: "LCI/LCA", isento: true, req: "Prazo mínimo (carência)", comparar: false,
      regras: "LCI e LCA são <b>isentas de IR</b> para pessoa física e têm FGC, mas costumam ter carência. Informe a taxa do seu título." },
    { id: "cdb_pre", banco: "Outro banco", nome: "CDB prefixado", taxa: 13, indexador: "pre", tipo: "CDB", req: "Até o vencimento", comparar: false,
      regras: "Taxa fixa ao ano, definida na compra. Informe a taxa e o vencimento do seu título." },
    { id: "outro", banco: "", nome: "Outra aplicação", taxa: 100, tipo: "CDB", req: "", comparar: false, regras: "Preencha o banco, o nome e a taxa da sua aplicação em “Mais opções”." },
  ];
  const RF_MAP = Object.fromEntries(RF_MOD.map((m) => [m.id, m]));
  const BK_COR = { "Nubank": "#820AD1", "Mercado Pago": "#009EE3", "PicPay": "#11A85F", "PagBank": "#C99700", "Inter": "#FF7A00", "C6 Bank": "#2B2B2B", "Itaú": "#EC7000", "Bradesco": "#CC092F", "Santander": "#E50000", "Banco do Brasil": "#3C59A8", "BTG Pactual": "#0B2D5B", "Sofisa": "#00897B", "Daycoval": "#1F4E9A" };
  const bkCor = (b) => BK_COR[b] || "var(--c-rf)";
  const bkSigla = (b) => { const p = String(b || "?").replace(/^Banco (do |da )?/i, "").split(/\s+/).filter(Boolean); return (p.length > 1 ? p[0][0] + p[1][0] : (p[0] || "?").slice(0, 2)).toUpperCase(); };
  const bkHtml = (b) => `<span class="rf-bk" style="--bk:${bkCor(b)}" aria-hidden="true">${esc(bkSigla(b))}</span>`;
  const IOF = [96, 93, 90, 86, 83, 80, 76, 73, 70, 66, 63, 60, 56, 53, 50, 46, 43, 40, 36, 33, 30, 26, 23, 20, 16, 13, 10, 6, 3];
  const aliqIR = (dias) => dias <= 180 ? 22.5 : dias <= 360 ? 20 : dias <= 720 ? 17.5 : 15;
  const hojeISO = () => new Date().toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });
  const dataBR = (iso) => iso ? iso.slice(8, 10) + "/" + iso.slice(5, 7) + "/" + iso.slice(0, 4) : "—";
  const somaDias = (iso, n) => { const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
  const diasEntre = (a, b) => Math.round((Date.parse(b + "T12:00:00Z") - Date.parse(a + "T12:00:00Z")) / 864e5);
  const ehUtil = (iso) => { const w = new Date(iso + "T12:00:00Z").getUTCDay(); return w !== 0 && w !== 6 && !FERIADOS.has(iso); };
  const taxaTxt = (a) => a.indexador === "pre" ? num(a.taxa, 2).replace(/,00$/, "") + "% a.a." : num(a.taxa, 2).replace(/,00$/, "").replace(/(,\d)0$/, "$1") + "% do CDI";

  S.rf = []; S.rfOk = true; S.rfEdit = null; S.rfDel = null;
  // CDI: série diária do Banco Central (painel.cdi); sem ela, estima pela Selic
  function cdiInfo() {
    const c = S.painel.cdi;
    if (c && Array.isArray(c.serie) && c.serie.length) return { anual: Number(c.anual), diario: Number(c.diario), serie: c.serie, data: c.serie[c.serie.length - 1][0], ok: true };
    const sel = S.painel.mercado && S.painel.mercado.selic && Number(S.painel.mercado.selic.taxa);
    const anual = sel ? sel - 0.1 : 13.65;
    return { anual, diario: (Math.pow(1 + anual / 100, 1 / 252) - 1) * 100, serie: [], data: null, ok: false };
  }
  // Fator acumulado de uma taxa (% do CDI ou prefixada) entre duas datas (início incluso, fim excluso)
  function fatorRF(ini, fim, indexador, taxa, C) {
    let f = 1, du = 0;
    if (indexador === "pre") {
      for (let d = ini; d < fim; d = somaDias(d, 1)) if (ehUtil(d)) du++;
      return { f: Math.pow(1 + taxa / 100, du / 252), du };
    }
    let ultima = null;
    for (const [d, v] of C.serie) { if (d < ini) continue; if (d >= fim) break; f *= 1 + (v / 100) * (taxa / 100); du++; ultima = d; }
    // Dias úteis ainda sem CDI publicado: usa o CDI do último dia
    let d = ultima ? somaDias(ultima, 1) : (C.data && C.data >= ini ? somaDias(C.data, 1) : ini);
    for (; d < fim; d = somaDias(d, 1)) if (ehUtil(d)) { f *= 1 + (C.diario / 100) * (taxa / 100); du++; }
    return { f, du };
  }
  function rfCalc(a, C) {
    C = C || cdiInfo();
    const hoje = hojeISO(), ini = a.data_aplicacao, valor = Number(a.valor);
    const lim = a.limite ? Number(a.limite) : null;
    const exc = a.taxa_excedente != null ? Number(a.taxa_excedente) : 100;
    const p1 = lim ? Math.min(valor, lim) : valor, p2 = valor - p1;
    const futuro = ini > hoje;
    const A = futuro ? { f: 1, du: 0 } : fatorRF(ini, hoje, a.indexador, Number(a.taxa), C);
    const B = p2 > 0 && !futuro ? fatorRF(ini, hoje, a.indexador, exc, C) : { f: 1 };
    const bruto = p1 * A.f + p2 * B.f, rend = bruto - valor;
    const dias = Math.max(0, diasEntre(ini, hoje));
    const iofPct = dias >= 30 || dias < 1 ? 0 : IOF[dias - 1];
    const iof = rend > 0 ? rend * iofPct / 100 : 0;
    const irPct = a.isento_ir ? 0 : aliqIR(dias);
    const ir = rend > 0 ? (rend - iof) * irPct / 100 : 0;
    const liq = bruto - iof - ir;
    // Quanto rende por mês agora (21 dias úteis), bruto, com o CDI de hoje
    const dDia = (t) => a.indexador === "pre" ? Math.pow(1 + t / 100, 1 / 252) - 1 : (C.diario / 100) * (t / 100);
    const s1 = p1 * A.f, s2 = p2 * B.f;
    const mes = s1 * (Math.pow(1 + dDia(Number(a.taxa)), 21) - 1) + s2 * (Math.pow(1 + dDia(exc), 21) - 1);
    // Em 12 meses, se o CDI ficar como hoje: valor líquido
    const b12 = s1 * Math.pow(1 + dDia(Number(a.taxa)), 252) + s2 * Math.pow(1 + dDia(exc), 252);
    const r12 = b12 - valor, liq12 = b12 - (a.isento_ir ? 0 : r12 * aliqIR(dias + 365) / 100);
    return { valor, bruto, rend, rendPct: valor ? rend / valor * 100 : 0, iof, iofPct, ir, irPct, liq, mes, liq12, dias, du: A.du, lim, exc, p2, futuro };
  }
  function rfAvisos(a, k) {
    const out = [], m = RF_MAP[a.produto] || {};
    if (k.futuro) out.push(["warn", `Aplicação com data futura (${dataBR(a.data_aplicacao)}): começa a render nesse dia.`]);
    if (k.lim && k.p2 > 0) out.push(["neg", a.taxa_excedente != null
      ? `R$ ${num(k.p2)} passam do limite de ${brl(k.lim)} e rendem só ${num(k.exc, 0)}% do CDI.`
      : `R$ ${num(k.p2)} passam do limite de ${brl(k.lim)} do produto e não ganham os ${num(a.taxa, 0)}% (contamos esse valor a 100% do CDI). Vale mover o excedente para onde renda mais.`]);
    if (k.iofPct > 0) out.push(["warn", `Se resgatar hoje, paga IOF de ${k.iofPct}% sobre o rendimento. O IOF zera em ${dataBR(somaDias(a.data_aplicacao, 30))}.`]);
    if (m.reqMes && m.ciclo && !k.futuro) {
      const n = Math.floor(k.dias / m.ciclo), fim = somaDias(a.data_aplicacao, (n + 1) * m.ciclo);
      out.push(["", `Para manter ${num(a.taxa, 0)}% do CDI: entradas de ${brl(m.reqMes)} na conta a cada ${m.ciclo} dias. O ciclo atual vai até cerca de ${dataBR(fim)} (conta a partir de quando a meta foi batida).`]);
    } else if (m.reqMes) out.push(["", `Para manter ${num(a.taxa, 0)}% do CDI: entradas de ${brl(m.reqMes)} na conta todo mês.`]);
    if (m.renova && !k.futuro) out.push(["", `A Caixinha Turbo é renovada a cada ${m.renova} meses: por volta de ${dataBR(somaDias(a.data_aplicacao, Math.round(m.renova * 30.44) * Math.max(1, Math.ceil((k.dias + 1) / (m.renova * 30.44)))))} ela é resgatada e reaplicada, e o IR é cobrado nessa hora.`]);
    if (a.produto === "inter_diadia") out.push(["warn", "O Porquinho Dia a Dia rende 80% do CDI. Um Porquinho por Objetivo no mesmo app rende 100%."]);
    if (a.vencimento) { const f = diasEntre(hojeISO(), a.vencimento); if (f >= 0 && f <= 30) out.push(["warn", `Vence em ${dataBR(a.vencimento)} (${f === 0 ? "hoje" : f === 1 ? "amanhã" : "em " + f + " dias"}).`]); else if (f < 0) out.push(["", `Venceu em ${dataBR(a.vencimento)}.`]); }
    if (!k.iofPct && !k.futuro && !a.isento_ir) out.push(["", `IR de ${num(k.irPct, 1).replace(",0", "")}% sobre o rendimento (${k.dias} dias aplicados${k.dias <= 720 ? `; cai para ${num(aliqIR(k.dias <= 180 ? 181 : k.dias <= 360 ? 361 : 721), 1).replace(",0", "")}% depois de ${k.dias <= 180 ? "180" : k.dias <= 360 ? "360" : "720"} dias` : ""}).`]);
    return out;
  }
  function aposRF() { renderRF(); renderHero(); renderDia(); renderDiv(); }
  async function carregarRF() {
    const { data, error } = await sb.from("renda_fixa").select("id,produto,banco,nome,indexador,taxa,limite,taxa_excedente,valor,data_aplicacao,vencimento,isento_ir,obs").order("data_aplicacao");
    if (error) { S.rfOk = false; S.rf = []; return; }
    S.rfOk = true; S.rf = data || [];
  }
  function rfTotais() {
    const C = cdiInfo(); let apl = 0, bruto = 0, liq = 0, mes = 0, liq12 = 0;
    const itens = S.rf.map((a) => { const k = rfCalc(a, C); apl += k.valor; bruto += k.bruto; liq += k.liq; mes += k.mes; liq12 += k.liq12; return { a, k }; });
    return { C, itens, apl, bruto, liq, mes, liq12 };
  }
  function renderRF() {
    const T = rfTotais(), C = T.C;
    $("#rf-cdi").textContent = `CDI ${num(C.anual, 2)}% a.a.` + (C.data ? ` · Banco Central, ${dataBR(C.data)}` : " · estimado pela Selic");
    if (!S.rfOk) {
      $("#rf-kpis").hidden = true; $("#rf-alerts").hidden = true;
      $("#rf-list").innerHTML = `<div class="empty"><strong>Renda fixa ainda não ativada</strong>Falta criar a tabela no banco de dados (arquivo supabase/migrations/20261026_renda_fixa.sql). Depois disso, recarregue a página.</div>`;
      return;
    }
    if (!S.rf.length) {
      $("#rf-kpis").hidden = true; $("#rf-alerts").hidden = true;
      $("#rf-list").innerHTML = `<div class="empty"><strong>Nenhuma aplicação ainda</strong>Adicione seu CDB, caixinha ou cofrinho abaixo para ver quanto já rendeu e quanto sobra depois do imposto.</div>`;
    } else {
      $("#rf-kpis").hidden = false;
      const r = T.bruto - T.apl;
      $("#rf-kpis").innerHTML = [
        ["Aplicado", brl(T.apl)],
        ["Valor hoje", brl(T.bruto)],
        ["Rendeu", `<span class="${cls(r)}">${esc(sinal(r, brl))}</span> <small class="${cls(r)}">${esc(pct(T.apl ? r / T.apl * 100 : 0))}</small>`],
        ["Se resgatar tudo hoje", brl(T.liq) + ` <small class="hint">líquido</small>`],
        ["Rende por mês agora", "+" + brl(T.mes) + ` <small class="hint">bruto</small>`],
      ].map(([l, v]) => `<div class="kpi"><span class="label">${l}</span><b>${v}</b></div>`).join("");
      // Avisos gerais
      const al = [];
      const lento = T.itens.filter(({ a }) => a.indexador === "cdi" && Number(a.taxa) < 100 && !a.isento_ir);
      if (lento.length) al.push(`<span class="alert neg"><span>${lento.length === 1 ? "1 aplicação rende" : lento.length + " aplicações rendem"} menos que 100% do CDI. Veja em “Comparar bancos” onde renderia mais.</span></span>`);
      const fora = T.itens.filter(({ k }) => k.lim && k.p2 > 0);
      if (fora.length) al.push(`<span class="alert neg"><span>R$ ${num(fora.reduce((s, x) => s + x.k.p2, 0))} acima do limite da taxa turbinada.</span></span>`);
      $("#rf-alerts").innerHTML = al.join(""); $("#rf-alerts").hidden = !al.length;
      $("#rf-list").innerHTML = T.itens.slice().sort((x, y) => y.k.bruto - x.k.bruto).map(({ a, k }) => {
        const av = rfAvisos(a, k);
        return `<article class="rf-card" data-rf="${a.id}">
          <div class="rf-top">${bkHtml(a.banco)}<div class="rf-tt"><b>${esc(a.nome)}</b><span>${esc(a.banco)} · desde ${dataBR(a.data_aplicacao)}${k.dias ? ` (${num(k.dias, 0)} ${k.dias === 1 ? "dia" : "dias"})` : ""}${a.isento_ir ? " · isento de IR" : ""}${a.vencimento ? ` · vence ${dataBR(a.vencimento)}` : ""}</span></div><span class="rf-tx">${esc(taxaTxt(a))}${k.lim ? " até " + esc(brl(k.lim)) : ""}</span></div>
          <div class="rf-nums">
            <div><span class="label">Aplicado</span><b>${brl(k.valor)}</b></div>
            <div><span class="label">Valor hoje</span><b>${brl(k.bruto)}</b></div>
            <div><span class="label">Rendeu</span><b class="${cls(k.rend)}">${esc(sinal(k.rend, brl))}</b><small class="${cls(k.rend)}">${esc(pct(k.rendPct))}</small></div>
            <div><span class="label">Se resgatar hoje</span><b>${brl(k.liq)}</b>${k.iof + k.ir > 0.004 ? `<small class="hint" title="IR ${num(k.irPct, 1)}%${k.iofPct ? " e IOF " + k.iofPct + "%" : ""}">−${esc(brl(k.iof + k.ir))}</small>` : ""}</div>
            <div><span class="label">Rende por mês</span><b class="up">+${brl(k.mes)}</b></div>
          </div>
          <p class="hint" style="margin:8px 0 0">Em 12 meses, se o CDI ficar em ${num(C.anual, 2)}%: cerca de <b>${brl(k.liq12)}</b> líquido.</p>
          ${av.length ? `<div class="rf-avisos">${av.map(([c, t]) => `<div class="rf-av ${c}">${esc(t)}</div>`).join("")}</div>` : ""}
          <div class="rf-acts">${S.rfDel === a.id ? `<button type="button" class="btn sm danger" data-rf-del-ok="${a.id}">Confirmar remoção</button><button type="button" class="btn ghost sm" data-rf-del-no="1">Cancelar</button>` : `<button type="button" class="btn ghost sm" data-rf-edit="${a.id}">Editar</button><button type="button" class="btn ghost sm" data-rf-del="${a.id}">Remover</button>`}</div>
        </article>`;
      }).join("");
    }
    const cv = $("#rf-comp-valor"); if (!cv.value && document.activeElement !== cv) cv.placeholder = String(Math.round(T.apl || 5000));
    renderRFComp();
  }
  function renderRFComp() {
    const C = cdiInfo(); const v = Number($("#rf-comp-valor").value) || Math.round(rfTotais().apl) || 5000;
    const meus = new Set(S.rf.map((a) => a.produto));
    const hoje = hojeISO();
    const lista = RF_MOD.filter((m) => m.comparar !== false).map((m) => {
      const k = rfCalc({ produto: m.id, indexador: "cdi", taxa: m.taxa, limite: m.limite || null, taxa_excedente: m.exc != null ? m.exc : null, valor: v, data_aplicacao: hoje, isento_ir: false }, C);
      return { m, ganho: k.liq12 - v, mes: k.mes };
    }).sort((a, b) => b.ganho - a.ganho);
    const max = Math.max(...lista.map((x) => x.ganho), 1);
    $("#rf-comp-hint").textContent = `Quanto ${brl(v)} renderiam em 12 meses em cada opção, já descontado o IR (17,5% para 1 ano), com o CDI de hoje (${num(C.anual, 2)}% a.a.). Acima do limite de cada produto, consideramos 100% do CDI.`;
    $("#rf-comp-body").innerHTML = `<div class="rf-rank">${lista.map((x, i) => `<div class="rf-rk${meus.has(x.m.id) ? " meu" : ""}"><span class="n">${i + 1}</span>${bkHtml(x.m.banco)}<div class="t"><b>${esc(x.m.banco)} · ${esc(x.m.nome)}</b><span>${esc(num(x.m.taxa, 1).replace(",0", ""))}% do CDI${x.m.limite ? " até " + esc(brl(x.m.limite)) : ""} · ${esc(x.m.req || "")}${meus.has(x.m.id) ? " · você usa" : ""}</span><div class="rf-bar"><i style="width:${Math.max(4, x.ganho / max * 100).toFixed(1)}%"></i></div></div><div class="v">+${esc(brl(x.ganho))}<small>~${esc(brl(x.mes))}/mês</small></div></div>`).join("")}</div>`;
  }
  // Formulário
  (function montarSelect() {
    const grupos = {}; RF_MOD.forEach((m) => { const g = m.id === "outro" || m.banco === "Outro banco" ? "Outros" : m.banco; (grupos[g] = grupos[g] || []).push(m); });
    $("#rf-modelo").innerHTML = Object.entries(grupos).map(([g, ms]) => `<optgroup label="${esc(g)}">${ms.map((m) => `<option value="${m.id}">${esc(m.id === "outro" || m.banco === "Outro banco" ? m.nome : m.banco + " · " + m.nome)} — ${esc(m.indexador === "pre" ? "prefixado" : num(m.taxa, 1).replace(",0", "") + "% CDI")}</option>`).join("")}</optgroup>`).join("");
    $("#rf-modelo").value = "nubank_turbo";
  })();
  function rfMsg(t, ok) { const o = $("#rf-msg"); o.textContent = t; o.className = "form-msg " + (ok ? "up" : ok === false ? "down" : ""); }
  function rfAplicarModelo(manterValores) {
    const m = RF_MAP[$("#rf-modelo").value] || RF_MAP.outro;
    $("#rf-regras").innerHTML = m.regras || "";
    if (manterValores) return;
    $("#rf-taxa").value = m.taxa; $("#rf-banco").value = m.banco === "Outro banco" ? "" : m.banco; $("#rf-nome").value = m.id === "outro" ? "" : m.nome;
    $("#rf-idx").value = m.indexador || "cdi"; $("#rf-limite").value = m.limite || ""; $("#rf-exc").value = m.exc != null ? m.exc : "";
    $("#rf-isento").checked = !!m.isento; rfLbl();
    if (m.id === "outro" || m.banco === "Outro banco") $(".rf-mais").open = true;
  }
  function rfLbl() { $("#rf-taxa-lbl").textContent = $("#rf-idx").value === "pre" ? "Taxa (% ao ano)" : "Rende (% do CDI)"; }
  function rfLimparForm() {
    S.rfEdit = null; $("#rf-form").reset(); $("#rf-modelo").value = "nubank_turbo"; $("#rf-data").value = hojeISO(); rfAplicarModelo(false);
    $("#rf-submit").textContent = "Adicionar"; $("#rf-cancel").hidden = true; $("#rf-sum-txt").textContent = "Adicionar aplicação";
  }
  $("#rf-modelo").addEventListener("change", () => rfAplicarModelo(false));
  $("#rf-idx").addEventListener("change", rfLbl);
  $("#rf-cancel").addEventListener("click", () => { rfLimparForm(); rfMsg(""); });
  $("#rf-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!S.rfOk) { rfMsg("A renda fixa ainda não foi ativada no banco de dados.", false); return; }
    const m = RF_MAP[$("#rf-modelo").value] || RF_MAP.outro;
    const valor = Number($("#rf-valor").value), taxa = Number($("#rf-taxa").value), data = $("#rf-data").value;
    const banco = $("#rf-banco").value.trim(), nome = $("#rf-nome").value.trim();
    const limite = $("#rf-limite").value ? Number($("#rf-limite").value) : null, exc = $("#rf-exc").value !== "" ? Number($("#rf-exc").value) : null;
    const venc = $("#rf-venc").value || null;
    if (!(valor > 0)) return rfMsg("Informe o valor aplicado.", false);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data) || data < "2000-01-01") return rfMsg("Informe a data da aplicação.", false);
    if (!(taxa > 0 && taxa <= 300)) return rfMsg("Informe a taxa (por exemplo, 115 para 115% do CDI).", false);
    if (!banco || !nome) { $(".rf-mais").open = true; return rfMsg("Informe o banco e o nome da aplicação em “Mais opções”.", false); }
    if (limite != null && !(limite > 0)) return rfMsg("O limite precisa ser maior que zero (ou deixe em branco).", false);
    if (venc && venc < data) return rfMsg("O vencimento não pode ser antes da data da aplicação.", false);
    const row = { produto: m.id, banco: banco.slice(0, 60), nome: nome.slice(0, 80), indexador: $("#rf-idx").value === "pre" ? "pre" : "cdi", taxa, limite, taxa_excedente: exc, valor: Math.round(valor * 100) / 100, data_aplicacao: data, vencimento: venc, isento_ir: $("#rf-isento").checked };
    const b = $("#rf-submit"); b.disabled = true;
    try {
      const { error } = S.rfEdit ? await sb.from("renda_fixa").update(row).eq("id", S.rfEdit) : await sb.from("renda_fixa").insert(row);
      if (error) throw error;
      const editou = !!S.rfEdit; rfLimparForm(); rfMsg(editou ? "Aplicação atualizada." : "Aplicação adicionada.", true);
      await carregarRF(); aposRF();
    } catch (err) { rfMsg("Não foi possível salvar agora. Tente de novo.", false); }
    finally { b.disabled = false; }
  });
  $("#rf-list").addEventListener("click", async (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.rfEdit) {
      const a = S.rf.find((x) => String(x.id) === b.dataset.rfEdit); if (!a) return;
      S.rfEdit = a.id; $("#rf-modelo").value = RF_MAP[a.produto] ? a.produto : "outro"; rfAplicarModelo(true);
      $("#rf-valor").value = a.valor; $("#rf-data").value = a.data_aplicacao; $("#rf-taxa").value = a.taxa; $("#rf-banco").value = a.banco; $("#rf-nome").value = a.nome;
      $("#rf-idx").value = a.indexador; $("#rf-limite").value = a.limite || ""; $("#rf-exc").value = a.taxa_excedente != null ? a.taxa_excedente : ""; $("#rf-venc").value = a.vencimento || ""; $("#rf-isento").checked = !!a.isento_ir; rfLbl();
      $("#rf-submit").textContent = "Salvar alterações"; $("#rf-cancel").hidden = false; $("#rf-sum-txt").textContent = "Editar: " + a.nome; rfMsg("");
      $("#rf-addbox").open = true; $("#rf-addbox").scrollIntoView({ behavior: reduz ? "auto" : "smooth", block: "start" }); return;
    }
    if (b.dataset.rfDel) { S.rfDel = Number(b.dataset.rfDel); renderRF(); return; }
    if (b.dataset.rfDelNo) { S.rfDel = null; renderRF(); return; }
    if (b.dataset.rfDelOk) {
      const id = Number(b.dataset.rfDelOk); S.rfDel = null;
      const { error } = await sb.from("renda_fixa").delete().eq("id", id);
      if (error) { toast("Não foi possível remover agora."); return; }
      if (S.rfEdit === id) rfLimparForm();
      await carregarRF(); aposRF(); toast("Aplicação removida.");
    }
  });
  let tRfc; $("#rf-comp-valor").addEventListener("input", () => { clearTimeout(tRfc); tRfc = setTimeout(renderRFComp, 150); });
  rfLimparForm();

  /* ---------- Conversor de moedas ---------- */
  // Cotações em reais: AwesomeAPI direto do navegador (atualiza a cada minuto); se falhar, usa o dólar do
  // painel e as criptos da tabela de cotações
  const MOEDAS_CONV = [
    ["BRL", "Real brasileiro", "R$"], ["USD", "Dólar americano", "US$"], ["USDTUR", "Dólar turismo", "US$"], ["EUR", "Euro", "€"], ["GBP", "Libra esterlina", "£"],
    ["ARS", "Peso argentino", "AR$"], ["CAD", "Dólar canadense", "C$"], ["AUD", "Dólar australiano", "A$"], ["CHF", "Franco suíço", "CHF"],
    ["JPY", "Iene japonês", "¥"], ["CNY", "Yuan chinês", "¥"], ["MXN", "Peso mexicano", "MX$"], ["CLP", "Peso chileno", "CLP$"], ["UYU", "Peso uruguaio", "$U"], ["PYG", "Guarani paraguaio", "₲"],
    ["BTC", "Bitcoin", "₿"], ["ETH", "Ethereum", "Ξ"], ["SOL", "Solana", "SOL"],
  ];
  const PAR_API = { USD: "USD-BRL", USDTUR: "USD-BRLT", EUR: "EUR-BRL", GBP: "GBP-BRL", ARS: "ARS-BRL", CAD: "CAD-BRL", AUD: "AUD-BRL", CHF: "CHF-BRL", JPY: "JPY-BRL", CNY: "CNY-BRL", MXN: "MXN-BRL", CLP: "CLP-BRL", UYU: "UYU-BRL", PYG: "PYG-BRL", BTC: "BTC-BRL", ETH: "ETH-BRL", SOL: "SOL-BRL" };
  const CONV_INFO = Object.fromEntries(MOEDAS_CONV.map(([c, n, s]) => [c, { nome: n, simb: s }]));
  S.cambio = { itens: {}, em: null, fonte: null };
  let convUlt = 0, convVis = false;
  async function carregarCambio(forcar) {
    if (!forcar && Date.now() - convUlt < 55000) return;
    convUlt = Date.now();
    try {
      const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 10000);
      const r = await fetch("https://economia.awesomeapi.com.br/json/last/" + Object.values(PAR_API).join(","), { signal: ac.signal }).finally(() => clearTimeout(to));
      if (!r.ok) throw new Error("http " + r.status);
      const d = await r.json(); const it = {};
      Object.entries(PAR_API).forEach(([c, par]) => {
        const x = d[par.replace("-", "")]; const bid = x && Number(x.bid);
        if (bid > 0) it[c] = { valor: bid, compra: Number(x.bid), venda: Number(x.ask) || null, varDia: x.pctChange != null ? Number(x.pctChange) : null, em: x.timestamp ? new Date(Number(x.timestamp) * 1000).toISOString() : null };
      });
      if (!it.USD) throw new Error("sem dólar");
      S.cambio = { itens: it, em: new Date().toISOString(), fonte: "AwesomeAPI" };
    } catch (_) {
      // Reserva: dólar do painel do mercado e criptos da CoinGecko
      const it = { ...S.cambio.itens }; const m = S.painel.mercado || {};
      if (m.dolar && m.dolar.valor && !it.USD) it.USD = { valor: Number(m.dolar.valor), varDia: m.dolar.varDia, em: m.atualizadoEm || m._ts };
      [["BTC", "BTC-BRL"], ["ETH", "ETH-BRL"], ["SOL", "SOL-BRL"]].forEach(([c, t]) => { const q = S.cotMap[t]; if (q && !it[c]) it[c] = { valor: Number(q.preco), varDia: Number(q.var_dia), em: q.atualizado_em }; });
      S.cambio = { itens: it, em: S.cambio.em, fonte: S.cambio.fonte || "painel do Radar (pode estar alguns minutos atrasado)" };
    }
    renderConv();
  }
  const taxaBRL = (c) => c === "BRL" ? 1 : (S.cambio.itens[c] && S.cambio.itens[c].valor) || null;
  const lerNum = (s) => { s = String(s || "").trim().replace(/\s/g, ""); if (/,/.test(s)) s = s.replace(/\./g, "").replace(",", "."); const n = Number(s); return isFinite(n) ? n : NaN; };
  const fmtMoeda = (v, c) => { if (v == null || isNaN(v)) return "—"; const a = Math.abs(v); const dec = c === "BTC" || c === "ETH" ? 8 : c === "SOL" ? 6 : a !== 0 && a < 1 ? 6 : a >= 1e5 && ["JPY", "CLP", "PYG", "ARS"].includes(c) ? 0 : 2; return `${CONV_INFO[c].simb} ${Number(v).toLocaleString("pt-BR", { minimumFractionDigits: Math.min(2, dec), maximumFractionDigits: dec })}`; };
  (function montarConv() {
    const opts = MOEDAS_CONV.map(([c, n]) => `<option value="${c}">${c === "USDTUR" ? "USD turismo" : c} · ${esc(n)}</option>`).join("");
    $("#conv-de").innerHTML = opts; $("#conv-para").innerHTML = opts;
    let pref = null; try { pref = JSON.parse(localStorage.getItem("conv") || "null"); } catch (_) { /* sem storage */ }
    $("#conv-de").value = pref && CONV_INFO[pref.de] ? pref.de : "USD"; $("#conv-para").value = pref && CONV_INFO[pref.para] ? pref.para : "BRL";
    const salvar = () => { try { localStorage.setItem("conv", JSON.stringify({ de: $("#conv-de").value, para: $("#conv-para").value })); } catch (_) { /* sem storage */ } };
    ["#conv-valor", "#conv-de", "#conv-para", "#conv-iof"].forEach((sel) => $(sel).addEventListener(sel === "#conv-valor" ? "input" : "change", () => { salvar(); renderConv(); }));
    $("#conv-form").addEventListener("submit", (e) => e.preventDefault());
    $("#conv-troca").addEventListener("click", () => { const a = $("#conv-de").value; $("#conv-de").value = $("#conv-para").value; $("#conv-para").value = a; salvar(); renderConv(); });
    $("#conv-tx").addEventListener("click", (e) => { const b = e.target.closest("[data-moeda]"); if (!b) return; const c = b.dataset.moeda; if ($("#conv-para").value === c) $("#conv-para").value = "BRL"; $("#conv-de").value = c; salvar(); renderConv(); });
    $("#conv-res").addEventListener("click", (e) => { if (e.target.closest("[data-conv-atualizar]")) carregarCambio(true); });
    // Atualiza a cada minuto só enquanto o conversor está na tela e a aba está aberta
    if ("IntersectionObserver" in window) new IntersectionObserver((es) => { convVis = es.some((x) => x.isIntersecting); if (convVis && S.user) carregarCambio(); }).observe($("#sec-conv"));
    setInterval(() => { if (S.user && convVis && document.visibilityState === "visible") carregarCambio(); }, 60000);
  })();
  function renderConv() {
    const de = $("#conv-de").value, para = $("#conv-para").value, v = lerNum($("#conv-valor").value);
    const tDe = taxaBRL(de), tPara = taxaBRL(para), iof = $("#conv-iof").checked;
    let res = "";
    if (!tDe || !tPara) res = `<p class="skel">${Object.keys(S.cambio.itens).length ? "Cotação indisponível para essa moeda agora." : "Buscando cotações…"}</p>`;
    else if (isNaN(v)) res = `<p class="skel">Digite um valor, como 100 ou 1.250,50.</p>`;
    else {
      let out = v * tDe / tPara;
      // IOF do cartão: incide sobre a compra em moeda estrangeira paga em reais
      const comIof = iof && para === "BRL" && de !== "BRL" ? out * 1.035 : iof && de === "BRL" && para !== "BRL" ? out / 1.035 : null;
      const um = tDe / tPara;
      const ref = de === "BRL" ? para : de; const x = S.cambio.itens[ref];
      res = `<div class="de">${esc(fmtMoeda(v, de))} (${esc(CONV_INFO[de].nome)}) =</div>
        <div class="para">${esc(fmtMoeda(comIof != null ? comIof : out, para))}</div>
        ${comIof != null ? `<div class="tx">Sem IOF: <b>${esc(fmtMoeda(out, para))}</b> · IOF de 3,5%: <b>${esc(fmtMoeda(Math.abs(comIof - out), para === "BRL" ? "BRL" : para))}</b></div>` : ""}
        <div class="tx">1 ${de === "USDTUR" ? "USD turismo" : de} = <b>${esc(um >= 0.01 && um < 1000 && !["BTC", "ETH", "SOL"].includes(para) ? CONV_INFO[para].simb + " " + num(um, 4) : fmtMoeda(um, para))}</b>${x && x.varDia != null ? ` · ${esc(CONV_INFO[ref].nome)} <span class="${cls(x.varDia)}">${esc(pct(x.varDia))}</span> hoje` : ""}${x && x.venda && x.compra && ref !== "BTC" && ref !== "ETH" && ref !== "SOL" ? ` · compra ${esc(num(x.compra, 4))} / venda ${esc(num(x.venda, 4))}` : ""}${x && x.em ? ` · cotação de ${esc(new Date(x.em).toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" }))}` : ""} <button type="button" class="btn ghost sm" data-conv-atualizar="1" title="Atualizar agora">${IC("arrow-clockwise")} atualizar</button></div>`;
    }
    $("#conv-res").innerHTML = res;
    $("#conv-when").textContent = S.cambio.em ? "Atualizado às " + new Date(S.cambio.em).toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" }) : "";
    $("#conv-iof").parentElement.hidden = !((de === "BRL") !== (para === "BRL"));
    const chips = ["USD", "USDTUR", "EUR", "GBP", "ARS", "BTC"].filter((c) => S.cambio.itens[c]);
    $("#conv-tx").innerHTML = chips.map((c) => { const x = S.cambio.itens[c]; return `<button type="button" data-moeda="${c}" aria-pressed="${de === c}"><span class="c">${esc(CONV_INFO[c].nome)}</span><b>${esc(c === "BTC" ? "R$ " + compacto(x.valor) : brlPx(x.valor).replace(/(,\d{2})$/, "$1"))}</b>${x.varDia != null ? `<small class="${cls(x.varDia)}">${esc(pct(x.varDia))}</small>` : ""}</button>`; }).join("");
    $("#conv-fonte").textContent = S.cambio.fonte && S.cambio.fonte !== "AwesomeAPI" ? "A fonte em tempo real não respondeu; usando a reserva: " + S.cambio.fonte + "." : "Câmbio comercial, atualizado a cada minuto com a página aberta (AwesomeAPI). Casas de câmbio e cartões cobram mais: use o dólar turismo como referência para viagem.";
  }

  /* ---------- Perfil e ranking de investidores ---------- */
  const UFS = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  const PAISES = [["BR", "Brasil"], ["PT", "Portugal"], ["US", "Estados Unidos"], ["AR", "Argentina"], ["UY", "Uruguai"], ["PY", "Paraguai"], ["CL", "Chile"], ["CA", "Canadá"], ["GB", "Reino Unido"], ["DE", "Alemanha"], ["JP", "Japão"], ["OU", "Outro"]];
  const ESTILOS = { dividendos: "Caçador de dividendos", crescimento: "Crescimento", valor: "Valor (ações baratas)", indices: "ETFs e índices", cripto: "Cripto", equilibrado: "Equilibrado", iniciante: "Começando agora" };
  const IC = (n, o) => (window.RI ? window.RI.svg(n, o) : "");
  // Avatares (ícones). Chave curta (até 8 letras) gravada em perfis.avatar
  const AVATARES = [["gato", "cat"], ["cao", "dog"], ["passaro", "bird"], ["peixe", "fish"], ["cavalo", "horse"], ["coelho", "rabbit"], ["borbo", "butterfly"], ["touro", "cow"],
    ["pata", "paw-print"], ["foguete", "rocket"], ["gema", "diamond"], ["broto", "plant"], ["fogo", "fire"], ["raio", "lightning"], ["alvo", "target"], ["mente", "brain"],
    ["banco", "bank"], ["globo", "globe-hemisphere-west"], ["cafe", "coffee"], ["dado", "dice-five"], ["escudo", "shield"], ["game", "game-controller"], ["robo", "robot"], ["et", "alien"],
    ["fantasma", "ghost"], ["coroa", "crown"], ["planeta", "planet"], ["arvore", "tree"], ["sol", "sun"], ["lua", "moon-stars"], ["grafico", "chart-line-up"], ["porquin", "piggy-bank"],
    ["ancora", "anchor"], ["monte", "mountains"], ["lotus", "flower-lotus"], ["musica", "music-notes"], ["cacto", "cactus"], ["folha", "leaf"], ["coracao", "heart"], ["bola", "football"],
    ["guitarra", "guitar"], ["pincel", "paint-brush"], ["camera", "camera"], ["aviao", "airplane-tilt"], ["livro", "book-open"], ["codigo", "code"], ["haltere", "barbell"], ["pizza", "pizza"], ["barco", "sailboat"]];
  const AV_IC = Object.fromEntries(AVATARES);
  // Perfis antigos guardaram emoji: converte para o ícone mais próximo
  const AV_ANTIGO = { "🦉": "passaro", "🐂": "touro", "🐻": "pata", "🦈": "peixe", "🦁": "coroa", "🐢": "broto", "🐺": "cao", "🦊": "gato", "🐼": "pata", "🐧": "passaro", "🚀": "foguete", "💎": "gema", "🌱": "broto", "🔥": "fogo", "⚡": "raio", "🎯": "alvo", "🧠": "mente", "🏦": "banco", "🌎": "globo", "☕": "cafe", "🎲": "dado", "🛡️": "escudo", "🛡": "escudo", "👾": "et", "🤖": "robo" };
  const avKey = (v) => !v ? "" : AV_IC[v] ? v : AV_ANTIGO[v] || "";
  const CORES = ["#2457F5", "#7C3AED", "#DB2777", "#E11D48", "#EA580C", "#CA8A04", "#16A34A", "#0F9D8A", "#0891B2", "#475569", "#111827", "#9333EA"];
  const CAPAS = [["cor", "Sua cor"], ["aurora", "Aurora"], ["oceano", "Oceano"], ["solar", "Pôr do sol"], ["floresta", "Floresta"], ["noite", "Noite"], ["grafite", "Grafite"], ["neon", "Neon"], ["ouro", "Ouro"]];
  // Boneco do escritório: uma letra por opção e um caractere de valor (0-9, depois a-z), ex.: p1c0k1b0l0o0a2w2r0e0s0
  // p pele, c cabelo, k corte, b barba, l calça, o óculos, a altura, w corpo, r roupa, e parte de baixo, s cor do calçado,
  // u cor da roupa, f calçado, h acessório de cabeça, j extra, i olhos
  const BONECO = {
    p: ["#F6D3B3", "#F2C3A0", "#D9A27A", "#B07850", "#7A4E33", "#4F3123", "#FFE3CC", "#3A2218"],
    c: ["#2B1B12", "#3B261B", "#6B4226", "#A86B3C", "#D9B26A", "#EFDDB0", "#8E8E8E", "#B33A2A", "#2F4FC0", "#D9568E", "#121212", "#E8E8E8", "#C4552B", "#7C4BC7"],
    k: ["Topete", "Curto", "Raspado", "Comprido", "Cacheado", "Black power", "Coque", "Moicano", "Rabo de cavalo", "Careca", "Lateral", "Franja", "Ondulado", "Espetado", "Undercut", "Tranças", "Chanel"],
    b: ["Sem barba", "Cavanhaque", "Barba cheia", "Bigode", "Barba rala", "Lenhador"],
    l: ["#2F3B52", "#1F2937", "#5B4636", "#3F5F45", "#D6CDBB", "#6F86B5", "#111318", "#A0643A", "#7F1D1D", "#9CA3AF"], o: ["Sem óculos", "Redondo", "Quadrado"],
    a: ["Bem baixo", "Baixo", "Médio", "Alto", "Bem alto"], w: ["Magro", "Esguio", "Médio", "Forte", "Grandão"],
    r: ["Polo", "Camiseta", "Moletom", "Social", "Jaqueta", "Regata", "Terno", "Blazer", "Xadrez", "Havaiana", "Agasalho", "Camisa", "Colete", "Suéter", "Listrada", "Jeans", "Time", "Vestido"],
    e: ["Calça", "Bermuda", "Saia", "Jogger", "Shorts"], s: ["#1B2230", "#F4F6F8", "#C02626", "#7C4A21", "#2563EB", "#16A34A", "#F59E0B", "#7C3AED", "#EC4899", "#0EA5E9"],
    u: [null, "#F8FAFC", "#111827", "#DC2626", "#EA580C", "#FACC15", "#16A34A", "#0D9488", "#2563EB", "#7C3AED", "#DB2777", "#92400E", "#6B7280", "#0F766E"],
    f: ["Tênis", "Cano alto", "Sapato", "Bota", "Corrida"], h: ["Nenhum", "Fone", "Gorro", "Faixa", "Laço", "Boné virado"],
    j: ["Nenhum", "Relógio", "Colar", "Brincos", "Relógio e colar", "Mochila"], i: ["#3A2214", "#140C08", "#2F6FB5", "#3E7A3A", "#8A6A2F", "#5E6E7A"],
  };
  const BN_CH = "pckbloawresufhji";
  const BN_PAD = { p: 1, c: 1, k: 0, b: 0, l: 0, o: 0, a: 2, w: 2, r: 0, e: 0, s: 0, u: 0, f: 0, h: 0, j: 0, i: 0 };
  const bonecoLer = (v) => { const r = { ...BN_PAD }; String(v || "").replace(/([pckbloawresufhji])([0-9a-z])/g, (_, k, d) => { const n = parseInt(d, 36); if (BONECO[k] && n < BONECO[k].length) r[k] = n; }); return r; };
  const bonecoTxt = (o) => BN_CH.split("").map((k) => k + (o[k] ?? BN_PAD[k]).toString(36)).join("");
  const bonecoLocal = () => { try { return localStorage.getItem("radar-boneco") || ""; } catch (_) { return ""; } };
  const CATS = [["rentabilidade", "Rentabilidade", "resultado sobre o preço médio", "chart-line-up"], ["dividendos", "Dividendos", "dividend yield de 12 meses", "coins"], ["hoje", "Hoje", "variação do dia", "lightning"], ["diversificacao", "Diversificação", "nota de 0 a 100", "chart-pie-slice"], ["proventos", "Proventos", "proventos em reais, só de quem mostra valores", "hand-coins"], ["patrimonio", "Patrimônio", "só de quem mostra valores", "bank"]];
  const ESCOPOS = [["cidade", "Minha cidade"], ["estado", "Meu estado"], ["brasil", "Brasil"], ["mundo", "Mundo"]];
  // Recompensas: faixas de patrimônio (tudo o que você investe, renda fixa incluída) e conquistas. Quem libera é o servidor.
  const NIVEIS = [["Iniciante", 0], ["Bronze", 1e3], ["Prata", 1e4], ["Ouro", 5e4], ["Platina", 1e5], ["Diamante", 5e5], ["Lenda", 1e6]];
  const ITENS = [
    { id: "m_basica", t: "m", nome: "Clássica", req: "Livre", g: "livre" },
    { id: "m_bronze", t: "m", nome: "Bronze", req: "R$ 1 mil investidos", g: "nivel", n: 1 },
    { id: "m_prata", t: "m", nome: "Prata", req: "R$ 10 mil investidos", g: "nivel", n: 2 },
    { id: "m_ouro", t: "m", nome: "Ouro", req: "R$ 50 mil investidos", g: "nivel", n: 3 },
    { id: "m_platina", t: "m", nome: "Platina", req: "R$ 100 mil investidos", g: "nivel", n: 4 },
    { id: "m_diamante", t: "m", nome: "Diamante", req: "R$ 500 mil investidos", g: "nivel", n: 5 },
    { id: "m_lenda", t: "m", nome: "Lenda", req: "R$ 1 milhão investido", g: "nivel", n: 6 },
    { id: "a_bone", t: "a", nome: "Boné", ic: "baseball-cap", c: "#2563EB", pos: "topo", req: "Livre", g: "livre" },
    { id: "a_broto", t: "a", nome: "Brotinho", ic: "plant", c: "#16A34A", pos: "topo", req: "Livre", g: "livre" },
    { id: "a_cafe", t: "a", nome: "Cafezinho", ic: "coffee", c: "#92400E", pos: "canto", req: "Livre", g: "livre" },
    { id: "a_formatura", t: "a", nome: "Capelo", ic: "graduation-cap", c: "#1E293B", pos: "topo", req: "R$ 1 mil investidos", g: "nivel", n: 1 },
    { id: "a_oculos", t: "a", nome: "Óculos escuros", ic: "sunglasses", c: "#0F172A", pos: "canto", req: "R$ 10 mil investidos", g: "nivel", n: 2 },
    { id: "a_cartola", t: "a", nome: "Coroa", ic: "crown", c: "#D97706", pos: "topo", req: "R$ 50 mil investidos", g: "nivel", n: 3 },
    { id: "a_maleta", t: "a", nome: "Maleta", ic: "briefcase", c: "#7C4A1E", pos: "canto", req: "R$ 100 mil investidos", g: "nivel", n: 4 },
    { id: "a_diamante", t: "a", nome: "Diamante", ic: "diamond", c: "#0891B2", pos: "canto", req: "R$ 500 mil investidos", g: "nivel", n: 5 },
    { id: "a_dragao", t: "a", nome: "Chama lendária", ic: "flame", c: "#EA580C", pos: "canto", req: "R$ 1 milhão investido", g: "nivel", n: 6 },
    { id: "a_saco", t: "a", nome: "Saco de dividendos", ic: "coins", c: "#CA8A04", pos: "canto", req: "Dividend yield de 6% ou mais", g: "conq" },
    { id: "a_arcoiris", t: "a", nome: "Arco-íris", ic: "rainbow", c: "#DB2777", pos: "canto", req: "Diversificação 70 ou mais", g: "conq" },
    { id: "a_foguete", t: "a", nome: "Foguete", ic: "rocket", c: "#E11D48", pos: "canto", req: "Ter cripto na carteira", g: "conq" },
    { id: "a_alvo", t: "a", nome: "Alvo", ic: "target", c: "#DC2626", pos: "canto", req: "10 investimentos ou mais", g: "conq" },
    { id: "a_touro", t: "a", nome: "Touro", ic: "cow", c: "#B45309", pos: "canto", req: "Rentabilidade de 20% ou mais", g: "conq" },
    { id: "a_escudo", t: "a", nome: "Reserva de emergência", ic: "shield-check", c: "#0F9D8A", pos: "canto", req: "R$ 5 mil ou mais em renda fixa", g: "conq" },
    { id: "a_globo", t: "a", nome: "Internacional", ic: "globe-hemisphere-west", c: "#2563EB", pos: "canto", req: "Ter um ativo em dólar", g: "conq" },
    { id: "a_completa", t: "a", nome: "Carteira completa", ic: "puzzle-piece", c: "#7C3AED", pos: "canto", req: "4 classes de ativos, com renda fixa", g: "conq" },
    { id: "a_renda", t: "a", nome: "Renda passiva", ic: "piggy-bank", c: "#DB2777", pos: "canto", req: "R$ 1 mil de proventos em 12 meses", g: "conq" },
    { id: "a_estrela", t: "a", nome: "Estrela", ic: "star", c: "#EAB308", pos: "canto", req: "30 dias no Radar", g: "conq" },
    { id: "a_medalha", t: "a", nome: "Medalha", ic: "medal", c: "#CA8A04", pos: "canto", req: "1 ano no Radar", g: "conq" },
  ];
  // O que cada faixa libera também no escritório 3D
  const DECOR_NV = { 1: "Cachorro", 2: "Aquário", 3: "Fliperama", 4: "Touro de ouro", 5: "Globo de festa", 6: "Cofre de ouro" };
  const accHtml = (ac) => `<span class="acc ${ac.pos}" style="--acc:${ac.c}">${IC(ac.ic + ":d")}</span>`;
  const ITEM = Object.fromEntries(ITENS.map((i) => [i.id, i]));
  S.perfil = null; S.perfilOk = true; S.v2 = true; S.conq = undefined; S.rk = { escopo: "brasil", cat: "rentabilidade", dados: null, carregando: false };
  const fotoOk = (f) => typeof f === "string" && /^data:image\/(webp|jpeg|png);base64,[A-Za-z0-9+/=]+$/.test(f);
  // Avatar com foto ou ícone, moldura e acessório. tam: px (true = 48)
  const avHtml = (p, tam, o = {}) => {
    const s = tam === true ? 48 : tam || 34;
    const e = p && p.avatar, foto = p && fotoOk(p.foto) ? p.foto : null;
    const ini = p ? String(p.nome || p.apelido || "?").trim().slice(0, 1).toUpperCase() : "?";
    const mol = p && p.moldura && ITEM[p.moldura] ? p.moldura.slice(2) : "";
    const ac = p && p.acessorio && ITEM[p.acessorio]; const mostraAc = ac && !(o.semTopo && ac.pos === "topo");
    const k = avKey(e);
    return `<span class="avw${mol ? " mol mol-" + mol : ""}" style="--s:${s}px;--avc:${esc((p && p.cor) || "#2457F5")}" aria-hidden="true"><span class="av${k && !foto ? " icone" : ""}">${foto ? `<img src="${esc(foto)}" alt="" decoding="async">` : k ? IC(AV_IC[k] + ":f") : esc(ini)}</span>${mostraAc ? accHtml(ac) : ""}</span>`;
  };
  const COROA = `<span class="coroa" aria-hidden="true"><svg viewBox="0 0 64 50"><defs><linearGradient id="cg-coroa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF1A8"/><stop offset=".5" stop-color="#FFC21A"/><stop offset="1" stop-color="#D98A00"/></linearGradient></defs><path d="M7 40 3 13l14 11L32 4l15 20 14-11-4 27Z" fill="url(#cg-coroa)" stroke="#B26F00" stroke-width="2.2" stroke-linejoin="round"/><rect x="6" y="38" width="52" height="8" rx="2.5" fill="url(#cg-coroa)" stroke="#B26F00" stroke-width="2.2"/><circle cx="32" cy="28" r="4.2" fill="#E11D48" stroke="#fff" stroke-width="1.2"/><circle cx="19" cy="31" r="3" fill="#2457F5" stroke="#fff" stroke-width="1"/><circle cx="45" cy="31" r="3" fill="#16A34A" stroke="#fff" stroke-width="1"/><circle cx="3" cy="13" r="3" fill="#FFE27A" stroke="#B26F00" stroke-width="1.4"/><circle cx="32" cy="4" r="3.4" fill="#FFE27A" stroke="#B26F00" stroke-width="1.4"/><circle cx="61" cy="13" r="3" fill="#FFE27A" stroke="#B26F00" stroke-width="1.4"/></svg><i class="lustre"></i><i class="sp s1">${IC("sparkle")}</i><i class="sp s2">${IC("sparkle")}</i><i class="sp s3">${IC("sparkle")}</i></span>`;
  const ondeTxt = (p) => [p.cidade, p.uf, p.pais && p.pais !== "BR" ? (PAISES.find((x) => x[0] === p.pais) || [, p.pais])[1] : null].filter(Boolean).join(" · ");
  const fmtCat = (cat, v) => v == null ? "—" : cat === "proventos" || cat === "patrimonio" ? brl(v) : cat === "diversificacao" ? num(v, 0) : (v > 0 && cat !== "dividendos" ? "+" : "") + num(v, 2) + "%";

  async function carregarPerfil() {
    const { data, error } = await sb.from("perfis").select("*").maybeSingle();
    if (error) { S.perfilOk = !/relation|does not exist|schema cache/i.test(error.message || ""); S.perfil = null; }
    else { S.perfilOk = true; S.perfil = data; }
    const t = $("#pf-av-top"); t.outerHTML = avHtml(S.perfil).replace('class="av', 'id="pf-av-top" class="av');
    $("#btn-perfil").hidden = !S.user;
  }
  function abrirDrawerPf() { const d = $("#pf-drawer"); if (d.hidden) { d.hidden = false; document.body.classList.add("no-scroll"); } $("#pf-body").scrollTop = 0; }
  function fecharPf() { const d = $("#pf-drawer"); if (d.hidden) return; d.hidden = true; if (vitrine) { vitrine.destruir(); vitrine = null; } if ($("#emp-drawer").hidden) document.body.classList.remove("no-scroll"); }
  document.addEventListener("click", (e) => { if (e.target.closest("[data-pf-close]")) fecharPf(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#pf-drawer").hidden && $("#emp-drawer").hidden) fecharPf(); });
  $("#btn-perfil").addEventListener("click", () => abrirMeuPerfil());

  // Edição do meu perfil
  async function carregarConquistas() {
    const { data, error } = await sb.rpc("minhas_conquistas");
    if (error) { S.v2 = !/minhas_conquistas|function|schema cache|does not exist/i.test(error.message || ""); S.conq = null; }
    else { S.v2 = true; S.conq = data || {}; }
  }
  function nivelDe(patr) { let n = 0; NIVEIS.forEach(([, min], i) => { if (patr >= min) n = i; }); return n; }
  // Tudo o que a pessoa investe (renda variável com cotação + renda fixa), para recompensas e conquistas
  function meusNumeros() {
    let rv = 0, prov = 0, usd = false, cripto = false; const cls = new Set();
    try {
      if (S.carteira.length) {
        const L = linhas(); rv = L.patr; prov = totais(L.rows).prov || 0;
        L.rows.forEach((r) => { if (!r.valor) return; cls.add(r.classe); if (r.moeda === "USD") usd = true; if (r.classe === "cripto") cripto = true; });
      }
    } catch (_) { /* sem cotações ainda */ }
    let rf = 0; try { if (S.rf && S.rf.length) rf = rfTotais().bruto; } catch (_) { /* sem CDI ainda */ }
    if (rf > 0) cls.add("rf");
    return { rv, rf, patr: rv + rf, prov, n: S.carteira.length + ((S.rf && S.rf.length) || 0), ncls: cls.size, usd, cripto };
  }
  const diasNoRadar = () => S.perfil && S.perfil.criado_em ? Math.max(0, Math.floor((Date.now() - Date.parse(S.perfil.criado_em)) / 864e5)) : 0;
  const curto = (v) => v >= 1e6 ? "R$ " + num(v / 1e6, 0) + " mi" : "R$ " + num(v / 1e3, 0) + " mil";
  // Progresso de cada conquista: [atual, meta, texto]
  const CONQ = {
    a_saco: (N, C) => C && C.dy_pct != null ? [Number(C.dy_pct), 6, `${num(C.dy_pct, 1)}% de 6%`] : [0, 6, "aparece depois do primeiro cálculo"],
    a_arcoiris: (N, C) => C && C.div_score != null ? [Number(C.div_score), 70, `${C.div_score} de 70`] : [0, 70, "aparece depois do primeiro cálculo"],
    a_foguete: (N) => [N.cripto ? 1 : 0, 1, N.cripto ? "Você tem cripto" : "Nenhuma cripto ainda"],
    a_alvo: (N) => [N.n, 10, `${N.n} de 10 (ativos e aplicações)`],
    a_touro: (N, C) => C && C.rent_pct != null ? [Number(C.rent_pct), 20, `${pct(C.rent_pct)} de +20%`] : [0, 20, "aparece depois do primeiro cálculo"],
    a_escudo: (N) => [N.rf, 5000, `${brl(N.rf)} de ${brl(5000)}`],
    a_globo: (N) => [N.usd ? 1 : 0, 1, N.usd ? "Você tem ativo em dólar" : "Nenhum ativo em dólar ainda"],
    a_completa: (N) => [N.rf > 0 ? N.ncls : Math.min(N.ncls, 3), 4, `${N.ncls} de 4 classes${N.rf > 0 ? "" : " (falta renda fixa)"}`],
    a_renda: (N) => [N.prov, 1000, `${brl(N.prov)} de ${brl(1000)} por ano`],
    a_estrela: () => { const d = diasNoRadar(); return [d, 30, `${Math.min(d, 30)} de 30 dias`]; },
    a_medalha: () => { const d = diasNoRadar(); return [d, 365, `${Math.min(d, 365)} de 365 dias`]; },
  };
  let vitrine = null;
  async function abrirMeuPerfil(pf0) {
    abrirDrawerPf();
    const p = S.perfil || {};
    const pend = { avatar: avKey(p.avatar), cor: p.cor || CORES[0], foto: fotoOk(p.foto) ? p.foto : null, moldura: p.moldura || null, acessorio: p.acessorio || null, aba: "m",
      capa: p.capa || "cor", boneco: bonecoLer(p.boneco || bonecoLocal()) };
    $("#pf-av").outerHTML = avHtml(S.perfil, true).replace('class="av', 'id="pf-av" class="av');
    $("#pf-titulo").textContent = S.perfil ? "@" + S.perfil.apelido : "Criar meu perfil";
    $("#pf-sub").textContent = "Seu cartão, suas recompensas e, na outra aba, o boneco do escritório";
    if (!S.perfilOk) { $("#pf-body").innerHTML = `<div class="empty"><strong>Ranking ainda não ativado</strong>Falta criar as tabelas no banco (supabase/migrations/20261027_comunidade.sql).</div>`; return; }
    $("#pf-body").innerHTML = `<div class="carregando"><i></i><i style="width:80%"></i></div>`;
    await carregarConquistas();
    const lib = new Set((S.conq && S.conq.itens) || ["m_basica", "a_bone", "a_broto", "a_cafe"]);
    const N = meusNumeros(); const patr = N.patr; const nv = nivelDe(patr);
    const prox = NIVEIS[nv + 1]; const ini = NIVEIS[nv][1];
    const pctNv = prox ? Math.max(0, Math.min(100, (patr - ini) / (prox[1] - ini) * 100)) : 100;
    const nvServ = S.conq && S.conq.nivel != null ? S.conq.nivel : null;
    const aviso = !S.v2 ? "" : !S.conq || nvServ == null ? "As recompensas aparecem depois que você entra no ranking (o Radar confere a carteira e a renda fixa a cada 15 minutos)."
      : S.conq.verificado || (S.conq.motivos || []).every((x) => /7 dias/.test(x)) ? (nvServ < nv ? `A faixa ${NIVEIS[nv][0]} libera depois de 7 dias seguidos com esse valor investido (regra anti-troll: vale o menor valor da semana).` : "")
      : "Recompensas pausadas: " + (S.conq.motivos || []).filter((x) => !/7 dias/.test(x)).join("; ") + ".";
    const acDe = (n) => ITENS.find((i) => i.t === "a" && i.n === n);
    const conqs = ITENS.filter((i) => i.g === "conq");
    const nConq = conqs.filter((i) => lib.has(i.id)).length;
    const sw = (k, cor, i) => cor ? `<button type="button" class="bn-sw" data-bn="${k}" data-v="${i}" style="--c:${cor}" aria-pressed="${pend.boneco[k] === i}" aria-label="${{ p: "Tom de pele", c: "Cor do cabelo", l: "Cor da calça", s: "Cor do calçado", u: "Cor da roupa", i: "Cor dos olhos" }[k]} ${i + 1}"></button>`
      : `<button type="button" class="bn-sw bn-sw-perfil" data-bn="${k}" data-v="${i}" style="--c:${esc(pend.cor)}" aria-pressed="${pend.boneco[k] === i}" aria-label="Cor do perfil" title="Cor do perfil">${IC("user-circle")}</button>`;
    const seg = (k) => BONECO[k].map((n, i) => `<button type="button" data-bn="${k}" data-v="${i}" aria-pressed="${pend.boneco[k] === i}">${esc(n)}</button>`).join("");
    $("#pf-body").innerHTML = `<form id="pf-form" class="pf-ed" autocomplete="off" novalidate>
      <div class="seg pf-tabs" role="tablist" aria-label="Partes do perfil"><button type="button" role="tab" id="pft-perfil" data-pftab="perfil" aria-controls="pfs-perfil" aria-selected="true">${IC("user-circle")} Perfil</button><button type="button" role="tab" id="pft-boneco" data-pftab="boneco" aria-controls="pfs-boneco" aria-selected="false">${IC("t-shirt")} Boneco</button></div>
      <div id="pfs-perfil" role="tabpanel" aria-labelledby="pft-perfil">
      <div class="pf-hero" id="pf-hero"></div>
      <section class="panel pf-sec"><h3>${IC("palette")} Aparência</h3>
        <div class="pf-foto">${S.v2 ? `<button type="button" class="btn sm" id="pf-foto-btn">${IC("camera")} <span>${pend.foto ? "Trocar foto" : "Enviar foto"}</span></button><button type="button" class="btn ghost sm" id="pf-foto-rm"${pend.foto ? "" : " hidden"}>${IC("trash")} Remover foto</button><input type="file" id="pf-file" accept="image/*" hidden>` : ""}</div>
        <span class="label">Ícone${pend.foto ? " (aparece se tirar a foto)" : ""}</span>
        <div class="pf-icones" id="pf-icones"><button type="button" data-av="" aria-pressed="${!pend.avatar}" title="Inicial do nome">Aa</button>${AVATARES.map(([k, ic]) => `<button type="button" data-av="${k}" aria-pressed="${pend.avatar === k}" title="${k}">${IC(ic + ":d")}</button>`).join("")}</div>
        <span class="label">Cor</span>
        <div class="pf-cores" id="pf-cores">${CORES.map((c) => `<button type="button" data-cor="${c}" style="--c:${c}" aria-pressed="${pend.cor === c}" aria-label="Cor ${c}"></button>`).join("")}<label class="pf-cor-livre" title="Escolher qualquer cor">${IC("eyedropper")}<input type="color" id="pf-cor-livre" value="${esc(pend.cor)}" aria-label="Escolher qualquer cor"></label></div>
        <span class="label">Capa do cartão</span>
        <div class="pf-capas" id="pf-capas">${CAPAS.map(([k, n]) => `<button type="button" data-capa="${k}" class="capa-${k}" aria-pressed="${pend.capa === k}"><i></i><span>${esc(n)}</span></button>`).join("")}</div>
      </section>
      </div>
      <div id="pfs-boneco" role="tabpanel" aria-labelledby="pft-boneco" hidden>
      <section class="panel pf-sec"><h3>${IC("t-shirt")} Seu boneco no escritório</h3>
        <div class="pf-bn">
          <div class="pf-bn-3d" id="pf-bn-3d" aria-label="Prévia do boneco"></div>
          <div class="pf-bn-op">
            <span class="label">Pele</span><div class="bn-sws">${BONECO.p.map((c, i) => sw("p", c, i)).join("")}</div>
            <span class="label">Olhos</span><div class="bn-sws">${BONECO.i.map((c, i) => sw("i", c, i)).join("")}</div>
            <span class="label">Altura</span><div class="bn-seg">${seg("a")}</div>
            <span class="label">Corpo</span><div class="bn-seg">${seg("w")}</div>
            <span class="label">Cabelo</span><div class="bn-sws">${BONECO.c.map((c, i) => sw("c", c, i)).join("")}</div>
            <span class="label">Corte</span><div class="bn-seg">${seg("k")}</div>
            <span class="label">Barba</span><div class="bn-seg">${seg("b")}</div>
            <span class="label">Roupa</span><div class="bn-seg">${seg("r")}</div>
            <span class="label">Cor da roupa</span><div class="bn-sws">${BONECO.u.map((c, i) => sw("u", c, i)).join("")}</div>
            <span class="label">Parte de baixo</span><div class="bn-seg">${seg("e")}</div><div class="bn-sws">${BONECO.l.map((c, i) => sw("l", c, i)).join("")}</div>
            <span class="label">Calçado</span><div class="bn-seg">${seg("f")}</div><div class="bn-sws">${BONECO.s.map((c, i) => sw("s", c, i)).join("")}</div>
            <span class="label">Óculos</span><div class="bn-seg">${seg("o")}</div>
            <span class="label">Na cabeça</span><div class="bn-seg">${seg("h")}</div>
            <span class="label">Extras</span><div class="bn-seg">${seg("j")}</div>
            <p class="hint" style="margin:6px 0 0">A primeira bolinha de cor da roupa usa a cor do perfil. Na social e no terno, a gravata fica na cor do perfil; no terno, a calça acompanha o paletó. O ícone vai estampado no peito da polo, da camiseta, do moletom e da regata. Chapéus de recompensa ficam no lugar do acessório de cabeça.</p>
          </div>
        </div>
      </section>
      </div>
      <div id="pfs-perfil2" data-pftab-mais="perfil">
      ${S.v2 ? `<section class="panel pf-sec"><h3>${IC("trophy")} Recompensas</h3>
        <div class="pf-nivel nv-${nv}">
          <div class="pf-nv-top"><span class="pf-nv-tag">${IC("medal:f")} ${NIVEIS[nv][0]}</span><span class="pf-nv-tot"><b>${brl(patr)}</b> investidos</span></div>
          <div class="pf-nv-bar"><i style="width:${pctNv.toFixed(1)}%"></i></div>
          <div class="pf-nv-mix"><span><i style="background:var(--c-acao)"></i>Renda variável <b>${brl(N.rv)}</b></span><span><i style="background:var(--c-rf)"></i>Renda fixa <b>${brl(N.rf)}</b></span></div>
          <p class="hint" style="margin:8px 0 0">${prox ? `Faltam <b>${brl(prox[1] - patr)}</b> para <b>${prox[0]}</b>: libera a moldura ${prox[0]}, o acessório ${esc(acDe(nv + 1).nome)} e ${esc(DECOR_NV[nv + 1])} no escritório.` : "Faixa máxima. Lenda!"}</p>
          ${aviso ? `<p class="hint pf-nv-aviso">${esc(aviso)}</p>` : ""}
        </div>
        <ol class="pf-trilha" aria-label="Faixas de patrimônio">${NIVEIS.slice(1).map(([n, min], i) => { const k = i + 1; const ok = nvServ != null ? k <= nvServ : false; const ating = k <= nv;
          return `<li class="nv-${k}${ok ? " ok" : ating ? " quase" : ""}${k === nv + 1 ? " prox" : ""}" title="${esc(n)}: ${esc(curto(min))} investidos. Libera moldura, ${esc(acDe(k).nome)} e ${esc(DECOR_NV[k])} no escritório."><span class="tr-dot">${IC(ok ? "check" : ating ? "timer" : "lock-simple")}</span><b>${esc(n)}</b><small>${esc(curto(min))}</small></li>`; }).join("")}</ol>
        <h4 class="pf-sub">Conquistas <span>${nConq} de ${conqs.length}</span></h4>
        <div class="pf-conqs">${conqs.map((i) => { const ok = lib.has(i.id); const f = CONQ[i.id]; const [v, meta, txt] = f ? f(N, S.conq) : [0, 1, ""]; const w = Math.max(0, Math.min(100, v / meta * 100));
          return `<div class="cq${ok ? " ok" : ""}"><span class="cq-ic" style="--acc:${i.c}">${IC(i.ic + ":d")}</span><div class="cq-tx"><b>${esc(i.nome)}</b><small>${esc(i.req)}</small>${ok ? `<small class="cq-v up">Liberada</small>` : `<div class="cq-bar"><i style="width:${w.toFixed(1)}%"></i></div><small class="cq-v">${esc(txt)}${w >= 100 ? " · libera na próxima atualização" : ""}</small>`}</div>${ok ? `<span class="cq-ok">${IC("check-circle")}</span>` : ""}</div>`; }).join("")}</div>
        <h4 class="pf-sub">Molduras e acessórios</h4>
        <div class="seg pf-abas" role="tablist" aria-label="Tipo"><button type="button" role="tab" data-aba="m" aria-selected="true">Molduras</button><button type="button" role="tab" data-aba="a" aria-selected="false">Acessórios</button></div>
        <div class="pf-itens" id="pf-itens"></div>
      </section>` : ""}
      <section class="panel pf-sec"><h3>${IC("user-circle")} Sobre você</h3><div class="pf-form">
        <label>Apelido (único)<input id="pf-apelido" maxlength="20" placeholder="joao.invest" value="${esc(p.apelido || "")}" required></label>
        <label>Nome que aparece<input id="pf-nome" maxlength="40" placeholder="opcional" value="${esc(p.nome || "")}"></label>
        <label class="w">Bio<textarea id="pf-bio" maxlength="160" placeholder="Ex.: foco em dividendos e FIIs, investindo desde 2024">${esc(p.bio || "")}</textarea></label>
        <label>Cidade<input id="pf-cidade" maxlength="60" placeholder="Dois Vizinhos" value="${esc(p.cidade || "")}"></label>
        <label>Estado<select id="pf-uf"><option value="">—</option>${UFS.map((u) => `<option${p.uf === u ? " selected" : ""}>${u}</option>`).join("")}</select></label>
        <label>País<select id="pf-pais">${PAISES.map(([c, n]) => `<option value="${c}"${(p.pais || "BR") === c ? " selected" : ""}>${n}</option>`).join("")}</select></label>
        <label>Estilo de investidor<select id="pf-estilo"><option value="">—</option>${Object.entries(ESTILOS).map(([k, n]) => `<option value="${k}"${p.estilo === k ? " selected" : ""}>${n}</option>`).join("")}</select></label>
      </div></section>
      <section class="panel pf-sec"><h3>${IC("lock-simple")} Privacidade</h3><div class="pf-form">
        <div class="w pf-vis">
          <label><input type="radio" name="pf-vis" value="privado"${!p.visibilidade || p.visibilidade === "privado" ? " checked" : ""}><span><b>${IC("lock-simple")} Privado</b>Ninguém vê nada seu. Você também não vê o ranking.</span></label>
          <label><input type="radio" name="pf-vis" value="ranking"${p.visibilidade === "ranking" ? " checked" : ""}><span><b>${IC("trophy")} Só no ranking</b>Aparece nos rankings com percentuais. Sua carteira continua fechada.</span></label>
          <label><input type="radio" name="pf-vis" value="publico"${p.visibilidade === "publico" ? " checked" : ""}><span><b>${IC("eye")} Carteira aberta</b>Além do ranking, quem também abre a carteira vê seus ativos e o peso de cada um.</span></label>
        </div>
        <label class="w pf-chk"><input type="checkbox" id="pf-valores"${p.mostrar_valores ? " checked" : ""}> Mostrar valores em reais (patrimônio, proventos e quantidades)</label>
        <p class="hint w" style="margin:0">A renda fixa entra no seu total investido e na diversificação, mas as aplicações nunca aparecem para os outros. Os números do ranking são calculados pelo Radar.</p>
      </div></section>
      </div>
      <div class="pf-save"><button class="btn primary" type="submit" id="pf-salvar">${IC("check")} Salvar perfil</button>${S.perfil ? `<button class="btn" type="button" data-ver-perfil="${esc(S.perfil.apelido)}">${IC("eye")} Ver como os outros veem</button>` : ""}<p class="form-msg" id="pf-msg" role="status" aria-live="polite"></p></div>
    </form>`;
    const atual = () => ({ ...p, apelido: $("#pf-apelido").value.trim().toLowerCase().replace(/^@/, "") || p.apelido || "voce", nome: $("#pf-nome").value.trim() || null, cidade: $("#pf-cidade").value.trim() || null, uf: $("#pf-uf").value || null, pais: $("#pf-pais").value || "BR", estilo: $("#pf-estilo").value || null, avatar: pend.avatar || null, cor: pend.cor, foto: pend.foto, moldura: pend.moldura, acessorio: pend.acessorio, capa: pend.capa });
    const hero = () => {
      const a = atual(); const m = a.moldura && ITEM[a.moldura]; const ac = a.acessorio && ITEM[a.acessorio];
      const h = $("#pf-hero"); h.className = "pf-hero capa-" + (pend.capa || "cor"); h.style.setProperty("--c", a.cor);
      h.innerHTML = `<div class="pf-hero-av">${avHtml(a, 96)}</div><div class="pf-hero-tx"><b>${esc(a.nome || "@" + a.apelido)}</b><span>@${esc(a.apelido)}${ondeTxt(a) ? " · " + esc(ondeTxt(a)) : ""}</span>
        <div class="pf-chips">${a.estilo ? `<span>${esc(ESTILOS[a.estilo])}</span>` : ""}${m && a.moldura !== "m_basica" ? `<span class="mc-${a.moldura.slice(2)}">Moldura ${esc(m.nome)}</span>` : ""}${ac ? `<span style="--acc:${ac.c}">${IC(ac.ic + ":d")} ${esc(ac.nome)}</span>` : ""}</div></div>`;
      $("#pf-av").outerHTML = avHtml(a, true).replace('class="av', 'id="pf-av" class="av');
    };
    const itens = () => {
      const box = $("#pf-itens"); if (!box) return;
      const a = atual(); const lista = ITENS.filter((i) => i.t === pend.aba);
      const nenhum = `<button type="button" class="it" data-it="" aria-pressed="${!(pend.aba === "m" ? pend.moldura : pend.acessorio)}"><span class="it-av">${avHtml({ ...a, [pend.aba === "m" ? "moldura" : "acessorio"]: null }, 52)}</span><b>Nenhum</b><small>Sem ${pend.aba === "m" ? "moldura" : "acessório"}</small></button>`;
      const grupos = [["livre", "Livres"], ["nivel", "Por patrimônio"], ["conq", "Conquistas"]];
      box.innerHTML = nenhum + grupos.map(([g, n]) => { const l = lista.filter((i) => i.g === g); return l.length ? `<p class="label pf-it-g">${n}</p>` + l.map((i) => {
        const ok = lib.has(i.id); const sel = (i.t === "m" ? pend.moldura : pend.acessorio) === i.id;
        return `<button type="button" class="it${ok ? "" : " lock"}" data-it="${i.id}" aria-pressed="${sel}"${ok ? "" : ` aria-disabled="true" title="${esc(i.req)}"`}><span class="it-av">${avHtml({ ...a, [i.t === "m" ? "moldura" : "acessorio"]: i.id }, 52)}${ok ? "" : `<span class="it-lk">${IC("lock-simple")}</span>`}</span><b>${esc(i.nome)}</b><small>${ok ? (i.g === "livre" ? "Livre" : "Liberado") : esc(i.req)}</small></button>`;
      }).join("") : ""; }).join("");
    };
    const bnDados = () => ({ cor: pend.cor, icone: pend.avatar ? AV_IC[pend.avatar] : "", boneco: bonecoTxt(pend.boneco), acessorio: pend.acessorio });
    const bn = () => { document.querySelectorAll(".bn-sw-perfil").forEach((x) => x.style.setProperty("--c", pend.cor)); if (vitrine) vitrine.atualizar(bnDados()); };
    if (vitrine) { vitrine.destruir(); vitrine = null; }
    // abas: a prévia 3D do boneco só é montada quando a aba dele aparece (com tamanho de verdade)
    let prevPedida = false;
    const abrirAba = (k) => {
      document.querySelectorAll(".pf-tabs [data-pftab]").forEach((x) => x.setAttribute("aria-selected", String(x.dataset.pftab === k)));
      $("#pfs-perfil").hidden = $("#pfs-perfil2").hidden = k !== "perfil"; $("#pfs-boneco").hidden = k !== "boneco";
      if (k === "boneco" && !prevPedida && window.RadarEscritorio && window.RadarEscritorio.vitrine) { prevPedida = true; window.RadarEscritorio.vitrine($("#pf-bn-3d"), bnDados()).then((v) => { if (!$("#pf-drawer").hidden && $("#pf-bn-3d")) { vitrine = v; if (v) bn(); } else if (v) v.destruir(); }); }
    };
    document.querySelector(".pf-tabs").addEventListener("click", (e) => { const b = e.target.closest("[data-pftab]"); if (b) abrirAba(b.dataset.pftab); });
    document.querySelector(".pf-tabs").addEventListener("keydown", (e) => { if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return; const k = $("#pfs-boneco").hidden ? "boneco" : "perfil"; abrirAba(k); const b = document.querySelector(`.pf-tabs [data-pftab="${k}"]`); if (b) b.focus(); });
    if (pf0 === "boneco") abrirAba("boneco");
    hero(); itens();
    $("#pf-form").addEventListener("input", (e) => {
      if (e.target.matches("#pf-apelido,#pf-nome,#pf-cidade")) hero();
      if (e.target.id === "pf-cor-livre") { pend.cor = e.target.value; $("#pf-cores").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", "false")); hero(); itens(); bn(); }
    });
    $("#pf-form").addEventListener("change", (e) => { if (e.target.matches("select")) hero(); });
    $("#pf-icones").addEventListener("click", (e) => { const b = e.target.closest("[data-av]"); if (!b) return; pend.avatar = b.dataset.av; $("#pf-icones").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); hero(); itens(); bn(); });
    $("#pf-cores").addEventListener("click", (e) => { const b = e.target.closest("[data-cor]"); if (!b) return; pend.cor = b.dataset.cor; $("#pf-cor-livre").value = pend.cor; $("#pf-cores").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); hero(); itens(); bn(); });
    $("#pf-capas").addEventListener("click", (e) => { const b = e.target.closest("[data-capa]"); if (!b) return; pend.capa = b.dataset.capa; $("#pf-capas").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); hero(); });
    document.querySelector(".pf-bn-op").addEventListener("click", (e) => {
      const b = e.target.closest("[data-bn]"); if (!b) return;
      const k = b.dataset.bn; pend.boneco[k] = +b.dataset.v;
      document.querySelectorAll(`.pf-bn-op [data-bn="${k}"]`).forEach((x) => x.setAttribute("aria-pressed", String(x === b))); bn();
    });
    if (S.v2) {
      document.querySelector(".pf-abas").addEventListener("click", (e) => { const b = e.target.closest("[data-aba]"); if (!b) return; pend.aba = b.dataset.aba; document.querySelectorAll(".pf-abas button").forEach((x) => x.setAttribute("aria-selected", String(x === b))); itens(); });
      $("#pf-itens").addEventListener("click", (e) => {
        const b = e.target.closest("[data-it]"); if (!b) return;
        if (b.classList.contains("lock")) { toast(ITEM[b.dataset.it].nome + ": " + ITEM[b.dataset.it].req + "."); return; }
        const id = b.dataset.it || null; if (pend.aba === "m") pend.moldura = id; else pend.acessorio = id;
        hero(); itens(); bn();
      });
      const fotoTxt = (t) => { const x = $("#pf-foto-btn span"); if (x) x.textContent = t; };
      $("#pf-foto-btn").addEventListener("click", () => $("#pf-file").click());
      $("#pf-foto-rm").addEventListener("click", () => { pend.foto = null; $("#pf-foto-rm").hidden = true; fotoTxt("Enviar foto"); hero(); itens(); });
      $("#pf-file").addEventListener("change", async (e) => {
        const f = e.target.files && e.target.files[0]; e.target.value = ""; if (!f) return;
        if (!/^image\//.test(f.type) || f.size > 20e6) { toast("Escolha uma imagem de até 20 MB."); return; }
        try { pend.foto = await reduzirFoto(f); $("#pf-foto-rm").hidden = false; fotoTxt("Trocar foto"); hero(); itens(); }
        catch (_) { toast("Não foi possível ler essa imagem."); }
      });
    }
    $("#pf-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const m = (t, ok) => { const o = $("#pf-msg"); o.textContent = t; o.className = "form-msg " + (ok ? "up" : "down"); };
      const apelido = $("#pf-apelido").value.trim().toLowerCase().replace(/^@/, "");
      if (!/^[a-z0-9_.]{3,20}$/.test(apelido)) { $("#pf-apelido").focus(); return m("O apelido precisa ter de 3 a 20 letras minúsculas, números, ponto ou _ (sem espaço nem acento).", false); }
      const cor = /^#[0-9a-fA-F]{6}$/.test(pend.cor) ? pend.cor : CORES[0];
      const row = {
        apelido, nome: $("#pf-nome").value.trim() || null, bio: $("#pf-bio").value.trim() || null, avatar: pend.avatar || null, cor,
        cidade: $("#pf-cidade").value.trim() || null, uf: $("#pf-uf").value || null, pais: $("#pf-pais").value || "BR", estilo: $("#pf-estilo").value || null,
        visibilidade: (document.querySelector('input[name="pf-vis"]:checked') || {}).value || "privado", mostrar_valores: $("#pf-valores").checked, user_id: S.user.id,
      };
      if (S.v2) Object.assign(row, { foto: pend.foto, moldura: pend.moldura, acessorio: pend.acessorio });
      const extra = { capa: pend.capa === "cor" ? null : pend.capa, boneco: bonecoTxt(pend.boneco) };
      if (row.visibilidade !== "privado" && (!row.cidade || !row.uf) && row.pais === "BR") return m("Para entrar no ranking da sua cidade e do seu estado, informe a cidade e o estado.", false);
      try { localStorage.setItem("radar-boneco", extra.boneco); } catch (_) { /* modo privado */ }
      $("#pf-salvar").disabled = true;
      try {
        let { error } = await sb.from("perfis").upsert({ ...row, ...(S.v3 === false ? {} : extra) }, { onConflict: "user_id" });
        // Banco ainda sem as colunas novas (capa/boneco): salva o resto e guarda o boneco neste aparelho
        if (error && /capa|boneco|schema cache|column/i.test(error.message || "")) { S.v3 = false; ({ error } = await sb.from("perfis").upsert(row, { onConflict: "user_id" })); }
        if (error) {
          const msg = error.message || "";
          if (/perfis_apelido_idx|duplicate|unique constraint/i.test(msg)) return m("Esse apelido já está em uso. Escolha outro.", false);
          if (/item_bloqueado/i.test(msg)) return m("Esse item ainda não está liberado para você.", false);
          if (/foto/i.test(msg)) return m("A foto não passou pela validação. Escolha outra imagem menor.", false);
          if (/check constraint|violates check/i.test(msg)) return m("Um dos campos contém um valor inválido. Confira apelido, cidade, estado e opções selecionadas.", false);
          return m("Não foi possível salvar: " + msg.slice(0, 180), false);
        }
        await carregarPerfil();
        m("Perfil salvo." + (row.visibilidade !== "privado" ? " Você entra no ranking na próxima atualização (a cada 15 minutos)." : ""), true);
        $("#pf-titulo").textContent = "@" + apelido; hero();
        S.rk.dados = null; renderRanking(); renderEscritorio();
      } catch (err) {
        m("Falha de conexão ao salvar. Confira a internet e tente novamente.", false);
      } finally {
        $("#pf-salvar").disabled = false;
      }
    });
  }
  // Reduz a foto para 128x128 (recorte central), em WebP ou JPEG, para caber no perfil
  async function reduzirFoto(f) {
    // FileReader (data:) porque a política de segurança da página não libera blob:
    const src = await new Promise((ok, err) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = err; r.readAsDataURL(f); });
    {
      const img = await new Promise((ok, err) => { const i = new Image(); i.onload = () => ok(i); i.onerror = err; i.src = src; });
      const c = document.createElement("canvas"); c.width = c.height = 128; const g = c.getContext("2d");
      const l = Math.min(img.naturalWidth, img.naturalHeight); g.imageSmoothingQuality = "high";
      g.drawImage(img, (img.naturalWidth - l) / 2, (img.naturalHeight - l) / 2, l, l, 0, 0, 128, 128);
      for (const q of [0.82, 0.7, 0.55, 0.4]) {
        let d = c.toDataURL("image/webp", q); if (!/^data:image\/webp/.test(d)) d = c.toDataURL("image/jpeg", q);
        if (d.length <= 38000) return d;
      }
      throw new Error("grande");
    }
  }

  // Perfil de outra pessoa (ou o meu, como os outros veem)
  async function verPerfil(nick) {
    abrirDrawerPf();
    $("#pf-titulo").textContent = "@" + nick; $("#pf-sub").textContent = ""; $("#pf-body").innerHTML = `<div class="carregando"><i></i><i style="width:80%"></i></div>`;
    const { data, error } = await sb.rpc("perfil_publico", { nick });
    if (error || !data || data.erro) { $("#pf-body").innerHTML = `<p class="skel">${data && data.erro === "privado" ? "Para ver outros perfis, deixe o seu visível no ranking." : "Perfil não encontrado ou privado."}</p>`; return; }
    const p = data, r = p.ranking || {};
    $("#pf-av").outerHTML = avHtml(p, true).replace('class="av', 'id="pf-av" class="av');
    $("#pf-titulo").textContent = (p.nome ? p.nome + " · " : "") + "@" + p.apelido;
    $("#pf-sub").textContent = [ondeTxt(p), p.estilo ? ESTILOS[p.estilo] : null].filter(Boolean).join(" · ");
    const st = (l, v) => `<div class="kpi"><span class="label">${l}</span><b>${v}</b></div>`;
    const cls2 = r.classes ? Object.entries(r.classes).sort((a, b) => b[1] - a[1]) : [];
    const cart = p.carteira || [];
    $("#pf-body").innerHTML = `
      <div class="pf-hero vis capa-${esc(/^[a-z]{3,12}$/.test(p.capa || "") ? p.capa : "cor")}" style="--c:${esc(p.cor || "#2457F5")}"><div class="pf-hero-av">${avHtml(p, 96)}</div><div class="pf-hero-tx"><b>${esc(p.nome || "@" + p.apelido)}</b><span>@${esc(p.apelido)}${ondeTxt(p) ? " · " + esc(ondeTxt(p)) : ""}</span>
        <div class="pf-chips">${p.estilo ? `<span>${esc(ESTILOS[p.estilo] || "")}</span>` : ""}${p.moldura && ITEM[p.moldura] && p.moldura !== "m_basica" ? `<span class="mc-${esc(p.moldura.slice(2))}">Moldura ${esc(ITEM[p.moldura].nome)}</span>` : ""}${p.acessorio && ITEM[p.acessorio] ? `<span>${IC(ITEM[p.acessorio].ic + ":d")} ${esc(ITEM[p.acessorio].nome)}</span>` : ""}</div>
        ${p.bio ? `<p class="pf-bio">${esc(p.bio)}</p>` : ""}</div></div>
      <section class="panel"><h3>Números <span class="selo${r.verificado === false ? " nv" : ""}">${r.verificado === false ? "não verificado" : r.n_ativos ? IC("seal-check") + " verificado" : "aguardando cálculo"}</span></h3>
        ${r.n_ativos ? `<div class="pp-stats">${st("Rentabilidade", `<span class="${cls(r.rent_pct)}">${fmtCat("rentabilidade", r.rent_pct)}</span>`)}${st("Dividend yield", fmtCat("dividendos", r.dy_pct))}${st("Hoje", `<span class="${cls(r.dia_pct)}">${fmtCat("hoje", r.dia_pct)}</span>`)}${st("Diversificação", fmtCat("diversificacao", r.div_score) + "/100")}${st("Ativos", num(r.n_ativos, 0))}${r.patrimonio != null ? st("Patrimônio", brl(r.patrimonio)) : ""}${r.proventos12m != null ? st("Proventos 12m", brl(r.proventos12m)) : ""}</div>
        ${r.motivos && r.motivos.length ? `<p class="hint" style="margin:10px 0 0">Fora do ranking por enquanto: ${esc(r.motivos.join("; "))}.</p>` : ""}
        ${cls2.length ? `<div class="alloc-bar" style="margin-top:12px">${cls2.map(([c, w]) => `<i style="width:${(w * 100).toFixed(1)}%;background:var(--c-${esc(c)})"></i>`).join("")}</div><div class="alloc-leg" style="color:var(--fg)">${cls2.map(([c, w]) => `<span><i style="background:var(--c-${esc(c)})"></i>${esc((CLS[c] || { nome: c }).nome)} <b>${num(w * 100, 0)}%</b></span>`).join("")}</div>` : ""}` : `<p class="skel">Os números aparecem na próxima atualização do ranking (a cada 15 minutos).</p>`}
        <p class="hint" style="margin:10px 0 0">No Radar desde ${esc(new Date(p.desde).toLocaleDateString("pt-BR", { month: "long", year: "numeric" }))}.</p>
      </section>
      <section class="panel"><h3>Carteira</h3>
        ${cart.length ? `<div class="pp-cart">${cart.map((a) => `<div class="pp-row" data-cl="${esc(a.classe)}">${logoHtml(a.ticker)}<div style="min-width:0"><button type="button" class="tk-btn" data-emp="${esc(a.ticker)}"><span class="tk">${esc(a.ticker)}</span></button> <span class="hint">${esc(nomeBom(a.nome || ""))}</span><div class="bar"><i style="width:${(Number(a.peso) * 100).toFixed(1)}%"></i></div></div><span class="pc">${num(Number(a.peso) * 100, 1)}%</span><span class="pc ${cls(a.resultado)}" title="Resultado sobre o preço médio">${a.resultado != null ? pct(a.resultado) : "—"}</span></div>`).join("")}</div>
          <p class="hint" style="margin:8px 0 0">Peso de cada ativo e resultado sobre o preço médio${p.mostrar_valores ? "" : ". Valores em reais escondidos por escolha da pessoa"}. Aplicações de renda fixa não aparecem (só o peso dela no gráfico acima).</p>`
        : p.carteira_bloqueada ? `<div class="rk-pv"><strong>Carteira aberta só para quem também abre a sua</strong><p>Deixe a sua carteira aberta no seu perfil para ver os ativos de @${esc(p.apelido)}.</p><button type="button" class="btn primary sm" data-meu-perfil="1">Editar meu perfil</button></div>`
        : `<p class="skel">${p.visibilidade === "publico" ? "Carteira vazia." : "Essa pessoa mostra só os números no ranking; a carteira é fechada."}</p>`}
      </section>
      ${p.eu ? `<button type="button" class="btn" data-meu-perfil="1">Editar meu perfil</button>` : `<section class="panel"><h3>Algo errado?</h3><p class="hint" style="margin:0 0 10px">Se os números parecem inventados (preço médio impossível, carteira falsa) ou o perfil é ofensivo, denuncie. Com 3 denúncias de pessoas diferentes o perfil sai do ranking até ser revisto.</p>
        ${p.denunciei ? `<span class="hint">Você já denunciou este perfil.</span>` : `<button type="button" class="btn danger sm" data-denunciar="${esc(p.apelido)}">Denunciar valores falsos</button>`}</section>`}`;
  }
  document.addEventListener("click", async (e) => {
    const v = e.target.closest("[data-ver-perfil]"); if (v) { verPerfil(v.dataset.verPerfil); return; }
    const mp = e.target.closest("[data-meu-perfil]"); if (mp) { abrirMeuPerfil(mp.dataset.meuPerfil === "boneco" ? "boneco" : undefined); return; }
    const d = e.target.closest("[data-denunciar]");
    if (d) {
      d.disabled = true;
      const { data, error } = await sb.rpc("denunciar", { nick: d.dataset.denunciar, motivo: "Valores falsos ou perfil ofensivo" });
      const err = error ? "falha" : data && data.erro;
      toast(!err ? "Denúncia registrada. Obrigado." : err === "conta_nova" ? "Contas com menos de 3 dias ainda não podem denunciar." : err === "limite" ? "Limite de denúncias de hoje atingido." : "Não foi possível denunciar agora.");
      if (!err) d.outerHTML = `<span class="hint">Você já denunciou este perfil.</span>`; else d.disabled = false;
    }
  });

  // Seção do ranking
  async function carregarRanking() {
    if (!S.perfil || S.perfil.visibilidade === "privado" || S.rk.carregando) return;
    S.rk.carregando = true;
    const { data, error } = await sb.rpc("ranking_top", { escopo: S.rk.escopo, categoria: S.rk.cat, limite: 50 });
    S.rk.carregando = false;
    S.rk.dados = error ? { erro: "falha" } : data;
    renderRanking();
  }
  function renderRanking() {
    const box = $("#rank-body"); if (!box) return;
    if (!S.perfilOk) { box.innerHTML = `<div class="empty"><strong>Ranking ainda não ativado</strong>Falta criar as tabelas no banco (supabase/migrations/20261027_comunidade.sql).</div>`; return; }
    if (!S.perfil || S.perfil.visibilidade === "privado") {
      const fake = (c, e) => ({ avatar: e, cor: c });
      box.innerHTML = `<div class="rk-pv">
        <div class="podio demo" aria-hidden="true">${[[2, fake("#94A3B8", "gato")], [1, fake("#F5B400", "coroa")], [3, fake("#C2773C", "broto")]].map(([n, p]) => `<div class="pd pd-${n}" style="--d:${[0, .15, 0, .3][n]}s"><div class="pd-av">${n === 1 ? COROA : ""}${avHtml(p, n === 1 ? 72 : 56)}</div><div class="pd-base"><span>${n}</span></div></div>`).join("")}</div>
        <strong>Compare sua carteira com investidores da sua cidade, do seu estado, do Brasil e do mundo</strong>
        <p>Rankings de rentabilidade, dividendos, diversificação e do dia, carteiras abertas para ver no que cada um investe, foto, molduras e acessórios que você libera investindo. Para ver, você também participa: escolha no perfil o quanto quer mostrar. Por padrão aparecem só percentuais, nunca valores em reais.</p>
        <button type="button" class="btn primary" data-meu-perfil="1">${S.perfil ? "Entrar no ranking" : "Criar meu perfil"}</button></div>`;
      $("#rank-when").textContent = ""; return;
    }
    const d = S.rk.dados;
    const topo = `<div class="rk-top"><div class="seg" role="tablist" aria-label="Onde" style="margin:0;flex:1;min-width:260px">${ESCOPOS.map(([k, n]) => `<button type="button" role="tab" aria-selected="${S.rk.escopo === k}" data-rk-esc="${k}">${n}</button>`).join("")}</div>
        <button type="button" class="btn ghost sm rk-eu-btn" data-meu-perfil="1">${avHtml(S.perfil, 26)} Meu perfil</button></div>
      <div class="rk-cats" role="group" aria-label="Categoria">${CATS.map(([k, n, , ic]) => `<button type="button" class="rk-cat" aria-pressed="${S.rk.cat === k}" data-rk-cat="${k}">${IC(ic)}${n}</button>`).join("")}</div>`;
    if (!d) {
      box.innerHTML = topo + `<div class="podio carregando-pd" aria-hidden="true">${[2, 1, 3].map((n) => `<div class="pd pd-${n}"><div class="pd-av"><span class="sk-av"></span></div><span class="sk-ln"></span><div class="pd-base"></div></div>`).join("")}</div>`;
      carregarRanking(); return;
    }
    const cat = CATS.find((c) => c[0] === S.rk.cat);
    const semLocal = (S.rk.escopo === "cidade" && !S.perfil.cidade) || (S.rk.escopo === "estado" && !S.perfil.uf);
    const itens = d.itens || [];
    const corV = S.rk.cat === "rentabilidade" || S.rk.cat === "hoje";
    $("#rank-when").textContent = d.atualizado_em ? "Atualizado " + ago(d.atualizado_em) : "";
    const local = S.rk.escopo === "cidade" && S.perfil.cidade ? S.perfil.cidade : S.rk.escopo === "estado" && S.perfil.uf ? S.perfil.uf : "";
    const sub = (x) => `@${esc(x.apelido)}${ondeTxt(x) ? " · " + esc(ondeTxt(x)) : ""}`;
    const pd = (x, n) => x ? `<button type="button" class="pd pd-${n}${x.eu ? " eu" : ""}" data-ver-perfil="${esc(x.apelido)}" style="--d:${[0, .15, 0, .3][n]}s">
        <div class="pd-av">${n === 1 ? COROA : ""}${avHtml(x, n === 1 ? 84 : 64, { semTopo: n === 1 })}</div>
        <b class="pd-nm">${esc(x.nome || "@" + x.apelido)}${x.eu ? " (você)" : ""}</b><span class="pd-h">${sub(x)}</span>
        <span class="pd-vl ${corV ? cls(x.valor) : ""}">${esc(fmtCat(S.rk.cat, x.valor))}</span>
        <div class="pd-base"><span>${n}</span></div></button>`
      : `<div class="pd pd-${n} vazio" style="--d:${[0, .15, 0, .3][n]}s"><div class="pd-av"><span class="sk-av"></span></div><span class="pd-h">vaga aberta</span><div class="pd-base"><span>${n}</span></div></div>`;
    const resto = itens.slice(3);
    const maxAbs = Math.max(...itens.map((x) => Math.abs(Number(x.valor) || 0)), 1e-9);
    let corpo;
    if (d.erro) corpo = `<p class="skel">Não foi possível carregar o ranking agora.</p>`;
    else if (semLocal) corpo = `<div class="rk-vazio"><span>${IC("map-pin")}</span><p>Informe sua ${S.rk.escopo === "cidade" ? "cidade" : "UF"} no perfil para ver este ranking.</p><button type="button" class="btn sm" data-meu-perfil="1">Editar perfil</button></div>`;
    else if (!itens.length) corpo = `<div class="rk-vazio"><span>${IC("plant")}</span><p>Ainda não há ninguém verificado aqui${local ? " em " + esc(local) : ""}. Chame os amigos que investem!</p></div>`;
    else {
      const meu = d.meu; const noPodio = itens.slice(0, 3).some((x) => x.eu);
      corpo = `<div class="podio">${pd(itens[1], 2)}${pd(itens[0], 1)}${pd(itens[2], 3)}</div>
        ${meu ? `<div class="rk-voce${noPodio ? " top" : ""}">${avHtml(S.perfil, 40)}<div><b>${noPodio ? "Você está no pódio!" : `Você está em ${meu.posicao}º de ${meu.total}`}</b><span>${meu.verificado === false ? "Ainda não verificado: só você vê a sua posição." : meu.total > 1 ? `Melhor que ${Math.round((meu.total - meu.posicao) / (meu.total - 1) * 100)}% ${local ? "de " + esc(local) : "do ranking"}` : "Por enquanto, só você aqui."}</span></div><span class="rk-voce-v ${corV ? cls(meu.valor) : ""}">${esc(fmtCat(S.rk.cat, meu.valor))}</span></div>`
          : `<p class="hint rk-meu">Você ainda não aparece aqui${S.rk.cat === "proventos" || S.rk.cat === "patrimonio" ? " (marque “mostrar valores” no perfil)" : " (o ranking é recalculado a cada 15 minutos)"}.</p>`}
        ${resto.length ? `<div class="rk-list">${resto.map((x, i) => `<button type="button" class="rk${x.eu ? " eu" : ""}" data-ver-perfil="${esc(x.apelido)}" style="--i:${i}"><span class="ps">${x.posicao}º</span>${avHtml(x, 40)}<span class="nm"><b>${esc(x.nome || "@" + x.apelido)}${x.eu ? " (você)" : ""}</b><span>${sub(x)}${x.publico ? ` · <i class="tag-ab">carteira aberta</i>` : ""}${x.verificado ? "" : " · não verificado"}</span></span><span class="vl ${corV ? cls(x.valor) : ""}">${esc(fmtCat(S.rk.cat, x.valor))}<small>${num(x.n_ativos, 0)} ativos</small></span><i class="rk-bar" style="--w:${(Math.abs(Number(x.valor) || 0) / maxAbs * 100).toFixed(1)}%"></i></button>`).join("")}</div>` : ""}`;
    }
    box.innerHTML = topo + `<p class="hint rk-desc">${esc(cat[2][0].toUpperCase() + cat[2].slice(1))}${local ? " · " + esc(local) : ""}. Só perfis verificados pelo Radar.</p>` + corpo + `
      <details class="fat rk-regras"><summary>Como funciona e regras anti-troll</summary><ul class="fatores">
        <li><span class="mark neutro">·</span><span>Os números são calculados pelo Radar a partir da carteira e das cotações reais. Ninguém digita a própria rentabilidade.</span></li>
        <li><span class="mark neutro">·</span><span>Preço médio fora do possível (menos de 1/4 da mínima ou mais de 4 vezes a máxima de 52 semanas) não conta na rentabilidade.</span></li>
        <li><span class="mark neutro">·</span><span>Posições criadas ou alteradas hoje não contam no ranking do dia, e as datas são gravadas pelo servidor: não dá para “comprar” a alta depois que ela aconteceu.</span></li>
        <li><span class="mark neutro">·</span><span>Ficam de fora: perfis com menos de 7 dias, menos de 2 ativos ou R$ 100, patrimônio acima de R$ 50 milhões, rentabilidade acima de 500%, mais de 30 alterações na carteira em 24 horas ou 3 denúncias de pessoas diferentes (a foto também some).</span></li>
        <li><span class="mark neutro">·</span><span>Molduras e acessórios são liberados pelo servidor. A faixa de patrimônio só sobe depois de 7 dias seguidos com o valor na carteira (vale o menor da semana), e o que deixar de valer sai sozinho.</span></li>
        <li><span class="mark neutro">·</span><span>A renda fixa conta no patrimônio, na faixa e na diversificação, com o valor corrigido pelo CDI do Banco Central. As aplicações nunca aparecem para os outros. Valores em reais só aparecem para quem escolhe mostrar.</span></li>
      </ul></details>`;
  }
  $("#rank-body").addEventListener("click", (e) => {
    const a = e.target.closest("[data-rk-esc]"); if (a) { S.rk.escopo = a.dataset.rkEsc; S.rk.dados = null; renderRanking(); return; }
    const c = e.target.closest("[data-rk-cat]"); if (c) { S.rk.cat = c.dataset.rkCat; S.rk.dados = null; renderRanking(); }
  });

  /* Início */
  sb.auth.getSession().then(({ data }) => { if (!data.session && !modoNovaSenha) { $("#auth").hidden = false; setAuthMode(false); } });
})();
