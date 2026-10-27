/* Radar da Carteira: escritório 3D (Three.js).
   Fonte. O arquivo publicado (../escritorio3d.js) é gerado por:  node src/build.mjs
   Carregado sob demanda por escritorio.js. */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* ---------- utilidades ---------- */
const PI = Math.PI, TAU = PI * 2;
const cl = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const suave = (t) => { t = cl(t); return t * t * (3 - 2 * t); };
const io = (t) => { t = cl(t); return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
const sai = (t) => 1 - Math.pow(1 - cl(t), 3);
const fase = (t, a, b) => cl((t - a) / (b - a));
const jan = (t, a, b, r = 0.35) => suave((t - a) / r) * suave((b - t) / r);
const angLerp = (a, b, t) => { const d = ((((b - a + PI) % TAU) + TAU) % TAU) - PI; return a + d * t; };
const yawPara = (de, para) => Math.atan2(para[0] - de[0], para[1] - de[1]);
const V = (x, y, z) => new THREE.Vector3(x, y, z);

const W = 9, D = 7.5, H = 3, T_PAR = 0.18;   // sala em metros: x (largura), z (profundidade), y (altura)

/* ---------- materiais ---------- */
const matCache = new Map();
function M(cor, o = {}) {
  const k = cor + JSON.stringify(o);
  if (matCache.has(k)) return matCache.get(k);
  const m = new THREE.MeshStandardMaterial({ color: cor, roughness: o.r ?? 0.75, metalness: o.m ?? 0, emissive: o.e || "#000000", emissiveIntensity: o.ei ?? 1, transparent: !!o.op, opacity: o.op ?? 1, flatShading: !!o.flat, side: o.ds ? THREE.DoubleSide : THREE.FrontSide });
  matCache.set(k, m); return m;
}
const MB = (cor, o = {}) => new THREE.MeshBasicMaterial({ color: cor, toneMapped: false, transparent: !!o.op || !!o.map, opacity: o.op ?? 1, map: o.map || null, blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending, depthWrite: !o.add, side: o.ds ? THREE.DoubleSide : THREE.FrontSide });

function sombra(m, cast = true, recv = true) { m.traverse((o) => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = recv; } }); return m; }
function mesh(geo, mat, par, x = 0, y = 0, z = 0, o = {}) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
  if (o.rx) m.rotation.x = o.rx; if (o.ry) m.rotation.y = o.ry; if (o.rz) m.rotation.z = o.rz;
  if (o.s) m.scale.set(...(Array.isArray(o.s) ? o.s : [o.s, o.s, o.s]));
  m.castShadow = o.cast !== false; m.receiveShadow = o.recv !== false;
  if (par) par.add(m); return m;
}
// bloco pelos cantos [x0,y0,z0] → [x1,y1,z1], com cantos arredondados
function bloco(par, mat, a, b, r = 0.015, o = {}) {
  const w = b[0] - a[0], h = b[1] - a[1], d = b[2] - a[2];
  const rr = Math.min(r, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3);
  const geo = rr > 0.002 ? new RoundedBoxGeometry(w, h, d, 3, rr) : new THREE.BoxGeometry(w, h, d);
  return mesh(geo, mat, par, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2, o);
}
const cil = (par, mat, r1, r2, h, x, y, z, o = {}) => mesh(new THREE.CylinderGeometry(r1, r2, h, o.seg || 24), mat, par, x, y, z, o);
const esf = (par, mat, r, x, y, z, o = {}) => mesh(new THREE.SphereGeometry(r, o.seg || 24, o.seg2 || 16), mat, par, x, y, z, o);
const caps = (par, mat, r, len, x, y, z, o = {}) => mesh(new THREE.CapsuleGeometry(r, len, 6, 16), mat, par, x, y, z, o);

function tela(w, h) {
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const g = c.getContext("2d"); const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { c, g, t, w, h };
}
function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
function brilho(cor, tam = 1, op = 0.6) {   // halo aditivo (luz de tela, neon, abajur)
  const T = tela(128, 128); const gr = T.g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.35, "rgba(255,255,255,.35)"); gr.addColorStop(1, "rgba(255,255,255,0)");
  T.g.fillStyle = gr; T.g.fillRect(0, 0, 128, 128);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.t, color: cor, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: op, toneMapped: false }));
  s.scale.setScalar(tam); return s;
}

/* ---------- humores e luz ---------- */
const LUZ = {
  triste: { hemi: 0.55, key: 0.85, keyCor: "#AFC0E6", amb: "#7F8FB3", lamp: false, pend: false, raio: 0.1, tv: "#EF4444", mon: "#EF4444", exp: 0.9 },
  preocupado: { hemi: 0.75, key: 1.35, keyCor: "#FFE3C7", amb: "#B9A58F", lamp: true, pend: false, raio: 0.16, tv: "#EF4444", mon: "#F97316", exp: 0.97 },
  tranquilo: { hemi: 0.85, key: 1.7, keyCor: "#FFF4E3", amb: "#C8C6E8", lamp: true, pend: false, raio: 0.28, tv: "#818CF8", mon: "#60A5FA", exp: 1.0 },
  feliz: { hemi: 0.95, key: 2.1, keyCor: "#FFF1D6", amb: "#E8DCC0", lamp: true, pend: true, raio: 0.4, tv: "#22C55E", mon: "#22C55E", exp: 1.04 },
  euforico: { hemi: 0.8, key: 1.6, keyCor: "#FFE0F2", amb: "#E9C9E6", lamp: true, pend: true, raio: 0.36, tv: "#FACC15", mon: "#FACC15", exp: 1.05 },
};

/* ---------- boneco ---------- */
// Aparência configurável pelo perfil: p pele, c cabelo, k corte, b barba, l calça, o óculos (ex.: "p1c0k1b0l0o0")
const AP = {
  p: ["#F6D3B3", "#F2C3A0", "#D9A27A", "#B07850", "#7A4E33", "#4F3123"], c: ["#2B1B12", "#3B261B", "#6B4226", "#A86B3C", "#D9B26A", "#8E8E8E", "#B33A2A"],
  l: ["#2F3B52", "#1F2937", "#5B4636", "#3F5F45", "#D6CDBB"],
};
const lerAp = (v) => { const r = { p: 1, c: 1, k: 0, b: 0, l: 0, o: 0 }; String(v || "").replace(/([pckblo])(\d)/g, (_, k, d) => { r[k] = +d; }); r.p = Math.min(r.p, 5); r.c = Math.min(r.c, 6); r.k = Math.min(r.k, 4); r.b = Math.min(r.b, 2); r.l = Math.min(r.l, 4); r.o = Math.min(r.o, 1); return r; };
const POSE0 = { alt: 0.89, dy: 0, hz: 0, lean: 0, side: 0, twist: 0, nod: 0, turn: 0, roll: 0, aL: [0, 0.12, 0.2], aR: [0, 0.12, 0.2], lL: [0, 0], lR: [0, 0], olhar: [0, 0], boch: 0, abre: 0.6, lagrima: 0, nuvem: 0, balao: 0, yawAdd: 0, olhos: "A", boca: "leve", sob: "", item: "", balaoT: "" };
const NUM = ["alt", "dy", "hz", "lean", "side", "twist", "nod", "turn", "roll", "boch", "abre", "lagrima", "nuvem", "balao", "yawAdd"];
const ARR = ["aL", "aR", "lL", "lR", "olhar"];
const DISC = ["olhos", "boca", "sob", "item", "balaoT", "bolas", "solta"];
const ruido = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
const misturaCor = (a, b, t) => "#" + new THREE.Color(a).lerp(new THREE.Color(b), t).getHexString();
// Cabeça modelada numa esfera de raio R e achatada pela escala do grupo (proporção de adulto: ~1/7 da altura)
const CAB_ESC = [0.39, 0.49, 0.44], ESTICA = CAB_ESC[1] / CAB_ESC[0] * 0.98;

