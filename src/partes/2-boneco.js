
/* ---------- humores e luz ---------- */
const LUZ = {
  triste: { hemi: 0.55, key: 0.85, keyCor: "#AFC0E6", amb: "#7F8FB3", lamp: false, pend: false, raio: 0.1, tv: "#EF4444", mon: "#EF4444", exp: 0.9 },
  preocupado: { hemi: 0.75, key: 1.35, keyCor: "#FFE3C7", amb: "#B9A58F", lamp: true, pend: false, raio: 0.16, tv: "#EF4444", mon: "#F97316", exp: 0.97 },
  tranquilo: { hemi: 0.85, key: 1.7, keyCor: "#FFF4E3", amb: "#C8C6E8", lamp: true, pend: false, raio: 0.28, tv: "#818CF8", mon: "#60A5FA", exp: 1.0 },
  feliz: { hemi: 0.95, key: 2.1, keyCor: "#FFF1D6", amb: "#E8DCC0", lamp: true, pend: true, raio: 0.4, tv: "#22C55E", mon: "#22C55E", exp: 1.04 },
  euforico: { hemi: 0.8, key: 1.6, keyCor: "#FFE0F2", amb: "#E9C9E6", lamp: true, pend: true, raio: 0.36, tv: "#FACC15", mon: "#FACC15", exp: 1.05 },
};

/* ---------- boneco ---------- */
// Aparência configurável pelo perfil (um dígito por opção, ex.: "p1c0k1b0l0o0a2w2r0e0s0"):
// p pele, c cor do cabelo, k corte, b barba, l calça, o óculos, a altura, w corpo, r roupa, e calça/bermuda, s tênis
const AP = {
  p: ["#F6D3B3", "#F2C3A0", "#D9A27A", "#B07850", "#7A4E33", "#4F3123"],
  c: ["#2B1B12", "#3B261B", "#6B4226", "#A86B3C", "#D9B26A", "#EFDDB0", "#8E8E8E", "#B33A2A", "#2F4FC0", "#D9568E"],
  l: ["#2F3B52", "#1F2937", "#5B4636", "#3F5F45", "#D6CDBB", "#6F86B5"],
  s: ["#1B2230", "#F4F6F8", "#C02626", "#7C4A21", "#2563EB"],
};
const AP_MAX = { p: 5, c: 9, k: 9, b: 3, l: 5, o: 1, a: 4, w: 4, r: 9, e: 1, s: 4 };
const AP_PAD = { p: 1, c: 1, k: 0, b: 0, l: 0, o: 0, a: 2, w: 2, r: 0, e: 0, s: 0 };
const lerAp = (v) => { const r = { ...AP_PAD }; String(v || "").replace(/([pckbloawres])(\d)/g, (_, k, d) => { r[k] = Math.min(+d, AP_MAX[k]); }); return r; };
// roupas: tecido do tronco, manga (C curta, L comprida, R regata), punho de outra cor e se o ícone do perfil vai estampado
const COR_TERNO = "#272C38";
const ROUPAS = [
  { m: "camisa", manga: "C", estampa: 1 }, { m: "camisa", manga: "C", estampa: 1 }, { m: "camisa", manga: "L", estampa: 1 }, { m: "branco", manga: "L" }, { m: "camisa", manga: "L" }, { m: "camisa", manga: "R", estampa: 1 },
  { m: "paleto", manga: "L", punho: "branco" }, { m: "camisa", manga: "L", punho: "branco" }, { m: "xadrez", manga: "L" }, { m: "havai", manga: "C" },
];
const ALTURA = [0.9, 0.95, 1, 1.05, 1.1], CORPO = [0.84, 0.92, 1, 1.12, 1.26].map((x) => x * 1.12);   // corpo mais cheio, proporção de boneco de animação
const POSE0 = { alt: 0.89, dy: 0, hz: 0, lean: 0, side: 0, twist: 0, nod: 0, turn: 0, roll: 0, aL: [0, 0.12, 0.2], aR: [0, 0.12, 0.2], lL: [0, 0], lR: [0, 0], olhar: [0, 0], boch: 0, abre: 0.6, lagrima: 0, nuvem: 0, balao: 0, yawAdd: 0, sent: 0, kL: 0, kR: 0, ikL: null, ikR: null, mL: 0, mR: 0, taco: -1, recuo: 0, porta: 0, fxk: 0, gole: 0, pL: 0, pR: 0, olhos: "A", boca: "leve", sob: "", item: "", balaoT: "" };
const NUM = ["alt", "dy", "hz", "lean", "side", "twist", "nod", "turn", "roll", "boch", "abre", "lagrima", "nuvem", "balao", "yawAdd", "sent", "kL", "kR", "mL", "mR", "taco", "recuo", "porta", "fxk", "gole", "pL", "pR"];
const ARR = ["aL", "aR", "lL", "lR", "olhar"];
const DISC = ["olhos", "boca", "sob", "item", "balaoT", "bolas", "solta", "fx", "gestoL", "gestoR"];
// Cabeça modelada numa esfera de raio R e achatada pela escala do grupo (cabeça um pouco maior: traço de desenho animado)
const CAB_ESC = [0.47 * 1.4, 0.565 * 1.4, 0.52 * 1.4], ESTICA = CAB_ESC[1] / CAB_ESC[0] * 0.98;
const BR_A = 0.29, BR_B = 0.325, ESC_MAO = 1.1;   // braço e antebraço (até o ponto de pegada)

// gira uma geometria e a coloca no lugar antes de juntar
function assado(geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = null) {
  const m = new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), s ? V(...s) : V(1, 1, 1));
  geo.applyMatrix4(m); return geo;
}

// formato da cabeça: mandíbula mais estreita, queixo levemente à frente, nuca arredondada
function formaCabeca(geo, R) {
  const p = geo.attributes.position; const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i); const n = v.clone().divideScalar(R);
    const baixo = cl(-n.y), cima = cl(n.y);
    const sx = 1 - 0.11 * Math.pow(baixo, 1.6) + 0.045 * (1 - Math.abs(n.y)) * (n.y < 0 ? 1.4 : 1);
    const sz = 1 - 0.1 * Math.pow(baixo, 2) * (n.z < 0 ? 1.4 : 0.6) - 0.04 * cima * (n.z < 0 ? 1 : 0);
    const sy = 1 + 0.04 * baixo;
    p.setXYZ(i, v.x * sx, v.y * sy, v.z * sz + (n.z > 0 ? 0.035 * R * Math.pow(baixo, 2) * n.z : 0));
  }
  geo.computeVertexNormals(); return geo;
}

