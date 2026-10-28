
/* ---------- a cena ---------- */
export function criar(container, dados) { return new Escritorio(container, dados); }

// caixa orientada (centro, meia largura, giro) para colisão entre móveis e navegação
const giraXZ = (x, z, r) => [x * Math.cos(r) + z * Math.sin(r), -x * Math.sin(r) + z * Math.cos(r)];
function cantos(b) { const out = []; for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { const [x, z] = giraXZ(sx * b.h[0], sz * b.h[1], b.r); out.push([b.c[0] + x, b.c[1] + z]); } return out; }
function cruza(a, b, folga = 0) {
  const eixos = [a, b].flatMap((q) => [[Math.cos(q.r), -Math.sin(q.r)], [Math.sin(q.r), Math.cos(q.r)]]);
  const ca = cantos(a), cb = cantos(b);
  for (const [ux, uz] of eixos) {
    let a0 = 1e9, a1 = -1e9, b0 = 1e9, b1 = -1e9;
    for (const [x, z] of ca) { const p = x * ux + z * uz; a0 = Math.min(a0, p); a1 = Math.max(a1, p); }
    for (const [x, z] of cb) { const p = x * ux + z * uz; b0 = Math.min(b0, p); b1 = Math.max(b1, p); }
    if (a1 - folga <= b0 || b1 - folga <= a0) return false;
  }
  return true;
}

class Escritorio {
  constructor(el, d) {
    this.el = el; this.d = {};
    const r = this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    this.pr = Math.min(window.devicePixelRatio || 1, 2); r.setPixelRatio(this.pr);
    r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
    r.domElement.className = "of-canvas"; r.domElement.setAttribute("role", "img");
    el.appendChild(r.domElement);
    const sc = this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.32;
    this.cam = new THREE.PerspectiveCamera(30, 1, 0.1, 80);
    this.az = PI / 4; this.el_ = 0.5;
    this.camModo = "sala"; this.camAtual = null;
    this.tAnt = performance.now(); this.t0 = performance.now();
    this.notas = []; this.hist = []; this.feed = []; this.flash = {}; this.fx = [];
    this.moveis = {}; this.fixos = []; this.nav = new Nav();
    this.construir();
    this.boneco = new Boneco(d.cor, d.icone, d.boneco, d.acessorio); sc.add(this.boneco.root); sc.add(this.boneco.blob);
    this.cao = new Cao(); sc.add(this.cao.g);
    this.filtro = new Filtro();
    this.vistos = this.lerVistos();
    if (window.__ofDebug) window.__ofDebug = this;
    this.ligarControles();
    this.ro = new ResizeObserver(() => this.redimensionar()); this.ro.observe(el);
    this.redimensionar();
    this.aplicarLayout(d.layout, true);
    this.atualizar(d);
    this.reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.laco = this.laco.bind(this); this.raf = requestAnimationFrame(this.laco);
  }