class Boneco {
  constructor(cor, icone, aparencia, acessorio) {
    const ap = this.ap = lerAp(aparencia);
    const camisa = this.camisa = new THREE.MeshStandardMaterial({ color: cor || "#2457F5", roughness: 0.84 });
    const gola = this.gola = new THREE.MeshStandardMaterial({ color: cor || "#2457F5", roughness: 0.8 });
    // materiais próprios (a aparência muda em tempo real)
    const pele = this.pele = new THREE.MeshStandardMaterial({ color: AP.p[ap.p], roughness: 0.52, emissive: "#4A1D0C", emissiveIntensity: 0.18 });
    const peleSom = this.peleSom = new THREE.MeshStandardMaterial({ color: AP.p[ap.p], roughness: 0.6, emissive: "#4A1D0C", emissiveIntensity: 0.12 });
    const cab = this.cab = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.62 });
    const cabRaspado = this.cabRaspado = new THREE.MeshStandardMaterial({ color: AP.c[ap.c], roughness: 0.9, transparent: true, opacity: 0.85 });
    const calca = this.calca = new THREE.MeshStandardMaterial({ color: AP.l[ap.l], roughness: 0.88 });
    this.setCor(cor);
    const sap = M("#1B2230", { r: 0.42 }), sola = M("#F4F6F8", { r: 0.55 }), meia = M("#F8FAFC", { r: 0.9 });
    const cinto = M("#2A1D16", { r: 0.45 }), fivela = M("#D9B44A", { r: 0.28, m: 0.7 });
    const root = this.root = new THREE.Group();
    const hips = this.hips = new THREE.Group(); root.add(hips);
    // quadril + cinto
    mesh(new THREE.SphereGeometry(0.152, 28, 18), calca, hips, 0, 0.025, 0, { s: [1.05, 0.62, 0.8] });
    cil(hips, cinto, 0.143, 0.143, 0.03, 0, 0.066, 0, { s: [1.06, 1, 0.78], seg: 32 });
    bloco(hips, fivela, [-0.017, 0.052, 0.104], [0.017, 0.082, 0.114], 0.006);
    const spine = this.spine = new THREE.Group(); spine.position.y = 0.04; hips.add(spine);
    // tronco: cintura, peito, ombros caindo até o pescoço
    const perfil = new THREE.SplineCurve([[0.0, -0.02], [0.13, 0.0], [0.134, 0.08], [0.138, 0.15], [0.156, 0.25], [0.171, 0.34], [0.177, 0.41], [0.168, 0.462], [0.132, 0.505], [0.072, 0.538], [0.0, 0.55]].map((q) => new THREE.Vector2(q[0], q[1]))).getPoints(48);
    this.torso = mesh(new THREE.LatheGeometry(perfil, 44), camisa, spine, 0, 0, 0, { s: [1.05, 1, 0.72] });
    // gola polo, botões
    const flap = new THREE.BoxGeometry(0.075, 0.01, 0.065);
    for (const s of [-1, 1]) mesh(flap, gola, spine, s * 0.04, 0.52, 0.068, { rx: 0.62, rz: -s * 0.55 });
    mesh(new THREE.TorusGeometry(0.064, 0.016, 10, 28), gola, spine, 0, 0.535, -0.004, { rx: PI / 2 });
    for (const y of [0.48, 0.44]) esf(spine, M("#E8EDF5", { r: 0.4 }), 0.0075, 0, y, 0.117, { seg: 10, seg2: 8 });
    // ícone do perfil estampado no peito
    this.estampa = tela(128, 128);
    const ep = mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ map: this.estampa.t, transparent: true, alphaTest: 0.1, toneMapped: false }), spine, -0.07, 0.36, 0.118, { cast: false, ry: -0.08 });
    this.estampaPlano = ep; this.setIcone(icone);
    // pescoço e cabeça
    const neck = this.neck = new THREE.Group(); neck.position.y = 0.53; spine.add(neck);
    cil(neck, pele, 0.046, 0.054, 0.13, 0, 0.035, 0.004, { seg: 20 });
    const head = this.head = new THREE.Group(); head.position.set(0, 0.06, 0.008); head.scale.set(...CAB_ESC); neck.add(head);
    const hc = 0.2, R = 0.24; this.hc = hc; this.R = R;
    esf(head, pele, R, 0, hc, 0, { seg: 48, seg2: 32, s: [1, 1.03, 1] });
    for (const s of [-1, 1]) {                                                                              // orelhas
      esf(head, pele, 0.055, s * (R - 0.004), hc - 0.01, -0.012, { s: [0.5, 1.05, 0.85], seg: 16, seg2: 12 });   // orelhas
      esf(head, peleSom, 0.03, s * (R + 0.014), hc - 0.012, -0.006, { s: [0.3, 0.8, 0.5], seg: 12, seg2: 10 });
    }
    esf(head, pele, 0.02, 0, hc - 0.008, R - 0.004, { s: [0.7, 2.0, 0.85], seg: 14, seg2: 10 });           // ponte do nariz
    esf(head, pele, 0.021, 0, hc - 0.048, R + 0.001, { s: [1.0, 0.85, 1.0], seg: 18, seg2: 12 });          // ponta do nariz
    for (const s of [-1, 1]) esf(head, pele, 0.013, s * 0.021, hc - 0.054, R - 0.009, { s: [1, 0.8, 1], seg: 12, seg2: 8 }); // asas do nariz
    // rosto pintado em canvas (resolução alta) sobre um pedaço de esfera
    this.rosto = tela(512, 384); this.rosto.g.scale(2, 2);
    const fg = new THREE.SphereGeometry(R + 0.003, 40, 24, PI / 2 - 0.9, 1.8, 0.85, 1.3);
    const fm = new THREE.MeshStandardMaterial({ map: this.rosto.t, transparent: true, alphaTest: 0.04, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 });
    mesh(fg, fm, head, 0, hc, 0, { cast: false });
    this.rostoKey = "";
    this.montarCabelo(head, hc, R);
    this.montarBarba(head, hc, R);
    this.montarOculos(head, hc, R);
    this.montarChapeus(head, hc, R);
    // braços: manga curta, braço, antebraço, mão com cinco dedos
    this.dedos = { L: [], R: [] };
    const braco = (lado, nome) => {
      const sh = new THREE.Group(); sh.position.set(0.185 * lado, 0.437, 0); spine.add(sh);
      esf(sh, camisa, 0.054, 0, -0.008, 0, { seg: 24, seg2: 18 });
      cil(sh, camisa, 0.054, 0.05, 0.19, 0, -0.095, 0, { seg: 24 });
      mesh(new THREE.TorusGeometry(0.051, 0.009, 8, 24), camisa, sh, 0, -0.19, 0, { rx: PI / 2 });
      cil(sh, pele, 0.046, 0.04, 0.11, 0, -0.245, 0, { seg: 20 });
      const el = new THREE.Group(); el.position.y = -0.29; sh.add(el);
      esf(el, pele, 0.04, 0, 0, 0, { seg: 18, seg2: 12 });
      cil(el, pele, 0.041, 0.031, 0.25, 0, -0.135, 0, { seg: 20 });
      const hand = new THREE.Group(); hand.position.y = -0.27; el.add(hand);
      esf(hand, pele, 0.031, 0, -0.004, 0, { s: [0.75, 0.7, 1.1], seg: 14, seg2: 10 });                     // punho
      bloco(hand, pele, [-0.0145, -0.09, -0.037], [0.0145, -0.008, 0.037], 0.012);                          // palma
      const lista = this.dedos[nome];
      [[-0.026, 0.036], [-0.0088, 0.042], [0.0088, 0.04], [0.026, 0.032]].forEach(([z, len]) => {
        const p1 = new THREE.Group(); p1.position.set(0, -0.088, z); hand.add(p1);
        caps(p1, pele, 0.0098, len, 0, -len / 2 - 0.004, 0);
        const p2 = new THREE.Group(); p2.position.y = -len - 0.006; p1.add(p2);
        caps(p2, pele, 0.009, len * 0.82, 0, -len * 0.41 - 0.002, 0);
        lista.push({ p1, p2 });
      });
      const t1 = new THREE.Group(); t1.position.set(-lado * 0.012, -0.026, 0.034); t1.rotation.set(0.4, 0, lado * 0.5); hand.add(t1);
      caps(t1, pele, 0.0115, 0.034, 0, -0.022, 0);
      const t2 = new THREE.Group(); t2.position.y = -0.048; t1.add(t2);
      caps(t2, pele, 0.0105, 0.028, 0, -0.016, 0);
      lista.push({ p1: t1, p2: t2, polegar: true });
      return { sh, el, hand };
    };
    this.L = braco(-1, "L"); this.R = braco(1, "R");
    this.cL = this.cR = 0.28;
    // pernas: coxa, joelho, canela, barra da calça e tênis
    const perna = (lado) => {
      const hp = new THREE.Group(); hp.position.set(0.092 * lado, -0.01, 0); hips.add(hp);
      esf(hp, calca, 0.084, 0, -0.02, 0, { seg: 20, seg2: 14 });
      cil(hp, calca, 0.08, 0.058, 0.42, 0, -0.21, 0, { seg: 24 });
      const kn = new THREE.Group(); kn.position.y = -0.42; hp.add(kn);
      esf(kn, calca, 0.058, 0, 0, 0.004, { seg: 18, seg2: 12 });
      cil(kn, calca, 0.057, 0.045, 0.38, 0, -0.19, 0, { seg: 24 });
      mesh(new THREE.TorusGeometry(0.047, 0.01, 8, 20), calca, kn, 0, -0.372, 0, { rx: PI / 2 });
      const ft = new THREE.Group(); ft.position.y = -0.4; kn.add(ft);
      cil(ft, meia, 0.036, 0.04, 0.05, 0, 0.0, 0, { seg: 16 });
      bloco(ft, sap, [-0.048, -0.054, -0.07], [0.048, 0.02, 0.1], 0.03);
      esf(ft, sap, 0.05, 0, -0.028, 0.1, { s: [1, 0.66, 1.2], seg: 18, seg2: 12 });
      bloco(ft, sola, [-0.05, -0.078, -0.073], [0.05, -0.05, 0.162], 0.013);
      bloco(ft, M("#E9EDF2", { r: 0.7 }), [-0.022, 0.01, -0.012], [0.022, 0.024, 0.07], 0.006, { rx: -0.25 });
      return { hp, kn, ft };
    };
    this.PL = perna(-1); this.PR = perna(1);
    sombra(root, true, false);
    // sombra de contato
    const st = tela(64, 64); const gr = st.g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(0,0,0,.45)"); gr.addColorStop(1, "rgba(0,0,0,0)"); st.g.fillStyle = gr; st.g.fillRect(0, 0, 64, 64);
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), new THREE.MeshBasicMaterial({ map: st.t, transparent: true, depthWrite: false }));
    this.blob.rotation.x = -PI / 2; this.blob.position.y = 0.004;
    this.mL = new THREE.Vector3(); this.mR = new THREE.Vector3();
    this.gp = new THREE.Vector3(0, -0.055, 0);
    this.fioA = 0; this.fioV = 0; this.pDy = 0; this.pNod = 0; this.pT = null;
    this.setAparencia(aparencia, acessorio);
  }
  /* --- cabelo: 0 topete, 1 curto, 2 raspado, 3 comprido, 4 cacheado --- */
  montarCabelo(head, hc, R) {
    const cab = this.cab; const cortes = this.cortes = [];
    const capa = (r, th, rx = -0.3, mat = cab) => mesh(new THREE.SphereGeometry(r, 40, 22, 0, TAU, 0, th), mat, null, 0, hc, 0, { rx });
    const nuca = (r, th = 2.15, mat = cab) => mesh(new THREE.SphereGeometry(r, 36, 20, PI * 1.1, PI * 0.8, 0.2, th), mat, null, 0, hc, 0);
    const costeletas = (g) => { for (const s of [-1, 1]) caps(g, cab, 0.015, 0.05, s * 0.226, hc + 0.045, 0.07, { rz: s * 0.1 }); };
    // 0 topete
    let g = new THREE.Group(); g.add(capa(R + 0.018, 1.3)); g.add(nuca(R + 0.007)); costeletas(g);
    const fio = this.fio = new THREE.Group(); fio.position.set(0, hc + 0.2, 0.1); g.add(fio);
    mesh(new THREE.SphereGeometry(0.09, 20, 12), cab, fio, 0.05, 0.0, 0.045, { s: [1.55, 0.62, 1.15], rz: -0.18 });
    mesh(new THREE.SphereGeometry(0.08, 20, 12), cab, fio, -0.045, -0.005, 0.03, { s: [1.35, 0.55, 1.0], rz: 0.15 });
    mesh(new THREE.SphereGeometry(0.065, 16, 10), cab, fio, 0.12, -0.025, -0.01, { s: [1.3, 0.5, 1.0], rz: -0.5 });
    cortes.push(g);
    // 1 curto (franja baixa)
    g = new THREE.Group(); g.add(capa(R + 0.014, 1.32)); g.add(nuca(R + 0.006)); costeletas(g);
    mesh(new THREE.SphereGeometry(0.1, 20, 12), cab, g, 0.03, hc + 0.19, 0.11, { s: [1.5, 0.36, 1.0], rz: -0.12, rx: 0.35 });
    cortes.push(g);
    // 2 raspado
    g = new THREE.Group(); g.add(capa(R + 0.005, 1.34, -0.3, this.cabRaspado)); g.add(nuca(R + 0.004, 2.1, this.cabRaspado));
    cortes.push(g);
    // 3 comprido (até os ombros)
    g = new THREE.Group(); g.add(capa(R + 0.02, 1.32)); g.add(mesh(new THREE.SphereGeometry(R + 0.016, 36, 24, PI * 0.95, PI * 1.1, 0.2, 2.45), cab, null, 0, hc, 0));
    for (const s of [-1, 1]) caps(g, cab, 0.045, 0.32, s * (R - 0.02), hc - 0.26, -0.03, { rz: -s * 0.06, s: [0.7, 1, 1.1] });
    caps(g, cab, 0.17, 0.26, 0, hc - 0.24, -0.11, { s: [1.3, 1, 0.55] });
    mesh(new THREE.SphereGeometry(0.1, 20, 12), cab, g, -0.06, hc + 0.18, 0.12, { s: [1.6, 0.4, 1.0], rz: 0.25, rx: 0.3 });
    cortes.push(g);
    // 4 cacheado
    g = new THREE.Group(); g.add(capa(R + 0.02, 1.36)); g.add(nuca(R + 0.01, 2.0));
    for (let i = 0; i < 34; i++) {
      const th = 0.15 + (i % 7) / 7 * 1.15 + ruido(i) * 0.12, ph = i * 2.399;
      if (th > 0.95 && Math.cos(ph) > 0.35) continue;   // deixa a testa livre
      const r = R + 0.035; const x = r * Math.sin(th) * Math.sin(ph), y = r * Math.cos(th) - 0.04 * th, z = r * Math.sin(th) * Math.cos(ph) - 0.02;
      esf(g, cab, 0.052 + ruido(i + 3) * 0.02, x, hc + y, z, { seg: 10, seg2: 8 });
    }
    cortes.push(g);
    cortes.forEach((c) => { c.visible = false; head.add(c); });
  }
  montarBarba(head, hc, R) {
    const b = this.barbas = [null];
    const barba = this.barbaMat = new THREE.MeshStandardMaterial({ color: AP.c[this.ap.c], roughness: 1 });
    const bigode = (g) => { for (const s of [-1, 1]) caps(g, barba, 0.0085, 0.045, s * 0.027, hc - 0.077, R - 0.014, { rz: PI / 2 + s * 0.25, s: [1, 1, 0.6] }); };
    let g = new THREE.Group(); bigode(g); esf(g, barba, 0.026, 0, hc - 0.165, R - 0.05, { s: [1, 1.15, 0.45], seg: 14, seg2: 10 }); b.push(g);
    g = new THREE.Group(); bigode(g);
    mesh(new THREE.SphereGeometry(R + 0.006, 40, 16, PI / 2 - 1.3, 2.6, 2.03, 0.8), barba, g, 0, hc, 0);
    
    b.push(g);
    b.forEach((x) => { if (x) { x.visible = false; head.add(x); } });
  }
  montarOculos(head, hc, R) {
    const g = this.oculos = new THREE.Group(); const aro = M("#1F2937", { r: 0.35, m: 0.3 });
    this.lente = new THREE.MeshStandardMaterial({ color: "#0B1220", roughness: 0.15, metalness: 0.4, transparent: true, opacity: 0.85 });
    const ex = 0.104, ey = hc + 0.005, ez = R + 0.03;
    for (const s of [-1, 1]) {
      mesh(new THREE.TorusGeometry(0.052, 0.006, 8, 28), aro, g, s * ex, ey, ez, { ry: s * 0.18 });
      const l = mesh(new THREE.CircleGeometry(0.05, 24), this.lente, g, s * ex, ey, ez - 0.002, { ry: s * 0.18, cast: false }); l.name = "lente";
      bloco(g, aro, [-0.006, -0.008, -0.2], [0.006, 0.008, 0], 0.003).position.set(s * (R + 0.012), ey + 0.01, ez - 0.12);
      bloco(g, aro, [-0.05, -0.007, -0.006], [0.05, 0.007, 0.006], 0.003).position.set(s * (ex + 0.098), ey + 0.008, ez - 0.012);   // dobradiça até a haste
    }
    cil(g, aro, 0.005, 0.005, 0.07, 0, ey + 0.008, ez + 0.006, { rz: PI / 2 });
    g.visible = false; head.add(g);
  }
  montarChapeus(head, hc, R) {
    const h = this.chapeus = {};
    // boné
    let g = new THREE.Group(); const azul = M("#2563EB", { r: 0.7 });
    mesh(new THREE.SphereGeometry(R + 0.035, 36, 16, 0, TAU, 0, 1.3), azul, g, 0, hc + 0.01, -0.01, { rx: -0.18 });
    bloco(g, azul, [-0.15, -0.01, 0], [0.15, 0.01, 0.2], 0.01, { rx: 0.18 }).position.set(0, hc + 0.12, 0.19);
    esf(g, M("#1E3A8A"), 0.025, 0, hc + R + 0.03, -0.02, { seg: 10, seg2: 8 });
    h.a_bone = g;
    // capelo
    g = new THREE.Group(); const preto = M("#111827", { r: 0.6 });
    cil(g, preto, R + 0.03, R + 0.03, 0.12, 0, hc + 0.16, 0, { seg: 36 });
    bloco(g, preto, [-0.34, -0.012, -0.34], [0.34, 0.012, 0.34], 0.01, { ry: PI / 4 }).position.set(0, hc + 0.23, 0);
    cil(g, M("#F5B400", { r: 0.4 }), 0.008, 0.008, 0.2, 0.2, hc + 0.13, 0.12, { rz: 0.1 });
    h.a_formatura = g;
    // coroa
    g = new THREE.Group(); const ouro = M("#F5B400", { r: 0.25, m: 0.85 });
    cil(g, ouro, R * 0.82, R * 0.86, 0.1, 0, hc + 0.22, 0, { seg: 36 });
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; mesh(new THREE.ConeGeometry(0.04, 0.11, 10), ouro, g, Math.sin(a) * R * 0.8, hc + 0.31, Math.cos(a) * R * 0.8); esf(g, M(i % 2 ? "#DC2626" : "#2563EB", { r: 0.2, m: 0.3 }), 0.024, Math.sin(a) * R * 0.86, hc + 0.22, Math.cos(a) * R * 0.86, { seg: 10, seg2: 8 }); }
    h.a_cartola = g;
    Object.values(h).forEach((x) => { x.visible = false; head.add(x); });
  }
  setAparencia(v, acessorio) {
    const ap = this.ap = lerAp(v);
    this.pele.color.set(AP.p[ap.p]); this.peleSom.color.set(misturaCor(AP.p[ap.p], "#7A3B22", 0.12));
    this.cab.color.set(AP.c[ap.c]); if (this.barbaMat) this.barbaMat.color.set(misturaCor(AP.c[ap.c], AP.p[ap.p], 0.12)); this.cabRaspado.color.set(misturaCor(AP.c[ap.c], AP.p[ap.p], 0.45)); this.calca.color.set(AP.l[ap.l]);
    this.cortes.forEach((c, i) => { c.visible = i === ap.k; });
    this.barbas.forEach((b, i) => { if (b) b.visible = i === ap.b; });
    const chapeu = this.chapeus[acessorio] ? acessorio : "";
    Object.entries(this.chapeus).forEach(([k, g]) => { g.visible = k === chapeu; });
    // com chapéu, o topete e os cachos de cima ficam escondidos
    if (this.fio) this.fio.visible = !chapeu;
    const escuros = acessorio === "a_oculos";
    this.oculos.visible = escuros || ap.o === 1;
    this.lente.opacity = escuros ? 0.88 : 0.12; this.lente.color.set(escuros ? "#0B1220" : "#DCEBFF");
    this.rostoKey = "";
  }
  setCor(cor) {
    const c = cor || "#2457F5"; this.camisa.color.set(c);
    if (this.gola) this.gola.color.set(c).lerp(new THREE.Color("#FFFFFF"), 0.16);
  }
  setIcone(n) {
    const { g, t } = this.estampa; g.clearRect(0, 0, 128, 128);
    const ok = !!(n && typeof window !== "undefined" && window.RI && window.RI.tem(n + ":f"));
    if (ok) window.RI.desenhar(g, n + ":f", 64, 64, 104, "rgba(255,255,255,.92)");
    this.estampaPlano.visible = ok; t.needsUpdate = true;
  }
  // p: pose; T: tempo (s); dt: delta (s). Camada procedural por cima da pose: respiração, balanço, topete e dedos.
  aplicar(p, T = 0, dt = 0) {
    const resp = Math.sin(T * 1.75), resp2 = Math.sin(T * 1.75 - 0.7);
    const calmo = Math.sin(T * 0.43) * 0.6 + Math.sin(T * 0.97 + 1.3) * 0.4;
    const mov = 1 - cl(Math.abs(p.dy) * 4 + Math.abs(p.hz) * 4, 0, 0.6);
    this.hips.position.set(0.004 * calmo * mov, p.alt + p.dy + 0.0025 * resp, p.hz);
    this.spine.rotation.set(p.lean + 0.012 * resp2, p.twist + 0.02 * calmo * mov, p.side + 0.008 * calmo * mov);
    this.torso.scale.set(1.05 * (1 + 0.01 * resp), 1 + 0.007 * resp, 0.72 * (1 + 0.022 * resp));
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
    // pegada das mãos por objeto
    this.L.hand.rotation.set(item === "tacoShot" ? 0.22 : item === "controle" ? -0.08 : 0, 0, item === "tacoV" ? 0.1 : item === "tacoShot" ? -0.2 : item === "controle" ? 0.12 : 0);
    this.R.hand.rotation.set(item === "xicara" ? 0.18 : item === "tacoShot" ? -0.22 : item === "nota" ? -0.12 : 0, item === "xicara" ? -0.12 : 0, item === "controle" ? -0.12 : item === "tacoShot" ? 0.18 : item === "nota" ? -0.1 : 0);
    // dedos: fechados ao segurar, abertos na comemoração, relaxados no resto
    const segL = item === "controle" || item === "tacoShot" || item === "tacoV", segR = item === "controle" || item === "tacoShot" || item === "xicara" || item === "nota";
    const alvoL = segL ? 0.95 : p.aL[0] > 2.2 ? 0.1 : 0.32 + 0.05 * Math.sin(T * 0.8);
    const alvoR = segR ? 0.95 : p.aR[0] > 2.2 ? 0.1 : 0.32 + 0.05 * Math.sin(T * 0.8 + 1);
    const k = dt > 0 ? Math.min(1, dt * 12) : 1;
    this.cL += (alvoL - this.cL) * k; this.cR += (alvoR - this.cR) * k;
    for (const [lado, lista, c] of [[-1, this.dedos.L, this.cL], [1, this.dedos.R, this.cR]]) {
      lista.forEach((d, i) => {
        if (d.polegar) { d.p1.rotation.z = lado * 0.5 - lado * c * 0.35; d.p2.rotation.z = -lado * c * 0.6; return; }
        const f = 1 + (i - 1.5) * 0.06;
        d.p1.rotation.z = -lado * c * 1.05 * f; d.p2.rotation.z = -lado * c * 1.25 * f;
      });
    }
    // topete: mola amortecida movida pela cabeça subindo/descendo e balançando
    if (dt > 0 && this.pT !== null) {
      const d = Math.min(dt, 0.05);
      const f = -(p.dy - this.pDy) / d * 5 - (p.nod - this.pNod) / d * 0.5;
      this.fioV += (f - 90 * this.fioA - 9 * this.fioV) * d; this.fioA = cl(this.fioA + this.fioV * d, -0.4, 0.4);
    }
    this.pDy = p.dy; this.pNod = p.nod; this.pT = T;
    this.fio.rotation.x = this.fioA + 0.02 * resp; this.fio.rotation.z = 0.02 * calmo;
    this.root.updateMatrixWorld(true);
    this.L.hand.localToWorld(this.mL.copy(this.gp)); this.R.hand.localToWorld(this.mR.copy(this.gp));
  }
  desenharRosto(p, T) {
    // piscada natural (às vezes dupla) e micro-movimentos do olhar
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
    const ox = p.olhar[0] * 4 + sx, oy = p.olhar[1] * 2.6 + sy;
    const key = [olhos, p.boca, p.sob, Math.round(p.boch * 10), Math.round(p.abre * 8), Math.round(ox * 4), Math.round(oy * 4), lagr, lid].join("|");
    if (key === this.rostoKey) return; this.rostoKey = key;
    const { g, t } = this.rosto;
    g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 512, 384); g.restore();
    // a cabeça é mais estreita que alta: desenha esticado na horizontal para compensar
    g.save(); g.translate(128, 0); g.scale(ESTICA, 1); g.translate(-128, 0);
    const pele = AP.p[this.ap.p], cabelo = AP.c[this.ap.c];
    const escura = this.ap.p >= 4;
    const cx = 128, ey = 103, dx = 47, tom = escura ? "#160C07" : "#2A1810";
    const somb = escura ? "rgba(20,8,4,.22)" : "rgba(120,60,35,.14)";
    g.lineCap = "round"; g.lineJoin = "round";
    // profundidade: órbitas dos olhos, sulco sob o nariz
    for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * dx, ey - 2, 4, cx + s * dx, ey - 2, 30); gr.addColorStop(0, somb); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * dx, ey - 2, 30, 20, 0, 0, TAU); g.fill(); }
    // bochechas
    if (p.boch > 0.03) for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * 62, 136, 1, cx + s * 62, 136, 24); gr.addColorStop(0, `rgba(235,95,95,${0.42 * p.boch})`); gr.addColorStop(1, "rgba(235,95,95,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * 62, 136, 24, 13, 0, 0, TAU); g.fill(); }
    // sobrancelhas
    const triste = p.sob === "triste" || (!p.sob && p.boca === "triste"), tenso = p.sob === "tenso";
    const surpr = (p.boca === "aberta" || p.boca === "o") ? 4 * cl(p.abre, 0, 1) : 0, alegre = p.boca === "sorriso" || olhos === "F" ? 2 : 0;
    const by = ey - 24, bi = by + (triste ? -6 : tenso ? 5 : 0), bo = by + (triste ? 6 : tenso ? -3 : -2);
    for (const s of [-1, 1]) {
      const xi = cx + s * 15, xo = cx + s * (dx + 25), yi = bi - surpr - alegre * 0.3, yo = bo - surpr - alegre, ym = Math.min(yi, yo) - 4 + (tenso ? 2.5 : 0);
      g.fillStyle = misturaCor(cabelo, "#000000", 0.25); g.beginPath(); g.moveTo(xi, yi + 1.5); g.quadraticCurveTo((xi + xo) / 2, ym - 1.5, xo, yo + 1); g.quadraticCurveTo((xi + xo) / 2, ym + 4, xi, yi + 7.5); g.closePath(); g.fill();
    }
    // olhos: amendoados, íris, pupila, brilho, pálpebra e cílios
    const ew = 18, eh = 10.5;
    const amendoa = (x, y, h) => { g.beginPath(); g.moveTo(x - ew, y + 1); g.bezierCurveTo(x - ew * 0.55, y - h * 1.15, x + ew * 0.45, y - h * 1.2, x + ew, y - 1); g.bezierCurveTo(x + ew * 0.5, y + h * 0.95, x - ew * 0.5, y + h * 0.95, x - ew, y + 1); g.closePath(); };
    for (const s of [-1, 1]) {
      const x = cx + s * dx;
      // vinco da pálpebra
      g.strokeStyle = escura ? "rgba(10,4,2,.35)" : "rgba(110,55,35,.3)"; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x - ew + 3, ey - 6); g.quadraticCurveTo(x, ey - eh * 1.95, x + ew - 2, ey - 8); g.stroke();
      if (olhos === "A" || olhos === "F") {
        const h = olhos === "F" ? eh * 0.48 : eh * (1 - lid * 0.98), yy = olhos === "F" ? ey + 2 : ey;
        g.save(); amendoa(x, yy, Math.max(h, 0.6)); g.clip();
        g.fillStyle = "#F7F3EE"; g.fillRect(x - ew - 2, yy - eh * 1.4, ew * 2 + 4, eh * 2.8);
        const ix = x + ox, iy = yy + oy + 0.5, ir = g.createRadialGradient(ix, iy, 1, ix, iy, 8.6); ir.addColorStop(0, "#7A4A28"); ir.addColorStop(0.65, "#4E2C17"); ir.addColorStop(1, "#24130A");
        g.fillStyle = ir; g.beginPath(); g.arc(ix, iy, 8.6, 0, TAU); g.fill();
        g.fillStyle = "#0B0604"; g.beginPath(); g.arc(ix, iy, 3.9, 0, TAU); g.fill();
        g.fillStyle = "rgba(255,255,255,.95)"; g.beginPath(); g.arc(ix - 2.6, iy - 3, 2.3, 0, TAU); g.fill();
        g.fillStyle = "rgba(0,0,0,.18)"; g.fillRect(x - ew - 2, yy - eh * 1.4, ew * 2 + 4, 5);
        g.restore();
        g.strokeStyle = tom; g.lineWidth = 3.2; g.beginPath(); g.moveTo(x - ew, yy + 1); g.bezierCurveTo(x - ew * 0.55, yy - Math.max(h, 0.6) * 1.15, x + ew * 0.45, yy - Math.max(h, 0.6) * 1.2, x + ew, yy - 1); g.stroke();
        g.lineWidth = 2; g.beginPath(); g.moveTo(x + s * ew * 0.92, yy - 1.5); g.lineTo(x + s * (ew + 4.5), yy - 5); g.stroke();
        g.strokeStyle = escura ? "rgba(10,4,2,.3)" : "rgba(140,70,50,.3)"; g.lineWidth = 1.4; g.beginPath(); g.moveTo(x - ew + 2, yy + 2); g.bezierCurveTo(x - ew * 0.5, yy + h * 0.95 + 1, x + ew * 0.5, yy + h * 0.95 + 1, x + ew - 1, yy); g.stroke();
        if (olhos === "F") { g.strokeStyle = escura ? "rgba(10,4,2,.25)" : "rgba(150,75,50,.28)"; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x - 10, yy + 9); g.quadraticCurveTo(x, yy + 13, x + 10, yy + 9); g.stroke(); }
      } else {
        g.strokeStyle = tom; g.lineWidth = 3.2; g.beginPath(); g.moveTo(x - ew, ey + 1); g.quadraticCurveTo(x, ey + 6, x + ew, ey); g.stroke();
        g.lineWidth = 1.6; for (const a of [-0.7, -0.15, 0.4, 0.85]) { const bx = x + a * ew; g.beginPath(); g.moveTo(bx, ey + 4 - Math.abs(a) * 2); g.lineTo(bx + s * 1.2, ey + 7.5 - Math.abs(a) * 2); g.stroke(); }
      }
    }
    // narinas e sombra do nariz
    g.fillStyle = escura ? "rgba(10,4,2,.4)" : "rgba(120,55,35,.32)";
    for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * 6.5, 140, 3.4, 1.9, s * 0.35, 0, TAU); g.fill(); }
    const sn = g.createRadialGradient(cx, 146, 1, cx, 146, 12); sn.addColorStop(0, somb); sn.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = sn; g.beginPath(); g.ellipse(cx, 147, 12, 5, 0, 0, TAU); g.fill();
    // boca com lábios
    const my = 160, labS = misturaCor(pele, "#8E2F2B", escura ? 0.35 : 0.42), labI = misturaCor(pele, "#B5524A", escura ? 0.28 : 0.36), linha = misturaCor(pele, "#3A0F0C", 0.7), int = "#4A1216";
    const lab = (w, up, down) => { // lábios fechados: up/down = curvatura dos cantos (+ sorri, - triste)
      g.fillStyle = labS; g.beginPath(); g.moveTo(cx - w, my - up); g.quadraticCurveTo(cx - w * 0.45, my - 5.5, cx, my - 3.2); g.quadraticCurveTo(cx + w * 0.45, my - 5.5, cx + w, my - up); g.quadraticCurveTo(cx, my + 1 - up * 0.3, cx - w, my - up); g.fill();
      g.fillStyle = labI; g.beginPath(); g.moveTo(cx - w + 2, my - up + 0.5); g.quadraticCurveTo(cx, my + 1.5 - up * 0.3, cx + w - 2, my - up + 0.5); g.quadraticCurveTo(cx, my + 9 + down - up * 0.3, cx - w + 2, my - up + 0.5); g.fill();
      g.strokeStyle = linha; g.lineWidth = 1.8; g.beginPath(); g.moveTo(cx - w, my - up); g.quadraticCurveTo(cx, my + 1.2 - up * 0.3, cx + w, my - up); g.stroke();
      g.fillStyle = "rgba(255,255,255,.18)"; g.beginPath(); g.ellipse(cx, my + 4.2 + down * 0.5, 6, 1.4, 0, 0, TAU); g.fill();
    };
    const aberta = (w, h, up) => {
      const forma = () => { g.beginPath(); g.moveTo(cx - w, my - up); g.quadraticCurveTo(cx, my - 4 - up * 0.2, cx + w, my - up); g.quadraticCurveTo(cx + w * 0.7, my + h, cx, my + h); g.quadraticCurveTo(cx - w * 0.7, my + h, cx - w, my - up); g.closePath(); };
      forma(); g.fillStyle = int; g.fill();
      g.save(); forma(); g.clip(); g.fillStyle = "#FAF6F0"; g.fillRect(cx - w, my - 8, w * 2, 6.5 + Math.min(h, 14) * 0.12);
      g.fillStyle = "#C9575E"; g.beginPath(); g.ellipse(cx, my + h * 0.95, w * 0.5, Math.max(3, h * 0.4), 0, 0, TAU); g.fill(); g.restore();
      g.strokeStyle = labS; g.lineWidth = 3.4; forma(); g.stroke();
      g.strokeStyle = labI; g.lineWidth = 3.8; g.beginPath(); g.moveTo(cx - w * 0.75, my + h * 0.82); g.quadraticCurveTo(cx, my + h + 2.5, cx + w * 0.75, my + h * 0.82); g.stroke();
    };
    switch (p.boca) {
      case "sorriso": {
        aberta(25, 13, 5);
        g.strokeStyle = escura ? "rgba(10,4,2,.3)" : "rgba(140,70,50,.32)"; g.lineWidth = 1.8; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * 22, 141); g.quadraticCurveTo(cx + s * 33, 152, cx + s * 30, 164); g.stroke(); }
        break;
      }
      case "leve": lab(20, 2.4, 0); break;
      case "reta": lab(18, 0, 0); break;
      case "triste": lab(18, -3.6, 1); break;
      case "foco": { lab(16, 0.5, -1); g.strokeStyle = linha; g.lineWidth = 1.6; g.beginPath(); g.moveTo(cx + 16, my - 0.5); g.lineTo(cx + 19, my - 2.5); g.stroke(); break; }
      case "o": { const h = 5 + 7 * p.abre; g.fillStyle = int; g.beginPath(); g.ellipse(cx, my + 3, 7.5, h, 0, 0, TAU); g.fill(); g.lineWidth = 3.4; g.strokeStyle = labS; g.stroke(); break; }
      default: aberta(22, 6 + 22 * p.abre, 2);
    }
    if (lagr >= 0) { const k = lagr / 24; g.fillStyle = `rgba(120,180,250,${0.9 * (1 - k)})`; const x = cx - dx - 12, y = ey + 10 + k * 60; g.beginPath(); g.moveTo(x, y - 7); g.quadraticCurveTo(x + 6, y + 3, x, y + 4.5); g.quadraticCurveTo(x - 6, y + 3, x, y - 7); g.fill(); }
    g.restore();
    t.needsUpdate = true;
  }
}

