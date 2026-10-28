/* Radar da Carteira: escritório 3D.
   O humor do boneco segue o resultado do dia; o monitor mostra seus ativos e o que você faz no site.
   Uso: RadarEscritorio.render(elemento, { pct, cor, emoji, fechado, itens, tudo, sim, ativos })
   A cena (Three.js) fica em escritorio3d.js e só é baixada quando necessária.
   Sem WebGL, cai para a versão 2D (escritorio-2d.js). */
(function () {
  "use strict";
  const HUMORES = {
    triste: { titulo: "Dia difícil", frase: "Respira. Queda de um dia não muda uma boa carteira.", ic: "smiley-sad" },
    preocupado: { titulo: "De olho nos números", frase: "Mercado no vermelho. Nada de decisão no impulso.", ic: "smiley-nervous" },
    tranquilo: { titulo: "Dia tranquilo", frase: "Tudo calmo. Hora de uma partida no videogame.", ic: "smiley-meh" },
    feliz: { titulo: "Dia bom!", frase: "Carteira no verde. Bora uma sinuca para comemorar.", ic: "smiley" },
    euforico: { titulo: "Que dia!", frase: "Alta forte! Comemora, mas lembra: longo prazo.", ic: "confetti" },
  };
  function humorDe(pct, fechado) {
    if (fechado || pct == null || !isFinite(pct)) return "tranquilo";
    if (pct <= -2) return "triste"; if (pct < -0.3) return "preocupado"; if (pct <= 0.3) return "tranquilo"; if (pct < 2) return "feliz"; return "euforico";
  }
  const DECOR = [
    { id: "cachorro", nome: "Cachorro", ic: "dog", item: "m_bronze", req: "R$ 1 mil investidos" },
    { id: "aquario", nome: "Aquário", ic: "fish", item: "m_prata", req: "R$ 10 mil investidos" },
    { id: "fliperama", nome: "Fliperama", ic: "joystick", item: "m_ouro", req: "R$ 50 mil investidos" },
    { id: "touro", nome: "Touro de ouro", ic: "cow", item: "m_platina", req: "R$ 100 mil investidos" },
    { id: "globo", nome: "Globo de festa", ic: "disco-ball", item: "m_diamante", req: "R$ 500 mil investidos" },
    { id: "cofre", nome: "Cofre de ouro", ic: "vault", item: "m_lenda", req: "R$ 1 milhão investido" },
    { id: "porquinho", nome: "Porquinho", ic: "piggy-bank", item: "a_saco", req: "Dividend yield de 6% ou mais" },
    { id: "neon", nome: "Neon ₿", ic: "currency-btc", item: "a_foguete", req: "Ter cripto na carteira" },
    { id: "arcoiris", nome: "Neon arco-íris", ic: "rainbow", item: "a_arcoiris", req: "Diversificação 70 ou mais" },
    { id: "dardos", nome: "Alvo de dardos", ic: "target", item: "a_alvo", req: "10 ativos ou mais" },
    { id: "trofeu", nome: "Troféu", ic: "trophy", item: "a_estrela", req: "30 dias no Radar" },
  ];
  const IC = (n, o) => (window.RI ? window.RI.svg(n, o) : "");
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const MOD = "./escritorio3d.js?v=20261101-2";
  let mod = null, carregando = null, inst = null, modo = null, ultimo = null, render2d = null, el0 = null;
  const pendentes = []; let secao = "";
  function temWebGL() {
    try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch (_) { return false; }
  }
  function usar2d(el, d) {
    modo = "2d";
    if (render2d) { el.innerHTML = ""; render2d(el, d); return; }
    const nosso = window.RadarEscritorio;
    const s = document.createElement("script"); s.src = "escritorio-2d.js";
    s.onload = () => { const v2 = window.RadarEscritorio; window.RadarEscritorio = nosso; render2d = v2.render; el.innerHTML = ""; render2d(el, el0 || d); };
    document.head.appendChild(s);
  }

  // o que você faz no site aparece na tela do computador
  function acao(txt) {
    txt = String(txt || "").replace(/\s+/g, " ").trim(); if (!txt) return;
    if (inst) inst.log(txt); else { pendentes.push(txt); if (pendentes.length > 8) pendentes.shift(); }
  }
  function rotulo(n) {
    if (!n) return "";
    let t = n.getAttribute("aria-label") || n.getAttribute("title") || "";
    if (!t) { if (n.id) { const l = document.querySelector(`label[for="${CSS.escape(n.id)}"]`); if (l) t = l.textContent; } }
    if (!t) t = n.getAttribute("placeholder") || n.textContent || n.getAttribute("name") || "";
    t = t.replace(/\s+/g, " ").trim();
    return t.length > 30 ? t.slice(0, 29) + "…" : t;
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest("button, a, [role=tab], [role=button], summary, select");
    if (!b || b.closest(".of-cams") || b.matches("select")) return;
    const t = rotulo(b); if (t) acao((b.tagName === "A" ? "abriu " : "clicou em ") + t);
  }, true);
  document.addEventListener("change", (e) => {
    const t = e.target; if (!t.matches || !t.matches("input, select, textarea")) return;
    if (t.type === "password") return;
    const r = rotulo(t); acao("alterou " + (r || "um campo"));
  }, true);
  let tDig = 0;
  document.addEventListener("input", (e) => { if (!e.target.matches || !e.target.matches("input[type=text], input[type=search], input:not([type]), textarea")) return; const n = Date.now(); if (n - tDig > 4000) { tDig = n; acao("digitando…"); } }, true);
  function vigiarSecoes() {
    if (!("IntersectionObserver" in window)) return;
    const vis = new Map();
    const io = new IntersectionObserver((es) => {
      es.forEach((x) => vis.set(x.target, x.intersectionRatio));
      let melhor = null, r = 0.25; vis.forEach((v, k) => { if (v > r) { r = v; melhor = k; } });
      if (!melhor) return;
      const h = melhor.querySelector("h2, h3"); const nome = h ? h.textContent.replace(/\s+/g, " ").trim() : "";
      if (nome && nome !== secao) { secao = nome; if (inst) { inst.secao = nome; inst.log("vendo " + nome); } }
    }, { threshold: [0, 0.25, 0.5, 0.75] });
    document.querySelectorAll("main section[id], section.band[id]").forEach((s) => io.observe(s));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", vigiarSecoes); else setTimeout(vigiarSecoes, 0);

  function render(el, d) {
    d = d || {}; el0 = d;
    const h = humorDe(d.pct, d.fechado); const info = HUMORES[h];
    const v = d.pct == null || !isFinite(d.pct) ? "" : (d.pct > 0 ? "+" : "") + d.pct.toFixed(2).replace(".", ",") + "%";
    const lib = new Set(d.itens || []); const tem = {}; DECOR.forEach((x) => { tem[x.id] = !!(d.tudo || lib.has(x.item)); });
    if (modo === "2d") { if (render2d) render2d(el, d); return h; }
    let palco = el.querySelector(".of-palco3d");
    if (!palco) {
      el.innerHTML = `<div class="of-palco of-palco3d">
        <div class="of-3d"><div class="of-load"><i></i>Montando o escritório…</div>
          <div class="of-cams" role="group" aria-label="Câmera"><button type="button" data-cam="sala" aria-pressed="true" title="Visão da sala">${IC("house")} Sala</button><button type="button" data-cam="tela" aria-pressed="false" title="Chegar perto da tela do computador">${IC("monitor")} Tela</button><button type="button" data-cam="seguir" aria-pressed="false" title="Câmera seguindo o boneco">${IC("crosshair")} Seguir</button><button type="button" data-act="editar" aria-pressed="false" title="Arrastar e girar os móveis">${IC("arrows-out-cardinal")} Arrumar</button></div>
          <div class="of-edbar" hidden><span>${IC("hand-grabbing")} Arraste um móvel para mudar de lugar · toque nele para girar</span><button type="button" data-act="restaurar">${IC("arrow-counter-clockwise")} Restaurar</button><button type="button" data-act="pronto" class="pri">${IC("check")} Pronto</button></div>
          <span class="of-dica">arraste para girar · toque duplo para centralizar</span></div>
        <div class="of-card"><span class="of-emo"></span><div><b></b><span></span></div><strong></strong></div>
      </div>`;
      palco = el.querySelector(".of-palco3d"); inst = null;
      palco.querySelector(".of-cams").addEventListener("click", (e) => {
        const ed = e.target.closest("[data-act=editar]"); if (ed) { editar(ed.getAttribute("aria-pressed") !== "true"); return; }
        const b = e.target.closest("[data-cam]"); if (!b) return;
        if (editando) editar(false);
        palco.querySelectorAll("[data-cam]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        if (inst) inst.setCam(b.dataset.cam);
      });
      palco.querySelector(".of-edbar").addEventListener("click", (e) => {
        const b = e.target.closest("[data-act]"); if (!b) return;
        if (b.dataset.act === "restaurar" && inst) inst.restaurar();
        if (b.dataset.act === "pronto") editar(false);
      });
    }
    palco.className = `of-palco of-palco3d of-h-${h}${inst ? " pronto" : ""}`;
    palco.querySelector(".of-emo").innerHTML = IC(info.ic);
    palco.querySelector(".of-card b").textContent = info.titulo + (d.fechado ? " · mercado fechado" : "");
    palco.querySelector(".of-card span:not(.of-emo)").textContent = d.fechado ? "Bolsa fechada hoje. Dia de videogame." : info.frase;
    const st = palco.querySelector(".of-card strong"); st.textContent = v; st.className = d.pct > 0 ? "up" : d.pct < 0 ? "down" : ""; st.hidden = !v;
    ultimo = { humor: h, titulo: info.titulo, pct: d.pct, cor: d.cor, icone: d.icone || "", boneco: d.boneco || "", acessorio: d.acessorio || "", fechado: !!d.fechado, sim: !!d.sim, tudo: !!d.tudo, ativos: d.ativos || [], serie: d.serie || null, tem, layout: d.layout || null, onLayout: d.onLayout || null };
    if (inst && inst.el.isConnected) { inst.atualizar(ultimo); return h; }
    if (!temWebGL()) { usar2d(el, d); return h; }
    if (!carregando) carregando = import(MOD).then((m) => (mod = m));
    carregando.then(() => {
      const box = el.querySelector(".of-3d"); if (!box) return;
      if (inst && inst.el.isConnected) { inst.atualizar(ultimo); return; }
      try { inst = mod.criar(box, ultimo); } catch (err) { console.warn("Escritório 3D indisponível:", err); usar2d(el, d); return; }
      inst.secao = secao; pendentes.splice(0).forEach((t) => inst.log(t)); if (editando) inst.setEdicao(true);
      const ld = box.querySelector(".of-load"); if (ld) ld.remove();
      el.querySelector(".of-palco3d").classList.add("pronto");
    }).catch((err) => { console.warn("Escritório 3D indisponível:", err); usar2d(el, d); });
    return h;
  }
  // Modo de arrumar: arrasta e gira os móveis (a câmera fica parada na visão da sala)
  let editando = false;
  function editar(on) {
    editando = !!on; const pal = el0 && document.querySelector(".of-palco3d"); if (!pal) return;
    pal.classList.toggle("of-editando", editando);
    const b = pal.querySelector("[data-act=editar]"); if (b) b.setAttribute("aria-pressed", String(editando));
    const bar = pal.querySelector(".of-edbar"); if (bar) bar.hidden = !editando;
    if (editando) pal.querySelectorAll("[data-cam]").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.cam === "sala")));
    if (inst) { if (editando) inst.setCam("sala", true); inst.setEdicao(editando); }
  }
  // Guarda ou coloca de volta um item da decoração
  function equipar(id, on) { if (inst) inst.equipar(id, on); }
  // Prévia do boneco (perfil): gira sozinho, arrasta para girar
  async function vitrine(el, d) {
    if (!el || !temWebGL()) return null;
    try { if (!carregando) carregando = import(MOD).then((m) => (mod = m)); await carregando; return mod.vitrine ? mod.vitrine(el, d) : null; } catch (err) { console.warn("Prévia do boneco indisponível:", err); return null; }
  }
  window.RadarEscritorio = { render, humorDe, HUMORES, DECOR, acao, esc, vitrine, editar, equipar };
})();
