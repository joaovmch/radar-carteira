
  /* ----- lugares no mundo (seguem os móveis) ----- */
  lugares() {
    const n = this.nav, l = (id, p) => this.lugar(id, p);
    const livre = (p) => { const q = n.perto(p[0], p[1]); return [q[0], q[1], p[2] ?? 0]; };
    const monXZ = l("mesa", [7.45, 1.95]), monAlvo = l("mesa", [6.8, 0.3]);
    const L = {
      sofaS: l("sofa", [3.2, 3.0, PI]), sofaP: livre(l("sofa", [3.2, 2.3, PI])),
      cafeP: livre(l("cafe", [0.98, 4.9, -PI / 2])),
      cadS: l("mesa", [6.8, 1.2, PI]), cadP: livre(l("mesa", [6.8, 1.95, PI])),
      monP: livre([monXZ[0], monXZ[1], yawPara(monXZ, monAlvo)]),
      ritmo1: livre(l("mesa", [5.5, 2.35])), ritmo2: livre(l("mesa", [7.9, 2.45])),
      polS: l("poltrona", [0.92, 3.2, PI / 4]), polP: livre(l("poltrona", [1.36, 3.64, PI / 4])),
      janP: livre([0.62, 1.85, -PI / 2]), danca: livre([3.4, 5.25, PI / 4]),
      sinP: this.sinP ? livre(this.sinP) : livre([8.5, 4.6, -PI / 2]),
    };
    return L;
  }
  // tacada: bola branca, direção da caçapa, onde fica a ponta do taco e onde o boneco se posiciona
  calibrarTacada() {
    const s = this.sinuca; const Bc = [7.62, 4.52]; const pk = [s.x0 + 0.11, s.z0 + 0.11];
    const d = [pk[0] - Bc[0], pk[1] - Bc[1]], Ld = Math.hypot(...d), u = [d[0] / Ld, d[1] / Ld];
    const Y = [Bc[0] + u[0] * 0.5, Bc[1] + u[1] * 0.5];
    const C = [Y[0] - u[0] * 0.06, Y[1] - u[1] * 0.06];
    const fimB = [C[0] + u[0] * 0.1 - u[1] * 0.12, C[1] + u[1] * 0.1 + u[0] * 0.12];
    this.bolas = { R: Bc, Y, C, u, fimB, pk };
    const yaw = Math.atan2(u[0], u[1]); const dir = [u[1], -u[0]];   // direita do boneco
    const raiz = [Bc[0] - u[0] * 0.9 - dir[0] * 0.13, Bc[1] - u[1] * 0.9 - dir[1] * 0.13];
    this.tacoBase = { tip: [Bc[0] - u[0] * 0.035, Bc[1] - u[1] * 0.035], u, el: 0.16 };
    this.sinP = this.lugar("sinuca", [raiz[0], raiz[1], yaw]);
  }
  // próxima jogada de sinuca (uma por ciclo da rotina; a mesma chave devolve o mesmo plano)
  planoSinuca(chave) {
    if (this.planoChave === chave && this.planoAtual) return this.planoAtual;
    // o lugar dele: dentro da sala e longe dos outros móveis (pode ficar colado na mesa)
    const ok = (x, z, yaw) => {
      const w = this.lugar("sinuca", [x, z, yaw]); if (w[0] < 0.32 || w[0] > W - 0.32 || w[1] < 0.32 || w[1] > D - 0.25) return false;
      for (const id in this.moveis) { const m = this.moveis[id]; if (id === "sinuca" || m.piso || !this.ativo(m)) continue;
        for (const bx of this.caixasDe(m)) { const [lx, lz] = giraXZ(w[0] - bx.c[0], w[1] - bx.c[1], -bx.r); if (Math.abs(lx) < bx.h[0] + 0.2 && Math.abs(lz) < bx.h[1] + 0.2) return false; } }
      return true;
    };
    const pl = this.mesaSin.planejar(ok); pl.lugar = this.lugar("sinuca", [pl.stance[0], pl.stance[1], pl.yaw]);
    this.planoChave = chave; this.planoAtual = pl; return pl;
  }
  // bolas: estado parado (lista de bolas) ou um quadro da gravação; tSim = tempo dentro da gravação (para a queda na caçapa)
  mostrarBolas(est, tSim, quadro) {
    const r = SIN.r, ant = this.bolaAnt || (this.bolaAnt = []);
    for (let n = 0; n <= 9; n++) {
      const m = this.bolasM[n]; let x, z, em, cai = -1;
      if (quadro) { const q = quadro.find((_, i) => (this.bolaOrdem ? this.bolaOrdem[i] : i) === n) || quadro[n]; [x, z, em, cai] = q; }
      else { const b = est.find((q) => q.n === n); if (!b) { m.visible = false; continue; } x = b.x; z = b.z; em = b.em ? 1 : 0; }
      if (em) { m.visible = true; m.scale.setScalar(1); m.position.set(x, SIN.y, z); }
      else if (cai >= 0 && tSim - cai < 0.3) { const k = (tSim - cai) / 0.3; m.visible = true; m.position.set(x, SIN.y - 0.07 * k, z); m.scale.setScalar(1 - 0.4 * k); }
      else m.visible = false;
      // rola: gira em volta do eixo perpendicular ao movimento
      const a = ant[n]; if (a && m.visible) { const dx = x - a[0], dz = z - a[1], d = Math.hypot(dx, dz); if (d > 1e-5 && d < 0.3) { const eixo = V(dz / d, 0, -dx / d); m.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(eixo, d / r)); } }
      ant[n] = [x, z];
    }
  }
  // o que mostrar na mesa neste quadro (fase|id do plano vem do passo da rotina)
  mostrarSinuca(p, tl) {
    const [fase, idS] = String(p.bolas || "").split("|"); const pl = idS ? this.mesaSin.planos.get(+idS) : null;
    if (!pl) { this.mostrarBolas(this.mesaSin.vista, -1); return; }
    this.bolaOrdem = pl.sim.final.map((b) => b.n);
    if (fase === "pre") this.mostrarBolas(pl.pre, -1);
    else if (fase === "rack") {   // as bolas somem e o losango aparece arrumado
      const k = fase2(tl, 0.4, 2.2);
      if (k < 0.5) { const v = this.mesaSin.vista; this.mostrarBolas(v, -1); this.bolasM.forEach((m) => m.scale.multiplyScalar(1 - k * 2)); }
      else { this.mostrarBolas(pl.pre, -1); this.bolasM.forEach((m) => m.scale.multiplyScalar((k - 0.5) * 2)); }
    }
    else if (fase === "jogo") {
      const tt = Math.max(0, tl - TACADA); const Q = pl.sim.quadros; const i = Math.min(Q.length - 1, Math.floor(tt * 60));
      this.mostrarBolas(null, tt, Q[i]); if (i === Q.length - 1) this.mesaSin.vista = pl.sim.final;
    } else { this.mostrarBolas(pl.sim.final, 99); this.mesaSin.vista = pl.sim.final; }
  }
  // pontas do taco (mundo) para cada estado: -1 encostado na mesa, 0 na mão (em pé), 1 na tacada
  tacoPontas(p) {
    const b = this.boneco, root = b.root; const t = p.taco, rec = p.recuo || 0;
    const viaMesa = (x, y, z) => this.pto("sinuca", x, y, z);
    const apoio = [viaMesa(8.14, 0.02, 5.1), viaMesa(8.11, 1.46, 4.93)];
    const mao = [root.localToWorld(V(0.27, 0.05, 0.17)), root.localToWorld(V(0.33, 1.5, 0.25))];
    const tb = this.tacoBase; const cE = Math.cos(tb.el), sE = Math.sin(tb.el);
    const ax = this.pto("sinuca", tb.tip[0] - tb.u[0] * cE, 0.81 + sE, tb.tip[1] - tb.u[1] * cE).sub(this.pto("sinuca", tb.tip[0], 0.81, tb.tip[1])).normalize();
    const tip = this.pto("sinuca", tb.tip[0], 0.812, tb.tip[1]).addScaledVector(ax, rec * 0.2);
    const jogo = [tip.clone().addScaledVector(ax, 1.45), tip];
    let a, c, w;
    if (t <= 0) { w = suave(t + 1); a = apoio[0].clone().lerp(mao[0], w); c = apoio[1].clone().lerp(mao[1], w); }
    else { w = suave(t); a = mao[0].clone().lerp(jogo[0], w); c = mao[1].clone().lerp(jogo[1], w); }
    // durante a troca, o taco passa por cima da mesa (nunca por dentro)
    if (t > 0 && t < 1) { const sobe = Math.sin(PI * w) * 0.25; a.y += sobe; c.y += sobe; }
    return { butt: a, tip: c, ax, apoioBridge: this.pto("sinuca", tb.tip[0], 0.8, tb.tip[1]).addScaledVector(ax, 0.26).setY(0.795), dedos: ax.clone().negate().setY(-0.15) };
  }
  aplicarTaco(p) {
    const [, idS] = String(p.bolas || "").split("|"); const pl = idS ? this.mesaSin.planos.get(+idS) : null;
    if (pl) this.tacoBase = { tip: pl.tip, u: pl.u, el: 0.14 };
    const T = this.tacoPontas(p); const taco = this.itens.taco; taco.visible = true;
    const dir = T.tip.clone().sub(T.butt); const L = dir.length() || 1; dir.divideScalar(L);
    taco.position.copy(T.butt); taco.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
    const t = p.taco; const k = cl(t + 1);
    // mão direita no cabo: em pé segura alto, na tacada segura atrás
    const g = lerp(0.98, 0.5, cl(t)); const pg = T.butt.clone().addScaledVector(dir, g);
    p.ikR = [pg.x, pg.y, pg.z]; p.kR = Math.max(p.kR || 0, k);
    if (t > 0.3) p.poloR = [0.35, 0.75, -1];   // na tacada, cotovelo para cima e para trás, antebraço caindo reto até o cabo
    if (t > 0.02) { const br = T.apoioBridge; p.ikL = [br.x, br.y, br.z]; p.kL = Math.max(p.kL || 0, cl(t)); p.oriL = [T.dedos.x, T.dedos.y, T.dedos.z]; }
    p.item = t > 0.5 ? "tacoShot" : t > -0.5 ? "tacoV" : p.item;
  }
  /* balões de pensamento: de tempos em tempos ele pensa no humor, na carteira, numa ação ou no que está fazendo */
  pensamento(p, T, dt, cab, fx, st) {
    if (!this.pensa) {
      const tx = tela(512, 288); const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx.t, transparent: true, depthWrite: false, depthTest: false, toneMapped: false }));
      sp.renderOrder = 10; sp.visible = false; this.scene.add(sp); this.pensa = { tx, sp, prox: T + 4 + Math.random() * 4, ini: -99, dur: 4.2, chave: "" };
    }
    const P = this.pensa, ocupado = p.balao > 0.05 || this.edit || this.reduz;
    if (T < P.ini - 1 || T > P.prox + 60) { P.prox = T + 3; P.ini = -99; }   // relógio pulou (testes)
    if (!ocupado && T >= P.prox) {
      const op = this.ideias(p, fx, st); const it = op[Math.floor(Math.random() * op.length)];
      if (it) { this.desenharPensamento(it); P.ini = T; P.prox = T + 12 + Math.random() * 8; } else P.prox = T + 5;
    }
    const k = (T - P.ini) / P.dur; const vis = k >= 0 && k <= 1 && !ocupado; P.sp.visible = vis;
    if (vis) {
      const ent = sai(cl(k / 0.07)), sai2 = 1 - suave(cl((k - 0.88) / 0.12)), esc = b2(ent) * sai2;
      P.sp.position.set(cab.x, cab.y + 0.74 + 0.025 * Math.sin(T * 2.2), cab.z); P.sp.scale.set(1.02 * esc, 0.574 * esc, 1); P.sp.material.opacity = sai2;
    }
    function b2(t) { return t < 1 ? 1 + 0.12 * Math.sin(PI * t) : 1; }
  }
  // o que ele pode estar pensando agora
  ideias(p, fx, st) {
    const h = this.h, d = this.d || {}, out = [];
    const sent = { tranquilo: ["smiley", "Tudo calmo hoje", "#7C3AED"], feliz: ["smiley", "Dia bom!", "#16A34A"], euforico: ["confetti", "Que dia!!", "#D97706"], preocupado: ["smiley-nervous", "Hmm… vermelho", "#EA580C"], triste: ["smiley-sad", "Paciência, vai passar", "#2563EB"] }[h];
    if (sent) out.push({ ic: sent[0], txt: sent[1], cor: sent[2] });
    if (d.pct != null && isFinite(d.pct) && !d.sim) { const v = d.pct; out.push({ ic: v >= 0 ? "chart-line-up" : "chart-line-down", txt: "Carteira " + (v > 0 ? "+" : "") + v.toFixed(2).replace(".", ",") + "%", cor: v >= 0 ? "#16A34A" : "#DC2626" }); }
    const at = (d.ativos || []).filter((a) => a.vd != null && isFinite(a.vd));
    if (at.length) { const a = at[Math.floor(Math.random() * at.length)]; out.push({ ic: "coins", txt: a.t + " " + (a.vd >= 0 ? "▲" : "▼") + " " + Math.abs(a.vd).toFixed(2).replace(".", ",") + "%", cor: a.vd >= 0 ? "#16A34A" : "#DC2626" }); }
    const bolas = String(p.bolas || "");
    if (bolas.startsWith("pre")) out.push({ ic: "target", txt: "Essa entra!", cor: "#16A34A" }, { ic: "target", txt: "Mira na caçapa…", cor: "#0F766E" });
    if (p.item === "controle") out.push({ ic: "lightning", txt: "Bora zerar essa fase!", cor: "#7C3AED" });
    if (p.item === "tecla") out.push({ ic: "chart-line-up", txt: "Analisando a carteira…", cor: "#2563EB" });
    if (fx === "cafe" || fx === "gole") out.push({ ic: "sparkle", txt: "Cafezinho!", cor: "#92400E" });
    if (h === "triste") out.push({ ic: "trophy", txt: "Longo prazo.", cor: "#2563EB" });
    void st; return out;
  }
  desenharPensamento(it) {
    const { g, t } = this.pensa.tx; g.clearRect(0, 0, 512, 288);
    // nuvem: vários círculos, contorno suave, e bolinhas descendo até a cabeça
    const bol = [[120, 112, 70], [200, 82, 78], [300, 84, 80], [380, 112, 66], [330, 150, 62], [190, 152, 66], [256, 140, 74], [120, 150, 52], [400, 150, 46]];
    g.save(); g.shadowColor = "rgba(15,23,42,.25)"; g.shadowBlur = 14; g.shadowOffsetY = 5; g.fillStyle = "#FFFFFF";
    for (const [x, y, r] of bol) { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
    for (const [x, y, r] of [[200, 228, 16], [178, 258, 10]]) { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
    g.restore();
    g.font = "bold 40px system-ui, sans-serif"; let tam = 40; while (g.measureText(it.txt).width > 300 && tam > 24) { tam -= 2; g.font = `bold ${tam}px system-ui, sans-serif`; }
    const w = g.measureText(it.txt).width, x0 = 256 - (w + 62) / 2;
    if (window.RI) window.RI.desenhar(g, it.ic, x0 + 24, 120, 52, it.cor);
    g.fillStyle = "#1F2937"; g.textBaseline = "middle"; g.fillText(it.txt, x0 + 62, 122); g.textBaseline = "alphabetic";
    g.fillStyle = it.cor; g.fillRect(x0 + 62, 148, Math.min(w, 120), 4);
    t.needsUpdate = true;
  }
  // onde cada dardo vai cravar (o plano é sorteado quando a visita ao alvo é montada)
  planejarDardos() {
    const habil = { euforico: 0.045, feliz: 0.06, tranquilo: 0.075, preocupado: 0.1, triste: 0.12 }[this.h] || 0.08;
    const pts = [0, 1, 2].map(() => { const a = Math.random() * TAU, r = Math.min(0.2, Math.abs(Math.sqrt(-2 * Math.log(Math.random() + 1e-9)) * habil * 0.7)); return [Math.cos(a) * r, Math.sin(a) * r]; });
    const dist = pts.map(([y, z]) => Math.hypot(y, z)); this.dardosPlano = { pts, dist, mosca: dist.some((d) => d < 0.035), ruim: dist.every((d) => d > 0.12) };
    return this.dardosPlano;
  }
  pontoDardo(i) { const pl = this.dardosPlano || this.planejarDardos(); const [dy, dz] = pl.pts[i] || [0, 0]; return this.dardosCentro.clone().add(V(0.02, dy, dz)); }
  teclado() { return { L: this.pto("mesa", 6.62, 0.822, 0.645), R: this.pto("mesa", 6.97, 0.822, 0.645) }; }
  mundo(o) { return o.getWorldPosition(new THREE.Vector3()); }
  alvoCao() { return this.mundo(this.cao.cab).add(V(0, 0.05, 0)); }
  alvoArcade() { return this.arcMao.map((o) => this.mundo(o)); }
  alvoTouro() { return this.mundo(this.touroCab); }
  alvoCofre() { return this.mundo(this.cofreMacaneta); }
  alvoPorco() { return this.mundo(this.porco).add(V(0, 0.17, 0)); }
  alvoTrofeu() { const p = this.trofeuPai, b = this.trofeuBase; return { L: p.localToWorld(b.clone().add(V(-0.1, 0.17, 0))), R: p.localToWorld(b.clone().add(V(0.1, 0.17, 0))) }; }

  /* ----- dados do app ----- */
  atualizar(d) {
    const ant = this.d; this.d = d;
    const h = d.humor || "tranquilo";
    if (this.boneco) { if (d.boneco !== ant.boneco || d.acessorio !== ant.acessorio) this.boneco.setAparencia(d.boneco, d.acessorio); this.boneco.setCor(d.cor); if (d.icone !== ant.icone) this.boneco.setIcone(d.icone); }
    if (this.cadAcento) this.cadAcento.color.set(d.cor || "#2457F5");
    this.titulo = d.titulo; this.pctTxt = d.pct == null || !isFinite(d.pct) ? "" : (d.pct > 0 ? "+" : "") + d.pct.toFixed(2).replace(".", ",") + "%";
    const velhos = Object.fromEntries((ant.ativos || []).map((a) => [a.t, a]));
    for (const a of d.ativos || []) { const o = velhos[a.t]; if (o && o.preco != null && a.preco != null && Math.abs(o.preco - a.preco) > 1e-9) this.flash[a.t] = { t: performance.now(), up: a.preco > o.preco }; }
    if (ant.ativos && JSON.stringify((ant.ativos || []).map((a) => [a.t, a.preco])) !== JSON.stringify((d.ativos || []).map((a) => [a.t, a.preco]))) this.log("cotações atualizadas");
    // gráfico do dia de verdade (mesmos pontos do gráfico "Hoje" do site): a linha passa suave da forma antiga para a nova
    const sp = !d.sim && d.serie && d.serie.pts && d.serie.pts.length > 1 ? d.serie.pts : null;
    if (sp) {
      const v = sp.map((q) => q[1]); const a0 = this.serieAlvo;
      if (!a0 || a0.v.length !== v.length || a0.v.some((x, i) => Math.abs(x - v[i]) > 1e-6)) {
        const atual = a0 ? this.serieAgora() : null;
        this.serieDe = atual ? reamostra(atual, v.length) : v.map(() => 0);   // na primeira vez, sobe a partir da linha do zero
        this.serieAlvo = { v, ts: sp.map((q) => q[0]), hoje: !!d.serie.hoje }; this.serieT0 = performance.now(); this.sujo = true;
      }
    } else this.serieAlvo = null;
    if (!d.sim && d.pct != null && isFinite(d.pct)) { const l = this.hist[this.hist.length - 1]; if (!l || Math.abs(l.v - d.pct) > 1e-6) { this.hist.push({ v: d.pct, t: Date.now() }); if (this.hist.length > 60) this.hist.shift(); } }
    if (d.layout !== undefined && !this.salvando && !this.arrasto) { const n = (L) => JSON.stringify({ m: (L && L.m) || {}, off: [...((L && L.off) || [])].sort(), c: (L && L.c) || {} }); if (n(d.layout) !== n(this.layoutAtual())) { this.aplicarLayout(d.layout, true); this.navOk = false; } }
    this.tem = d.tem || {};
    if (!this.dir) this.dir = new Diretor(this);
    const mudou = this.aplicarDecor(!d.tudo && !d.sim);
    if (h !== this.h) {
      if (this.h) this.log(d.sim ? "simulando: " + (d.titulo || h).toLowerCase() : "humor: " + (d.titulo || h).toLowerCase());
      this.h = h; this.aplicarHumor(); this.dir.humor(h);
    }
    if (mudou || !this.navOk) { this.navOk = true; this.mudouLayout(); }
    this.renderer.domElement.setAttribute("aria-label", "Escritório 3D: " + (d.titulo || ""));
    this.sujo = true;
  }
  // decoração visível = liberada e equipada; item recém-liberado aparece com uma animação de descoberta
  aplicarDecor(marcarVistos) {
    let mudou = false;
    for (const id in this.dec) {
      const o = this.dec[id]; const alvo = !!this.tem[id] && !this.off.has(id);
      const obj = o.outer || o; if (obj.visible === alvo) continue;
      obj.visible = alvo; mudou = true;
      if (alvo) {
        this.pops[id] = performance.now();
        if (marcarVistos && !this.vistos.has(id)) { this.vistos.add(id); this.salvarVistos(); if (this.dir) this.dir.novidade(id); }
      }
    }
    if (this.dec.cachorro) this.cao.g.visible = this.dec.cachorro.outer.visible;
    return mudou;
  }
  get pops() { return this._pops || (this._pops = {}); }
  lerVistos() { try { return new Set(JSON.parse(localStorage.getItem("radar-esc-vistos") || "[]")); } catch (_) { return new Set(); } }
  salvarVistos() { try { localStorage.setItem("radar-esc-vistos", JSON.stringify([...this.vistos])); } catch (_) { /* modo privado */ } }
  // equipar/desequipar um item da decoração
  equipar(id, on) {
    if (on) this.off.delete(id); else this.off.add(id);
    if (this.aplicarDecor(false)) this.mudouLayout();
    this.avisarLayout();
    this.log((on ? "colocou " : "guardou ") + (this.moveis[id] ? this.moveis[id].nome.toLowerCase() : id));
  }
  avisarLayout() { if (typeof this.d.onLayout === "function") { this.salvando = true; try { this.d.onLayout(this.layoutAtual()); } finally { this.salvando = false; } } }
  restaurar() { const off = [...this.off]; this.aplicarLayout({ off, c: this.cores }); this.avisarLayout(); this.log("restaurou os móveis"); }
  aplicarHumor() {
    const L = LUZ[this.h];
    this.cfg = L;
    this.confete.visible = this.h === "euforico";
    for (const n of this.notas) this.scene.remove(n.m); this.notas = [];
    this.aplicarLuz();
  }
  aplicarLuz() {
    const L = this.cfg; const noite = this.noite;
    this.hemi.intensity = L.hemi * (noite ? 0.55 : 1); this.hemi.color.set(noite ? "#A9B8E8" : "#E3EBFF");
    this.key.intensity = L.key * (noite ? 0.35 : 1); this.key.color.set(noite ? "#9DB0FF" : L.keyCor);
    this.fill.intensity = noite ? 0.25 : 0.35;
    const lamp = L.lamp || noite;
    this.lampLuz.intensity = lamp ? 2.6 : 0; this.lampHalo.material.opacity = lamp ? 0.55 : 0; this.cupula.material.emissiveIntensity = lamp ? 1.1 : 0;
    const pend = L.pend || noite;
    this.pendLuz.intensity = pend ? 2.4 : 0;
    this.tvLuz.color.set(L.tv); this.monLuz.color.set(L.mon); this.monHalo.material.color.set(L.mon);
    this.feixe.material.opacity = noite ? 0.06 : L.raio; this.feixe.material.color.set(noite ? "#A5B4FC" : "#FFE7A3");
    this.renderer.toneMappingExposure = L.exp * (noite ? 0.86 : 1); this.scene.environmentIntensity = noite ? 0.14 : 0.32;
  }

  /* ----- câmera, modo de edição e controles ----- */
  ligarControles() {
    const c = this.renderer.domElement; let arr = null;
    c.style.touchAction = "pan-y";
    const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plano = new THREE.Plane(V(0, 1, 0), 0);
    const mira = (e) => { const r = c.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, this.cam); };
    const chao = (e) => { mira(e); const p = new THREE.Vector3(); return ray.ray.intersectPlane(plano, p) ? p : null; };
    c.addEventListener("pointerdown", (e) => {
      if (this.edit) {
        mira(e);
        const alvos = []; for (const id in this.moveis) { const m = this.moveis[id]; if (this.ativo(m)) alvos.push(m.outer); }
        const hit = ray.intersectObjects(alvos, true).find((h) => h.object.userData.movel);
        if (hit) {
          const m = this.moveis[hit.object.userData.movel]; const p = chao(e) || hit.point;
          this.arrasto = { m, ini: [m.x, m.z, m.ri], off: [m.x - p.x, m.z - p.z], moveu: false, id: e.pointerId, x: e.clientX, y: e.clientY, ok: true };
          this.sel = m; try { c.setPointerCapture(e.pointerId); } catch (_) { /* ok */ }
          e.preventDefault(); this.sujo = true; return;
        }
      }
      arr = { x: e.clientX, y: e.clientY, az: this.az, el: this.el_, id: e.pointerId, moveu: false };
    });
    window.addEventListener("pointermove", (e) => {
      const a = this.arrasto;
      if (a && e.pointerId === a.id) {
        if (!a.moveu && Math.hypot(e.clientX - a.x, e.clientY - a.y) > 5) a.moveu = true;
        if (!a.moveu) return;
        const p = chao(e); if (!p) return;
        let x = Math.round((p.x + a.off[0]) / 0.05) * 0.05, z = Math.round((p.z + a.off[1]) / 0.05) * 0.05;
        [x, z] = this.prender(a.m, x, z, a.m.ri);
        a.ok = this.cabe(a.m, x, z, a.m.ri); this.posicionar(a.m, x, z, a.m.ri); this.sujo = true;
        return;
      }
      if (!arr || e.pointerId !== arr.id) return;
      const dx = e.clientX - arr.x, dy = e.clientY - arr.y;
      if (!arr.moveu && Math.hypot(dx, dy) > 6) { arr.moveu = true; try { c.setPointerCapture(e.pointerId); } catch (_) { /* ok */ } if (this.camModo !== "sala") this.setCam("sala", true); }
      if (arr.moveu) { this.az = cl(arr.az - dx * 0.006, 0.12, PI / 2 - 0.12); if (e.pointerType !== "touch") this.el_ = cl(arr.el + dy * 0.004, 0.22, 1.0); this.sujo = true; }
    });
    const fim = (e) => {
      const a = this.arrasto;
      if (a && (!e || e.pointerId === a.id)) {
        this.arrasto = null; const m = a.m;
        if (!a.moveu) {   // toque: gira 45°
          for (let k = 1; k <= 8; k++) { const ri = a.ini[2] + k; const [x, z] = this.prender(m, m.x, m.z, ri); if (this.cabe(m, x, z, ri)) { this.posicionar(m, x, z, ri); break; } }
          this.log("girou " + m.nome.toLowerCase());
        } else if (!a.ok) { this.posicionar(m, ...a.ini); this.log("não cabe ali"); }
        else this.log("moveu " + m.nome.toLowerCase());
        this.mudouLayout(); this.avisarLayout(); this.sujo = true; return;
      }
      if (arr && arr.moveu) this.log("girou a câmera"); arr = null;
    };
    window.addEventListener("pointerup", fim); window.addEventListener("pointercancel", fim);
    c.addEventListener("dblclick", () => { if (this.edit) return; this.az = PI / 4; this.el_ = 0.5; this.setCam("sala"); });
  }
  setEdicao(on) {
    this.edit = !!on; this.sel = null; this.sujo = true;
    this.renderer.domElement.style.cursor = on ? "grab" : "";
    for (const id in this.moveis) this.moveis[id].marca.visible = false;
    if (on && this.camModo !== "sala") this.setCam("sala", true);
    this.log(on ? "arrumando o escritório" : "terminou de arrumar");
  }
  setCam(m, silencio) { this.camModo = m; this.sujo = true; if (!silencio) this.log({ sala: "visão da sala", tela: "zoom no computador", seguir: "seguindo o boneco" }[m] || m); }
  alvoCamera(T) {
    const asp = this.cam.aspect;
    if (window.__ofCamOv) return window.__ofCamOv(this, T, V);
    if (this.camModo === "tela") return asp < 1 ? { pos: this.pto("mesa", 7.12, 1.2, 1.1), alvo: this.pto("mesa", 6.8, 1.13, 0.22), fov: 70 } : { pos: this.pto("mesa", 7.2, 1.24, 1.2), alvo: this.pto("mesa", 6.87, 1.12, 0.22), fov: 50 };
    if (this.camModo === "seguir") {
      const r = this.boneco.root.position; const az = this.az + 0.1 * Math.sin(T * 0.2), el = 0.42, dist = asp < 1 ? 4.6 : 3.9;
      const pos = V(r.x + Math.sin(az) * Math.cos(el) * dist, 0.95 + Math.sin(el) * dist, r.z + Math.cos(az) * Math.cos(el) * dist);
      return { pos, alvo: V(r.x, 0.95, r.z), fov: 38 };
    }
    const fov = 30, sway = this.reduz || this.edit ? 0 : Math.sin(T * 0.15) * 0.025;
    const chave = [this.az.toFixed(3), this.el_.toFixed(3), asp.toFixed(3)].join();
    if (chave !== this.fitKey) { this.fitKey = chave; this.fit = this.enquadrar(this.az, this.el_, fov, asp); }
    const { dist, alvo } = this.fit; const ce = Math.cos(this.el_), az = this.az + sway;
    return { pos: V(alvo.x + Math.sin(az) * ce * dist, alvo.y + Math.sin(this.el_) * dist, alvo.z + Math.cos(az) * ce * dist), alvo: alvo.clone(), fov };
  }

  /* ----- quadro a quadro ----- */
  laco() {
    this.raf = 0;
    if (!this.el.isConnected) { this.destruir(); return; }
    const pausado = document.hidden || this.el.closest(".of-pausa");
    if (!pausado) {
      const agora = performance.now(); const dtr = (agora - this.tAnt) / 1000; const dt = Math.min(window.__ofT != null ? 0.3 : 0.05, dtr); this.tAnt = agora;
      const T = this.reduz ? 2 : (agora - this.t0) / 1000;
      if (!this.reduz || this.sujo) this.quadro(T, this.reduz ? 0 : dt);
      this.sujo = false;
      // qualidade adaptativa: se o aparelho não acompanha, baixa a resolução aos poucos (nunca abaixo de 1×)
      this.ms = this.ms == null ? 16 : this.ms * 0.95 + Math.min(dtr * 1000, 100) * 0.05;
      if (this.ms > 26 && this.ao && !window.__ofComAO && agora - (this.tPr || 0) > 3000) { this.tPr = agora; this.ao = false; this.ms = 18; }
      else if (this.ms > 30 && this.pr > 1 && agora - (this.tPr || 0) > 3000) { this.tPr = agora; this.pr = Math.max(1, this.pr - 0.25); this.renderer.setPixelRatio(this.pr); this.redimensionar(); }
    } else this.tAnt = performance.now();
    this.raf = requestAnimationFrame(this.laco);
  }
  emitir(pos, n = 10, cor = "#FDE68A") {
    let k = 0;
    for (const f of this.faiscas) { if (f.vida < 1.1) continue; f.vida = 0; f.s.visible = true; f.s.material.color.set(cor); f.s.position.copy(pos); f.v = V((Math.random() - 0.5) * 1.6, 1 + Math.random() * 1.4, (Math.random() - 0.5) * 1.6); if (++k >= n) break; }
  }
  quadro(T, dt) {
    const hr = new Date().getHours(); const noite = window.__ofNoite != null ? !!window.__ofNoite : hr < 6 || hr >= 19;
    if (noite !== this.noite) { this.noite = noite; this.aplicarLuz(); }
    const b = this.boneco;
    const r = this.dir.passo(window.__ofT != null ? window.__ofT : null, dt);
    let p = r.pose; const st = r.s || {}; const fx = st.fx || ""; const tl = r.tl; const fxk = r.pose.fxk || 0;
    // posição e giro do corpo com mola (sem trancos entre passos)
    const pf = this.posF || (this.posF = { x: r.pos[0], z: r.pos[1], y: r.pos[2], vx: 0, vz: 0, vy: 0 });
    const mola = (x, v, alvo, w) => { const e = x - alvo, ex = Math.exp(-w * dt), tmp = (v + w * e) * dt; return [alvo + (e + tmp) * ex, (v - w * tmp) * ex]; };
    const px0 = pf.x, pz0 = pf.z, py0 = pf.y;
    if (dt > 0 && window.__ofT == null) {
      [pf.x, pf.vx] = mola(pf.x, pf.vx, r.pos[0], 12); [pf.z, pf.vz] = mola(pf.z, pf.vz, r.pos[1], 12);
      const ya = pf.y + difAng(pf.y, r.pos[2]); [pf.y, pf.vy] = mola(pf.y, pf.vy, ya, 11);
    } else { pf.x = r.pos[0]; pf.z = r.pos[1]; pf.y = r.pos[2]; }
    // passinhos automáticos ao girar ou se ajeitar no lugar (os pés não deslizam)
    if (dt > 0 && !p.andando && (p.sent || 0) < 0.3) {
      const vel = Math.hypot(pf.x - px0, pf.z - pz0) / dt, vy = Math.abs(difAng(py0, pf.y)) / dt;
      const quer = cl((vel - 0.08) * 5 + (vy - 0.5) * 0.9);
      this.passoK = lerp(this.passoK || 0, quer, Math.min(1, dt * 8));
      this.passoF = (this.passoF || 0) + dt * (2.2 + vel * 4 + vy * 0.8) * this.passoK;
      if (this.passoK > 0.02) {
        const s = Math.sin(this.passoF * PI), k = this.passoK;
        p = { ...p, lL: [p.lL[0] + 0.28 * Math.max(0, s) * k, p.lL[1] + 0.55 * Math.max(0, s) * k], lR: [p.lR[0] + 0.28 * Math.max(0, -s) * k, p.lR[1] + 0.55 * Math.max(0, -s) * k], alt: p.alt - 0.012 * Math.abs(s) * k };
      }
    }
    // camada de vida (olhar, manias, peso do corpo, expressões) por cima da rotina
    this.decidirProps(st, r.k, tl);
    const segurando = Object.keys(this.prop).find((n) => ["R", "LR", "joga"].includes(this.prop[n].h));
    const segL = Object.keys(this.prop).find((n) => ["L", "LR"].includes(this.prop[n].h));
    const cabW = this.mundo(b.head), fwd = V(Math.sin(pf.y), 0, Math.cos(pf.y));
    const alvos = [];
    const add = (nome, pos, peso) => { const d = pos.clone().sub(cabW); if (Math.abs(difAng(pf.y, Math.atan2(d.x, d.z))) < 1.5 && d.length() > 0.5) alvos.push({ nome, pos, peso }); };
    add("tv", V(3.2, 1.5, 0.12), 1); add("janela", V(-0.6, 1.7, 1.8), 0.9); add("relogio", V(5.25, 2.35, 0.05), 0.5); add("camera", this.cam.position.clone(), this.h === "triste" ? 0.4 : 1.2);
    add("monitor", this.pto("mesa", 6.8, 1.14, 0.22), 0.6);
    if (this.cao.g.visible) add("cao", this.mundo(this.cao.cab), 1.3);
    p = this.vida.passo({ ...p, item: segurando ? (p.item || segurando) : p.item }, {
      T, dt, humor: this.h, reduz: this.reduz, cabeca: cabW, yawCorpo: pf.y, alvos, foco: st.foco ? st.foco(this) : null,
      nariz: cabW.clone().addScaledVector(fwd, 0.15 * b.esc).add(V(0, -0.02, 0)), ocupado: !!st.ocupado || p.taco > -0.9, ocupadoL: !!segL,
      facePropria: !!r.pose._fp, legsLivres: p.alt > 0.86 && Math.abs(p.lL[0]) < 0.25 && Math.abs(p.lR[0]) < 0.25 && !st.semPeso,
    });
    p = this.filtro.passo(p, dt);
    b.root.position.set(pf.x, 0, pf.z); b.root.rotation.y = pf.y + (p.yawAdd || 0);
    b.root.updateMatrixWorld(true);
    const comTaco = p.taco > -0.98 && this.h === "feliz";
    if (comTaco) { p = { ...p }; this.aplicarTaco(p); }
    else { /* taco encostado na mesa */ const q = this.tacoPontas({ taco: -1 }); const dir = q.tip.clone().sub(q.butt).normalize(); const tc = this.itens.taco; tc.visible = true; tc.position.copy(q.butt); tc.quaternion.setFromUnitVectors(V(0, 1, 0), dir); }
    // objetos: quem segura o quê neste instante (antes de posar as mãos)
    const naMaoR = Object.keys(this.prop).find((n) => ["R", "LR", "joga"].includes(this.prop[n].h));
    const naMaoL = Object.keys(this.prop).find((n) => this.prop[n].h === "L");
    if (!["tecla", "tacoV", "tacoShot"].includes(p.item)) p.item = naMaoR === "joga" ? "" : naMaoR || "";
    if (naMaoL) p.mL = Math.max(p.mL || 0, 0.9);
    if (p.item === "controle" && this.h === "tranquilo") p.botaoR = JOGO_TV.estado(T).botao ? 1 : 0;
    b.aplicar(p, T, dt); b.desenharRosto(this.vida.rosto(p, { T, dt, humor: this.h, facePropria: !!r.pose._fp }), T);
    b.blob.position.set(pf.x, 0.004, pf.z); b.blob.material.opacity = cl(1 - (p.dy || 0) * 2, 0.3, 1);
    this.moverProps(p, tl, fxk, dt);
    if (this.itens.celular.visible) this.desenharCel(T);
    // bolas da sinuca (física gravada da jogada; coordenadas da própria mesa)
    this.mostrarSinuca(this.h === "feliz" ? p : {}, tl);
    /* efeitos das recompensas */
    // cachorro
    if (this.cao.g.visible) {
      let alvo, estado;
      const fw = [Math.sin(pf.y), Math.cos(pf.y)];
      if (fx === "caoVem" || fx === "caoCarinho") { const a = [pf.x + fw[0] * 0.55, pf.z + fw[1] * 0.55]; alvo = [a[0], a[1], yawPara(a, [pf.x, pf.z])]; estado = fx === "caoCarinho" ? "carinho" : "senta"; }
      else {
        const modo = { triste: "dorme", preocupado: "senta", tranquilo: "dorme", feliz: "senta", euforico: "pula" }[this.h];
        if (modo === "dorme") { alvo = this.lugar("cachorro", [1.35, 6.2, 0.8]); estado = "dorme"; }
        else { const ini = this.caoPerto || [pf.x, pf.z]; alvo = [ini[0], ini[1], yawPara(ini, [pf.x, pf.z])]; estado = modo; }
      }
      const chegou = this.cao.mover(alvo, dt, this.nav);
      this.cao.g.position.set(this.cao.pos[0], 0, this.cao.pos[1]); this.cao.g.rotation.y = this.cao.yaw;
      this.cao.quadro(chegou ? estado : "anda", T);
      // perto do boneco, num lugar livre (recalcula de vez em quando)
      if (!this.caoT || T - this.caoT > 4) { this.caoT = T; const lado = [Math.cos(pf.y), -Math.sin(pf.y)]; const tent = [[0.75, 0.35], [-0.75, 0.35], [0.8, -0.3], [-0.8, -0.3]]; for (const [a, f] of tent) { const x = pf.x + lado[0] * a + fw[0] * f, z = pf.z + lado[1] * a + fw[1] * f; if (this.nav.livre(x, z)) { this.caoPerto = [x, z]; break; } } }
    }
    // ração no aquário e peixes subindo
    const comendo = fx === "racao" && tl > 1.0 && tl < 4.2;
    if (this.dec.aquario.outer.visible) {
      this.racao.forEach((f, i) => { const k = comendo ? ((tl - 1.0) * 0.55 + i / 14) % 1 : 0; f.visible = comendo; f.position.set(0.25 + ruido(i) * 0.2, 1.24 - k * 0.42, 6.65 + ruido(i + 5) * 0.35); });
      const sobe = this.peixeSobe = lerp(this.peixeSobe || 0, comendo ? 1 : 0, Math.min(1, dt * 1.5));
      this.peixes.forEach((f, i) => { const a = T * (0.5 + i * 0.12) + i * 1.7; f.position.set(0.35 + Math.sin(a * 1.3) * 0.15 * (1 - sobe * 0.6), lerp(0.95 + i * 0.06 + Math.sin(a * 2) * 0.03, 1.15 + Math.sin(a * 4) * 0.02, sobe), 6.83 + Math.cos(a) * 0.32 * (1 - sobe * 0.5)); f.rotation.y = Math.atan2(-Math.sin(a) * 0.32, Math.cos(a * 1.3) * 0.2) + PI; });
      this.bolhas.forEach((bb, i) => { const k = (T * 0.4 + i / 6) % 1; bb.position.set(0.45 + Math.sin(T * 3 + i) * 0.02, 0.8 + k * 0.42, 7.1 - i * 0.02); });
    }
    // fliperama
    const jogando = fx === "arcade";
    if (this.dec.fliperama.outer.visible) {
      const ns = JOGO_NAVE.estado(T); const inc = jogando ? cl(ns.vx * 0.035, -0.4, 0.4) : 0;
      this.joyInc = lerp(this.joyInc || 0, inc, Math.min(1, dt * 14)); this.joy.rotation.set(jogando ? 0.08 * Math.sin(T * 5) : 0, 0, -this.joyInc);
      this.arcMao[0].position.copy(this.arcMaoBase[0]).add(V(Math.sin(this.joyInc) * 0.07, 0, 0));
      this.botoesArc.forEach((bt, i) => { const ap = jogando && ns.atira && i === 0; bt.position.y = bt.userData.y0 - (ap ? 0.007 : 0); bt.material.emissiveIntensity = ap ? 1.6 : 0.35; });
      this.arcMao[1].position.copy(this.arcMaoBase[1]).add(V(0, jogando && ns.atira ? -0.012 : 0, 0));
    }
    // cofre
    if (this.dec.cofre.outer.visible) { const ang = fx === "cofre" || fx === "moedaJoga" ? p.porta : 0; this.cofrePorta.rotation.y = -ang; this.cofreBrilho.material.opacity = cl(ang / 1.9) * 0.85; }
    // porquinho: a moeda cai no cofrinho
    if (fx === "porco") {
      const sl = this.alvoPorco();
      if (tl > 1.15 && this.fxId !== st.t0) { this.fxId = st.t0; this.emitir(sl, 8, "#FDE68A"); }
      const j = tl > 1.15 ? Math.sin((tl - 1.15) * 30) * Math.exp(-(tl - 1.15) * 4) : 0; this.porco.scale.set(1 + j * 0.12, 1 - j * 0.12, 1 + j * 0.12);
    } else this.porco.scale.setScalar(1);
    // troféu nas mãos
    const segura = fx === "trofeu" || (fx === "trofeuPega" && fxk > 0.92) || (fx === "trofeuSolta" && fxk < 0.85);
    if (this.dec.trofeu.outer.visible) {
      const tr = this.trofeuObj;
      if (segura) { const m = b.mL.clone().add(b.mR).multiplyScalar(0.5).add(V(0, -0.15, 0)); tr.position.copy(this.trofeuPai.worldToLocal(m)); tr.rotation.y = b.root.rotation.y - this.dec.trofeu.outer.rotation.y; }
      else { tr.position.copy(this.trofeuBase); tr.rotation.y = 0; }
    }
    // dardos
    if (this.dec.dardos.visible) {
      if (fx === "dardo" && fxk < 0.01 && tl < 0.15) { this.dardos.forEach((dd) => { dd.visible = false; }); this.voos = []; }
      if (fx === "dardo" && fxk % 1 > 0.4) { const i = Math.floor(fxk); const key = st.t0 + ":" + i; if (this.dardoKey !== key && i < 3) { this.dardoKey = key;
        const alvo = this.pontoDardo(i), de = b.mR.clone(), Tv = 0.36, g = V(0, -9.8, 0); const v0 = alvo.clone().sub(de).sub(g.clone().multiplyScalar(0.5 * Tv * Tv)).divideScalar(Tv);
        (this.voos ||= []).push({ i, de, v0, alvo, Tv, t: 0 }); } }
      for (const v of this.voos || []) {
        v.t += Math.min(dt, 0.05); const dd = this.dardos[v.i]; dd.visible = true; const t = Math.min(v.t, v.Tv), g = V(0, -9.8, 0);
        const vel = v.v0.clone().addScaledVector(g, t); const dir = vel.clone().normalize();
        if (v.t < v.Tv) { dd.position.copy(v.de).addScaledVector(v.v0, t).addScaledVector(g, 0.5 * t * t).addScaledVector(dir, -0.07); dd.quaternion.setFromUnitVectors(V(0, 1, 0), dir).multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), t * 30)); v.dir = dir; }
        else { const dx = v.t - v.Tv, w = 0.16 * Math.exp(-dx * 8) * Math.sin(dx * 46); const d0 = v.dir || dir; dd.position.copy(v.alvo).addScaledVector(d0, -0.068); dd.quaternion.setFromUnitVectors(V(0, 1, 0), d0).premultiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), w)); }
      }
    } else this.dardos.forEach((dd) => { dd.visible = false; });
    // globo de festa
    const festa = this.dec.globo.visible && (this.h === "euforico" || fx === "globo");
    for (const s of this.spots) s.intensity = festa ? 9 : 0;
    if (this.dec.globo.visible) { this.globo.rotation.y = T * 0.8; this.spots.forEach((sp, i) => { const a = T * 0.9 + i * TAU / 4; sp.target.position.set(3.4 + Math.cos(a) * 2.2, 0, 5.0 + Math.sin(a) * 1.8); }); }
    // item recém-liberado: cresce com um pulinho e solta brilhos
    const agoraMs = performance.now();
    for (const id in this.pops) {
      const k = (agoraMs - this.pops[id]) / 900; const o = this.dec[id]; const obj = o.outer || o;
      if (k >= 1 || !obj.visible) { obj.scale.setScalar(1); delete this.pops[id]; continue; }
      const s = 1 + Math.sin(k * PI * 2.5) * Math.exp(-k * 4) * 0.35; obj.scale.setScalar(Math.max(0.01, k < 0.25 ? sai(k / 0.25) * s : s));
      if (!this.popFx || this.popFx !== id + this.pops[id]) { this.popFx = id + this.pops[id]; this.emitir(this.mundo(obj).add(V(0, 0.6, 0)), 14); }
    }
    if (fx === "novidade" && this.fxId !== "n" + st.t0 && tl > 0.2) { this.fxId = "n" + st.t0; const cab = this.mundo(b.head); this.emitir(cab.add(V(0, 0.35, 0)), 12, "#FACC15"); }
    for (const f of this.faiscas) { if (f.vida >= 1.1) continue; f.vida += dt; f.v.y -= 2.4 * dt; f.s.position.addScaledVector(f.v, dt); const k = f.vida / 1.1; f.s.material.opacity = 1 - k; f.s.scale.setScalar(0.09 * (1 - k * 0.5)); f.s.material.rotation += dt * 3; if (f.vida >= 1.1) f.s.visible = false; }
    // nuvem de chuva e balão
    const cab = this.mundo(b.head);
    this.nuvem.visible = p.nuvem > 0.5;
    if (this.nuvem.visible) { this.nuvem.position.set(cab.x, cab.y + 0.75 + Math.sin(T * 1.6) * 0.03, cab.z); this.gotas.forEach((g, i) => { const k = (T * 1.8 + i * 0.37) % 1; g.position.y = -0.12 - k * 0.4; g.material.opacity = 0.9 * (1 - k); }); }
    this.balaoS.visible = p.balao > 0.05;
    if (this.balaoS.visible) {
      if (p.balaoT !== this.balaoT) { this.balaoT = p.balaoT; const { g, t } = this.balao; g.clearRect(0, 0, 128, 128); g.fillStyle = "#FFF"; g.strokeStyle = "#CBD5E1"; g.lineWidth = 3; rr(g, 8, 8, 112, 86, 22); g.fill(); g.stroke(); g.beginPath(); g.moveTo(40, 92); g.lineTo(34, 120); g.lineTo(62, 93); g.fill(); if (window.RI) window.RI.desenhar(g, p.balaoT, 64, 51, 60, p.balaoT === "chart-line-down" ? "#DC2626" : p.balaoT === "smiley-nervous" ? "#F59E0B" : "#7C3AED"); t.needsUpdate = true; }
      this.balaoS.position.set(cab.x + 0.25, cab.y + 0.6, cab.z); this.balaoS.scale.setScalar(0.42 * p.balao); this.balaoS.material.opacity = p.balao;
    }
    this.pensamento(p, T, dt, cab, fx, st);
    // notas jogadas
    if (p.solta && p.solta !== this.ultSolta) { this.ultSolta = p.solta; for (let i = 0; i < 4; i++) { const m = new THREE.Mesh(this.notaGeo, this.notaMat); m.castShadow = true; m.position.copy(b.mR); this.scene.add(m); const fw = V(Math.sin(pf.y), 0, Math.cos(pf.y)); this.notas.push({ m, v: V(fw.x * 0.6 + (Math.random() - 0.5) * 1.2, 2.2 + Math.random() * 1.2, fw.z * 0.6 + (Math.random() - 0.5) * 1.2), rv: V(Math.random() * 6, Math.random() * 6, Math.random() * 6), vida: 0 }); } }
    if (!p.solta) this.ultSolta = 0;
    for (let i = this.notas.length - 1; i >= 0; i--) {
      const n = this.notas[i]; n.vida += dt;
      if (n.m.position.y > 0.01) { n.v.y -= 4.5 * dt; n.v.multiplyScalar(0.985); n.m.position.addScaledVector(n.v, dt); n.m.rotation.x += n.rv.x * dt; n.m.rotation.y += n.rv.y * dt; n.m.rotation.z += n.rv.z * dt; if (n.v.y < -0.6) n.v.y = -0.6 + Math.sin(n.vida * 9) * 0.25; }
      else { n.m.position.y = 0.006; n.m.rotation.set(0, n.m.rotation.y, 0); }
      if (n.vida > 6) { this.scene.remove(n.m); this.notas.splice(i, 1); }
    }
    // ambiente
    const agora = new Date(); const sg = agora.getSeconds() + agora.getMilliseconds() / 1000, mi = agora.getMinutes() + sg / 60, ho = (agora.getHours() % 12) + mi / 60;
    this.pS.rotation.z = -sg / 60 * TAU; this.pM.rotation.z = -mi / 60 * TAU; this.pH.rotation.z = -ho / 12 * TAU;
    (this.plantas || []).forEach((f, i) => { f.rotation.z = Math.sin(T * 0.8 + i) * 0.03; f.rotation.x = Math.sin(T * 0.6 + i * 2) * 0.02; });
    // café: o botão acende quando ele aperta, o café escorre do bico, a xícara enche, solta vapor e esvazia nos goles
    { const casa = this.prop.xicara && this.prop.xicara.h === "casa";
      if (fx === "cafe") { this.cafeNivel = fase(tl, 2.55, 4.15); if (tl > 2.5) this.cafeQuente = T; }
      else if (fx === "gole") this.cafeNivel = 1 - 0.36 * fase(tl, 0.7, 1.7) - 0.36 * fase(tl, 2.7, 3.6);
      else if (casa) this.cafeNivel = 0;
      const nv = this.cafeNivel || 0; this.cafeLiq.visible = nv > 0.02; this.cafeLiq.position.y = 0.012 + 0.08 * nv; this.cafeLiq.scale.setScalar(0.92 + 0.1 * nv);
      const jorra = fx === "cafe" && tl > 2.45 && tl < 4.2; this.jatoCafe.visible = jorra;
      if (jorra) { const topo = 1.128, fundo = 0.945 + 0.08 * nv; this.jatoCafe.scale.set(1 + 0.15 * Math.sin(T * 40), topo - fundo, 1); this.jatoCafe.position.set(0.4, (topo + fundo) / 2, 4.9); }
      this.anelCafe.emissiveIntensity = fx === "cafe" && tl > 1.95 && tl < 4.2 ? 2.4 + 0.6 * Math.sin(T * 10) : 0.55;
      const xw = this.itens.xicara.getWorldPosition(new THREE.Vector3()); const quente = nv > 0.05 && T - (this.cafeQuente ?? -99) < 30;
      this.vapor.forEach((v, i) => { const k = (T * 0.45 + i / 4) % 1; v.position.copy(v.parent.worldToLocal(xw.clone().add(V(Math.sin(T * 2 + i) * 0.015, 0.1 + k * 0.22, Math.cos(T * 1.7 + i) * 0.015)))); v.material.opacity = quente ? 0.32 * Math.sin(PI * k) : 0; v.scale.setScalar(0.04 + k * 0.1); });
    }
    const digitando = p.item === "tecla";
    this.teclas.material.emissiveIntensity = digitando ? 0.4 + 0.3 * Math.abs(Math.sin(T * 14)) : 0.25;
    this.monLuz.intensity = 1.0 + 0.25 * Math.sin(T * 2.2) + (performance.now() - (this.ultimaAcao || 0) < 900 ? 0.8 : 0);
    if (this.dec.neon.visible) { const pisca = Math.sin(T * 7) > 0.97 || Math.sin(T * 23) > 0.995; this.neonM.opacity = pisca ? 0.35 : 1; this.neonHalo.material.opacity = pisca ? 0.1 : 0.35; }
    if (this.dec.arcoiris.visible) this.arcoHalo.material.opacity = 0.25 + (this.dir.itemAtual === "arcoiris" ? 0.25 * Math.abs(Math.sin(T * 4)) : 0);
    if (this.decPorquinho.visible && fx !== "porco") this.porco.position.y = 0.775 + Math.abs(Math.sin(T * 1.6)) * 0.012;
    if (this.confete.visible) {
      const o = this.dummy || (this.dummy = new THREE.Object3D());
      this.confData.forEach((c, i) => { const y = H - ((T * c.v + c.y0) % (H + 0.3)); o.position.set(c.x + Math.sin(T * 1.5 + c.sw) * 0.2, y, c.z + Math.cos(T * 1.2 + c.sw) * 0.15); o.rotation.set(T * c.rv + c.r, T * c.rv * 0.7, c.r); o.updateMatrix(); this.confete.setMatrixAt(i, o.matrix); });
      this.confete.instanceMatrix.needsUpdate = true;
    }
    // telas (com taxa menor para poupar bateria)
    const perto = this.camModo === "tela";
    if (this.reduz || T - (this.tMon || -9) > (perto ? 1 / 30 : 1 / 8) || this.sujo) { this.tMon = T; this.desenharMonitor(T); }
    if (this.reduz || T - (this.tTv || -9) > 1 / 20) { this.tTv = T; this.tvVitoria = st.vibras ? Math.max(0, ...st.vibras.map((v) => jan(tl, v, v + 1.3))) : 0; this.desenharTV(T, this.h === "tranquilo" ? "jogo" : "news"); }
    if (this.reduz || T - (this.tCeu || -9) > 1 / 8) { this.tCeu = T; this.desenharCeu(T); }
    if (this.dec.fliperama.outer.visible && (this.reduz || T - (this.tArc || -9) > (jogando ? 1 / 24 : 1 / 6))) { this.tArc = T; this.desenharArcade(T); }
    // contornos do modo de edição
    if (this.edit) for (const id in this.moveis) {
      const m = this.moveis[id], mk = m.marca; mk.visible = this.ativo(m); if (!mk.visible) continue;
      const bx = this.caixasDe(m)[0]; mk.position.set(bx.c[0], 0.02 + (m.piso ? 0 : 0.005), bx.c[1]); mk.rotation.set(-PI / 2, 0, bx.r); mk.scale.set(bx.h[0] * 2 + 0.08, bx.h[1] * 2 + 0.08, 1);
      const a = this.arrasto && this.arrasto.m === m; mk.material.color.set(a && !this.arrasto.ok ? "#EF4444" : a || this.sel === m ? "#22C55E" : "#60A5FA"); mk.material.opacity = a || this.sel === m ? 1 : 0.55;
    }
    // câmera
    const c = this.alvoCamera(T);
    if (!this.camAtual || this.reduz) this.camAtual = { pos: c.pos.clone(), alvo: c.alvo.clone(), fov: c.fov };
    const k = window.__ofT != null ? 1 : 1 - Math.exp(-dt * 4);
    this.camAtual.pos.lerp(c.pos, k); this.camAtual.alvo.lerp(c.alvo, k); this.camAtual.fov = lerp(this.camAtual.fov, c.fov, k);
    this.cam.position.copy(this.camAtual.pos); this.cam.lookAt(this.camAtual.alvo); if (Math.abs(this.cam.fov - this.camAtual.fov) > 0.01) { this.cam.fov = this.camAtual.fov; this.cam.updateProjectionMatrix(); }
    if (this.ao && this.composer) this.composer.render(dt); else this.renderer.render(this.scene, this.cam);
  }
  /* ----- objetos de mão: cada um tem um lugar (casa) e passa para a mão no instante do toque ----- */
  get prop() {
    if (!this._prop) { this._prop = {}; for (const n of ["controle", "xicara", "celular", "moeda", "nota", "maco", "dardo", "aljava"]) this._prop[n] = { h: "casa", t0: -1, dur: 0, de: null }; }
    return this._prop;
  }
  // lugar de cada objeto quando ninguém está segurando (null = guardado no bolso)
  casaDe(n) {
    const yq = (r) => new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), r);
    if (n === "controle") return { pos: this.pto("sofa", 2.72, 0.555, 2.92), quat: yq(this.giro(this.moveis.sofa) + 0.5) };
    if (n === "xicara") return { pos: this.pto("cafe", 0.43, 0.92, 5.06), quat: yq(this.giro(this.moveis.cafe) - PI / 2) };
    return null;
  }
  bico() { return this.pto("cafe", 0.4, 0.99, 4.9); }
  botaoCafe() { return this.pto("cafe", 0.392, 1.315, 4.975); }
  bolso(lado = "R") { return this.boneco.root.localToWorld(V(lado === "R" ? 0.17 : -0.17, 0.84, 0.05)); }
  // st.props: { nome: "casa" | "R" | "L" | "LR" | "joga" | "cofrinho" | (k, tl) => ... }
  decidirProps(st, k, tl) {
    const spec = st && st.props; if (!spec) return;
    for (const n in spec) {
      const pr = this.prop[n]; if (!pr) continue;
      const v = typeof spec[n] === "function" ? spec[n](k, tl) : spec[n];
      if (v && v !== pr.h) { pr.h = v; pr.troca = true; }
    }
  }
  // todos de volta para o lugar (quando o boneco é interrompido no meio de uma ação)
  guardarProps() { for (const n in this.prop) if (this.prop[n].h !== "casa") { this.prop[n].h = "casa"; this.prop[n].troca = true; } }
  alvoProp(n, h, p, tl, fxk) {
    const b = this.boneco; const yaw = b.root.rotation.y; const qy = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), yaw);
    const mao = (lado) => { const hd = lado === "L" ? b.L.hand : b.R.hand; const pos = new THREE.Vector3(), quat = new THREE.Quaternion(), sc = new THREE.Vector3(); hd.matrixWorld.decompose(pos, quat, sc); return { pos: (lado === "L" ? b.mL : b.mR).clone(), quat }; };
    const naMao = (lado, off, rot) => { const m = mao(lado); const pos = m.pos.add(V(...off).applyQuaternion(m.quat)); const quat = rot ? qy.clone().multiply(rot) : m.quat; return { pos, quat, vis: true }; };
    const rx = (a) => new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), a), ry = (a) => new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), a);
    if (h === "casa") { const c = this.casaDe(n); return c ? { ...c, vis: true } : { pos: this.bolso(n === "maco" || n === "aljava" ? "L" : "R"), quat: qy, vis: false }; }
    if (n === "controle") {
      const meio = b.mL.clone().add(b.mR).multiplyScalar(0.5).add(V(0, 0.01, 0)); const d = b.mL.distanceTo(b.mR);
      const um = naMao("R", [0, 0.0, 0.03], rx(-0.5)); const w = h === "LR" ? suave((d - 0.2) / 0.16) : 1;
      return { pos: meio.lerp(um.pos, w), quat: qy.clone().multiply(rx(-0.5)), vis: true };
    }
    if (h === "joga") { const m = mao("R"); const k = cl(fxk); m.pos.y += 0.02 + 4 * k * (1 - k) * 0.55; return { pos: m.pos, quat: qy.clone().multiply(rx(k * 6 * PI)), vis: true }; }
    if (h === "cofrinho") { const m = mao("R"); const sl = this.alvoPorco(); const k = fase(tl, 0.9, 1.15); return { pos: m.pos.lerp(sl, k), quat: qy, vis: k < 1 }; }
    const lado = h === "L" ? "L" : "R";
    if (n === "xicara") {
      // a alça passa por dentro dos dedos e o corpo da xícara fica do lado da palma, sempre em pé
      const m = mao(lado); const palma = V(lado === "R" ? -1 : 1, 0, 0).applyQuaternion(m.quat).setY(0);
      if (palma.lengthSq() < 1e-4) palma.set(Math.cos(yaw), 0, -Math.sin(yaw)).multiplyScalar(lado === "R" ? -1 : 1); palma.normalize();
      const qYaw = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), Math.atan2(palma.z, -palma.x));
      const rosto = this.mundo(b.head).sub(m.pos).setY(0); const eixo = new THREE.Vector3().crossVectors(V(0, 1, 0), rosto.lengthSq() > 1e-4 ? rosto.normalize() : V(Math.sin(yaw), 0, Math.cos(yaw)));
      const quat = new THREE.Quaternion().setFromAxisAngle(eixo.normalize(), suave(p.gole || 0) * 1.75).multiply(qYaw);
      const alca = V(0.053, 0.05, 0).applyQuaternion(quat);
      return { pos: m.pos.clone().sub(alca), quat, vis: true };
    }
    if (n === "celular") return naMao(lado, [0, 0.035, 0.03], ry(PI).multiply(rx(-0.45)));
    if (n === "dardo") return naMao(lado, [0, -0.01, 0.03], rx(-PI / 2 + 0.25));
    if (n === "aljava") return naMao(lado, [0, -0.01, 0.035], rx(-PI / 2 + 0.3));
    if (n === "nota" || n === "maco") return naMao(lado, [0, -0.02, 0.035], rx(1.2));
    return naMao(lado, [0, -0.01, 0.025], null);
  }
  moverProps(p, tl, fxk, dt) {
    const agora = performance.now() / 1000;
    for (const n in this.prop) {
      const pr = this.prop[n], o = this.itens[n]; if (!o) continue;
      const alvo = this.alvoProp(n, pr.h, p, tl, fxk);
      if (pr.troca) {
        pr.troca = false; const de = { pos: o.position.clone(), quat: o.quaternion.clone(), vis: o.visible };
        if (!o.visible) { de.pos = alvo.pos.clone(); de.quat = alvo.quat.clone(); }   // sai do bolso direto na mão
        pr.de = de; pr.t0 = agora; pr.dur = cl(0.12 + de.pos.distanceTo(alvo.pos) * 0.3, 0.12, 0.6);
      }
      if (!alvo.vis) pr.de = null;   // guardar no bolso, soltar a nota, arremessar: some na hora, na mão
      let k = pr.de && pr.dur ? cl((agora - pr.t0) / pr.dur) : 1; if (dt === 0 || !this.propsProntos) k = 1;
      if (k < 1) {
        const w = suave(k); const d = pr.de.pos.distanceTo(alvo.pos);
        o.position.copy(pr.de.pos).lerp(alvo.pos, w); o.position.y += Math.sin(PI * w) * Math.min(0.15, d * 0.25);
        o.quaternion.copy(pr.de.quat).slerp(alvo.quat, w); o.visible = pr.de.vis || alvo.vis;
      } else { o.position.copy(alvo.pos); o.quaternion.copy(alvo.quat); o.visible = alvo.vis; pr.de = null; }
    }
    this.propsProntos = true;
    // dardos que sobram na mão esquerda
    const jogados = (this.voos || []).length + (this.prop.dardo.h === "R" ? 1 : 0);
    this.aljavaD.forEach((d, i) => { d.visible = i < 3 - jogados; });
  }
  desenharCel(T) {
    if (T - (this.tCel || -9) < 0.2) return; this.tCel = T;
    const { g, t } = this.celTela; g.fillStyle = "#0B1220"; g.fillRect(0, 0, 64, 128);
    g.fillStyle = "#FB923C"; g.font = "bold 16px system-ui"; g.fillText("₿", 6, 20);
    g.strokeStyle = "#4ADE80"; g.lineWidth = 3; g.beginPath(); for (let i = 0; i < 10; i++) { const x = 4 + i * 6, y = 100 - i * 6 - Math.sin(i + T * 3) * 6; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke();
    t.needsUpdate = true;
  }
  destruir() { cancelAnimationFrame(this.raf); this.ro && this.ro.disconnect(); this.renderer.dispose(); }