class Boneco {
  constructor(cor, icone, aparencia, acessorio) {
    const ap = this.ap = lerAp(aparencia);
    this.molas = {};   // cabelo que balança (rabo de cavalo)
    this.cor = cor || "#2457F5";
    const camisa = this.camisa = new THREE.MeshPhysicalMaterial({ color: this.cor, roughness: 0.8, sheen: 0.22, sheenRoughness: 0.75, sheenColor: new THREE.Color("#E6ECFF") });
    const gola = this.gola = new THREE.MeshStandardMaterial({ color: this.cor, roughness: 0.8 });
    const branco = this.branco = new THREE.MeshStandardMaterial({ color: "#F4F6FA", roughness: 0.7 });
    // terno (cor fixa, grafite), xadrez e havaiana (estampas desenhadas na cor do perfil)
    const paleto = this.paleto = new THREE.MeshStandardMaterial({ color: COR_TERNO, roughness: 0.62 });
    this.texX = tela(256, 256); this.texH = tela(256, 256);
    for (const T of [this.texX, this.texH]) { T.t.wrapS = T.t.wrapT = THREE.RepeatWrapping; T.t.repeat.set(4, 2); }
    const xadrez = this.xadrez = new THREE.MeshStandardMaterial({ map: this.texX.t, roughness: 0.92 });
    const havai = this.havai = new THREE.MeshStandardMaterial({ map: this.texH.t, roughness: 0.72 });
    this.estampasCor = this.cor; this.desenharEstampas(this.cor);
    // pele macia (brilho aveludado nas bordas, como nas animações 3D) e tecidos com sheen
    const pele = this.pele = new THREE.MeshPhysicalMaterial({ color: AP.p[ap.p], roughness: 0.5, emissive: "#4A1D0C", emissiveIntensity: 0.15, sheen: 0.18, sheenRoughness: 0.55, sheenColor: new THREE.Color("#FFC9B0") });
    const peleSom = this.peleSom = new THREE.MeshStandardMaterial({ color: AP.p[ap.p], roughness: 0.6, emissive: "#4A1D0C", emissiveIntensity: 0.1 });
    const cab = this.cab = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.64, vertexColors: true });   // fosco: cor fiel em qualquer luz
    const cabRaspado = this.cabRaspado = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.95 });
    const calca = this.calca = new THREE.MeshPhysicalMaterial({ color: AP.l[ap.l], roughness: 0.84, sheen: 0.18, sheenRoughness: 0.75, sheenColor: new THREE.Color("#B8C4DA") });
    const sap = this.sapMat = new THREE.MeshStandardMaterial({ color: AP.s[ap.s], roughness: 0.45 });
    const sola = this.solaMat = new THREE.MeshStandardMaterial({ color: "#F4F6F8", roughness: 0.55 });
    const meia = M("#F8FAFC", { r: 0.9 });
    const cinto = M("#2A1D16", { r: 0.45 }), fivela = M("#D9B44A", { r: 0.28, m: 0.7 });
    this.gir = [];   // malhas que engordam/emagrecem (escala só na espessura, sem distorcer as juntas)
    const G = (m, k = 1) => { this.gir.push({ m, s: m.scale.clone(), k }); return m; };
    const root = this.root = new THREE.Group();
    const hips = this.hips = new THREE.Group(); root.add(hips);
    /* quadril + cinto */
    G(mesh(new THREE.SphereGeometry(0.155, 28, 18), calca, hips, 0, 0.025, 0, { s: [1.06, 0.64, 0.82] }));
    this.cinto = G(cil(hips, cinto, 0.145, 0.145, 0.03, 0, 0.066, 0, { s: [1.06, 1, 0.8], seg: 32 }));
    this.fivela = bloco(hips, fivela, [-0.018, 0.052, 0.108], [0.018, 0.082, 0.118], 0.006);
    const spine = this.spine = new THREE.Group(); spine.position.y = 0.04; hips.add(spine);
    /* tronco */
    const perfil = new THREE.SplineCurve([[0.0, -0.03], [0.138, -0.01], [0.142, 0.08], [0.146, 0.15], [0.162, 0.25], [0.176, 0.34], [0.182, 0.41], [0.172, 0.462], [0.135, 0.505], [0.074, 0.536], [0.0, 0.55]].map((q) => new THREE.Vector2(q[0], q[1]))).getPoints(48);
    this.torso = G(mesh(new THREE.LatheGeometry(perfil, 48), camisa, spine, 0, 0, 0, { s: [1.06, 1, 0.74] }));
    this.barriga = G(esf(spine, camisa, 0.155, 0, 0.16, 0, { s: [0.98, 1.05, 0.8], seg: 36, seg2: 24 }), 1); this.barriga.visible = false;
    // detalhes de cada roupa
    const R = this.roupas = [];
    const vest = (fn) => { const g = new THREE.Group(); spine.add(g); fn(g); g.visible = false; R.push(g); return g; };
    // peças coladas no peito: malha que segue a curva do tronco (xy(u, t) dá o ponto; u de 0 a 1 na largura, t de 0 a 1 na altura)
    const rTorso = (y) => { let a = perfil[0], b = perfil[perfil.length - 1]; for (let i = 1; i < perfil.length; i++) if (perfil[i].y >= y) { a = perfil[i - 1]; b = perfil[i]; break; } return lerp(a.x, b.x, cl((y - a.y) / ((b.y - a.y) || 1))); };
    const naFrente = (x, y, eps) => { const r = rTorso(y); return Math.sqrt(Math.max(0, 1 - (x / (r * 1.06)) ** 2)) * r * 0.74 + eps; };
    const placa = (g, mat, xy, eps, nx = 6, ny = 12) => {
      const pos = [], idx = [];
      // folga maior no alto do peito, onde o tronco inclina e respira
      for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const [x, y] = xy(i / nx, j / ny); pos.push(x, y, naFrente(x, y, eps + 0.004 + 0.06 * Math.max(0, y - 0.4))); }
      const [x0, y0] = xy(0, 0), [x1, y1] = xy(1, 0), [x2, y2] = xy(0, 1); const vira = (x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0;   // lado espelhado
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + nx + 1; if (vira) idx.push(a, b, a + 1, a + 1, b, b + 1); else idx.push(a, a + 1, b, a + 1, b + 1, b); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, mat); m.castShadow = false; m.receiveShadow = true; g.add(m); return m;
    };
    const faixa = (y0, y1, meia) => (u, t) => { const y = lerp(y0, y1, t); return [(u * 2 - 1) * meia(t), y]; };
    const botao = (g, mat, x, y, r = 0.0068) => esf(g, mat, r, x, y, naFrente(x, y, 0.004), { s: [1, 1, 0.5], seg: 10, seg2: 8 });
    // lapela: faixa ao longo do V do decote (s = lado), da cintura do V até a gola
    const lapela = (g, mat, s, yb, yt, xb, xt, lb, lt, eps) => placa(g, mat, (u, t) => { const xi = lerp(xb, xt, t), w = lerp(lb, lt, t) * (t > 0.86 ? 1 - (t - 0.86) * 2.4 : 1); return [s * (xi + u * w), lerp(yb, yt, t)]; }, eps, 4, 14);
    // 0 polo: gola com abas e dois botões
    vest((g) => {
      const flap = new THREE.BoxGeometry(0.08, 0.01, 0.07);
      for (const s of [-1, 1]) mesh(flap, gola, g, s * 0.042, 0.522, 0.072, { rx: 0.62, rz: -s * 0.55 });
      mesh(new THREE.TorusGeometry(0.066, 0.017, 10, 28), gola, g, 0, 0.535, -0.004, { rx: PI / 2 });
      for (const y of [0.48, 0.44]) esf(g, M("#E8EDF5", { r: 0.4 }), 0.0078, 0, y, 0.122, { seg: 10, seg2: 8 });
    });
    // 1 camiseta: gola redonda
    vest((g) => { mesh(new THREE.TorusGeometry(0.07, 0.012, 10, 28), gola, g, 0, 0.528, 0.004, { rx: PI / 2 - 0.12 }); });
    // 2 moletom: capuz, cordões, bolso canguru e barra
    vest((g) => {
      mesh(new THREE.TorusGeometry(0.085, 0.034, 12, 28, PI * 1.25), gola, g, 0, 0.53, -0.025, { rx: PI / 2 - 0.25, rz: -PI * 0.125 + PI });
      esf(g, gola, 0.1, 0, 0.5, -0.1, { s: [1.05, 0.6, 0.55] });
      for (const s of [-1, 1]) caps(g, M("#F1F5F9", { r: 0.6 }), 0.006, 0.09, s * 0.03, 0.45, 0.13, { rx: 0.08 });
      bloco(g, gola, [-0.09, 0.07, 0.098], [0.09, 0.18, 0.124], 0.025, { rx: -0.05 });
      cil(g, gola, 0.15, 0.15, 0.04, 0, -0.005, 0, { s: [1.06, 1, 0.76], seg: 32 });
    });
    // 3 social: camisa branca, colarinho e gravata na cor do perfil
    vest((g) => {
      for (const s of [-1, 1]) mesh(new THREE.BoxGeometry(0.075, 0.008, 0.06), branco, g, s * 0.04, 0.525, 0.07, { rx: 0.7, rz: -s * 0.75 });
      mesh(new THREE.TorusGeometry(0.064, 0.013, 10, 28), branco, g, 0, 0.535, -0.004, { rx: PI / 2 });
      const gr = this.gravata = new THREE.MeshStandardMaterial({ color: this.cor, roughness: 0.5 });
      bloco(g, gr, [-0.02, 0.49, 0.112], [0.02, 0.525, 0.13], 0.008);
      const gv = new THREE.Shape(); gv.moveTo(-0.018, 0); gv.lineTo(0.018, 0); gv.lineTo(0.032, -0.25); gv.lineTo(0, -0.29); gv.lineTo(-0.032, -0.25); gv.closePath();
      mesh(new THREE.ExtrudeGeometry(gv, { depth: 0.008, bevelEnabled: true, bevelSize: 0.003, bevelThickness: 0.003, bevelSegments: 1 }), gr, g, 0, 0.495, 0.118, { rx: -0.1 });
      for (const y of [0.4, 0.3, 0.2, 0.1]) esf(g, M("#CBD5E1", { r: 0.4 }), 0.006, 0.045, y, 0.14 - y * 0.02, { seg: 8, seg2: 6 });
    });
    // 4 jaqueta: aberta, com camiseta branca por baixo
    vest((g) => {
      placa(g, branco, faixa(0.03, 0.515, (t) => lerp(0.07, 0.06, t)), 0.002);
      for (const s of [-1, 1]) { bloco(g, M("#475569", { r: 0.3, m: 0.6 }), [-0.004, -0.0, -0.004], [0.004, 0.42, 0.004], 0.002).position.set(s * 0.075, 0.24, 0.136 - 0.0); }
      mesh(new THREE.TorusGeometry(0.078, 0.026, 10, 28), gola, g, 0, 0.525, -0.012, { rx: PI / 2 - 0.15 });
      cil(g, gola, 0.15, 0.15, 0.04, 0, -0.005, 0, { s: [1.06, 1, 0.76], seg: 32 });
    });
    // 5 regata: cava funda (o ombro aparece)
    vest((g) => { mesh(new THREE.TorusGeometry(0.075, 0.01, 10, 28), gola, g, 0, 0.52, 0.01, { rx: PI / 2 - 0.25 }); });
    // 6 terno: paletó grafite, camisa branca no V, gravata e lenço na cor do perfil, dois botões
    vest((g) => {
      placa(g, branco, faixa(0.3, 0.535, (t) => lerp(0.012, 0.08, t)), 0.003);
      const gr = this.gravata2 = new THREE.MeshStandardMaterial({ color: this.cor, roughness: 0.45 });
      placa(g, gr, faixa(0.255, 0.49, (t) => t < 0.1 ? lerp(0.002, 0.025, t / 0.1) : lerp(0.025, 0.012, (t - 0.1) / 0.9)), 0.0065);
      placa(g, gr, faixa(0.488, 0.522, (t) => lerp(0.012, 0.018, t)), 0.0085, 4, 3);
      const lap = M("#1D212B", { r: 0.42 });
      for (const s of [-1, 1]) lapela(g, lap, s, 0.285, 0.535, 0.002, 0.07, 0.03, 0.05, 0.009);
      for (const y of [0.25, 0.18]) botao(g, M("#11141B", { r: 0.35 }), 0, y);
      placa(g, M("#1D212B", { r: 0.5 }), (u, t) => [-0.115 + u * 0.065, lerp(0.352, 0.356, t)], 0.006, 3, 1);
      placa(g, gr, (u, t) => [-0.108 + u * 0.05, lerp(0.354, 0.385, t) - (u > 0.5 ? 0 : 0.008 * t)], 0.0075, 4, 4);
    });
    // 7 blazer: na cor do perfil, camiseta branca por baixo
    vest((g) => {
      placa(g, branco, faixa(0.18, 0.53, (t) => lerp(0.03, 0.085, t)), 0.003);
      mesh(new THREE.TorusGeometry(0.068, 0.011, 10, 28), branco, g, 0, 0.528, 0.004, { rx: PI / 2 - 0.12 });
      const lb = this.lapBlazer = new THREE.MeshStandardMaterial({ color: misturaCor(this.cor, "#000000", 0.22), roughness: 0.55 });
      for (const s of [-1, 1]) lapela(g, lb, s, 0.17, 0.535, 0.028, 0.078, 0.032, 0.05, 0.008);
      botao(g, M("#1F2937", { r: 0.35 }), 0.03, 0.15, 0.0075);
    });
    // 8 camisa xadrez de flanela: gola, carcela e botões
    vest((g) => {
      const flap = new THREE.BoxGeometry(0.082, 0.009, 0.07);
      for (const s of [-1, 1]) mesh(flap, xadrez, g, s * 0.043, 0.523, 0.071, { rx: 0.66, rz: -s * 0.6 });
      mesh(new THREE.TorusGeometry(0.066, 0.015, 10, 28), xadrez, g, 0, 0.534, -0.004, { rx: PI / 2 });
      placa(g, xadrez, faixa(0.02, 0.5, () => 0.011), 0.003, 2, 10);
      for (const y of [0.45, 0.36, 0.27, 0.18, 0.09]) botao(g, M("#EDE6D6", { r: 0.4 }), 0, y, 0.006);
    });
    // 9 camisa havaiana: gola aberta (aparece o pescoço) e botões
    vest((g) => {
      placa(g, pele, faixa(0.43, 0.535, (t) => lerp(0.004, 0.05, t)), 0.003);
      for (const s of [-1, 1]) lapela(g, havai, s, 0.4, 0.535, 0.004, 0.052, 0.03, 0.045, 0.006);
      for (const y of [0.36, 0.26, 0.16, 0.06]) botao(g, M("#F5EBD8", { r: 0.4 }), 0, y, 0.006);
    });
    // ícone do perfil estampado no peito
    this.estampa = tela(128, 128);
    const ep = mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ map: this.estampa.t, transparent: true, alphaTest: 0.1, toneMapped: false }), spine, -0.072, 0.37, 0.126, { cast: false, ry: -0.1 });
    this.estampaPlano = ep; this.temIcone = false; this.setIcone(icone);
    /* pescoço e cabeça */
    const neck = this.neck = new THREE.Group(); neck.position.y = 0.52; spine.add(neck);
    cil(neck, pele, 0.05, 0.056, 0.12, 0, 0.03, 0.004, { seg: 20 });
    const head = this.head = new THREE.Group(); head.position.set(0, 0.045, 0.014); head.scale.set(...CAB_ESC); neck.add(head);
    const hc = 0.2, Rc = 0.24; this.hc = hc; this.R = Rc;
    mesh(formaCabeca(new THREE.SphereGeometry(Rc, 56, 40), Rc), pele, head, 0, hc, 0);
    // orelhas grandes e macias, com a concha por dentro
    for (const s of [-1, 1]) {
      esf(head, pele, 0.074, s * (Rc - 0.006), hc - 0.014, -0.014, { s: [0.46, 1.0, 0.78], seg: 24, seg2: 16 });
      esf(head, peleSom, 0.042, s * (Rc + 0.018), hc - 0.014, -0.004, { s: [0.32, 0.78, 0.52], seg: 16, seg2: 12 });
      mesh(new THREE.TorusGeometry(0.046, 0.011, 10, 24, PI * 1.3), pele, head, s * (Rc + 0.02), hc - 0.012, -0.008, { ry: s * PI / 2, rz: -PI * 0.15, s: [1, 1.25, 1] });
    }
    // nariz: um botão redondo, pequeno, como nos bonecos 3D de animação
    esf(head, pele, 0.031, 0, hc - 0.042, Rc - 0.004, { s: [1.18, 0.9, 0.95], seg: 24, seg2: 16 });
    this.montarOlhos(head, hc, Rc);
    // rosto pintado em canvas sobre um pedaço de esfera
    this.rosto = tela(512, 384); this.rosto.g.scale(2, 2);
    const fg = formaCabeca(new THREE.SphereGeometry(Rc + 0.003, 48, 28, PI / 2 - 0.9, 1.8, 0.85, 1.3), Rc + 0.003);
    const fm = new THREE.MeshStandardMaterial({ map: this.rosto.t, transparent: true, alphaTest: 0.04, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
    mesh(fg, fm, head, 0, hc, 0, { cast: false });
    this.rostoKey = "";
    this.montarCabelo(head, hc, Rc);
    this.montarBarba(head, hc, Rc);
    this.montarOculos(head, hc, Rc);
    this.montarChapeus(head, hc, Rc);
    /* braços: pele e mangas são tubos contínuos presos a dois ossos (ombro e cotovelo), que dobram
       suaves na junta em vez de cilindros soltos com uma bola no meio */
    this.dedos = { L: [], R: [] }; this.tubos = [];
    const tubo = (par, mat, perfil, juntaY, ossos, o = {}) => { const m = new THREE.SkinnedMesh(new THREE.BufferGeometry(), mat); m.frustumCulled = false; m.castShadow = true; par.add(m); this.tubos.push({ m, perfil, juntaY, ossos, kz: o.kz ?? 1, k: o.k ?? 1, aberto: !!o.aberto, banda: o.banda ?? 0.055 }); return m; };
    const braco = (lado, nome) => {
      const sh = new THREE.Group(); sh.position.set(0.19 * lado, 0.437, 0); spine.add(sh);
      const el = new THREE.Group(); el.position.y = -BR_A; sh.add(el);
      const o0 = new THREE.Bone(), o1 = new THREE.Bone(); sh.add(o0); el.add(o1);
      // perfil [y, raio]: ombro, bíceps, acima do cotovelo, cotovelo, antebraço, punho
      const pele = tubo(sh, this.pele, [[0.045, 0.0], [0.035, 0.032], [0.0, 0.05], [-0.1, 0.048], [-0.2, 0.043], [-0.29, 0.039], [-0.35, 0.043], [-0.47, 0.034], [-0.545, 0.029], [-0.562, 0.0]], -BR_A, [o0, o1]);
      const mangaC = tubo(sh, camisa, [[0.06, 0.0], [0.05, 0.04], [0.02, 0.062], [-0.06, 0.06], [-0.19, 0.055]], -BR_A, [o0, o1], { aberto: true });
      const mangaL = tubo(sh, camisa, [[0.06, 0.0], [0.05, 0.04], [0.02, 0.062], [-0.1, 0.058], [-0.22, 0.052], [-0.29, 0.05], [-0.36, 0.051], [-0.5, 0.044], [-0.535, 0.043]], -BR_A, [o0, o1], { aberto: true });
      const ombro = G(esf(sh, camisa, 0.06, 0, 0.0, 0, { seg: 24, seg2: 18, s: [1, 0.9, 1] }));
      const ombroPele = G(esf(sh, this.pele, 0.051, 0, -0.004, 0, { seg: 20, seg2: 14 }));
      const bainhaC = G(mesh(new THREE.TorusGeometry(0.055, 0.008, 8, 24), camisa, sh, 0, -0.188, 0, { rx: PI / 2 }));
      const punho = G(cil(el, camisa, 0.045, 0.045, 0.03, 0, -0.24, 0, { seg: 22 }));
      const hand = new THREE.Group(); hand.position.y = -0.27; hand.scale.setScalar(ESC_MAO); el.add(hand);   // mãos mais cheias, estilo animação
      // mão: dorso e palma arredondados, nós dos dedos, cinco dedos de duas falanges
      esf(hand, this.pele, 0.033, 0, -0.006, 0, { s: [0.72, 0.75, 1.05], seg: 16, seg2: 12 });
      esf(hand, this.pele, 0.046, 0, -0.052, 0, { s: [0.38, 1.0, 0.92], seg: 22, seg2: 16 });
      for (const z of [-0.027, -0.009, 0.009, 0.027]) esf(hand, this.pele, 0.0118, 0, -0.09, z, { s: [1.05, 0.9, 1], seg: 10, seg2: 8 });
      const lista = this.dedos[nome];
      [[-0.028, 0.035], [-0.0095, 0.043], [0.0095, 0.041], [0.028, 0.033]].forEach(([z, len]) => {
        const p1 = new THREE.Group(); p1.position.set(0, -0.092, z); hand.add(p1);
        caps(p1, this.pele, 0.0128, len, 0, -len / 2 - 0.003, 0);
        const p2 = new THREE.Group(); p2.position.y = -len - 0.006; p1.add(p2);
        caps(p2, this.pele, 0.0118, len * 0.8, 0, -len * 0.4 - 0.002, 0);
        lista.push({ p1, p2 });
      });
      const t1 = new THREE.Group(); t1.position.set(-lado * 0.012, -0.03, 0.034); t1.rotation.set(0.4, 0, lado * 0.5); hand.add(t1);
      esf(t1, this.pele, 0.016, 0, -0.006, 0, { s: [0.9, 1.3, 0.9], seg: 10, seg2: 8 });
      caps(t1, this.pele, 0.0148, 0.032, 0, -0.022, 0);
      const t2 = new THREE.Group(); t2.position.y = -0.047; t1.add(t2);
      caps(t2, this.pele, 0.0132, 0.027, 0, -0.016, 0);
      lista.push({ p1: t1, p2: t2, polegar: true });
      return { sh, el, hand, lado, pele, ombro, ombroPele, mangaC, bainhaC, mangaL, punho, qFK: new THREE.Quaternion(), qIK: new THREE.Quaternion() };
    };
    this.L = braco(-1, "L"); this.R = braco(1, "R");
    this.curL = { c: [0.5, 0.42, 0.34, 0.26, 0.25], s: 0.05 }; this.curR = { c: [0.5, 0.42, 0.34, 0.26, 0.25], s: 0.05 };
    /* pernas: perna e calça contínuas do quadril ao tornozelo (ossos no quadril e no joelho), tênis arredondado */
    const perna = (lado) => {
      const hp = new THREE.Group(); hp.position.set(0.094 * lado, -0.01, 0); hips.add(hp);
      const kn = new THREE.Group(); kn.position.y = -0.42; hp.add(kn);
      const ft = new THREE.Group(); ft.position.y = -0.4; kn.add(ft);
      const o0 = new THREE.Bone(), o1 = new THREE.Bone(); hp.add(o0); kn.add(o1);
      G(esf(hp, calca, 0.088, 0, -0.02, 0, { seg: 22, seg2: 16 }));
      const peleP = tubo(hp, this.pele, [[-0.3, 0.0], [-0.32, 0.05], [-0.42, 0.048], [-0.52, 0.05], [-0.62, 0.045], [-0.78, 0.035], [-0.8, 0.0]], -0.42, [o0, o1]);
      const calcaL = tubo(hp, calca, [[0.04, 0.0], [0.03, 0.06], [0.0, 0.088], [-0.08, 0.084], [-0.3, 0.068], [-0.42, 0.06], [-0.52, 0.06], [-0.7, 0.05], [-0.775, 0.05]], -0.42, [o0, o1], { aberto: true, kz: 1.04 });
      const bermudaM = tubo(hp, calca, [[0.04, 0.0], [0.03, 0.06], [0.0, 0.09], [-0.08, 0.086], [-0.3, 0.072], [-0.44, 0.064]], -0.42, [o0, o1], { aberto: true, kz: 1.04 });
      const bermuda = G(mesh(new THREE.TorusGeometry(0.064, 0.011, 8, 22), calca, kn, 0, -0.02, 0, { rx: PI / 2 }));
      const barra = G(mesh(new THREE.TorusGeometry(0.05, 0.0095, 8, 20), calca, kn, 0, -0.355, 0, { rx: PI / 2 }));
      const meiaM = cil(ft, meia, 0.036, 0.039, 0.07, 0, 0.012, 0, { seg: 16 });
      // tênis grande e fofo: cabedal arredondado, bico, sola alta com faixa, língua, gola acolchoada e cadarço
      const tn = new THREE.Group(); tn.scale.setScalar(1.22); tn.position.y = 0.0167; ft.add(tn);
      esf(tn, sap, 0.058, 0, -0.026, 0.032, { s: [0.9, 0.66, 1.74], seg: 28, seg2: 18 });
      esf(tn, sap, 0.046, 0, -0.008, -0.02, { s: [0.98, 0.98, 1.02], seg: 22, seg2: 14 });
      mesh(new THREE.TorusGeometry(0.036, 0.011, 10, 24), sap, tn, 0, 0.008, -0.012, { rx: PI / 2 + 0.25 });
      esf(tn, M("#F1F4F8", { r: 0.6 }), 0.024, 0, 0.002, 0.024, { s: [0.95, 0.45, 1.4], seg: 14, seg2: 10 });
      mesh(new THREE.CylinderGeometry(0.06, 0.058, 0.03, 32), sola, tn, 0, -0.062, 0.04, { s: [0.95, 1, 1.82] });
      mesh(new THREE.TorusGeometry(0.06, 0.0045, 6, 32), M("#94A3B8", { r: 0.5 }), tn, 0, -0.054, 0.04, { rx: PI / 2, s: [0.96, 1.83, 1] });
      for (let i = 0; i < 3; i++) bloco(tn, M("#E9EDF2", { r: 0.7 }), [-0.02, 0, -0.004], [0.02, 0.006, 0.004], 0.002).position.set(0, 0.006 - i * 0.008, 0.034 + i * 0.02);
      return { hp, kn, ft, peleP, calcaL, bermudaM, bermuda, barra, meiaM };
    };
    this.PL = perna(-1); this.PR = perna(1);
    sombra(root, true, false);
    // sombra de contato
    const st = tela(64, 64); const gr = st.g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(0,0,0,.45)"); gr.addColorStop(1, "rgba(0,0,0,0)"); st.g.fillStyle = gr; st.g.fillRect(0, 0, 64, 64);
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), new THREE.MeshBasicMaterial({ map: st.t, transparent: true, depthWrite: false }));
    this.blob.rotation.x = -PI / 2; this.blob.position.y = 0.004;
    this.mL = new THREE.Vector3(); this.mR = new THREE.Vector3();
    this.gp = new THREE.Vector3(0, -0.06, 0);
    this.pDy = 0; this.pNod = 0; this.pT = null; this.pYaw = null;
    this.esc = 1;
    // ossos dos tubos: liga na pose de descanso (braços e pernas retos)
    root.updateMatrixWorld(true);
    for (const t of this.tubos) { t.m.geometry = this.geoTubo(t, 1); t.esq = new THREE.Skeleton(t.ossos); t.m.bind(t.esq, t.m.matrixWorld); }
    this.setAparencia(aparencia, acessorio);
  }

  /* --- cabelo: 0 topete, 1 curto, 2 raspado, 3 comprido, 4 cacheado, 5 black power, 6 coque, 7 moicano, 8 rabo de cavalo, 9 careca --- */
  montarCabelo(head, hc, R) {
    const cab = this.cab; const cortes = this.cortes = [];
    const C = V(0, hc, 0);
    // ponto na cabeça: th = ângulo a partir do topo, ph = em volta (0 = frente), h = altura acima do couro
    const S = (th, ph, h = 0) => V(Math.sin(th) * Math.sin(ph), Math.cos(th), Math.sin(th) * Math.cos(ph)).multiplyScalar(R + h).add(C);
    const nrm = (p) => p.clone().sub(C).normalize();
    // linha do cabelo: até onde desce em cada direção (testa mais alta, nuca mais baixa)
    const limite = (ph) => { const f = Math.cos(ph); return f > 0 ? lerp(1.32, 0.98, Math.pow(f, 1.4)) : lerp(1.32, 1.95, Math.pow(-f, 0.9)); };
    const touca = (h = 0.012, th = 1.36, ext = 0.0) => {
      // couro cabeludo: esfera presa na linha do cabelo (frente alta, nuca baixa), com a borda lisa
      const g = new THREE.SphereGeometry(R + h, 56, 32, 0, TAU, 0, 2.1); const p = g.attributes.position; const v = new THREE.Vector3();
      for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const thv = Math.acos(cl(v.y / (R + h), -1, 1)); const phv = Math.atan2(v.x, v.z); const lim = limite(phv) + ext; if (thv > lim) { const q = S(lim, phv, h).sub(C); p.setXYZ(i, q.x, q.y, q.z); } }
      g.computeVertexNormals(); assado(g, 0, hc, 0); return comCor(g, 0.7);
    };
    const mechaNa = (pts, r0, r1, o = {}) => mechaGeo(pts, r0 * 1.3, r1 * 1.5, { ref: (p) => nrm(p), ...o });   // mechas grossas: cabelo esculpido
    // caminho sobre a cabeça de (th0,ph0) até (th1,ph1), subindo do couro (h0) até (h1)
    const trilha = (th0, ph0, th1, ph1, h0, h1, n = 7, bojo = 0.012) => { const r = []; for (let i = 0; i <= n; i++) { const t = i / n; r.push(S(lerp(th0, th1, t), lerp(ph0, ph1, t), lerp(h0, h1, t) + bojo * Math.sin(PI * t))); } return r; };
    const jit = (i, a) => (ruido(i * 3.7 + a) - 0.5);
    const novo = (lista, extra) => { const g = new THREE.Group(); if (lista.length) { const m = mesh(juntar(lista), cab, g); m.castShadow = true; } if (extra) extra(g); cortes[slot] = g; return g; };

    const F = [];
    /* 0 topete: laterais curtas e um topete alto penteado para trás */
    F[0] = () => { {
      const L = [touca(0.012)];
      for (let i = 0; i < 26; i++) { const ph = PI * 0.32 + (i / 25) * PI * 1.36 + jit(i, 1) * 0.08; L.push(mechaNa(trilha(0.45 + jit(i, 2) * 0.1, ph, limite(ph) - 0.05, ph + jit(i, 3) * 0.12, 0.03, 0.006), 0.045, 0.014)); }
      const g = novo(L);
      const fio = this.fio = new THREE.Group(); fio.position.copy(S(0.45, 0, 0)); g.add(fio);
      const T = []; const o = fio.position.clone();
      for (let i = 0; i < 16; i++) {
        const ph = -0.75 + (i / 15) * 1.5 + jit(i, 4) * 0.06, alto = 0.07 + 0.035 * Math.cos(ph * 1.6);
        const pts = [S(0.95, ph * 0.9, 0.006), S(0.62, ph * 0.85, alto * 0.75), S(0.3, ph * 0.7, alto), S(0.05 + jit(i, 5) * 0.1, ph * 0.5 + PI * 0.06, alto * 0.65), S(0.42, PI + ph * 0.4, 0.012)].map((p) => p.sub(o));
        T.push(mechaGeo(pts, 0.05, 0.016, { ref: (p) => p.clone().add(o).sub(C).normalize(), bulbo: 0.25 }));
      }
      mesh(juntar(T), cab, fio);
      this.fioBase = fio;
    } };
    /* 1 curto: penteado para a frente, franja leve */
    F[1] = () => { {
      const L = [touca(0.012)];
      for (let i = 0; i < 44; i++) {
        const ph = (i / 44) * TAU + jit(i, 6) * 0.1; const f = Math.cos(ph);
        const fim = limite(ph) + (f > 0.5 ? 0.02 : -0.02);
        L.push(mechaNa(trilha(0.08 + ruido(i) * 0.2, ph * 0.85 + jit(i, 7) * 0.2, fim, ph, 0.03, f > 0.5 ? 0.02 : 0.008, 7, 0.018), 0.042, 0.012));
      }
      novo(L);
    } };
    /* 2 raspado */
    F[2] = () => { { const g = new THREE.Group(); mesh(touca(0.004, 1.36, 0.04), this.cabRaspado, g); cortes[slot] = (g); } };
    /* 3 comprido: repartido de lado, até os ombros */
    F[3] = () => { {
      const cortina = new THREE.SphereGeometry(R + 0.03, 40, 18, PI - 0.5, PI + 1.0, 0.75, 1.55); const p = cortina.attributes.position;
      for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y < 0) p.setY(i, y * 1.9); const x = p.getX(i), z = p.getZ(i); if (y < 0) { const f = 1 + 0.12 * (-y / R); p.setX(i, x * f); p.setZ(i, z * f); } }
      cortina.computeVertexNormals(); assado(cortina, 0, hc, 0);
      const L = [touca(0.014), comCor(cortina, 0.66)];
      const par = 0.35;
      for (let i = 0; i < 64; i++) {
        const lado = i % 2 ? 1 : -1; const k = Math.floor(i / 2) / 31;
        const ph = par + lado * (0.06 + k * PI * 0.94) + jit(i, 8) * 0.05; const f = Math.cos(ph);
        const th0 = 0.16 + ruido(i + 2) * 0.08;
        const pts = trilha(th0, par + lado * 0.04, PI * 0.4, ph, 0.032, 0.036, 4, 0.012);
        const lim = limite(ph); const ultimo = S(Math.min(lim, 1.45), ph, 0.04);
        if (f > 0.6) { pts.push(S(0.92, ph, 0.045), S(1.08, ph * 1.25 + lado * 0.1, 0.035)); }   // franja de lado
        else {
          pts.push(ultimo); const out = nrm(ultimo).setY(0).normalize();
          const comp = 0.3 + 0.1 * (1 - Math.abs(f)) + ruido(i) * 0.05;
          pts.push(ultimo.clone().add(out.clone().multiplyScalar(0.035)).add(V(0, -comp * 0.5, 0)), ultimo.clone().add(out.clone().multiplyScalar(0.06)).add(V(0, -comp, f < -0.3 ? -0.02 : 0)));
        }
        L.push(mechaNa(pts, 0.085, 0.03, { bulbo: 0.15, seg: 24, ach: 0.4, raiz: 0.78 }));
      }
      novo(L);
    } };
    /* 4 cacheado: cachinhos em espiral por toda a cabeça */
    F[4] = () => { {
      const L = [touca(0.018)];
      let n = 0;
      for (let i = 0; i < 200 && n < 120; i++) {
        const th = Math.acos(1 - 2 * ((i + 0.5) / 200)), ph = i * 2.39996;
        if (th > limite(Math.atan2(Math.sin(ph), Math.cos(ph))) - 0.05) continue;
        n++;
        const base = S(th, ph, 0.03); const nn = nrm(base); const t1 = V(-nn.z, 0, nn.x).normalize(); if (t1.lengthSq() < 0.5) t1.set(1, 0, 0); const t2 = new THREE.Vector3().crossVectors(nn, t1);
        const pts = []; const rr0 = 0.026 + ruido(i) * 0.012, voltas = 1.5;
        for (let j = 0; j <= 12; j++) { const t = j / 12, a = t * voltas * TAU + i; pts.push(base.clone().add(t1.clone().multiplyScalar(Math.cos(a) * rr0)).add(t2.clone().multiplyScalar(Math.sin(a) * rr0)).add(nn.clone().multiplyScalar(t * 0.045))); }
        L.push(mechaGeo(pts, 0.02, 0.014, { ach: 1, rad: 6, seg: 18 }));
      }
      novo(L);
    } };
    /* 5 black power: volume redondo feito de cachos grandes */
    F[5] = () => { {
      const L = [touca(0.02)]; const c0 = V(0, hc + 0.1, -0.08);
      for (let i = 0; i < 170; i++) {
        const y = 1 - 2 * ((i + 0.5) / 170), rr0 = Math.sqrt(1 - y * y), ph = i * 2.39996; const n = V(rr0 * Math.sin(ph), y, rr0 * Math.cos(ph));
        const p = c0.clone().add(n.clone().multiply(V(0.27, 0.24, 0.26)));
        if (p.z - C.z > 0.12 && p.y < hc + 0.12) continue;   // deixa o rosto livre
        if (p.y < hc - 0.12) continue;
        const sg = new THREE.IcosahedronGeometry(0.058 + ruido(i) * 0.016, 1); const sm = mergeVertices(sg); sm.computeVertexNormals(); assado(sm, p.x, p.y, p.z);
        L.push(comCor(sm, 0.82 + ruido(i + 1) * 0.25));
      }
      const g = novo(L); g.userData.volume = g.children[0];
    } };
    /* 6 coque: penteado para trás com coque no alto */
    F[6] = () => { {
      const L = [touca(0.014)];
      const alvo = V(0, hc + 0.2, -0.17);
      for (let i = 0; i < 30; i++) { const ph = (i / 30) * TAU; const lim = limite(ph); if (Math.cos(ph) < -0.6) continue; const a = S(lim - 0.02, ph, 0.006), m = S(lim * 0.5, ph * 0.6 + PI * 0.4 * Math.sign(Math.sin(ph) || 1), 0.022); L.push(mechaNa([a, m, alvo.clone().add(V(0, -0.02, 0.02))], 0.04, 0.02)); }
      const bun = new THREE.IcosahedronGeometry(0.095, 3); const p = bun.attributes.position; const v = new THREE.Vector3();
      for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const n = v.clone().normalize(); v.copy(n.multiplyScalar(0.095 * (1 + 0.06 * Math.sin(Math.atan2(n.x, n.z) * 7 + n.y * 9)))); p.setXYZ(i, v.x, v.y, v.z); }
      const bunL = mergeVertices(bun); bunL.computeVertexNormals(); assado(bunL, alvo.x, alvo.y + 0.04, alvo.z - 0.03, 0.4);
      L.push(comCor(bunL, 1.0));
      const g = novo(L, (gg) => mesh(new THREE.TorusGeometry(0.06, 0.012, 8, 20), M("#111827", { r: 0.5 }), gg, alvo.x, alvo.y - 0.02, alvo.z, { rx: PI / 2 + 0.4 }));
      g.userData.volume = g.children[0];
    } };
    /* 7 moicano: laterais raspadas e crista do topo da testa até a nuca */
    F[7] = () => { {
      const g = new THREE.Group(); mesh(touca(0.004, 1.36, 0.04), this.cabRaspado, g);
      const L = [touca(0.012, 0, -0.0).applyMatrix4(new THREE.Matrix4())];
      L.length = 0;
      for (let i = 0; i < 15; i++) {
        const u = i / 14; const th = lerp(-0.95, 1.75, u); const thb = Math.abs(th), phb = th < 0 ? 0 : PI;
        const alto = (0.07 + 0.06 * Math.sin(PI * cl(u * 1.15))) ;
        const base = S(thb, phb, -0.005); const nn = nrm(base); const tras = (th < 0 ? V(0, 0, -1) : V(0, 0, -1));
        const tip = base.clone().add(nn.clone().multiplyScalar(alto)).add(V(0, 0, -0.05 - 0.03 * u)).add(tras.multiplyScalar(0.0));
        for (const s2 of [-1, 0, 1]) L.push(mechaGeo([S(thb + (th < 0 ? -1 : 1) * 0.0, phb, -0.004).add(V(s2 * 0.022, 0, 0)), base.clone().add(nn.clone().multiplyScalar(alto * 0.5)).add(V(s2 * 0.012, 0, -0.01)), tip.clone().add(V(s2 * 0.006, 0, 0))], 0.065, 0.01, { ref: V(1, 0, 0), rad: 6, seg: 10, ach: 0.8, raiz: 0.7 }));
      }
      const m = mesh(juntar(L), cab, g); g.userData.volume = m; cortes[slot] = (g);
    } };
    /* 8 rabo de cavalo: puxado para trás, rabo que balança */
    F[8] = () => { {
      const L = [touca(0.012)];
      const no = V(0, hc + 0.06, -R - 0.03);
      for (let i = 0; i < 34; i++) { const ph = (i / 34) * TAU; const lim = limite(ph); if (Math.cos(ph) < -0.7) continue; L.push(mechaNa([S(lim - 0.03, ph, 0.006), S(lim * 0.55, ph * 0.75 + (Math.sin(ph) > 0 ? 0.6 : -0.6), 0.02), no.clone().add(V(0, 0.01, 0.03))], 0.04, 0.02)); }
      const g = novo(L, (gg) => mesh(new THREE.TorusGeometry(0.035, 0.012, 8, 18), M("#E11D48", { r: 0.5 }), gg, no.x, no.y, no.z, { rx: 0.2 }));
      const rabo = new THREE.Group(); rabo.position.copy(no); g.add(rabo);
      const T = [];
      for (let i = 0; i < 9; i++) { const a = (i / 9) * TAU; const o = V(Math.cos(a) * 0.018, Math.sin(a) * 0.015, 0); T.push(mechaGeo([o.clone(), o.clone().add(V(0, 0.02, -0.07)), o.clone().multiplyScalar(1.6).add(V(0, -0.12, -0.1)), o.clone().multiplyScalar(1.2).add(V(0, -0.32, -0.06)), o.clone().multiplyScalar(0.4).add(V(0, -0.44, -0.03))], 0.032, 0.008, { ref: V(0, 0, -1), bulbo: 0.4, seg: 20 })); }
      mesh(juntar(T), cab, rabo);
      this.molas.rabo = { g: rabo, a: 0, v: 0, b: 0, vb: 0 };
      g.userData.volume = rabo;
    } };
    /* 9 careca */
    F[9] = () => { cortes[slot] = new THREE.Group(); };
    // cada corte só é montado quando for usado
    let slot = 0;
    this.corte = (i) => { if (!cortes[i]) { slot = i; F[i](); const c = cortes[i]; c.visible = false; sombra(c, true, false); head.add(c); if (this.chapeuAtual !== undefined && c.userData.volume) c.userData.volume.visible = !this.chapeuAtual; } return cortes[i]; };
  }
  montarBarba(head, hc, R) {
    const b = this.barbas = [null];
    const barba = this.barbaMat = new THREE.MeshStandardMaterial({ color: AP.c[this.ap.c], roughness: 1 });
    const bigode = (g) => { for (const s of [-1, 1]) caps(g, barba, 0.0095, 0.048, s * 0.028, hc - 0.078, R - 0.012, { rz: PI / 2 + s * 0.25, s: [1, 1, 0.6] }); };
    let g = new THREE.Group(); bigode(g); esf(g, barba, 0.028, 0, hc - 0.17, R - 0.06, { s: [1, 1.15, 0.5], seg: 14, seg2: 10 }); b.push(g);
    g = new THREE.Group(); bigode(g);
    mesh(new THREE.SphereGeometry(R + 0.008, 40, 16, PI / 2 - 1.3, 2.6, 2.0, 0.85), barba, g, 0, hc, 0);
    b.push(g);
    g = new THREE.Group(); for (const s of [-1, 1]) caps(g, barba, 0.012, 0.05, s * 0.03, hc - 0.076, R - 0.01, { rz: PI / 2 + s * 0.35, s: [1, 1, 0.7] }); b.push(g);
    b.forEach((x) => { if (x) { x.visible = false; head.add(x); } });
  }
  /* --- olhos 3D: globo brilhante, íris grande que segue o olhar, brilho fixo, pálpebras que piscam e
     apertam no sorriso, e sobrancelhas esculpidas que sobem, descem e inclinam com a emoção --- */
  montarOlhos(head, hc, R) {
    const rO = 0.044, ang = 0.39, yO = hc + 0.004;
    const escl = new THREE.MeshPhysicalMaterial({ color: "#FBFAF7", roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08 });
    const iris = this.irisMat = new THREE.MeshPhysicalMaterial({ color: "#3A2214", roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05 });
    const pupila = new THREE.MeshPhysicalMaterial({ color: "#070403", roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05 });
    const brilho = new THREE.MeshBasicMaterial({ color: "#FFFFFF", toneMapped: false });
    const linha = this.cilioMat = new THREE.MeshStandardMaterial({ color: "#24140C", roughness: 0.6 });
    const sob = this.sobMat = new THREE.MeshStandardMaterial({ color: "#2A1A10", roughness: 0.75 });
    const capa = (r, a) => { const g = new THREE.SphereGeometry(r, 28, 10, 0, TAU, 0, a); g.rotateX(PI / 2); return g; };
    this.olhos3d = [];
    for (const s of [-1, 1]) {
      // encaixe: no plano do rosto, virado para fora (um pouco para o lado)
      const base = new THREE.Group(); const x = Math.sin(ang) * R * s, z = Math.cos(ang) * R;
      base.position.set(x * 0.94, yO, z - rO * 0.52); base.rotation.set(0, s * ang * 0.8, 0); head.add(base);
      const globo = new THREE.Group(); base.add(globo);
      mesh(new THREE.SphereGeometry(rO, 28, 20), escl, globo, 0, 0, 0, { cast: false });
      mesh(capa(rO * 1.004, 0.84), iris, globo, 0, 0, 0, { cast: false });
      mesh(capa(rO * 1.008, 0.44), pupila, globo, 0, 0, 0, { cast: false });
      // brilhos: grande em cima, pequeno embaixo (ficam parados quando o olho gira, como a luz refletida)
      const b1 = esf(base, brilho, rO * 0.17, -rO * 0.26, rO * 0.3, rO * 0.94, { seg: 10, seg2: 8, cast: false });
      const b2 = esf(base, brilho, rO * 0.075, rO * 0.27, -rO * 0.24, rO * 0.97, { seg: 8, seg2: 6, cast: false });
      // pálpebras: meias esferas de pele um pouco maiores que o globo, com a linha dos cílios na borda
      const lidG = (cima) => {
        const g = new THREE.Group(); base.add(g);
        const geo = new THREE.SphereGeometry(rO * 1.07, 28, 12, 0, TAU, cima ? 0 : PI / 2, PI / 2);
        mesh(geo, this.pele, g, 0, 0, 0, { cast: false });
        const borda = mesh(new THREE.TorusGeometry(rO * 1.075, cima ? rO * 0.085 : rO * 0.045, 8, 28, PI), cima ? linha : this.peleSom, g, 0, 0, 0, { cast: false });
        borda.rotation.x = PI / 2;
        return g;
      };
      const sup = lidG(true), inf = lidG(false);
      // sobrancelha: cápsula achatada e curvada, presa à testa
      const sg = new THREE.Group(); const xs = Math.sin(ang * 0.95) * R * s;
      sg.position.set(xs, hc + 0.066, Math.cos(ang * 0.95) * R * 0.985); sg.rotation.set(-0.25, s * ang * 0.85, 0); head.add(sg);
      // arco: mais grossa perto do nariz, afina e desce na ponta de fora, e acompanha a curva da testa
      const cg = new THREE.CapsuleGeometry(0.0135, 0.064, 6, 14); cg.rotateZ(PI / 2);
      const pa = cg.attributes.position; for (let i = 0; i < pa.count; i++) { const vx = pa.getX(i), u = vx / 0.045, fora = cl(0.5 + 0.5 * u * s); const gros = lerp(1.12, 0.62, fora);
        pa.setY(i, pa.getY(i) * gros + 0.011 * (1 - u * u) - 0.006 * fora * fora); pa.setZ(i, pa.getZ(i) * 0.55 * gros - 0.75 * vx * vx); }
      cg.computeVertexNormals();
      const sm = mesh(cg, sob, sg, 0, 0, 0.004, { cast: false });
      this.olhos3d.push({ s, base, globo, sup, inf, sg, sm, b1, b2, y0: sg.position.y });
    }
  }
  // ab: abertura (0 fechado, 1 normal, até 1.25 arregalado); feliz: aperta de baixo; ox/oy: olhar
  posarOlhos(F, ab, feliz) {
    if (!this.olhos3d) return;
    const fecha = 1 - cl(ab, 0, 1), arr = Math.max(0, ab - 1);
    for (const o of this.olhos3d) {
      o.globo.rotation.set(cl(F.oy || 0, -1.2, 1.2) * 0.32, cl(F.ox || 0, -1.2, 1.2) * 0.42, 0);
      // de cima: aberto ≈ −0,95 rad, fechado ≈ +1,45 (passa da metade do olho e cobre tudo)
      o.sup.rotation.x = lerp(-0.92 - arr * 0.9, 1.45, fecha) + feliz * 0.12;
      o.inf.rotation.x = lerp(0.98, 0.3, feliz) - fecha * 0.75 + (F.dentroS < 0 ? F.dentroS * 0.2 : 0);
      const vis = fecha < 0.85; o.b1.visible = o.b2.visible = vis;
      const assim = (F.sobeAssim || 0) * (o.s > 0 ? 1 : -1);
      o.sg.position.y = o.y0 + (F.sobeS || 0) * 0.026 + Math.max(0, F.dentroS || 0) * 0.008 + assim * 0.012 - feliz * 0.004 - fecha * 0.006;
      o.sm.rotation.z = -o.s * ((F.dentroS || 0) * 0.42 - feliz * 0.08) + assim * 0.12;
    }
  }
  montarOculos(head, hc, R) {
    const g = this.oculos = new THREE.Group(); const aro = M("#1F2937", { r: 0.35, m: 0.3 });
    this.lente = new THREE.MeshStandardMaterial({ color: "#0B1220", roughness: 0.15, metalness: 0.4, transparent: true, opacity: 0.85 });
    const ex = 0.1, ey = hc + 0.005, ez = R + 0.045;
    for (const s of [-1, 1]) {
      mesh(new THREE.TorusGeometry(0.056, 0.007, 8, 28), aro, g, s * ex, ey, ez, { ry: s * 0.18 });
      const l = mesh(new THREE.CircleGeometry(0.054, 24), this.lente, g, s * ex, ey, ez - 0.002, { ry: s * 0.18, cast: false }); l.name = "lente";
      bloco(g, aro, [-0.006, -0.008, -0.2], [0.006, 0.008, 0], 0.003).position.set(s * (R + 0.012), ey + 0.01, ez - 0.12);
      bloco(g, aro, [-0.05, -0.007, -0.006], [0.05, 0.007, 0.006], 0.003).position.set(s * (ex + 0.1), ey + 0.008, ez - 0.012);
    }
    cil(g, aro, 0.005, 0.005, 0.07, 0, ey + 0.008, ez + 0.006, { rz: PI / 2 });
    g.visible = false; head.add(g);
  }
  montarChapeus(head, hc, R) {
    const h = this.chapeus = {};
    let g = new THREE.Group(); const azul = M("#2563EB", { r: 0.7 });
    mesh(new THREE.SphereGeometry(R + 0.035, 36, 16, 0, TAU, 0, 1.3), azul, g, 0, hc + 0.01, -0.01, { rx: -0.18 });
    bloco(g, azul, [-0.15, -0.01, 0], [0.15, 0.01, 0.2], 0.01, { rx: 0.18 }).position.set(0, hc + 0.12, 0.19);
    esf(g, M("#1E3A8A"), 0.025, 0, hc + R + 0.03, -0.02, { seg: 10, seg2: 8 });
    h.a_bone = g;
    g = new THREE.Group(); const preto = M("#111827", { r: 0.6 });
    cil(g, preto, R + 0.03, R + 0.03, 0.12, 0, hc + 0.16, 0, { seg: 36 });
    bloco(g, preto, [-0.34, -0.012, -0.34], [0.34, 0.012, 0.34], 0.01, { ry: PI / 4 }).position.set(0, hc + 0.23, 0);
    cil(g, M("#F5B400", { r: 0.4 }), 0.008, 0.008, 0.2, 0.2, hc + 0.13, 0.12, { rz: 0.1 });
    h.a_formatura = g;
    g = new THREE.Group(); const ouro = M("#F5B400", { r: 0.25, m: 0.85 });
    cil(g, ouro, R * 0.82, R * 0.86, 0.1, 0, hc + 0.22, 0, { seg: 36 });
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; mesh(new THREE.ConeGeometry(0.04, 0.11, 10), ouro, g, Math.sin(a) * R * 0.8, hc + 0.31, Math.cos(a) * R * 0.8); esf(g, M(i % 2 ? "#DC2626" : "#2563EB", { r: 0.2, m: 0.3 }), 0.024, Math.sin(a) * R * 0.86, hc + 0.22, Math.cos(a) * R * 0.86, { seg: 10, seg2: 8 }); }
    h.a_cartola = g;
    Object.values(h).forEach((x) => { x.visible = false; head.add(x); });
  }
  // tubo de raio variável ao longo de -Y (perfil [y, raio]); peso de pele vai do osso de cima para o de baixo perto da junta
  geoTubo(t, g) {
    const pts = t.perfil, n = 30, rad = 22, f = 1 + (g - 1) * t.k;
    const curva = new THREE.SplineCurve(pts.map(([y, r]) => new THREE.Vector2(r, y))); const amostra = curva.getPoints(n);
    const pos = [], idx = [], si = [], sw = [], uv = [];
    // estampa na mesma escala do tronco (volta do tronco ≈ 0,93 m para u de 0 a 1)
    const rMed = pts.reduce((s2, q) => s2 + Math.max(0, q[1]), 0) / pts.length; const uC = (TAU * rMed) / 0.93;
    for (let i = 0; i <= n; i++) {
      const { x: r0, y } = amostra[i]; const r = Math.max(0, r0) * f;
      const w1 = suave((t.juntaY + t.banda - y) / (2 * t.banda));
      for (let j = 0; j <= rad; j++) { const a = (j / rad) * TAU; pos.push(Math.sin(a) * r, y, Math.cos(a) * r * t.kz); si.push(0, 1, 0, 0); sw.push(1 - w1, w1, 0, 0); uv.push((j / rad) * uC, -y / 0.58); }
    }
    for (let i = 0; i < n; i++) for (let j = 0; j < rad; j++) { const a = i * (rad + 1) + j, b = a + rad + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(si, 4)); geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(sw, 4));
    geo.computeVertexNormals();
    if (t.aberto) geo.setAttribute("normal", geo.getAttribute("normal"));
    return geo;
  }
  setAparencia(v, acessorio) {
    const ap = this.ap = lerAp(v);
    this.pele.color.set(AP.p[ap.p]); this.peleSom.color.set(misturaCor(AP.p[ap.p], "#7A3B22", 0.12));
    this.cab.color.set(AP.c[ap.c]); if (this.sobMat) this.sobMat.color.set(misturaCor(AP.c[ap.c], "#000000", 0.28)); this.barbaMat.color.set(misturaCor(AP.c[ap.c], AP.p[ap.p], 0.12)); this.cabRaspado.color.set(misturaCor(AP.c[ap.c], AP.p[ap.p], 0.22));
    this.calca.color.set(AP.l[ap.l]); this.sapMat.color.set(AP.s[ap.s]); this.solaMat.color.set(ap.s === 1 ? "#1F2937" : "#F4F6F8");
    const chapeu = this.chapeus[acessorio] ? acessorio : "";
    this.chapeuAtual = chapeu; this.corte(ap.k);
    this.cortes.forEach((c, i) => { if (!c) return; c.visible = i === ap.k; if (c.userData.volume) c.userData.volume.visible = !chapeu; });
    this.barbas.forEach((b, i) => { if (b) b.visible = i === ap.b; });
    Object.entries(this.chapeus).forEach(([k, g]) => { g.visible = k === chapeu; });
    if (this.fio) this.fio.visible = !chapeu;
    const escuros = acessorio === "a_oculos";
    this.oculos.visible = escuros || ap.o === 1;
    this.lente.opacity = escuros ? 0.88 : 0.12; this.lente.color.set(escuros ? "#0B1220" : "#DCEBFF");
    // corpo: altura (escala do boneco todo) e espessura
    this.esc = ALTURA[ap.a]; this.root.scale.setScalar(this.esc);
    const g = CORPO[ap.w]; this.fGir = g;
    for (const { m, s, k } of this.gir) { const f = 1 + (g - 1) * k; m.scale.set(s.x * f, s.y, s.z * f); }
    for (const v of this.roupas) v.scale.set(g, 1, g);   // golas e peças do peito acompanham a largura do tronco
    if (this.gTubos !== g) { this.gTubos = g; for (const t of this.tubos) { const old = t.m.geometry; t.m.geometry = this.geoTubo(t, g); if (old) old.dispose(); } }
    this.barriga.visible = ap.w >= 3; this.barriga.position.z = (g / CORPO[2] - 1) * 0.1;
    this.L.sh.position.x = -0.19 * (1 + (g - 1) * 0.6); this.R.sh.position.x = 0.19 * (1 + (g - 1) * 0.6);
    this.PL.hp.position.x = -0.094 * (1 + (g - 1) * 0.5); this.PR.hp.position.x = 0.094 * (1 + (g - 1) * 0.5);
    this.fivela.position.z = 0.118 * g + 0.002;
    this.estampaPlano.position.z = 0.1265 * g + 0.004;   // acompanha a frente do tronco
    this.setRoupa(ap.r, ap.e);
    this.rostoKey = "";
  }
  setRoupa(r, e) {
    this.roupas.forEach((g, i) => { g.visible = i === r; });
    // tecido do tronco e das mangas, tipo de manga (C curta, L comprida, R regata) e punho de camisa aparecendo
    const cfg = ROUPAS[r] || ROUPAS[0]; const mt = this[cfg.m];
    const longa = cfg.manga === "L", regata = cfg.manga === "R";
    for (const B of [this.L, this.R]) {
      B.mangaC.visible = B.bainhaC.visible = !longa && !regata; B.mangaL.visible = B.punho.visible = longa;
      B.ombro.visible = !regata; B.ombroPele.visible = regata;
      for (const k of ["ombro", "mangaC", "bainhaC", "mangaL"]) B[k].material = mt;
      B.punho.material = cfg.punho ? this[cfg.punho] : mt;
    }
    this.torso.material = mt; this.barriga.material = mt;
    this.estampaPlano.visible = this.temIcone && !!cfg.estampa;
    const bermuda = e === 1;
    if (r === 6 && !bermuda) this.calca.color.set(COR_TERNO);   // terno completo: a calça acompanha o paletó
    for (const P of [this.PL, this.PR]) { P.calcaL.visible = P.barra.visible = !bermuda; P.bermudaM.visible = P.bermuda.visible = P.peleP.visible = bermuda; P.meiaM.scale.y = bermuda ? 1.8 : 1; P.meiaM.position.y = bermuda ? 0.04 : 0.012; }
  }
  setCor(cor) {
    const c = cor || "#2457F5"; this.cor = c; this.camisa.color.set(c);
    this.gola.color.set(c).lerp(new THREE.Color(this.ap.r === 2 ? "#000000" : "#FFFFFF"), this.ap.r === 2 ? 0.08 : 0.16);
    if (this.gravata) this.gravata.color.set(c);
    if (this.gravata2) this.gravata2.color.set(c);
    if (this.lapBlazer) this.lapBlazer.color.set(misturaCor(c, "#000000", 0.22));
    if (this.estampasCor !== c) { this.estampasCor = c; this.desenharEstampas(c); }
  }
  // flanela xadrez e estampa havaiana, desenhadas na cor do perfil (texturas que se repetem sem emenda)
  desenharEstampas(c) {
    { const { g, t } = this.texX; const esc = misturaCor(c, "#000000", 0.5), cla = misturaCor(c, "#FFFFFF", 0.6);
      g.globalAlpha = 1; g.fillStyle = misturaCor(c, "#FFFFFF", 0.08); g.fillRect(0, 0, 256, 256);
      g.globalAlpha = 0.42; g.fillStyle = esc; g.fillRect(0, 72, 256, 72); g.fillRect(72, 0, 72, 256);
      g.globalAlpha = 0.3; g.fillRect(0, 196, 256, 22); g.fillRect(196, 0, 22, 256);
      g.globalAlpha = 0.85; g.fillStyle = cla; g.fillRect(0, 168, 256, 5); g.fillRect(168, 0, 5, 256);
      g.globalAlpha = 0.6; g.fillStyle = "#0B0F17"; g.fillRect(0, 106, 256, 4); g.fillRect(106, 0, 4, 256);
      g.globalAlpha = 0.06; g.fillStyle = "#000"; for (let i = -256; i < 256; i += 4) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 256, 256); g.lineTo(i + 258, 256); g.lineTo(i + 2, 0); g.fill(); }
      g.globalAlpha = 1; t.needsUpdate = true; }
    { const { g, t } = this.texH; g.globalAlpha = 1; g.fillStyle = c; g.fillRect(0, 0, 256, 256);
      const folha = misturaCor(misturaCor(c, "#0E5A3A", 0.6), "#000000", 0.15), flor = "#FFF7EC", miolo = "#F6B93B";
      const em = (x, y, fn) => { for (const dx of [-256, 0, 256]) for (const dy of [-256, 0, 256]) { g.save(); g.translate(x + dx, y + dy); fn(); g.restore(); } };
      const fo = (x, y, a, s) => em(x, y, () => { g.rotate(a); g.fillStyle = folha; g.beginPath(); g.ellipse(0, 0, 34 * s, 12 * s, 0, 0, TAU); g.fill(); g.strokeStyle = misturaCor(folha, "#FFFFFF", 0.25); g.lineWidth = 2; g.beginPath(); g.moveTo(-30 * s, 0); g.lineTo(30 * s, 0); g.stroke(); });
      const fl = (x, y, a, s) => em(x, y, () => { g.rotate(a); g.fillStyle = flor; for (let i = 0; i < 5; i++) { g.rotate(TAU / 5); g.beginPath(); g.ellipse(0, -15 * s, 9 * s, 15 * s, 0, 0, TAU); g.fill(); } g.fillStyle = miolo; g.beginPath(); g.arc(0, 0, 6 * s, 0, TAU); g.fill(); });
      fo(40, 60, 0.6, 1); fo(170, 30, -0.4, 0.9); fo(120, 170, 1.9, 1.1); fo(220, 210, 0.3, 0.8); fo(30, 210, -1.1, 0.9);
      fl(78, 92, 0.3, 1.1); fl(200, 120, 1.2, 0.9); fl(60, 190, 0.8, 0.8); fl(170, 230, 0.1, 1);
      t.needsUpdate = true; }
  }
  setIcone(n) {
    const { g, t } = this.estampa; g.clearRect(0, 0, 128, 128);
    const ok = !!(n && typeof window !== "undefined" && window.RI && window.RI.tem(n + ":f"));
    if (ok) window.RI.desenhar(g, n + ":f", 64, 64, 104, "rgba(255,255,255,.92)");
    this.temIcone = ok; this.estampaPlano.visible = ok && !!(ROUPAS[this.ap.r] || ROUPAS[0]).estampa; t.needsUpdate = true;
  }
  // IK de dois ossos: põe a mão (ponto de pegada) no alvo em coordenadas do mundo
  // palma para baixo com os dedos na direção f (ou para a frente do corpo), levemente inclinados para baixo
  oriMao(lado, ori) {
    if (!ori) return null;
    let f; if (ori === "baixo") { const y = this.root.rotation.y; f = V(Math.sin(y), -0.3, Math.cos(y)); } else if (Array.isArray(ori) && ori.length === 4) return new THREE.Quaternion(...ori); else f = V(...ori);
    f.normalize();
    const X = V(0, lado === "R" ? 1 : -1, 0);   // palma (−X na direita, +X na esquerda) virada para baixo
    const Y = f.clone().negate().addScaledVector(X, f.dot(X)).normalize(); const Z = new THREE.Vector3().crossVectors(X, Y);
    return new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, Y, Z));
  }
  // qMao (opcional): orientação da mão no mundo; aí o alvo do braço é o punho, para os dedos caírem no ponto certo
  ik(B, alvo, peso, qMao) {
    const sh = B.sh; const sp = this.spine;
    const t = sp.worldToLocal(alvo.clone());
    if (qMao) { const qs = sp.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(qMao); t.sub(this.gp.clone().multiplyScalar(ESC_MAO).applyQuaternion(qs)); }
    t.sub(sh.position);
    const a = BR_A, b = qMao ? BR_B - 0.055 : BR_B; let d = t.length(); d = cl(d, Math.abs(a - b) + 0.02, a + b - 0.002);
    const cosE = cl((a * a + b * b - d * d) / (2 * a * b), -1, 1); const flex = PI - Math.acos(cosE);
    // posição da mão e do cotovelo com o braço reto para baixo e o cotovelo dobrado
    const v0 = V(0, -a - b * Math.cos(flex), b * Math.sin(flex)); const e0 = V(0, -1, 0);
    const u0 = v0.clone().normalize(), u1 = t.clone().normalize();
    const n0 = new THREE.Vector3().crossVectors(u0, e0).normalize();
    // cotovelo para baixo, um pouco para fora e para trás
    const polo = V(B.lado * 0.55, -1, -0.45).normalize();
    let n1 = new THREE.Vector3().crossVectors(u1, polo); if (n1.lengthSq() < 1e-6) n1.set(1, 0, 0); n1.normalize();
    const m0 = new THREE.Matrix4().makeBasis(u0, n0, new THREE.Vector3().crossVectors(u0, n0));
    const m1 = new THREE.Matrix4().makeBasis(u1, n1, new THREE.Vector3().crossVectors(u1, n1));
    B.qIK.setFromRotationMatrix(m1.multiply(m0.transpose()));
    B.qFK.copy(sh.quaternion);
    sh.quaternion.slerpQuaternions(B.qFK, B.qIK, peso);
    B.el.rotation.x = lerp(B.el.rotation.x, -flex, peso);
  }
  // p: pose; T: tempo (s); dt: delta (s). Camada procedural por cima da pose: respiração, balanço, cabelo e dedos.
  aplicar(p, T = 0, dt = 0) {
    const resp = Math.sin(T * 1.75), resp2 = Math.sin(T * 1.75 - 0.7);
    const calmo = Math.sin(T * 0.43) * 0.6 + Math.sin(T * 0.97 + 1.3) * 0.4;
    const mov = 1 - cl(Math.abs(p.dy) * 4 + Math.abs(p.hz) * 4, 0, 0.6);
    // sentado, a altura do quadril é a do assento (não cresce com a altura do boneco)
    const alt = p.alt * lerp(1, 1 / this.esc, cl(p.sent || 0));
    this.hips.position.set(0.004 * calmo * mov, alt + p.dy / this.esc + 0.0025 * resp, p.hz);
    this.spine.rotation.set(p.lean + 0.012 * resp2, p.twist + 0.02 * calmo * mov, p.side + 0.008 * calmo * mov);
    const f = this.fGir || 1;
    this.torso.scale.set(1.06 * f * (1 + 0.01 * resp), 1 + 0.007 * resp, 0.74 * f * (1 + 0.022 * resp));
    const mc = Math.sin(T * 0.52 + 0.6) * 0.03 + Math.sin(T * 1.31) * 0.012;
    this.neck.rotation.set(p.nod * 0.35, p.turn * 0.4 + mc * 0.4, p.roll * 0.4);
    this.head.rotation.set(p.nod * 0.65 + 0.008 * resp, p.turn * 0.6 + mc * 0.6, p.roll * 0.6 + 0.01 * calmo * mov);
    const item = p.item || "";
    const sh = 0.01 * resp;
    this.L.sh.position.y = 0.437 + sh; this.R.sh.position.y = 0.437 + sh;
    this.L.sh.rotation.set(-p.aL[0], 0, -p.aL[1]); this.L.el.rotation.x = -p.aL[2];
    this.R.sh.rotation.set(-p.aR[0], 0, p.aR[1]); this.R.el.rotation.x = -p.aR[2];
    this.PL.hp.rotation.x = -p.lL[0]; this.PL.kn.rotation.x = p.lL[1]; this.PL.ft.rotation.x = p.lL[0] - p.lL[1] + (p.pL || 0);
    this.PR.hp.rotation.x = -p.lR[0]; this.PR.kn.rotation.x = p.lR[1]; this.PR.ft.rotation.x = p.lR[0] - p.lR[1] + (p.pR || 0);
    // braços que buscam um ponto (teclado, taco, objetos)
    const qL = p.kL > 0.001 && p.ikL ? this.oriMao("L", p.oriL) : null, qR = p.kR > 0.001 && p.ikR ? this.oriMao("R", p.oriR) : null;
    if ((p.kL > 0.001 && p.ikL) || (p.kR > 0.001 && p.ikR)) {
      this.root.updateMatrixWorld(true);
      if (p.kL > 0.001 && p.ikL) this.ik(this.L, V(...p.ikL), cl(p.kL), qL);
      if (p.kR > 0.001 && p.ikR) this.ik(this.R, V(...p.ikR), cl(p.kR), qR);
    }
    // gole: a mão direita leva a borda da xícara até a boca (a alça fica do lado de fora do rosto)
    const gole = cl(p.gole || 0);
    if (gole > 0.01 && !(p.kR > 0.001 && p.ikR)) {
      this.root.updateMatrixWorld(true);
      const qr = this.root.getWorldQuaternion(new THREE.Quaternion()); const e = this.esc || 1;
      const boca = this.head.localToWorld(V(0, this.hc - 0.075, 0.228));
      const alvo = boca.add(V(0.07 * e, -0.075 * e + 0.05 * e * gole, 0.07 * e).applyQuaternion(qr));
      this.ik(this.R, alvo, suave(gole), null);
    }
    // pegada das mãos por objeto
    const pg = {
      controle: [[-0.08, 0, 0.12], [0, 0, -0.12]], tacoShot: [[0.25, 0, -0.1], [-0.15, 0.2, 0.25]], tacoV: [[0, 0, 0.1], [0, 0.3, 0]],
      xicara: [null, [0.18, -0.12, 0]], nota: [null, [-0.12, 0, -0.1]], tecla: [[0.9, 0, 0], [0.9, 0, 0]], celular: [null, [0.5, -0.3, 0.2]], moeda: [null, [0.3, 0, 0]],
    }[item] || [null, null];
    const [hl, hr] = pg;
    this.L.hand.rotation.set(hl ? hl[0] : p.mL * 0.9, hl ? hl[1] : 0, hl ? hl[2] : 0);
    this.R.hand.rotation.set(hr ? hr[0] : p.mR * 0.9, hr ? hr[1] : 0, hr ? hr[2] : 0);
    // dedos: cada um com a sua curva (pegada, gesto, digitação, controle) e um mexer leve quando estão soltos
    const k = dt > 0 ? Math.min(1, dt * 16) : 1;
    for (const [lado, nome, B] of [[-1, "L", this.L], [1, "R", this.R]]) {
      const g = this.gestoDe(p, item, nome, T); const cur = nome === "L" ? this.curL : this.curR;
      cur.s += (g.s - cur.s) * k;
      this.dedos[nome].forEach((d, i) => {
        cur.c[i] += (g.c[i] - cur.c[i]) * k * (d.polegar ? 0.9 : 1 - i * 0.04);
        const c = cur.c[i];
        if (d.polegar) { d.p1.rotation.z = lado * 0.5 - lado * c * 0.4; d.p1.rotation.x = 0.4 - 0.25 * c; d.p2.rotation.z = -lado * c * 0.7; return; }
        d.p1.rotation.z = -lado * c * 1.08; d.p2.rotation.z = -lado * c * 1.3; d.p1.rotation.x = -cur.s * (i - 1.5) * 0.32;
      });
      // punho vivo: um giro leve quando a mão está solta
      if (!g.preso) { B.hand.rotation.x += 0.05 * Math.sin(T * 0.9 + lado); B.hand.rotation.z += 0.04 * Math.sin(T * 0.7 + lado * 2); }
    }
    // mão orientada no mundo (palma para baixo em cima de uma superfície, por exemplo)
    for (const [B, q, k] of [[this.L, qL, p.kL], [this.R, qR, p.kR]]) {
      if (!q) continue; B.el.updateMatrixWorld(true);
      const alvoQ = B.el.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(q);
      B.hand.quaternion.slerp(alvoQ, cl(k));
    }
    // cabelo: molas amortecidas movidas pelo sobe e desce, pelo aceno de cabeça e pelos giros
    if (dt > 0 && this.pT !== null) {
      const d = Math.min(dt, 0.05);
      const yaw = this.root.rotation.y; const dyaw = this.pYaw == null ? 0 : difAng(this.pYaw, yaw) / d;
      const f2 = -(p.dy - this.pDy) / d * 5 - (p.nod - this.pNod) / d * 0.5;
      for (const k2 in this.molas) {
        const m = this.molas[k2];
        m.v += (f2 * 0.8 - 70 * m.a - 7 * m.v) * d; m.a = cl(m.a + m.v * d, -0.6, 0.6);
        m.vb += (-dyaw * 1.2 - 60 * m.b - 6 * m.vb) * d; m.b = cl(m.b + m.vb * d, -0.6, 0.6);
      }
      const fm = this.fioM || (this.fioM = { a: 0, v: 0 });
      fm.v += (f2 - 90 * fm.a - 9 * fm.v) * d; fm.a = cl(fm.a + fm.v * d, -0.4, 0.4);
      this.pYaw = yaw;
    }
    this.pDy = p.dy; this.pNod = p.nod; this.pT = T;
    if (this.fio) { const a = this.fioM ? this.fioM.a : 0; this.fio.rotation.x = a * 0.6 + 0.015 * resp; this.fio.rotation.z = 0.02 * calmo; }
    const rb = this.molas.rabo; if (rb) { rb.g.rotation.x = 0.15 + rb.a * 0.8 - (p.lean + p.nod) * 0.6; rb.g.rotation.z = rb.b * 0.8 + 0.04 * calmo; }
    this.root.updateMatrixWorld(true);
    this.L.hand.localToWorld(this.mL.copy(this.gp)); this.R.hand.localToWorld(this.mR.copy(this.gp));
  }
  // curvatura de cada dedo [mínimo, anelar, médio, indicador, polegar] e abertura entre eles
  gestoDe(p, item, lado, T) {
    const G = GESTOS;
    let nome = lado === "L" ? p.gestoL : p.gestoR;
    if (!nome) {
      const a = lado === "L" ? p.aL : p.aR, m = lado === "L" ? p.mL : p.mR;
      if (item === "tecla") nome = "tecla";
      else if (item === "controle") nome = "controle";
      else if (item === "tacoShot") nome = lado === "L" ? "ponte" : "segura";
      else if (item === "tacoV") nome = lado === "R" ? "segura" : "";
      else if (lado === "R" && /moeda|dardo/.test(item)) nome = "pinca";
      else if (lado === "R" && /xicara|nota|celular/.test(item)) nome = "segura";
      if (!nome && m > 0.5) nome = "segura";
      if (!nome && a[0] > 2.2) nome = "aberta";
    }
    const g = G[nome] || G.solto; const c = g.c.slice();
    if (nome === "tecla") for (let i = 0; i < 4; i++) c[i] += 0.32 * Math.max(0, Math.sin(T * 12.5 + i * 2.1 + (lado === "L" ? 0 : 1.3))) ** 3;
    else if (nome === "controle") c[4] = 0.35 + 0.25 * Math.max(0, Math.sin(T * (lado === "L" ? 7 : 9.5) + (lado === "L" ? 0 : 2)));
    else if (!g.preso) for (let i = 0; i < 5; i++) c[i] += 0.07 * Math.sin(T * (0.6 + i * 0.17) + i * 1.7 + (lado === "L" ? 0 : 3)) + (p.tamb && lado === "R" && i < 4 ? 0.35 * Math.max(0, Math.sin(T * 14 - i * 1.1)) ** 4 : 0);
    return { c, s: g.s, preso: !!g.preso };
  }
  /* --- rosto: desenhado a partir de parâmetros contínuos (as expressões se misturam sem saltos) ---
     F: sorr (-1 triste … 1 sorriso), abre (boca 0…1), larg, redondo, assim, dentes, lingua, morde,
        olho (abertura 0…1.2), feliz (olhos de quem sorri), fecha (olhos fechados), sobeS (sobrancelhas),
        dentroS (+ ponta de dentro sobe: tristeza, − desce: raiva/tensão), sobeAssim, boch, lagrima, ox, oy (olhar) */
  desenharRosto(F, T) {
    if (F && F.boca !== undefined && F.sorr === undefined) F = faceDePose(F);   // pose antiga (vitrine)
    // piscar: intervalos irregulares, às vezes duplo; mais rápido quando a pessoa está tensa
    const pis = this.pisca || (this.pisca = { prox: 1.5, t: -9, dup: false });
    if (T > pis.prox) { pis.t = T; pis.dup = Math.random() < 0.18; pis.prox = T + (1.8 + Math.random() * 3.6) * (F.dentroS < -0.3 ? 0.7 : 1); }
    if (F.piscar && T - pis.t > 0.5) { pis.t = T; pis.prox = T + 2 + Math.random() * 3; }
    const loc = T - pis.t; let bl = 0;
    if (loc < 0.16) bl = Math.sin((loc / 0.16) * PI); else if (pis.dup && loc > 0.24 && loc < 0.4) bl = Math.sin(((loc - 0.24) / 0.16) * PI);
    const q = (v, n = 20) => Math.round((v || 0) * n);
    const key = ["sorr", "abre", "larg", "redondo", "assim", "dentes", "lingua", "morde", "boch"].map((k) => q(F[k])).join(",") + "|" + (F.lagrima > 0.05 ? Math.floor(((T * 0.6) % 1) * 24) : -1);
    { const fe = cl(Math.max(F.fecha || 0, bl * 0.98)); this.posarOlhos(F, cl((F.olho ?? 1) * (1 - fe), 0, 1.25), cl(F.feliz)); }
    if (key === this.rostoKey) return; this.rostoKey = key;
    const { g, t } = this.rosto;
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 512, 384); g.restore();
    g.save(); g.translate(128, 0); g.scale(ESTICA, 1); g.translate(-128, 0);
    const pele = AP.p[this.ap.p], cabelo = AP.c[this.ap.c];
    const escura = this.ap.p >= 4;
    const cx = 128, ey = 104, dx = 47, tom = escura ? "#160C07" : "#2A1810";
    const somb = escura ? "rgba(20,8,4,.2)" : "rgba(120,60,35,.12)";
    g.lineCap = "round"; g.lineJoin = "round";
    const sorr = cl(F.sorr, -1, 1), abre = cl(F.abre), feliz = cl(F.feliz), fecha = cl(Math.max(F.fecha || 0, bl * 0.98));

    // bochechas: coram e sobem quando ele sorri
    const bo = 0.16 + 0.84 * cl(F.boch), sobeB = Math.max(0, sorr) * 6;
    for (const s of [-1, 1]) { const y = 140 - sobeB; const gr = g.createRadialGradient(cx + s * 60, y, 1, cx + s * 60, y, 25); gr.addColorStop(0, `rgba(235,95,95,${0.42 * bo})`); gr.addColorStop(1, "rgba(235,95,95,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * 60, y, 25, 14, 0, 0, TAU); g.fill(); }
    // olhos e sobrancelhas são 3D (posarOlhos); aqui ficam bochechas, boca e lágrima
    const red = cl(F.redondo);
    // vincos do sorriso
    if (sorr > 0.45 && red < 0.5) { const av = (sorr - 0.45) * 2 * (1 - red * 2); g.strokeStyle = escura ? `rgba(10,4,2,${0.3 * av})` : `rgba(140,70,50,${0.34 * av})`; g.lineWidth = 1.8; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * 22, 141); g.quadraticCurveTo(cx + s * 34, 152, cx + s * 31, 166); g.stroke(); } }
    // boca: cantos (sorriso/assimetria), abertura, forma redonda, dentes e língua
    const my = 161, labS = misturaCor(pele, "#8E2F2B", escura ? 0.35 : 0.42), labI = misturaCor(pele, "#B5524A", escura ? 0.28 : 0.36), linha = misturaCor(pele, "#3A0F0C", 0.7), int = "#4A1216";
    const w = 21 * (F.larg ?? 1) * (1 - 0.45 * red) * (1 + 0.15 * Math.max(0, sorr) * (1 - red));
    const ca = (s) => my - sorr * 7.5 + (F.assim || 0) * s * 4.5;
    const xL = cx - w, xR = cx + w, yL = ca(-1), yR = ca(1);
    const alto = abre * (24 + 8 * red);
    if (alto < 1.6) {
      g.fillStyle = labS; g.beginPath(); g.moveTo(xL, yL); g.quadraticCurveTo(cx - w * 0.45, my - 5.5, cx, my - 3.2); g.quadraticCurveTo(cx + w * 0.45, my - 5.5, xR, yR); g.quadraticCurveTo(cx, my + 1 + sorr * 4, xL, yL); g.fill();
      g.fillStyle = labI; g.beginPath(); g.moveTo(xL + 2, yL + 0.5); g.quadraticCurveTo(cx, my + 1.5 + sorr * 4, xR - 2, yR + 0.5); g.quadraticCurveTo(cx, my + 9 + sorr * 3.5, xL + 2, yL + 0.5); g.fill();
      g.strokeStyle = linha; g.lineWidth = 2; g.beginPath(); g.moveTo(xL, yL); g.quadraticCurveTo(cx, my + 1.2 + sorr * 5, xR, yR); g.stroke();
      if (F.morde > 0.1) { g.fillStyle = "#FAF6F0"; g.beginPath(); g.ellipse(cx + 3, my + 2, 7 * F.morde, 2.6 * F.morde, 0, 0, TAU); g.fill(); }
      if (F.lingua > 0.1) { g.fillStyle = "#E06D78"; g.beginPath(); g.ellipse(cx + 7, my + 4 + 2 * F.lingua, 6 * F.lingua, 4 * F.lingua, 0.3, 0, TAU); g.fill(); }
    } else {
      const sup = my - 3 - abre * 2, inf = my + alto - sorr * 3;
      const forma = () => { g.beginPath(); g.moveTo(xL, yL); g.quadraticCurveTo(cx, sup - sorr * 2, xR, yR); g.quadraticCurveTo(cx + w * 0.75, inf, cx, inf); g.quadraticCurveTo(cx - w * 0.75, inf, xL, yL); g.closePath(); };
      forma(); g.fillStyle = int; g.fill();
      g.save(); forma(); g.clip();
      if (F.dentes > 0.05) { g.fillStyle = "#FAF6F0"; g.fillRect(cx - w, sup - 6, w * 2, 4 + 6.5 * F.dentes); }
      const lg = Math.max(F.lingua || 0, abre * 0.7); if (lg > 0.1) { g.fillStyle = "#D2626A"; g.beginPath(); g.ellipse(cx, inf, w * 0.55, Math.max(3, alto * 0.4) * lg, 0, 0, TAU); g.fill(); }
      g.restore();
      g.strokeStyle = labS; g.lineWidth = 3.4; forma(); g.stroke();
    }
    if (F.lagrima > 0.05) { const k = (((T * 0.6) % 1) * 24 | 0) / 24; g.fillStyle = `rgba(120,180,250,${0.9 * (1 - k) * F.lagrima})`; const x = cx - dx - 12, y = ey + 12 + k * 60; g.beginPath(); g.moveTo(x, y - 7); g.quadraticCurveTo(x + 6, y + 3, x, y + 4.5); g.quadraticCurveTo(x - 6, y + 3, x, y - 7); g.fill(); }
    g.restore();
    t.needsUpdate = true;
  }
}