  /* ----- móveis que podem ser arrastados ----- */
  // id, pivô [x, z] e caixas {c, h, r} nas coordenadas originais; o conteúdo é montado nas coordenadas originais
  movel(id, P, caixas, o = {}) {
    const outer = new THREE.Group(); outer.position.set(P[0], 0, P[1]); this.scene.add(outer);
    const inner = new THREE.Group(); inner.position.set(-P[0], 0, -P[1]); outer.add(inner);
    this.moveis[id] = { id, outer, inner, P, caixas, x: P[0], z: P[1], ri: 0, piso: !!o.piso, nome: o.nome || id, decor: o.decor || null };
    return inner;
  }
  // pedaço montado em outro lugar: as coordenadas originais (oc) vão para (c) girando ry
  pedaco(par, oc, c, ry = 0) { const a = new THREE.Group(); a.position.set(c[0], 0, c[1]); a.rotation.y = ry; par.add(a); const b = new THREE.Group(); b.position.set(-oc[0], 0, -oc[1]); a.add(b); return b; }
  giro(m, ri = m.ri) { return ri * PI / 4; }
  // ponto original [x, z, yaw?] → mundo, seguindo o móvel
  lugar(id, p) {
    const m = this.moveis[id]; if (!m) return p.slice();
    const r = this.giro(m); const [x, z] = giraXZ(p[0] - m.P[0], p[1] - m.P[1], r);
    return p.length > 2 ? [m.x + x, m.z + z, p[2] + r] : [m.x + x, m.z + z];
  }
  pto(id, x, y, z) { const q = this.lugar(id, [x, z]); return V(q[0], y, q[1]); }
  caixasDe(m, x = m.x, z = m.z, ri = m.ri) {
    const r = ri * PI / 4;
    return m.caixas.map((b) => { const [dx, dz] = giraXZ(b.c[0] - m.P[0], b.c[1] - m.P[1], r); return { c: [x + dx, z + dz], h: b.h, r: (b.r || 0) + r }; });
  }
  ativo(m) { return m.outer.visible; }
  // confere se o móvel cabe ali (dentro da sala e sem bater em outro)
  cabe(m, x, z, ri) {
    const cx = this.caixasDe(m, x, z, ri);
    for (const b of cx) for (const [px, pz] of cantos(b)) if (px < 0.02 || px > W - 0.02 || pz < 0.02 || pz > D - 0.02) return false;
    if (m.piso) return true;
    for (const id in this.moveis) {
      const o = this.moveis[id]; if (o === m || o.piso || !this.ativo(o)) continue;
      const co = this.caixasDe(o); for (const a of cx) for (const b of co) if (cruza(a, b, 0.005)) return false;
    }
    for (const f of this.fixos) for (const a of cx) if (cruza(a, f, 0.005)) return false;
    return true;
  }
  // empurra para dentro da sala
  prender(m, x, z, ri) {
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (const b of this.caixasDe(m, x, z, ri)) for (const [px, pz] of cantos(b)) { x0 = Math.min(x0, px); x1 = Math.max(x1, px); z0 = Math.min(z0, pz); z1 = Math.max(z1, pz); }
    if (x0 < 0.03) x += 0.03 - x0; if (x1 > W - 0.03) x -= x1 - (W - 0.03);
    if (z0 < 0.03) z += 0.03 - z0; if (z1 > D - 0.03) z -= z1 - (D - 0.03);
    return [x, z];
  }
  posicionar(m, x, z, ri) { m.x = x; m.z = z; m.ri = ((ri % 8) + 8) % 8; m.outer.position.set(x, 0, z); m.outer.rotation.y = this.giro(m); }
  layoutAtual() {
    const out = { m: {}, off: [...(this.off || [])].sort() };
    for (const id in this.moveis) { const m = this.moveis[id]; if (Math.abs(m.x - m.P[0]) > 0.005 || Math.abs(m.z - m.P[1]) > 0.005 || m.ri) out.m[id] = [Math.round(m.x * 100) / 100, Math.round(m.z * 100) / 100, m.ri]; }
    return out;
  }
  aplicarLayout(L, inicio) {
    L = L && typeof L === "object" ? L : {};
    this.off = new Set(Array.isArray(L.off) ? L.off.filter((x) => typeof x === "string") : []);
    for (const id in this.moveis) { const m = this.moveis[id]; this.posicionar(m, m.P[0], m.P[1], 0); }
    const mv = L.m && typeof L.m === "object" ? L.m : {};
    for (const id in mv) { const m = this.moveis[id], v = mv[id]; if (!m || !Array.isArray(v) || v.length < 3 || !v.every(isFinite)) continue; const [x, z] = this.prender(m, +v[0], +v[1], v[2] | 0); this.posicionar(m, x, z, v[2] | 0); }
    if (!inicio) this.mudouLayout();
  }
  // refaz a grade de navegação e o roteiro sempre que um móvel muda
  mudouLayout() {
    const n = this.nav; n.limpar();
    for (const id in this.moveis) { const m = this.moveis[id]; if (m.piso || !this.ativo(m)) continue; for (const b of this.caixasDe(m)) this.marcar(b); }
    for (const f of this.fixos) this.marcar(f);
    this.calibrarTacada();
    this.sujoNav = false; this.sujo = true;
    if (this.dir) this.dir.replanejar();
    if (this.plantaFrente) { const p = this.moveis.planta2; const bate = ["touro", "aquario", "cofre", "fliperama", "trofeu", "cachorro"].some((k) => { const o = this.moveis[k]; return o && this.ativo(o) && this.caixasDe(o).some((a) => this.caixasDe(p).some((b) => cruza(a, b))); }); p.outer.visible = !bate; }
  }
  marcar(b) {
    const n = this.nav, inf = 0.24, c = n.c; const R = Math.hypot(b.h[0], b.h[1]) + inf;
    const i0 = Math.max(0, Math.floor((b.c[0] - R) / c)), i1 = Math.min(n.nx - 1, Math.floor((b.c[0] + R) / c));
    const j0 = Math.max(0, Math.floor((b.c[1] - R) / c)), j1 = Math.min(n.nz - 1, Math.floor((b.c[1] + R) / c));
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const [lx, lz] = giraXZ((i + 0.5) * c - b.c[0], (j + 0.5) * c - b.c[1], -b.r);
      const dx = Math.max(Math.abs(lx) - b.h[0], 0), dz = Math.max(Math.abs(lz) - b.h[1], 0);
      if (dx * dx + dz * dz <= inf * inf) n.b[i + j * n.nx] = 1;
    }
  }

  /* ----- montagem da sala ----- */
  construir() {
    const sc = this.scene;
    const box = (cx, cz, hx, hz, r = 0) => ({ c: [cx, cz], h: [hx, hz], r });
    // luzes
    this.hemi = new THREE.HemisphereLight("#E3EBFF", "#B08A64", 0.9); sc.add(this.hemi);
    const k = this.key = new THREE.DirectionalLight("#FFF4E3", 1.8);
    k.position.set(11, 12, 11); k.target.position.set(4, 0, 3.5); sc.add(k, k.target);
    k.castShadow = true; k.shadow.mapSize.set(2048, 2048); k.shadow.bias = -0.0004; k.shadow.normalBias = 0.025; k.shadow.radius = 4;
    Object.assign(k.shadow.camera, { left: -7.5, right: 7.5, top: 7, bottom: -7, near: 2, far: 40 });
    this.fill = new THREE.DirectionalLight("#CFE0FF", 0.35); this.fill.position.set(-4, 6, 8); sc.add(this.fill);

    // chão e paredes (casa de bonecas)
    const piso = tela(1024, 1024); this.desenharPiso(piso);
    piso.t.wrapS = piso.t.wrapT = THREE.RepeatWrapping; piso.t.repeat.set(W / 4.5, D / 4.5);
    this.chao = mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: piso.t, roughness: 0.55, metalness: 0 }), sc, W / 2, 0, D / 2, { rx: -PI / 2, cast: false });
    bloco(sc, M("#8A5A34", { r: 0.8 }), [-T_PAR, -0.22, -T_PAR], [W + 0.05, -0.001, D + 0.05], 0.02, { cast: false });
    bloco(sc, M("#E6E3DD", { r: 0.9 }), [-T_PAR - 0.06, -0.3, -T_PAR - 0.06], [W + 0.11, -0.2, D + 0.11], 0.04, { cast: false });
    const pFundo = M("#EEF1F6", { r: 0.95 }), pEsq = M("#E5E9F1", { r: 0.95 }), topo = M("#C9D1DD", { r: 0.9 });
    bloco(sc, pFundo, [-T_PAR, 0, -T_PAR], [W, H, 0], 0.005);
    const JZ0 = 0.95, JZ1 = 2.65, JY0 = 0.92, JY1 = 2.38;
    bloco(sc, pEsq, [-T_PAR, 0, 0], [0, H, JZ0], 0.005); bloco(sc, pEsq, [-T_PAR, 0, JZ1], [0, H, D], 0.005);
    bloco(sc, pEsq, [-T_PAR, 0, JZ0], [0, JY0, JZ1], 0.005); bloco(sc, pEsq, [-T_PAR, JY1, JZ0], [0, H, JZ1], 0.005);
    bloco(sc, topo, [-T_PAR - 0.005, H, -T_PAR - 0.005], [W + 0.005, H + 0.03, 0.005], 0.01); bloco(sc, topo, [-T_PAR - 0.005, H, 0], [0.005, H + 0.03, D + 0.005], 0.01);
    bloco(sc, topo, [W - 0.001, 0, -T_PAR], [W + 0.004, H + 0.03, 0], 0.001); bloco(sc, topo, [-T_PAR, 0, D - 0.001], [0, H + 0.03, D + 0.004], 0.001);
    const rod = M("#FFFFFF", { r: 0.6 });
    bloco(sc, rod, [0, 0, 0], [W, 0.1, 0.02], 0.005); bloco(sc, rod, [0, 0, 0], [0.02, 0.1, D], 0.005);

    // janela com céu animado
    this.ceu = tela(256, 256);
    mesh(new THREE.PlaneGeometry(JZ1 - JZ0, JY1 - JY0), new THREE.MeshBasicMaterial({ map: this.ceu.t, toneMapped: false }), sc, -0.1, (JY0 + JY1) / 2, (JZ0 + JZ1) / 2, { ry: PI / 2, cast: false, recv: false });
    mesh(new THREE.PlaneGeometry(JZ1 - JZ0, JY1 - JY0), new THREE.MeshStandardMaterial({ color: "#DDF1FF", transparent: true, opacity: 0.12, roughness: 0.05, metalness: 0.3 }), sc, -0.03, (JY0 + JY1) / 2, (JZ0 + JZ1) / 2, { ry: PI / 2, cast: false, recv: false });
    const moldura = M("#FFFFFF", { r: 0.4 });
    bloco(sc, moldura, [-0.06, JY0 - 0.02, JZ0 - 0.06], [0.04, JY1 + 0.04, JZ0], 0.01); bloco(sc, moldura, [-0.06, JY0 - 0.02, JZ1], [0.04, JY1 + 0.04, JZ1 + 0.06], 0.01);
    bloco(sc, moldura, [-0.06, JY1, JZ0], [0.04, JY1 + 0.06, JZ1], 0.01); bloco(sc, moldura, [-0.06, (JY0 + JY1) / 2 - 0.025, JZ0], [0.0, (JY0 + JY1) / 2 + 0.025, JZ1], 0.01);
    bloco(sc, moldura, [-0.06, JY0, (JZ0 + JZ1) / 2 - 0.025], [0.0, JY1, (JZ0 + JZ1) / 2 + 0.025], 0.01);
    bloco(sc, M("#F1F5F9", { r: 0.5 }), [-0.06, JY0 - 0.06, JZ0 - 0.12], [0.16, JY0, JZ1 + 0.12], 0.015);
    const cort = M("#C7D2FE", { r: 1 });
    for (const [z0, z1] of [[JZ0 - 0.42, JZ0 - 0.06], [JZ1 + 0.06, JZ1 + 0.42]]) for (let i = 0; i < 4; i++) caps(sc, cort, 0.05, 2.45, 0.08, 1.38, z0 + 0.05 + i * (z1 - z0 - 0.1) / 3, {});
    cil(sc, M("#94A3B8", { m: 0.6, r: 0.3 }), 0.015, 0.015, JZ1 - JZ0 + 1.0, 0.08, JY1 + 0.25, (JZ0 + JZ1) / 2, { rx: PI / 2 });
    const fx = tela(64, 64); const gf = fx.g.createLinearGradient(0, 0, 64, 0); gf.addColorStop(0, "rgba(255,255,255,.9)"); gf.addColorStop(1, "rgba(255,255,255,0)"); fx.g.fillStyle = gf; fx.g.fillRect(0, 0, 64, 64);
    const gq = new THREE.BufferGeometry();
    gq.setAttribute("position", new THREE.Float32BufferAttribute([0.02, 0.005, JZ0 + 0.1, 0.02, 0.005, JZ1 - 0.1, 3.0, 0.005, JZ1 + 1.5, 3.0, 0.005, JZ0 + 1.3], 3));
    gq.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0, 0, 1, 1, 1, 1, 0], 2)); gq.setIndex([0, 1, 2, 0, 2, 3]);
    this.feixe = new THREE.Mesh(gq, new THREE.MeshBasicMaterial({ map: fx.t, color: "#FFE7A3", transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    sc.add(this.feixe);

    // tapete (fica no chão: os outros móveis podem ficar em cima)
    { const g = this.movel("tapete", [3.35, 3.85], [box(3.35, 3.85, 1.65, 2.5)], { piso: true, nome: "Tapete" });
      const tp = tela(512, 512); this.desenharTapete(tp);
      mesh(new RoundedBoxGeometry(3.3, 0.016, 5.0, 2, 0.007), new THREE.MeshStandardMaterial({ map: tp.t, roughness: 1 }), g, 3.35, 0.009, 3.85, { cast: false }); }

    // painel ripado + TV + rack (presos na parede)
    const ripa = M("#9A6B43", { r: 0.7 }), ripaE = M("#7A5233", { r: 0.8 });
    bloco(sc, ripaE, [1.6, 0, 0], [4.8, H, 0.025], 0.002, { cast: false });
    for (let x = 1.62; x < 4.78; x += 0.1) bloco(sc, ripa, [x, 0.1, 0.02], [x + 0.06, H - 0.02, 0.05], 0.008, { cast: false });
    const rack = M("#3F3A36", { r: 0.6 }), madeira = M("#B07A4C", { r: 0.6 });
    bloco(sc, rack, [1.95, 0.12, 0.05], [4.45, 0.52, 0.48], 0.02);
    bloco(sc, madeira, [1.97, 0.18, 0.47], [3.18, 0.48, 0.49], 0.01); bloco(sc, madeira, [3.22, 0.18, 0.47], [4.43, 0.48, 0.49], 0.01);
    for (const x of [2.05, 4.35]) for (const z of [0.12, 0.42]) cil(sc, M("#111827"), 0.015, 0.015, 0.12, x, 0.06, z);
    bloco(sc, M("#F8FAFC", { r: 0.3 }), [2.3, 0.52, 0.18], [2.62, 0.58, 0.4], 0.02);
    bloco(sc, M("#111827", { r: 0.4 }), [3.85, 0.52, 0.2], [3.98, 0.86, 0.33], 0.02); bloco(sc, M("#111827", { r: 0.4 }), [2.95, 0.52, 0.2], [3.08, 0.86, 0.33], 0.02);
    bloco(sc, M("#0B0F19", { r: 0.25, m: 0.4 }), [2.25, 1.0, 0.06], [4.15, 2.06, 0.12], 0.02);
    this.tv = tela(512, 288);
    mesh(new THREE.PlaneGeometry(1.84, 1.0), new THREE.MeshBasicMaterial({ map: this.tv.t, toneMapped: false }), sc, 3.2, 1.53, 0.123, { cast: false, recv: false });
    this.tvLuz = new THREE.PointLight("#818CF8", 1.4, 4.5, 1.6); this.tvLuz.position.set(3.2, 1.5, 0.9); sc.add(this.tvLuz);
    this.fixos.push(box(3.2, 0.27, 1.25, 0.24));

    // mesa de centro
    { const g = this.movel("centro", [3.21, 1.72], [box(3.21, 1.72, 0.6, 0.29)], { nome: "Mesa de centro" });
      const mc = M("#C89A6B", { r: 0.55 });
      bloco(g, mc, [2.62, 0.36, 1.45], [3.8, 0.42, 2.0], 0.03);
      bloco(g, M("#E7D6C3"), [2.7, 0.08, 1.52], [3.72, 0.11, 1.93], 0.01);
      for (const x of [2.68, 3.74]) for (const z of [1.5, 1.95]) cil(g, M("#3F3A36"), 0.02, 0.02, 0.36, x, 0.18, z);
      bloco(g, M("#F43F5E"), [2.8, 0.42, 1.6], [3.1, 0.44, 1.82], 0.005, { ry: 0.2 }); bloco(g, M("#38BDF8"), [2.84, 0.44, 1.62], [3.1, 0.455, 1.8], 0.005, { ry: -0.1 });
      bloco(g, M("#F8FAFC", { r: 0.4 }), [3.35, 0.42, 1.62], [3.6, 0.44, 1.8], 0.004, { ry: 0.3 }); }

    // sofá (de frente para a TV)
    { const g = this.movel("sofa", [3.2, 3.05], [box(3.2, 3.05, 1.24, 0.47)], { nome: "Sofá" });
      const sf = M("#0F766E", { r: 0.95 }), sf2 = M("#14857B", { r: 0.95 }), alm = M("#2BB3A3", { r: 1 });
      bloco(g, sf, [2.0, 0.08, 2.6], [4.4, 0.42, 3.5], 0.06);
      bloco(g, sf, [2.0, 0.08, 3.22], [4.4, 0.98, 3.52], 0.08);
      bloco(g, sf2, [1.96, 0.08, 2.58], [2.2, 0.66, 3.52], 0.07); bloco(g, sf2, [4.2, 0.08, 2.58], [4.44, 0.66, 3.52], 0.07);
      bloco(g, alm, [2.22, 0.4, 2.62], [3.19, 0.54, 3.24], 0.06); bloco(g, alm, [3.21, 0.4, 2.62], [4.18, 0.54, 3.24], 0.06);
      bloco(g, alm, [2.24, 0.5, 3.0], [3.18, 0.92, 3.24], 0.07, { rx: -0.12 }); bloco(g, alm, [3.22, 0.5, 3.0], [4.16, 0.92, 3.24], 0.07, { rx: -0.12 });
      bloco(g, M("#FCD34D", { r: 1 }), [2.28, 0.5, 2.95], [2.62, 0.82, 3.1], 0.06, { rz: 0.15, rx: -0.2 });
      for (const x of [2.06, 4.34]) for (const z of [2.66, 3.44]) cil(g, M("#3F3A36"), 0.025, 0.02, 0.08, x, 0.04, z); }

    // poltrona perto da janela
    { const g = this.movel("poltrona", [0.92, 3.2], [box(0.92, 3.2, 0.5, 0.44, PI / 4)], { nome: "Poltrona" });
      const pol = new THREE.Group(); pol.position.set(0.92, 0, 3.2); pol.rotation.y = PI / 4; g.add(pol);
      const pc = M("#B45309", { r: 0.95 }), pc2 = M("#D97706", { r: 0.95 });
      bloco(pol, pc, [-0.42, 0.1, -0.36], [0.42, 0.4, 0.4], 0.06); bloco(pol, pc, [-0.42, 0.1, -0.44], [0.42, 1.05, -0.2], 0.08, { rx: 0.1 });
      bloco(pol, pc2, [-0.5, 0.1, -0.4], [-0.32, 0.62, 0.4], 0.07); bloco(pol, pc2, [0.32, 0.1, -0.4], [0.5, 0.62, 0.4], 0.07);
      bloco(pol, M("#F59E0B", { r: 1 }), [-0.32, 0.38, -0.25], [0.32, 0.5, 0.38], 0.05);
      for (const x of [-0.44, 0.44]) for (const z of [-0.36, 0.36]) cil(pol, M("#3F3A36"), 0.025, 0.018, 0.1, x, 0.05, z); }
    // luminária de piso
    { const g = this.movel("luminaria", [0.32, 4.0], [box(0.32, 4.0, 0.16, 0.16)], { nome: "Luminária" });
      const lg = new THREE.Group(); lg.position.set(0.32, 0, 4.0); g.add(lg);
      cil(lg, M("#1F2937", { m: 0.6, r: 0.4 }), 0.14, 0.16, 0.03, 0, 0.015, 0); cil(lg, M("#1F2937", { m: 0.6, r: 0.4 }), 0.012, 0.012, 1.5, 0, 0.77, 0);
      this.cupula = cil(lg, new THREE.MeshStandardMaterial({ color: "#FEF3C7", roughness: 0.8, emissive: "#FFD58A", emissiveIntensity: 0 }), 0.12, 0.2, 0.26, 0, 1.6, 0, { seg: 28 });
      this.lampLuz = new THREE.PointLight("#FFC978", 0, 4.2, 1.8); this.lampLuz.position.set(0.35, 1.5, 4.0); g.add(this.lampLuz);
      this.lampHalo = brilho("#FFD58A", 1.1, 0.0); this.lampHalo.position.set(0.34, 1.58, 4.0); g.add(this.lampHalo); }

    // cantinho do café
    { const g = this.movel("cafe", [0.31, 4.9], [box(0.31, 4.9, 0.31, 0.58)], { nome: "Cantinho do café" });
      const arm = M("#F8FAFC", { r: 0.5 });
      bloco(g, arm, [0.02, 0, 4.35], [0.58, 0.88, 5.45], 0.02); bloco(g, M("#334155", { r: 0.35 }), [0.0, 0.88, 4.32], [0.62, 0.92, 5.48], 0.01);
      bloco(g, M("#E2E8F0"), [0.57, 0.1, 4.4], [0.585, 0.82, 4.88], 0.004); bloco(g, M("#E2E8F0"), [0.57, 0.1, 4.92], [0.585, 0.82, 5.4], 0.004);
      const cf = new THREE.Group(); cf.position.set(0.24, 0.92, 4.9); g.add(cf);
      bloco(cf, M("#111827", { r: 0.3, m: 0.3 }), [-0.14, 0, -0.14], [0.14, 0.38, 0.14], 0.03); bloco(cf, M("#D1D5DB", { r: 0.25, m: 0.8 }), [-0.04, 0.24, -0.13], [0.2, 0.34, 0.13], 0.02);
      cil(cf, M("#FFFFFF", { r: 0.3 }), 0.035, 0.03, 0.08, 0.14, 0.04, 0);
      this.vapor = []; for (let i = 0; i < 4; i++) { const v = brilho("#FFFFFF", 0.1, 0.0); v.material.blending = THREE.NormalBlending; v.position.set(0.38, 1.0, 4.9); g.add(v); this.vapor.push(v); }
      for (let i = 0; i < 3; i++) cil(g, M(["#F43F5E", "#FACC15", "#38BDF8"][i]), 0.035, 0.03, 0.08, 0.38, 0.96, 5.2 + i * 0.09); }
    // quadro
    const qd = tela(256, 192); this.desenharQuadro(qd);
    bloco(sc, M("#1F2937", { r: 0.4 }), [0.0, 1.45, 4.45], [0.04, 2.25, 5.4], 0.01);
    mesh(new THREE.PlaneGeometry(0.87, 0.72), new THREE.MeshStandardMaterial({ map: qd.t, roughness: 0.6 }), sc, 0.045, 1.85, 4.925, { ry: PI / 2, cast: false });

    // escrivaninha com PC e cadeira
    { const g = this.movel("mesa", [6.8, 0.6], [box(6.8, 0.42, 1.06, 0.41), box(6.8, 1.22, 0.3, 0.3)], { nome: "Escrivaninha" });
      this.mesaG = g;
      const tampo = M("#9C6B45", { r: 0.5 }), metal = M("#1F2937", { r: 0.4, m: 0.6 });
      bloco(g, tampo, [5.75, 0.72, 0.02], [7.85, 0.77, 0.82], 0.02);
      for (const x of [5.82, 7.78]) { bloco(g, metal, [x - 0.03, 0, 0.08], [x + 0.03, 0.72, 0.14], 0.01); bloco(g, metal, [x - 0.03, 0, 0.7], [x + 0.03, 0.72, 0.76], 0.01); bloco(g, metal, [x - 0.03, 0.02, 0.08], [x + 0.03, 0.06, 0.76], 0.01); }
      bloco(g, M("#F1F5F9", { r: 0.5 }), [7.25, 0.18, 0.06], [7.7, 0.7, 0.62], 0.02); bloco(g, M("#CBD5E1"), [7.27, 0.42, 0.62], [7.68, 0.44, 0.63], 0.003);
      bloco(g, M("#1E293B", { r: 0.9 }), [6.0, 0.77, 0.42], [7.55, 0.775, 0.78], 0.004);
      bloco(g, M("#E5E7EB", { r: 0.4 }), [6.42, 0.775, 0.55], [7.08, 0.8, 0.7], 0.01);
      this.teclas = bloco(g, new THREE.MeshStandardMaterial({ color: "#94A3B8", roughness: 0.5, emissive: "#60A5FA", emissiveIntensity: 0.25 }), [6.44, 0.8, 0.565], [7.06, 0.805, 0.69], 0.003);
      this.mouse = mesh(new THREE.SphereGeometry(0.04, 16, 10), M("#E5E7EB", { r: 0.3 }), g, 7.28, 0.79, 0.62, { s: [0.8, 0.4, 1.2] });
      cil(g, metal, 0.11, 0.12, 0.012, 6.8, 0.776, 0.22); bloco(g, metal, [6.775, 0.77, 0.16], [6.825, 1.0, 0.2], 0.01);
      bloco(g, M("#0B0F19", { r: 0.25, m: 0.4 }), [6.19, 0.86, 0.17], [7.41, 1.42, 0.22], 0.02);
      this.mon = tela(1024, 448);
      this.monMesh = mesh(new THREE.PlaneGeometry(1.18, 0.516), new THREE.MeshBasicMaterial({ map: this.mon.t, toneMapped: false }), g, 6.8, 1.14, 0.222, { cast: false, recv: false });
      this.monLuz = new THREE.PointLight("#60A5FA", 1.1, 2.6, 1.8); this.monLuz.position.set(6.8, 1.15, 0.75); g.add(this.monLuz);
      this.monHalo = brilho("#60A5FA", 1.6, 0.18); this.monHalo.position.set(6.8, 1.14, 0.12); g.add(this.monHalo);
      cil(g, M("#F8FAFC", { r: 0.3 }), 0.04, 0.035, 0.1, 5.98, 0.82, 0.55); mesh(new THREE.TorusGeometry(0.025, 0.008, 8, 14), M("#F8FAFC"), g, 6.03, 0.83, 0.55, { ry: 0 });
      this.planta(5.95, 0.77, 0.2, 0.45, g);
      // cadeira gamer (mais perto da mesa para as mãos alcançarem o teclado)
      const cad = this.cadeira = new THREE.Group(); cad.position.set(6.8, 0, 1.22); cad.rotation.y = PI; g.add(cad);
      const cp = M("#1F2937", { r: 0.7 }); const ca = this.cadAcento = new THREE.MeshStandardMaterial({ color: "#2457F5", roughness: 0.7 });
      for (let i = 0; i < 5; i++) { const a = i * TAU / 5; bloco(cad, metal, [-0.02, 0.05, 0], [0.02, 0.08, 0.3], 0.01, { ry: a }).position.set(Math.sin(a) * 0.15, 0.065, Math.cos(a) * 0.15); esf(cad, M("#111827"), 0.03, Math.sin(a) * 0.29, 0.03, Math.cos(a) * 0.29); }
      cil(cad, metal, 0.025, 0.03, 0.4, 0, 0.27, 0);
      bloco(cad, cp, [-0.26, 0.44, -0.27], [0.26, 0.53, 0.25], 0.05); bloco(cad, ca, [-0.17, 0.53, -0.2], [0.17, 0.535, 0.2], 0.005);
      const enc = new THREE.Group(); enc.position.set(0, 0.5, -0.27); enc.rotation.x = -0.12; cad.add(enc);
      bloco(enc, cp, [-0.25, 0.05, -0.08], [0.25, 0.85, 0.0], 0.06); bloco(enc, ca, [-0.12, 0.12, 0.0], [0.12, 0.72, 0.006], 0.004); bloco(enc, cp, [-0.15, 0.8, -0.07], [0.15, 0.98, 0.0], 0.05);
      for (const s of [-1, 1]) { bloco(cad, metal, [s * 0.27 - 0.015, 0.5, -0.1], [s * 0.27 + 0.015, 0.68, -0.06], 0.005); bloco(cad, cp, [s * 0.27 - 0.04, 0.68, -0.2], [s * 0.27 + 0.04, 0.71, 0.12], 0.015); }
      // porquinho (recompensa) em cima da mesa
      const pq = new THREE.Group(); pq.visible = false; g.add(pq); this.decPorquinho = pq; const rosa = M("#F9A8D4", { r: 0.5 });
      const p = new THREE.Group(); p.position.set(7.55, 0.775, 0.6); p.rotation.y = -0.5; pq.add(p); this.porco = p;
      esf(p, rosa, 0.09, 0, 0.09, 0, { s: [0.9, 0.85, 1.15] }); cil(p, M("#F472B6"), 0.035, 0.035, 0.04, 0, 0.08, 0.11, { rx: PI / 2 });
      for (const s of [-1, 1]) { mesh(new THREE.ConeGeometry(0.025, 0.05, 8), rosa, p, s * 0.045, 0.17, 0.05, {}); esf(p, M("#111827"), 0.008, s * 0.035, 0.12, 0.085); }
      for (const [x, z] of [[-0.04, 0.05], [0.04, 0.05], [-0.04, -0.05], [0.04, -0.05]]) cil(p, rosa, 0.02, 0.02, 0.05, x, 0.02, z);
      bloco(p, M("#9D174D"), [-0.025, 0.165, -0.03], [0.025, 0.172, 0.03], 0.002); sombra(pq); }
    // prateleira e relógio na parede
    bloco(sc, M("#7A5233", { r: 0.6 }), [5.9, 1.86, 0.0], [7.7, 1.9, 0.28], 0.01);
    let bx = 5.98; const livros = ["#EF4444", "#2457F5", "#F59E0B", "#10B981", "#8B5CF6", "#0EA5E9", "#F43F5E"];
    livros.forEach((c, i) => { const w = 0.05 + (i % 3) * 0.015, h = 0.2 + (i % 2) * 0.05; bloco(sc, M(c, { r: 0.7 }), [bx, 1.9, 0.04], [bx + w, 1.9 + h, 0.24], 0.006, { rz: i === 6 ? -0.25 : 0 }); bx += w + 0.008; });
    this.planta(7.5, 1.9, 0.12, 0.3);
    const rel = new THREE.Group(); rel.position.set(5.25, 2.35, 0.03); sc.add(rel);
    cil(rel, M("#1F2937", { r: 0.4 }), 0.27, 0.27, 0.05, 0, 0, 0, { rx: PI / 2, seg: 40 }); cil(rel, M("#FFFFFF", { r: 0.5 }), 0.24, 0.24, 0.052, 0, 0, 0.002, { rx: PI / 2, seg: 40 });
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12; bloco(rel, M("#1F2937"), [-0.006, -0.025, 0], [0.006, 0.025, 0.01], 0.002).position.set(Math.sin(a) * 0.2, Math.cos(a) * 0.2, 0.03); rel.children[rel.children.length - 1].rotation.z = -a; }
    const ponteiro = (L, w, cor, z) => { const g = new THREE.Group(); g.position.z = z; rel.add(g); bloco(g, M(cor), [-w / 2, -0.02, 0], [w / 2, L, 0.006], 0.002); return g; };
    this.pH = ponteiro(0.12, 0.018, "#1F2937", 0.03); this.pM = ponteiro(0.18, 0.012, "#1F2937", 0.037); this.pS = ponteiro(0.2, 0.005, "#EF4444", 0.044);
    esf(rel, M("#EF4444"), 0.014, 0, 0, 0.05);

    // mesa de sinuca + luz pendente
    { const sin = this.sinuca = { x0: 5.7, x1: 8.1, z0: 3.75, z1: 5.05, y: 0.8 };
      const g = this.movel("sinuca", [6.9, 4.4], [box(6.9, 4.4, 1.2, 0.65)], { nome: "Mesa de sinuca" }); this.sinucaG = g;
      const madE = M("#5B3A1E", { r: 0.5 }), feltro = M("#15803D", { r: 0.95 });
      bloco(g, madE, [sin.x0 + 0.15, 0.12, sin.z0 + 0.15], [sin.x1 - 0.15, 0.72, sin.z1 - 0.15], 0.04);
      for (const x of [sin.x0 + 0.2, sin.x1 - 0.2]) for (const z of [sin.z0 + 0.2, sin.z1 - 0.2]) bloco(g, madE, [x - 0.07, 0, z - 0.07], [x + 0.07, 0.3, z + 0.07], 0.03);
      bloco(g, feltro, [sin.x0 + 0.08, 0.7, sin.z0 + 0.08], [sin.x1 - 0.08, 0.78, sin.z1 - 0.08], 0.01);
      const borda = M("#7C4A21", { r: 0.45 });
      bloco(g, borda, [sin.x0, 0.68, sin.z0], [sin.x1, 0.84, sin.z0 + 0.1], 0.025); bloco(g, borda, [sin.x0, 0.68, sin.z1 - 0.1], [sin.x1, 0.84, sin.z1], 0.025);
      bloco(g, borda, [sin.x0, 0.68, sin.z0], [sin.x0 + 0.1, 0.84, sin.z1], 0.025); bloco(g, borda, [sin.x1 - 0.1, 0.68, sin.z0], [sin.x1, 0.84, sin.z1], 0.025);
      const pkt = M("#0B0B0B", { r: 0.9 });
      this.cacapas = [[sin.x0 + 0.11, sin.z0 + 0.11], [sin.x1 - 0.11, sin.z0 + 0.11], [sin.x0 + 0.11, sin.z1 - 0.11], [sin.x1 - 0.11, sin.z1 - 0.11], [(sin.x0 + sin.x1) / 2, sin.z0 + 0.09], [(sin.x0 + sin.x1) / 2, sin.z1 - 0.09]];
      for (const [x, z] of this.cacapas) cil(g, pkt, 0.055, 0.055, 0.012, x, 0.785, z, { cast: false });
      const bola = (cor) => esf(g, M(cor, { r: 0.15 }), 0.03, 0, 0, 0, { seg: 20, seg2: 14 });
      [["#DC2626", 6.25, 3.98], ["#1D4ED8", 6.4, 4.85], ["#111827", 6.95, 3.95], ["#7C3AED", 6.05, 4.15]].forEach(([c, x, z]) => bola(c).position.set(x, 0.81, z));
      this.bB = bola("#F8FAFC"); this.bA = bola("#FACC15");
      this.pendLuz = new THREE.PointLight("#FFE3A8", 0, 3.2, 1.6); this.pendLuz.position.set(6.9, 1.95, 4.4); g.add(this.pendLuz);
      // giz no canto da mesa
      bloco(g, M("#3B82F6", { r: 0.8 }), [8.0, 0.84, 4.95], [8.04, 0.86, 4.99], 0.003); }

    // plantas grandes
    { const g = this.movel("planta1", [0.45, 0.45], [box(0.45, 0.45, 0.24, 0.24)], { nome: "Planta" }); this.planta(0.45, 0, 0.45, 1.25, g); }
    { const g = this.movel("planta2", [8.5, 6.95], [box(8.5, 6.95, 0.22, 0.22)], { nome: "Planta" }); this.plantaFrente = this.planta(8.5, 0, 6.95, 1.05, g); }

    /* ---- decoração liberada pelas recompensas ---- */
    const dec = this.dec = {};
    // fliperama (contra a parede do fundo, entre o painel e a mesa)
    { const g = this.movel("fliperama", [5.29, 0.5], [box(5.29, 0.5, 0.34, 0.42)], { nome: "Fliperama", decor: "fliperama" }); dec.fliperama = this.moveis.fliperama;
      const s = this.pedaco(g, [8.52, 0.5], [5.29, 0.5]); const fp = M("#7C3AED", { r: 0.5 });
      bloco(s, fp, [8.18, 0, 0.15], [8.86, 1.8, 0.8], 0.03); bloco(s, M("#1F2937"), [8.2, 0.95, 0.72], [8.84, 1.05, 1.0], 0.02, { rx: 0.15 });
      this.arcade = tela(128, 128);
      mesh(new THREE.PlaneGeometry(0.56, 0.46), new THREE.MeshBasicMaterial({ map: this.arcade.t, toneMapped: false }), s, 8.52, 1.3, 0.805, { rx: -0.12, cast: false });
      bloco(s, new THREE.MeshStandardMaterial({ color: "#F472B6", emissive: "#F472B6", emissiveIntensity: 0.9 }), [8.2, 1.66, 0.6], [8.84, 1.78, 0.81], 0.02);
      this.joy = new THREE.Group(); this.joy.position.set(8.36, 1.07, 0.88); s.add(this.joy); cil(this.joy, M("#111827"), 0.008, 0.008, 0.07, 0, 0.035, 0); esf(this.joy, M("#EF4444", { r: 0.3 }), 0.025, 0, 0.075, 0);
      this.botoesArc = [esf(s, M("#FACC15", { r: 0.3 }), 0.02, 8.6, 1.07, 0.9), esf(s, M("#22C55E", { r: 0.3 }), 0.02, 8.68, 1.07, 0.88)];
      this.arcMao = [new THREE.Object3D(), new THREE.Object3D()]; this.arcMao[0].position.set(8.36, 1.17, 0.9); this.arcMao[1].position.set(8.64, 1.12, 0.9); this.arcMao.forEach((o) => s.add(o));
      sombra(s); }
    // cofre (na parede da direita, porta virada para a sala)
    { const g = this.movel("cofre", [8.54, 1.63], [box(8.54, 1.63, 0.36, 0.34), box(7.92, 1.12, 0.12, 0.12)], { nome: "Cofre", decor: "cofre" }); dec.cofre = this.moveis.cofre;
      const s = this.pedaco(g, [8.54, 1.63], [8.54, 1.63], -PI / 2); const ouro = M("#D4A017", { r: 0.25, m: 0.9 }), escuro = M("#3F2A08", { r: 0.6 });
      bloco(s, ouro, [8.22, 0, 1.3], [8.86, 0.72, 1.6], 0.04); bloco(s, ouro, [8.22, 0, 1.3], [8.28, 0.72, 1.96], 0.02); bloco(s, ouro, [8.8, 0, 1.3], [8.86, 0.72, 1.96], 0.02);
      bloco(s, ouro, [8.22, 0, 1.3], [8.86, 0.06, 1.96], 0.02); bloco(s, ouro, [8.22, 0.66, 1.3], [8.86, 0.72, 1.96], 0.02);
      bloco(s, escuro, [8.28, 0.06, 1.58], [8.8, 0.66, 1.62], 0.005);
      for (let i = 0; i < 3; i++) bloco(s, M("#FACC15", { r: 0.25, m: 0.9, e: "#7A5A00", ei: 0.6 }), [8.32 + i * 0.15, 0.06, 1.66], [8.44 + i * 0.15, 0.14, 1.86], 0.01);
      this.cofreBrilho = brilho("#FDE68A", 0.9, 0); this.cofreBrilho.position.set(8.54, 0.4, 1.8); s.add(this.cofreBrilho);
      const porta = this.cofrePorta = new THREE.Group(); porta.position.set(8.24, 0, 1.97); s.add(porta);
      bloco(porta, ouro, [0, 0.03, -0.02], [0.6, 0.69, 0.03], 0.03);
      cil(porta, M("#713F12", { m: 0.6, r: 0.4 }), 0.1, 0.1, 0.03, 0.3, 0.4, 0.04, { rx: PI / 2 }); bloco(porta, M("#713F12", { m: 0.6 }), [0.295, 0.32, 0.05], [0.305, 0.48, 0.06], 0.002);
      this.cofreMacaneta = new THREE.Object3D(); this.cofreMacaneta.position.set(0.5, 0.42, 0.08); porta.add(this.cofreMacaneta);
      for (let i = 0; i < 5; i++) cil(s, M("#FACC15", { r: 0.3, m: 0.85 }), 0.06, 0.06, 0.02, 8.05 + (i % 2) * 0.04, 0.01 + i * 0.021, 2.25, {});
      for (let i = 0; i < 3; i++) cil(s, M("#FACC15", { r: 0.3, m: 0.85 }), 0.06, 0.06, 0.02, 7.92, 0.01 + i * 0.021, 2.12, {});
      sombra(s); }
    // aquário
    { const g = this.movel("aquario", [0.35, 6.835], [box(0.35, 6.835, 0.31, 0.49)], { nome: "Aquário", decor: "aquario" }); dec.aquario = this.moveis.aquario;
      bloco(g, M("#5B3A1E", { r: 0.6 }), [0.04, 0, 6.35], [0.66, 0.74, 7.32], 0.02);
      mesh(new RoundedBoxGeometry(0.58, 0.5, 0.92, 2, 0.01), new THREE.MeshStandardMaterial({ color: "#7DD3FC", transparent: true, opacity: 0.32, roughness: 0.05, metalness: 0.1, depthWrite: false }), g, 0.35, 1.0, 6.835, { cast: false });
      bloco(g, M("#E7D7B8"), [0.08, 0.74, 6.4], [0.62, 0.79, 7.28], 0.01);
      bloco(g, M("#1F2937"), [0.05, 1.24, 6.38], [0.65, 1.28, 7.3], 0.01);
      this.peixes = []; ["#F97316", "#FACC15", "#38BDF8", "#F43F5E"].forEach((c, i) => { const p = new THREE.Group(); esf(p, M(c, { r: 0.4 }), 0.035, 0, 0, 0, { s: [0.6, 0.8, 1.4], seg: 12 }); mesh(new THREE.ConeGeometry(0.03, 0.05, 8), M(c), p, 0, 0, -0.06, { rx: -PI / 2 }); g.add(p); this.peixes.push(p); });
      for (let i = 0; i < 5; i++) { const a = mesh(new THREE.ConeGeometry(0.03, 0.18 + i * 0.03, 6), M("#16A34A", { r: 0.8 }), g, 0.2 + (i % 3) * 0.12, 0.85, 6.5 + i * 0.17); a.userData.alga = i; }
      this.bolhas = []; for (let i = 0; i < 6; i++) { const b = esf(g, M("#FFFFFF", { op: 0.6, r: 0.1 }), 0.008, 0.45, 0.8, 7.1, { seg: 8, seg2: 6, cast: false }); this.bolhas.push(b); }
      this.racao = []; for (let i = 0; i < 14; i++) { const b = esf(g, M("#B45309", { r: 0.8 }), 0.006, 0.35, 1.2, 6.8, { seg: 6, seg2: 4, cast: false }); b.visible = false; this.racao.push(b); }
      bloco(g, M("#F59E0B", { r: 0.6 }), [0.5, 1.28, 7.12], [0.58, 1.38, 7.2], 0.008); bloco(g, M("#DC2626", { r: 0.5 }), [0.5, 1.38, 7.12], [0.58, 1.395, 7.2], 0.004);
      this.aqLuz = brilho("#38BDF8", 1.0, 0.25); this.aqLuz.position.set(0.35, 1.0, 6.85); g.add(this.aqLuz); }
    // touro de ouro
    { const g = this.movel("touro", [6.2, 6.95], [box(6.2, 6.95, 0.35, 0.35)], { nome: "Touro de ouro", decor: "touro" }); dec.touro = this.moveis.touro;
      const s = this.pedaco(g, [8.5, 6.95], [6.2, 6.95]); const ouro = M("#E3B341", { r: 0.18, m: 1 });
      bloco(s, M("#E5E7EB", { r: 0.5 }), [8.15, 0, 6.6], [8.85, 0.55, 7.3], 0.03);
      const t = new THREE.Group(); t.position.set(8.5, 0.55, 6.95); t.rotation.y = -PI * 0.6; s.add(t); this.touroT = t;
      caps(t, ouro, 0.13, 0.28, 0, 0.3, 0, { rx: PI / 2 }); esf(t, ouro, 0.12, 0, 0.33, -0.1);
      const cb = new THREE.Group(); cb.position.set(0, 0.36, 0.27); cb.rotation.x = 0.5; t.add(cb);
      esf(cb, ouro, 0.09, 0, 0, 0, { s: [1, 0.9, 1.2] }); for (const sg of [-1, 1]) mesh(new THREE.TorusGeometry(0.07, 0.015, 8, 16, PI * 0.7), ouro, cb, sg * 0.07, 0.07, 0, { rz: sg > 0 ? -0.2 : PI + 0.2 });
      this.touroCab = new THREE.Object3D(); this.touroCab.position.set(0, 0.1, 0); cb.add(this.touroCab);
      for (const [x, z] of [[-0.08, 0.15], [0.08, 0.15], [-0.08, -0.15], [0.08, -0.15]]) caps(t, ouro, 0.035, 0.12, x, 0.12, z);
      mesh(new THREE.TorusGeometry(0.08, 0.012, 6, 12, PI), ouro, t, 0, 0.32, -0.24, { ry: PI / 2 });
      sombra(s); }
    // troféu num pedestal
    { const g = this.movel("trofeu", [8.6, 2.6], [box(8.6, 2.6, 0.18, 0.18)], { nome: "Troféu", decor: "trofeu" }); dec.trofeu = this.moveis.trofeu;
      bloco(g, M("#E5E7EB", { r: 0.45 }), [8.44, 0, 2.44], [8.76, 0.08, 2.76], 0.02); bloco(g, M("#F8FAFC", { r: 0.4 }), [8.48, 0.08, 2.48], [8.72, 1.0, 2.72], 0.02); bloco(g, M("#E5E7EB", { r: 0.45 }), [8.45, 1.0, 2.45], [8.75, 1.04, 2.75], 0.02);
      const tr = this.trofeuObj = new THREE.Group(); const ouro = M("#E3B341", { r: 0.2, m: 1 });
      const pts = [[0, 0], [0.06, 0], [0.06, 0.03], [0.018, 0.04], [0.018, 0.1], [0.07, 0.13], [0.085, 0.22], [0.0, 0.22]].map(([x, y]) => new THREE.Vector2(x, y));
      mesh(new THREE.LatheGeometry(pts, 24), ouro, tr); for (const sg of [-1, 1]) mesh(new THREE.TorusGeometry(0.035, 0.008, 6, 12), ouro, tr, sg * 0.085, 0.17, 0, {});
      sombra(tr); this.trofeuBase = V(8.6, 1.04, 2.6); tr.position.copy(this.trofeuBase); g.add(tr); this.trofeuPai = g; }
    // caminha do cachorro
    { const g = this.movel("cachorro", [1.35, 6.2], [box(1.35, 6.2, 0.38, 0.3)], { nome: "Caminha do cachorro", decor: "cachorro" }); dec.cachorro = this.moveis.cachorro;
      mesh(new THREE.TorusGeometry(0.28, 0.08, 12, 32), M("#7C3AED", { r: 0.9 }), g, 1.35, 0.08, 6.2, { rx: PI / 2, s: [1.25, 0.95, 1] });
      mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), M("#C4B5FD", { r: 1 }), g, 1.35, 0.04, 6.2, { s: [1.2, 1, 0.9] });
      esf(g, M("#EF4444", { r: 0.5 }), 0.04, 1.75, 0.04, 6.45); }
    // globo de festa + holofotes (no teto, em cima da pista)
    { const g = new THREE.Group(); g.visible = false; sc.add(g); dec.globo = g;
      cil(g, M("#94A3B8"), 0.004, 0.004, 0.3, 3.4, H - 0.15, 4.9);
      this.globo = mesh(new THREE.IcosahedronGeometry(0.2, 2), new THREE.MeshStandardMaterial({ color: "#E2E8F0", metalness: 1, roughness: 0.12, flatShading: true }), g, 3.4, H - 0.48, 4.9);
      this.spots = ["#F43F5E", "#22D3EE", "#FACC15", "#A855F7"].map((c) => { const s = new THREE.SpotLight(c, 0, 8, 0.35, 0.6, 1.2); s.position.set(3.4, H - 0.48, 4.9); g.add(s, s.target); return s; }); }
    dec.porquinho = this.decPorquinho;
    // neon ₿
    { const g = new THREE.Group(); g.visible = false; sc.add(g); dec.neon = g; const t = tela(256, 256); t.g.font = "900 210px system-ui, sans-serif"; t.g.textAlign = "center"; t.g.textBaseline = "middle"; t.g.shadowColor = "#FB923C"; t.g.shadowBlur = 24; t.g.fillStyle = "#FDBA74"; t.g.fillText("₿", 128, 138);
      this.neonM = new THREE.MeshBasicMaterial({ map: t.t, transparent: true, toneMapped: false, depthWrite: false });
      mesh(new THREE.PlaneGeometry(0.6, 0.6), this.neonM, g, 0.03, 2.2, 6.6, { ry: PI / 2, cast: false });
      this.neonHalo = brilho("#FB923C", 1.1, 0.35); this.neonHalo.position.set(0.15, 2.2, 6.6); g.add(this.neonHalo); }
    // neon arco-íris (em cima da TV)
    { const g = new THREE.Group(); g.visible = false; sc.add(g); dec.arcoiris = g; this.arcoM = [];
      ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6"].forEach((c, i) => { const m = new THREE.MeshBasicMaterial({ color: c, toneMapped: false }); this.arcoM.push(m); mesh(new THREE.TorusGeometry(0.42 - i * 0.07, 0.014, 8, 48, PI), m, g, 3.2, 2.28, 0.07, { cast: false }); });
      const h = brilho("#FDE68A", 1.4, 0.25); h.position.set(3.2, 2.45, 0.15); g.add(h); this.arcoHalo = h; }
    // alvo de dardos
    { const g = new THREE.Group(); g.visible = false; sc.add(g); dec.dardos = g; const t = tela(128, 128);
      [["#111827", 62], ["#F43F5E", 50], ["#FEF3C7", 34], ["#F43F5E", 16]].forEach(([c, r]) => { t.g.fillStyle = c; t.g.beginPath(); t.g.arc(64, 64, r, 0, TAU); t.g.fill(); });
      mesh(new THREE.CircleGeometry(0.22, 32), new THREE.MeshStandardMaterial({ map: t.t, roughness: 0.8 }), g, 0.012, 1.75, 5.95, { ry: PI / 2, cast: false });
      this.dardos = [];
      for (let i = 0; i < 3; i++) { const dd = new THREE.Group(); cil(dd, M("#9CA3AF", { m: 0.8, r: 0.3 }), 0.003, 0.001, 0.05, 0, 0.025, 0); cil(dd, M("#1D4ED8"), 0.006, 0.006, 0.08, 0, -0.04, 0); mesh(new THREE.ConeGeometry(0.02, 0.04, 4), M("#FACC15", { ds: true }), dd, 0, -0.09, 0, { rx: PI }); dd.scale.setScalar(1.7); sc.add(dd); dd.visible = false; this.dardos.push(dd); }
      this.dardosAlvo = [[0.07, 1.77, 5.93], [0.07, 1.7, 6.0], [0.07, 1.78, 6.02]]; }
    // cachorro: objeto à parte (a caminha é o móvel)

    // confete
    const nC = 260; const geo = new THREE.PlaneGeometry(0.05, 0.03);
    this.confete = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, toneMapped: false }), nC);
    const cores = ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6", "#A855F7", "#FACC15", "#FFFFFF"].map((c) => new THREE.Color(c));
    this.confData = Array.from({ length: nC }, () => ({ x: Math.random() * W, z: Math.random() * D, y0: Math.random() * H, v: 0.4 + Math.random() * 0.5, r: Math.random() * TAU, rv: (Math.random() - 0.5) * 8, sw: Math.random() * TAU }));
    for (let i = 0; i < nC; i++) this.confete.setColorAt(i, cores[i % cores.length]);
    this.confete.visible = false; this.confete.frustumCulled = false; sc.add(this.confete);
    // brilhos (item novo, moeda no porquinho)
    this.faisca = tela(64, 64); { const g = this.faisca.g; g.translate(32, 32); g.fillStyle = "#FFF7C2"; g.beginPath(); for (let i = 0; i < 8; i++) { const a = i * PI / 4, r = i % 2 ? 9 : 30; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.fill(); }
    this.faiscas = []; for (let i = 0; i < 18; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.faisca.t, color: "#FDE68A", transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })); s.visible = false; sc.add(s); this.faiscas.push({ s, vida: 9 }); }
    // notas de dinheiro jogadas
    this.notaGeo = new RoundedBoxGeometry(0.16, 0.004, 0.08, 1, 0.001);
    const nt = tela(128, 64); nt.g.fillStyle = "#86EFAC"; nt.g.fillRect(0, 0, 128, 64); nt.g.strokeStyle = "#15803D"; nt.g.lineWidth = 5; nt.g.strokeRect(4, 4, 120, 56); nt.g.fillStyle = "#15803D"; nt.g.font = "bold 34px system-ui"; nt.g.textAlign = "center"; nt.g.fillText("R$", 64, 44);
    this.notaMat = new THREE.MeshStandardMaterial({ map: nt.t, roughness: 0.8 });

    // objetos que o boneco pega (ficam sempre na cena: ou no lugar deles ou na mão)
    this.itens = {};
    this.itens.controle = this.fazerControle(); sc.add(this.itens.controle);
    const xi = new THREE.Group(); cil(xi, M("#FFFFFF", { r: 0.3 }), 0.042, 0.036, 0.1, 0, 0.05, 0); cil(xi, M("#6B3E1F", { r: 0.2 }), 0.038, 0.038, 0.004, 0, 0.096, 0); mesh(new THREE.TorusGeometry(0.028, 0.008, 8, 14), M("#FFFFFF"), xi, 0.045, 0.05, 0, {}); sombra(xi, true, false);
    this.itens.xicara = xi; sc.add(xi);
    const nota = new THREE.Mesh(this.notaGeo, this.notaMat); nota.castShadow = true; this.itens.nota = nota; sc.add(nota);
    const maco = new THREE.Group(); for (let i = 0; i < 6; i++) { const n = new THREE.Mesh(this.notaGeo, this.notaMat); n.position.y = i * 0.005; n.rotation.y = (i % 3 - 1) * 0.08; maco.add(n); } sombra(maco, true, false); this.itens.maco = maco; sc.add(maco);
    const taco = new THREE.Group(); cil(taco, M("#B7793A", { r: 0.4 }), 0.0105, 0.02, 1.45, 0, 0.725, 0); cil(taco, M("#1F2937", { r: 0.4 }), 0.0205, 0.021, 0.35, 0, 0.175, 0); cil(taco, M("#E8F1FF"), 0.0105, 0.0105, 0.02, 0, 1.455, 0); cil(taco, M("#3B82F6"), 0.0108, 0.0108, 0.008, 0, 1.468, 0); sombra(taco, true, false);
    this.itens.taco = taco; sc.add(taco);
    const cel = new THREE.Group(); bloco(cel, M("#111827", { r: 0.3 }), [-0.035, -0.07, -0.005], [0.035, 0.07, 0.005], 0.008); this.celTela = tela(64, 128);
    mesh(new THREE.PlaneGeometry(0.062, 0.126), new THREE.MeshBasicMaterial({ map: this.celTela.t, toneMapped: false }), cel, 0, 0, 0.0055, { cast: false });
    this.itens.celular = cel; sc.add(cel);
    const moeda = new THREE.Group(); cil(moeda, M("#FACC15", { r: 0.25, m: 0.9 }), 0.025, 0.025, 0.006, 0, 0, 0, { rx: PI / 2 }); this.itens.moeda = moeda; sc.add(moeda);
    const fazDardo = () => { const d = new THREE.Group(); cil(d, M("#9CA3AF", { m: 0.8, r: 0.3 }), 0.003, 0.001, 0.05, 0, 0.025, 0); cil(d, M("#1D4ED8"), 0.006, 0.006, 0.08, 0, -0.04, 0); mesh(new THREE.ConeGeometry(0.02, 0.04, 4), M("#FACC15", { ds: true }), d, 0, -0.09, 0, { rx: PI }); d.scale.setScalar(1.7); return d; };
    this.itens.dardo = fazDardo(); sc.add(this.itens.dardo);
    const aljava = new THREE.Group(); this.aljavaD = [0, 1, 2].map((i) => { const d = fazDardo(); d.position.set((i - 1) * 0.018, 0, 0); d.rotation.z = (i - 1) * 0.12; aljava.add(d); return d; }); this.itens.aljava = aljava; sc.add(aljava);
    Object.values(this.itens).forEach((o) => { o.visible = false; });
    // nuvem de chuva e balão
    const nv = this.nuvem = new THREE.Group(); const nm = M("#94A3B8", { r: 1 });
    [[0, 0, 0, 0.16], [-0.14, -0.03, 0, 0.12], [0.15, -0.02, 0.02, 0.13], [0.05, 0.08, 0, 0.12], [-0.06, 0.02, 0.08, 0.1]].forEach(([x, y, z, r]) => esf(nv, nm, r, x, y, z, { cast: false }));
    this.gotas = []; for (let i = 0; i < 8; i++) { const g = cil(nv, MB("#60A5FA", { op: 0.85 }), 0.006, 0.006, 0.07, -0.15 + i * 0.043, -0.15, (i % 3 - 1) * 0.05, { cast: false }); this.gotas.push(g); }
    nv.visible = false; sc.add(nv);
    this.balao = tela(128, 128); this.balaoT = "";
    this.balaoS = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.balao.t, transparent: true, depthWrite: false })); this.balaoS.visible = false; sc.add(this.balaoS);
    // contorno dos móveis no modo de edição
    const ct = tela(128, 128); ct.g.strokeStyle = "#FFFFFF"; ct.g.lineWidth = 7; rr(ct.g, 6, 6, 116, 116, 16); ct.g.stroke(); ct.g.fillStyle = "rgba(255,255,255,.14)"; ct.g.fill();
    this.contornoTex = ct.t;
    for (const id in this.moveis) {
      const m = this.moveis[id];
      m.marca = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ct.t, color: "#60A5FA", transparent: true, depthWrite: false, toneMapped: false, opacity: 0.85 }));
      m.marca.rotation.x = -PI / 2; m.marca.visible = false; m.marca.renderOrder = 2; sc.add(m.marca);
      m.outer.traverse((o) => { o.userData.movel = id; });
    }
  }
  fazerControle() {
    const g = new THREE.Group();
    bloco(g, M("#1F2937", { r: 0.35 }), [-0.08, -0.015, -0.035], [0.08, 0.015, 0.035], 0.015);
    for (const s of [-1, 1]) esf(g, M("#1F2937", { r: 0.35 }), 0.035, s * 0.07, -0.005, -0.015, { s: [1, 0.7, 1.3] });
    esf(g, M("#60A5FA", { e: "#60A5FA", ei: 0.6 }), 0.009, -0.04, 0.016, 0); esf(g, M("#F87171", { e: "#F87171", ei: 0.6 }), 0.009, 0.04, 0.016, 0);
    return sombra(g, true, false);
  }
  planta(x, y, z, h, par = this.scene) {
    const g = new THREE.Group(); g.position.set(x, y, z); par.add(g);
    const r = h * 0.18;
    cil(g, M("#E7E5E4", { r: 0.6 }), r, r * 0.8, h * 0.32, 0, h * 0.16, 0); cil(g, M("#57534E", { r: 1 }), r * 0.95, r * 0.95, 0.01, 0, h * 0.32, 0);
    const folhas = new THREE.Group(); folhas.position.y = h * 0.32; g.add(folhas);
    const fm = [M("#16A34A", { r: 0.7, ds: true }), M("#22C55E", { r: 0.7, ds: true }), M("#15803D", { r: 0.7, ds: true })];
    const n = 9;
    for (let i = 0; i < n; i++) {
      const a = i * TAU / n + (i % 2) * 0.3, inc = 0.35 + (i % 3) * 0.2, L = h * (0.5 + (i % 4) * 0.1);
      const f = new THREE.Group(); f.rotation.set(0, a, 0); folhas.add(f);
      const fi = new THREE.Group(); fi.rotation.x = inc; f.add(fi);
      mesh(new THREE.SphereGeometry(L * 0.5, 10, 8), fm[i % 3], fi, 0, L * 0.5, 0, { s: [0.32, 1, 0.1] });
    }
    sombra(g);
    (this.plantas ||= []).push(folhas);
    return g;
  }
