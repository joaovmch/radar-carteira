
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
const AP_MAX = { p: 5, c: 9, k: 9, b: 3, l: 5, o: 1, a: 4, w: 4, r: 5, e: 1, s: 4 };
const AP_PAD = { p: 1, c: 1, k: 0, b: 0, l: 0, o: 0, a: 2, w: 2, r: 0, e: 0, s: 0 };
const lerAp = (v) => { const r = { ...AP_PAD }; String(v || "").replace(/([pckbloawres])(\d)/g, (_, k, d) => { r[k] = Math.min(+d, AP_MAX[k]); }); return r; };
const ALTURA = [0.9, 0.95, 1, 1.05, 1.1], CORPO = [0.84, 0.92, 1, 1.12, 1.26];
const POSE0 = { alt: 0.89, dy: 0, hz: 0, lean: 0, side: 0, twist: 0, nod: 0, turn: 0, roll: 0, aL: [0, 0.12, 0.2], aR: [0, 0.12, 0.2], lL: [0, 0], lR: [0, 0], olhar: [0, 0], boch: 0, abre: 0.6, lagrima: 0, nuvem: 0, balao: 0, yawAdd: 0, sent: 0, kL: 0, kR: 0, ikL: null, ikR: null, mL: 0, mR: 0, taco: -1, recuo: 0, porta: 0, fxk: 0, olhos: "A", boca: "leve", sob: "", item: "", balaoT: "" };
const NUM = ["alt", "dy", "hz", "lean", "side", "twist", "nod", "turn", "roll", "boch", "abre", "lagrima", "nuvem", "balao", "yawAdd", "sent", "kL", "kR", "mL", "mR", "taco", "recuo", "porta", "fxk"];
const ARR = ["aL", "aR", "lL", "lR", "olhar"];
const DISC = ["olhos", "boca", "sob", "item", "balaoT", "bolas", "solta", "fx"];
// Cabeça modelada numa esfera de raio R e achatada pela escala do grupo (cabeça um pouco maior: traço de desenho animado)
const CAB_ESC = [0.47, 0.565, 0.52], ESTICA = CAB_ESC[1] / CAB_ESC[0] * 0.98;
const BR_A = 0.29, BR_B = 0.325;   // braço e antebraço (até o ponto de pegada)

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
    const sx = 1 - 0.2 * Math.pow(baixo, 1.6) + 0.03 * (1 - Math.abs(n.y));
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
    const camisa = this.camisa = new THREE.MeshStandardMaterial({ color: this.cor, roughness: 0.86 });
    const gola = this.gola = new THREE.MeshStandardMaterial({ color: this.cor, roughness: 0.8 });
    const branco = this.branco = new THREE.MeshStandardMaterial({ color: "#F4F6FA", roughness: 0.7 });
    const pele = this.pele = new THREE.MeshStandardMaterial({ color: AP.p[ap.p], roughness: 0.55, emissive: "#4A1D0C", emissiveIntensity: 0.16 });
    const peleSom = this.peleSom = new THREE.MeshStandardMaterial({ color: AP.p[ap.p], roughness: 0.6, emissive: "#4A1D0C", emissiveIntensity: 0.1 });
    const cab = this.cab = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.5, metalness: 0.05, vertexColors: true });
    const cabRaspado = this.cabRaspado = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.95 });
    const calca = this.calca = new THREE.MeshStandardMaterial({ color: AP.l[ap.l], roughness: 0.88 });
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
    this.barriga = G(esf(spine, camisa, 0.12, 0, 0.13, 0, { s: [1.05, 1.0, 0.82], seg: 28, seg2: 18 }), 1); this.barriga.visible = false;
    // detalhes de cada roupa
    const R = this.roupas = [];
    const vest = (fn) => { const g = new THREE.Group(); spine.add(g); fn(g); g.visible = false; R.push(g); return g; };
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
      const fr = new THREE.SphereGeometry(0.17, 24, 16, -0.42, 0.84, 0.35, 1.75);
      mesh(fr, branco, g, 0, 0.27, 0.0, { s: [0.95, 1.25, 0.82] });
      for (const s of [-1, 1]) { bloco(g, M("#475569", { r: 0.3, m: 0.6 }), [-0.004, -0.0, -0.004], [0.004, 0.42, 0.004], 0.002).position.set(s * 0.075, 0.24, 0.136 - 0.0); }
      mesh(new THREE.TorusGeometry(0.078, 0.026, 10, 28), gola, g, 0, 0.525, -0.012, { rx: PI / 2 - 0.15 });
      cil(g, gola, 0.15, 0.15, 0.04, 0, -0.005, 0, { s: [1.06, 1, 0.76], seg: 32 });
    });
    // 5 regata: cava funda (o ombro aparece)
    vest((g) => { mesh(new THREE.TorusGeometry(0.075, 0.01, 10, 28), gola, g, 0, 0.52, 0.01, { rx: PI / 2 - 0.25 }); });
    // ícone do perfil estampado no peito
    this.estampa = tela(128, 128);
    const ep = mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ map: this.estampa.t, transparent: true, alphaTest: 0.1, toneMapped: false }), spine, -0.072, 0.37, 0.126, { cast: false, ry: -0.1 });
    this.estampaPlano = ep; this.temIcone = false; this.setIcone(icone);
    /* pescoço e cabeça */
    const neck = this.neck = new THREE.Group(); neck.position.y = 0.52; spine.add(neck);
    cil(neck, pele, 0.05, 0.056, 0.12, 0, 0.03, 0.004, { seg: 20 });
    const head = this.head = new THREE.Group(); head.position.set(0, 0.05, 0.01); head.scale.set(...CAB_ESC); neck.add(head);
    const hc = 0.2, Rc = 0.24; this.hc = hc; this.R = Rc;
    mesh(formaCabeca(new THREE.SphereGeometry(Rc, 56, 40), Rc), pele, head, 0, hc, 0);
    for (const s of [-1, 1]) {
      esf(head, pele, 0.058, s * (Rc - 0.004), hc - 0.01, -0.012, { s: [0.5, 1.05, 0.85], seg: 16, seg2: 12 });
      esf(head, peleSom, 0.032, s * (Rc + 0.016), hc - 0.012, -0.006, { s: [0.3, 0.8, 0.5], seg: 12, seg2: 10 });
    }
    esf(head, pele, 0.02, 0, hc - 0.008, Rc - 0.004, { s: [0.7, 1.8, 0.85], seg: 14, seg2: 10 });
    esf(head, pele, 0.026, 0, hc - 0.046, Rc + 0.003, { s: [1.05, 0.9, 1.0], seg: 18, seg2: 12 });   // nariz arredondado
    for (const s of [-1, 1]) esf(head, pele, 0.014, s * 0.024, hc - 0.054, Rc - 0.007, { s: [1, 0.8, 1], seg: 12, seg2: 8 });
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
    /* braços: ombro, manga (curta ou comprida), antebraço e mão de cinco dedos */
    this.dedos = { L: [], R: [] };
    const braco = (lado, nome) => {
      const sh = new THREE.Group(); sh.position.set(0.19 * lado, 0.437, 0); spine.add(sh);
      const ombro = G(esf(sh, camisa, 0.058, 0, -0.008, 0, { seg: 24, seg2: 18 }));
      const ombroPele = G(esf(sh, pele, 0.05, 0, -0.012, 0, { seg: 20, seg2: 14 }));
      G(cil(sh, pele, 0.046, 0.041, BR_A, 0, -BR_A / 2, 0, { seg: 20 }));
      const mangaC = G(cil(sh, camisa, 0.058, 0.053, 0.19, 0, -0.095, 0, { seg: 24 }));
      const bainhaC = G(mesh(new THREE.TorusGeometry(0.054, 0.009, 8, 24), camisa, sh, 0, -0.19, 0, { rx: PI / 2 }));
      const mangaL = G(cil(sh, camisa, 0.058, 0.05, BR_A + 0.02, 0, -BR_A / 2 + 0.01, 0, { seg: 24 }));
      const el = new THREE.Group(); el.position.y = -BR_A; sh.add(el);
      const cot = G(esf(el, pele, 0.041, 0, 0, 0, { seg: 18, seg2: 12 }));
      const cotM = G(esf(el, camisa, 0.05, 0, 0, 0, { seg: 18, seg2: 12 }));
      G(cil(el, pele, 0.041, 0.031, 0.25, 0, -0.135, 0, { seg: 20 }));
      const antM = G(cil(el, camisa, 0.05, 0.042, 0.24, 0, -0.12, 0, { seg: 22 }));
      const punho = G(cil(el, camisa, 0.043, 0.043, 0.03, 0, -0.245, 0, { seg: 22 }));
      const hand = new THREE.Group(); hand.position.y = -0.27; el.add(hand);
      esf(hand, pele, 0.034, 0, -0.004, 0, { s: [0.75, 0.7, 1.1], seg: 14, seg2: 10 });
      bloco(hand, pele, [-0.016, -0.094, -0.04], [0.016, -0.008, 0.04], 0.014);
      const lista = this.dedos[nome];
      [[-0.028, 0.036], [-0.0095, 0.043], [0.0095, 0.041], [0.028, 0.033]].forEach(([z, len]) => {
        const p1 = new THREE.Group(); p1.position.set(0, -0.092, z); hand.add(p1);
        caps(p1, pele, 0.0108, len, 0, -len / 2 - 0.004, 0);
        const p2 = new THREE.Group(); p2.position.y = -len - 0.006; p1.add(p2);
        caps(p2, pele, 0.0098, len * 0.8, 0, -len * 0.4 - 0.002, 0);
        lista.push({ p1, p2 });
      });
      const t1 = new THREE.Group(); t1.position.set(-lado * 0.013, -0.028, 0.036); t1.rotation.set(0.4, 0, lado * 0.5); hand.add(t1);
      caps(t1, pele, 0.0125, 0.034, 0, -0.022, 0);
      const t2 = new THREE.Group(); t2.position.y = -0.048; t1.add(t2);
      caps(t2, pele, 0.0112, 0.028, 0, -0.016, 0);
      lista.push({ p1: t1, p2: t2, polegar: true });
      return { sh, el, hand, lado, ombro, ombroPele, mangaC, bainhaC, mangaL, cot, cotM, antM, punho, qFK: new THREE.Quaternion(), qIK: new THREE.Quaternion() };
    };
    this.L = braco(-1, "L"); this.R = braco(1, "R");
    this.cL = this.cR = 0.28;
    /* pernas: coxa, joelho, canela (calça ou bermuda), meia e tênis */
    const perna = (lado) => {
      const hp = new THREE.Group(); hp.position.set(0.094 * lado, -0.01, 0); hips.add(hp);
      G(esf(hp, calca, 0.086, 0, -0.02, 0, { seg: 20, seg2: 14 }));
      G(cil(hp, calca, 0.082, 0.06, 0.42, 0, -0.21, 0, { seg: 24 }));
      const kn = new THREE.Group(); kn.position.y = -0.42; hp.add(kn);
      const joelhoC = G(esf(kn, calca, 0.06, 0, 0, 0.004, { seg: 18, seg2: 12 }));
      const joelhoP = G(esf(kn, pele, 0.05, 0, -0.03, 0.006, { seg: 18, seg2: 12 }));
      const bermuda = G(mesh(new THREE.TorusGeometry(0.062, 0.012, 8, 22), calca, kn, 0, -0.03, 0, { rx: PI / 2 }));
      const canC = G(cil(kn, calca, 0.059, 0.047, 0.38, 0, -0.19, 0, { seg: 24 }));
      const canP = G(cil(kn, pele, 0.046, 0.036, 0.38, 0, -0.19, 0, { seg: 20 }));
      const barra = G(mesh(new THREE.TorusGeometry(0.049, 0.01, 8, 20), calca, kn, 0, -0.372, 0, { rx: PI / 2 }));
      const ft = new THREE.Group(); ft.position.y = -0.4; kn.add(ft);
      const meiaM = cil(ft, meia, 0.038, 0.041, 0.07, 0, 0.012, 0, { seg: 16 });
      bloco(ft, sap, [-0.05, -0.054, -0.072], [0.05, 0.022, 0.1], 0.032);
      esf(ft, sap, 0.052, 0, -0.028, 0.1, { s: [1, 0.66, 1.2], seg: 18, seg2: 12 });
      bloco(ft, sola, [-0.052, -0.078, -0.075], [0.052, -0.05, 0.164], 0.013);
      bloco(ft, M("#E9EDF2", { r: 0.7 }), [-0.022, 0.012, -0.012], [0.022, 0.026, 0.072], 0.006, { rx: -0.25 });
      return { hp, kn, ft, joelhoC, joelhoP, bermuda, canC, canP, barra, meiaM };
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
    const mechaNa = (pts, r0, r1, o = {}) => mechaGeo(pts, r0, r1, { ref: (p) => nrm(p), ...o });
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
  montarOculos(head, hc, R) {
    const g = this.oculos = new THREE.Group(); const aro = M("#1F2937", { r: 0.35, m: 0.3 });
    this.lente = new THREE.MeshStandardMaterial({ color: "#0B1220", roughness: 0.15, metalness: 0.4, transparent: true, opacity: 0.85 });
    const ex = 0.104, ey = hc + 0.005, ez = R + 0.03;
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
  setAparencia(v, acessorio) {
    const ap = this.ap = lerAp(v);
    this.pele.color.set(AP.p[ap.p]); this.peleSom.color.set(misturaCor(AP.p[ap.p], "#7A3B22", 0.12));
    this.cab.color.set(AP.c[ap.c]); this.barbaMat.color.set(misturaCor(AP.c[ap.c], AP.p[ap.p], 0.12)); this.cabRaspado.color.set(misturaCor(AP.c[ap.c], AP.p[ap.p], 0.22));
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
    this.barriga.visible = ap.w >= 3; this.barriga.position.z = (g - 1) * 0.16;
    this.L.sh.position.x = -0.19 * (1 + (g - 1) * 0.6); this.R.sh.position.x = 0.19 * (1 + (g - 1) * 0.6);
    this.PL.hp.position.x = -0.094 * (1 + (g - 1) * 0.5); this.PR.hp.position.x = 0.094 * (1 + (g - 1) * 0.5);
    this.fivela.position.z = 0.113 * (1 + (g - 1) * 0.9);
    this.estampaPlano.position.z = 0.126 * (1 + (g - 1) * 0.75);
    this.setRoupa(ap.r, ap.e);
    this.rostoKey = "";
  }
  setRoupa(r, e) {
    this.roupas.forEach((g, i) => { g.visible = i === r; });
    const longa = r === 2 || r === 3 || r === 4, regata = r === 5, social = r === 3;
    for (const B of [this.L, this.R]) {
      B.mangaC.visible = B.bainhaC.visible = !longa && !regata; B.mangaL.visible = B.cotM.visible = B.antM.visible = B.punho.visible = longa;
      B.ombro.visible = !regata; B.ombroPele.visible = regata; B.cot.visible = !longa;
      const mt = social ? this.branco : this.camisa; for (const k of ["ombro", "mangaC", "bainhaC", "mangaL", "cotM", "antM", "punho"]) B[k].material = mt;
    }
    this.torso.material = social ? this.branco : this.camisa; this.barriga.material = this.torso.material;
    this.estampaPlano.visible = this.temIcone && !social && r !== 4;
    const bermuda = e === 1;
    for (const P of [this.PL, this.PR]) { P.joelhoC.visible = P.canC.visible = P.barra.visible = !bermuda; P.joelhoP.visible = P.canP.visible = P.bermuda.visible = bermuda; P.meiaM.scale.y = bermuda ? 1.8 : 1; P.meiaM.position.y = bermuda ? 0.04 : 0.012; }
  }
  setCor(cor) {
    const c = cor || "#2457F5"; this.cor = c; this.camisa.color.set(c);
    this.gola.color.set(c).lerp(new THREE.Color(this.ap.r === 2 ? "#000000" : "#FFFFFF"), this.ap.r === 2 ? 0.08 : 0.16);
    if (this.gravata) this.gravata.color.set(c);
  }
  setIcone(n) {
    const { g, t } = this.estampa; g.clearRect(0, 0, 128, 128);
    const ok = !!(n && typeof window !== "undefined" && window.RI && window.RI.tem(n + ":f"));
    if (ok) window.RI.desenhar(g, n + ":f", 64, 64, 104, "rgba(255,255,255,.92)");
    this.temIcone = ok; this.estampaPlano.visible = ok && this.ap.r !== 3 && this.ap.r !== 4; t.needsUpdate = true;
  }
  // IK de dois ossos: põe a mão (ponto de pegada) no alvo em coordenadas do mundo
  ik(B, alvo, peso) {
    const sh = B.sh; const sp = this.spine;
    const t = sp.worldToLocal(alvo.clone()).sub(sh.position);
    const a = BR_A, b = BR_B; let d = t.length(); d = cl(d, Math.abs(a - b) + 0.02, a + b - 0.002);
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
    this.PL.hp.rotation.x = -p.lL[0]; this.PL.kn.rotation.x = p.lL[1]; this.PL.ft.rotation.x = p.lL[0] - p.lL[1];
    this.PR.hp.rotation.x = -p.lR[0]; this.PR.kn.rotation.x = p.lR[1]; this.PR.ft.rotation.x = p.lR[0] - p.lR[1];
    // braços que buscam um ponto (teclado, taco, objetos)
    if ((p.kL > 0.001 && p.ikL) || (p.kR > 0.001 && p.ikR)) {
      this.root.updateMatrixWorld(true);
      if (p.kL > 0.001 && p.ikL) this.ik(this.L, V(...p.ikL), cl(p.kL));
      if (p.kR > 0.001 && p.ikR) this.ik(this.R, V(...p.ikR), cl(p.kR));
    }
    // pegada das mãos por objeto
    const pg = {
      controle: [[-0.08, 0, 0.12], [0, 0, -0.12]], tacoShot: [[0.25, 0, -0.1], [-0.15, 0.2, 0.25]], tacoV: [[0, 0, 0.1], [0, 0.3, 0]],
      xicara: [null, [0.18, -0.12, 0]], nota: [null, [-0.12, 0, -0.1]], tecla: [[0.9, 0, 0], [0.9, 0, 0]], celular: [null, [0.5, -0.3, 0.2]], moeda: [null, [0.3, 0, 0]],
    }[item] || [null, null];
    const [hl, hr] = pg;
    this.L.hand.rotation.set(hl ? hl[0] : p.mL * 0.9, hl ? hl[1] : 0, hl ? hl[2] : 0);
    this.R.hand.rotation.set(hr ? hr[0] : p.mR * 0.9, hr ? hr[1] : 0, hr ? hr[2] : 0);
    // dedos: fechados ao segurar, abertos na comemoração, relaxados no resto
    const segL = /controle|taco/.test(item) || p.mL > 0.5, segR = /controle|taco|xicara|nota|celular|moeda|dardo|trofeu/.test(item) || p.mR > 0.5;
    const alvoL = item === "tecla" ? 0.45 : segL ? 0.95 : p.aL[0] > 2.2 ? 0.1 : 0.32 + 0.05 * Math.sin(T * 0.8);
    const alvoR = item === "tecla" ? 0.45 : segR ? 0.95 : p.aR[0] > 2.2 ? 0.1 : 0.32 + 0.05 * Math.sin(T * 0.8 + 1);
    const k = dt > 0 ? Math.min(1, dt * 12) : 1;
    this.cL += (alvoL - this.cL) * k; this.cR += (alvoR - this.cR) * k;
    for (const [lado, lista, c] of [[-1, this.dedos.L, this.cL], [1, this.dedos.R, this.cR]]) {
      lista.forEach((d, i) => {
        if (d.polegar) { d.p1.rotation.z = lado * 0.5 - lado * c * 0.35; d.p2.rotation.z = -lado * c * 0.6; return; }
        const f2 = 1 + (i - 1.5) * 0.06;
        d.p1.rotation.z = -lado * c * 1.05 * f2; d.p2.rotation.z = -lado * c * 1.25 * f2;
      });
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
  desenharRosto(p, T) {
    let olhos = p.olhos, lid = 0;
    if (olhos === "A") {
      const n = Math.floor(T / 3.4), loc = T - n * 3.4 - (0.3 + ruido(n) * 2.3);
      const dup = ruido(n + 9.3) > 0.82;
      let b = 0; if (loc >= 0 && loc < 0.17) b = Math.sin((loc / 0.17) * PI); else if (dup && loc >= 0.27 && loc < 0.44) b = Math.sin(((loc - 0.27) / 0.17) * PI);
      lid = Math.round(b * 4) / 4;
      if (p.sob === "triste" || p.boca === "triste") lid = Math.max(lid, 0.25);
    }
    const ns = Math.floor(T / 0.85);
    const sx = (ruido(ns) - 0.5) * 0.6, sy = (ruido(ns + 3.7) - 0.5) * 0.35;
    const lagr = p.lagrima > 0.05 ? Math.floor(((T * 0.6) % 1) * 24) : -1;
    const ox = p.olhar[0] * 4.5 + sx, oy = p.olhar[1] * 3 + sy;
    const key = [olhos, p.boca, p.sob, Math.round(p.boch * 10), Math.round(p.abre * 8), Math.round(ox * 4), Math.round(oy * 4), lagr, lid].join("|");
    if (key === this.rostoKey) return; this.rostoKey = key;
    const { g, t } = this.rosto;
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 512, 384); g.restore();
    g.save(); g.translate(128, 0); g.scale(ESTICA, 1); g.translate(-128, 0);
    const pele = AP.p[this.ap.p], cabelo = AP.c[this.ap.c];
    const escura = this.ap.p >= 4;
    const cx = 128, ey = 104, dx = 47, tom = escura ? "#160C07" : "#2A1810";
    const somb = escura ? "rgba(20,8,4,.2)" : "rgba(120,60,35,.12)";
    g.lineCap = "round"; g.lineJoin = "round";
    for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * dx, ey - 2, 4, cx + s * dx, ey - 2, 32); gr.addColorStop(0, somb); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * dx, ey - 2, 32, 22, 0, 0, TAU); g.fill(); }
    // bochechas (sempre um pouco coradas: traço de desenho animado)
    const bo = 0.18 + 0.82 * p.boch;
    for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * 60, 138, 1, cx + s * 60, 138, 24); gr.addColorStop(0, `rgba(235,95,95,${0.4 * bo})`); gr.addColorStop(1, "rgba(235,95,95,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * 60, 138, 24, 14, 0, 0, TAU); g.fill(); }
    // sobrancelhas
    const triste = p.sob === "triste" || (!p.sob && p.boca === "triste"), tenso = p.sob === "tenso";
    const surpr = (p.boca === "aberta" || p.boca === "o") ? 4 * cl(p.abre, 0, 1) : 0, alegre = p.boca === "sorriso" || olhos === "F" ? 2 : 0;
    const by = ey - 30, bi = by + (triste ? -6 : tenso ? 5 : 0), bo2 = by + (triste ? 6 : tenso ? -3 : -2);
    for (const s of [-1, 1]) {
      const xi = cx + s * 16, xo = cx + s * (dx + 25), yi = bi - surpr - alegre * 0.3, yo = bo2 - surpr - alegre, ym = Math.min(yi, yo) - 5 + (tenso ? 2.5 : 0);
      g.fillStyle = misturaCor(cabelo, "#000000", 0.3); g.beginPath(); g.moveTo(xi, yi + 2); g.quadraticCurveTo((xi + xo) / 2, ym - 2, xo, yo + 1); g.quadraticCurveTo((xi + xo) / 2, ym + 5, xi, yi + 9); g.closePath(); g.fill();
    }
    // olhos grandes e brilhantes
    const ew = 23.5, eh = 17;
    const amendoa = (x, y, h) => { g.beginPath(); g.moveTo(x - ew, y + 1); g.bezierCurveTo(x - ew * 0.6, y - h * 1.2, x + ew * 0.5, y - h * 1.25, x + ew, y - 1); g.bezierCurveTo(x + ew * 0.55, y + h * 1.05, x - ew * 0.55, y + h * 1.05, x - ew, y + 1); g.closePath(); };
    for (const s of [-1, 1]) {
      const x = cx + s * dx;
      if (olhos === "A" || olhos === "F") {
        const h = olhos === "F" ? eh * 0.42 : eh * (1 - lid * 0.98), yy = olhos === "F" ? ey + 3 : ey;
        g.save(); amendoa(x, yy, Math.max(h, 0.6)); g.clip();
        g.fillStyle = "#FBF8F4"; g.fillRect(x - ew - 2, yy - eh * 1.5, ew * 2 + 4, eh * 3);
        const ix = x + ox, iy = yy + oy + 1, rI = 13, ir = g.createRadialGradient(ix, iy - 2, 1, ix, iy, rI); ir.addColorStop(0, "#8A5530"); ir.addColorStop(0.6, "#55301A"); ir.addColorStop(1, "#22120A");
        g.fillStyle = ir; g.beginPath(); g.arc(ix, iy, rI, 0, TAU); g.fill();
        g.fillStyle = "#0B0604"; g.beginPath(); g.arc(ix, iy, 6, 0, TAU); g.fill();
        g.fillStyle = "rgba(255,255,255,.97)"; g.beginPath(); g.arc(ix - 4, iy - 4.6, 3.8, 0, TAU); g.fill();
        g.fillStyle = "rgba(255,255,255,.75)"; g.beginPath(); g.arc(ix + 3.6, iy + 3.4, 1.5, 0, TAU); g.fill();
        g.fillStyle = "rgba(0,0,0,.16)"; g.fillRect(x - ew - 2, yy - eh * 1.5, ew * 2 + 4, 7);
        g.restore();
        g.strokeStyle = tom; g.lineWidth = 3.6; g.beginPath(); g.moveTo(x - ew, yy + 1); g.bezierCurveTo(x - ew * 0.6, yy - Math.max(h, 0.6) * 1.2, x + ew * 0.5, yy - Math.max(h, 0.6) * 1.25, x + ew, yy - 1); g.stroke();
        g.lineWidth = 2.4; g.beginPath(); g.moveTo(x + s * ew * 0.9, yy - 2); g.lineTo(x + s * (ew + 5), yy - 6.5); g.stroke();
        if (olhos === "F") { g.strokeStyle = escura ? "rgba(10,4,2,.25)" : "rgba(150,75,50,.28)"; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x - 11, yy + 11); g.quadraticCurveTo(x, yy + 15, x + 11, yy + 11); g.stroke(); }
      } else {
        g.strokeStyle = tom; g.lineWidth = 3.6; g.beginPath(); g.moveTo(x - ew, ey + 1); g.quadraticCurveTo(x, ey + 7, x + ew, ey); g.stroke();
        g.lineWidth = 1.8; for (const a of [-0.7, -0.15, 0.4, 0.85]) { const bx = x + a * ew; g.beginPath(); g.moveTo(bx, ey + 4.5 - Math.abs(a) * 2); g.lineTo(bx + s * 1.2, ey + 8.5 - Math.abs(a) * 2); g.stroke(); }
      }
    }
    // narinas
    g.fillStyle = escura ? "rgba(10,4,2,.35)" : "rgba(120,55,35,.28)";
    for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * 6.5, 141, 3.2, 1.8, s * 0.35, 0, TAU); g.fill(); }
    // boca com lábios
    const my = 161, labS = misturaCor(pele, "#8E2F2B", escura ? 0.35 : 0.42), labI = misturaCor(pele, "#B5524A", escura ? 0.28 : 0.36), linha = misturaCor(pele, "#3A0F0C", 0.7), int = "#4A1216";
    const lab = (w, up, down) => {
      g.fillStyle = labS; g.beginPath(); g.moveTo(cx - w, my - up); g.quadraticCurveTo(cx - w * 0.45, my - 5.5, cx, my - 3.2); g.quadraticCurveTo(cx + w * 0.45, my - 5.5, cx + w, my - up); g.quadraticCurveTo(cx, my + 1 - up * 0.3, cx - w, my - up); g.fill();
      g.fillStyle = labI; g.beginPath(); g.moveTo(cx - w + 2, my - up + 0.5); g.quadraticCurveTo(cx, my + 1.5 - up * 0.3, cx + w - 2, my - up + 0.5); g.quadraticCurveTo(cx, my + 9 + down - up * 0.3, cx - w + 2, my - up + 0.5); g.fill();
      g.strokeStyle = linha; g.lineWidth = 2; g.beginPath(); g.moveTo(cx - w, my - up); g.quadraticCurveTo(cx, my + 1.2 - up * 0.3, cx + w, my - up); g.stroke();
    };
    const aberta = (w, h, up) => {
      const forma = () => { g.beginPath(); g.moveTo(cx - w, my - up); g.quadraticCurveTo(cx, my - 4 - up * 0.2, cx + w, my - up); g.quadraticCurveTo(cx + w * 0.7, my + h, cx, my + h); g.quadraticCurveTo(cx - w * 0.7, my + h, cx - w, my - up); g.closePath(); };
      forma(); g.fillStyle = int; g.fill();
      g.save(); forma(); g.clip(); g.fillStyle = "#FAF6F0"; g.fillRect(cx - w, my - 8, w * 2, 6.5 + Math.min(h, 14) * 0.12);
      g.fillStyle = "#D2626A"; g.beginPath(); g.ellipse(cx, my + h * 0.95, w * 0.5, Math.max(3, h * 0.4), 0, 0, TAU); g.fill(); g.restore();
      g.strokeStyle = labS; g.lineWidth = 3.4; forma(); g.stroke();
    };
    switch (p.boca) {
      case "sorriso": {
        aberta(25, 13, 5);
        g.strokeStyle = escura ? "rgba(10,4,2,.28)" : "rgba(140,70,50,.3)"; g.lineWidth = 1.8; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * 22, 141); g.quadraticCurveTo(cx + s * 33, 152, cx + s * 30, 164); g.stroke(); }
        break;
      }
      case "leve": lab(20, 2.8, 0); break;
      case "reta": lab(18, 0, 0); break;
      case "triste": lab(18, -3.6, 1); break;
      case "foco": { lab(16, 0.5, -1); g.strokeStyle = linha; g.lineWidth = 1.6; g.beginPath(); g.moveTo(cx + 16, my - 0.5); g.lineTo(cx + 19, my - 2.5); g.stroke(); break; }
      case "o": { const h = 5 + 7 * p.abre; g.fillStyle = int; g.beginPath(); g.ellipse(cx, my + 3, 7.5, h, 0, 0, TAU); g.fill(); g.lineWidth = 3.4; g.strokeStyle = labS; g.stroke(); break; }
      default: aberta(22, 6 + 22 * p.abre, 2);
    }
    if (lagr >= 0) { const k = lagr / 24; g.fillStyle = `rgba(120,180,250,${0.9 * (1 - k)})`; const x = cx - dx - 12, y = ey + 12 + k * 60; g.beginPath(); g.moveTo(x, y - 7); g.quadraticCurveTo(x + 6, y + 3, x, y + 4.5); g.quadraticCurveTo(x - 6, y + 3, x, y - 7); g.fill(); }
    g.restore();
    t.needsUpdate = true;
  }
}