// gestos das mãos: curvatura [mínimo, anelar, médio, indicador, polegar] e abertura entre os dedos
const GESTOS = {
  solto: { c: [0.52, 0.44, 0.36, 0.28, 0.28], s: 0.06 },
  segura: { c: [0.98, 0.95, 0.92, 0.88, 0.78], s: 0, preso: true },
  punho: { c: [1.15, 1.15, 1.12, 1.08, 0.95], s: 0, preso: true },
  pinca: { c: [0.85, 0.75, 0.6, 0.62, 0.62], s: 0, preso: true },
  aponta: { c: [1.15, 1.15, 1.1, 0.02, 0.75], s: 0, preso: true },
  joinha: { c: [1.15, 1.15, 1.12, 1.08, -0.45], s: 0, preso: true },
  aberta: { c: [0.04, 0.03, 0.02, 0.02, 0.0], s: 0.38 },
  ponte: { c: [0.3, 0.25, 0.2, 0.35, 0.1], s: 0.3, preso: true },
  tecla: { c: [0.5, 0.48, 0.45, 0.42, 0.3], s: 0.08, preso: true },
  controle: { c: [0.95, 0.9, 0.85, 0.7, 0.35], s: 0, preso: true },
  carinho: { c: [0.2, 0.18, 0.15, 0.15, 0.15], s: 0.12 },
};
// expressão a partir dos campos simples da pose (boca, olhos, sobrancelha)
function faceDePose(p) {
  const F = { sorr: 0.3, abre: 0, larg: 1, redondo: 0, assim: 0, dentes: 0, lingua: 0, morde: 0, olho: 1, feliz: 0, fecha: 0, sobeS: 0, dentroS: 0, sobeAssim: 0, boch: p.boch || 0, lagrima: p.lagrima || 0, ox: p.olhar ? p.olhar[0] : 0, oy: p.olhar ? p.olhar[1] : 0 };
  const a = cl(p.abre ?? 0.6);
  switch (p.boca) {
    case "sorriso": Object.assign(F, { sorr: 0.85, abre: 0.3, dentes: 0.9 }); break;
    case "leve": F.sorr = 0.3; break;
    case "reta": F.sorr = 0; break;
    case "triste": F.sorr = -0.6; break;
    case "foco": Object.assign(F, { sorr: -0.05, larg: 0.85, assim: 0.3 }); break;
    case "o": Object.assign(F, { sorr: 0, abre: 0.18 + 0.3 * a, redondo: 1 }); break;
    case "aberta": Object.assign(F, { sorr: 0.55, abre: 0.3 + 0.6 * a, dentes: 0.7 }); break;
  }
  if (p.olhos === "F") F.feliz = 1; if (p.olhos === "Z") F.fecha = 1;
  if (p.sob === "triste" || (!p.sob && p.boca === "triste")) { F.dentroS = 0.85; F.sobeS = -0.1; F.olho = 0.82; }
  if (p.sob === "tenso") { F.dentroS = -0.6; F.sobeS = -0.15; }
  if (p.boca === "o" || p.boca === "aberta") F.sobeS += 0.45 * a;
  if (p.boca === "sorriso" || p.olhos === "F") F.sobeS += 0.15;
  return F;
}