/* ---------- poses ---------- */
const P = (o) => { const r = { ...POSE0, ...o }; for (const k of ARR) r[k] = (o[k] || POSE0[k]).slice(); return r; };
function emPe(T, o = {}) {
  const r = P(o); const b = Math.sin(T * 1.8);
  r.lean += 0.012 * b; r.side += 0.018 * Math.sin(T * 0.37); if (!o.aL) r.aL = [0.05 + 0.03 * b, 0.09, 0.3]; if (!o.aR) r.aR = [0.05 + 0.03 * b, 0.09, 0.3];
  if (!o.lL) r.lL = [0.02, 0.04]; if (!o.lR) r.lR = [0.02, 0.04];
  return r;
}
const SENT = [1.25, 1.4];
// sentado: antebraços apoiados nas coxas quando a pose não diz o que fazer com os braços
function sentado(T, alt, o = {}) { const b = Math.sin(T * 1.8); const r = P({ alt, lL: SENT, lR: SENT, aL: [0.62 + 0.02 * b, -0.08, 0.98], aR: [0.6 + 0.02 * b, -0.08, 1.0], ...o }); r.lean += 0.04 + 0.01 * b; return r; }
function andar(dist, est, T) {
  const corre = est === "corre", tri = est === "triste";
  const passo = corre ? 1.3 : tri ? 0.72 : 0.95, amp = corre ? 0.62 : tri ? 0.3 : 0.44;
  const ph = (dist / passo) * TAU, s = Math.sin(ph), c = Math.cos(ph);
  const kb = corre ? 1.25 : 0.75;
  const r = P({
    lL: [amp * s, 0.12 + kb * Math.max(0, c)], lR: [-amp * s, 0.12 + kb * Math.max(0, -c)],
    aL: [-amp * 0.85 * s, 0.12, (corre ? 1.3 : 0.3) + 0.15 * Math.max(0, -s)], aR: [amp * 0.85 * s, 0.12, (corre ? 1.3 : 0.3) + 0.15 * Math.max(0, s)],
    lean: corre ? 0.22 : tri ? 0.16 : 0.05, twist: 0.1 * s, turn: -0.12 * s, side: 0.03 * c, nod: tri ? 0.45 : 0.04 * Math.abs(c), boca: tri ? "triste" : corre ? "aberta" : "leve",
  });
  r.alt = 0.07 + 0.82 * Math.cos(amp * Math.abs(s)) + (corre ? 0.05 * Math.abs(c) : 0);
  return r;
}
function mistura(a, b, w) {
  if (w >= 1) return b; if (w <= 0) return a;
  const r = { ...b };
  for (const k of NUM) r[k] = lerp(a[k] ?? POSE0[k], b[k] ?? POSE0[k], w);
  for (const k of ARR) r[k] = (a[k] || POSE0[k]).map((v, i) => lerp(v, (b[k] || POSE0[k])[i], w));
  if (w < 0.5) for (const k of DISC) r[k] = a[k];
  return r;
}

/* ---------- lugares (x, z, yaw) ---------- */
const SOFA_S = [3.2, 3.0, PI], SOFA_P = [3.2, 2.3, PI];
const CAD_S = [6.8, 1.36, PI], CAD_P = [6.8, 1.95, PI];
const POL_S = [0.92, 3.2, PI / 4], POL_P = [1.36, 3.64, PI / 4];
const JAN_P = [0.62, 1.85, -PI / 2], CAFE_P = [0.98, 4.9, -PI / 2];
const POCKET = [5.78, 4.98];
const SIN_XZ = [8.55, 3.62], SIN_P = [...SIN_XZ, yawPara(SIN_XZ, POCKET) + 0.06];
const MON_XZ = [7.45, 1.95], MON_P = [...MON_XZ, yawPara(MON_XZ, [6.8, 0.3])];
const DAN_P = [3.4, 5.25, PI / 4];
const A = (vel, via, x = {}) => ({ tipo: "andar", vel, via, ...x });
const F = (dur, pose, x = {}) => ({ tipo: "acao", dur, pose, ...x });

// sentar/levantar: mistura pose em pé ↔ sentado com um leve impulso do tronco
const sentarDe = (pe, sent) => (k, tl, T) => { const w = suave(k); const r = mistura(pe(T), sent(T), w); r.lean += 0.35 * Math.sin(PI * k); return r; };
const levantarDe = (pe, sent) => (k, tl, T) => { const w = 1 - suave(k); const r = mistura(pe(T), sent(T), w); r.lean += 0.4 * Math.sin(PI * k); return r; };

// jogada de sinuca: posição, tacadas de ensaio, tacada e bola na caçapa
const TACADA = 4.05;
function poseTacada(tl, T) {
  const w = suave(fase(tl, 0, 1.0)) * (1 - suave(fase(tl, 5.0, 5.6)));
  let back = 0;   // 0 = taco à frente, 1 = recuado
  if (tl > 1.1 && tl < 3.5) back = 0.5 - 0.5 * Math.cos((tl - 1.1) * TAU * 0.75);
  else if (tl >= 3.5 && tl < 3.85) back = suave(fase(tl, 3.5, 3.85));
  else if (tl >= 3.85 && tl < TACADA) back = 1 - io(fase(tl, 3.85, TACADA));
  else back = 0;
  const r = emPe(T, {
    lean: 0.9 * w, hz: -0.12 * w, nod: -0.55 * w, alt: 0.89 - 0.1 * w,
    aL: [lerp(0, 1.35, w), lerp(0.12, -0.12, w), lerp(0.2, 0.15, w)],
    aR: [lerp(0, 0.1 + 0.55 * (1 - back), w), lerp(0.12, 0.05, w), lerp(0.2, 1.45 + 0.75 * back, w)],
    lL: [0.32 * w, 0.18 * w], lR: [-0.12 * w, 0.06 * w], olhar: [0, -1.2 * w], boca: "foco", item: w > 0.3 ? "tacoShot" : "tacoV",
  });
  r.bolas = tl < TACADA ? "ini" : "jogo"; return r;
}
function poseFesta(tt, T) {
  const r = emPe(T, { olhos: "F", boca: "aberta", boch: 0.8 });
  r.abre = 0.6 + 0.4 * Math.abs(Math.sin(T * 6));
  if (tt < 0.3) { const k = io(fase(tt, 0, 0.3)); r.alt = 0.89 - 0.12 * k; r.lL = [0.5 * k, 1.0 * k]; r.lR = [0.5 * k, 1.0 * k]; r.aL = [0.3 * k, 0.4, 0.6]; r.aR = [0.3 * k, 0.4, 0.6]; }
  else if (tt < 0.85) { const k = fase(tt, 0.3, 0.85); r.dy = 0.55 * 4 * k * (1 - k); const up = sai(fase(tt, 0.3, 0.45)); r.aL = [lerp(0.3, 2.9, up), 0.45, 0.2]; r.aR = [lerp(0.3, 2.9, up), 0.45, 0.2]; r.lL = [0.35 * Math.sin(PI * k), 0.8 * Math.sin(PI * k)]; r.lR = [0.35 * Math.sin(PI * k), 0.8 * Math.sin(PI * k)]; }
  else if (tt < 1.05) { const k = Math.sin(PI * fase(tt, 0.85, 1.05)); r.alt = 0.89 - 0.1 * k; r.lL = [0.4 * k, 0.8 * k]; r.lR = [0.4 * k, 0.8 * k]; r.aL = [2.9, 0.45, 0.2]; r.aR = [2.9, 0.45, 0.2]; }
  else {
    const k = (tt - 1.05) / 0.62, lado = Math.floor(k) % 2 ? 1 : -1, f = k % 1, b = Math.sin(PI * f);
    r.dy = 0.08 * b; r.side = lado * 0.16 * b; r.twist = lado * 0.25 * b; r.turn = -lado * 0.3 * b; r.roll = lado * 0.15 * b;
    r.aL = lado > 0 ? [2.8, 0.5, 0.3] : [1.2, -0.1, 1.6]; r.aR = lado > 0 ? [1.2, -0.1, 1.6] : [2.8, 0.5, 0.3];
    r.lL = [lado < 0 ? 0.5 * b : 0, lado < 0 ? 0.9 * b : 0.1]; r.lR = [lado > 0 ? 0.5 * b : 0, lado > 0 ? 0.9 * b : 0.1];
    if (tt < 1.3) { const w = suave(fase(tt, 1.05, 1.3)); r.aL = r.aL.map((v, i) => lerp([2.9, 0.45, 0.2][i], v, w)); r.aR = r.aR.map((v, i) => lerp([2.9, 0.45, 0.2][i], v, w)); }
  }
  return r;
}

const ROTEIROS = {
  tranquilo: { inicio: SOFA_S, padrao: { boca: "leve", boch: 0.15 }, passos: [
    F(16, (k, tl, T) => {
      const curva = Math.sin(tl * 0.9) * 0.08 + Math.sin(tl * 2.3) * 0.03;
      const yes = jan(tl, 6.2, 7.5) + jan(tl, 12.6, 13.6);
      const tap = (x) => Math.max(0, Math.sin(T * 10 + x)) * 0.12;
      const base = [0.85, -0.22, 1.25];
      return sentado(T, 0.62, { lean: -0.1 + curva * 0.3 - 0.08 * yes, side: curva, nod: 0.15 - 0.25 * yes, turn: curva * 0.6,
        aL: [lerp(base[0] + tap(0), 2.7, yes), lerp(base[1], 0.5, yes), lerp(base[2], 0.4, yes)], aR: [lerp(base[0] + tap(2), 2.7, yes), lerp(base[1], 0.5, yes), lerp(base[2], 0.4, yes)],
        item: "controle", boca: yes > 0.4 ? "aberta" : "foco", olhos: yes > 0.5 ? "F" : "A", boch: 0.15 + 0.5 * yes, dy: 0.04 * yes * Math.abs(Math.sin(tl * 9)) });
    }, { tv: "jogo" }),
    F(1.2, levantarDe((T) => emPe(T), (T) => sentado(T, 0.62, { lean: -0.1 })), { ate: SOFA_P }),
    F(3.0, (k, tl, T) => { const w = jan(tl, 0.1, 2.8, 0.6); return emPe(T, { aL: [2.95 * w, 0.25, 0.3], aR: [2.95 * w, 0.25, 0.3], lean: -0.12 * w, side: Math.sin(tl * 2.2) * 0.12 * w, nod: -0.2 * w, olhos: w > 0.5 ? "Z" : "A", boca: w > 0.5 ? "o" : "leve", dy: 0.03 * w }); }),
    A(1.15, [[1.65, 2.3], [1.65, 4.25], [CAFE_P[0], CAFE_P[1]]]),
    F(5.0, (k, tl, T) => { const w = jan(tl, 0.3, 4.6, 0.5); const m = Math.sin(tl * 3) * 0.1 * fase(tl, 1, 3);
      return emPe(T, { aL: [1.0 * w, -0.1, 1.0 * w], aR: [(1.05 + m) * w, -0.12, 0.9 * w], lean: 0.08 * w, nod: 0.25 * w, olhar: [0, 1] }); }),
    F(4.6, (k, tl, T) => { const g = jan(tl, 0.8, 2.0, 0.35) + jan(tl, 2.9, 3.9, 0.35);
      return emPe(T, { aR: [0.6 + 0.7 * g, -0.25, 1.75 + 0.35 * g], nod: -0.3 * g, olhos: g > 0.5 ? "Z" : "A", boca: g > 0.5 ? "reta" : "sorriso", boch: 0.35, item: "xicara" }); }, { ate: [CAFE_P[0], CAFE_P[1], PI / 3] }),
    A(1.1, [[1.65, 4.25], [1.65, 2.3], [SOFA_P[0], SOFA_P[1]]], { item: "xicara" }),
    F(1.2, sentarDe((T) => emPe(T, { aR: [0.6, -0.25, 1.75] }), (T) => sentado(T, 0.62, { lean: -0.1, aR: [0.6, -0.25, 1.75] })), { ate: SOFA_S, item: "xicara" }),
    F(2.2, (k, tl, T) => { const w = jan(tl, 0.1, 2.1, 0.5); return sentado(T, 0.62, { lean: -0.1 + 0.35 * w, aR: [lerp(0.6, 0.95, w), -0.2, lerp(1.75, 0.9, w)], aL: [0.4 * w, 0.0, 0.8 * w], item: tl < 1.1 ? "xicara" : "controle" }); }),
  ] },
  feliz: { inicio: SIN_P, padrao: { boca: "sorriso", boch: 0.35 }, passos: [
    F(3.2, (k, tl, T) => { const r = Math.sin(tl * 9) * 0.12 * jan(tl, 0.4, 2.8); return emPe(T, { aL: [0.75, 0.05, 1.05], aR: [1.95 + r, -0.45, 1.05], nod: -0.3, olhar: [0, -1.5], item: "tacoV", boca: "leve" }); }, { bolas: "ini" }),
    F(5.6, (k, tl, T) => poseTacada(tl, T)),
    F(3.0, (k, tl, T) => { const pump = Math.abs(Math.sin(tl * PI / 0.42)) * jan(tl, 0.2, 2.8, 0.3); const up = jan(tl, 0, 2.9, 0.35);
      return emPe(T, { aL: [0.55, 0.05, 1.2], aR: [lerp(0, 2.5 + 0.35 * pump, up), 0.25, lerp(0.2, 0.9 - 0.5 * pump, up)], dy: 0.03 * pump, lean: -0.06 * up, nod: -0.15 * up, olhos: up > 0.5 ? "F" : "A", boca: up > 0.3 ? "aberta" : "sorriso", boch: 0.7, item: "tacoV", bolas: "fim" }); }),
    A(1.25, [[8.65, 2.55], [MON_P[0], MON_P[1]]], { item: "tacoV", bolas: "fim" }),
    F(4.6, (k, tl, T) => { const up = jan(tl, 1.4, 3.6, 0.4); const nod = Math.sin(tl * 6) * 0.1 * jan(tl, 0.3, 1.3);
      return emPe(T, { aL: [0.55, 0.05, 1.2], aR: [lerp(0, 1.3, up), -0.15, lerp(0.2, 1.7, up)], lean: 0.1, nod: 0.05 + nod, item: "tacoV", bolas: "fim", boca: up > 0.5 ? "aberta" : "sorriso", olhos: up > 0.5 ? "F" : "A" }); }),
    A(1.25, [[8.65, 2.55], [SIN_P[0], SIN_P[1]]], { item: "tacoV", bolas: "fim" }),
    F(0.9, (k, tl, T) => emPe(T, { aL: [0.55, 0.05, 1.2], item: "tacoV", bolas: k < 0.6 ? "fim" : "ini" })),
  ] },
  euforico: { inicio: DAN_P, padrao: { olhos: "F", boch: 0.8 }, passos: [
    F(3.6, (k, tl, T) => poseFesta(tl, T)),
    F(3.4, (k, tl, T) => poseFesta(tl, T)),
    F(2.2, (k, tl, T) => { const s = io(k); const r = emPe(T, { aL: [1.5, 1.2, 0.2], aR: [1.5, 1.2, 0.2], boca: "aberta", olhos: "F", boch: 0.8 }); r.yawAdd = s * TAU; r.dy = 0.12 * Math.sin(PI * k); return r; }),
    F(4.4, (k, tl, T) => { const c = (tl % 1.1) / 1.1; const joga = c < 0.55 ? io(c / 0.55) : 1 - sai((c - 0.55) / 0.45);
      const r = emPe(T, { aL: [0.5, 0.2, 1.3], aR: [lerp(0.3, 2.8, joga), 0.15, lerp(1.4, 0.2, joga)], lean: -0.08 * joga, nod: -0.15 * joga, dy: 0.05 * joga, item: c < 0.5 ? "nota" : "", boca: "aberta", olhos: "F", boch: 0.8 });
      r.solta = c > 0.5 && c < 0.6 ? Math.floor(tl / 1.1) + 1 : 0; return r; }),
    A(2.3, [[5.3, 3.35], [MON_P[0], MON_P[1]]], { estilo: "corre" }),
    F(3.4, (k, tl, T) => { const j = (tl % 0.85) / 0.85, h = Math.sin(PI * j);
      return emPe(T, { dy: 0.35 * h, aL: [2.9, 0.4, 0.2], aR: [2.9, 0.4, 0.2], lL: [0.3 * h, 0.7 * h], lR: [0.3 * h, 0.7 * h], boca: "aberta", olhos: "F" }); }),
    A(2.3, [[5.3, 3.35], [DAN_P[0], DAN_P[1]]], { estilo: "corre" }),
    F(5.0, (k, tl, T) => poseFesta(1.05 + (tl % 2.48), T), { ate: DAN_P }),
  ] },
  preocupado: { inicio: CAD_S, padrao: { sob: "tenso", boca: "foco" }, passos: [
    F(9, (k, tl, T) => { const tE = Math.max(0, Math.sin(T * 14)) * 0.12, tD = Math.max(0, Math.sin(T * 14 + 2.2)) * 0.12;
      const perto = jan(tl, 3.0, 5.6, 0.6), coca = jan(tl, 6.6, 7.9, 0.3);
      return sentado(T, 0.6, { lean: 0.14 + 0.2 * perto, nod: 0.1 + 0.08 * Math.sin(tl * 1.7) - 0.1 * perto, hz: 0.03,
        aL: [0.5 + tE, -0.12, 1.07], aR: coca > 0.05 ? [lerp(0.5, 2.3, coca), lerp(-0.12, 0.6, coca), lerp(1.07, 2.4 + 0.15 * Math.sin(T * 16), coca)] : [0.5 + tD, -0.12, 1.07],
        olhar: [0.3 * Math.sin(tl * 2), -0.5] }); }, { mon: "foco" }),
    F(3.6, (k, tl, T) => { const c = jan(tl, 0, 3.6, 0.45); const sh = Math.sin(T * 9) * 0.12 * c;
      return sentado(T, 0.6, { lean: 0.14 - 0.25 * c, nod: -0.1 * c, turn: sh, aL: [lerp(0.5, 2.5, c), lerp(-0.12, 0.7, c), lerp(1.07, 2.3, c)], aR: [lerp(0.5, 2.5, c), lerp(-0.12, 0.7, c), lerp(1.07, 2.3, c)], balao: jan(tl, 0.3, 3.4, 0.3), balaoT: "smiley-nervous", boca: "o", abre: 0.4 }); }),
    F(1.2, levantarDe((T) => emPe(T), (T) => sentado(T, 0.6, { lean: 0.1 })), { ate: CAD_P }),
    A(0.85, [[5.5, 2.35], [7.9, 2.45], [CAD_P[0], CAD_P[1]]], { pensativo: true }),
    F(3.4, (k, tl, T) => { const w = jan(tl, 0.1, 3.3, 0.4); const sus = Math.sin(PI * fase(tl, 0.8, 2.2));
      return emPe(T, { aR: [lerp(0, 1.3, w), -0.25, lerp(0.2, 2.2, w)], alt: 0.89 - 0.02 * sus, nod: 0.25 * w, lean: 0.06 * sus, olhos: sus > 0.6 ? "Z" : "A", boca: "triste", sob: "triste", balao: jan(tl, 0.6, 3.0), balaoT: "chart-line-down" }); }, { ate: [CAD_P[0], CAD_P[1], PI * 0.3] }),
    F(1.2, sentarDe((T) => emPe(T), (T) => sentado(T, 0.6, { lean: 0.14 })), { ate: CAD_S }),
  ] },
  triste: { inicio: POL_S, padrao: { sob: "triste", boca: "triste", nuvem: 1, lagrima: 1 }, passos: [
    F(11.5, (k, tl, T) => {
      const cobre = jan(tl, 0.2, 4.6, 0.6), sus = Math.sin(PI * fase(tl, 5.2, 6.8)), olha = jan(tl, 7.2, 11.2, 0.6);
      return sentado(T, 0.6, { lean: 0.32 + 0.25 * cobre - 0.12 * olha + 0.04 * sus, nod: 0.35 + 0.25 * cobre - 0.3 * olha, turn: -0.5 * olha,
        aL: [lerp(0.72, 1.55, cobre), lerp(-0.1, -0.32, cobre), lerp(1.05, 2.45, cobre)], aR: [lerp(0.72, 1.55, cobre), lerp(-0.1, -0.32, cobre), lerp(1.05, 2.45, cobre)],
        olhos: cobre > 0.5 ? "Z" : "A", olhar: olha > 0.3 ? [-1.4, -0.6] : [0, 1.2], dy: -0.01 * sus });
    }),
    F(1.6, levantarDe((T) => emPe(T, { lean: 0.12, nod: 0.3 }), (T) => sentado(T, 0.6, { lean: 0.32, nod: 0.35, aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05] })), { ate: POL_P }),
    A(0.62, [[1.68, 3.15], [1.5, 2.35], [JAN_P[0], JAN_P[1]]], { estilo: "triste" }),
    F(9.5, (k, tl, T) => { const mao = jan(tl, 0.8, 7.8, 0.6), sus = Math.sin(PI * fase(tl, 3.6, 5.2)), enc = jan(tl, 5.6, 7.4, 0.5);
      return emPe(T, { aL: [lerp(0, 1.75, mao), -0.1 * mao, lerp(0.2, 0.55, mao)], alt: 0.89 - 0.02 * sus, lean: 0.06 + 0.1 * enc, nod: 0.1 + 0.3 * enc - 0.1 * mao, side: -0.05 * enc, olhar: [0, -0.5] }); }),
    A(0.62, [[1.5, 2.35], [1.68, 3.15], [POL_P[0], POL_P[1]]], { estilo: "triste" }),
    F(1.6, sentarDe((T) => emPe(T, { lean: 0.12, nod: 0.3 }), (T) => sentado(T, 0.6, { lean: 0.32, nod: 0.35, aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05] })), { ate: POL_S }),
  ] },
};

