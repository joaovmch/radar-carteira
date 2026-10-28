/* ---------- humores e luz ---------- */
const LUZ = {
  triste: { hemi: 0.55, key: 0.85, keyCor: "#AFC0E6", amb: "#7F8FB3", lamp: false, pend: false, raio: 0.1, tv: "#EF4444", mon: "#EF4444", exp: 0.9 },
  preocupado: { hemi: 0.75, key: 1.35, keyCor: "#FFE3C7", amb: "#B9A58F", lamp: true, pend: false, raio: 0.16, tv: "#EF4444", mon: "#F97316", exp: 0.97 },
  tranquilo: { hemi: 0.85, key: 1.7, keyCor: "#FFF4E3", amb: "#C8C6E8", lamp: true, pend: false, raio: 0.28, tv: "#818CF8", mon: "#60A5FA", exp: 1.0 },
  feliz: { hemi: 0.95, key: 2.1, keyCor: "#FFF1D6", amb: "#E8DCC0", lamp: true, pend: true, raio: 0.4, tv: "#22C55E", mon: "#22C55E", exp: 1.04 },
  euforico: { hemi: 0.8, key: 1.6, keyCor: "#FFE0F2", amb: "#E9C9E6", lamp: true, pend: true, raio: 0.36, tv: "#FACC15", mon: "#FACC15", exp: 1.05 },
};

/* ---------- boneco ---------- */
// Aparência configurável pelo perfil: uma letra por opção e um caractere de valor (0-9, depois a-z), ex.: "p1c0k1b0l0o0a2w2r0e0s0"
// p pele, c cor do cabelo, k corte, b barba, l calça, o óculos, a altura, w corpo, r roupa, e parte de baixo, s cor do calçado,
// u cor da roupa (0 = cor do perfil), f tipo de calçado, h acessório de cabeça, j extra (relógio, colar…), i cor dos olhos
const AP = {
  p: ["#F6D3B3", "#F2C3A0", "#D9A27A", "#B07850", "#7A4E33", "#4F3123", "#FFE3CC", "#3A2218"],
  c: ["#2B1B12", "#3B261B", "#6B4226", "#A86B3C", "#D9B26A", "#EFDDB0", "#8E8E8E", "#B33A2A", "#2F4FC0", "#D9568E", "#121212", "#E8E8E8", "#C4552B", "#7C4BC7"],
  l: ["#2F3B52", "#1F2937", "#5B4636", "#3F5F45", "#D6CDBB", "#6F86B5", "#111318", "#A0643A", "#7F1D1D", "#9CA3AF"],
  s: ["#1B2230", "#F4F6F8", "#C02626", "#7C4A21", "#2563EB", "#16A34A", "#F59E0B", "#7C3AED", "#EC4899", "#0EA5E9"],
  u: [null, "#F8FAFC", "#111827", "#DC2626", "#EA580C", "#FACC15", "#16A34A", "#0D9488", "#2563EB", "#7C3AED", "#DB2777", "#92400E", "#6B7280", "#0F766E"],
  i: ["#3A2214", "#140C08", "#2F6FB5", "#3E7A3A", "#8A6A2F", "#5E6E7A"],
};
const AP_MAX = { p: 7, c: 13, k: 16, b: 5, l: 9, o: 2, a: 4, w: 4, r: 17, e: 4, s: 9, u: 13, f: 4, h: 5, j: 5, i: 5 };
const AP_PAD = { p: 1, c: 1, k: 0, b: 0, l: 0, o: 0, a: 2, w: 2, r: 0, e: 0, s: 0, u: 0, f: 0, h: 0, j: 0, i: 0 };
const AP_CHAVES = "pckbloawresufhji";
const lerAp = (v) => { const r = { ...AP_PAD }; String(v || "").replace(/([pckbloawresufhji])([0-9a-z])/g, (_, k, d) => { r[k] = Math.min(parseInt(d, 36), AP_MAX[k]); }); return r; };
// roupas: tecido (trama), mapa de estampa, manga (C curta, L comprida, R regata), gola, barra solta ou para dentro, detalhes
const COR_TERNO = "#272C38", COR_JEANS = "#3B5B8C";
const ROUPAS = [
  { m: "camisa", manga: "C", gola: "polo", estampa: 1 },
  { m: "camisa", manga: "C", gola: "redonda", estampa: 1 },
  { m: "camisa", tec: "malha", manga: "L", gola: "capuz", estampa: 1, punhoR: 1, barraR: 1, bolso: "canguru" },
  { m: "branco", manga: "L", gola: "social", enf: 1, gravata: 1, botoes: 1 },
  { m: "camisa", manga: "L", gola: "jaqueta", folga: 0.006, aberta: 1, punhoR: 1 },
  { m: "camisa", manga: "R", gola: "regata", estampa: 1 },
  { m: "terno", tec: "la", manga: "L", gola: "terno", folga: 0.008, flare: 0.006, ini: -0.15, punho: "branco", calca: COR_TERNO },
  { m: "camisa", tec: "la", manga: "L", gola: "blazer", folga: 0.007, ini: -0.15, punho: "branco" },
  { m: "xadrez", manga: "L", gola: "camisa", botoes: 1 },
  { m: "havai", manga: "C", gola: "aberta", botoes: 1 },
  { m: "camisa", tec: "malha", manga: "L", gola: "alta", ziper: 1, listras: 1, punhoR: 1, barraR: 1 },
  { m: "camisa", manga: "C", gola: "camisa", botoes: 1 },
  { m: "camisa", tec: "trico", manga: "L", mangaM: "branco", gola: "colete", folga: 0.004, barraR: 1 },
  { m: "camisa", tec: "trico", manga: "L", gola: "redonda", punhoR: 1, barraR: 1 },
  { m: "listras", manga: "C", gola: "redonda" },
  { m: "jeans", tec: "jeans", manga: "L", gola: "camisa", botoes: 1, bolso: "peito", folga: 0.005, punhoR: 1 },
  { m: "time", manga: "C", gola: "v", numero: 1 },
  { m: "camisa", manga: "C", gola: "redonda", vestido: 1, enf: 1 },
];
const ALTURA = [0.9, 0.95, 1, 1.05, 1.1], CORPO = [0.84, 0.92, 1, 1.12, 1.26].map((x) => x * 1.12);   // corpo mais cheio, proporção de boneco de animação
const BARRIGA = [0, 0, 0.004, 0.022, 0.05];
const POSE0 = { alt: 0.89, dy: 0, hz: 0, lean: 0, side: 0, twist: 0, nod: 0, turn: 0, roll: 0, aL: [0, 0.12, 0.2], aR: [0, 0.12, 0.2], lL: [0, 0], lR: [0, 0], olhar: [0, 0], boch: 0, abre: 0.6, lagrima: 0, nuvem: 0, balao: 0, yawAdd: 0, sent: 0, kL: 0, kR: 0, ikL: null, ikR: null, mL: 0, mR: 0, taco: -1, recuo: 0, porta: 0, fxk: 0, gole: 0, pL: 0, pR: 0, olhos: "A", boca: "leve", sob: "", item: "", balaoT: "" };
const NUM = ["alt", "dy", "hz", "lean", "side", "twist", "nod", "turn", "roll", "boch", "abre", "lagrima", "nuvem", "balao", "yawAdd", "sent", "kL", "kR", "mL", "mR", "taco", "recuo", "porta", "fxk", "gole", "pL", "pR"];
const ARR = ["aL", "aR", "lL", "lR", "olhar"];
const DISC = ["olhos", "boca", "sob", "item", "balaoT", "bolas", "solta", "fx", "gestoL", "gestoR"];
// Cabeça modelada numa esfera de raio R e achatada pela escala do grupo (cabeça grande: traço de desenho animado)
const CAB_ESC = [0.47 * 1.4, 0.565 * 1.4, 0.52 * 1.4], ESTICA = CAB_ESC[1] / CAB_ESC[0] * 0.98;
const BR_A = 0.29, BR_B = 0.325, ESC_MAO = 1.18;   // braço e antebraço (até o ponto de pegada)

// gira uma geometria e a coloca no lugar antes de juntar
function assado(geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = null) {
  const m = new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), s ? V(...s) : V(1, 1, 1));
  geo.applyMatrix4(m); return geo;
}

// formato da cabeça: rosto cheio, queixo levemente à frente, nuca arredondada
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
// expressões com volume: bochechas que sobem no sorriso, queixo que desce com a boca aberta e lábios em bico
const BOCHECHA = [dirCab(1.76, -0.6), dirCab(1.76, 0.6)], BOCA_D = dirCab(1.94, 0);
function morfesRosto(geo, R) {
  const p = geo.attributes.position, n = p.count, d = new THREE.Vector3();
  const alvo = [new Float32Array(n * 3), new Float32Array(n * 3), new Float32Array(n * 3)];
  for (let i = 0; i < n; i++) {
    d.fromBufferAttribute(p, i).normalize();
    let wb = 0; for (const c of BOCHECHA) { const a = Math.acos(cl(d.dot(c), -1, 1)); wb += Math.exp(-((a / 0.3) ** 2)); }
    alvo[0].set([d.x * 0.017 * wb, d.y * 0.017 * wb + 0.008 * wb, d.z * 0.017 * wb], i * 3);
    const wq = suave((-d.y - 0.42) / 0.3) * suave((d.z - 0.15) / 0.5);
    alvo[1].set([0, -0.03 * wq, 0.006 * wq], i * 3);
    const ab = Math.acos(cl(d.dot(BOCA_D), -1, 1)), wl = Math.exp(-((ab / 0.17) ** 2));
    alvo[2].set([d.x * 0.013 * wl, d.y * 0.013 * wl, d.z * 0.013 * wl], i * 3);
  }
  geo.morphTargetsRelative = true; geo.morphAttributes.position = []; geo.morphAttributes.normal = [];
  const n0 = geo.attributes.normal.array.slice();
  for (const a of alvo) {
    geo.morphAttributes.position.push(new THREE.Float32BufferAttribute(a, 3));
    const tmp = geo.clone(); tmp.morphAttributes = {}; const tp = tmp.attributes.position;
    for (let i = 0; i < n; i++) tp.setXYZ(i, tp.getX(i) + a[i * 3], tp.getY(i) + a[i * 3 + 1], tp.getZ(i) + a[i * 3 + 2]);
    tmp.computeVertexNormals(); const tn = tmp.attributes.normal.array; const dn = new Float32Array(n * 3);
    for (let k = 0; k < n * 3; k++) dn[k] = tn[k] - n0[k];
    geo.morphAttributes.normal.push(new THREE.Float32BufferAttribute(dn, 3)); tmp.dispose();
  }
  return geo;
}