function compilar(rt) {
  let pos = rt.inicio.slice(); let t = 0; const out = [];
  for (const p of rt.passos) {
    const de = pos.slice();
    if (p.tipo === "andar") {
      const pts = [de, ...p.via]; let dist = 0; const segs = [];
      for (let i = 1; i < pts.length; i++) { const L = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (L > 1e-6) segs.push({ a: pts[i - 1], b: pts[i], d0: dist, L, yaw: yawPara(pts[i - 1], pts[i]) }); dist += L; }
      const dur = dist / p.vel; const fim = pts[pts.length - 1];
      out.push({ ...p, t0: t, dur, segs, dist, de }); pos = [fim[0], fim[1], segs[segs.length - 1].yaw]; t += dur;
    } else { const ate = p.ate || pos; out.push({ ...p, t0: t, de, ate }); pos = ate.slice(); t += p.dur; }
  }
  return { passos: out, total: t, padrao: rt.padrao || {} };
}
function avaliarPasso(s, tl, T, rt) {
  let pose, pos;
  if (s.tipo === "andar") {
    const d = cl(tl / s.dur) * s.dist;
    let i = s.segs.length - 1; for (let j = 0; j < s.segs.length; j++) if (d <= s.segs[j].d0 + s.segs[j].L) { i = j; break; }
    const sg = s.segs[i], k = cl((d - sg.d0) / sg.L);
    let yaw = sg.yaw;
    const nx = s.segs[i + 1], antes = s.segs[i - 1];   // curva suave nas quinas
    if (nx && sg.L * (1 - k) < 0.35) yaw = angLerp(sg.yaw, nx.yaw, 0.5 * (1 - sg.L * (1 - k) / 0.35));
    if (antes && sg.L * k < 0.35) yaw = angLerp(antes.yaw, sg.yaw, 0.5 + 0.5 * (sg.L * k / 0.35));
    pos = [lerp(sg.a[0], sg.b[0], k), lerp(sg.a[1], sg.b[1], k), yaw];
    pose = andar(d, s.estilo, T);
    if (s.pensativo) { pose.aR = [1.25, -0.25, 2.25]; pose.aL = [0.6, -0.35, 1.5]; pose.nod += 0.18; pose.boca = "foco"; pose.sob = "tenso"; }
    if (s.item === "xicara") pose.aR = [0.6, -0.25, 1.75];
    if (s.item === "tacoV") pose.aL = [0.55, 0.05, 1.2];
    pose.item = s.item || ""; if (s.bolas) pose.bolas = s.bolas;
  } else {
    const k = cl(tl / s.dur);
    const w = suave(k);
    pos = s.de === s.ate ? s.de : [lerp(s.de[0], s.ate[0], w), lerp(s.de[1], s.ate[1], w), angLerp(s.de[2], s.ate[2], w)];
    pose = s.pose(k, tl, T);
    if (s.item && !pose.item) pose.item = s.item;
    if (s.bolas && !pose.bolas) pose.bolas = s.bolas;
  }
  const pd = rt.padrao; for (const k in pd) if (!(k in pose) || pose[k] === POSE0[k]) pose[k] = pd[k];
  return { pose, pos, s };
}
function avaliar(rt, T) {
  const tt = ((T % rt.total) + rt.total) % rt.total;
  let i = rt.passos.findIndex((s) => tt < s.t0 + s.dur); if (i < 0) i = rt.passos.length - 1;
  const s = rt.passos[i], tl = tt - s.t0;
  const r = avaliarPasso(s, tl, T, rt);
  const B = 0.45;
  if (tl < B) {
    const ant = rt.passos[(i - 1 + rt.passos.length) % rt.passos.length];
    const a = avaliarPasso(ant, ant.dur - 1e-3, T, rt);
    const w = suave(tl / B);
    r.pose = mistura(a.pose, r.pose, w);
    r.pos = [lerp(a.pos[0], r.pos[0], w), lerp(a.pos[1], r.pos[1], w), angLerp(a.pos[2], r.pos[2], w)];
  }
  r.tt = tt; return r;
}
const RT = Object.fromEntries(Object.entries(ROTEIROS).map(([k, v]) => [k, compilar(v)]));

/* ---------- cachorro ---------- */
class Cao {
  constructor() {
    const pelo = M("#C08552", { r: 0.9 }), esc = M("#8B5A35", { r: 0.9 }), preto = M("#2B1B14", { r: 0.4 });
    const g = this.g = new THREE.Group();
    this.corpo = new THREE.Group(); g.add(this.corpo);
    caps(this.corpo, pelo, 0.12, 0.26, 0, 0, 0, { rx: PI / 2 });
    this.cab = new THREE.Group(); this.cab.position.set(0, 0.12, 0.2); this.corpo.add(this.cab);
    esf(this.cab, pelo, 0.115, 0, 0.04, 0);
    esf(this.cab, M("#D9A577"), 0.06, 0, 0.0, 0.1, { s: [1, 0.8, 1.2] });
    esf(this.cab, preto, 0.025, 0, 0.02, 0.17);
    esf(this.cab, preto, 0.016, -0.045, 0.08, 0.1); esf(this.cab, preto, 0.016, 0.045, 0.08, 0.1);
    this.lingua = esf(this.cab, M("#F87171"), 0.025, 0, -0.04, 0.13, { s: [1, 0.5, 1.4] });
    for (const s of [-1, 1]) mesh(new THREE.SphereGeometry(0.055, 12, 10), esc, this.cab, s * 0.1, 0.07, -0.01, { s: [0.45, 1.2, 0.9], rz: s * 0.4 });
    this.patas = [];
    for (const [x, z] of [[-0.07, 0.15], [0.07, 0.15], [-0.07, -0.15], [0.07, -0.15]]) { const p = new THREE.Group(); p.position.set(x, -0.04, z); this.corpo.add(p); caps(p, pelo, 0.04, 0.12, 0, -0.1, 0); this.patas.push(p); }
    this.rabo = new THREE.Group(); this.rabo.position.set(0, 0.06, -0.2); this.corpo.add(this.rabo);
    caps(this.rabo, pelo, 0.025, 0.14, 0, 0.08, -0.02, { rx: -0.6 });
    sombra(g, true, false);
    this.zzz = new THREE.Group(); g.add(this.zzz);
    for (let i = 0; i < 2; i++) { const t = tela(64, 64); t.g.font = "bold 52px system-ui"; t.g.fillStyle = "#6366F1"; t.g.textAlign = "center"; t.g.fillText("z", 32, 48); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.t, transparent: true, depthWrite: false })); s.scale.setScalar(0.16 - i * 0.04); this.zzz.add(s); }
  }
  quadro(estado, T) {
    const c = this.corpo; this.zzz.visible = estado === "dorme";
    const wag = Math.sin(T * (estado === "dorme" ? 2 : 14)) * (estado === "dorme" ? 0.2 : 0.7);
    this.rabo.rotation.set(0, wag, 0); this.lingua.visible = estado !== "dorme";
    if (estado === "dorme") {
      c.position.set(0, 0.1 + 0.008 * Math.sin(T * 2), 0); c.rotation.set(0, 0, 0.12);
      this.patas.forEach((p, i) => p.rotation.set(i < 2 ? -1.35 : 1.35, 0, 0));
      this.cab.rotation.set(0.5, 0.25, 0); this.cab.position.set(0, 0.04, 0.22);
      this.zzz.children.forEach((s, i) => { const k = ((T * 0.45 + i * 0.5) % 1); s.position.set(0.12 + k * 0.1, 0.32 + k * 0.35, 0.2); s.material.opacity = 1 - k; });
    } else if (estado === "senta") {
      c.position.set(0, 0.2, 0); c.rotation.set(-0.55, 0, 0);
      this.patas.forEach((p, i) => p.rotation.set(i < 2 ? 0.55 : -0.9, 0, 0));
      this.cab.position.set(0, 0.12, 0.2); this.cab.rotation.set(0.45 + 0.08 * Math.sin(T * 1.3), 0.3 * Math.sin(T * 0.7), 0.15 * Math.sin(T * 1.1));
    } else { // pula
      const j = Math.abs(Math.sin(T * 5.2)); c.position.set(0, 0.2 + 0.22 * j, 0); c.rotation.set(-0.25 * j, 0, 0);
      this.patas.forEach((p, i) => p.rotation.set((i < 2 ? -0.6 : 0.6) * j, 0, 0));
      this.cab.position.set(0, 0.12, 0.2); this.cab.rotation.set(-0.15, 0, 0);
    }
  }
}

/* ---------- a cena ---------- */
export function criar(container, dados) { return new Escritorio(container, dados); }

/* ---------- vitrine: prévia do boneco no perfil ---------- */
export function vitrine(el, d) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  el.innerHTML = ""; el.appendChild(r.domElement);
  const sc = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.35;
  sc.add(new THREE.HemisphereLight("#FFFFFF", "#C9B79C", 1.0));
  const sol = new THREE.DirectionalLight("#FFF1DE", 2.0); sol.position.set(1.6, 3.2, 2.4); sol.castShadow = true; sol.shadow.mapSize.set(1024, 1024);
  Object.assign(sol.shadow.camera, { left: -1, right: 1, top: 2, bottom: -0.2, near: 0.5, far: 8 }); sc.add(sol);
  const rec = new THREE.DirectionalLight("#C7D7FF", 0.6); rec.position.set(-2, 1.5, -1.5); sc.add(rec);
  const chao = new THREE.Mesh(new THREE.CircleGeometry(0.75, 48), new THREE.ShadowMaterial({ opacity: 0.22 })); chao.rotation.x = -PI / 2; chao.receiveShadow = true; sc.add(chao);
  const b = new Boneco(d.cor, d.icone, d.boneco, d.acessorio); sc.add(b.root); b.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const cam = new THREE.PerspectiveCamera(24, 3 / 4, 0.1, 20);
  let yaw = -0.35, arrastando = false, x0 = 0, ultimoToque = 0, raf = 0, morto = false;
  const t0 = performance.now(); let tAnt = t0;
  const tam = () => { const w = el.clientWidth || 200, h = el.clientHeight || 260; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  tam(); const ro = new ResizeObserver(tam); ro.observe(el);
  const cv = r.domElement;
  cv.addEventListener("pointerdown", (e) => { arrastando = true; x0 = e.clientX; cv.setPointerCapture(e.pointerId); ultimoToque = performance.now(); });
  cv.addEventListener("pointermove", (e) => { if (!arrastando) return; yaw += (e.clientX - x0) * 0.012; x0 = e.clientX; ultimoToque = performance.now(); });
  cv.addEventListener("pointerup", () => { arrastando = false; });
  function quadro() {
    raf = 0; if (morto) return;
    if (!el.isConnected) { destruir(); return; }
    const agora = performance.now(), T = (agora - t0) / 1000, dt = Math.min(0.05, (agora - tAnt) / 1000); tAnt = agora;
    if (!arrastando && agora - ultimoToque > 2500) yaw += dt * 0.35;
    // ciclo: parado, acena, sorri
    const c = T % 9; let p;
    if (c < 3.5) p = emPe(T, { olhar: [Math.sin(T * 0.7) * 0.6, 0] });
    else if (c < 6) { const w = jan(c, 3.5, 6, 0.4); p = emPe(T, { aR: [lerp(0, 2.6, w), lerp(0.12, 0.5, w), lerp(0.2, 0.9 + 0.35 * Math.sin(T * 9), w)], boca: w > 0.5 ? "sorriso" : "leve", olhos: w > 0.5 ? "F" : "A", boch: 0.4 * w, nod: -0.05 * w, roll: 0.06 * w }); }
    else p = emPe(T, { boca: "sorriso", olhos: "A", boch: 0.25, turn: 0.15 * Math.sin(T * 1.2) });
    b.root.rotation.y = yaw; b.aplicar(p, T, dt); b.desenharRosto(p, T);
    cam.position.set(0, 1.0, 4.1); cam.lookAt(0, 0.9, 0);
    r.render(sc, cam);
    raf = requestAnimationFrame(quadro);
  }
  function destruir() {
    if (morto) return; morto = true; if (raf) cancelAnimationFrame(raf); ro.disconnect();
    sc.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    r.dispose(); if (r.domElement.parentNode) r.domElement.remove();
  }
  raf = requestAnimationFrame(quadro);
  return {
    atualizar(n) { b.setCor(n.cor); if (n.icone !== d.icone) b.setIcone(n.icone); b.setAparencia(n.boneco, n.acessorio); d = n; },
    destruir,
  };
}

class Escritorio {
  constructor(el, d) {
    this.el = el; this.d = {};
    const r = this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
    r.domElement.className = "of-canvas"; r.domElement.setAttribute("role", "img");
    el.appendChild(r.domElement);
    const sc = this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.32;
    this.cam = new THREE.PerspectiveCamera(30, 1, 0.1, 80);
    this.alvo = V(4.4, 0.95, 3.55); this.az = PI / 4; this.el_ = 0.5; this.zoom = 1;
    this.camModo = "sala"; this.camAtual = null;
    this.tAnt = performance.now(); this.t0 = performance.now();
    this.notas = []; this.hist = []; this.feed = []; this.flash = {};
    this.construir();
    this.boneco = new Boneco(d.cor, d.icone, d.boneco, d.acessorio); sc.add(this.boneco.root); sc.add(this.boneco.blob);
    this.cao = new Cao(); sc.add(this.cao.g);
    this.calibrarTacada();
    if (window.__ofDebug) window.__ofDebug = this;
    this.ligarControles();
    this.ro = new ResizeObserver(() => this.redimensionar()); this.ro.observe(el);
    this.redimensionar();
    this.atualizar(d);
    this.reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.laco = this.laco.bind(this); this.raf = requestAnimationFrame(this.laco);
  }