class Boneco {
  constructor(cor, icone, aparencia, acessorio) {
    const ap = this.ap = lerAp(aparencia);
    this.molas = {};   // cabelo que balança
    this.cor = cor || "#2457F5";
    // tecidos: tronco e mangas têm materiais próprios (cada peça tem o seu mapa de dobras)
    const fis = (c, r = 0.82, sh = 0.2) => new THREE.MeshPhysicalMaterial({ color: c, roughness: r, sheen: sh, sheenRoughness: 0.75, sheenColor: new THREE.Color("#E9EEFF"), normalScale: new THREE.Vector2(0.9, 0.9) });
    this.mtTronco = fis(this.cor); this.mtManga = fis(this.cor);
    this.mtDet = fis(this.cor, 0.8, 0.15);   // golas, punhos e barras canelados
    this.gola = this.mtDet;
    this.branco = new THREE.MeshPhysicalMaterial({ color: "#F4F6FA", roughness: 0.66, sheen: 0.15, sheenColor: new THREE.Color("#FFFFFF"), normalMap: nmTronco("liso"), normalScale: new THREE.Vector2(0.7, 0.7) });
    this.mtGravata = new THREE.MeshStandardMaterial({ color: this.cor, roughness: 0.42 });
    this.mtLapela = new THREE.MeshStandardMaterial({ color: "#1D212B", roughness: 0.45 });
    this.texX = tela(256, 256); this.texH = tela(256, 256); this.texL = tela(128, 128); this.texT = tela(512, 512); this.texLM = tela(128, 128); this.texLP = tela(128, 128);
    for (const T of [this.texX, this.texH, this.texL]) { T.t.wrapS = T.t.wrapT = THREE.RepeatWrapping; T.t.repeat.set(4, 2); }
    for (const T of [this.texLM, this.texLP, this.texT]) { T.t.wrapS = T.t.wrapT = THREE.RepeatWrapping; T.t.channel = 1; }
    // pele macia (brilho aveludado nas bordas, como nas animações 3D)
    const pele = this.pele = new THREE.MeshPhysicalMaterial({ color: AP.p[ap.p], roughness: 0.5, emissive: "#4A1D0C", emissiveIntensity: 0.15, sheen: 0.18, sheenRoughness: 0.55, sheenColor: new THREE.Color("#FFC9B0") });
    const peleSom = this.peleSom = new THREE.MeshStandardMaterial({ color: AP.p[ap.p], roughness: 0.55, emissive: "#4A1D0C", emissiveIntensity: 0.1 });
    this.cab = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.6, vertexColors: true });
    this.cabRaspado = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.95, vertexColors: true });
    this.barbaMat = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.9, vertexColors: true });
    this.mtCalca = fis(AP.l[ap.l], 0.84, 0.18); this.mtCalca.normalMap = nmPerna("liso");
    this.mtSap = new THREE.MeshStandardMaterial({ color: AP.s[ap.s], roughness: 0.48 });
    this.mtSola = new THREE.MeshStandardMaterial({ color: "#F4F6F8", roughness: 0.6 });
    this.mtSapDet = new THREE.MeshStandardMaterial({ color: "#F8FAFC", roughness: 0.55 });
    this.mtCadarco = new THREE.MeshStandardMaterial({ color: "#F1F5F9", roughness: 0.7 });
    this.mtFaixa = new THREE.MeshStandardMaterial({ color: "#CBD5E1", roughness: 0.5 });
    this.meia = M("#F8FAFC", { r: 0.9 });
    const cinto = M("#2A1D16", { r: 0.45 }), fivela = M("#D9B44A", { r: 0.28, m: 0.7 });
    const root = this.root = new THREE.Group();
    const hips = this.hips = new THREE.Group(); root.add(hips);
    const spine = this.spine = new THREE.Group(); spine.position.y = 0.04; hips.add(spine);
    /* tronco: uma malha só (sem bola no ombro nem emenda na cintura), presa a quatro ossos:
       coluna, quadril e as duas metades da barra, que balançam e sobem quando ele senta */
    const bS = this.bS = new THREE.Bone(); spine.add(bS);
    const bH = this.bH = new THREE.Bone(); hips.add(bH);
    const bF = this.bF = new THREE.Bone(); hips.add(bF);
    const bB = this.bB = new THREE.Bone(); hips.add(bB);
    this.troncoM = new THREE.SkinnedMesh(new THREE.BufferGeometry(), this.mtTronco); this.troncoM.frustumCulled = false; this.troncoM.castShadow = this.troncoM.receiveShadow = true; spine.add(this.troncoM);
    this.detRoupa = new THREE.Group(); spine.add(this.detRoupa);
    // calça: quadril arredondado (fica por baixo da camisa), cinto só quando a camisa vai por dentro
    this.pelveM = mesh(new THREE.BufferGeometry(), this.mtCalca, hips, 0, 0, 0);
    this.cintoM = mesh(new THREE.BufferGeometry(), cinto, hips, 0, 0, 0);
    this.fivela = bloco(hips, fivela, [-0.02, -0.013, -0.004], [0.02, 0.013, 0.004], 0.004);
    // ícone do perfil estampado no peito
    this.estampa = tela(128, 128);
    this.estampaPlano = mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ map: this.estampa.t, transparent: true, alphaTest: 0.1, toneMapped: false }), spine, -0.072, 0.36, 0.13, { cast: false, ry: -0.12 });
    this.temIcone = false;
    /* pescoço e cabeça */
    const neck = this.neck = new THREE.Group(); neck.position.y = 0.52; spine.add(neck);
    cil(neck, pele, 0.052, 0.058, 0.12, 0, 0.03, 0.004, { seg: 24 });
    const head = this.head = new THREE.Group(); head.position.set(0, 0.045, 0.014); head.scale.set(...CAB_ESC); neck.add(head);
    const hc = 0.2, Rc = 0.24; this.hc = hc; this.RC = Rc;
    this.cabM = mesh(morfesRosto(formaCabeca(new THREE.SphereGeometry(Rc, 72, 54), Rc), Rc), pele, head, 0, hc, 0);
    // orelhas grandes e macias, com a concha por dentro
    for (const s of [-1, 1]) {
      esf(head, pele, 0.074, s * (Rc - 0.006), hc - 0.014, -0.014, { s: [0.46, 1.0, 0.78], seg: 24, seg2: 16 });
      esf(head, peleSom, 0.042, s * (Rc + 0.018), hc - 0.014, -0.004, { s: [0.32, 0.78, 0.52], seg: 16, seg2: 12 });
      mesh(new THREE.TorusGeometry(0.046, 0.011, 10, 24, PI * 1.3), pele, head, s * (Rc + 0.02), hc - 0.012, -0.008, { ry: s * PI / 2, rz: -PI * 0.15, s: [1, 1.25, 1] });
    }
    // nariz: um botão redondo, pequeno, como nos bonecos 3D de animação
    esf(head, pele, 0.031, 0, hc - 0.042, Rc - 0.004, { s: [1.18, 0.9, 0.95], seg: 24, seg2: 16 });
    this.montarOlhos(head, hc, Rc);
    // boca, bochechas coradas e lágrima pintadas num pedaço de esfera que acompanha os volumes do rosto
    this.rosto = tela(512, 384); this.rosto.g.scale(2, 2);
    const fg = morfesRosto(formaCabeca(new THREE.SphereGeometry(Rc + 0.003, 56, 34, PI / 2 - 0.9, 1.8, 0.85, 1.3), Rc + 0.003), Rc + 0.003);
    const fm = new THREE.MeshStandardMaterial({ map: this.rosto.t, transparent: true, alphaTest: 0.04, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
    this.rostoM = mesh(fg, fm, head, 0, hc, 0, { cast: false });
    this.rostoKey = "";
    this.cortes = []; this.barbas = [];
    this.montarOculos(head, hc, Rc);
    this.montarChapeus(head, hc, Rc);
    /* braços: pele e mangas são tubos contínuos presos a dois ossos (ombro e cotovelo) */
    this.dedos = { L: [], R: [] }; this.tubos = [];
    const tubo = (par, mat, perfil, juntaY, ossos, o = {}) => { const m = new THREE.SkinnedMesh(new THREE.BufferGeometry(), mat); m.frustumCulled = false; m.castShadow = true; m.receiveShadow = true; par.add(m); this.tubos.push({ m, perfil, juntaY, ossos, kz: o.kz ?? 1, k: o.k ?? 1, aberto: !!o.aberto, banda: o.banda ?? 0.055, espelho: !!o.espelho, vTopo: o.vTopo ?? 0.1, vLen: o.vLen ?? 0.7 }); return m; };
    const braco = (lado, nome) => {
      const sh = new THREE.Group(); sh.position.set(0.19 * lado, 0.437, 0); spine.add(sh);
      const el = new THREE.Group(); el.position.y = -BR_A; sh.add(el);
      const o0 = new THREE.Bone(), o1 = new THREE.Bone(); sh.add(o0); el.add(o1);
      const uRot = lado < 0;   // braço esquerdo espelhado: lado de fora sempre em u = 0,25 (listras do agasalho) e a dobra do cotovelo na frente
      const peleB = tubo(sh, pele, [[0.03, 0.0], [0.022, 0.036], [0.0, 0.053], [-0.1, 0.051], [-0.2, 0.047], [-0.29, 0.043], [-0.35, 0.046], [-0.47, 0.038], [-0.54, 0.033], [-0.566, 0.0]], -BR_A, [o0, o1], { espelho: uRot });
      const mangaC = tubo(sh, this.mtManga, [[0.036, 0.0], [0.03, 0.04], [0.012, 0.06], [-0.01, 0.065], [-0.06, 0.064], [-0.155, 0.06], [-0.178, 0.063], [-0.19, 0.062]], -BR_A, [o0, o1], { aberto: true, espelho: uRot });
      const mangaL = tubo(sh, this.mtManga, [[0.036, 0.0], [0.03, 0.04], [0.012, 0.06], [-0.01, 0.065], [-0.1, 0.062], [-0.22, 0.057], [-0.29, 0.055], [-0.36, 0.056], [-0.46, 0.051], [-0.505, 0.052], [-0.525, 0.053], [-0.538, 0.052]], -BR_A, [o0, o1], { aberto: true, espelho: uRot });
      const ombroPele = esf(sh, pele, 0.052, 0, -0.004, 0, { seg: 22, seg2: 16 });
      const punho = cil(el, this.mtDet, 0.051, 0.05, 0.032, 0, -0.233, 0, { seg: 26 });
      const hand = new THREE.Group(); hand.position.y = -0.27; hand.scale.setScalar(ESC_MAO); el.add(hand);
      this.dedos[nome] = montarMao(hand, lado, pele, peleSom);
      return { sh, el, hand, lado, pele: peleB, ombroPele, mangaC, mangaL, punho, qFK: new THREE.Quaternion(), qIK: new THREE.Quaternion() };
    };
    this.L = braco(-1, "L"); this.R = braco(1, "R");
    this.curL = { c: [0.5, 0.42, 0.34, 0.26, 0.25], s: 0.05 }; this.curR = { c: [0.5, 0.42, 0.34, 0.26, 0.25], s: 0.05 };
    /* pernas: perna e calça contínuas do quadril ao tornozelo (ossos no quadril e no joelho) */
    const perna = (lado) => {
      const hp = new THREE.Group(); hp.position.set(0.094 * lado, -0.01, 0); hips.add(hp);
      const kn = new THREE.Group(); kn.position.y = -0.42; hp.add(kn);
      const ft = new THREE.Group(); ft.position.y = -0.4; kn.add(ft);
      const o0 = new THREE.Bone(), o1 = new THREE.Bone(); hp.add(o0); kn.add(o1);
      const op = { aberto: true, kz: 1.04, espelho: lado < 0, vTopo: 0.06, vLen: 0.84 };
      const peleP = tubo(hp, pele, [[-0.08, 0.0], [-0.1, 0.07], [-0.2, 0.067], [-0.3, 0.06], [-0.42, 0.051], [-0.52, 0.053], [-0.62, 0.047], [-0.76, 0.037], [-0.8, 0.0]], -0.42, [o0, o1], { espelho: lado < 0, vTopo: 0.06, vLen: 0.84 });
      const calcaL = tubo(hp, this.mtCalca, [[0.03, 0.0], [0.018, 0.054], [-0.01, 0.078], [-0.06, 0.084], [-0.2, 0.081], [-0.34, 0.069], [-0.42, 0.065], [-0.5, 0.067], [-0.62, 0.061], [-0.72, 0.057], [-0.755, 0.059], [-0.778, 0.059]], -0.42, [o0, o1], op);
      const jogger = tubo(hp, this.mtCalca, [[0.03, 0.0], [0.018, 0.054], [-0.01, 0.078], [-0.06, 0.085], [-0.2, 0.083], [-0.34, 0.071], [-0.42, 0.067], [-0.5, 0.068], [-0.64, 0.059], [-0.7, 0.052], [-0.722, 0.044], [-0.738, 0.046], [-0.762, 0.046], [-0.772, 0.045]], -0.42, [o0, o1], op);
      const bermudaM = tubo(hp, this.mtCalca, [[0.03, 0.0], [0.018, 0.054], [-0.01, 0.079], [-0.06, 0.086], [-0.3, 0.079], [-0.43, 0.073], [-0.448, 0.075], [-0.46, 0.074]], -0.42, [o0, o1], op);
      const shortsM = tubo(hp, this.mtCalca, [[0.03, 0.0], [0.018, 0.054], [-0.01, 0.08], [-0.06, 0.088], [-0.165, 0.09], [-0.18, 0.091]], -0.42, [o0, o1], op);
      const meiaM = cil(ft, this.meia, 0.04, 0.043, 0.07, 0, 0.012, 0, { seg: 18 });
      const pe = new THREE.Group(); ft.add(pe);
      return { hp, kn, ft, o0, o1, pe, peleP, calcaL, jogger, bermudaM, shortsM, meiaM };
    };
    this.PL = perna(-1); this.PR = perna(1);
    // sombra de contato
    const st = tela(64, 64); const gr = st.g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(0,0,0,.45)"); gr.addColorStop(1, "rgba(0,0,0,0)"); st.g.fillStyle = gr; st.g.fillRect(0, 0, 64, 64);
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), new THREE.MeshBasicMaterial({ map: st.t, transparent: true, depthWrite: false }));
    this.blob.rotation.x = -PI / 2; this.blob.position.y = 0.004;
    this.mL = new THREE.Vector3(); this.mR = new THREE.Vector3();
    this.gp = new THREE.Vector3(0, -0.06, 0);
    this.pDy = 0; this.pNod = 0; this.pT = null; this.pYaw = null;
    this.esc = 1; this.barra = { x: 0, vx: 0, z: 0, vz: 0, ant: null, vel: new THREE.Vector3() };
    // ossos: liga na pose de descanso (braços e pernas retos)
    root.updateMatrixWorld(true);
    for (const t of this.tubos) { t.m.geometry = this.geoTubo(t, 1); t.esq = new THREE.Skeleton(t.ossos); t.m.bind(t.esq, t.m.matrixWorld); }
    this.esqTronco = new THREE.Skeleton([bS, bH, bF, bB]);
    this.troncoM.bind(this.esqTronco, this.troncoM.matrixWorld); this.bindTronco = this.troncoM.matrixWorld.clone();
    this.esqSaia = new THREE.Skeleton([bH, this.PL.o0, this.PR.o0]); this.bindQuadril = hips.matrixWorld.clone();
    sombra(root, true, false);
    this.setIcone(icone);
    this.setAparencia(aparencia, acessorio);
  }
  /* --- corpo e roupa: o tronco, a pelve e os detalhes são refeitos quando muda a roupa ou o corpo --- */
  montarCorpo() {
    const ap = this.ap, cfg = ROUPAS[ap.r] || ROUPAS[0], g = CORPO[ap.w], bar = BARRIGA[ap.w];
    const saia = ap.e === 2 || !!cfg.vestido;
    const chave = [ap.r, ap.w, ap.e, ap.j].join(",");
    if (chave === this.corpoChave) return; this.corpoChave = chave;
    const enf = !!cfg.enf || saia;
    const corpo = this.corpo = corpoTronco({ g, bar, folga: cfg.folga || 0, flare: cfg.flare || 0, ini: enf ? 0.03 : (cfg.ini ?? -0.135) });
    const velho = this.troncoM.geometry; this.troncoM.geometry = geoTronco(corpo); velho.dispose();
    // regata: cava funda (o ombro fica de fora) com material de pele nos triângulos da cava
    this.troncoM.material = this.mtTronco;
    if (cfg.manga === "R") {
      const geo = this.troncoM.geometry, p = geo.attributes.position, ix = geo.index.array; const tec = [], pel = [];
      const cava = (x, y, z) => { if (y < 0.33) return false; const [a] = secTronco(y); const k = Math.abs(x) / (a * g); const alca = 0.6 - 0.05 * suave((y - 0.47) / 0.06); return k > alca + 0.18 * (1 - suave((y - 0.33) / 0.12)) || (y > 0.49 && Math.abs(x) < 0.07 * g && z > 0); };
      for (let k = 0; k < ix.length; k += 3) { let n = 0; for (let q = 0; q < 3; q++) { const v = ix[k + q]; if (cava(p.getX(v), p.getY(v), p.getZ(v))) n++; } (n >= 2 ? pel : tec).push(ix[k], ix[k + 1], ix[k + 2]); }
      geo.setIndex(tec.concat(pel)); geo.clearGroups(); geo.addGroup(0, tec.length, 0); geo.addGroup(tec.length, pel.length, 1);
      this.troncoM.material = [this.mtTronco, this.pele];
    }
    // pelve (calça ou saia por baixo), largura do corpo
    const pel = new THREE.LatheGeometry([[0, -0.1], [0.06, -0.094], [0.105, -0.074], [0.136, -0.035], [0.145, 0.01], [0.145, 0.05], [0.14, 0.09], [0, 0.094]].map(([r, y]) => new THREE.Vector2(r, y)), 40);
    pel.scale(1.0 * g, 1, 0.7 * g); this.pelveM.geometry.dispose(); this.pelveM.geometry = pel;
    this.cintoM.geometry.dispose(); this.cintoM.geometry = new THREE.CylinderGeometry(0.168, 0.168, 0.026, 40, 1, true).scale(1.0 * g, 1, 0.74 * g); this.cintoM.position.y = 0.068;
    this.cintoM.visible = this.fivela.visible = enf && !saia;
    this.fivela.position.set(0, 0.068, 0.168 * 0.74 * g + 0.004);
    this.pelveM.visible = !saia;
    // ombros e quadris acompanham a largura
    this.L.sh.position.x = -0.188 * g * 0.98; this.R.sh.position.x = 0.188 * g * 0.98;
    this.PL.hp.position.x = -0.09 * (1 + (g - 1) * 0.5); this.PR.hp.position.x = 0.09 * (1 + (g - 1) * 0.5);
    if (this.gTubos !== g) { this.gTubos = g; for (const t of this.tubos) { const old = t.m.geometry; t.m.geometry = this.geoTubo(t, g); if (old) old.dispose(); } }
    this.estampaPlano.position.set(-0.072 * g, 0.355, corpo.frente(-0.072 * g, 0.355, 0.006)); this.estampaPlano.rotation.y = -0.16;
    this.montarRoupa(cfg, corpo, g);
    this.montarSaia(saia, g, bar);
  }
  montarRoupa(cfg, corpo, g) {
    for (const c of [...this.detRoupa.children]) { this.detRoupa.remove(c); c.geometry.dispose(); }
    const lotes = new Map(); const add = (mat, geo) => { if (!lotes.has(mat)) lotes.set(mat, []); lotes.get(mat).push(geo); };
    const fr = (x, y, eps) => corpo.frente(x, y, eps);
    // placa colada no peito: xy(u, t) dá o ponto (u na largura, t na altura); fica acima do tecido por eps
    const placa = (mat, xy, eps, nx = 6, ny = 12) => {
      const pos = [], idx = [];
      for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const [x, y] = xy(i / nx, j / ny); pos.push(x, y, fr(x, y, eps + 0.002 + 0.05 * Math.max(0, y - 0.42))); }
      const [x0, y0] = xy(0, 0), [x1, y1] = xy(1, 0), [x2, y2] = xy(0, 1); const vira = (x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0;
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + nx + 1; if (vira) idx.push(a, b, a + 1, a + 1, b, b + 1); else idx.push(a, a + 1, b, a + 1, b + 1, b); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals(); add(mat, geo); return geo;
    };
    const faixa = (y0, y1, meia) => (u, t) => { const y = lerp(y0, y1, t); return [(u * 2 - 1) * meia(t), y]; };
    const botao = (mat, x, y, r = 0.0068) => { const b = new THREE.SphereGeometry(r, 10, 8); b.scale(1, 1, 0.5); b.translate(x, y, fr(x, y, 0.005)); add(mat, b); };
    const lapela = (mat, s, yb, yt, xb, xt, lb, lt, eps) => placa(mat, (u, t) => { const xi = lerp(xb, xt, t), w = lerp(lb, lt, t) * (t > 0.86 ? 1 - (t - 0.86) * 2.4 : 1); return [s * (xi + u * w), lerp(yb, yt, t)]; }, eps, 4, 14);
    // anel em volta do tronco (barra canelada, cós): segue a forma do corpo
    const anel = (mat, y0, y1, eps) => { const N = 64, pos = [], idx = []; for (const [k, y] of [[0, y0], [1, y0], [2, y1], [3, y1]]) for (let j = 0; j <= N; j++) { const t = -PI / 2 + (j / N) * TAU; const [x, z] = corpo.ponto(y, t); const e = k === 0 || k === 3 ? eps * 0.3 : eps; const r = Math.hypot(x, z) || 1; pos.push(x + x / r * e, y + (k === 1 ? 0.003 : k === 2 ? -0.003 : 0), z + z / r * e); } for (let i = 0; i < 3; i++) for (let j = 0; j < N; j++) { const a = i * (N + 1) + j, b = a + N + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); } const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals(); voltarParaFora(geo, V(0, 0, 1)); add(mat, geo); };
    // gola em volta do pescoço: anel achatado com a forma do decote
    const golaAnel = (mat, y, tubo, rx = 0.074, rz = 0.066, inclina = 0, arco = TAU, ini = 0) => { const t = new THREE.TorusGeometry(1, tubo, 10, 40, arco); t.rotateZ(ini); t.rotateX(PI / 2); t.scale(rx * g, 1, rz * g); t.rotateX(inclina); t.translate(0, y, 0.004); add(mat, t); };
    const aba = (mat, s, y, z, w = 0.08, rx = 0.62, rz = 0.55) => { const b = new RoundedBoxGeometry(w, 0.01, 0.07, 2, 0.004); b.rotateZ(-s * rz); b.rotateX(rx); b.translate(s * 0.043 * g, y, z * g); add(mat, b); };
    const metal = M("#9CA3AF", { r: 0.3, m: 0.8 }), btn = M("#E8EDF5", { r: 0.4 }), btnE = M("#1F2937", { r: 0.35 });
    const gl = cfg.gola, ini = corpo.ini;
    if (cfg.barraR) anel(this.mtDet, ini + 0.004, ini + 0.045, 0.006);
    if (gl === "polo") { for (const s of [-1, 1]) aba(this.mtDet, s, 0.523, 0.072); golaAnel(this.mtDet, 0.536, 0.22); placa(this.mtDet, faixa(0.43, 0.515, () => 0.012), 0.002, 2, 6); for (const y of [0.49, 0.455]) botao(btn, 0, y, 0.0072); }
    else if (gl === "redonda") golaAnel(this.mtDet, 0.538, 0.16, 0.076, 0.068, -0.12);
    else if (gl === "capuz") {
      const cz = new THREE.TorusGeometry(0.09, 0.036, 12, 30, PI * 1.25); cz.rotateZ(-PI * 0.125 + PI); cz.rotateX(PI / 2 - 0.25); cz.scale(g, 1, g); cz.translate(0, 0.53, -0.03); add(this.mtTronco, cz);
      const cb = new THREE.SphereGeometry(0.105, 22, 14); cb.scale(1.05 * g, 0.62, 0.55 * g); cb.translate(0, 0.5, -0.1 * g); add(this.mtTronco, cb);
      for (const s of [-1, 1]) { const c = new THREE.CapsuleGeometry(0.0055, 0.09, 4, 8); c.rotateX(0.1); c.translate(s * 0.032, 0.45, fr(s * 0.032, 0.45, 0.008)); add(M("#F1F5F9", { r: 0.6 }), c); }
    }
    else if (gl === "social" || gl === "camisa") {
      const mt = gl === "social" ? this.branco : this.mtDet;
      for (const s of [-1, 1]) { const b = new THREE.BufferGeometry(); const pts = [[0, 0], [0.058, 0.004], [0.034, -0.05]]; const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(0.058, 0.006); sh.quadraticCurveTo(0.05, -0.03, 0.03, -0.052); sh.closePath(); const ex = new THREE.ExtrudeGeometry(sh, { depth: 0.004, bevelEnabled: true, bevelSize: 0.003, bevelThickness: 0.002, bevelSegments: 2 }); if (s < 0) ex.scale(-1, 1, 1); ex.rotateY(s * 0.55); ex.rotateX(-0.42); ex.translate(s * 0.012 * g, 0.548, fr(s * 0.04, 0.53, 0.012)); add(mt, ex); void b; void pts; }
      golaAnel(mt, 0.548, 0.2, 0.072, 0.064);
      if (cfg.botoes) { placa(mt, faixa(-0.12, 0.5, () => 0.012), 0.002, 2, 18); for (const y of [0.47, 0.38, 0.29, 0.2, 0.11, 0.02].filter((y) => y > ini + 0.04)) botao(gl === "social" ? M("#CBD5E1", { r: 0.4 }) : btn, 0.0, y, 0.0062); }
      if (cfg.gravata) { placa(this.mtGravata, faixa(0.2, 0.505, (t) => t < 0.1 ? lerp(0.002, 0.03, t / 0.1) : lerp(0.03, 0.014, (t - 0.1) / 0.9)), 0.008); const nk = new THREE.SphereGeometry(0.022, 14, 10); nk.scale(1, 0.95, 0.6); nk.translate(0, 0.512, fr(0, 0.512, 0.012)); add(this.mtGravata, nk); }
      if (cfg.bolso === "peito") for (const s of [-1, 1]) { placa(this.mtDet, (u, t) => [s * lerp(0.055, 0.12, u), lerp(0.28, 0.36, t)], 0.004, 4, 4); placa(this.mtDet, (u, t) => [s * lerp(0.052, 0.123, u), lerp(0.355, 0.375, t)], 0.008, 4, 2); botao(btnE, s * 0.087, 0.365, 0.006); }
    }
    else if (gl === "jaqueta") {
      placa(this.branco, faixa(ini + 0.01, 0.52, (t) => lerp(0.062, 0.05, t)), 0.002);
      for (const s of [-1, 1]) placa(metal, (u, t) => [s * (0.064 + u * 0.008), lerp(ini + 0.02, 0.5, t)], 0.006, 1, 14);
      golaAnel(this.mtDet, 0.528, 0.34, 0.082, 0.072, -0.15, PI * 1.5, PI * 0.75);
    }
    else if (gl === "regata") {
      golaAnel(this.mtDet, 0.534, 0.12, 0.08, 0.07, -0.25);
    }
    else if (gl === "terno" || gl === "blazer") {
      const terno = gl === "terno";
      placa(this.branco, faixa(terno ? 0.27 : ini + 0.04, 0.54, (t) => lerp(terno ? 0.012 : 0.03, 0.082, t)), 0.003);
      if (terno) { placa(this.mtGravata, faixa(0.225, 0.495, (t) => t < 0.1 ? lerp(0.002, 0.026, t / 0.1) : lerp(0.026, 0.013, (t - 0.1) / 0.9)), 0.007); placa(this.mtGravata, faixa(0.49, 0.524, (t) => lerp(0.013, 0.019, t)), 0.0095, 4, 3); for (const s of [-1, 1]) aba(this.branco, s, 0.532, 0.07, 0.07, 0.75, 0.75); }
      else golaAnel(this.branco, 0.53, 0.14, 0.07, 0.062, -0.12);
      const lap = terno ? this.mtLapela : this.mtDet;
      for (const s of [-1, 1]) lapela(lap, s, terno ? 0.255 : 0.16, 0.535, 0.002, 0.072, 0.03, 0.052, 0.01);
      for (const y of terno ? [0.22, 0.14] : [0.13]) botao(btnE, terno ? 0 : 0.02, y, 0.0078);
      placa(lap, (u, t) => [-0.118 + u * 0.065, lerp(0.35, 0.356, t)], 0.006, 3, 1);
      if (terno) placa(this.mtGravata, (u, t) => [-0.11 + u * 0.05, lerp(0.353, 0.385, t) - (u > 0.5 ? 0 : 0.008 * t)], 0.0085, 4, 4);
      for (const s of [-1, 1]) placa(lap, (u, t) => [s * lerp(0.07, 0.135, u), lerp(0.06, 0.068, t)], 0.006, 3, 1);
    }
    else if (gl === "aberta") {
      placa(this.pele, faixa(0.42, 0.54, (t) => lerp(0.004, 0.052, t)), 0.003);
      for (const s of [-1, 1]) lapela(this.mtTronco, s, 0.39, 0.54, 0.004, 0.054, 0.03, 0.048, 0.007);
    }
    else if (gl === "alta") {
      const c = new THREE.CylinderGeometry(0.068, 0.074, 0.055, 32, 1, true); c.scale(g, 1, 0.92 * g); c.translate(0, 0.565, 0.006); add(this.mtDet, c);
      const c2 = new THREE.TorusGeometry(0.068, 0.006, 6, 32); c2.rotateX(PI / 2); c2.scale(g, 1, 0.92 * g); c2.translate(0, 0.592, 0.006); add(this.mtDet, c2);
    }
    else if (gl === "colete") {
      placa(this.branco, faixa(0.33, 0.54, (t) => lerp(0.004, 0.07, t)), 0.003);
      for (const s of [-1, 1]) { aba(this.branco, s, 0.53, 0.07, 0.075, 0.68, 0.62); lapela(this.mtDet, s, 0.315, 0.54, 0.0, 0.068, 0.014, 0.014, 0.006); }
      golaAnel(this.branco, 0.546, 0.18, 0.07, 0.062);
    }
    else if (gl === "v") {
      placa(this.pele, faixa(0.44, 0.54, (t) => lerp(0.004, 0.05, t)), 0.003);
      for (const s of [-1, 1]) lapela(this.mtDet, s, 0.43, 0.54, 0.0, 0.05, 0.016, 0.016, 0.006);
      golaAnel(this.mtDet, 0.54, 0.14, 0.072, 0.064, 0, PI * 1.3, PI * 0.85);
    }
    if (cfg.ziper) { placa(metal, faixa(ini + 0.01, 0.58, () => 0.006), 0.006, 1, 16); const pu = new RoundedBoxGeometry(0.014, 0.03, 0.006, 2, 0.002); pu.translate(0.0, 0.5, fr(0, 0.5, 0.012)); add(metal, pu); }
    if (cfg.bolso === "canguru") { placa(this.mtTronco, (u, t) => { const y = lerp(ini + 0.06, ini + 0.2, t); const w = lerp(0.12, 0.085, t); return [(u * 2 - 1) * w, y]; }, 0.006, 8, 8); }
    // extras do corpo: colar e mochila
    const j = this.ap.j;
    if (j === 2 || j === 4) { const c = new THREE.TorusGeometry(1, 0.06, 6, 40, PI); c.rotateZ(PI); c.rotateX(PI / 2 - 0.55); c.scale(0.082 * g, 1, 0.075 * g); c.translate(0, 0.53, 0.012); add(M("#E5C158", { r: 0.25, m: 0.9 }), c); const pg = new THREE.SphereGeometry(0.011, 10, 8); pg.translate(0, 0.47, fr(0, 0.47, 0.01)); add(M("#E5C158", { r: 0.25, m: 0.9 }), pg); }
    if (j === 5) { const mc = M("#EA580C", { r: 0.7 }); const mo = new RoundedBoxGeometry(0.24, 0.27, 0.11, 3, 0.04); mo.translate(0, 0.27, -0.12 * g - 0.055); add(mc, mo); const bo = new RoundedBoxGeometry(0.17, 0.1, 0.04, 3, 0.02); bo.translate(0, 0.2, -0.12 * g - 0.12); add(mc, bo); for (const s of [-1, 1]) { const a = new THREE.TorusGeometry(0.1, 0.012, 6, 20, PI * 1.1); a.rotateY(PI / 2); a.scale(1, 1.25, g); a.translate(s * 0.1 * g, 0.42, -0.005); add(M("#7C2D12", { r: 0.7 }), a); } }
    for (const [mat, gs] of lotes) {
      const geo = juntar(gs.map((x) => { if (x.attributes.uv) x.deleteAttribute("uv"); return x; })); geo.computeVertexNormals(); pesosComoTronco(geo);
      const m = new THREE.SkinnedMesh(geo, mat); m.frustumCulled = false; m.castShadow = true; m.receiveShadow = true; this.detRoupa.add(m); m.bind(this.esqTronco, this.bindTronco);
    }
  }
  // saia (e parte de baixo do vestido): presa ao quadril e às duas coxas
  montarSaia(on, g, bar) {
    if (this.saiaM) { this.hips.remove(this.saiaM); this.saiaM.geometry.dispose(); this.saiaM = null; }
    if (!on) return;
    const NU = 48, NV = 18, pos = [], idx = [], si = [], sw = [];
    for (let i = 0; i <= NV; i++) {
      const t = i / NV, y = lerp(0.11, -0.33, t); const a = (0.166 + 0.06 * t * t + 0.035 * t) * g, b = (0.124 + 0.04 * t + bar * 0.4 * (1 - t)) * g;
      for (let jx = 0; jx <= NU; jx++) {
        const ang = -PI / 2 + (jx / NU) * TAU; const x = a * Math.cos(ang), z = b * Math.sin(ang) + 0.004;
        pos.push(x * (1 + 0.012 * Math.sin(ang * 9) * t), y, z * (1 + 0.012 * Math.sin(ang * 9) * t));
        const wL = suave((0.06 - y) / 0.32), fL = suave(0.5 - x / (0.12 * g));
        si.push(0, 1, 2, 0); sw.push(1 - wL, wL * fL, wL * (1 - fL), 0);
      }
    }
    for (let i = 0; i < NV; i++) for (let jx = 0; jx < NU; jx++) { const a = i * (NU + 1) + jx, b = a + NU + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx);
    geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(si, 4)); geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(sw, 4)); geo.computeVertexNormals(); voltarParaFora(geo, V(0, 0, 1));
    const cfg = ROUPAS[this.ap.r] || ROUPAS[0];
    const m = this.saiaM = new THREE.SkinnedMesh(geo, cfg.vestido ? this.mtTronco : this.mtCalca); m.material.side = THREE.FrontSide; m.frustumCulled = false; m.castShadow = true; this.hips.add(m); m.bind(this.esqSaia, this.bindQuadril);
  }
  // calçado do tipo escolhido (montado na primeira vez que é usado)
  montarCalcados(tipo) {
    if (this.tipoPe === tipo) return; this.tipoPe = tipo;
    const mats = { cor: this.mtSap, sola: this.mtSola, det: this.mtSapDet, cadarco: this.mtCadarco, faixa: tipo === 2 || tipo === 3 ? null : this.mtFaixa };
    for (const P of [this.PL, this.PR]) { for (const c of [...P.pe.children]) { P.pe.remove(c); c.traverse((o) => o.geometry && o.geometry.dispose()); } const s = montarCalcado(tipo, mats); sombra(s, true, false); P.pe.add(s); }
  }
  /* --- cabelo esculpido: 0 topete, 1 curto, 2 raspado, 3 comprido, 4 cacheado, 5 black power, 6 coque, 7 moicano,
     8 rabo de cavalo, 9 careca, a lateral, b franja, c ondulado, d espetado, e undercut, f tranças, g chanel ---
     Cada corte tem o "topo" (some com chapéu, e no lugar entra uma casca rente) e o "resto" (mechas soltas, rabo, tranças). */
  montarCorte(k) {
    if (this.cortes[k]) return this.cortes[k];
    const R = this.RC, hc = this.hc, head = this.head;
    const g = new THREE.Group(); g.position.y = hc; head.add(g);
    // linha do cabelo: até onde ele desce em cada direção (testa, têmporas, costeletas, nuca)
    const lim = (ph) => { const f = Math.cos(ph); const b = f > 0 ? lerp(1.32, 0.98, Math.pow(f, 1.4)) : lerp(1.32, 1.95, Math.pow(-f, 0.9)); return b + 0.2 * Math.exp(-(((Math.abs(ph) - 1.22) / 0.1) ** 2)); };
    const masc = (dl = 0, borda = 0.08, extra) => (d) => { const [th, ph] = angDe(d); return suave((lim(ph) + dl + (extra ? extra(th, ph) : 0) - th) / borda); };
    const forma = (geo, r) => formaCabeca(geo, r);
    const topo = [], resto = [];
    const C = (o, mat = this.cab, onde = topo) => { const m = mesh(casca(R, { forma, ...o }), mat, g, 0, 0, 0); m.castShadow = true; onde.push(m); return m; };
    const L = (lista, onde = resto, par = g) => { if (!lista.length) return null; const m = mesh(juntar(lista), this.cab, par, 0, 0, 0); m.castShadow = true; onde.push(m); return m; };
    const P = (th, ph, h = 0) => dirCab(th, ph).multiplyScalar(R + h);
    const fora = (p) => p.clone().setY(0).normalize();
    // mechas compridas em volta (costas e laterais), caindo até "desce" abaixo do centro da cabeça
    const cortina = (desce, o = {}) => {
      const lista = []; const n = o.n || 16, a0 = o.a0 ?? 0.95, larg = o.larg ?? 0.062;
      for (let i = 0; i < n; i++) {
        const u = i / (n - 1), ph = (a0 + u * (TAU - 2 * a0)) * (i % 2 ? 1 : 1) + (ruido(i + 3) - 0.5) * 0.08;
        const phR = ph > PI ? ph - TAU : ph; const lado = Math.abs(Math.sin(phR));
        const dz = desce * (o.curtoFrente ? lerp(1, 0.75, Math.max(0, Math.cos(phR))) : 1) * (0.92 + 0.12 * ruido(i));
        const p0 = P(o.th0 ?? 1.02, phR, -0.004), p1 = P(1.62, phR, 0.04 + 0.02 * lado), out = fora(p1);
        const ond = o.onda || 0;
        const pts = [p0, p1, p1.clone().add(V(0, -dz * 0.35, 0)).addScaledVector(out, 0.012 + ond * Math.sin(i)), p1.clone().add(V(0, -dz * 0.7, 0)).addScaledVector(out, 0.02 - ond * 0.6), p1.clone().add(V(0, -dz, 0)).addScaledVector(out, (o.cacho ?? -0.012) + ond * 0.8 * Math.cos(i))];
        lista.push(mecha(pts, (t) => larg * (1 - 0.35 * t) * (o.volume || 1), { ach: 0.42, ref: (p) => fora(p), sulcos: 3, cor: 0.94 + 0.08 * ruido(i * 2) }));
      }
      return lista;
    };
    const sobChapeu = () => C({ h: () => 0.01, mascara: masc(), polo: dirCab(0.3, PI), sulcos: 30 }, this.cab, []);
    let sob = null, solto = null;
    switch (k) {
      case 0: { // topete: laterais curtas, topete alto penteado para trás
        C({ h: (d) => { const [th, ph] = angDe(d); const f = Math.max(0, Math.cos(ph)); return 0.016 + 0.012 * cl(1 - th / 1.3) + 0.085 * Math.exp(-(((th - 0.62) / 0.42) ** 2)) * Math.pow(f, 1.2); }, mascara: masc(0.02), polo: dirCab(1.2, 0), sulcos: 22, prof: 0.34 });
        break; }
      case 1: // curto: penteado para a frente a partir do redemoinho, franja leve
        C({ h: (d) => { const [th, ph] = angDe(d); return 0.02 + 0.02 * cl(1 - th / 1.25) + 0.008 * Math.max(0, Math.cos(ph)); }, mascara: masc(0.05, 0.07), polo: dirCab(0.35, PI), sulcos: 28, prof: 0.3, onda: (d, dist) => 0.4 * Math.sin(dist * 4) });
        break;
      case 2: // raspado
        C({ h: () => 0.0045, mascara: masc(0.02, 0.05) }, this.cabRaspado);
        break;
      case 3: { // comprido: repartido de lado, até os ombros, franja varrida
        C({ h: (d) => { const [th, ph] = angDe(d); return 0.026 + 0.012 * cl(1 - th) + 0.025 * Math.exp(-(((th - 0.75) / 0.35) ** 2)) * cl(0.5 - 0.5 * Math.sin(ph)); }, mascara: masc(0.06, 0.08, (th, ph) => Math.max(0, Math.cos(ph + 0.4)) ** 3 * 0.12), polo: dirCab(0.25, 0.6), sulcos: 30, prof: 0.28 });
        solto = L(cortina(0.4, { n: 18, larg: 0.066, a0: 1.25 })); break; }
      case 4: // cacheado: calombos de cachos
        C({ h: () => 0.03, mascara: masc(0.04), relevo: calombos(130, 0.15, 0.03, 1), relevoMax: 0.03 });
        break;
      case 5: { // black power: volume redondo e fofo
        const c0 = V(0, 0.07, -0.035), rr = V(0.37, 0.33, 0.35);
        const afro = (d) => { const a = (d.x / rr.x) ** 2 + (d.y / rr.y) ** 2 + (d.z / rr.z) ** 2, b = 2 * (d.x * -c0.x / rr.x ** 2 + d.y * -c0.y / rr.y ** 2 + d.z * -c0.z / rr.z ** 2), c = (c0.x / rr.x) ** 2 + (c0.y / rr.y) ** 2 + (c0.z / rr.z) ** 2 - 1; const t = (-b + Math.sqrt(Math.max(0, b * b - 4 * a * c))) / (2 * a); return Math.max(0.03, t - R); };
        C({ h: afro, mascara: masc(0.04, 0.06), relevo: calombos(220, 0.1, 0.022, 2), relevoMax: 0.022, an: 90 });
        break; }
      case 6: { // coque: puxado para trás, coque no alto
        C({ h: (d) => { const [th] = angDe(d); return 0.014 + 0.008 * cl(1 - th); }, mascara: masc(0.02), polo: dirCab(1.05, 0), sulcos: 34, prof: 0.25 });
        const bun = new THREE.SphereGeometry(0.105, 32, 24); const p = bun.attributes.position; const v = new THREE.Vector3();
        for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const n = v.clone().normalize(); const s = Math.pow(0.5 + 0.5 * Math.cos(Math.atan2(n.x, n.z) * 6 + n.y * 7), 5); v.copy(n.multiplyScalar(0.105 * (1 - 0.1 * s))); p.setXYZ(i, v.x, v.y, v.z); }
        bun.computeVertexNormals(); bun.translate(0, 0.27, -0.12); L([comCor(bun, 0.95)], topo);
        mesh(new THREE.TorusGeometry(0.068, 0.014, 8, 24), M("#111827", { r: 0.5 }), g, 0, 0.2, -0.1, { rx: PI / 2 + 0.6 });
        break; }
      case 7: { // moicano: laterais raspadas e crista do topo da testa até a nuca
        C({ h: () => 0.0045, mascara: masc(0.02, 0.05) }, this.cabRaspado);
        C({ h: (d) => { const [th] = angDe(d); return 0.006 + 0.1 * Math.exp(-((d.x / 0.14) ** 2)) * (0.6 + 0.4 * Math.sin(cl(th / 1.9) * PI)); }, mascara: (d) => masc(0.02)(d) * suave((0.22 - Math.abs(d.x)) / 0.05), polo: dirCab(1.0, 0), sulcos: 10, prof: 0.4, agudo: 3 });
        break; }
      case 8: { // rabo de cavalo: puxado para trás, rabo que balança
        C({ h: (d) => { const [th] = angDe(d); return 0.016 + 0.008 * cl(1 - th); }, mascara: masc(0.02), polo: dirCab(1.05, 0), sulcos: 34, prof: 0.25 });
        const no = P(1.32, PI, 0.03); const rabo = new THREE.Group(); rabo.position.copy(no); g.add(rabo);
        mesh(new THREE.TorusGeometry(0.036, 0.013, 8, 18), M("#E11D48", { r: 0.5 }), rabo, 0, 0, 0, { rx: 0.25 });
        L([mecha([V(0, 0, 0), V(0, 0.01, -0.07), V(0, -0.12, -0.11), V(0, -0.3, -0.075), V(0, -0.44, -0.04)], (t) => 0.05 * (1 + 0.35 * Math.sin(PI * t * 0.9)) * (1 - 0.55 * t), { ach: 0.8, ref: V(0, 0, -1), sulcos: 5, seg: 40 })], resto, rabo);
        this.molas.rabo = { g: rabo, a: 0, v: 0, b: 0, vb: 0 };
        break; }
      case 9: break;   // careca
      case 10: // lateral: repartido de lado, volume varrido para o outro lado
        C({ h: (d) => { const [th, ph] = angDe(d); return 0.022 + 0.04 * Math.exp(-(((th - 0.6) / 0.45) ** 2)) * cl(0.6 + 0.6 * Math.cos(ph + 0.5)) + 0.01 * cl(1 - th / 1.2); }, mascara: masc(0.03), polo: dirCab(0.72, 1.05), sulcos: 26, prof: 0.34, onda: (d, dist) => 0.5 * Math.sin(dist * 3.5) });
        break;
      case 11: // franja: reta na testa, logo acima das sobrancelhas
        C({ h: (d) => { const [th] = angDe(d); return 0.026 + 0.01 * cl(1 - th); }, mascara: masc(0, 0.05, (th, ph) => Math.max(0, Math.cos(ph)) ** 2 * (0.23 + 0.025 * Math.sin(ph * 26))), polo: dirCab(0.3, PI), sulcos: 34, prof: 0.3 });
        break;
      case 12: { // ondulado: na altura dos ombros, cheio dos lados, repartido no meio
        C({ h: (d) => { const [th] = angDe(d); return 0.03 + 0.015 * cl(1 - th); }, mascara: masc(0.04), polo: dirCab(0.12, 0), sulcos: 28, prof: 0.3, onda: (d, dist) => 0.9 * Math.sin(dist * 6) });
        solto = L(cortina(0.32, { n: 18, larg: 0.07, onda: 0.022, volume: 1.12, cacho: 0.01, a0: 1.15 }));
        break; }
      case 13: { // espetado: pontas para cima e para trás
        C({ h: () => 0.02, mascara: masc(0.02), polo: dirCab(0.4, PI), sulcos: 26 });
        const lista = []; for (let i = 0; i < 22; i++) { const th = 0.12 + ruido(i) * 0.95, ph = (ruido(i + 9) - 0.5) * 2 * (th < 0.5 ? PI : 1.6); const b = P(th, ph, 0.005), n = dirCab(th, ph); const tip = b.clone().addScaledVector(n, 0.05 + ruido(i + 4) * 0.025).add(V(0, 0.018, -0.012)); lista.push(mecha([b, b.clone().lerp(tip, 0.55).addScaledVector(n, 0.008), tip], (t) => 0.05 * (1 - 0.7 * t), { ach: 0.6, sulcos: 2, ref: n })); }
        L(lista, topo); break; }
      case 14: // undercut: lados raspados, topo comprido penteado para trás
        C({ h: () => 0.0045, mascara: masc(0.02, 0.05) }, this.cabRaspado);
        C({ h: (d) => { const [th] = angDe(d); return 0.03 + 0.03 * cl(1 - th / 1.0); }, mascara: (d) => { const [th, ph] = angDe(d); return masc(0.02)(d) * suave((0.62 - Math.abs(Math.sin(ph)) * Math.sin(th)) / 0.05) * suave((1.55 - th) / 0.08); }, polo: dirCab(1.1, 0), sulcos: 20, prof: 0.34 });
        break;
      case 15: { // tranças: repartido no meio, duas tranças atrás das orelhas
        C({ h: (d) => { const [th] = angDe(d); return 0.018 + 0.008 * cl(1 - th); }, mascara: masc(0.02), polo: dirCab(0.1, 0), sulcos: 36, prof: 0.26 });
        const lista = []; for (const s of [-1, 1]) { const b0 = P(1.55, s * 2.2, 0.02); lista.push(tranca([b0, b0.clone().add(V(s * 0.02, -0.12, 0.02)), b0.clone().add(V(s * 0.03, -0.28, 0.05)), b0.clone().add(V(s * 0.02, -0.44, 0.06))], 0.034, 0.024, 12)); const pt = b0.clone().add(V(s * 0.02, -0.46, 0.06)); mesh(new THREE.TorusGeometry(0.018, 0.008, 6, 14), M("#F59E0B", { r: 0.5 }), g, pt.x, pt.y + 0.02, pt.z, { rx: PI / 2 }); }
        solto = L(lista); break; }
      case 16: { // chanel: na altura do queixo, franja reta
        C({ h: (d) => { const [th] = angDe(d); return 0.03 + 0.012 * cl(1 - th); }, mascara: masc(0.02, 0.05, (th, ph) => Math.max(0, Math.cos(ph)) ** 2 * 0.2), polo: dirCab(0.25, PI), sulcos: 34, prof: 0.28 });
        solto = L(cortina(0.2, { n: 20, larg: 0.064, cacho: -0.03, a0: 1.05, volume: 1.05 }));
        break; }
    }
    if (k !== 9 && k !== 2 && k !== 7 && k !== 14) sob = sobChapeu(); else if (k === 7 || k === 14) sob = C({ h: () => 0.0045, mascara: masc(0.02, 0.05) }, this.cabRaspado, []);
    if (sob) { sob.visible = false; }
    const corte = this.cortes[k] = { g, topo, resto, sob, solto };
    if (solto && !this.molas.solto) this.molas.solto = { a: 0, v: 0, b: 0, vb: 0 };
    g.visible = false; return corte;
  }
  /* --- barba esculpida: 1 cavanhaque, 2 barba cheia, 3 bigode, 4 rala, 5 lenhador --- */
  montarBarba(k) {
    if (this.barbas[k] !== undefined) return this.barbas[k];
    if (!k) { this.barbas[k] = null; return null; }
    const R = this.RC, g = new THREE.Group(); g.position.y = this.hc; this.head.add(g);
    const boca = BOCA_D, forma = (geo, r) => formaCabeca(geo, r);
    const longeBoca = (d, r = 0.14) => 1 - Math.exp(-((Math.acos(cl(d.dot(boca), -1, 1)) / r) ** 4));
    // borda de cima da barba: da costeleta (alto, do lado) descendo até os cantos da boca
    const mandibula = (d) => { const [th, ph] = angDe(d); const lim = lerp(2.02, 1.6, Math.pow(cl(Math.abs(ph) / 1.35), 1.1)); return suave((th - lim) / 0.07) * suave((1.5 - Math.abs(ph)) / 0.12) * suave((2.8 - th) / 0.2); };
    const bigode = (d) => { const [th, ph] = angDe(d); return suave((0.07 - Math.abs(th - 1.84)) / 0.03) * suave((0.42 - Math.abs(ph)) / 0.08); };
    const C = (o) => { const m = mesh(casca(R, { forma, polo: dirCab(0.05, 0), sulcos: 60, prof: 0.3, base: -0.002, ...o }), this.barbaMat, g); m.castShadow = true; return m; };
    if (k === 1) { C({ h: () => 0.014, mascara: (d) => Math.max(suave((0.3 - Math.acos(cl(d.dot(dirCab(2.25, 0)), -1, 1))) / 0.06) * longeBoca(d, 0.12), bigode(d)) }); }
    if (k === 2) { C({ h: (d) => 0.014 + 0.012 * suave((angDe(d)[0] - 1.9) / 0.5), mascara: (d) => Math.max(mandibula(d) * longeBoca(d), bigode(d)) }); }
    if (k === 3) { C({ h: () => 0.018, mascara: bigode }); }
    if (k === 4) { C({ h: () => 0.0035, mascara: (d) => Math.max(mandibula(d) * longeBoca(d, 0.11), bigode(d) * 0.8), sulcos: 0 }); }
    if (k === 5) { C({ h: (d) => { const [th, ph] = angDe(d); return 0.02 + 0.06 * suave((th - 1.95) / 0.5) * Math.pow(Math.max(0, Math.cos(ph)), 1.5); }, mascara: (d) => Math.max(mandibula(d) * longeBoca(d, 0.13), bigode(d)), thMax: 2.9 }); }
    g.visible = false; this.barbas[k] = g; return g;
  }
  /* --- óculos: 1 redondo, 2 quadrado; escuros quando o acessório de recompensa é o de óculos --- */
  montarOculos(head, hc, R) {
    this.lente = new THREE.MeshPhysicalMaterial({ color: "#DCEBFF", roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.14, clearcoat: 1 });
    this.oculosG = [];
    const aros = [M("#1F2937", { r: 0.35, m: 0.3 }), M("#DC2626", { r: 0.35, m: 0.1 })];
    for (const tipo of [1, 2]) {
      const g = new THREE.Group(); const aro = aros[tipo - 1];
      const ex = 0.1, ey = hc + 0.005, ez = R + 0.052;
      for (const s of [-1, 1]) {
        let curva;
        if (tipo === 1) curva = new THREE.EllipseCurve(0, 0, 0.058, 0.055, 0, TAU);
        else { const sh = new THREE.Shape(); rrShape(sh, -0.066, -0.046, 0.132, 0.092, 0.022); curva = sh; }
        const pts = curva.getPoints(48).map((p) => V(p.x, p.y, 0));
        const tb = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 64, 0.0075, 8, true);
        mesh(tb, aro, g, s * ex, ey, ez, { ry: s * 0.18 });
        const lg = tipo === 1 ? new THREE.CircleGeometry(0.056, 28) : new THREE.ShapeGeometry(curva);
        mesh(lg, this.lente, g, s * ex, ey, ez - 0.002, { ry: s * 0.18, cast: false }).name = "lente";
        bloco(g, aro, [-0.006, -0.008, -0.2], [0.006, 0.008, 0], 0.003).position.set(s * (R + 0.016), ey + 0.012, ez - 0.13);
        bloco(g, aro, [-0.05, -0.007, -0.006], [0.05, 0.007, 0.006], 0.003).position.set(s * (ex + 0.105), ey + 0.012, ez - 0.02);
      }
      cil(g, aro, 0.006, 0.006, 0.07, 0, ey + 0.01, ez + 0.006, { rz: PI / 2 });
      g.visible = false; head.add(g); this.oculosG.push(g);
    }
  }
  /* --- chapéus de recompensa (boné, capelo, coroa) e acessórios livres (fone, gorro, faixa, laço, boné virado) --- */
  montarChapeus(head, hc, R) {
    const h = this.chapeus = {};
    let g = new THREE.Group(); const azul = M("#2563EB", { r: 0.7 });
    mesh(new THREE.SphereGeometry(R + 0.04, 40, 18, 0, TAU, 0, 1.3), azul, g, 0, hc + 0.01, -0.01, { rx: -0.18 });
    bloco(g, azul, [-0.15, -0.01, 0], [0.15, 0.01, 0.2], 0.01, { rx: 0.18 }).position.set(0, hc + 0.12, 0.2);
    esf(g, M("#1E3A8A"), 0.025, 0, hc + R + 0.035, -0.02, { seg: 10, seg2: 8 });
    h.a_bone = g;
    g = new THREE.Group(); const preto = M("#111827", { r: 0.6 });
    cil(g, preto, R + 0.035, R + 0.035, 0.12, 0, hc + 0.16, 0, { seg: 36 });
    bloco(g, preto, [-0.34, -0.012, -0.34], [0.34, 0.012, 0.34], 0.01, { ry: PI / 4 }).position.set(0, hc + 0.23, 0);
    cil(g, M("#F5B400", { r: 0.4 }), 0.008, 0.008, 0.2, 0.2, hc + 0.13, 0.12, { rz: 0.1 });
    h.a_formatura = g;
    g = new THREE.Group(); const ouro = M("#F5B400", { r: 0.25, m: 0.85 });
    cil(g, ouro, R * 0.82, R * 0.86, 0.1, 0, hc + 0.22, 0, { seg: 36 });
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; mesh(new THREE.ConeGeometry(0.04, 0.11, 10), ouro, g, Math.sin(a) * R * 0.8, hc + 0.31, Math.cos(a) * R * 0.8); esf(g, M(i % 2 ? "#DC2626" : "#2563EB", { r: 0.2, m: 0.3 }), 0.024, Math.sin(a) * R * 0.86, hc + 0.22, Math.cos(a) * R * 0.86, { seg: 10, seg2: 8 }); }
    h.a_cartola = g;
    // acessórios livres (escolhidos no perfil)
    const ac = this.acCabeca = {};
    g = new THREE.Group(); const fone = M("#2563EB", { r: 0.4 }), fone2 = M("#E2E8F0", { r: 0.5 });
    mesh(new THREE.TorusGeometry(R + 0.06, 0.018, 10, 40, PI * 1.05), fone, g, 0, hc + 0.0, -0.01, { rz: -PI * 0.025, s: [1, 1.08, 1] });
    for (const s of [-1, 1]) { cil(g, fone, 0.072, 0.072, 0.05, s * (R + 0.04), hc - 0.01, -0.005, { rz: PI / 2, seg: 28 }); cil(g, fone2, 0.058, 0.058, 0.012, s * (R + 0.068), hc - 0.01, -0.005, { rz: PI / 2, seg: 28 }); }
    ac[1] = g;
    g = new THREE.Group(); const gor = M("#DC2626", { r: 0.95 }); gor.normalMap = mapaNormal("trico-gorro", 128, 128, (gg, w, hh) => trama(gg, w, hh, "trico"), 3); gor.normalMap.channel = 0; gor.normalMap.repeat.set(4, 2);
    mesh(new THREE.SphereGeometry(R + 0.045, 40, 20, 0, TAU, 0, 1.45), gor, g, 0, hc + 0.015, -0.01, { rx: -0.12, s: [1, 1.12, 1] });
    mesh(new THREE.TorusGeometry(R + 0.03, 0.032, 10, 40), gor, g, 0, hc + 0.035, -0.01, { rx: PI / 2 - 0.12 });
    esf(g, M("#F8FAFC", { r: 1 }), 0.055, 0, hc + R + 0.08, -0.03, { seg: 14, seg2: 12 });
    ac[2] = g;
    g = new THREE.Group(); mesh(new THREE.TorusGeometry(R + 0.03, 0.02, 10, 44), M("#EC4899", { r: 0.7 }), g, 0, hc + 0.075, -0.02, { rx: PI / 2 - 0.4, s: [1, 1, 1.05] }); ac[3] = g;
    g = new THREE.Group(); const laco = M("#EF4444", { r: 0.5 });
    for (const s of [-1, 1]) esf(g, laco, 0.05, s * 0.05, 0, 0, { s: [1, 0.7, 0.35], seg: 16, seg2: 10 }); esf(g, laco, 0.022, 0, 0, 0.004, { seg: 12, seg2: 8 });
    g.position.set(0.13, hc + 0.2, 0.06); g.rotation.set(0.2, 0.5, -0.4); const gl2 = new THREE.Group(); gl2.add(g); ac[4] = gl2;
    g = new THREE.Group(); const verde = M("#16A34A", { r: 0.7 });
    mesh(new THREE.SphereGeometry(R + 0.04, 40, 18, 0, TAU, 0, 1.02), verde, g, 0, hc + 0.035, -0.01, { rx: 0.34 });
    bloco(g, verde, [-0.13, -0.01, -0.19], [0.13, 0.01, 0], 0.01, { rx: -0.25 }).position.set(0, hc + 0.15, -0.21);
    ac[5] = g;
    for (const x of [...Object.values(h), ...Object.values(ac)]) { x.visible = false; sombra(x, true, false); head.add(x); }
    // brincos e relógio
    this.brincos = new THREE.Group(); for (const s of [-1, 1]) esf(this.brincos, M("#F5C542", { r: 0.2, m: 0.9 }), 0.014, s * (R + 0.018), hc - 0.085, 0.0, { seg: 12, seg2: 10 }); this.brincos.visible = false; head.add(this.brincos);
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
  // tubo de raio variável ao longo de -Y (perfil [y, raio]); peso de pele vai do osso de cima para o de baixo perto da junta
  // uv: estampa na escala do tronco; uv1: mapa de dobras da peça (u em volta a partir da frente, girado por uRot; v ao longo)
  geoTubo(t, g) {
    const pts = t.perfil, n = 34, rad = 26, f = 1 + (g - 1) * t.k;
    const curva = new THREE.SplineCurve(pts.map(([y, r]) => new THREE.Vector2(r, y))); const amostra = curva.getPoints(n);
    const pos = [], idx = [], si = [], sw = [], uv = [], uv1 = [];
    const rMed = pts.reduce((s2, q) => s2 + Math.max(0, q[1]), 0) / pts.length; const uC = (TAU * rMed) / 0.93;
    for (let i = 0; i <= n; i++) {
      const { x: r0, y } = amostra[i]; const r = Math.max(0, r0) * f;
      const w1 = suave((t.juntaY + t.banda - y) / (2 * t.banda));
      for (let j = 0; j <= rad; j++) {
        const a = (j / rad) * TAU, sx = t.espelho ? -1 : 1; pos.push(sx * Math.sin(a) * r, y, Math.cos(a) * r * t.kz); si.push(0, 1, 0, 0); sw.push(1 - w1, w1, 0, 0);
        uv.push((j / rad) * uC, -y / 0.58); uv1.push(j / rad, (t.vTopo - y) / t.vLen);
      }
    }
    for (let i = 0; i < n; i++) for (let j = 0; j < rad; j++) { const a = i * (rad + 1) + j, b = a + rad + 1; if (t.espelho) idx.push(a, a + 1, b, b, a + 1, b + 1); else idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); geo.setAttribute("uv1", new THREE.Float32BufferAttribute(uv1, 2));
    geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(si, 4)); geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(sw, 4));
    geo.computeVertexNormals();
    return geo;
  }
  setAparencia(v, acessorio) {
    const ap = this.ap = lerAp(v); this.acessorio = acessorio || "";
    const corPele = AP.p[ap.p], corCab = AP.c[ap.c];
    this.pele.color.set(corPele); this.peleSom.color.set(misturaCor(corPele, "#7A3B22", 0.14));
    this.cab.color.set(corCab); this.cabRaspado.color.set(misturaCor(corCab, corPele, 0.35)); this.barbaMat.color.set(misturaCor(corCab, corPele, 0.08));
    if (this.sobMat) this.sobMat.color.set(misturaCor(corCab, "#000000", 0.28));
    if (this.irisMat) this.irisMat.color.set(AP.i[ap.i]);
    // calçado: cor, sola e detalhes de acordo com o tipo
    const cs = AP.s[ap.s]; this.mtSap.color.set(cs);
    const social = ap.f === 2, bota = ap.f === 3;
    this.mtSap.roughness = social ? 0.28 : bota ? 0.7 : 0.48; this.mtSap.metalness = social ? 0.05 : 0;
    this.mtSola.color.set(social ? "#2A1A12" : bota ? "#3B2A1E" : ap.s === 1 ? "#1F2937" : "#F4F6F8");
    this.mtSapDet.color.set(ap.s === 1 ? misturaCor(cs, "#94A3B8", 0.4) : "#F8FAFC");
    this.mtFaixa.color.set(ap.f === 4 ? "#F97316" : ap.s === 1 ? "#1F2937" : misturaCor(cs, "#FFFFFF", 0.55));
    this.montarCalcados(ap.f);
    // cabelo, barba, óculos, chapéu de recompensa ou acessório livre
    const chapeu = this.chapeus[this.acessorio] ? this.acessorio : "";
    const cobre = !!chapeu || ap.h === 2 || ap.h === 5;
    this.cortes.forEach((c) => { if (c) c.g.visible = false; });
    const corte = this.montarCorte(ap.k); corte.g.visible = true; this.corteAtual = corte; this.cabeloSolto = corte.solto || null;
    corte.topo.forEach((m) => { m.visible = !cobre; }); if (corte.sob) corte.sob.visible = cobre;
    this.molas.rabo && (this.molas.rabo.g.visible = true);
    this.barbas.forEach((b) => { if (b) b.visible = false; }); const bb = this.montarBarba(ap.b); if (bb) bb.visible = true;
    Object.entries(this.chapeus).forEach(([k, g]) => { g.visible = k === chapeu; });
    Object.entries(this.acCabeca).forEach(([k, g]) => { g.visible = !chapeu && +k === ap.h; });
    const escuros = this.acessorio === "a_oculos";
    this.oculosG.forEach((g, i) => { g.visible = escuros ? i === 0 : ap.o === i + 1; });
    this.lente.opacity = escuros ? 0.88 : 0.14; this.lente.color.set(escuros ? "#0B1220" : "#DCEBFF");
    this.brincos.visible = ap.j === 3;
    if (!this.relogio) { const g = this.relogio = new THREE.Group(); mesh(new THREE.TorusGeometry(0.047, 0.009, 8, 26), M("#111827", { r: 0.5 }), g, 0, 0, 0, { rx: PI / 2 }); cil(g, M("#D4D4D8", { r: 0.25, m: 0.8 }), 0.02, 0.02, 0.012, -0.05, 0, 0, { rz: PI / 2, seg: 20 }); cil(g, MB("#0EA5E9"), 0.015, 0.015, 0.002, -0.0565, 0, 0, { rz: PI / 2, seg: 20 }); g.position.y = -0.235; this.L.el.add(g); }
    this.relogio.visible = ap.j === 1 || ap.j === 4;
    // corpo: altura (escala do boneco todo), largura, roupa
    this.esc = ALTURA[ap.a]; this.root.scale.setScalar(this.esc);
    this.fGir = CORPO[ap.w];
    this.setRoupa(ap.r, ap.e);
    this.montarCorpo();
    this.setCor(this.cor, true);
    this.rostoKey = "";
  }
  setRoupa(r, e) {
    const cfg = ROUPAS[r] || ROUPAS[0], ap = this.ap;
    const longa = cfg.manga === "L", regata = cfg.manga === "R";
    const tec = cfg.tec || "liso";
    // material do tronco e das mangas: cor (perfil ou escolhida), estampa e mapa de dobras
    const T = this.mtTronco, Mg = this.mtManga;
    T.map = cfg.m === "xadrez" ? this.texX.t : cfg.m === "havai" ? this.texH.t : cfg.m === "listras" ? this.texL.t : cfg.m === "time" ? this.texT.t : null;
    T.normalMap = nmTronco(tec); T.roughness = tec === "la" ? 0.62 : tec === "jeans" ? 0.88 : tec === "trico" ? 0.95 : 0.82; T.sheen = tec === "trico" ? 0.45 : 0.2;
    Mg.map = cfg.m === "time" ? null : T.map; if (cfg.listras) Mg.map = this.texLM.t;
    Mg.normalMap = nmManga(cfg.mangaM ? "liso" : tec, longa); Mg.roughness = cfg.mangaM ? 0.66 : T.roughness; Mg.sheen = T.sheen;
    T.needsUpdate = true; Mg.needsUpdate = true;
    for (const B of [this.L, this.R]) {
      B.mangaC.visible = !longa && !regata; B.mangaL.visible = longa;
      B.ombroPele.visible = regata;
      B.punho.visible = longa && (!!cfg.punho || !!cfg.punhoR);
      B.punho.material = cfg.punho ? this[cfg.punho] : this.mtDet;
    }
    this.estampaPlano.visible = this.temIcone && !!cfg.estampa;
    // parte de baixo: calça, bermuda, saia, jogger ou shorts (vestido usa saia)
    const baixo = cfg.vestido ? 2 : e;
    this.mtCalca.color.set(cfg.calca && baixo === 0 ? cfg.calca : AP.l[ap.l]);
    const listra = cfg.listras && (baixo === 0 || baixo === 3); this.mtCalca.map = listra ? this.texLP.t : null;
    if (listra) { this.desenharListraCalca(AP.l[ap.l]); this.mtCalca.color.set("#FFFFFF"); }
    this.mtCalca.normalMap = nmPerna(cfg.calca ? "la" : AP.l[ap.l] === "#6F86B5" || AP.l[ap.l] === "#2F3B52" ? "jeans" : "liso"); this.mtCalca.needsUpdate = true;
    const perna = baixo === 1 || baixo === 2 || baixo === 4;
    for (const P of [this.PL, this.PR]) {
      P.calcaL.visible = baixo === 0; P.jogger.visible = baixo === 3; P.bermudaM.visible = baixo === 1; P.shortsM.visible = baixo === 4;
      P.peleP.visible = perna; P.meiaM.visible = (perna || baixo === 3) && ap.f !== 3 && ap.f !== 1; P.meiaM.scale.y = perna ? 1.8 : 1; P.meiaM.position.y = perna ? 0.04 : 0.012;
    }
  }
  setCor(cor, forca) {
    const c = cor || "#2457F5"; if (c === this.cor && !forca && this.corRoupa === this.ap.u) return; this.cor = c; this.corRoupa = this.ap.u;
    const cfg = ROUPAS[this.ap.r] || ROUPAS[0];
    // cor da roupa: a escolhida no perfil ou a cor do perfil
    const cr = AP.u[this.ap.u] || c;
    const base = cfg.m === "terno" ? COR_TERNO : cfg.m === "branco" ? "#F4F6FA" : cfg.m === "jeans" ? COR_JEANS : (cfg.m === "xadrez" || cfg.m === "havai" || cfg.m === "listras" || cfg.m === "time") ? "#FFFFFF" : cr;
    this.mtTronco.color.set(base);
    this.mtManga.color.set(cfg.mangaM === "branco" ? "#F4F6FA" : cfg.listras ? "#FFFFFF" : cfg.m === "time" ? cr : base);
    this.mtDet.color.set(cfg.m === "terno" ? COR_TERNO : cfg.m === "jeans" ? misturaCor(COR_JEANS, "#000000", 0.12) : cfg.m === "branco" ? "#F4F6FA" : misturaCor(cr, cfg.gola === "capuz" || cfg.gola === "alta" ? "#000000" : "#FFFFFF", 0.12));
    if (cfg.gola === "blazer") this.mtDet.color.set(misturaCor(cr, "#000000", 0.22));
    if (cfg.gola === "v" || cfg.listras) this.mtDet.color.set("#FFFFFF");
    this.mtGravata.color.set(c);
    const chave = cr + "|" + c;
    if (this.estampasCor !== chave) { this.estampasCor = chave; this.desenharEstampas(cr, c); }
  }
  // estampas desenhadas na cor da roupa (cr) e na cor do perfil (c): xadrez, havaiana, listras, camisa de time e listras do agasalho
  desenharEstampas(cr, c) {
    { const { g, t } = this.texX; const esc = misturaCor(cr, "#000000", 0.5), cla = misturaCor(cr, "#FFFFFF", 0.6);
      g.globalAlpha = 1; g.fillStyle = misturaCor(cr, "#FFFFFF", 0.08); g.fillRect(0, 0, 256, 256);
      g.globalAlpha = 0.42; g.fillStyle = esc; g.fillRect(0, 72, 256, 72); g.fillRect(72, 0, 72, 256);
      g.globalAlpha = 0.3; g.fillRect(0, 196, 256, 22); g.fillRect(196, 0, 22, 256);
      g.globalAlpha = 0.85; g.fillStyle = cla; g.fillRect(0, 168, 256, 5); g.fillRect(168, 0, 5, 256);
      g.globalAlpha = 0.6; g.fillStyle = "#0B0F17"; g.fillRect(0, 106, 256, 4); g.fillRect(106, 0, 4, 256);
      g.globalAlpha = 0.06; g.fillStyle = "#000"; for (let i = -256; i < 256; i += 4) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 256, 256); g.lineTo(i + 258, 256); g.lineTo(i + 2, 0); g.fill(); }
      g.globalAlpha = 1; t.needsUpdate = true; }
    { const { g, t } = this.texH; g.globalAlpha = 1; g.fillStyle = cr; g.fillRect(0, 0, 256, 256);
      const folha = misturaCor(misturaCor(cr, "#0E5A3A", 0.6), "#000000", 0.15), flor = "#FFF7EC", miolo = "#F6B93B";
      const em = (x, y, fn) => { for (const dx of [-256, 0, 256]) for (const dy of [-256, 0, 256]) { g.save(); g.translate(x + dx, y + dy); fn(); g.restore(); } };
      const fo = (x, y, a, s) => em(x, y, () => { g.rotate(a); g.fillStyle = folha; g.beginPath(); g.ellipse(0, 0, 34 * s, 12 * s, 0, 0, TAU); g.fill(); g.strokeStyle = misturaCor(folha, "#FFFFFF", 0.25); g.lineWidth = 2; g.beginPath(); g.moveTo(-30 * s, 0); g.lineTo(30 * s, 0); g.stroke(); });
      const fl = (x, y, a, s) => em(x, y, () => { g.rotate(a); g.fillStyle = flor; for (let i = 0; i < 5; i++) { g.rotate(TAU / 5); g.beginPath(); g.ellipse(0, -15 * s, 9 * s, 15 * s, 0, 0, TAU); g.fill(); } g.fillStyle = miolo; g.beginPath(); g.arc(0, 0, 6 * s, 0, TAU); g.fill(); });
      fo(40, 60, 0.6, 1); fo(170, 30, -0.4, 0.9); fo(120, 170, 1.9, 1.1); fo(220, 210, 0.3, 0.8); fo(30, 210, -1.1, 0.9);
      fl(78, 92, 0.3, 1.1); fl(200, 120, 1.2, 0.9); fl(60, 190, 0.8, 0.8); fl(170, 230, 0.1, 1);
      t.needsUpdate = true; }
    { const { g, t } = this.texL; g.fillStyle = "#F8FAFC"; g.fillRect(0, 0, 128, 128); g.fillStyle = cr; for (let i = 0; i < 4; i++) g.fillRect(0, i * 32 + 4, 128, 15); t.needsUpdate = true; }
    { const { g, t } = this.texLM; g.fillStyle = cr; g.fillRect(0, 0, 128, 128); g.fillStyle = "#F8FAFC"; for (const x of [24, 34]) g.fillRect(x, 0, 6, 128); t.needsUpdate = true; }
    { // camisa de time: corpo na cor da roupa, laterais brancas, número nas costas e no peito, escudo com a cor do perfil
      const { g, t } = this.texT; g.fillStyle = cr; g.fillRect(0, 0, 512, 512);
      g.fillStyle = "rgba(255,255,255,.95)"; for (const x of [112, 368]) g.fillRect(x, 0, 32, 512);
      g.fillStyle = "rgba(255,255,255,.08)"; for (let y = 0; y < 512; y += 16) g.fillRect(0, y, 512, 8);
      g.font = "bold 150px system-ui, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#FFFFFF"; g.strokeStyle = misturaCor(cr, "#000000", 0.4); g.lineWidth = 8;
      for (const x of [0, 512]) { g.strokeText("10", x, 170); g.fillText("10", x, 170); }
      g.font = "bold 46px system-ui, sans-serif"; g.strokeText("10", 300, 150); g.fillText("10", 300, 150);
      g.fillStyle = c; g.beginPath(); g.moveTo(210, 128); g.lineTo(242, 128); g.lineTo(242, 160); g.quadraticCurveTo(226, 178, 210, 160); g.closePath(); g.fill(); g.strokeStyle = "#FFFFFF"; g.lineWidth = 3; g.stroke();
      t.needsUpdate = true; }
  }
  // listras laterais da calça do agasalho (o fundo é a cor da calça)
  desenharListraCalca(cor) {
    const { g, t } = this.texLP; g.fillStyle = cor; g.fillRect(0, 0, 128, 128); g.fillStyle = "#F8FAFC"; for (const x of [26, 35]) g.fillRect(x, 0, 5, 128); t.needsUpdate = true;
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
  ik(B, alvo, peso, qMao, poloArg) {
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
    const polo = poloArg ? V(...poloArg).normalize() : V(B.lado * 0.55, -1, -0.45).normalize();
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
    // respiração: o peito enche (osso da coluna do tronco)
    this.bS.scale.set(1 + 0.009 * resp, 1 + 0.004 * resp, 1 + 0.02 * resp);
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
      if (p.kL > 0.001 && p.ikL) this.ik(this.L, V(...p.ikL), cl(p.kL), qL, p.poloL);
      if (p.kR > 0.001 && p.ikR) this.ik(this.R, V(...p.ikR), cl(p.kR), qR, p.poloR);
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
      this.pYaw = yaw;
      // barra da camisa: balança com a aceleração do quadril (andar, parar, girar, dançar)
      const br = this.barra; this.hips.updateWorldMatrix(true, false); const hp = new THREE.Vector3().setFromMatrixPosition(this.hips.matrixWorld);
      if (br.ant) {
        const vel = hp.clone().sub(br.ant).divideScalar(d); const ac = vel.clone().sub(br.vel).divideScalar(d); br.vel.copy(vel);
        const fw = Math.sin(yaw) * ac.x + Math.cos(yaw) * ac.z, lat = Math.cos(yaw) * ac.x - Math.sin(yaw) * ac.z;
        br.vx += (cl(fw, -40, 40) * 0.006 - 120 * br.x - 9 * br.vx) * d; br.x = cl(br.x + br.vx * d, -0.25, 0.25);
        br.vz += (cl(-lat, -40, 40) * 0.006 - dyaw * 0.05 - 120 * br.z - 9 * br.vz) * d; br.z = cl(br.z + br.vz * d, -0.2, 0.2);
      }
      br.ant = hp;
    }
    this.pDy = p.dy; this.pNod = p.nod; this.pT = T;
    // barra: sobe na frente quando ele senta (coxas para a frente) e acompanha o balanço
    { const flex = Math.max(0, ((p.lL[0] || 0) + (p.lR[0] || 0)) / 2), br = this.barra;
      this.bF.rotation.set(br.x - 0.85 * suave((flex - 0.35) / 1.0), 0, br.z); this.bB.rotation.set(br.x * 1.3 + 0.2 * suave((flex - 0.35) / 1.0), 0, br.z); }
    const rb = this.molas.rabo; if (rb) { rb.g.rotation.x = 0.15 + rb.a * 0.8 - (p.lean + p.nod) * 0.6; rb.g.rotation.z = rb.b * 0.8 + 0.04 * calmo; }
    // mechas compridas balançam um pouco com a cabeça
    if (this.cabeloSolto && this.molas.solto) { const m = this.molas.solto; this.cabeloSolto.rotation.set(m.a * 0.18 - (p.lean + p.nod) * 0.25, 0, m.b * 0.15); }
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
    else if (nome === "controle") c[4] = lado === "R" && p.botaoR != null ? 0.32 + 0.38 * p.botaoR : 0.35 + 0.25 * Math.max(0, Math.sin(T * (lado === "L" ? 7 : 9.5) + (lado === "L" ? 0 : 2)));
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
    // volumes do rosto: bochechas sobem no sorriso, queixo desce com a boca aberta, lábios em bico no "o"
    { const sor = Math.max(0, F.sorr || 0), ab = cl(F.abre), rd = cl(F.redondo);
      const mi = [cl(sor * 0.95 + cl(F.feliz) * 0.35 + cl(F.boch) * 0.12), cl(ab * (0.5 + 0.5 * cl(rd + (F.dentes || 0)))), cl(rd * 0.85 + (F.morde || 0) * 0.15)];
      for (const m of [this.cabM, this.rostoM]) { const t = m.morphTargetInfluences; t[0] = mi[0]; t[1] = mi[1]; t[2] = mi[2]; } }
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
    // boca: cantos (sorriso/assimetria), abertura, forma redonda, dentes e língua, com sombra por dentro (profundidade)
    const my = 161, labS = misturaCor(pele, "#8E2F2B", escura ? 0.38 : 0.45), labI = misturaCor(pele, "#C2615A", escura ? 0.3 : 0.38), linha = misturaCor(pele, "#3A0F0C", 0.72);
    const w = 24 * (F.larg ?? 1) * (1 - 0.45 * red) * (1 + 0.2 * Math.max(0, sorr) * (1 - red));
    const ca = (s) => my - sorr * 8.5 + (F.assim || 0) * s * 4.5;
    const xL = cx - w, xR = cx + w, yL = ca(-1), yR = ca(1);
    const alto = abre * (26 + 9 * red);
    if (alto < 1.6) {
      g.fillStyle = labS; g.beginPath(); g.moveTo(xL, yL); g.quadraticCurveTo(cx - w * 0.45, my - 5.5, cx, my - 3.2); g.quadraticCurveTo(cx + w * 0.45, my - 5.5, xR, yR); g.quadraticCurveTo(cx, my + 1 + sorr * 4, xL, yL); g.fill();
      g.fillStyle = labI; g.beginPath(); g.moveTo(xL + 2, yL + 0.5); g.quadraticCurveTo(cx, my + 1.5 + sorr * 4, xR - 2, yR + 0.5); g.quadraticCurveTo(cx, my + 10 + sorr * 3.5, xL + 2, yL + 0.5); g.fill();
      g.fillStyle = "rgba(255,255,255,.18)"; g.beginPath(); g.ellipse(cx, my + 5 + sorr * 2.5, w * 0.35, 1.6, 0, 0, TAU); g.fill();
      g.strokeStyle = linha; g.lineWidth = 2.4; g.beginPath(); g.moveTo(xL, yL); g.quadraticCurveTo(cx, my + 1.2 + sorr * 5, xR, yR); g.stroke();
      if (F.morde > 0.1) { g.fillStyle = "#FAF6F0"; g.beginPath(); g.ellipse(cx + 3, my + 2, 7 * F.morde, 2.6 * F.morde, 0, 0, TAU); g.fill(); }
      if (F.lingua > 0.1) { g.fillStyle = "#E06D78"; g.beginPath(); g.ellipse(cx + 7, my + 4 + 2 * F.lingua, 6 * F.lingua, 4 * F.lingua, 0.3, 0, TAU); g.fill(); }
    } else {
      const sup = my - 3 - abre * 2, inf = my + alto - sorr * 3;
      const forma = () => { g.beginPath(); g.moveTo(xL, yL); g.quadraticCurveTo(cx, sup - sorr * 2, xR, yR); g.quadraticCurveTo(cx + w * 0.78, inf, cx, inf); g.quadraticCurveTo(cx - w * 0.78, inf, xL, yL); g.closePath(); };
      forma(); const fundo = g.createRadialGradient(cx, (sup + inf) / 2 - 2, 2, cx, (sup + inf) / 2, Math.max(w, alto)); fundo.addColorStop(0, "#1E060A"); fundo.addColorStop(0.55, "#4A1218"); fundo.addColorStop(1, "#7A2630"); g.fillStyle = fundo; g.fill();
      g.save(); forma(); g.clip();
      if (F.dentes > 0.05) { const dt = g.createLinearGradient(0, sup - 6, 0, sup + 5 + 7 * F.dentes); dt.addColorStop(0, "#FFFFFF"); dt.addColorStop(1, "#DCD6CE"); g.fillStyle = dt; g.beginPath(); g.moveTo(cx - w, sup - 8); g.lineTo(cx + w, sup - 8); g.quadraticCurveTo(cx + w * 0.6, sup + 4 + 7 * F.dentes, cx, sup + 4.5 + 7 * F.dentes); g.quadraticCurveTo(cx - w * 0.6, sup + 4 + 7 * F.dentes, cx - w, sup - 8); g.fill();
        g.strokeStyle = "rgba(150,140,130,.35)"; g.lineWidth = 0.8; for (const dx of [-0.42, -0.14, 0.14, 0.42]) { g.beginPath(); g.moveTo(cx + dx * w, sup - 6); g.lineTo(cx + dx * w * 0.96, sup + 2 + 5 * F.dentes); g.stroke(); } }
      const lg = Math.max(F.lingua || 0, abre * 0.7); if (lg > 0.1) { const tg = g.createRadialGradient(cx, inf - 2, 1, cx, inf, w * 0.6); tg.addColorStop(0, "#F08A94"); tg.addColorStop(1, "#C24E5C"); g.fillStyle = tg; g.beginPath(); g.ellipse(cx, inf + 1, w * 0.58, Math.max(3, alto * 0.42) * lg, 0, 0, TAU); g.fill(); }
      g.fillStyle = "rgba(0,0,0,.25)"; g.fillRect(cx - w, sup - 8, w * 2, 4);
      g.restore();
      g.strokeStyle = labS; g.lineWidth = 3.6; forma(); g.stroke();
      g.strokeStyle = labI; g.lineWidth = 4.2; g.beginPath(); g.moveTo(xL + 3, yL + 2); g.quadraticCurveTo(cx + w * 0.78, inf + 2, cx, inf + 2.2); g.stroke();
      g.beginPath(); g.moveTo(xR - 3, yR + 2); g.quadraticCurveTo(cx - w * 0.78, inf + 2, cx, inf + 2.2); g.stroke();
    }
    // covinhas nos cantos quando sorri
    if (sorr > 0.35) { const k = (sorr - 0.35) / 0.65; g.strokeStyle = escura ? `rgba(10,4,2,${0.35 * k})` : `rgba(150,70,55,${0.4 * k})`; g.lineWidth = 1.8; for (const s of [-1, 1]) { const x = s < 0 ? xL : xR, y = s < 0 ? yL : yR; g.beginPath(); g.arc(x + s * 1.5, y + 1, 4.5, s < 0 ? -0.4 : PI - 1.2, s < 0 ? 1.2 : PI + 0.4); g.stroke(); } }
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