  /* ----- montagem da sala ----- */
  construir() {
    const sc = this.scene;
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
    const chao = mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: piso.t, roughness: 0.55, metalness: 0 }), sc, W / 2, 0, D / 2, { rx: -PI / 2, cast: false });
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
    // feixe de luz da janela no chão
    const fx = tela(64, 64); const gf = fx.g.createLinearGradient(0, 0, 64, 0); gf.addColorStop(0, "rgba(255,255,255,.9)"); gf.addColorStop(1, "rgba(255,255,255,0)"); fx.g.fillStyle = gf; fx.g.fillRect(0, 0, 64, 64);
    const gq = new THREE.BufferGeometry();
    gq.setAttribute("position", new THREE.Float32BufferAttribute([0.02, 0.005, JZ0 + 0.1, 0.02, 0.005, JZ1 - 0.1, 3.0, 0.005, JZ1 + 1.5, 3.0, 0.005, JZ0 + 1.3], 3));
    gq.setAttribute("uv", new THREE.Float32BufferAttribute([0, 0, 0, 1, 1, 1, 1, 0], 2)); gq.setIndex([0, 1, 2, 0, 2, 3]);
    this.feixe = new THREE.Mesh(gq, new THREE.MeshBasicMaterial({ map: fx.t, color: "#FFE7A3", transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    sc.add(this.feixe);

    // tapete
    const tp = tela(512, 512); this.desenharTapete(tp);
    mesh(new RoundedBoxGeometry(3.3, 0.016, 5.0, 2, 0.007), new THREE.MeshStandardMaterial({ map: tp.t, roughness: 1 }), sc, 3.35, 0.009, 3.85, { cast: false });

    // painel ripado + TV + rack
    const ripa = M("#9A6B43", { r: 0.7 }), ripaE = M("#7A5233", { r: 0.8 });
    bloco(sc, ripaE, [1.6, 0, 0], [4.8, H, 0.025], 0.002, { cast: false });
    for (let x = 1.62; x < 4.78; x += 0.1) bloco(sc, ripa, [x, 0.1, 0.02], [x + 0.06, H - 0.02, 0.05], 0.008, { cast: false });
    const rack = M("#3F3A36", { r: 0.6 }), madeira = M("#B07A4C", { r: 0.6 });
    bloco(sc, rack, [1.95, 0.12, 0.05], [4.45, 0.52, 0.48], 0.02);
    bloco(sc, madeira, [1.97, 0.18, 0.47], [3.18, 0.48, 0.49], 0.01); bloco(sc, madeira, [3.22, 0.18, 0.47], [4.43, 0.48, 0.49], 0.01);
    for (const x of [2.05, 4.35]) for (const z of [0.12, 0.42]) cil(sc, M("#111827"), 0.015, 0.015, 0.12, x, 0.06, z);
    bloco(sc, M("#F8FAFC", { r: 0.3 }), [2.3, 0.52, 0.18], [2.62, 0.58, 0.4], 0.02);                // console
    bloco(sc, M("#111827", { r: 0.4 }), [3.85, 0.52, 0.2], [3.98, 0.86, 0.33], 0.02); bloco(sc, M("#111827", { r: 0.4 }), [2.95, 0.52, 0.2], [3.08, 0.86, 0.33], 0.02); // caixas de som
    bloco(sc, M("#0B0F19", { r: 0.25, m: 0.4 }), [2.25, 1.0, 0.06], [4.15, 2.06, 0.12], 0.02);
    this.tv = tela(512, 288);
    mesh(new THREE.PlaneGeometry(1.84, 1.0), new THREE.MeshBasicMaterial({ map: this.tv.t, toneMapped: false }), sc, 3.2, 1.53, 0.123, { cast: false, recv: false });
    this.tvLuz = new THREE.PointLight("#818CF8", 1.4, 4.5, 1.6); this.tvLuz.position.set(3.2, 1.5, 0.9); sc.add(this.tvLuz);

    // mesa de centro
    const mc = M("#C89A6B", { r: 0.55 });
    bloco(sc, mc, [2.62, 0.36, 1.45], [3.8, 0.42, 2.0], 0.03);
    bloco(sc, M("#E7D6C3"), [2.7, 0.08, 1.52], [3.72, 0.11, 1.93], 0.01);
    for (const x of [2.68, 3.74]) for (const z of [1.5, 1.95]) cil(sc, M("#3F3A36"), 0.02, 0.02, 0.36, x, 0.18, z);
    bloco(sc, M("#F43F5E"), [2.8, 0.42, 1.6], [3.1, 0.44, 1.82], 0.005, { ry: 0.2 }); bloco(sc, M("#38BDF8"), [2.84, 0.44, 1.62], [3.1, 0.455, 1.8], 0.005, { ry: -0.1 });
    this.ctrlMesa = this.fazerControle(); this.ctrlMesa.position.set(3.45, 0.44, 1.72); this.ctrlMesa.rotation.y = 0.4; sc.add(this.ctrlMesa);

    // sofá (de frente para a TV)
    const sf = M("#0F766E", { r: 0.95 }), sf2 = M("#14857B", { r: 0.95 }), alm = M("#2BB3A3", { r: 1 });
    bloco(sc, sf, [2.0, 0.08, 2.6], [4.4, 0.42, 3.5], 0.06);
    bloco(sc, sf, [2.0, 0.08, 3.22], [4.4, 0.98, 3.52], 0.08);
    bloco(sc, sf2, [1.96, 0.08, 2.58], [2.2, 0.66, 3.52], 0.07); bloco(sc, sf2, [4.2, 0.08, 2.58], [4.44, 0.66, 3.52], 0.07);
    bloco(sc, alm, [2.22, 0.4, 2.62], [3.19, 0.54, 3.24], 0.06); bloco(sc, alm, [3.21, 0.4, 2.62], [4.18, 0.54, 3.24], 0.06);
    bloco(sc, alm, [2.24, 0.5, 3.0], [3.18, 0.92, 3.24], 0.07, { rx: -0.12 }); bloco(sc, alm, [3.22, 0.5, 3.0], [4.16, 0.92, 3.24], 0.07, { rx: -0.12 });
    bloco(sc, M("#FCD34D", { r: 1 }), [2.28, 0.5, 2.95], [2.62, 0.82, 3.1], 0.06, { rz: 0.15, rx: -0.2 });
    for (const x of [2.06, 4.34]) for (const z of [2.66, 3.44]) cil(sc, M("#3F3A36"), 0.025, 0.02, 0.08, x, 0.04, z);

    // poltrona perto da janela
    const pol = new THREE.Group(); pol.position.set(POL_S[0], 0, POL_S[1]); pol.rotation.y = POL_S[2]; sc.add(pol);
    const pc = M("#B45309", { r: 0.95 }), pc2 = M("#D97706", { r: 0.95 });
    bloco(pol, pc, [-0.42, 0.1, -0.36], [0.42, 0.4, 0.4], 0.06); bloco(pol, pc, [-0.42, 0.1, -0.44], [0.42, 1.05, -0.2], 0.08, { rx: 0.1 });
    bloco(pol, pc2, [-0.5, 0.1, -0.4], [-0.32, 0.62, 0.4], 0.07); bloco(pol, pc2, [0.32, 0.1, -0.4], [0.5, 0.62, 0.4], 0.07);
    bloco(pol, M("#F59E0B", { r: 1 }), [-0.32, 0.38, -0.25], [0.32, 0.5, 0.38], 0.05);
    for (const x of [-0.44, 0.44]) for (const z of [-0.36, 0.36]) cil(pol, M("#3F3A36"), 0.025, 0.018, 0.1, x, 0.05, z);
    // luminária de piso
    const lg = new THREE.Group(); lg.position.set(0.32, 0, 4.0); sc.add(lg);
    cil(lg, M("#1F2937", { m: 0.6, r: 0.4 }), 0.14, 0.16, 0.03, 0, 0.015, 0); cil(lg, M("#1F2937", { m: 0.6, r: 0.4 }), 0.012, 0.012, 1.5, 0, 0.77, 0);
    this.cupula = cil(lg, M("#FEF3C7", { r: 0.8, e: "#FFD58A", ei: 0.0 }), 0.12, 0.2, 0.26, 0, 1.6, 0, { seg: 28 });
    this.lampLuz = new THREE.PointLight("#FFC978", 0, 4.2, 1.8); this.lampLuz.position.set(0.35, 1.5, 4.0); sc.add(this.lampLuz);
    this.lampHalo = brilho("#FFD58A", 1.1, 0.0); this.lampHalo.position.set(0.34, 1.58, 4.0); sc.add(this.lampHalo);

    // cantinho do café
    const arm = M("#F8FAFC", { r: 0.5 });
    bloco(sc, arm, [0.02, 0, 4.35], [0.58, 0.88, 5.45], 0.02); bloco(sc, M("#334155", { r: 0.35 }), [0.0, 0.88, 4.32], [0.62, 0.92, 5.48], 0.01);
    bloco(sc, M("#E2E8F0"), [0.57, 0.1, 4.4], [0.585, 0.82, 4.88], 0.004); bloco(sc, M("#E2E8F0"), [0.57, 0.1, 4.92], [0.585, 0.82, 5.4], 0.004);
    const cf = new THREE.Group(); cf.position.set(0.24, 0.92, 4.9); sc.add(cf);
    bloco(cf, M("#111827", { r: 0.3, m: 0.3 }), [-0.14, 0, -0.14], [0.14, 0.38, 0.14], 0.03); bloco(cf, M("#D1D5DB", { r: 0.25, m: 0.8 }), [-0.04, 0.24, -0.13], [0.2, 0.34, 0.13], 0.02);
    cil(cf, M("#FFFFFF", { r: 0.3 }), 0.035, 0.03, 0.08, 0.14, 0.04, 0);
    this.vapor = []; for (let i = 0; i < 4; i++) { const v = brilho("#FFFFFF", 0.1, 0.0); v.material.blending = THREE.NormalBlending; v.position.set(0.38, 1.0, 4.9); sc.add(v); this.vapor.push(v); }
    for (let i = 0; i < 3; i++) cil(sc, M(["#F43F5E", "#FACC15", "#38BDF8"][i]), 0.035, 0.03, 0.08, 0.38, 0.96, 5.2 + i * 0.09);
    // quadro
    const qd = tela(256, 192); this.desenharQuadro(qd);
    bloco(sc, M("#1F2937", { r: 0.4 }), [0.0, 1.45, 4.45], [0.04, 2.25, 5.4], 0.01);
    mesh(new THREE.PlaneGeometry(0.87, 0.72), new THREE.MeshStandardMaterial({ map: qd.t, roughness: 0.6 }), sc, 0.045, 1.85, 4.925, { ry: PI / 2, cast: false });

    // escrivaninha com PC
    const tampo = M("#9C6B45", { r: 0.5 }), metal = M("#1F2937", { r: 0.4, m: 0.6 });
    bloco(sc, tampo, [5.75, 0.72, 0.02], [7.85, 0.77, 0.82], 0.02);
    for (const x of [5.82, 7.78]) { bloco(sc, metal, [x - 0.03, 0, 0.08], [x + 0.03, 0.72, 0.14], 0.01); bloco(sc, metal, [x - 0.03, 0, 0.7], [x + 0.03, 0.72, 0.76], 0.01); bloco(sc, metal, [x - 0.03, 0.02, 0.08], [x + 0.03, 0.06, 0.76], 0.01); }
    bloco(sc, M("#F1F5F9", { r: 0.5 }), [7.25, 0.18, 0.06], [7.7, 0.7, 0.62], 0.02); bloco(sc, M("#CBD5E1"), [7.27, 0.42, 0.62], [7.68, 0.44, 0.63], 0.003);
    bloco(sc, M("#111827", { r: 0.5 }), [6.15, 0.775, 0.5], [6.25, 0.79, 0.62], 0.004);   // deskmat
    bloco(sc, M("#1E293B", { r: 0.9 }), [6.0, 0.77, 0.42], [7.55, 0.775, 0.78], 0.004);
    bloco(sc, M("#E5E7EB", { r: 0.4 }), [6.42, 0.775, 0.55], [7.08, 0.8, 0.7], 0.01);    // teclado
    this.teclas = bloco(sc, M("#94A3B8", { r: 0.5, e: "#60A5FA", ei: 0.25 }), [6.44, 0.8, 0.565], [7.06, 0.805, 0.69], 0.003);
    this.mouse = mesh(new THREE.SphereGeometry(0.04, 16, 10), M("#E5E7EB", { r: 0.3 }), sc, 7.28, 0.79, 0.62, { s: [0.8, 0.4, 1.2] });
    // monitor ultrawide
    cil(sc, metal, 0.11, 0.12, 0.012, 6.8, 0.776, 0.22); bloco(sc, metal, [6.775, 0.77, 0.16], [6.825, 1.0, 0.2], 0.01);
    bloco(sc, M("#0B0F19", { r: 0.25, m: 0.4 }), [6.19, 0.86, 0.17], [7.41, 1.42, 0.22], 0.02);
    this.mon = tela(1024, 448);
    this.monMesh = mesh(new THREE.PlaneGeometry(1.18, 0.516), new THREE.MeshBasicMaterial({ map: this.mon.t, toneMapped: false }), sc, 6.8, 1.14, 0.222, { cast: false, recv: false });
    this.monLuz = new THREE.PointLight("#60A5FA", 1.1, 2.6, 1.8); this.monLuz.position.set(6.8, 1.15, 0.75); sc.add(this.monLuz);
    this.monHalo = brilho("#60A5FA", 1.6, 0.18); this.monHalo.position.set(6.8, 1.14, 0.12); sc.add(this.monHalo);
    // caneca e plantinha na mesa
    cil(sc, M("#F8FAFC", { r: 0.3 }), 0.04, 0.035, 0.1, 5.98, 0.82, 0.55); mesh(new THREE.TorusGeometry(0.025, 0.008, 8, 14), M("#F8FAFC"), sc, 6.03, 0.83, 0.55, { ry: 0 });
    this.planta(5.95, 0.77, 0.2, 0.45);
    // cadeira gamer
    const cad = this.cadeira = new THREE.Group(); cad.position.set(CAD_S[0], 0, CAD_S[1] + 0.02); cad.rotation.y = CAD_S[2]; sc.add(cad);
    const cp = M("#1F2937", { r: 0.7 }), ca = M("#2457F5", { r: 0.7 });
    this.cadAcento = ca;
    for (let i = 0; i < 5; i++) { const a = i * TAU / 5; bloco(cad, metal, [-0.02, 0.05, 0], [0.02, 0.08, 0.3], 0.01, { ry: a }).position.set(Math.sin(a) * 0.15, 0.065, Math.cos(a) * 0.15); esf(cad, M("#111827"), 0.03, Math.sin(a) * 0.29, 0.03, Math.cos(a) * 0.29); }
    cil(cad, metal, 0.025, 0.03, 0.4, 0, 0.27, 0);
    bloco(cad, cp, [-0.26, 0.44, -0.27], [0.26, 0.53, 0.25], 0.05); bloco(cad, ca, [-0.17, 0.53, -0.2], [0.17, 0.535, 0.2], 0.005);
    const enc = new THREE.Group(); enc.position.set(0, 0.5, -0.27); enc.rotation.x = -0.12; cad.add(enc);
    bloco(enc, cp, [-0.25, 0.05, -0.08], [0.25, 0.85, 0.0], 0.06); bloco(enc, ca, [-0.12, 0.12, 0.0], [0.12, 0.72, 0.006], 0.004); bloco(enc, cp, [-0.15, 0.8, -0.07], [0.15, 0.98, 0.0], 0.05);
    for (const s of [-1, 1]) { bloco(cad, metal, [s * 0.27 - 0.015, 0.5, -0.1], [s * 0.27 + 0.015, 0.68, -0.06], 0.005); bloco(cad, cp, [s * 0.27 - 0.04, 0.68, -0.2], [s * 0.27 + 0.04, 0.71, 0.12], 0.015); }
    // prateleira acima da mesa
    bloco(sc, M("#7A5233", { r: 0.6 }), [5.9, 1.86, 0.0], [7.7, 1.9, 0.28], 0.01);
    let bx = 5.98; const livros = ["#EF4444", "#2457F5", "#F59E0B", "#10B981", "#8B5CF6", "#0EA5E9", "#F43F5E"];
    livros.forEach((c, i) => { const w = 0.05 + (i % 3) * 0.015, h = 0.2 + (i % 2) * 0.05; bloco(sc, M(c, { r: 0.7 }), [bx, 1.9, 0.04], [bx + w, 1.9 + h, 0.24], 0.006, { rz: i === 6 ? -0.25 : 0 }); bx += w + 0.008; });
    this.planta(7.5, 1.9, 0.12, 0.3);
    // relógio de parede com a hora de verdade
    const rel = new THREE.Group(); rel.position.set(5.25, 2.35, 0.03); sc.add(rel);
    cil(rel, M("#1F2937", { r: 0.4 }), 0.27, 0.27, 0.05, 0, 0, 0, { rx: PI / 2, seg: 40 }); cil(rel, M("#FFFFFF", { r: 0.5 }), 0.24, 0.24, 0.052, 0, 0, 0.002, { rx: PI / 2, seg: 40 });
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12; bloco(rel, M("#1F2937"), [-0.006, -0.025, 0], [0.006, 0.025, 0.01], 0.002).position.set(Math.sin(a) * 0.2, Math.cos(a) * 0.2, 0.03); rel.children[rel.children.length - 1].rotation.z = -a; }
    const ponteiro = (L, w, cor, z) => { const g = new THREE.Group(); g.position.z = z; rel.add(g); bloco(g, M(cor), [-w / 2, -0.02, 0], [w / 2, L, 0.006], 0.002); return g; };
    this.pH = ponteiro(0.12, 0.018, "#1F2937", 0.03); this.pM = ponteiro(0.18, 0.012, "#1F2937", 0.037); this.pS = ponteiro(0.2, 0.005, "#EF4444", 0.044);
    esf(rel, M("#EF4444"), 0.014, 0, 0, 0.05);

    // mesa de sinuca + luminária pendente
    const sin = this.sinuca = { x0: 5.7, x1: 8.1, z0: 3.75, z1: 5.05, y: 0.8 };
    const madE = M("#5B3A1E", { r: 0.5 }), feltro = M("#15803D", { r: 0.95 });
    bloco(sc, madE, [sin.x0 + 0.15, 0.12, sin.z0 + 0.15], [sin.x1 - 0.15, 0.72, sin.z1 - 0.15], 0.04);
    for (const x of [sin.x0 + 0.2, sin.x1 - 0.2]) for (const z of [sin.z0 + 0.2, sin.z1 - 0.2]) bloco(sc, madE, [x - 0.07, 0, z - 0.07], [x + 0.07, 0.3, z + 0.07], 0.03);
    bloco(sc, feltro, [sin.x0 + 0.08, 0.7, sin.z0 + 0.08], [sin.x1 - 0.08, 0.78, sin.z1 - 0.08], 0.01);
    const borda = M("#7C4A21", { r: 0.45 });
    bloco(sc, borda, [sin.x0, 0.68, sin.z0], [sin.x1, 0.84, sin.z0 + 0.1], 0.025); bloco(sc, borda, [sin.x0, 0.68, sin.z1 - 0.1], [sin.x1, 0.84, sin.z1], 0.025);
    bloco(sc, borda, [sin.x0, 0.68, sin.z0], [sin.x0 + 0.1, 0.84, sin.z1], 0.025); bloco(sc, borda, [sin.x1 - 0.1, 0.68, sin.z0], [sin.x1, 0.84, sin.z1], 0.025);
    const pkt = M("#0B0B0B", { r: 0.9 });
    for (const [x, z] of [[sin.x0 + 0.11, sin.z0 + 0.11], [sin.x1 - 0.11, sin.z0 + 0.11], [sin.x0 + 0.11, sin.z1 - 0.11], [sin.x1 - 0.11, sin.z1 - 0.11], [(sin.x0 + sin.x1) / 2, sin.z0 + 0.09], [(sin.x0 + sin.x1) / 2, sin.z1 - 0.09]]) cil(sc, pkt, 0.055, 0.055, 0.012, x, 0.785, z, { cast: false });
    const bola = (cor) => { const m = esf(sc, M(cor, { r: 0.15 }), 0.03, 0, 0, 0, { seg: 20, seg2: 14 }); return m; };
    [["#DC2626", 6.25, 3.98], ["#1D4ED8", 7.85, 4.78], ["#111827", 6.95, 3.95], ["#7C3AED", 6.05, 4.15]].forEach(([c, x, z]) => bola(c).position.set(x, 0.81, z));
    this.bB = bola("#F8FAFC"); this.bA = bola("#FACC15");
    this.pendLuz = new THREE.PointLight("#FFE3A8", 0, 3.2, 1.6); this.pendLuz.position.set(6.9, 1.95, 4.4); sc.add(this.pendLuz);

    // plantas grandes
    this.planta(0.45, 0, 0.45, 1.25);
    this.plantaFrente = this.planta(8.5, 0, 6.95, 1.05);

    /* ---- decoração liberada pelas recompensas ---- */
    const dec = this.dec = {};
    const grp = (id) => { const g = new THREE.Group(); g.visible = false; sc.add(g); dec[id] = g; return g; };
    // fliperama
    { const g = grp("fliperama"); const fp = M("#7C3AED", { r: 0.5 });
      bloco(g, fp, [8.18, 0, 0.15], [8.86, 1.8, 0.8], 0.03); bloco(g, M("#1F2937"), [8.2, 0.95, 0.72], [8.84, 1.05, 1.0], 0.02, { rx: 0.15 });
      this.arcade = tela(128, 128);
      mesh(new THREE.PlaneGeometry(0.56, 0.46), new THREE.MeshBasicMaterial({ map: this.arcade.t, toneMapped: false }), g, 8.52, 1.3, 0.805, { rx: -0.12, cast: false });
      bloco(g, M("#F472B6", { e: "#F472B6", ei: 0.9 }), [8.2, 1.66, 0.6], [8.84, 1.78, 0.81], 0.02);
      esf(g, M("#EF4444", { r: 0.3 }), 0.025, 8.4, 1.07, 0.88); esf(g, M("#FACC15", { r: 0.3 }), 0.02, 8.6, 1.07, 0.9); esf(g, M("#22C55E", { r: 0.3 }), 0.02, 8.68, 1.07, 0.88);
      sombra(g); }
    // cofre
    { const g = grp("cofre"); const ouro = M("#D4A017", { r: 0.25, m: 0.9 });
      bloco(g, ouro, [8.22, 0, 1.3], [8.86, 0.72, 1.96], 0.04); cil(g, M("#713F12", { m: 0.6, r: 0.4 }), 0.1, 0.1, 0.03, 8.54, 0.4, 1.97, { rx: PI / 2 }); bloco(g, M("#713F12", { m: 0.6 }), [8.535, 0.32, 1.98], [8.545, 0.48, 1.99], 0.002);
      for (let i = 0; i < 5; i++) cil(g, M("#FACC15", { r: 0.3, m: 0.85 }), 0.06, 0.06, 0.02, 8.05 + (i % 2) * 0.04, 0.01 + i * 0.021, 2.25, {});
      for (let i = 0; i < 3; i++) cil(g, M("#FACC15", { r: 0.3, m: 0.85 }), 0.06, 0.06, 0.02, 7.92, 0.01 + i * 0.021, 2.12, {});
      sombra(g); }
    // aquário
    { const g = grp("aquario");
      bloco(g, M("#5B3A1E", { r: 0.6 }), [0.04, 0, 6.35], [0.66, 0.74, 7.32], 0.02);
      mesh(new RoundedBoxGeometry(0.58, 0.5, 0.92, 2, 0.01), new THREE.MeshStandardMaterial({ color: "#7DD3FC", transparent: true, opacity: 0.32, roughness: 0.05, metalness: 0.1, depthWrite: false }), g, 0.35, 1.0, 6.835, { cast: false });
      bloco(g, M("#E7D7B8"), [0.08, 0.74, 6.4], [0.62, 0.79, 7.28], 0.01);
      bloco(g, M("#1F2937"), [0.05, 1.24, 6.38], [0.65, 1.28, 7.3], 0.01);
      this.peixes = []; ["#F97316", "#FACC15", "#38BDF8", "#F43F5E"].forEach((c, i) => { const p = new THREE.Group(); esf(p, M(c, { r: 0.4 }), 0.035, 0, 0, 0, { s: [0.6, 0.8, 1.4], seg: 12 }); mesh(new THREE.ConeGeometry(0.03, 0.05, 8), M(c), p, 0, 0, -0.06, { rx: -PI / 2 }); g.add(p); this.peixes.push(p); });
      for (let i = 0; i < 5; i++) { const a = mesh(new THREE.ConeGeometry(0.03, 0.18 + i * 0.03, 6), M("#16A34A", { r: 0.8 }), g, 0.2 + (i % 3) * 0.12, 0.85, 6.5 + i * 0.17); a.userData.alga = i; }
      this.bolhas = []; for (let i = 0; i < 6; i++) { const b = esf(g, M("#FFFFFF", { op: 0.6, r: 0.1 }), 0.008, 0.45, 0.8, 7.1, { seg: 8, seg2: 6, cast: false }); this.bolhas.push(b); }
      this.aqLuz = brilho("#38BDF8", 1.0, 0.25); this.aqLuz.position.set(0.35, 1.0, 6.85); g.add(this.aqLuz); }
    // touro de ouro
    { const g = grp("touro"); const ouro = M("#E3B341", { r: 0.18, m: 1 });
      bloco(g, M("#E5E7EB", { r: 0.5 }), [8.15, 0, 6.6], [8.85, 0.55, 7.3], 0.03);
      const t = new THREE.Group(); t.position.set(8.5, 0.55, 6.95); t.rotation.y = -PI * 0.6; g.add(t);
      caps(t, ouro, 0.13, 0.28, 0, 0.3, 0, { rx: PI / 2 }); esf(t, ouro, 0.12, 0, 0.33, -0.1);
      const cb = new THREE.Group(); cb.position.set(0, 0.36, 0.27); cb.rotation.x = 0.5; t.add(cb);
      esf(cb, ouro, 0.09, 0, 0, 0, { s: [1, 0.9, 1.2] }); for (const s of [-1, 1]) mesh(new THREE.TorusGeometry(0.07, 0.015, 8, 16, PI * 0.7), ouro, cb, s * 0.07, 0.07, 0, { rz: s > 0 ? -0.2 : PI + 0.2 });
      for (const [x, z] of [[-0.08, 0.15], [0.08, 0.15], [-0.08, -0.15], [0.08, -0.15]]) caps(t, ouro, 0.035, 0.12, x, 0.12, z);
      mesh(new THREE.TorusGeometry(0.08, 0.012, 6, 12, PI), ouro, t, 0, 0.32, -0.24, { ry: PI / 2 });
      sombra(g); }
    // globo de festa + holofotes
    { const g = grp("globo");
      cil(g, M("#94A3B8"), 0.004, 0.004, 0.3, 3.2, H - 0.15, 2.0);
      this.globo = mesh(new THREE.IcosahedronGeometry(0.2, 2), new THREE.MeshStandardMaterial({ color: "#E2E8F0", metalness: 1, roughness: 0.12, flatShading: true }), g, 3.2, H - 0.48, 2.0);
      this.spots = ["#F43F5E", "#22D3EE", "#FACC15", "#A855F7"].map((c) => { const s = new THREE.SpotLight(c, 0, 8, 0.35, 0.6, 1.2); s.position.set(3.2, H - 0.48, 2.0); g.add(s, s.target); return s; }); }
    // porquinho
    { const g = grp("porquinho"); const rosa = M("#F9A8D4", { r: 0.5 });
      const p = new THREE.Group(); p.position.set(7.6, 0.77, 0.35); p.rotation.y = -0.6; g.add(p); this.porco = p;
      esf(p, rosa, 0.09, 0, 0.09, 0, { s: [0.9, 0.85, 1.15] }); cil(p, M("#F472B6"), 0.035, 0.035, 0.04, 0, 0.08, 0.11, { rx: PI / 2 });
      for (const s of [-1, 1]) { mesh(new THREE.ConeGeometry(0.025, 0.05, 8), rosa, p, s * 0.045, 0.17, 0.05, {}); esf(p, M("#111827"), 0.008, s * 0.035, 0.12, 0.085); }
      for (const [x, z] of [[-0.04, 0.05], [0.04, 0.05], [-0.04, -0.05], [0.04, -0.05]]) cil(p, rosa, 0.02, 0.02, 0.05, x, 0.02, z);
      bloco(p, M("#9D174D"), [-0.025, 0.165, -0.03], [0.025, 0.172, 0.03], 0.002); sombra(g); }
    // neon ₿
    { const g = grp("neon"); const t = tela(256, 256); t.g.font = "900 210px system-ui, sans-serif"; t.g.textAlign = "center"; t.g.textBaseline = "middle"; t.g.shadowColor = "#FB923C"; t.g.shadowBlur = 24; t.g.fillStyle = "#FDBA74"; t.g.fillText("₿", 128, 138);
      this.neonM = new THREE.MeshBasicMaterial({ map: t.t, transparent: true, toneMapped: false, depthWrite: false });
      mesh(new THREE.PlaneGeometry(0.6, 0.6), this.neonM, g, 0.03, 2.2, 6.6, { ry: PI / 2, cast: false });
      this.neonHalo = brilho("#FB923C", 1.1, 0.35); this.neonHalo.position.set(0.15, 2.2, 6.6); g.add(this.neonHalo); }
    // neon arco-íris
    { const g = grp("arcoiris"); this.arcoM = [];
      ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6"].forEach((c, i) => { const m = new THREE.MeshBasicMaterial({ color: c, toneMapped: false }); this.arcoM.push(m); mesh(new THREE.TorusGeometry(0.42 - i * 0.07, 0.014, 8, 48, PI), m, g, 3.2, 2.28, 0.07, { cast: false }); });
      const h = brilho("#FDE68A", 1.4, 0.25); h.position.set(3.2, 2.45, 0.15); g.add(h); }
    // alvo de dardos
    { const g = grp("dardos"); const t = tela(128, 128);
      [["#111827", 62], ["#F43F5E", 50], ["#FEF3C7", 34], ["#F43F5E", 16]].forEach(([c, r]) => { t.g.fillStyle = c; t.g.beginPath(); t.g.arc(64, 64, r, 0, TAU); t.g.fill(); });
      mesh(new THREE.CircleGeometry(0.22, 32), new THREE.MeshStandardMaterial({ map: t.t, roughness: 0.8 }), g, 0.012, 1.75, 5.95, { ry: PI / 2, cast: false });
      for (const [y, z] of [[1.77, 5.93], [1.7, 6.0]]) { cil(g, M("#1D4ED8"), 0.006, 0.006, 0.14, 0.08, y, z, { rz: PI / 2 + 0.2 }); } }
    // troféu
    { const g = grp("trofeu"); const ouro = M("#E3B341", { r: 0.2, m: 1 });
      const pts = [[0, 0], [0.05, 0], [0.05, 0.02], [0.015, 0.03], [0.015, 0.08], [0.06, 0.11], [0.07, 0.18], [0.0, 0.18]].map(([x, y]) => new THREE.Vector2(x, y));
      mesh(new THREE.LatheGeometry(pts, 24), ouro, g, 7.15, 1.9, 0.14);
      for (const s of [-1, 1]) mesh(new THREE.TorusGeometry(0.03, 0.007, 6, 12), ouro, g, 7.15 + s * 0.07, 2.04, 0.14, {}); sombra(g); }
    // cachorro: objeto à parte
    this.dec.cachorro = { set visible(v) { this._v = v; }, get visible() { return this._v; }, _v: false };

    // confete
    const nC = 260; const geo = new THREE.PlaneGeometry(0.05, 0.03);
    this.confete = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, toneMapped: false }), nC);
    const cores = ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6", "#A855F7", "#FACC15", "#FFFFFF"].map((c) => new THREE.Color(c));
    this.confData = Array.from({ length: nC }, (_, i) => ({ x: Math.random() * W, z: Math.random() * D, y0: Math.random() * H, v: 0.4 + Math.random() * 0.5, r: Math.random() * TAU, rv: (Math.random() - 0.5) * 8, sw: Math.random() * TAU }));
    for (let i = 0; i < nC; i++) this.confete.setColorAt(i, cores[i % cores.length]);
    this.confete.visible = false; this.confete.frustumCulled = false; sc.add(this.confete);
    // notas de dinheiro jogadas
    this.notaGeo = new RoundedBoxGeometry(0.16, 0.004, 0.08, 1, 0.001);
    const nt = tela(128, 64); nt.g.fillStyle = "#86EFAC"; nt.g.fillRect(0, 0, 128, 64); nt.g.strokeStyle = "#15803D"; nt.g.lineWidth = 5; nt.g.strokeRect(4, 4, 120, 56); nt.g.fillStyle = "#15803D"; nt.g.font = "bold 34px system-ui"; nt.g.textAlign = "center"; nt.g.fillText("R$", 64, 44);
    this.notaMat = new THREE.MeshStandardMaterial({ map: nt.t, roughness: 0.8 });

    // itens de mão
    this.itens = {};
    this.itens.controle = this.fazerControle(); sc.add(this.itens.controle);
    const xi = new THREE.Group(); cil(xi, M("#FFFFFF", { r: 0.3 }), 0.042, 0.036, 0.1, 0, 0, 0); cil(xi, M("#6B3E1F", { r: 0.2 }), 0.038, 0.038, 0.004, 0, 0.046, 0); mesh(new THREE.TorusGeometry(0.028, 0.008, 8, 14), M("#FFFFFF"), xi, 0.045, 0, 0, {}); sombra(xi, true, false);
    this.itens.xicara = xi; sc.add(xi);
    const nota = new THREE.Mesh(this.notaGeo, this.notaMat); nota.castShadow = true; this.itens.nota = nota; sc.add(nota);
    const taco = new THREE.Group(); cil(taco, M("#B7793A", { r: 0.4 }), 0.011, 0.02, 1.45, 0, 0.725, 0); cil(taco, M("#1F2937", { r: 0.4 }), 0.0205, 0.021, 0.35, 0, 0.175, 0); cil(taco, M("#E8F1FF"), 0.011, 0.011, 0.02, 0, 1.455, 0); cil(taco, M("#3B82F6"), 0.0112, 0.0112, 0.008, 0, 1.468, 0); sombra(taco, true, false);
    this.itens.taco = taco; sc.add(taco);
    // nuvem de chuva e balão
    const nv = this.nuvem = new THREE.Group(); const nm = M("#94A3B8", { r: 1 });
    [[0, 0, 0, 0.16], [-0.14, -0.03, 0, 0.12], [0.15, -0.02, 0.02, 0.13], [0.05, 0.08, 0, 0.12], [-0.06, 0.02, 0.08, 0.1]].forEach(([x, y, z, r]) => esf(nv, nm, r, x, y, z, { cast: false }));
    this.gotas = []; for (let i = 0; i < 8; i++) { const g = cil(nv, MB("#60A5FA", { op: 0.85 }), 0.006, 0.006, 0.07, -0.15 + i * 0.043, -0.15, (i % 3 - 1) * 0.05, { cast: false }); this.gotas.push(g); }
    nv.visible = false; sc.add(nv);
    this.balao = tela(128, 128); this.balaoT = "";
    this.balaoS = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.balao.t, transparent: true, depthWrite: false })); this.balaoS.visible = false; sc.add(this.balaoS);
  }
  fazerControle() {
    const g = new THREE.Group();
    bloco(g, M("#1F2937", { r: 0.35 }), [-0.08, -0.015, -0.035], [0.08, 0.015, 0.035], 0.015);
    for (const s of [-1, 1]) esf(g, M("#1F2937", { r: 0.35 }), 0.035, s * 0.07, -0.005, -0.015, { s: [1, 0.7, 1.3] });
    esf(g, M("#60A5FA", { e: "#60A5FA", ei: 0.6 }), 0.009, -0.04, 0.016, 0); esf(g, M("#F87171", { e: "#F87171", ei: 0.6 }), 0.009, 0.04, 0.016, 0);
    return sombra(g, true, false);
  }
  planta(x, y, z, h) {
    const g = new THREE.Group(); g.position.set(x, y, z); this.scene.add(g);
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
  calibrarTacada() {
    const b = this.boneco; const yaw = SIN_P[2];
    b.root.position.set(SIN_P[0], 0, SIN_P[1]); b.root.rotation.y = yaw;
    b.aplicar(poseTacada(TACADA, 0));
    const dir = this.dirTaco(b.mR, b.mL);
    const tip = b.mR.clone().addScaledVector(dir, 1.45 - 0.25);
    const s = this.sinuca;
    const R = [cl(tip.x + dir.x * 0.04, s.x0 + 0.2, s.x1 - 0.2), cl(tip.z + dir.z * 0.04, s.z0 + 0.2, s.z1 - 0.2)];
    const d2 = [POCKET[0] - R[0], POCKET[1] - R[1]]; const L = Math.hypot(...d2); const u = [d2[0] / L, d2[1] / L];
    const Y = [R[0] + u[0] * Math.min(0.55, L * 0.4), R[1] + u[1] * Math.min(0.55, L * 0.4)];
    this.bolas = { R, Y, C: [Y[0] - u[0] * 0.06, Y[1] - u[1] * 0.06], u, fimB: [Y[0] - u[0] * 0.06 + u[0] * 0.12 - u[1] * 0.1, Y[1] - u[1] * 0.06 + u[1] * 0.12 + u[0] * 0.1] };
  }
  dirTaco(r, l) { const d = new THREE.Vector3().subVectors(l, r); if (d.lengthSq() < 1e-6) d.set(0, 0, 1); return d.normalize(); }

  /* ----- texturas desenhadas ----- */
  desenharPiso({ g }) {
    g.fillStyle = "#C8915B"; g.fillRect(0, 0, 1024, 1024);
    const tons = ["#C8915B", "#BF8752", "#D29C66", "#C38C56", "#B88050", "#CD9760"];
    let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const lw = 1024 / 8;
    for (let r = 0; r < 8; r++) {
      let x = -rnd() * 400;
      while (x < 1024) {
        const L = 260 + rnd() * 300; g.fillStyle = tons[Math.floor(rnd() * tons.length)]; g.fillRect(x, r * lw, L, lw);
        g.strokeStyle = "rgba(90,50,20,.10)"; g.lineWidth = 1.2;
        for (let k = 0; k < 7; k++) { const y = r * lw + 8 + rnd() * (lw - 16); g.beginPath(); g.moveTo(x, y); g.bezierCurveTo(x + L * 0.3, y + (rnd() - 0.5) * 8, x + L * 0.6, y + (rnd() - 0.5) * 8, x + L, y + (rnd() - 0.5) * 4); g.stroke(); }
        g.fillStyle = "rgba(70,35,10,.45)"; g.fillRect(x, r * lw, 2, lw); x += L;
      }
      g.fillStyle = "rgba(70,35,10,.5)"; g.fillRect(0, r * lw, 1024, 2.5);
    }
  }
  desenharTapete({ g }) {
    g.fillStyle = "#C7D2FE"; g.fillRect(0, 0, 512, 512);
    g.strokeStyle = "#A5B4FC"; g.lineWidth = 10; rr(g, 22, 22, 468, 468, 24); g.stroke();
    g.setLineDash([16, 12]); g.lineWidth = 4; g.strokeStyle = "#818CF8"; rr(g, 44, 44, 424, 424, 18); g.stroke(); g.setLineDash([]);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(99,102,241,${Math.random() * 0.06})`; g.fillRect(Math.random() * 512, Math.random() * 512, 2, 2); }
  }
  desenharQuadro({ g }) {
    const gr = g.createLinearGradient(0, 0, 0, 192); gr.addColorStop(0, "#1E3A8A"); gr.addColorStop(1, "#0F172A"); g.fillStyle = gr; g.fillRect(0, 0, 256, 192);
    g.strokeStyle = "#22C55E"; g.lineWidth = 6; g.lineJoin = "round"; g.beginPath(); [[20, 150], [60, 130], [95, 140], [130, 95], [165, 105], [200, 60], [236, 40]].forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
    g.fillStyle = "#FACC15"; g.beginPath(); g.arc(236, 40, 8, 0, TAU); g.fill();
    g.fillStyle = "rgba(255,255,255,.85)"; g.font = "bold 20px system-ui"; g.fillText("LONGO PRAZO", 20, 34);
  }

  /* ----- telas ao vivo ----- */
  desenharCeu(T) {
    const { g, t } = this.ceu; const h = this.h; const noite = this.noite;
    const chuva = h === "triste" || h === "preocupado";
    const top = noite ? (chuva ? "#1E293B" : "#0B1026") : h === "triste" ? "#64748B" : h === "preocupado" ? "#7C93B5" : "#4FA3FF";
    const bot = noite ? (chuva ? "#334155" : "#312E81") : h === "triste" ? "#94A3B8" : h === "preocupado" ? "#B6C4D8" : "#BFE3FF";
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, top); gr.addColorStop(1, bot); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    if (noite && !chuva) { for (let i = 0; i < 40; i++) { const tw = 0.5 + 0.5 * Math.sin(T * 2 + i * 7); g.fillStyle = `rgba(255,255,255,${0.3 + 0.6 * tw})`; g.fillRect((i * 97) % 256, (i * 53) % 150, 2, 2); } g.fillStyle = "#FEF3C7"; g.beginPath(); g.arc(190, 52, 20, 0, TAU); g.fill(); g.fillStyle = top; g.beginPath(); g.arc(200, 46, 18, 0, TAU); g.fill(); }
    else if (!chuva) { g.save(); g.translate(195, 60); g.rotate(T * 0.2); g.fillStyle = "#FDE047"; for (let i = 0; i < 10; i++) { g.rotate(TAU / 10); g.fillRect(-2, 26, 4, 12); } g.restore(); g.fillStyle = "#FDE047"; g.beginPath(); g.arc(195, 60, 22, 0, TAU); g.fill(); }
    const nuvem = (x, y, s, c) => { g.fillStyle = c; g.beginPath(); g.ellipse(x, y, 34 * s, 14 * s, 0, 0, TAU); g.ellipse(x + 18 * s, y - 10 * s, 22 * s, 16 * s, 0, 0, TAU); g.ellipse(x - 16 * s, y - 6 * s, 18 * s, 13 * s, 0, 0, TAU); g.fill(); };
    const nc = chuva ? (noite ? "#475569" : "#CBD5E1") : noite ? "rgba(148,163,184,.35)" : "#FFFFFF";
    nuvem(((T * 8) % 360) - 50, 70, 1, nc); nuvem(((T * 5 + 180) % 360) - 50, 110, 0.75, nc); if (chuva) nuvem(((T * 6 + 90) % 360) - 50, 40, 1.2, nc);
    // skyline
    const pr = [[0, 150, 40], [36, 120, 30], [62, 165, 44], [100, 105, 34], [130, 140, 40], [166, 90, 30], [192, 150, 36], [224, 125, 40]];
    pr.forEach(([x, y, w], i) => { g.fillStyle = noite ? "#111827" : chuva ? "#475569" : "#64748B"; g.fillRect(x, y, w, 256 - y);
      for (let wy = y + 8; wy < 240; wy += 14) for (let wx = x + 5; wx < x + w - 6; wx += 10) { const on = noite ? ((wx * 7 + wy * 13 + i) % 5) < 2 : false; g.fillStyle = on ? "#FDE68A" : noite ? "#1F2937" : "rgba(255,255,255,.28)"; g.fillRect(wx, wy, 5, 7); } });
    g.fillStyle = noite ? "#0F172A" : chuva ? "#3F5F4F" : "#4ADE80"; g.fillRect(0, 238, 256, 18);
    if (chuva) { g.strokeStyle = "rgba(224,242,254,.75)"; g.lineWidth = 2; for (let i = 0; i < 36; i++) { const x = (i * 37 + T * 40) % 280 - 12, y = ((i * 71) + T * 420) % 280 - 20; g.beginPath(); g.moveTo(x, y); g.lineTo(x - 6, y + 16); g.stroke(); } }
    t.needsUpdate = true;
  }
  desenharTV(T, modo) {
    const { g, t } = this.tv; const W_ = 512, H_ = 288;
    if (modo === "jogo") {
      const gr = g.createLinearGradient(0, 0, 0, H_); gr.addColorStop(0, "#1E1B4B"); gr.addColorStop(1, "#4338CA"); g.fillStyle = gr; g.fillRect(0, 0, W_, H_);
      for (let i = 0; i < 30; i++) { g.fillStyle = "rgba(255,255,255,.7)"; g.fillRect((i * 83 - T * 10) % W_ + (i * 83 - T * 10 < 0 ? W_ : 0), (i * 37) % 160, 2, 2); }
      const off = (T * 120) % 64;
      g.fillStyle = "#16A34A"; g.fillRect(0, 232, W_, 56); g.fillStyle = "#22C55E"; for (let x = -off; x < W_; x += 64) g.fillRect(x, 232, 32, 8);
      const plats = [[200, 170], [380, 140], [560, 180]]; g.fillStyle = "#A16207"; plats.forEach(([x, y]) => { const px = ((x - T * 120) % 600 + 600) % 600 - 80; g.fillRect(px, y, 80, 14); g.fillStyle = "#FACC15"; g.beginPath(); g.arc(px + 40, y - 20 + Math.sin(T * 6) * 3, 8, 0, TAU); g.fill(); g.fillStyle = "#A16207"; });
      const j = Math.abs(Math.sin(T * 3.2)); const hy = 196 - j * 70;
      g.fillStyle = "#EF4444"; g.fillRect(110, hy, 26, 36); g.fillStyle = "#1D4ED8"; g.fillRect(110, hy + 22, 26, 14); g.fillStyle = "#F1C19A"; g.fillRect(114, hy - 14, 18, 16);
      const ex = ((420 - T * 160) % 560 + 560) % 560 - 40; g.fillStyle = "#7C2D12"; g.beginPath(); g.ellipse(ex, 220, 18, 12, 0, PI, 0); g.fill(); g.fillRect(ex - 18, 220, 36, 12);
      g.fillStyle = "#FFF"; g.font = "bold 20px monospace"; g.fillText("MOEDAS × " + String(Math.floor(T * 2) % 1000).padStart(3, "0"), 16, 30); g.fillText("1-1", 450, 30);
    } else {
      const sobe = this.h === "feliz" || this.h === "euforico";
      const cor = sobe ? "#22C55E" : "#EF4444";
      g.fillStyle = "#0B1220"; g.fillRect(0, 0, W_, H_);
      g.strokeStyle = "rgba(148,163,184,.15)"; g.lineWidth = 1; for (let y = 60; y < 230; y += 34) { g.beginPath(); g.moveTo(0, y); g.lineTo(W_, y); g.stroke(); }
      const k = ((T * 0.25) % 1.4); const n = 46; g.strokeStyle = cor; g.lineWidth = 4; g.lineJoin = "round"; g.beginPath();
      for (let i = 0; i <= Math.min(n, Math.floor(n * k)); i++) { const x = 20 + i * (W_ - 40) / n; const base = sobe ? 200 - i * 2.6 : 90 + i * 2.6; const y = base + Math.sin(i * 1.7) * 10 + Math.sin(i * 0.6) * 12; i ? g.lineTo(x, y) : g.moveTo(x, y); }
      g.stroke();
      g.fillStyle = "#DC2626"; g.fillRect(0, 0, 150, 40); g.fillStyle = "#FFF"; g.font = "bold 22px system-ui"; g.fillText("RADAR NEWS", 12, 28);
      if (Math.floor(T * 1.5) % 2) { g.fillStyle = "#FFF"; g.beginPath(); g.arc(170, 20, 6, 0, TAU); g.fill(); } g.font = "bold 14px system-ui"; g.fillText("AO VIVO", 182, 25);
      const tit = { feliz: "CARTEIRA NO VERDE", euforico: "DIA HISTÓRICO NA CARTEIRA!", preocupado: "MERCADO NO VERMELHO", triste: "QUEDA FORTE HOJE" }[this.h] || "MERCADO HOJE";
      g.fillStyle = "rgba(15,23,42,.92)"; g.fillRect(0, 224, W_, 30); g.fillStyle = cor; g.fillRect(0, 224, 8, 30);
      g.fillStyle = "#FFF"; g.font = "bold 18px system-ui"; g.fillText(tit + (this.pctTxt ? "  " + this.pctTxt : ""), 18, 245);
      g.fillStyle = "#1E293B"; g.fillRect(0, 254, W_, 34); g.font = "bold 16px monospace";
      const fita = this.fita(); let x = -((T * 60) % Math.max(1, fita.w)); g.save(); g.beginPath(); g.rect(0, 254, W_, 34); g.clip();
      while (x < W_) { for (const it of fita.itens) { g.fillStyle = "#CBD5E1"; g.fillText(it.t, x, 277); x += g.measureText(it.t).width + 8; g.fillStyle = it.v >= 0 ? "#4ADE80" : "#F87171"; g.fillText(it.s, x, 277); x += g.measureText(it.s).width + 26; } if (!fita.itens.length) break; }
      g.restore();
    }
    t.needsUpdate = true;
  }
  fita() {
    const a = (this.d.ativos || []).filter((x) => x.vd != null);
    const itens = a.length ? a.map((x) => ({ t: x.t, v: x.vd, s: (x.vd >= 0 ? "▲" : "▼") + Math.abs(x.vd).toFixed(2).replace(".", ",") + "%" })) : [{ t: "IBOV", v: 0, s: "—" }];
    return { itens, w: itens.length * 160 };
  }
  desenharArcade(T) {
    const { g, t } = this.arcade; g.fillStyle = "#0B0B1A"; g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 5; i++) { const x = (i * 30 + T * 40) % 140 - 10; g.fillStyle = ["#F43F5E", "#22C55E", "#FACC15", "#38BDF8", "#A855F7"][i]; g.fillRect(x, 20 + i * 14, 10, 8); }
    g.fillStyle = "#22C55E"; g.fillRect(56 + Math.sin(T * 3) * 30, 108, 16, 8);
    if (Math.floor(T * 4) % 2) { g.fillStyle = "#FFF"; g.fillRect(64 + Math.sin(T * 3) * 30, 90 - ((T * 120) % 80), 2, 8); }
    g.fillStyle = "#FDE047"; g.font = "bold 12px monospace"; g.fillText("HI " + String(Math.floor(T * 37) % 99999).padStart(5, "0"), 8, 12);
    t.needsUpdate = true;
  }
  desenharMonitor(T) {
    const { g, t } = this.mon; const Wm = 1024, Hm = 448; const d = this.d; const h = this.h;
    const corH = { triste: "#EF4444", preocupado: "#F97316", tranquilo: "#60A5FA", feliz: "#22C55E", euforico: "#FACC15" }[h];
    const bg = g.createLinearGradient(0, 0, 0, Hm); bg.addColorStop(0, "#0B1220"); bg.addColorStop(1, "#111A2E"); g.fillStyle = bg; g.fillRect(0, 0, Wm, Hm);
    // barra de cima
    g.fillStyle = "#0F172A"; g.fillRect(0, 0, Wm, 40); g.fillStyle = corH; g.beginPath(); g.arc(22, 20, 7, 0, TAU); g.fill();
    g.fillStyle = "#E2E8F0"; g.font = "bold 18px system-ui"; g.fillText("RADAR DA CARTEIRA", 38, 27);
    const agora = new Date(); const hh = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    g.font = "bold 18px monospace"; g.textAlign = "right"; g.fillText(hh, Wm - 16, 27);
    if (d.fechado) { g.fillStyle = "#64748B"; g.font = "bold 13px system-ui"; g.fillText("BOLSA FECHADA", Wm - 120, 26); }
    else if (d.sim) { g.fillStyle = "#F59E0B"; g.font = "bold 13px system-ui"; g.fillText("SIMULAÇÃO", Wm - 120, 26); }
    g.textAlign = "left";
    if (this.secao) { g.fillStyle = "#94A3B8"; g.font = "15px system-ui"; if (window.RI) window.RI.desenhar(g, "map-pin", 268, 21, 15, "#94A3B8"); g.fillText(this.secao, 278, 26); }
    // painel: resultado do dia
    const px = 16, py = 54;
    g.fillStyle = "rgba(30,41,59,.65)"; rr(g, px, py, 330, 340, 14); g.fill();
    g.fillStyle = "#94A3B8"; g.font = "bold 14px system-ui"; g.fillText("SEU DIA", px + 16, py + 28);
    const pct = d.pct; const txt = pct == null || !isFinite(pct) ? "—" : (pct > 0 ? "+" : "") + pct.toFixed(2).replace(".", ",") + "%";
    g.fillStyle = pct > 0 ? "#4ADE80" : pct < 0 ? "#F87171" : "#E2E8F0"; g.font = "bold 64px system-ui"; g.fillText(txt, px + 14, py + 98);
    g.fillStyle = "#CBD5E1"; g.font = "16px system-ui"; g.fillText(this.titulo || "", px + 16, py + 126);
    // gráfico com a evolução do dia nesta sessão
    const gx = px + 16, gy = py + 150, gw = 298, gh = 160;
    g.strokeStyle = "rgba(148,163,184,.15)"; g.lineWidth = 1; for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(gx, gy + i * gh / 4); g.lineTo(gx + gw, gy + i * gh / 4); g.stroke(); }
    const hs = this.hist.length ? this.hist : [{ v: pct || 0 }];
    const vals = hs.map((x) => x.v).concat([0]); let mn = Math.min(...vals), mx = Math.max(...vals); if (mx - mn < 0.4) { const c = (mx + mn) / 2; mn = c - 0.2; mx = c + 0.2; }
    const yv = (v) => gy + gh - ((v - mn) / (mx - mn)) * gh;
    g.setLineDash([4, 4]); g.strokeStyle = "rgba(148,163,184,.4)"; g.beginPath(); g.moveTo(gx, yv(0)); g.lineTo(gx + gw, yv(0)); g.stroke(); g.setLineDash([]);
    const n = hs.length; const pts = hs.map((x, i) => [gx + (n === 1 ? gw : (i / (n - 1)) * gw), yv(x.v)]);
    if (n === 1) pts.unshift([gx, pts[0][1]]);
    const cor = (pct || 0) >= 0 ? "#22C55E" : "#EF4444";
    const ar = g.createLinearGradient(0, gy, 0, gy + gh); ar.addColorStop(0, cor + "55"); ar.addColorStop(1, cor + "00");
    g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.lineTo(pts[pts.length - 1][0], gy + gh); g.lineTo(pts[0][0], gy + gh); g.closePath(); g.fillStyle = ar; g.fill();
    g.strokeStyle = cor; g.lineWidth = 3; g.lineJoin = "round"; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
    const lp = pts[pts.length - 1]; const pu = (T * 1.5) % 1; g.fillStyle = cor; g.beginPath(); g.arc(lp[0], lp[1], 5, 0, TAU); g.fill(); g.strokeStyle = cor; g.globalAlpha = 1 - pu; g.lineWidth = 2; g.beginPath(); g.arc(lp[0], lp[1], 5 + pu * 14, 0, TAU); g.stroke(); g.globalAlpha = 1;
    // painel: ativos ao vivo
    const ax = 362, ay = 54, aw = 330;
    g.fillStyle = "rgba(30,41,59,.65)"; rr(g, ax, ay, aw, 340, 14); g.fill();
    g.fillStyle = "#94A3B8"; g.font = "bold 14px system-ui"; g.fillText("SEUS ATIVOS · AO VIVO", ax + 16, ay + 28);
    const at = (d.ativos || []).slice(0, 8);
    if (!at.length) { g.fillStyle = "#64748B"; g.font = "16px system-ui"; g.fillText("Adicione ativos para", ax + 16, ay + 80); g.fillText("acompanhar aqui.", ax + 16, ay + 102); }
    const agoraMs = performance.now();
    at.forEach((a, i) => {
      const y = ay + 48 + i * 36; const fl = this.flash[a.t];
      if (fl && agoraMs - fl.t < 2500) { const k = 1 - (agoraMs - fl.t) / 2500; g.fillStyle = (fl.up ? "rgba(34,197,94," : "rgba(239,68,68,") + (0.35 * k).toFixed(3) + ")"; rr(g, ax + 8, y, aw - 16, 32, 8); g.fill(); }
      g.fillStyle = "#E2E8F0"; g.font = "bold 17px monospace"; g.fillText(a.t, ax + 16, y + 22);
      g.fillStyle = "#94A3B8"; g.font = "15px monospace"; g.textAlign = "right";
      if (a.preco != null) g.fillText((a.moeda === "USD" ? "US$ " : "R$ ") + a.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), ax + 214, y + 22);
      const v = a.vd; g.fillStyle = v == null ? "#64748B" : v >= 0 ? "#4ADE80" : "#F87171"; g.font = "bold 16px monospace";
      g.fillText(v == null ? "—" : (v >= 0 ? "▲ " : "▼ ") + Math.abs(v).toFixed(2).replace(".", ",") + "%", ax + aw - 16, y + 22); g.textAlign = "left";
    });
    // painel: suas ações no site
    const fx = 708, fy = 54, fw = 300;
    g.fillStyle = "rgba(30,41,59,.65)"; rr(g, fx, fy, fw, 340, 14); g.fill();
    g.fillStyle = "#94A3B8"; g.font = "bold 14px system-ui"; g.fillText("O QUE VOCÊ ESTÁ FAZENDO", fx + 16, fy + 28);
    const fd = this.feed.slice(-8);
    fd.forEach((e, i) => {
      const y = fy + 58 + i * 34; const novo = i === fd.length - 1; const idade = agoraMs - e.ms;
      let tx = e.txt; if (novo && idade < 700) tx = tx.slice(0, Math.max(1, Math.floor(tx.length * idade / 700)));
      g.fillStyle = "#64748B"; g.font = "13px monospace"; g.fillText(e.hora, fx + 16, y);
      g.fillStyle = novo ? corH : "#CBD5E1"; g.font = (novo ? "bold " : "") + "15px system-ui";
      g.fillText("› " + tx + (novo && Math.floor(T * 2.5) % 2 ? " ▍" : ""), fx + 66, y);
    });
    if (!fd.length) { g.fillStyle = "#64748B"; g.font = "15px system-ui"; g.fillText("› aguardando você…" + (Math.floor(T * 2) % 2 ? " ▍" : ""), fx + 16, fy + 60); }
    // fita de cotações
    g.fillStyle = "#020617"; g.fillRect(0, 408, Wm, 40); g.font = "bold 17px monospace";
    const fita = this.fita(); let x = -((T * 70) % 4000); g.save(); g.beginPath(); g.rect(0, 408, Wm, 40); g.clip();
    let guard = 0; while (x < Wm && guard++ < 60) for (const it of fita.itens) { g.fillStyle = "#CBD5E1"; g.fillText(it.t, x, 434); x += g.measureText(it.t).width + 8; g.fillStyle = it.v >= 0 ? "#4ADE80" : "#F87171"; g.fillText(it.s, x, 434); x += g.measureText(it.s).width + 30; }
    g.restore();
    t.needsUpdate = true;
  }

  /* ----- dados do app ----- */
  atualizar(d) {
    const ant = this.d; this.d = d;
    const h = d.humor || "tranquilo";
    if (this.boneco) { this.boneco.setCor(d.cor); if (d.icone !== ant.icone) this.boneco.setIcone(d.icone); if (d.boneco !== ant.boneco || d.acessorio !== ant.acessorio) this.boneco.setAparencia(d.boneco, d.acessorio); }
    if (this.cadAcento) this.cadAcento.color.set(d.cor || "#2457F5");
    this.titulo = d.titulo; this.pctTxt = d.pct == null || !isFinite(d.pct) ? "" : (d.pct > 0 ? "+" : "") + d.pct.toFixed(2).replace(".", ",") + "%";
    // flash nos ativos que mudaram
    const velhos = Object.fromEntries((ant.ativos || []).map((a) => [a.t, a]));
    for (const a of d.ativos || []) { const o = velhos[a.t]; if (o && o.preco != null && a.preco != null && Math.abs(o.preco - a.preco) > 1e-9) this.flash[a.t] = { t: performance.now(), up: a.preco > o.preco }; }
    if (ant.ativos && JSON.stringify((ant.ativos || []).map((a) => [a.t, a.preco])) !== JSON.stringify((d.ativos || []).map((a) => [a.t, a.preco]))) this.log("cotações atualizadas");
    if (!d.sim && d.pct != null && isFinite(d.pct)) { const l = this.hist[this.hist.length - 1]; if (!l || Math.abs(l.v - d.pct) > 1e-6) { this.hist.push({ v: d.pct, t: Date.now() }); if (this.hist.length > 60) this.hist.shift(); } }
    if (h !== this.h) {
      if (this.h) this.log(d.sim ? "simulando: " + (d.titulo || h).toLowerCase() : "humor: " + (d.titulo || h).toLowerCase());
      this.h = h; this.tH = performance.now(); this.aplicarHumor();
    }
    const tem = d.tem || {};
    for (const id in this.dec) this.dec[id].visible = !!tem[id];
    if (this.plantaFrente) this.plantaFrente.visible = !tem.touro;
    this.renderer.domElement.setAttribute("aria-label", "Escritório 3D: " + (d.titulo || ""));
    this.sujo = true;
  }
  log(txt) {
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const u = this.feed[this.feed.length - 1]; if (u && u.txt === txt && performance.now() - u.ms < 1500) return;
    this.feed.push({ txt: txt.length > 26 ? txt.slice(0, 25) + "…" : txt, hora, ms: performance.now() }); if (this.feed.length > 30) this.feed.shift();
    this.ultimaAcao = performance.now(); this.sujo = true;
  }
  aplicarHumor() {
    const L = LUZ[this.h];
    this.cfg = L; this.rt = RT[this.h];
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
    for (const s of this.spots || []) s.intensity = this.h === "euforico" ? 9 : 0;
  }

  /* ----- câmera e controles ----- */
  ligarControles() {
    const c = this.renderer.domElement; let arr = null;
    c.style.touchAction = "pan-y";
    c.addEventListener("pointerdown", (e) => { arr = { x: e.clientX, y: e.clientY, az: this.az, el: this.el_, id: e.pointerId, moveu: false }; });
    window.addEventListener("pointermove", (e) => {
      if (!arr || e.pointerId !== arr.id) return;
      const dx = e.clientX - arr.x, dy = e.clientY - arr.y;
      if (!arr.moveu && Math.hypot(dx, dy) > 6) { arr.moveu = true; try { c.setPointerCapture(e.pointerId); } catch (_) {} if (this.camModo !== "sala") this.setCam("sala", true); }
      if (arr.moveu) { this.az = cl(arr.az - dx * 0.006, 0.12, PI / 2 - 0.12); if (e.pointerType !== "touch") this.el_ = cl(arr.el + dy * 0.004, 0.22, 1.0); this.sujo = true; }
    });
    const fim = () => { if (arr && arr.moveu) this.log("girou a câmera"); arr = null; };
    window.addEventListener("pointerup", fim); window.addEventListener("pointercancel", fim);
    c.addEventListener("dblclick", () => { this.az = PI / 4; this.el_ = 0.5; this.setCam("sala"); });
  }
  setCam(m, silencio) { this.camModo = m; this.sujo = true; if (!silencio) this.log({ sala: "visão da sala", tela: "zoom no computador", seguir: "seguindo o boneco" }[m] || m); }
  redimensionar() {
    const w = this.el.clientWidth || 600; const h = Math.round(cl(w < 640 ? w * 0.82 : w * 0.6, 300, 660));
    this.renderer.setSize(w, h, false); this.renderer.domElement.style.width = "100%"; this.renderer.domElement.style.height = h + "px";
    this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); this.sujo = true;
  }
  alvoCamera(T) {
    const asp = this.cam.aspect;
    if (window.__ofCamOv) return window.__ofCamOv(this, T, V);   // depuração
    if (this.camModo === "tela") return asp < 1 ? { pos: V(7.12, 1.2, 1.1), alvo: V(6.8, 1.13, 0.22), fov: 70 } : { pos: V(7.2, 1.24, 1.2), alvo: V(6.87, 1.12, 0.22), fov: 50 };
    if (this.camModo === "seguir") {
      const r = this.boneco.root.position; const az = this.az + 0.1 * Math.sin(T * 0.2), el = 0.42, dist = asp < 1 ? 4.6 : 3.9;
      const pos = V(r.x + Math.sin(az) * Math.cos(el) * dist, 0.95 + Math.sin(el) * dist, r.z + Math.cos(az) * Math.cos(el) * dist);
      return { pos, alvo: V(r.x, 0.95, r.z), fov: 38 };
    }
    const fov = 30, sway = this.reduz ? 0 : Math.sin(T * 0.15) * 0.025;
    const chave = [this.az.toFixed(3), this.el_.toFixed(3), asp.toFixed(3)].join();
    if (chave !== this.fitKey) { this.fitKey = chave; this.fit = this.enquadrar(this.az, this.el_, fov, asp); }
    const { dist, alvo } = this.fit; const ce = Math.cos(this.el_), az = this.az + sway;
    return { pos: V(alvo.x + Math.sin(az) * ce * dist, alvo.y + Math.sin(this.el_) * dist, alvo.z + Math.cos(az) * ce * dist), alvo: alvo.clone(), fov };
  }
  // acha distância e centro para a sala inteira caber na tela
  enquadrar(az, el, fov, asp) {
    const cam = new THREE.PerspectiveCamera(fov, asp, 0.1, 100); const ce = Math.cos(el);
    const dirv = V(Math.sin(az) * ce, Math.sin(el), Math.cos(az) * ce);
    const cantos = []; for (const x of [-0.25, W + 0.1]) for (const y of [-0.3, H + 0.05]) for (const z of [-0.25, D + 0.1]) cantos.push(V(x, y, z));
    let alvo = V(W / 2, 0.9, D / 2), dist = 18; const mx = asp < 1 ? 0.98 : 0.95, my = asp < 1 ? 0.92 : 0.93;
    for (let it = 0; it < 4; it++) {
      let lo = 4, hi = 60;
      for (let i = 0; i < 22; i++) {
        const d = (lo + hi) / 2; cam.position.copy(alvo).addScaledVector(dirv, d); cam.lookAt(alvo); cam.updateMatrixWorld(); cam.updateProjectionMatrix();
        let ok = true; for (const c of cantos) { const p = c.clone().project(cam); if (Math.abs(p.x) > mx || Math.abs(p.y) > my) { ok = false; break; } }
        if (ok) hi = d; else lo = d;
      }
      dist = hi; cam.position.copy(alvo).addScaledVector(dirv, dist); cam.lookAt(alvo); cam.updateMatrixWorld();
      let x0 = 9, x1 = -9, y0 = 9, y1 = -9; for (const c of cantos) { const p = c.clone().project(cam); x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y); }
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      const alt = Math.tan((fov * PI) / 360) * dist; const dir = new THREE.Vector3(), up = new THREE.Vector3();
      cam.matrixWorld.extractBasis(dir, up, new THREE.Vector3());
      alvo.addScaledVector(dir, cx * alt * asp).addScaledVector(up, cy * alt);
    }
    return { dist, alvo };
  }

  /* ----- quadro a quadro ----- */
  laco(ts) {
    this.raf = 0;
    if (!this.el.isConnected) { this.destruir(); return; }
    const pausado = document.hidden || this.el.closest(".of-pausa");
    if (!pausado) {
      const agora = performance.now(); const dt = Math.min(0.05, (agora - this.tAnt) / 1000); this.tAnt = agora;
      const T = this.reduz ? 2 : (performance.now() - this.t0) / 1000;
      if (!this.reduz || this.sujo) this.quadro(T, dt);
      this.sujo = false;
    } else this.tAnt = performance.now();
    this.raf = requestAnimationFrame(this.laco);
  }
  quadro(T, dt) {
    const hr = new Date().getHours(); const noite = window.__ofNoite != null ? !!window.__ofNoite : hr < 6 || hr >= 19;
    if (noite !== this.noite) { this.noite = noite; this.aplicarLuz(); }
    const Th = window.__ofT != null ? window.__ofT : this.reduz ? 2 : (performance.now() - this.tH) / 1000;
    const b = this.boneco; const r = avaliar(this.rt, Th); const p = r.pose;
    b.root.position.set(r.pos[0], 0, r.pos[1]); b.root.rotation.y = r.pos[2] + (p.yawAdd || 0);
    b.aplicar(p, T, dt); b.desenharRosto(p, T);
    b.blob.position.set(r.pos[0], 0.004, r.pos[1]); b.blob.material.opacity = cl(1 - (p.dy || 0) * 2, 0.3, 1);
    // itens
    const it = this.itens; const q = b.root.quaternion;
    it.controle.visible = p.item === "controle"; this.ctrlMesa.visible = !it.controle.visible;
    if (it.controle.visible) { it.controle.position.copy(b.mL).add(b.mR).multiplyScalar(0.5).add(V(0, 0.01, 0)); it.controle.quaternion.copy(q); it.controle.rotateX(-0.5); }
    it.xicara.visible = p.item === "xicara";
    if (it.xicara.visible) { b.R.hand.updateMatrixWorld(); it.xicara.position.copy(b.mR).add(V(Math.sin(r.pos[2]) * 0.05, 0.06, Math.cos(r.pos[2]) * 0.05)); it.xicara.quaternion.copy(q); }
    it.nota.visible = p.item === "nota";
    if (it.nota.visible) { it.nota.position.copy(b.mR).add(V(0, 0.05, 0)); it.nota.quaternion.copy(q); it.nota.rotateX(1.2); }
    const taco = it.taco; taco.visible = p.item === "tacoV" || p.item === "tacoShot";
    if (p.item === "tacoV") {
      const up = V(Math.sin(r.pos[2]) * 0.12, 1, Math.cos(r.pos[2]) * 0.12).normalize();
      const base = b.mL.clone().addScaledVector(up, -Math.max(0.05, b.mL.y - 0.02) / up.y);
      taco.position.copy(base); taco.quaternion.setFromUnitVectors(V(0, 1, 0), up);
    } else if (p.item === "tacoShot") {
      const dir = this.dirTaco(b.mR, b.mL); taco.position.copy(b.mR).addScaledVector(dir, -0.25); taco.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
    }
    // bolas da sinuca
    const B = this.bolas, s = this.sinuca, yb = 0.81;
    let est = this.h === "feliz" ? p.bolas || "fim" : "ini";
    if (est === "ini") { this.bB.position.set(B.R[0], yb, B.R[1]); this.bA.position.set(B.Y[0], yb, B.Y[1]); this.bA.visible = true; this.bA.scale.setScalar(1); }
    else if (est === "jogo") {
      const tl = r.s && r.s.tipo === "acao" ? r.tt - r.s.t0 : 9;
      const k1 = fase(tl, TACADA, TACADA + 0.28), k2 = fase(tl, TACADA + 0.28, TACADA + 0.95), k3 = fase(tl, TACADA + 0.95, TACADA + 1.1);
      const cb = k2 > 0 ? [lerp(B.C[0], B.fimB[0], sai(k2)), lerp(B.C[1], B.fimB[1], sai(k2))] : [lerp(B.R[0], B.C[0], k1), lerp(B.R[1], B.C[1], k1)];
      this.bB.position.set(cb[0], yb, cb[1]);
      const ya = [lerp(B.Y[0], POCKET[0], sai(k2)), lerp(B.Y[1], POCKET[1], sai(k2))];
      this.bA.position.set(ya[0], yb - 0.06 * k3, ya[1]); this.bA.scale.setScalar(1 - 0.6 * k3); this.bA.visible = k3 < 1;
      this.bA.rotation.x += dt * 20 * (k2 > 0 && k2 < 1 ? 1 : 0);
    } else { this.bB.position.set(B.fimB[0], yb, B.fimB[1]); this.bA.visible = false; }
    // nuvem de chuva e balão
    const cab = V(); b.head.getWorldPosition(cab);
    this.nuvem.visible = p.nuvem > 0.5;
    if (this.nuvem.visible) { this.nuvem.position.set(cab.x, cab.y + 0.7 + Math.sin(T * 1.6) * 0.03, cab.z); this.gotas.forEach((g, i) => { const k = (T * 1.8 + i * 0.37) % 1; g.position.y = -0.12 - k * 0.4; g.material.opacity = 0.9 * (1 - k); }); }
    this.balaoS.visible = p.balao > 0.05;
    if (this.balaoS.visible) {
      if (p.balaoT !== this.balaoT) { this.balaoT = p.balaoT; const { g, t } = this.balao; g.clearRect(0, 0, 128, 128); g.fillStyle = "#FFF"; g.strokeStyle = "#CBD5E1"; g.lineWidth = 3; rr(g, 8, 8, 112, 86, 22); g.fill(); g.stroke(); g.beginPath(); g.moveTo(40, 92); g.lineTo(34, 120); g.lineTo(62, 93); g.fill(); if (window.RI) window.RI.desenhar(g, p.balaoT, 64, 51, 60, p.balaoT === "chart-line-down" ? "#DC2626" : "#F59E0B"); t.needsUpdate = true; }
      this.balaoS.position.set(cab.x + 0.25, cab.y + 0.55, cab.z); this.balaoS.scale.setScalar(0.42 * p.balao); this.balaoS.material.opacity = p.balao;
    }
    // notas jogadas
    if (p.solta && p.solta !== this.ultSolta) { this.ultSolta = p.solta; for (let i = 0; i < 4; i++) { const m = new THREE.Mesh(this.notaGeo, this.notaMat); m.castShadow = true; m.position.copy(b.mR); this.scene.add(m); const fw = V(Math.sin(r.pos[2]), 0, Math.cos(r.pos[2])); this.notas.push({ m, v: V(fw.x * 0.6 + (Math.random() - 0.5) * 1.2, 2.2 + Math.random() * 1.2, fw.z * 0.6 + (Math.random() - 0.5) * 1.2), rv: V(Math.random() * 6, Math.random() * 6, Math.random() * 6), vida: 0 }); } }
    if (!p.solta) this.ultSolta = 0;
    for (let i = this.notas.length - 1; i >= 0; i--) {
      const n = this.notas[i]; n.vida += dt;
      if (n.m.position.y > 0.01) { n.v.y -= 4.5 * dt; n.v.multiplyScalar(0.985); n.m.position.addScaledVector(n.v, dt); n.m.rotation.x += n.rv.x * dt; n.m.rotation.y += n.rv.y * dt; n.m.rotation.z += n.rv.z * dt; if (n.v.y < -0.6) n.v.y = -0.6 + Math.sin(n.vida * 9) * 0.25; }
      else { n.m.position.y = 0.006; n.m.rotation.set(0, n.m.rotation.y, 0); }
      if (n.vida > 6) { this.scene.remove(n.m); this.notas.splice(i, 1); }
    }
    // cachorro
    const cao = this.dec.cachorro.visible;
    this.cao.g.visible = cao;
    if (cao) { const C = { triste: [1.75, 3.95, 0.8, "dorme"], preocupado: [7.55, 2.2, -2.2, "senta"], tranquilo: [2.2, 2.25, 1.9, "dorme"], feliz: [7.6, 5.75, -2.4, "senta"], euforico: [4.35, 5.7, -0.9, "pula"] }[this.h]; this.cao.g.position.set(C[0], 0, C[1]); this.cao.g.rotation.y = C[2]; this.cao.quadro(C[3], T); }
    // ambiente
    const agora = new Date(); const sg = agora.getSeconds() + agora.getMilliseconds() / 1000, mi = agora.getMinutes() + sg / 60, ho = (agora.getHours() % 12) + mi / 60;
    this.pS.rotation.z = -sg / 60 * TAU; this.pM.rotation.z = -mi / 60 * TAU; this.pH.rotation.z = -ho / 12 * TAU;
    (this.plantas || []).forEach((f, i) => { f.rotation.z = Math.sin(T * 0.8 + i) * 0.03; f.rotation.x = Math.sin(T * 0.6 + i * 2) * 0.02; });
    this.vapor.forEach((v, i) => { const k = (T * 0.35 + i / 4) % 1; v.position.set(0.38 + Math.sin(T * 2 + i) * 0.02, 1.0 + k * 0.4, 4.9); v.material.opacity = 0.35 * Math.sin(PI * k); v.scale.setScalar(0.06 + k * 0.12); });
    const digitando = this.h === "preocupado" && r.s && r.s.mon === "foco";
    this.teclas.material.emissiveIntensity = digitando ? 0.4 + 0.3 * Math.abs(Math.sin(T * 14)) : 0.25;
    this.monLuz.intensity = 1.0 + 0.25 * Math.sin(T * 2.2) + (performance.now() - (this.ultimaAcao || 0) < 900 ? 0.8 : 0);
    if (this.dec.aquario.visible) { this.peixes.forEach((f, i) => { const a = T * (0.5 + i * 0.12) + i * 1.7; f.position.set(0.35 + Math.sin(a * 1.3) * 0.15, 0.95 + i * 0.06 + Math.sin(a * 2) * 0.03, 6.83 + Math.cos(a) * 0.32); f.rotation.y = Math.atan2(-Math.sin(a) * 0.32, Math.cos(a * 1.3) * 0.2) + PI; }); this.bolhas.forEach((bb, i) => { const k = (T * 0.4 + i / 6) % 1; bb.position.set(0.45 + Math.sin(T * 3 + i) * 0.02, 0.8 + k * 0.42, 7.1 - i * 0.02); }); }
    if (this.dec.globo.visible) { this.globo.rotation.y = T * 0.8; this.spots.forEach((sp, i) => { const a = T * 0.9 + i * TAU / 4; sp.target.position.set(3.4 + Math.cos(a) * 2.2, 0, 5.0 + Math.sin(a) * 1.8); }); }
    if (this.dec.neon.visible) { const pisca = Math.sin(T * 7) > 0.97 || Math.sin(T * 23) > 0.995; this.neonM.opacity = pisca ? 0.35 : 1; this.neonHalo.material.opacity = pisca ? 0.1 : 0.35; }
    if (this.dec.porquinho.visible) this.porco.position.y = 0.77 + Math.abs(Math.sin(T * 1.6)) * 0.015;
    if (this.confete.visible) {
      const o = this.dummy || (this.dummy = new THREE.Object3D());
      this.confData.forEach((c, i) => { const y = H - ((T * c.v + c.y0) % (H + 0.3)); o.position.set(c.x + Math.sin(T * 1.5 + c.sw) * 0.2, y, c.z + Math.cos(T * 1.2 + c.sw) * 0.15); o.rotation.set(T * c.rv + c.r, T * c.rv * 0.7, c.r); o.updateMatrix(); this.confete.setMatrixAt(i, o.matrix); });
      this.confete.instanceMatrix.needsUpdate = true;
    }
    // telas (com taxa menor para poupar bateria)
    const perto = this.camModo === "tela";
    if (this.reduz || T - (this.tMon || -9) > (perto ? 1 / 30 : 1 / 10) || this.sujo) { this.tMon = T; this.desenharMonitor(T); }
    if (this.reduz || T - (this.tTv || -9) > 1 / 20) { this.tTv = T; this.desenharTV(T, this.h === "tranquilo" ? "jogo" : "news"); this.desenharCeu(T); if (this.dec.fliperama.visible) this.desenharArcade(T); }
    // câmera
    const c = this.alvoCamera(T);
    if (!this.camAtual || this.reduz) this.camAtual = { pos: c.pos.clone(), alvo: c.alvo.clone(), fov: c.fov };
    const k = window.__ofT != null ? 1 : 1 - Math.exp(-dt * 4);
    this.camAtual.pos.lerp(c.pos, k); this.camAtual.alvo.lerp(c.alvo, k); this.camAtual.fov = lerp(this.camAtual.fov, c.fov, k);
    this.cam.position.copy(this.camAtual.pos); this.cam.lookAt(this.camAtual.alvo); if (Math.abs(this.cam.fov - this.camAtual.fov) > 0.01) { this.cam.fov = this.camAtual.fov; this.cam.updateProjectionMatrix(); }
    this.renderer.render(this.scene, this.cam);
  }
  destruir() { cancelAnimationFrame(this.raf); this.ro && this.ro.disconnect(); this.renderer.dispose(); }
}
