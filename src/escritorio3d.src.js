// Arquivo gerado a partir de src/partes/ por src/build.mjs. Edite as partes, não este arquivo.
/* Radar da Carteira: escritório 3D (Three.js).
   Fonte. O arquivo publicado (../escritorio3d.js) é gerado por:  node src/build.mjs
   Carregado sob demanda por escritorio.js. */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

/* ---------- utilidades ---------- */
const PI = Math.PI, TAU = PI * 2;
const cl = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const suave = (t) => { t = cl(t); return t * t * (3 - 2 * t); };
const io = (t) => { t = cl(t); return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
const sai = (t) => 1 - Math.pow(1 - cl(t), 3);
const fase = (t, a, b) => cl((t - a) / (b - a));
const jan = (t, a, b, r = 0.35) => suave((t - a) / r) * suave((b - t) / r);
const difAng = (a, b) => ((((b - a + PI) % TAU) + TAU) % TAU) - PI;
const angLerp = (a, b, t) => a + difAng(a, b) * t;
const yawPara = (de, para) => Math.atan2(para[0] - de[0], para[1] - de[1]);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ruido = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
// reamostra uma lista de números para n pontos (interpolação linear pelo índice)
const reamostra = (a, n) => { if (!a.length) return Array(n).fill(0); if (a.length === n) return a.slice(); return Array.from({ length: n }, (_, i) => { const x = n === 1 ? 0 : (i / (n - 1)) * (a.length - 1); const i0 = Math.floor(x), i1 = Math.min(a.length - 1, i0 + 1); return lerp(a[i0], a[i1], x - i0); }); };
const misturaCor = (a, b, t) => "#" + new THREE.Color(a).lerp(new THREE.Color(b), t).getHexString();

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

/* ---------- cabelo em mechas ---------- */
// Mecha: tubo afinando ao longo de uma curva, achatado (mais largo que alto), com cor de vértice
// escura na raiz e clara na ponta (o material dá a cor do cabelo; a cor de vértice dá volume).
function mechaGeo(pts, r0, r1, o = {}) {
  const curva = new THREE.CatmullRomCurve3(pts, false, "centripetal");
  const seg = o.seg || Math.max(6, pts.length * 3), rad = o.rad || 6, ach = o.ach ?? 0.55;
  const fr = curva.computeFrenetFrames(seg, false);
  const pos = [], nor = [], cor = [], idx = [];
  const ref = o.ref || null;   // vetor para onde a parte "achatada" aponta (normal da cabeça)
  for (let i = 0; i <= seg; i++) {
    const t = i / seg; const p = curva.getPointAt(t); const tg = fr.tangents[i];
    let n = fr.normals[i].clone(), b = fr.binormals[i].clone();
    if (ref) { const up = (typeof ref === "function" ? ref(p) : ref).clone(); n = up.sub(tg.clone().multiplyScalar(up.dot(tg))).normalize(); b = new THREE.Vector3().crossVectors(tg, n).normalize(); }
    const r = lerp(r0, r1, Math.pow(t, o.curvaR || 1)) * (o.bulbo ? 1 + o.bulbo * Math.sin(PI * t) : 1) * (0.2 + 0.8 * suave(t / 0.12)) * (0.35 + 0.65 * suave((1 - t) / 0.1));
    const raiz = o.raiz ?? 0.62, ponta = o.ponta ?? 1.12; const c = lerp(raiz, ponta, Math.pow(t, 0.8));
    for (let j = 0; j <= rad; j++) {
      const a = (j / rad) * TAU; const ca = Math.cos(a), sa = Math.sin(a);
      const dn = n.clone().multiplyScalar(ca * ach), db = b.clone().multiplyScalar(sa);
      const off = dn.clone().add(db);
      pos.push(p.x + off.x * r, p.y + off.y * r, p.z + off.z * r);
      const nn = n.clone().multiplyScalar(ca / Math.max(ach, 0.2)).add(b.clone().multiplyScalar(sa)).normalize();
      nor.push(nn.x, nn.y, nn.z); cor.push(c, c, c);
    }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < rad; j++) {
    const a = i * (rad + 1) + j, b2 = a + rad + 1;
    idx.push(a, b2, a + 1, b2, b2 + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(cor, 3));
  g.setIndex(idx); return g;
}
// cor de vértice constante para poder juntar com as mechas
function comCor(geo, c = 0.85) {
  const g = geo.index ? geo : geo; const n = g.attributes.position.count;
  if (g.attributes.uv) g.deleteAttribute("uv");
  if (g.attributes.uv1) g.deleteAttribute("uv1");
  g.setAttribute("color", new THREE.Float32BufferAttribute(new Array(n * 3).fill(c), 3));
  return g.index ? g : g;
}
function juntar(lista) {
  const gs = lista.map((g) => { if (!g.index) { const n = g.attributes.position.count; g.setIndex([...Array(n).keys()]); } ["uv", "uv1", "uv2"].forEach((k) => g.attributes[k] && g.deleteAttribute(k)); return g; });
  return mergeGeometries(gs, false);
}

/* ---------- materiais com textura feita no navegador (madeira, tecido, parede) ---------- */
const texCache = {};
function texturaCinza(nome, w, h, desenho, rep = [1, 1]) {
  const k = nome + rep.join("x");
  if (texCache[k]) return texCache[k];
  const T = tela(w, h); desenho(T.g, w, h); T.t.wrapS = T.t.wrapT = THREE.RepeatWrapping; T.t.repeat.set(...rep); T.t.anisotropy = 8;
  texCache[k] = T.t; return T.t;
}
let semente = 11; const rnd = () => { semente = (semente * 16807) % 2147483647; return semente / 2147483647; };
// veios de madeira em tons de cinza (a cor vem do material)
const desenhaMadeira = (g, w, h) => {
  g.fillStyle = "#EDEDED"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 70; i++) { const y = rnd() * h, a = 0.04 + rnd() * 0.1; g.strokeStyle = `rgba(60,40,20,${a})`; g.lineWidth = 0.6 + rnd() * 2.4; g.beginPath(); g.moveTo(0, y); for (let x = 0; x <= w; x += 16) g.lineTo(x, y + Math.sin(x * 0.02 + i) * 3 + (rnd() - 0.5) * 1.2); g.stroke(); }
  for (let i = 0; i < 6; i++) { const x = rnd() * w, y = rnd() * h; const gr = g.createRadialGradient(x, y, 0, x, y, 10 + rnd() * 10); gr.addColorStop(0, "rgba(70,45,25,.22)"); gr.addColorStop(1, "rgba(70,45,25,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, 24, 7, 0, 0, TAU); g.fill(); }
};
// trama de tecido
const desenhaTecido = (g, w, h) => {
  g.fillStyle = "#E6E6E6"; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 2) { g.fillStyle = `rgba(0,0,0,${0.035 + (y % 4 ? 0.02 : 0)})`; g.fillRect(0, y, w, 1); }
  for (let x = 0; x < w; x += 2) { g.fillStyle = `rgba(255,255,255,${0.05 + (x % 4 ? 0.03 : 0)})`; g.fillRect(x, 0, 1, h); }
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
};
const MAD = (cor, o = {}) => { const k = "mad" + cor + JSON.stringify(o); if (matCache.has(k)) return matCache.get(k); const m = new THREE.MeshStandardMaterial({ color: cor, roughness: o.r ?? 0.55, metalness: 0, map: texturaCinza("madeira", 256, 256, desenhaMadeira, o.rep || [1, 1]) }); matCache.set(k, m); return m; };
const TEC = (cor, o = {}) => { const k = "tec" + cor + JSON.stringify(o); if (matCache.has(k)) return matCache.get(k); const c = new THREE.Color(cor); const m = new THREE.MeshPhysicalMaterial({ color: cor, roughness: o.r ?? 0.92, sheen: 0.7, sheenRoughness: 0.45, sheenColor: c.clone().lerp(new THREE.Color("#FFFFFF"), 0.35), map: texturaCinza("tecido", 128, 128, desenhaTecido, o.rep || [3, 3]) }); matCache.set(k, m); return m; };
// sombra de contato macia (o "chão escurecido" que deixa o móvel apoiado de verdade)
let texContato = null;
function sombraContato(par, cx, cz, hx, hz, r = 0, forca = 0.42) {
  if (!texContato) { const T = tela(128, 128); const g = T.g; g.shadowColor = "#000"; g.shadowBlur = 20; g.shadowOffsetX = 300; g.fillStyle = "#000"; rr(g, 26 - 300, 26, 76, 76, 14); g.fill(); texContato = T.t; }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: texContato, color: "#000000", transparent: true, opacity: forca, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 }));
  m.rotation.set(-PI / 2, 0, r); m.position.set(cx, 0.003, cz); m.scale.set((hx * 2 + 0.12) * 1.68, (hz * 2 + 0.12) * 1.68, 1); m.renderOrder = 1; m.receiveShadow = false; m.castShadow = false;
  par.add(m); return m;
}
// parede: reboco com leve granulado
const desenhaParede = (g, w, h) => { g.fillStyle = "#F2F2F2"; g.fillRect(0, 0, w, h); for (let i = 0; i < 5000; i++) { const v = rnd(); g.fillStyle = v > 0.5 ? `rgba(255,255,255,${(v - 0.5) * 0.12})` : `rgba(0,0,0,${v * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 1.5, 1.5); } };
const PAR = (cor) => { const k = "par" + cor; if (matCache.has(k)) return matCache.get(k); const m = new THREE.MeshStandardMaterial({ color: cor, roughness: 0.92, map: texturaCinza("parede", 256, 256, desenhaParede, [4, 2]) }); matCache.set(k, m); return m; };
// faixa escura que some (cantos e encontro parede-chão): oclusão de ambiente barata
let texFaixa = null;
function faixaAO(par, w, h, pos, rot, forca = 0.22) {
  if (!texFaixa) { const T = tela(4, 64); const gr = T.g.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, "rgba(0,0,0,1)"); gr.addColorStop(0.35, "rgba(0,0,0,.45)"); gr.addColorStop(1, "rgba(0,0,0,0)"); T.g.fillStyle = gr; T.g.fillRect(0, 0, 4, 64); texFaixa = T.t; }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: texFaixa, color: "#000000", transparent: true, opacity: forca, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  m.position.copy(pos); m.rotation.copy(rot); m.renderOrder = 1; par.add(m); return m;
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
const ALTURA = [0.9, 0.95, 1, 1.05, 1.1], CORPO = [0.84, 0.92, 1, 1.12, 1.26];
const POSE0 = { alt: 0.89, dy: 0, hz: 0, lean: 0, side: 0, twist: 0, nod: 0, turn: 0, roll: 0, aL: [0, 0.12, 0.2], aR: [0, 0.12, 0.2], lL: [0, 0], lR: [0, 0], olhar: [0, 0], boch: 0, abre: 0.6, lagrima: 0, nuvem: 0, balao: 0, yawAdd: 0, sent: 0, kL: 0, kR: 0, ikL: null, ikR: null, mL: 0, mR: 0, taco: -1, recuo: 0, porta: 0, fxk: 0, gole: 0, pL: 0, pR: 0, olhos: "A", boca: "leve", sob: "", item: "", balaoT: "" };
const NUM = ["alt", "dy", "hz", "lean", "side", "twist", "nod", "turn", "roll", "boch", "abre", "lagrima", "nuvem", "balao", "yawAdd", "sent", "kL", "kR", "mL", "mR", "taco", "recuo", "porta", "fxk", "gole", "pL", "pR"];
const ARR = ["aL", "aR", "lL", "lR", "olhar"];
const DISC = ["olhos", "boca", "sob", "item", "balaoT", "bolas", "solta", "fx", "gestoL", "gestoR"];
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
    // terno (cor fixa, grafite), xadrez e havaiana (estampas desenhadas na cor do perfil)
    const paleto = this.paleto = new THREE.MeshStandardMaterial({ color: COR_TERNO, roughness: 0.62 });
    this.texX = tela(256, 256); this.texH = tela(256, 256);
    for (const T of [this.texX, this.texH]) { T.t.wrapS = T.t.wrapT = THREE.RepeatWrapping; T.t.repeat.set(4, 2); }
    const xadrez = this.xadrez = new THREE.MeshStandardMaterial({ map: this.texX.t, roughness: 0.92 });
    const havai = this.havai = new THREE.MeshStandardMaterial({ map: this.texH.t, roughness: 0.72 });
    this.estampasCor = this.cor; this.desenharEstampas(this.cor);
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
      const hand = new THREE.Group(); hand.position.y = -0.27; el.add(hand);
      // mão: dorso e palma arredondados, nós dos dedos, cinco dedos de duas falanges
      esf(hand, this.pele, 0.033, 0, -0.006, 0, { s: [0.72, 0.75, 1.05], seg: 16, seg2: 12 });
      esf(hand, this.pele, 0.046, 0, -0.052, 0, { s: [0.38, 1.0, 0.92], seg: 22, seg2: 16 });
      for (const z of [-0.027, -0.009, 0.009, 0.027]) esf(hand, this.pele, 0.0118, 0, -0.09, z, { s: [1.05, 0.9, 1], seg: 10, seg2: 8 });
      const lista = this.dedos[nome];
      [[-0.028, 0.035], [-0.0095, 0.043], [0.0095, 0.041], [0.028, 0.033]].forEach(([z, len]) => {
        const p1 = new THREE.Group(); p1.position.set(0, -0.092, z); hand.add(p1);
        caps(p1, this.pele, 0.0112, len, 0, -len / 2 - 0.003, 0);
        const p2 = new THREE.Group(); p2.position.y = -len - 0.006; p1.add(p2);
        caps(p2, this.pele, 0.0102, len * 0.8, 0, -len * 0.4 - 0.002, 0);
        lista.push({ p1, p2 });
      });
      const t1 = new THREE.Group(); t1.position.set(-lado * 0.012, -0.03, 0.034); t1.rotation.set(0.4, 0, lado * 0.5); hand.add(t1);
      esf(t1, this.pele, 0.016, 0, -0.006, 0, { s: [0.9, 1.3, 0.9], seg: 10, seg2: 8 });
      caps(t1, this.pele, 0.013, 0.032, 0, -0.022, 0);
      const t2 = new THREE.Group(); t2.position.y = -0.047; t1.add(t2);
      caps(t2, this.pele, 0.0115, 0.027, 0, -0.016, 0);
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
      // tênis: cabedal arredondado, bico, sola oval e cadarço
      esf(ft, sap, 0.058, 0, -0.026, 0.032, { s: [0.88, 0.62, 1.72], seg: 24, seg2: 16 });
      esf(ft, sap, 0.045, 0, -0.008, -0.02, { s: [0.95, 0.95, 1.0], seg: 18, seg2: 12 });
      mesh(new THREE.CylinderGeometry(0.058, 0.056, 0.024, 28), sola, ft, 0, -0.064, 0.04, { s: [0.92, 1, 1.82] });
      for (let i = 0; i < 3; i++) bloco(ft, M("#E9EDF2", { r: 0.7 }), [-0.02, 0, -0.004], [0.02, 0.006, 0.004], 0.002).position.set(0, 0.004 - i * 0.008, 0.03 + i * 0.022);
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
    for (const v of this.roupas) v.scale.set(g, 1, g);   // golas e peças do peito acompanham a largura do tronco
    if (this.gTubos !== g) { this.gTubos = g; for (const t of this.tubos) { const old = t.m.geometry; t.m.geometry = this.geoTubo(t, g); if (old) old.dispose(); } }
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
    if (qMao) { const qs = sp.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(qMao); t.sub(this.gp.clone().applyQuaternion(qs)); }
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
      const alvo = boca.add(V(0.07 * e, -0.1 * e + 0.05 * e * gole, 0.085 * e).applyQuaternion(qr));
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
    const key = ["sorr", "abre", "larg", "redondo", "assim", "dentes", "lingua", "morde", "olho", "feliz", "fecha", "sobeS", "dentroS", "sobeAssim", "boch", "ox", "oy"].map((k) => q(F[k])).join(",") + "|" + q(bl, 8) + "|" + (F.lagrima > 0.05 ? Math.floor(((T * 0.6) % 1) * 24) : -1);
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
    for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * dx, ey - 2, 4, cx + s * dx, ey - 2, 32); gr.addColorStop(0, somb); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * dx, ey - 2, 32, 22, 0, 0, TAU); g.fill(); }
    // bochechas: coram e sobem quando ele sorri
    const bo = 0.16 + 0.84 * cl(F.boch), sobeB = Math.max(0, sorr) * 6;
    for (const s of [-1, 1]) { const y = 140 - sobeB; const gr = g.createRadialGradient(cx + s * 60, y, 1, cx + s * 60, y, 25); gr.addColorStop(0, `rgba(235,95,95,${0.42 * bo})`); gr.addColorStop(1, "rgba(235,95,95,0)"); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * 60, y, 25, 14, 0, 0, TAU); g.fill(); }
    // sobrancelhas: altura, ângulo (dentro/fora) e assimetria
    const by = ey - 30;
    for (const s of [-1, 1]) {
      const assim = (F.sobeAssim || 0) * (s > 0 ? 1 : -1);
      const yi = by - (F.sobeS || 0) * 9 - (F.dentroS || 0) * 8 - assim * 5, yo = by - (F.sobeS || 0) * 8 + (F.dentroS || 0) * 4 - 2 - assim * 6 - feliz * 2;
      const xi = cx + s * 16, xo = cx + s * (dx + 25), ym = Math.min(yi, yo) - 5;
      g.fillStyle = misturaCor(cabelo, "#000000", 0.3); g.beginPath(); g.moveTo(xi, yi + 2); g.quadraticCurveTo((xi + xo) / 2, ym - 2, xo, yo + 1); g.quadraticCurveTo((xi + xo) / 2, ym + 5, xi, yi + 9); g.closePath(); g.fill();
    }
    // olhos: pálpebra de cima (abertura), de baixo (sobe no sorriso), íris que segue o olhar
    const ew = 23.5, eh = 17;
    const ab = cl((F.olho ?? 1) * (1 - fecha), 0, 1.25);
    for (const s of [-1, 1]) {
      const x = cx + s * dx;
      const cima = eh * 1.22 * ab, baixo = Math.max(eh * (1.05 - 0.85 * feliz) * Math.min(ab, 1), 0);
      const yb = ey + feliz * 4;
      const contorno = () => { g.beginPath(); g.moveTo(x - ew, yb + 1); g.bezierCurveTo(x - ew * 0.6, yb - cima, x + ew * 0.5, yb - cima * 1.04, x + ew, yb - 1); g.bezierCurveTo(x + ew * 0.55, yb + baixo - feliz * 9, x - ew * 0.55, yb + baixo - feliz * 9, x - ew, yb + 1); g.closePath(); };
      if (cima > 1.2 && cima + baixo - feliz * 9 > 2.5) {
        g.save(); contorno(); g.clip();
        g.fillStyle = "#FBF8F4"; g.fillRect(x - ew - 2, yb - eh * 1.6, ew * 2 + 4, eh * 3.2);
        const ix = x + (F.ox || 0) * 4.8, iy = yb + (F.oy || 0) * 3.2 + 1, rI = 13 * (1 - 0.05 * Math.max(0, ab - 1) * 4);
        const ir = g.createRadialGradient(ix, iy - 2, 1, ix, iy, rI); ir.addColorStop(0, "#8A5530"); ir.addColorStop(0.6, "#55301A"); ir.addColorStop(1, "#22120A");
        g.fillStyle = ir; g.beginPath(); g.arc(ix, iy, rI, 0, TAU); g.fill();
        g.fillStyle = "#0B0604"; g.beginPath(); g.arc(ix, iy, 6 - 1.2 * Math.max(0, ab - 1) * 4, 0, TAU); g.fill();
        g.fillStyle = "rgba(255,255,255,.97)"; g.beginPath(); g.arc(ix - 4, iy - 4.6, 3.8, 0, TAU); g.fill();
        g.fillStyle = "rgba(255,255,255,.75)"; g.beginPath(); g.arc(ix + 3.6, iy + 3.4, 1.5, 0, TAU); g.fill();
        g.fillStyle = "rgba(0,0,0,.16)"; g.fillRect(x - ew - 2, yb - cima - 2, ew * 2 + 4, 7);
        g.restore();
        g.strokeStyle = tom; g.lineWidth = 3.6; g.beginPath(); g.moveTo(x - ew, yb + 1); g.bezierCurveTo(x - ew * 0.6, yb - cima, x + ew * 0.5, yb - cima * 1.04, x + ew, yb - 1); g.stroke();
        g.lineWidth = 2.4; g.beginPath(); g.moveTo(x + s * ew * 0.9, yb - 2); g.lineTo(x + s * (ew + 5), yb - 6.5); g.stroke();
        if (feliz > 0.25) { g.strokeStyle = escura ? `rgba(10,4,2,${0.25 * feliz})` : `rgba(150,75,50,${0.3 * feliz})`; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x - 11, yb + 12); g.quadraticCurveTo(x, yb + 16, x + 11, yb + 12); g.stroke(); }
      } else {
        // fechado: arco para cima quando sorri, para baixo quando dorme ou pisca
        const cv = feliz > 0.4 ? -7 * feliz : 6;
        g.strokeStyle = tom; g.lineWidth = 3.6; g.beginPath(); g.moveTo(x - ew, yb + 1); g.quadraticCurveTo(x, yb + cv, x + ew, yb); g.stroke();
        if (feliz <= 0.4) { g.lineWidth = 1.8; for (const a of [-0.7, -0.15, 0.4, 0.85]) { const bx = x + a * ew; g.beginPath(); g.moveTo(bx, yb + 4.5 - Math.abs(a) * 2); g.lineTo(bx + s * 1.2, yb + 8.5 - Math.abs(a) * 2); g.stroke(); } }
      }
    }
    // narinas
    g.fillStyle = escura ? "rgba(10,4,2,.35)" : "rgba(120,55,35,.28)";
    for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * 6.5, 141, 3.2, 1.8, s * 0.35, 0, TAU); g.fill(); }
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
function sentado(T, alt, o = {}) { const b = Math.sin(T * 1.8); const r = P({ alt, sent: 1, lL: SENT, lR: SENT, aL: [0.62 + 0.02 * b, -0.08, 0.98], aR: [0.6 + 0.02 * b, -0.08, 1.0], ...o }); r.lean += 0.04 + 0.01 * b; return r; }
// agachado (para mexer em algo baixo): joelhos dobrados, tronco para a frente
function agachado(T, k, o = {}) { const r = emPe(T, o); r.alt = lerp(0.89, 0.5, k); r.lL = [lerp(0.02, 1.35, k), lerp(0.04, 2.1, k)]; r.lR = [lerp(0.02, 1.05, k), lerp(0.04, 1.9, k)]; r.lean += 0.35 * k; r.nod += 0.15 * k; return r; }
// caminhada: o passo acompanha a distância percorrida (sem pé deslizando), com calcanhar e ponta do pé,
// quadril que sobe e desce duas vezes por passada, braços com o cotovelo atrasado e cabeça estável
function andar(dist, est, T, esc = 1) {
  const corre = est === "corre", tri = est === "triste";
  const passo = corre ? 2.1 : tri ? 0.95 : 1.32;
  const perna = 0.88 * esc;
  const amp = Math.asin(cl(passo / (4 * perna), 0, 0.85)) * (corre ? 1.05 : 1);
  const ph = (dist / passo) * TAU, s = Math.sin(ph), c = Math.cos(ph);
  const kb = corre ? 1.35 : tri ? 0.65 : 0.95;
  // fase de balanço (perna indo para a frente): joelho dobra; apoio: joelho quase reto, leve amortecimento
  const joelho = (sw, st) => 0.08 + kb * Math.pow(Math.max(0, sw), 1.6) + 0.12 * Math.max(0, st) * (corre ? 0.5 : 1);
  const pe = (sn, cs) => 0.38 * Math.max(0, -sn) * Math.max(0, cs) * 1.6 - 0.22 * Math.max(0, sn) * Math.max(0, -cs);   // ponta empurra / calcanhar toca
  const r = P({
    lL: [amp * s, joelho(c, s)], lR: [-amp * s, joelho(-c, -s)], pL: pe(s, c), pR: pe(-s, -c),
    aL: [-amp * 0.95 * s, 0.1, (corre ? 1.35 : 0.3) + 0.22 * Math.max(0, -Math.sin(ph - 0.5))], aR: [amp * 0.95 * s, 0.1, (corre ? 1.35 : 0.3) + 0.22 * Math.max(0, Math.sin(ph - 0.5))],
    lean: corre ? 0.2 : tri ? 0.16 : 0.07, twist: 0.1 * s, side: 0.03 * c, roll: -0.025 * c,
    boca: tri ? "triste" : corre ? "aberta" : "leve",
  });
  // cabeça compensa o giro do tronco e o balanço (olha para a frente)
  r.turn = -0.09 * s; r.nod = tri ? 0.45 : -0.03 + 0.025 * Math.abs(c);
  r.alt = 0.07 + 0.82 * Math.cos(amp * Math.abs(s)) + (corre ? 0.05 * Math.abs(c) : 0.014 * Math.abs(c));
  r.andando = 1;
  return r;
}
function mistura(a, b, w) {
  if (w >= 1) return b; if (w <= 0) return a;
  const r = { ...b };
  for (const k of NUM) r[k] = lerp(a[k] ?? POSE0[k], b[k] ?? POSE0[k], w);
  for (const k of ARR) r[k] = (a[k] || POSE0[k]).map((v, i) => lerp(v, (b[k] || POSE0[k])[i], w));
  for (const k of ["ikL", "ikR"]) r[k] = a[k] && b[k] ? a[k].map((v, i) => lerp(v, b[k][i], w)) : (b[k] || a[k]);
  if (w < 0.5) for (const k of DISC) r[k] = a[k];
  return r;
}
// Filtro de mola criticamente amortecida em cada articulação: tira qualquer tranco entre poses
const WF = { yawAdd: 30, nod: 8, turn: 7.5, roll: 8, lean: 10, side: 10, twist: 10, alt: 18, dy: 20, hz: 14, pL: 26, pR: 26, olhar: 30, lL: 24, lR: 24, aL: 13, aR: 13 };
class Filtro {
  constructor() { this.x = null; this.v = {}; }
  mola(k, alvo, dt, w) {
    let x = this.x[k], v = this.v[k] || 0;
    const e = x - alvo, ex = Math.exp(-w * dt), tmp = (v + w * e) * dt;
    this.x[k] = alvo + (e + tmp) * ex; this.v[k] = (v - w * tmp) * ex;
    return this.x[k];
  }
  passo(p, dt, w = 15) {
    if (!this.x || dt <= 0 || dt > 0.5) {
      this.x = {}; this.v = {};
      for (const k of NUM) this.x[k] = p[k] ?? POSE0[k];
      for (const k of ARR) (p[k] || POSE0[k]).forEach((v, i) => { this.x[k + i] = v; });
      for (const k of ["ikL", "ikR"]) if (p[k]) p[k].forEach((v, i) => { this.x[k + i] = v; });
      return p;
    }
    const r = { ...p };
    // cada parte com o seu tempo: olhos rápidos, cabeça um pouco atrasada, tronco mais pesado, pés firmes
    for (const k of NUM) r[k] = this.mola(k, p[k] ?? POSE0[k], dt, WF[k] || w);
    for (const k of ARR) r[k] = (p[k] || POSE0[k]).map((v, i) => this.mola(k + i, v, dt, WF[k] || w * 1.1));
    for (const k of ["ikL", "ikR"]) {
      if (!p[k]) { if (this.x[k + "0"] != null) r[k] = [0, 1, 2].map((i) => this.x[k + i]); continue; }
      if (this.x[k + "0"] == null) { p[k].forEach((v, i) => { this.x[k + i] = v; this.v[k + i] = 0; }); r[k] = p[k]; continue; }
      r[k] = p[k].map((v, i) => this.mola(k + i, v, dt, w * 1.3));
    }
    return r;
  }
}

/* ---------- vida: o que faz o boneco parecer gente ----------
   Por cima da rotina: expressões que mudam sozinhas dentro do mesmo humor, olhar que procura coisas
   (os olhos chegam antes da cabeça), manias (coçar o nariz, alongar o pescoço, suspirar, tamborilar),
   transferência de peso quando está em pé e rosto com parâmetros contínuos que se misturam sem saltos. */
const EXPR = {
  neutro: {},
  contente: { sorr: 0.45, feliz: 0.3, boch: 0.3 },
  concentrado: { sorr: -0.05, larg: 0.82, assim: 0.35, dentroS: -0.3, olho: 0.9, lingua: 0.55 },
  surpreso: { abre: 0.42, redondo: 0.7, sorr: 0.1, sobeS: 0.85, olho: 1.2 },
  rindo: { sorr: 0.9, abre: 0.5, dentes: 1, feliz: 0.9, boch: 0.6, sobeS: 0.2 },
  bocejo: { abre: 1, redondo: 0.55, sorr: 0, fecha: 0.85, sobeS: 0.35 },
  pensativo: { sorr: 0.05, assim: 0.55, sobeAssim: 0.6, olho: 0.9, larg: 0.85 },
  orgulhoso: { sorr: 0.6, assim: 0.55, feliz: 0.45, sobeAssim: 0.35, boch: 0.35 },
  assovia: { redondo: 1, abre: 0.14, larg: 0.42, sobeS: 0.25, sorr: 0.1 },
  gargalhada: { sorr: 1, abre: 0.85, dentes: 1, feliz: 1, boch: 0.9, sobeS: 0.45 },
  grito: { abre: 0.95, redondo: 0.35, sorr: 0.65, olho: 1.12, sobeS: 0.75, dentes: 0.8, boch: 0.8 },
  tenso: { sorr: -0.25, larg: 0.8, dentroS: -0.75, olho: 1.05 },
  mordeLabio: { sorr: -0.15, larg: 0.75, assim: -0.5, dentroS: -0.35, morde: 1 },
  aflito: { sorr: -0.45, dentroS: 0.75, sobeS: 0.25, olho: 1.1 },
  resmunga: { sorr: -0.2, dentroS: -0.45, larg: 0.85 },
  suspira: { sorr: -0.1, abre: 0.15, redondo: 0.4, fecha: 0.5, dentroS: 0.3 },
  esperanca: { sorr: 0.25, dentroS: 0.45, sobeS: 0.2 },
  choroso: { sorr: -0.75, dentroS: 1, olho: 0.72, lagrima: 1, abre: 0.08 },
  vazio: { sorr: -0.15, olho: 0.68, dentroS: 0.35 },
  sorrisoFraco: { sorr: 0.2, dentroS: 0.55, olho: 0.85 },
  cumprimenta: { sorr: 0.75, feliz: 0.6, sobeS: 0.6, boch: 0.5 },
};
// repertório de cada humor: [expressão, peso, duração mín, máx]
const REPERT = {
  tranquilo: [["contente", 4, 3, 6], ["concentrado", 3, 3, 7], ["surpreso", 1, 0.9, 1.6], ["rindo", 1.2, 1.4, 2.6], ["bocejo", 0.6, 2.4, 3.2], ["pensativo", 1, 2.5, 4.5], ["assovia", 0.8, 2.5, 4], ["neutro", 2, 2, 4]],
  feliz: [["contente", 3, 3, 6], ["rindo", 2, 1.5, 3], ["orgulhoso", 2, 2.5, 4.5], ["concentrado", 1.5, 2, 4], ["assovia", 1.2, 2.5, 4], ["neutro", 1, 2, 3]],
  euforico: [["gargalhada", 3, 1.5, 3], ["grito", 2, 0.9, 1.8], ["rindo", 2, 1.5, 3], ["contente", 1.5, 2, 4]],
  preocupado: [["tenso", 3, 3, 6], ["mordeLabio", 2, 1.5, 3], ["aflito", 2, 2, 4], ["resmunga", 2, 1.8, 3.5], ["suspira", 1.5, 1.8, 2.6], ["esperanca", 1, 2, 3.5], ["pensativo", 1, 2, 4]],
  triste: [["choroso", 2, 3, 6], ["vazio", 3, 3, 6], ["suspira", 2, 1.8, 2.6], ["sorrisoFraco", 0.6, 1.5, 3], ["aflito", 1, 2, 4]],
};
// manias: precisam de partes livres ("R" mão direita, "L" esquerda, "pe" em pé, "sent" sentado)
const MANIAS = [
  { nome: "nariz", req: ["R"], dur: 1.7, humores: "*", peso: 1 },
  { nome: "nuca", req: ["R"], dur: 2.2, humores: ["preocupado", "triste", "tranquilo"], peso: 1 },
  { nome: "coca", req: ["R"], dur: 1.9, humores: ["preocupado", "tranquilo"], peso: 1 },
  { nome: "pescoco", req: [], dur: 2.6, humores: "*", peso: 1 },
  { nome: "suspiro", req: [], dur: 2.4, humores: ["preocupado", "triste", "tranquilo"], peso: 1.2 },
  { nome: "tamborila", req: ["Rapoio"], dur: 2.6, humores: ["preocupado", "tranquilo", "feliz"], peso: 1.4 },
  { nome: "cintura", req: ["R", "L", "pe"], dur: 3.2, humores: ["feliz", "preocupado", "tranquilo"], peso: 1 },
  { nome: "alonga", req: ["R", "L", "pe"], dur: 3.0, humores: ["tranquilo", "triste"], peso: 0.6 },
  { nome: "ombros", req: [], dur: 1.6, humores: "*", peso: 0.8 },
];
const sorteia = (lista, peso) => { const tot = lista.reduce((a, x) => a + peso(x), 0); let r = Math.random() * tot; for (const x of lista) { r -= peso(x); if (r <= 0) return x; } return lista[lista.length - 1]; };
const ROSTO0 = { sorr: 0.3, abre: 0, larg: 1, redondo: 0, assim: 0, dentes: 0, lingua: 0, morde: 0, olho: 1, feliz: 0, fecha: 0, sobeS: 0, dentroS: 0, sobeAssim: 0, boch: 0, lagrima: 0 };

class Vida {
  constructor() {
    this.emo = { nome: "neutro", t0: 0, fim: 2 }; this.emoAnt = { nome: "neutro" };
    this.glance = null; this.proxGlance = 2 + Math.random() * 3;
    this.mania = null; this.proxMania = 5 + Math.random() * 4;
    this.F = { ...ROSTO0 }; this.Fv = {}; this.wGaze = 0; this.yawG = 0; this.pitchG = 0;
  }
  // expressão atual (com entrada e saída suaves)
  expressao(T, humor) {
    const e = this.emo;
    if (T > e.fim || this.humor !== humor) {
      this.humor = humor; const rep = REPERT[humor] || REPERT.tranquilo;
      const [nome, , a, b] = sorteia(rep.filter((x) => x[0] !== e.nome || rep.length < 2), (x) => x[1]);
      this.emoAnt = { nome: e.nome, ate: T + 0.5 }; this.emo = { nome, t0: T, fim: T + a + Math.random() * (b - a) };
    }
    return this.emo;
  }
  // camada de pose: olhar, manias, peso do corpo, efeitos das expressões no corpo
  passo(p, c) {
    const T = c.T, dt = c.dt; p = { ...p, aL: p.aL.slice(), aR: p.aR.slice(), lL: p.lL.slice(), lR: p.lR.slice(), olhar: p.olhar.slice() };
    const parado = !p.andando && Math.abs(p.dy || 0) < 0.03, emPe = (p.sent || 0) < 0.3;
    const livreR = parado && (p.kR || 0) < 0.05 && !p.item && !c.ocupado && p.aR[0] < 1.3 && !p.gestoR, livreL = parado && (p.kL || 0) < 0.05 && !c.ocupadoL && !c.ocupado && p.aL[0] < 1.3 && p.mL < 0.5 && !p.gestoL;
    const apoioR = parado && !c.ocupado && (p.kR || 0) < 0.05 && !p.item && (p.sent || 0) > 0.5;
    const emo = this.expressao(T, c.humor); const ke = jan(T - emo.t0, 0, emo.fim - emo.t0, 0.45);
    /* manias */
    if (!this.mania && T > this.proxMania && !c.reduz) {
      const ok = MANIAS.filter((m) => (m.humores === "*" || m.humores.includes(c.humor)) && m.req.every((r) => (r === "R" ? livreR : r === "L" ? livreL : r === "pe" ? emPe && parado : r === "Rapoio" ? apoioR : true)) && parado);
      if (ok.length) { const m = sorteia(ok, (x) => x.peso); this.mania = { ...m, t0: T }; }
      this.proxMania = T + (c.humor === "preocupado" ? 4 : 6) + Math.random() * 6;
    }
    const mn = this.mania;
    if (mn) {
      const tl = T - mn.t0; const w = jan(tl, 0, mn.dur, 0.45);
      const aindaPode = mn.req.every((r) => (r === "R" ? livreR || tl > 0.2 && !p.item && (p.kR || 0) < 0.05 && parado : r === "L" ? livreL || tl > 0.2 && parado : r === "pe" ? emPe && parado : r === "Rapoio" ? apoioR : true));
      if (tl > mn.dur || !aindaPode && w < 0.05) this.mania = null;
      else {
        const wk = aindaPode ? w : w * 0.5; const mix = (arr, alvo) => arr.forEach((v, i) => { arr[i] = lerp(v, alvo[i], wk); });
        switch (mn.nome) {
          case "nariz": { const n = c.nariz; if (n) { const s = Math.sin(tl * 16) * 0.012 * w; p.ikR = [n.x + s, n.y, n.z]; p.kR = wk * 0.95; p.gestoR = "aponta"; p.nod += 0.06 * wk; } break; }
          case "nuca": mix(p.aR, [2.55, 0.65, 2.55 + 0.12 * Math.sin(tl * 9)]); p.nod += 0.18 * wk; p.gestoR = "carinho"; break;
          case "coca": mix(p.aR, [2.65, 0.25, 2.3 + 0.15 * Math.sin(tl * 13)]); p.roll -= 0.08 * wk; p.gestoR = "carinho"; break;
          case "pescoco": { const s = Math.sin(fase(tl, 0.2, mn.dur - 0.2) * TAU); p.roll += 0.28 * s * wk; p.nod += 0.12 * wk; p.fechaOlhos = wk; break; }
          case "suspiro": { const s = Math.sin(PI * fase(tl, 0.1, 1.4)); p.lean -= 0.06 * s * wk; p.dy += 0.012 * s * wk; p.nod += -0.08 * s * wk + 0.1 * fase(tl, 1.4, mn.dur) * wk; p.suspiro = s * wk; break; }
          case "tamborila": p.tamb = 1; break;
          case "cintura": mix(p.aR, [0.35, 0.85, 1.75]); mix(p.aL, [0.35, 0.85, 1.75]); p.lean -= 0.04 * wk; p.gestoR = p.gestoL = "solto"; break;
          case "alonga": { const up = suave(fase(tl, 0.2, 1.2)) * (1 - suave(fase(tl, 2.2, 3.0))); mix(p.aR, [lerp(0.2, 3.0, up), 0.2, 0.25]); mix(p.aL, [lerp(0.2, 3.0, up), 0.2, 0.25]); p.lean -= 0.12 * up * wk; p.nod -= 0.25 * up * wk; p.dy += 0.03 * up * wk; p.gestoR = p.gestoL = up > 0.5 ? "aberta" : ""; p.boceja = up * wk; break; }
          case "ombros": { const s = Math.sin(PI * fase(tl, 0, mn.dur)); p.dy += 0.018 * s; p.lean -= 0.04 * s; break; }
        }
      }
    }
    /* transferência de peso em pé, parado: o quadril balança devagar e um joelho afrouxa */
    if (emPe && parado && !p.andando) {
      const ph = Math.sin(T * 0.21 + 1.3) * 0.7 + Math.sin(T * 0.13) * 0.3;
      const k = c.legsLivres ? 1 : 0;
      p.side += 0.03 * ph * k; p.twist += 0.025 * ph * k;
      p.lL[1] += 0.14 * Math.max(0, ph) * k; p.lL[0] += 0.05 * Math.max(0, ph) * k;
      p.lR[1] += 0.14 * Math.max(0, -ph) * k; p.lR[0] += 0.05 * Math.max(0, -ph) * k;
      p.alt -= 0.008 * Math.abs(ph) * k;
    }
    // braços soltos nunca ficam parados de todo
    if (livreR && !(mn && mn.req.includes("R"))) { p.aR[2] += 0.04 * Math.sin(T * 0.71 + 1); p.aR[0] += 0.025 * Math.sin(T * 0.53); }
    if (livreL && !(mn && mn.req.includes("L"))) { p.aL[2] += 0.04 * Math.sin(T * 0.67); p.aL[0] += 0.025 * Math.sin(T * 0.49 + 2); }
    /* o corpo acompanha a expressão */
    const en = emo.nome, we = ke * (c.facePropria ? 0.3 : 1);
    if (en === "rindo" || en === "gargalhada") { const f = en === "gargalhada" ? 1 : 0.55; p.dy += 0.01 * Math.abs(Math.sin(T * 11)) * we * f; p.lean -= 0.07 * we * f; p.nod -= 0.08 * we * f + 0.04 * Math.sin(T * 11) * we * f; }
    if (en === "bocejo" && !p.boceja) { p.nod -= 0.25 * we; p.lean -= 0.05 * we; }
    if (en === "resmunga") { p.turn += 0.06 * Math.sin(T * 3.3) * we; p.roll += 0.04 * Math.sin(T * 2.1) * we; }
    if (en === "surpreso") { p.nod -= 0.12 * we; p.lean -= 0.04 * we; }
    if (en === "aflito" || en === "choroso" || en === "vazio") { p.nod += 0.1 * we; }
    if (en === "orgulhoso") { p.nod -= 0.08 * we; p.lean -= 0.03 * we; }
    /* olhar: alvo da cena (passo), o que a mão vai pegar, uma olhadinha qualquer ou a câmera */
    if (!this.glance && T > this.proxGlance && c.alvos && c.alvos.length && !c.reduz) {
      const a = sorteia(c.alvos, (x) => x.peso); this.glance = { ...a, t0: T, dur: 0.9 + Math.random() * 1.8 }; if (a.nome === "camera" && c.humor !== "triste" && Math.random() < 0.35) { this.glance.acena = true; this.glance.dur = 2.4; }
      this.proxGlance = T + 3 + Math.random() * 5.5;
    }
    if (this.glance && T - this.glance.t0 > this.glance.dur) this.glance = null;
    // às vezes, ao olhar para quem está vendo, ele acena
    if (this.glance && this.glance.acena && livreR && !this.mania) { const w2 = jan(T - this.glance.t0, 0.2, this.glance.dur, 0.4); p.aR = p.aR.map((v, i) => lerp(v, [2.55, 0.5, 0.9 + 0.35 * Math.sin(T * 9)][i], w2)); if (w2 > 0.3) p.gestoR = "aberta"; }
    let alvo = null, w = 0;
    const alc = (p.kR || 0) > 0.25 && p.ikR && !p.item ? ["R", p.kR] : (p.kL || 0) > 0.25 && p.ikL && !p.gestoL ? ["L", p.kL] : null;
    if (p.olharW) { alvo = V(...p.olharW); w = 1; }
    else if (alc && !c.semOlharMao) { const q = alc[0] === "R" ? p.ikR : p.ikL; alvo = V(...q); w = 0.85 * cl(alc[1]); }
    else if (this.glance) { alvo = this.glance.pos; w = jan(T - this.glance.t0, 0, this.glance.dur, 0.25) * (p.andando ? 0.6 : 0.9); }
    else if (c.foco) { alvo = c.foco; w = p.andando ? 0.3 : 0.75; }
    this.olhandoCamera = this.glance && this.glance.nome === "camera" ? jan(T - this.glance.t0, 0, this.glance.dur, 0.25) : 0;
    this.wGaze = lerp(this.wGaze, alvo ? w : 0, Math.min(1, dt * 6));
    if (alvo && c.cabeca) {
      const d = alvo.clone().sub(c.cabeca); const yaw = difAng(c.yawCorpo + (p.twist || 0), Math.atan2(d.x, d.z)); const pitch = Math.atan2(d.y, Math.hypot(d.x, d.z));
      this.yawG = cl(yaw, -1.6, 1.6); this.pitchG = cl(pitch, -1.0, 0.8);
    }
    const wg = this.wGaze;
    if (wg > 0.01) {
      const tt = cl(this.yawG * 0.78, -1.05, 1.05), nn = cl(-this.pitchG * 0.65, -0.5, 0.65);
      p.turn = lerp(p.turn, tt, wg); p.nod = lerp(p.nod, nn + (p.nod - (p.nod || 0)), wg * 0.85);
      p.olhar[0] = lerp(p.olhar[0], cl((this.yawG - tt) * 2.4, -1.4, 1.4), wg); p.olhar[1] = lerp(p.olhar[1], cl(-(this.pitchG + nn / 0.65 * 0.65) * 2.2, -1.4, 1.4), wg);
    }
    return p;
  }
  // rosto final: pose (o que a rotina pede) + expressão do momento, tudo com mola
  rosto(p, c) {
    const T = c.T, dt = c.dt;
    const base = faceDePose(p);
    const emo = this.emo; const ke = jan(T - emo.t0, 0, emo.fim - emo.t0, 0.45) * (c.facePropria ? 0.25 : 1);
    const ex = EXPR[emo.nome] || {};
    const alvo = { ...base };
    for (const k in ex) alvo[k] = lerp(base[k] ?? ROSTO0[k], ex[k] * (k === "sorr" || k === "dentroS" || k === "sobeS" ? 1.15 : 1), ke);
    // falar sozinho, rir, suspirar, bocejar, cumprimentar quem está olhando
    if (emo.nome === "resmunga") alvo.abre = Math.max(alvo.abre, ke * (0.08 + 0.14 * Math.max(0, Math.sin(T * 9) * Math.sin(T * 3.7))));
    if (emo.nome === "rindo" || emo.nome === "gargalhada") alvo.abre = Math.max(0, alvo.abre - ke * 0.2 * Math.abs(Math.sin(T * 11)));
    if (p.suspiro) { alvo.abre = Math.max(alvo.abre, 0.15 * p.suspiro); alvo.redondo = Math.max(alvo.redondo, 0.5 * p.suspiro); alvo.fecha = Math.max(alvo.fecha, 0.5 * p.suspiro); }
    if (p.boceja) { alvo.abre = Math.max(alvo.abre, p.boceja); alvo.redondo = Math.max(alvo.redondo, 0.5 * p.boceja); alvo.fecha = Math.max(alvo.fecha, 0.85 * p.boceja); }
    if (p.fechaOlhos) alvo.fecha = Math.max(alvo.fecha, 0.9 * p.fechaOlhos);
    if (this.olhandoCamera > 0.01 && !c.facePropria && c.humor !== "triste") { const k = this.olhandoCamera; for (const kk in EXPR.cumprimenta) alvo[kk] = lerp(alvo[kk], EXPR.cumprimenta[kk], k * 0.8); }
    // micro: sobrancelhas e boca nunca ficam congeladas
    alvo.sobeS += 0.06 * Math.sin(T * 0.83) + 0.04 * Math.sin(T * 2.3 + 1);
    alvo.sorr += 0.04 * Math.sin(T * 0.61 + 2);
    for (const k in ROSTO0) {
      const w = k === "abre" || k === "fecha" ? 22 : k === "sobeS" || k === "dentroS" ? 14 : 9;
      let x = this.F[k] ?? ROSTO0[k], v = this.Fv[k] || 0; const e = x - (alvo[k] ?? ROSTO0[k]), ee = Math.exp(-w * dt), tmp = (v + w * e) * dt;
      this.F[k] = (alvo[k] ?? ROSTO0[k]) + (e + tmp) * ee; this.Fv[k] = (v - w * tmp) * ee;
      if (!(dt > 0)) this.F[k] = alvo[k] ?? ROSTO0[k];
    }
    this.F.ox = p.olhar[0]; this.F.oy = p.olhar[1];
    this.F.piscar = Math.abs(this.yawG - (this.yawGAnt ?? this.yawG)) > 0.5; this.yawGAnt = this.yawG;
    return this.F;
  }
}

/* ---------- cachorro ---------- */
class Cao {
  constructor() {
    const pelo = M("#C08552", { r: 0.9 }), esc = M("#8B5A35", { r: 0.9 }), preto = M("#2B1B14", { r: 0.4 });
    const g = this.g = new THREE.Group();
    this.corpo = new THREE.Group(); g.add(this.corpo);
    caps(this.corpo, pelo, 0.12, 0.26, 0, 0, 0, { rx: PI / 2 });
    esf(this.corpo, M("#E3B98E", { r: 0.9 }), 0.1, 0, -0.03, 0.08, { s: [0.8, 0.7, 1.3] });
    this.cab = new THREE.Group(); this.cab.position.set(0, 0.12, 0.2); this.corpo.add(this.cab);
    esf(this.cab, pelo, 0.115, 0, 0.04, 0);
    esf(this.cab, M("#D9A577"), 0.062, 0, 0.0, 0.1, { s: [1, 0.8, 1.2] });
    esf(this.cab, preto, 0.026, 0, 0.02, 0.17);
    for (const s of [-1, 1]) { esf(this.cab, M("#FFFFFF", { r: 0.3 }), 0.02, s * 0.045, 0.08, 0.098); esf(this.cab, preto, 0.013, s * 0.047, 0.082, 0.112); }
    this.lingua = esf(this.cab, M("#F87171"), 0.025, 0, -0.04, 0.13, { s: [1, 0.5, 1.4] });
    this.orelhas = [];
    for (const s of [-1, 1]) { const o = new THREE.Group(); o.position.set(s * 0.09, 0.1, -0.01); this.cab.add(o); mesh(new THREE.SphereGeometry(0.055, 12, 10), esc, o, s * 0.012, -0.04, 0, { s: [0.45, 1.2, 0.9], rz: s * 0.4 }); this.orelhas.push(o); }
    this.coleira = cil(this.corpo, M("#DC2626", { r: 0.4 }), 0.085, 0.085, 0.03, 0, 0.09, 0.17, { rx: 1.1, seg: 20 });
    this.patas = [];
    for (const [x, z] of [[-0.07, 0.15], [0.07, 0.15], [-0.07, -0.15], [0.07, -0.15]]) { const p = new THREE.Group(); p.position.set(x, -0.04, z); this.corpo.add(p); caps(p, pelo, 0.04, 0.12, 0, -0.1, 0); this.patas.push(p); }
    this.rabo = new THREE.Group(); this.rabo.position.set(0, 0.06, -0.2); this.corpo.add(this.rabo);
    caps(this.rabo, pelo, 0.025, 0.14, 0, 0.08, -0.02, { rx: -0.6 });
    sombra(g, true, false);
    this.zzz = new THREE.Group(); g.add(this.zzz);
    for (let i = 0; i < 2; i++) { const t = tela(64, 64); t.g.font = "bold 52px system-ui"; t.g.fillStyle = "#6366F1"; t.g.textAlign = "center"; t.g.fillText("z", 32, 48); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.t, transparent: true, depthWrite: false })); s.scale.setScalar(0.16 - i * 0.04); this.zzz.add(s); }
    this.pos = null; this.yaw = 0; this.rota = null; this.dist = 0; this.alvo = null;
  }
  // anda até o alvo [x, z, yaw] desviando dos móveis; devolve true quando chegou
  mover(alvo, dt, nav) {
    if (!this.pos) { this.pos = [alvo[0], alvo[1]]; this.yaw = alvo[2]; }
    if (!this.alvo || Math.hypot(alvo[0] - this.alvo[0], alvo[1] - this.alvo[1]) > 0.2) {
      this.alvo = alvo.slice();
      this.rota = Math.hypot(alvo[0] - this.pos[0], alvo[1] - this.pos[1]) > 0.15 ? nav.caminho(this.pos, alvo, 0.12) : null;
    }
    if (this.rota && this.rota.length) {
      const p = this.rota[0]; const dx = p[0] - this.pos[0], dz = p[1] - this.pos[1], L = Math.hypot(dx, dz), v = 1.5 * dt;
      if (L <= v) { this.pos = [p[0], p[1]]; this.rota.shift(); } else { this.pos[0] += dx / L * v; this.pos[1] += dz / L * v; }
      this.yaw = angLerp(this.yaw, Math.atan2(dx, dz), Math.min(1, dt * 10)); this.dist += Math.min(v, L);
      return false;
    }
    this.rota = null;
    // último trecho em linha reta (a caminha e o lado do boneco ficam dentro de áreas "ocupadas" da grade)
    const dx = alvo[0] - this.pos[0], dz = alvo[1] - this.pos[1], L = Math.hypot(dx, dz);
    if (L > 0.03 && L < 1.2) { const v = Math.min(L, 1.2 * dt); this.pos[0] += dx / L * v; this.pos[1] += dz / L * v; this.yaw = angLerp(this.yaw, Math.atan2(dx, dz), Math.min(1, dt * 10)); this.dist += v; return false; }
    this.yaw = angLerp(this.yaw, alvo[2], Math.min(1, dt * 5));
    return true;
  }
  quadro(estado, T) {
    const c = this.corpo; this.zzz.visible = estado === "dorme";
    const feliz = estado === "pula" || estado === "carinho" || estado === "anda";
    const wag = Math.sin(T * (estado === "dorme" ? 2 : 16)) * (estado === "dorme" ? 0.2 : feliz ? 0.8 : 0.5);
    this.rabo.rotation.set(0, wag, 0); this.lingua.visible = estado !== "dorme";
    this.orelhas.forEach((o, i) => { o.rotation.x = estado === "anda" ? Math.sin(T * 14 + i) * 0.25 : 0; });
    if (estado === "dorme") {
      c.position.set(0, 0.1 + 0.008 * Math.sin(T * 2), 0); c.rotation.set(0, 0, 0.12);
      this.patas.forEach((p, i) => p.rotation.set(i < 2 ? -1.35 : 1.35, 0, 0));
      this.cab.rotation.set(0.5, 0.25, 0); this.cab.position.set(0, 0.04, 0.22);
      this.zzz.children.forEach((s, i) => { const k = ((T * 0.45 + i * 0.5) % 1); s.position.set(0.12 + k * 0.1, 0.32 + k * 0.35, 0.2); s.material.opacity = 1 - k; });
    } else if (estado === "anda") {
      const ph = this.dist / 0.28 * TAU; c.position.set(0, 0.2 + 0.02 * Math.abs(Math.sin(ph)), 0); c.rotation.set(0.04 * Math.sin(ph * 2), 0, 0);
      this.patas.forEach((p, i) => p.rotation.set(Math.sin(ph + (i === 0 || i === 3 ? 0 : PI)) * 0.6, 0, 0));
      this.cab.position.set(0, 0.12, 0.2); this.cab.rotation.set(-0.1, 0, 0);
    } else if (estado === "senta" || estado === "carinho") {
      c.position.set(0, 0.2, 0); c.rotation.set(-0.55, 0, 0);
      this.patas.forEach((p, i) => p.rotation.set(i < 2 ? 0.55 : -0.9, 0, 0));
      this.cab.position.set(0, 0.12, 0.2);
      if (estado === "carinho") this.cab.rotation.set(0.1 + 0.12 * Math.sin(T * 5), 0.25 * Math.sin(T * 2.6), 0.2 * Math.sin(T * 3.1));
      else this.cab.rotation.set(0.45 + 0.08 * Math.sin(T * 1.3), 0.3 * Math.sin(T * 0.7), 0.15 * Math.sin(T * 1.1));
    } else { // pula
      const j = Math.abs(Math.sin(T * 5.2)); c.position.set(0, 0.2 + 0.22 * j, 0); c.rotation.set(-0.25 * j, 0, 0);
      this.patas.forEach((p, i) => p.rotation.set((i < 2 ? -0.6 : 0.6) * j, 0, 0));
      this.cab.position.set(0, 0.12, 0.2); this.cab.rotation.set(-0.15, 0, 0);
    }
  }
}

/* ---------- navegação: grade com A* (o boneco desvia dos móveis onde quer que estejam) ---------- */
class Nav {
  constructor(cel = 0.1) { this.c = cel; this.nx = Math.ceil(W / cel); this.nz = Math.ceil(D / cel); this.b = new Uint8Array(this.nx * this.nz); }
  limpar(m = 0.24) {
    this.b.fill(0);
    for (let i = 0; i < this.nx; i++) for (let j = 0; j < this.nz; j++) { const x = (i + 0.5) * this.c, z = (j + 0.5) * this.c; if (x < m || x > W - m || z < m || z > D - 0.12) this.b[i + j * this.nx] = 1; }
  }
  ret(x0, z0, x1, z1, inf = 0.24) {
    const c = this.c;
    const i0 = Math.max(0, Math.floor((x0 - inf) / c)), i1 = Math.min(this.nx - 1, Math.floor((x1 + inf) / c));
    const j0 = Math.max(0, Math.floor((z0 - inf) / c)), j1 = Math.min(this.nz - 1, Math.floor((z1 + inf) / c));
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const x = (i + 0.5) * c, z = (j + 0.5) * c;
      const dx = Math.max(x0 - x, 0, x - x1), dz = Math.max(z0 - z, 0, z - z1);
      if (dx * dx + dz * dz <= inf * inf) this.b[i + j * this.nx] = 1;
    }
  }
  cel(x, z) { return [cl(Math.floor(x / this.c), 0, this.nx - 1), cl(Math.floor(z / this.c), 0, this.nz - 1)]; }
  livre(x, z) { const [i, j] = this.cel(x, z); return !this.b[i + j * this.nx]; }
  // célula livre mais próxima
  perto(x, z) {
    if (this.livre(x, z)) return [x, z];
    const [ci, cj] = this.cel(x, z);
    for (let r = 1; r < Math.max(this.nx, this.nz); r++) {
      let best = null, bd = 1e9;
      for (let i = ci - r; i <= ci + r; i++) for (let j = cj - r; j <= cj + r; j++) {
        if (Math.max(Math.abs(i - ci), Math.abs(j - cj)) !== r || i < 0 || j < 0 || i >= this.nx || j >= this.nz || this.b[i + j * this.nx]) continue;
        const px = (i + 0.5) * this.c, pz = (j + 0.5) * this.c, d = (px - x) ** 2 + (pz - z) ** 2; if (d < bd) { bd = d; best = [px, pz]; }
      }
      if (best) return best;
    }
    return [x, z];
  }
  visivel(a, b) {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]); const n = Math.ceil(L / (this.c * 0.4));
    for (let k = 1; k < n; k++) { const t = k / n; if (!this.livre(lerp(a[0], b[0], t), lerp(a[1], b[1], t))) return false; }
    return true;
  }
  // devolve a lista de pontos até o destino (sem o ponto de partida)
  caminho(a, b) {
    const s = this.perto(a[0], a[1]), e = this.perto(b[0], b[1]);
    const fim = [b[0], b[1]];
    if (this.visivel(s, e)) return (Math.hypot(s[0] - a[0], s[1] - a[1]) > 0.02 ? [s] : []).concat([e[0] !== b[0] || e[1] !== b[1] ? e : fim]);
    const nx = this.nx, N = nx * this.nz, [si, sj] = this.cel(...s), [ei, ej] = this.cel(...e);
    const g = new Float32Array(N).fill(1e9), de = new Int32Array(N).fill(-1), fechado = new Uint8Array(N);
    const heap = []; const push = (k, f) => { heap.push([f, k]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0]; const last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
    const h = (i, j) => Math.hypot(i - ei, j - ej);
    const k0 = si + sj * nx; g[k0] = 0; push(k0, h(si, sj));
    let achou = false;
    while (heap.length) {
      const [, k] = pop(); if (fechado[k]) continue; fechado[k] = 1;
      const i = k % nx, j = (k / nx) | 0; if (i === ei && j === ej) { achou = true; break; }
      for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
        if (!di && !dj) continue; const ni = i + di, nj = j + dj; if (ni < 0 || nj < 0 || ni >= nx || nj >= this.nz) continue;
        const nk = ni + nj * nx; if (this.b[nk] || fechado[nk]) continue;
        if (di && dj && (this.b[i + di + j * nx] || this.b[i + (j + dj) * nx])) continue;
        const ng = g[k] + (di && dj ? 1.4142 : 1); if (ng < g[nk]) { g[nk] = ng; de[nk] = k; push(nk, ng + h(ni, nj)); }
      }
    }
    if (!achou) return [e];
    const pts = []; for (let k = ei + ej * nx; k !== -1; k = de[k]) pts.push([((k % nx) + 0.5) * this.c, (((k / nx) | 0) + 0.5) * this.c]);
    pts.reverse(); pts[0] = s; pts[pts.length - 1] = e;
    // corta caminho onde dá para ir reto
    const out = [s]; let i = 0;
    while (i < pts.length - 1) { let j = pts.length - 1; while (j > i + 1 && !this.visivel(pts[i], pts[j])) j--; out.push(pts[j]); i = j; }
    out.shift(); if (Math.hypot(s[0] - a[0], s[1] - a[1]) > 0.02) out.unshift(s);
    if (e[0] === b[0] && e[1] === b[1]) out[out.length - 1] = fim;
    return out;
  }
}

/* ---------- roteiros (um por humor), montados a partir de onde os móveis estão ---------- */
const A = (vel, destinos, x = {}) => ({ tipo: "andar", vel, destinos, ...x });
const F = (dur, pose, x = {}) => ({ tipo: "acao", dur, pose, ...x });
// sentar/levantar: mistura pose em pé ↔ sentado com um leve impulso do tronco
const sentarDe = (pe, sent) => (k, tl, T) => { const w = suave(k); const r = mistura(pe(T), sent(T), w); r.lean += 0.35 * Math.sin(PI * k); return r; };
const levantarDe = (pe, sent) => (k, tl, T) => { const w = 1 - suave(k); const r = mistura(pe(T), sent(T), w); r.lean += 0.4 * Math.sin(PI * k); return r; };

// jogada de sinuca: 0..1 pega posição, ensaia a tacada, bate, levanta
const TACADA = 4.05;
function poseTacada(tl, T) {
  const w = suave(fase(tl, 0, 1.0)) * (1 - suave(fase(tl, 5.0, 5.6)));
  let back = 0;
  if (tl > 1.1 && tl < 3.5) back = 0.5 - 0.5 * Math.cos((tl - 1.1) * TAU * 0.75);
  else if (tl >= 3.5 && tl < 3.85) back = suave(fase(tl, 3.5, 3.85));
  else if (tl >= 3.85 && tl < TACADA) back = 1 - io(fase(tl, 3.85, TACADA));
  const r = emPe(T, { lean: 0.78 * w, hz: -0.1 * w, nod: -0.45 * w, alt: 0.89 - 0.08 * w, lL: [0.3 * w, 0.22 * w], lR: [-0.1 * w, 0.08 * w], olhar: [0, -1.2 * w], boca: "foco", taco: w, recuo: back * w, twist: -0.12 * w });
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
  }
  return r;
}
// comemoração rápida (soco no ar)
const vibra = (tl, dur, o = {}) => { const up = jan(tl, 0, dur, 0.3), pump = Math.abs(Math.sin(tl * PI / 0.42)) * up; return { gestoR: up > 0.3 ? "punho" : "", aR: [lerp(0, 2.55 + 0.3 * pump, up), 0.25, lerp(0.2, 0.9 - 0.5 * pump, up)], dy: 0.03 * pump, olhos: up > 0.5 ? "F" : "A", boca: up > 0.3 ? "aberta" : "sorriso", boch: 0.7, ...o }; };

// L: lugares no mundo (dependem de onde estão os móveis); e: a cena (alvos ao vivo); ciclo: nº da volta (para variar)
// Cada rotina termina exatamente na pose em que começa (o laço não aparece). "entrada" e "saida" levam o boneco
// para dentro e para fora da rotina (sentar e pegar o controle, largar o taco...) quando ele sai para fazer outra coisa.
const sofaSent = (T) => sentado(T, 0.62, { lean: -0.1 });
function jogando(T, tl, o = {}) {
  const curva = Math.sin(tl * 0.9) * 0.08 + Math.sin(tl * 2.3) * 0.03;
  const tap = (x) => Math.max(0, Math.sin(T * 10 + x)) * 0.12;
  return sentado(T, 0.62, { lean: -0.1 + curva * 0.3, side: curva, nod: 0.15, turn: curva * 0.6, aL: [0.85 + tap(0), -0.22, 1.25], aR: [0.85 + tap(2), -0.22, 1.25], ...o });
}
// partida no sofá: vibra com os braços para cima (o controle vai junto na mão direita)
const partida = (dur, vibras) => F(dur, (k, tl, T) => {
  let yes = 0; for (const v of vibras) yes = Math.max(yes, jan(tl, v, v + 1.3));
  const r = jogando(T, tl, yes > 0.3 ? { boca: "aberta", olhos: yes > 0.5 ? "F" : "A", boch: 0.15 + 0.5 * yes, gestoR: "punho", gestoL: "aberta" } : {});
  r.aR = r.aR.map((x, i) => lerp(x, [2.7, 0.5, 0.4][i], yes)); r.aL = r.aL.map((x, i) => lerp(x, [2.5, 0.55, 0.5][i], yes));
  r.lean -= 0.08 * yes; r.nod -= 0.25 * yes; r.dy = 0.04 * yes * Math.abs(Math.sin(tl * 9));
  return r;
}, { tv: "jogo", props: { controle: "LR" }, foco: () => V(3.2, 1.45, 0.12) });
const pegaControle = (e) => F(1.6, (k, tl, T) => {
  const a = jan(tl, 0, 1.15, 0.4); const c = e.casaDe("controle").pos;
  const r = mistura(sofaSent(T), jogando(T, 0), suave(fase(tl, 0.75, 1.6))); r.ikR = [c.x, c.y + 0.035, c.z]; r.kR = a; r.oriR = "baixo"; r.lean += 0.12 * a; r.turn += 0.4 * a; r.olhar = [0.8 * a, 0.8 * a]; return r;
}, { props: { controle: (k, tl) => tl < 0.6 ? "casa" : "LR" } });
const largaControle = (e) => F(1.5, (k, tl, T) => {
  const a = jan(tl, 0.15, 1.5, 0.4); const c = e.casaDe("controle").pos;
  const r = mistura(jogando(T, 0), sofaSent(T), suave(fase(tl, 0, 0.6))); r.ikR = [c.x, c.y + 0.035, c.z]; r.kR = a; r.oriR = "baixo"; r.lean += 0.12 * a; r.turn += 0.4 * a; r.olhar = [0.8 * a, 0.8 * a]; return r;
}, { props: { controle: (k, tl) => tl < 0.8 ? "LR" : "casa" } });
const pegaTaco = () => F(1.5, (k, tl, T) => emPe(T, { taco: lerp(-1, 0, suave(fase(tl, 0.2, 1.2))), lean: 0.12 * jan(tl, 0, 1.5, 0.4), boca: "leve" }), { bolas: "ini" });
const largaTaco = () => F(1.6, (k, tl, T) => emPe(T, { taco: lerp(0, -1, suave(fase(tl, 0.3, 1.3))), lean: 0.15 * jan(tl, 0, 1.6, 0.4) }), { bolas: "ini" });

const ROTEIROS = {
  tranquilo: (L, e, ciclo = 0) => {
    const levantar = F(1.3, levantarDe((T) => emPe(T), sofaSent), { ate: L.sofaP });
    const sentar = F(1.3, sentarDe((T) => emPe(T), sofaSent), { ate: L.sofaS });
    const cafe = ciclo % 2 === 0;
    const passos = cafe ? [
      partida(13 + (ciclo % 3) * 2, [5.2, 10.6]),
      largaControle(e), levantar,
      F(2.8, (k, tl, T) => { const w = jan(tl, 0.1, 2.7, 0.6); return emPe(T, { aL: [2.95 * w, 0.25, 0.3], aR: [2.95 * w, 0.25, 0.3], lean: -0.12 * w, side: Math.sin(tl * 2.2) * 0.12 * w, nod: -0.2 * w, olhos: w > 0.5 ? "Z" : "A", boca: w > 0.5 ? "o" : "leve", dy: 0.03 * w }); }),
      A(1.15, [L.cafeP]),
      // pega a xícara, põe embaixo da máquina, aperta o botão e traz para perto do peito
      F(5.6, (k, tl, T) => {
        const c = e.casaDe("xicara").pos, bico = e.bico(); const alc = jan(tl, 0, 5.3, 0.45), ida = suave(fase(tl, 0.9, 1.7)), volta = suave(fase(tl, 4.3, 5.3));
        const alvo = c.clone().add(V(0, 0.06, 0)).lerp(bico, ida); const bt = e.botaoCafe(), aperta = jan(tl, 1.9, 2.9, 0.25);
        return emPe(T, { ikR: [alvo.x, alvo.y, alvo.z], kR: alc * (1 - volta), aR: [0.6, -0.25, 1.75], ikL: [bt.x, bt.y - 0.02 * Math.max(0, Math.sin((tl - 2.1) * 9)), bt.z], kL: aperta, lean: 0.14 * alc, nod: 0.28, olhar: [0, 1] });
      }, { ate: L.cafeP, props: { xicara: (k, tl) => tl < 0.75 ? "casa" : "R" }, fx: "cafe", foco: (e) => e.bico() }),
      F(4.4, (k, tl, T) => { const g = jan(tl, 0.6, 1.8, 0.35) + jan(tl, 2.6, 3.7, 0.35);
        return emPe(T, { aR: [0.6 + 0.75 * g, -0.25, 1.75 + 0.4 * g], gole: g, nod: -0.25 * g, olhos: g > 0.5 ? "Z" : "A", boca: g > 0.5 ? "reta" : "sorriso", boch: 0.35 }); }, { props: { xicara: "R" } }),
      F(1.6, (k, tl, T) => { const c = e.casaDe("xicara").pos; const a = jan(tl, 0, 1.6, 0.45); return emPe(T, { ikR: [c.x, c.y + 0.06, c.z], kR: a, aR: [0.6, -0.25, 1.75], lean: 0.14 * a, nod: 0.25 }); }, { props: { xicara: (k, tl) => tl < 0.85 ? "R" : "casa" } }),
      A(1.1, [L.sofaP]), sentar, pegaControle(e),
    ] : [
      partida(9 + (ciclo % 3) * 2, [3.4]),
      // relaxa: encosta, estica as pernas, o controle descansa na mão direita
      F(6.5, (k, tl, T) => { const w = jan(tl, 0, 6.5, 0.9); const r = jogando(T, tl * 0.3, { boca: "sorriso", boch: 0.3 }); r.lean -= 0.22 * w; r.nod -= 0.15 * w; r.lL = r.lL.map((x, i) => lerp(x, [0.95, 0.5][i], w)); r.lR = r.lR.map((x, i) => lerp(x, [0.9, 0.45][i], w)); r.aL = r.aL.map((x, i) => lerp(x, [0.5, -0.05, 0.6][i], w)); r.aR = r.aR.map((x, i) => lerp(x, [0.65, -0.1, 0.9][i], w)); r.olhos = tl > 2 && tl < 4.4 ? "Z" : "A"; return r; }, { props: { controle: "LR" }, foco: () => V(3.2, 1.45, 0.12) }),
      partida(8, [4.4]),
    ];
    return { inicio: L.sofaS, aprox: L.sofaP, sentado: true, sentPose: sofaSent, padrao: { boca: "leve", boch: 0.15 }, passos, entrada: [sentar, pegaControle(e)], saida: [largaControle(e), levantar] };
  },
  feliz: (L, e, ciclo = 0) => {
    const passos = [
      F(2.6, (k, tl, T) => { const r = Math.sin(tl * 9) * 0.12 * jan(tl, 0.4, 2.2); return emPe(T, { taco: 0, aL: [1.4 + r, 0.1, 1.9], nod: -0.25, olhar: [0, -1.5], boca: "leve" }); }, { bolas: "ini", foco: (e) => e.pto("sinuca", 7.62, 0.81, 4.52) }),
      F(5.6, (k, tl, T) => poseTacada(tl, T)),
      F(3.0, (k, tl, T) => { const v = vibra(tl, 3.0); return emPe(T, { ...v, taco: 0, aL: v.aR, aR: undefined, bolas: "fim" }); }),
    ];
    if (ciclo % 2 === 0) passos.push(
      A(1.25, [L.monP], { taco: 0, bolas: "fim" }),
      F(4.6, (k, tl, T) => { const up = jan(tl, 1.4, 3.6, 0.4); const nod = Math.sin(tl * 6) * 0.1 * jan(tl, 0.3, 1.3);
        return emPe(T, { taco: 0, aL: [lerp(0, 1.3, up), -0.15, lerp(0.2, 1.7, up)], lean: 0.1, nod: 0.05 + nod, boca: up > 0.5 ? "aberta" : "sorriso", olhos: up > 0.5 ? "F" : "A" }); }, { bolas: "fim", ate: L.monP, foco: (e) => e.pto("mesa", 6.8, 1.14, 0.22) }),
      A(1.25, [L.sinP], { taco: 0, bolas: "fim" }));
    else passos.push(F(3.2, (k, tl, T) => emPe(T, { taco: 0, nod: 0.2, olhar: [0.6 * Math.sin(tl * 1.5), -1], boca: "sorriso", aL: [0.3, 0.25, 1.2 * jan(tl, 0, 3.2, 0.5)], side: 0.05 * Math.sin(tl * 2) }), { bolas: "fim" }));
    // a bola encaçapada volta para a mesa e a branca rola para o lugar dela
    passos.push(F(2.2, (k, tl, T) => emPe(T, { taco: 0, lean: 0.2 * jan(tl, 0, 2.2, 0.5), nod: 0.3, olhar: [0, -1.3], aL: [lerp(0.2, 1.1, jan(tl, 0, 2.2, 0.5)), 0.1, 0.6] }), { bolas: "volta" }));
    return { inicio: L.sinP, aprox: L.sinP, sentado: false, padrao: { boca: "sorriso", boch: 0.35 }, passos, entrada: [pegaTaco()], saida: [largaTaco()] };
  },
  euforico: (L, e, ciclo = 0) => ({ inicio: L.danca, aprox: L.danca, sentado: false, padrao: { olhos: "F", boch: 0.8 }, entrada: [], saida: [], passos: [
    F(3.6, (k, tl, T) => poseFesta(tl, T), { fx: "globo" }),
    F(3.4, (k, tl, T) => poseFesta(tl, T), { fx: "globo" }),
    F(2.2, (k, tl, T) => { const s = io(k); const r = emPe(T, { aL: [1.5, 1.2, 0.2], aR: [1.5, 1.2, 0.2], boca: "aberta", olhos: "F", boch: 0.8 }); r.yawAdd = s * TAU; r.dy = 0.12 * Math.sin(PI * k); return r; }),
    // tira o maço do bolso e joga as notas para o alto (cada nota sai do maço da mão esquerda)
    F(5.2, (k, tl, T) => {
      const tira = jan(tl, 0, 0.8, 0.25), bl = e.bolso("L"); const t2 = Math.max(0, tl - 0.8); const c = (t2 % 1.1) / 1.1; const joga = tl < 0.8 ? 0 : c < 0.55 ? io(c / 0.55) : 1 - sai((c - 0.55) / 0.45);
      const r = emPe(T, { aL: [0.5 * suave(fase(tl, 0.4, 0.9)), 0.2, 1.3 * suave(fase(tl, 0.4, 0.9))], ikL: [bl.x, bl.y, bl.z], kL: tira, aR: [lerp(0.3, 2.8, joga), 0.15, lerp(1.4, 0.2, joga)], lean: -0.08 * joga, nod: -0.15 * joga, dy: 0.05 * joga, boca: "aberta", olhos: "F", boch: 0.8 });
      r.solta = tl > 0.8 && c > 0.5 && c < 0.6 ? Math.floor(t2 / 1.1) + 1 : 0; return r;
    }, { props: { maco: (k, tl) => tl < 0.45 ? "casa" : tl > 5.0 ? "casa" : "L", nota: (k, tl) => { const c = ((Math.max(0, tl - 0.8)) % 1.1) / 1.1; return tl > 0.8 && tl < 4.9 && c < 0.5 ? "R" : "casa"; } } }),
    A(2.2, [L.monP], { estilo: "corre" }),
    F(3.4, (k, tl, T) => { const j = (tl % 0.85) / 0.85, h = Math.sin(PI * j);
      return emPe(T, { dy: 0.35 * h, aL: [2.9, 0.4, 0.2], aR: [2.9, 0.4, 0.2], lL: [0.3 * h, 0.7 * h], lR: [0.3 * h, 0.7 * h], boca: "aberta", olhos: "F" }); }, { ate: L.monP, foco: (e) => e.pto("mesa", 6.8, 1.14, 0.22), semPeso: true }),
    A(2.2, [L.danca], { estilo: "corre" }),
    F(5.0, (k, tl, T) => poseFesta(1.05 + (tl % 2.48), T), { ate: L.danca, fx: "globo" }),
  ] }),
  preocupado: (L, e, ciclo = 0) => {
    const sentP = (T) => sentado(T, 0.6, { lean: 0.22 });
    const levantar = F(1.3, levantarDe((T) => emPe(T), sentP), { ate: L.cadP }), sentar = F(1.3, sentarDe((T) => emPe(T), sentP), { ate: L.cadS });
    const digita = (dur) => F(dur, (k, tl, T) => {
      const perto = jan(tl, 3.0, 5.6, 0.6), coca = jan(tl, 6.6, 7.9, 0.3), entra = suave(fase(tl, 0, 0.9)) * (1 - suave(fase(tl, dur - 0.9, dur)));
      const tE = Math.max(0, Math.sin(T * 14)) * 0.025, tD = Math.max(0, Math.sin(T * 14 + 2.2)) * 0.025;
      const kb = e.teclado(); const dx = Math.sin(T * 3.1) * 0.03;
      return sentado(T, 0.6, { lean: 0.22 + 0.14 * perto * entra, nod: 0.08 + 0.06 * Math.sin(tl * 1.7) - 0.1 * perto, hz: 0.02,
        ikL: [kb.L.x + dx, kb.L.y + tE, kb.L.z], kL: entra, ikR: [kb.R.x - dx, kb.R.y + tD, kb.R.z], kR: entra * (1 - coca), oriL: "baixo", oriR: "baixo",
        aR: [lerp(0.6, 2.3, coca), lerp(-0.08, 0.6, coca), lerp(1.0, 2.4 + 0.15 * Math.sin(T * 16), coca)], item: entra > 0.3 ? "tecla" : "",
        olhar: [0.3 * Math.sin(tl * 2), -0.6] });
    }, { mon: "foco", foco: (e) => e.pto("mesa", 6.8, 1.14, 0.22) });
    const passos = [digita(9 + (ciclo % 2) * 3),
      F(3.6, (k, tl, T) => { const c = jan(tl, 0, 3.6, 0.6); const sh = Math.sin(T * 9) * 0.12 * c;
        return sentado(T, 0.6, { lean: 0.22 - 0.3 * c, nod: -0.1 * c, turn: sh, aL: [lerp(0.62, 2.5, c), lerp(-0.08, 0.7, c), lerp(0.98, 2.3, c)], aR: [lerp(0.6, 2.5, c), lerp(-0.08, 0.7, c), lerp(1.0, 2.3, c)], balao: jan(tl, 0.3, 3.4, 0.3), balaoT: "smiley-nervous", boca: "o", abre: 0.4 }); })];
    if (ciclo % 2 === 0) passos.push(levantar,
      A(0.85, [L.ritmo1, L.ritmo2, L.cadP], { pensativo: true }),
      F(3.4, (k, tl, T) => { const w = jan(tl, 0.1, 3.3, 0.4); const sus = Math.sin(PI * fase(tl, 0.8, 2.2));
        return emPe(T, { aR: [lerp(0, 1.3, w), -0.25, lerp(0.2, 2.2, w)], alt: 0.89 - 0.02 * sus, nod: 0.25 * w, lean: 0.06 * sus, olhos: sus > 0.6 ? "Z" : "A", boca: "triste", sob: "triste", balao: jan(tl, 0.6, 3.0), balaoT: "chart-line-down" }); }, { ate: [L.cadP[0], L.cadP[1], L.cadP[2] + PI * 0.3] }),
      F(0.8, (k, tl, T) => emPe(T), { ate: L.cadP }), sentar);
    else passos.push(F(4.0, (k, tl, T) => { const w = jan(tl, 0, 4, 0.6); return sentado(T, 0.6, { lean: 0.22 - 0.25 * w, nod: -0.2 * w, turn: 0.5 * Math.sin(tl * 1.2) * w, olhar: [Math.sin(tl * 1.2) * 1.2 * w, -0.5], boca: "foco" }); }));
    return { inicio: L.cadS, aprox: L.cadP, sentado: true, sentPose: sentP, padrao: { sob: "tenso", boca: "foco" }, passos, entrada: [sentar], saida: [levantar] };
  },
  triste: (L, e, ciclo = 0) => {
    const sentP = (T) => sentado(T, 0.6, { lean: 0.32, nod: 0.35, aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05] });
    const pe = (T) => emPe(T, { lean: 0.12, nod: 0.3 });
    const levantar = F(1.6, levantarDe(pe, sentP), { ate: L.polP }), sentar = F(1.6, sentarDe(pe, sentP), { ate: L.polS });
    const passos = [
      F(11.5, (k, tl, T) => {
        const cobre = jan(tl, 0.2, 4.6, 0.6), sus = Math.sin(PI * fase(tl, 5.2, 6.8)), olha = jan(tl, 7.2, 11.2, 0.6);
        return sentado(T, 0.6, { lean: 0.32 + 0.25 * cobre - 0.12 * olha + 0.04 * sus, nod: 0.35 + 0.25 * cobre - 0.3 * olha, turn: -0.5 * olha,
          aL: [lerp(0.72, 1.55, cobre), lerp(-0.1, -0.32, cobre), lerp(1.05, 2.45, cobre)], aR: [lerp(0.72, 1.55, cobre), lerp(-0.1, -0.32, cobre), lerp(1.05, 2.45, cobre)],
          olhos: cobre > 0.5 ? "Z" : "A", olhar: olha > 0.3 ? [-1.4, -0.6] : [0, 1.2], dy: -0.01 * sus });
      })];
    if (ciclo % 2 === 0) passos.push(levantar, A(0.62, [L.janP], { estilo: "triste" }),
      F(9.5, (k, tl, T) => { const mao = jan(tl, 0.8, 7.8, 0.6), sus = Math.sin(PI * fase(tl, 3.6, 5.2)), enc = jan(tl, 5.6, 7.4, 0.5);
        return emPe(T, { aL: [lerp(0, 1.75, mao), -0.1 * mao, lerp(0.2, 0.55, mao)], alt: 0.89 - 0.02 * sus, lean: 0.06 + 0.1 * enc, nod: 0.1 + 0.3 * enc - 0.1 * mao, side: -0.05 * enc, olhar: [0, -0.5] }); }, { ate: L.janP, foco: () => V(-1.2, 1.5, 1.8) }),
      A(0.62, [L.polP], { estilo: "triste" }), F(0.6, (k, tl, T) => pe(T), { ate: L.polP }), sentar);
    else passos.push(F(7, (k, tl, T) => { const s = Math.sin(PI * fase(tl, 1.5, 3.5)); return sentado(T, 0.6, { lean: 0.32 + 0.08 * s, nod: 0.35 - 0.2 * jan(tl, 3.8, 6.6, 0.6), turn: -0.6 * jan(tl, 3.8, 6.6, 0.6), aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05], olhar: [-1.4, -0.4], olhos: s > 0.6 ? "Z" : "A" }); }));
    return { inicio: L.polS, aprox: L.polP, sentado: true, sentPose: sentP, padrao: { sob: "triste", boca: "triste", nuvem: 1, lagrima: 1 }, passos, entrada: [sentar], saida: [levantar] };
  },
};

/* ---------- animações das recompensas: cada item liberado ganha a sua ---------- */
const ITEM_ANIM = {
  cachorro: { humores: ["triste", "preocupado", "tranquilo", "feliz", "euforico"], ic: "dog",
    lugar: (e) => e.lugar("cachorro", [1.35, 5.42, 0]),
    passos: (e) => [
      F(1.4, (k, tl, T) => emPe(T, { nod: 0.35, olhar: [0, 1.2], boca: "sorriso", boch: 0.3 }), { fx: "caoVem" }),
      F(5.2, (k, tl, T) => { const a = jan(tl, 0, 5.2, 0.7); const c = e.alvoCao(); const s = Math.sin(tl * 5) * 0.06;
        return agachado(T, a, { ikR: [c.x + s, c.y + 0.13, c.z], kR: a, oriR: "baixo", gestoR: "carinho", nod: 0.3 * a, boca: "sorriso", olhos: tl > 2 ? "F" : "A", boch: 0.5, olhar: [0, 1] }); }, { fx: "caoCarinho" }),
      F(1.2, (k, tl, T) => emPe(T, { ...vibra(tl, 1.2) }), { fx: "caoCarinho" }),
    ] },
  aquario: { humores: ["preocupado", "tranquilo", "feliz", "euforico"], ic: "fish",
    lugar: (e) => e.lugar("aquario", [0.98, 6.835, -PI / 2]),
    passos: (e) => [
      F(1.0, (k, tl, T) => emPe(T, { nod: 0.2, olhar: [0, 0.6] })),
      F(4.6, (k, tl, T) => { const a = jan(tl, 0, 4.6, 0.6); const t = e.pto("aquario", 0.35, 1.38, 6.835); const sh = Math.sin(T * 18) * 0.02 * fase(tl, 1, 1.4) * (1 - fase(tl, 3.4, 3.8));
        return emPe(T, { ikR: [t.x + sh, t.y, t.z], kR: a, oriR: "baixo", lean: 0.12 * a, nod: 0.3 * a, mR: 0.3 + 0.4 * Math.abs(Math.sin(T * 12)) * a, boca: "sorriso", olhar: [0, 1] }); }, { fx: "racao" }),
      F(1.6, (k, tl, T) => emPe(T, { boca: "sorriso", olhos: "F", boch: 0.5, nod: 0.1 })),
    ] },
  fliperama: { humores: ["tranquilo", "feliz", "euforico"], ic: "joystick",
    lugar: (e) => e.lugar("fliperama", [5.29, 1.42, PI]),
    passos: (e) => [
      F(7.0, (k, tl, T) => { const a = jan(tl, 0, 7.0, 0.6); const [l, r] = e.alvoArcade(); const bt = Math.max(0, Math.sin(T * 13)) * 0.02;
        return emPe(T, { ikL: [l.x, l.y, l.z], kL: a, ikR: [r.x, r.y - bt, r.z], kR: a, oriL: "baixo", oriR: "baixo", lean: 0.1 * a, nod: -0.05 + 0.04 * Math.sin(T * 6), side: 0.03 * Math.sin(T * 3), boca: "foco", olhar: [0, -0.3], mL: 0.9 * a }); }, { fx: "arcade" }),
      F(1.8, (k, tl, T) => { const up = jan(tl, 0, 1.8, 0.3); return emPe(T, { aL: [2.8 * up, 0.4, 0.3], aR: [2.8 * up, 0.4, 0.3], dy: 0.1 * Math.abs(Math.sin(tl * 7)) * up, boca: "aberta", olhos: "F", boch: 0.8 }); }),
    ] },
  touro: { humores: ["tranquilo", "feliz", "euforico"], ic: "cow",
    lugar: (e) => { const c = e.alvoTouro(); const p = e.lugar("touro", [5.4, 6.75]); return [p[0], p[1], yawPara(p, [c.x, c.z])]; },
    passos: (e) => [
      F(3.6, (k, tl, T) => { const a = jan(tl, 0, 3.6, 0.6); const c = e.alvoTouro(); const s = Math.sin(tl * 6) * 0.05;
        return emPe(T, { ikR: [c.x + s, c.y + 0.06, c.z + s * 0.5], kR: a, oriR: "baixo", gestoR: "carinho", lean: 0.18 * a, boca: "sorriso", olhos: tl > 1.5 ? "F" : "A", boch: 0.45 }); }),
      F(2.0, (k, tl, T) => emPe(T, { ...vibra(tl, 2.0) })),
    ] },
  cofre: { humores: ["preocupado", "tranquilo", "feliz", "euforico"], ic: "vault",
    lugar: (e) => e.lugar("cofre", [7.62, 1.63, PI / 2]),
    passos: (e) => [
      F(1.8, (k, tl, T) => { const a = suave(fase(tl, 0, 0.8)); const m = e.alvoCofre(); return agachado(T, 0.55 * a, { ikR: [m.x, m.y, m.z], kR: a, porta: 1.9 * suave(fase(tl, 0.9, 1.8)), boca: "o", abre: 0.4 }); }, { fx: "cofre" }),
      // enfia a mão, pega uma moeda de ouro e levanta
      F(2.0, (k, tl, T) => { const pega = jan(tl, 0, 1.4, 0.4); const d = e.pto("cofre", 8.54, 0.2, 1.75); return agachado(T, 0.55 * (1 - suave(fase(tl, 1.0, 2.0))), { ikR: [d.x, d.y, d.z], kR: pega, aR: [1.0, -0.1, 1.5], porta: 1.9, boca: "sorriso", olhos: "F", boch: 0.6 }); }, { fx: "cofre", props: { moeda: (k, tl) => tl < 0.75 ? "casa" : "R" } }),
      F(1.8, (k, tl, T) => emPe(T, { aR: [1.0, -0.1, 1.5], porta: 1.9, olhar: [0, -1.6 * jan(tl, 0.2, 1.4)], nod: -0.35 * jan(tl, 0.2, 1.4), boca: "aberta", olhos: "A", fxk: fase(tl, 0.15, 1.35), mR: 0.2 }), { fx: "cofre", props: { moeda: (k, tl) => tl < 0.15 || tl > 1.35 ? "R" : "joga" } }),
      F(1.9, (k, tl, T) => { const a = jan(tl, 0, 1.9, 0.5); const d = e.pto("cofre", 8.54, 0.2, 1.75); return agachado(T, 0.55 * a, { ikR: [d.x, d.y, d.z], kR: a * fase(tl, 0.2, 0.6), aR: [1.0, -0.1, 1.5], porta: 1.9 * (1 - suave(fase(tl, 1.0, 1.8))), boca: "sorriso" }); }, { fx: "cofre", props: { moeda: (k, tl) => tl < 0.75 ? "R" : "casa" } }),
    ] },
  trofeu: { humores: ["tranquilo", "feliz", "euforico"], ic: "trophy",
    lugar: (e) => e.lugar("trofeu", [7.98, 2.6, PI / 2]),
    passos: (e) => [
      F(1.2, (k, tl, T) => { const a = suave(k); const t = e.alvoTrofeu(); return emPe(T, { ikL: [t.L.x, t.L.y, t.L.z], kL: a, ikR: [t.R.x, t.R.y, t.R.z], kR: a, lean: 0.15 * a, boca: "o", fxk: k }); }, { fx: "trofeuPega" }),
      F(3.0, (k, tl, T) => { const up = jan(tl, 0, 3.0, 0.7); const b = emPe(T, { aL: [lerp(0.6, 2.85, up), 0.35, 0.5], aR: [lerp(0.6, 2.85, up), 0.35, 0.5], dy: 0.04 * Math.abs(Math.sin(tl * 6)) * up, boca: "aberta", olhos: "F", boch: 0.8, nod: -0.25 * up }); b.olhar = [0, -1.5 * up]; return b; }, { fx: "trofeu" }),
      F(1.2, (k, tl, T) => { const a = 1 - suave(k); const t = e.alvoTrofeu(true); return emPe(T, { ikL: [t.L.x, t.L.y, t.L.z], kL: a, ikR: [t.R.x, t.R.y, t.R.z], kR: a, lean: 0.15 * a, boca: "sorriso", fxk: k }); }, { fx: "trofeuSolta" }),
    ] },
  porquinho: { humores: ["preocupado", "tranquilo", "feliz", "euforico"], ic: "piggy-bank",
    lugar: (e) => e.lugar("mesa", [7.55, 1.22, PI]),
    passos: (e) => [
      // tira uma moeda do bolso
      F(1.3, (k, tl, T) => { const bl = e.bolso("R"); const a = jan(tl, 0, 0.95, 0.3); return emPe(T, { ikR: [bl.x, bl.y, bl.z], kR: a, aR: [0.5, -0.1, 1.3], nod: 0.25, olhar: [0, 1] }); }, { props: { moeda: (k, tl) => tl < 0.55 ? "casa" : "R" } }),
      F(1.9, (k, tl, T) => { const a = jan(tl, 0, 1.9, 0.4); const p = e.alvoPorco(); return emPe(T, { ikR: [p.x, p.y + 0.1, p.z], kR: a, oriR: "baixo", aR: [0.5, -0.1, 1.3], lean: 0.25 * a, nod: 0.35, olhar: [0, 1], boca: "sorriso" }); }, { fx: "porco", props: { moeda: (k, tl) => tl < 0.9 ? "R" : tl < 1.15 ? "cofrinho" : "casa" } }),
      F(1.4, (k, tl, T) => emPe(T, { ...vibra(tl, 1.4) })),
    ] },
  neon: { humores: ["tranquilo", "feliz", "euforico"], ic: "currency-btc",
    lugar: () => [1.55, 6.6, -PI / 2],
    passos: (e) => [
      // celular sai do bolso, ele confere a cotação, olha o neon e guarda de volta
      F(5.6, (k, tl, T) => { const bl = e.bolso("R"); const bolsoK = jan(tl, 0, 0.8, 0.25) + jan(tl, 4.7, 5.6, 0.25); const a = jan(tl, 0.5, 5.0, 0.5); const olhaNeon = jan(tl, 2.6, 4.4, 0.3);
        return emPe(T, { ikR: [bl.x, bl.y, bl.z], kR: bolsoK, aR: [lerp(0, 1.05, a), -0.25, lerp(0.2, 2.0, a)], aL: [0.3 * a, -0.2, 0.9 * a], nod: lerp(0.35, -0.3, olhaNeon) * a, olhar: [0, lerp(1, -1.2, olhaNeon)], boca: olhaNeon > 0.5 ? "sorriso" : "foco", boch: 0.3 }); }, { props: { celular: (k, tl) => tl < 0.45 || tl > 5.2 ? "casa" : "R" } }),
      F(1.4, (k, tl, T) => emPe(T, { ...vibra(tl, 1.4) })),
    ] },
  arcoiris: { humores: ["tranquilo", "feliz", "euforico"], ic: "rainbow",
    lugar: () => [3.2, 0.95, PI],
    passos: () => [
      F(3.2, (k, tl, T) => { const a = jan(tl, 0, 3.2, 0.6); return emPe(T, { aL: [2.2 * a, 0.5, 1.2 * a], aR: [2.2 * a, 0.5, 1.2 * a], nod: -0.4 * a, olhar: [0, -1.4], boca: "sorriso", olhos: "F", boch: 0.6 }); }),
      F(1.8, (k, tl, T) => { const c = Math.abs(Math.sin(tl * 9)); return emPe(T, { aL: [1.2, -0.25 - 0.25 * c, 1.6], aR: [1.2, -0.25 - 0.25 * c, 1.6], boca: "aberta", olhos: "F", boch: 0.7 }); }),
    ] },
  dardos: { humores: ["tranquilo", "feliz", "euforico", "preocupado"], ic: "target",
    lugar: () => [2.45, 5.95, -PI / 2],
    passos: (e) => [F(1.1, (k, tl, T) => { const bl = e.bolso("L"); const a = jan(tl, 0, 0.8, 0.25); return emPe(T, { ikL: [bl.x, bl.y, bl.z], kL: a, aL: [0.55 * suave(fase(tl, 0.5, 1.1)), 0.05, 1.2 * suave(fase(tl, 0.5, 1.1))], olhar: [0, -0.2] }); }, { props: { aljava: (k, tl) => tl < 0.5 ? "casa" : "L" } })]
      .concat([0, 1, 2].map((i) => F(1.7, (k, tl, T) => {
        // a mão direita tira um dardo da esquerda, mira e arremessa
        const pega = jan(tl, 0, 0.42, 0.14); const ml = e.boneco.mL;
        const prep = suave(fase(tl, 0.3, 0.8)), vai = suave(fase(tl, 0.8, 1.02)), volta = suave(fase(tl, 1.2, 1.7));
        const a0 = [0.45, -0.1, 1.3], a1 = [1.75, -0.1, 2.35], a2 = [1.35, -0.1, 0.25];
        const aR = tl < 0.8 ? a0.map((v, j) => lerp(v, a1[j], prep)) : tl < 1.2 ? a1.map((v, j) => lerp(v, a2[j], vai)) : a2.map((v, j) => lerp(v, a0[j], volta));
        return emPe(T, { aR, ikR: [ml.x, ml.y + 0.02, ml.z], kR: pega, aL: [0.55, 0.05, 1.2], twist: -0.15 * prep + 0.25 * vai - 0.1 * volta, lean: 0.06 * vai, boca: "foco", olhar: [0, -0.2], lL: [0.18 * prep, 0.1], fxk: i + (tl >= 0.92 ? 0.5 : 0) });
      }, { fx: "dardo", props: { dardo: (k, tl) => tl < 0.25 || tl >= 0.92 ? "casa" : "R", aljava: "L" } })))
      .concat([F(1.6, (k, tl, T) => emPe(T, { ...vibra(tl, 1.6), aL: [0.55 * (1 - suave(fase(tl, 0, 0.6))), 0.05, 1.2 * (1 - suave(fase(tl, 0, 0.6)))] }), { fx: "dardo", props: { aljava: "casa" } })]) },
  globo: { humores: ["tranquilo", "feliz", "euforico"], ic: "disco-ball",
    lugar: (e) => e.lugares().danca,
    passos: () => [F(6.2, (k, tl, T) => poseFesta(tl % 3.1 + (tl > 3.1 ? 1.05 : 0), T), { fx: "globo" })] },
};
// item novo: surpresa e comemoração antes da animação do item
const NOVIDADE = (ic) => [
  F(2.6, (k, tl, T) => { const a = jan(tl, 0, 2.6, 0.3); return emPe(T, { aL: [1.9 * a, -0.45, 2.3 * a], aR: [1.9 * a, -0.45, 2.3 * a], boca: "o", abre: 0.9, olhos: "A", boch: 0.6, balao: jan(tl, 0.1, 2.5, 0.3), balaoT: ic, dy: 0.05 * Math.sin(PI * fase(tl, 0, 0.4)) }); }, { fx: "novidade" }),
  F(1.7, (k, tl, T) => poseFesta(tl, T)),
];

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
    this.prepararAO();
    this.boneco = new Boneco(d.cor, d.icone, d.boneco, d.acessorio); sc.add(this.boneco.root); sc.add(this.boneco.blob);
    this.cao = new Cao(); sc.add(this.cao.g);
    this.filtro = new Filtro(); this.vida = new Vida();
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

  /* ----- oclusão de ambiente (cantos, encontros e debaixo dos móveis escurecem): só em computador,
     em meia resolução, e desligada sozinha se o aparelho não acompanhar ----- */
  prepararAO() {
    const fraco = (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) || (navigator.hardwareConcurrency || 4) < 4 || window.__ofSemAO;
    if (fraco && !window.__ofComAO) return;
    try {
      const r = this.renderer; const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
      const c = this.composer = new EffectComposer(r, rt);
      c.addPass(new RenderPass(this.scene, this.cam));
      const ao = this.aoPass = new GTAOPass(this.scene, this.cam, 4, 4);
      ao.updateGtaoMaterial({ radius: 0.9, distanceExponent: 1.3, thickness: 2.2, scale: 1.45, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
      // telas, adesivos, vidros, halos e sombras falsas não entram no cálculo (evita manchas pretas)
      ao._overrideVisibility = function () { const cache = this._visibilityCache; this.scene.traverse((o) => { if (!o.visible) return; const mt = o.material; if (o.isPoints || o.isLine || o.isSprite || o.isInstancedMesh || (o.isMesh && mt && (mt.transparent || mt.isMeshBasicMaterial || mt.isShadowMaterial))) { o.visible = false; cache.push(o); } }); };
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      ao.blendIntensity = 1;
      const ss = ao.setSize.bind(ao); ao.setSize = (w, h) => ss(Math.max(2, w * 0.5 | 0), Math.max(2, h * 0.5 | 0));
      c.addPass(ao); c.addPass(new OutputPass());
      this.ao = true;
    } catch (err) { console.warn("Oclusão de ambiente indisponível:", err); this.composer = null; this.ao = false; }
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
    k.castShadow = true; k.shadow.mapSize.set(2048, 2048); k.shadow.bias = -0.0004; k.shadow.normalBias = 0.025; k.shadow.radius = 6; k.shadow.blurSamples = 12;
    Object.assign(k.shadow.camera, { left: -7.5, right: 7.5, top: 7, bottom: -7, near: 2, far: 40 });
    this.fill = new THREE.DirectionalLight("#CFE0FF", 0.35); this.fill.position.set(-4, 6, 8); sc.add(this.fill);
    // contraluz frio: separa o boneco e os móveis do fundo
    this.rim = new THREE.DirectionalLight("#B9CCFF", 0.55); this.rim.position.set(-6, 5, -6); this.rim.target.position.set(4, 0, 4); sc.add(this.rim, this.rim.target);

    // chão e paredes (casa de bonecas)
    const piso = tela(1024, 1024); this.desenharPiso(piso);
    piso.t.wrapS = piso.t.wrapT = THREE.RepeatWrapping; piso.t.repeat.set(W / 4.5, D / 4.5);
    this.chao = mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: piso.t, roughness: 0.42, metalness: 0 }), sc, W / 2, 0, D / 2, { rx: -PI / 2, cast: false });
    bloco(sc, M("#8A5A34", { r: 0.8 }), [-T_PAR, -0.22, -T_PAR], [W + 0.05, -0.001, D + 0.05], 0.02, { cast: false });
    bloco(sc, M("#E6E3DD", { r: 0.9 }), [-T_PAR - 0.06, -0.3, -T_PAR - 0.06], [W + 0.11, -0.2, D + 0.11], 0.04, { cast: false });
    const pFundo = PAR("#EEF1F6"), pEsq = PAR("#E5E9F1"), topo = M("#C9D1DD", { r: 0.9 });
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
    const ripa = MAD("#9A6B43", { r: 0.62, rep: [0.3, 2] }), ripaE = MAD("#6E4A2E", { r: 0.8 });
    bloco(sc, ripaE, [1.6, 0, 0], [4.8, H, 0.025], 0.002, { cast: false });
    for (let x = 1.62; x < 4.78; x += 0.1) bloco(sc, ripa, [x, 0.1, 0.02], [x + 0.06, H - 0.02, 0.05], 0.008, { cast: false });
    const rack = M("#3F3A36", { r: 0.5 }), madeira = MAD("#B07A4C", { r: 0.5 });
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
      const mc = MAD("#C89A6B", { r: 0.45 });
      bloco(g, mc, [2.62, 0.36, 1.45], [3.8, 0.42, 2.0], 0.03);
      bloco(g, M("#E7D6C3"), [2.7, 0.08, 1.52], [3.72, 0.11, 1.93], 0.01);
      for (const x of [2.68, 3.74]) for (const z of [1.5, 1.95]) cil(g, M("#3F3A36"), 0.02, 0.02, 0.36, x, 0.18, z);
      bloco(g, M("#F43F5E"), [2.8, 0.42, 1.6], [3.1, 0.44, 1.82], 0.005, { ry: 0.2 }); bloco(g, M("#38BDF8"), [2.84, 0.44, 1.62], [3.1, 0.455, 1.8], 0.005, { ry: -0.1 });
      bloco(g, M("#F8FAFC", { r: 0.4 }), [3.35, 0.42, 1.62], [3.6, 0.44, 1.8], 0.004, { ry: 0.3 }); }

    // sofá (de frente para a TV)
    { const g = this.movel("sofa", [3.2, 3.05], [box(3.2, 3.05, 1.24, 0.47)], { nome: "Sofá" });
      const sf = TEC("#0F766E"), sf2 = TEC("#14857B"), alm = TEC("#2BB3A3", { rep: [2, 2] });
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
      const pc = TEC("#B45309"), pc2 = TEC("#D97706");
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
      bloco(cf, M("#374151", { r: 0.4, m: 0.5 }), [0.06, 0.0, -0.05], [0.2, 0.012, 0.05], 0.004);   // grade da máquina
      this.vapor = []; for (let i = 0; i < 4; i++) { const v = brilho("#FFFFFF", 0.1, 0.0); v.material.blending = THREE.NormalBlending; v.position.set(0.38, 1.0, 4.9); g.add(v); this.vapor.push(v); }
      for (let i = 0; i < 3; i++) cil(g, M(["#F43F5E", "#FACC15", "#38BDF8"][i]), 0.035, 0.03, 0.08, 0.38, 0.96, 5.2 + i * 0.09); }
    // quadro
    const qd = tela(256, 192); this.desenharQuadro(qd);
    bloco(sc, M("#1F2937", { r: 0.4 }), [0.0, 1.45, 4.45], [0.04, 2.25, 5.4], 0.01);
    mesh(new THREE.PlaneGeometry(0.87, 0.72), new THREE.MeshStandardMaterial({ map: qd.t, roughness: 0.6 }), sc, 0.045, 1.85, 4.925, { ry: PI / 2, cast: false });

    // escrivaninha com PC e cadeira
    { const g = this.movel("mesa", [6.8, 0.6], [box(6.8, 0.42, 1.06, 0.41), box(6.8, 1.22, 0.3, 0.3)], { nome: "Escrivaninha" });
      this.mesaG = g;
      const tampo = MAD("#9C6B45", { r: 0.42, rep: [2, 1] }), metal = M("#1F2937", { r: 0.4, m: 0.6 });
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
      const madE = MAD("#5B3A1E", { r: 0.45 }), feltro = TEC("#15803D", { r: 0.98, rep: [6, 4] });
      bloco(g, madE, [sin.x0 + 0.15, 0.12, sin.z0 + 0.15], [sin.x1 - 0.15, 0.72, sin.z1 - 0.15], 0.04);
      for (const x of [sin.x0 + 0.2, sin.x1 - 0.2]) for (const z of [sin.z0 + 0.2, sin.z1 - 0.2]) bloco(g, madE, [x - 0.07, 0, z - 0.07], [x + 0.07, 0.3, z + 0.07], 0.03);
      bloco(g, feltro, [sin.x0 + 0.08, 0.7, sin.z0 + 0.08], [sin.x1 - 0.08, 0.78, sin.z1 - 0.08], 0.01);
      const borda = MAD("#7C4A21", { r: 0.35, rep: [3, 1] });
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
    // sombras de contato embaixo de cada móvel e cantos escurecidos (dá peso e profundidade)
    for (const id in this.moveis) { const m = this.moveis[id]; if (m.piso) continue; for (const bx of m.caixas) sombraContato(m.inner, bx.c[0], bx.c[1], bx.h[0], bx.h[1], bx.r || 0, id.startsWith("planta") ? 0.3 : 0.42); }
    sombraContato(sc, 3.2, 0.27, 1.25, 0.24, 0, 0.35);
    faixaAO(sc, W, 0.55, V(W / 2, 0.004, 0.27), new THREE.Euler(-PI / 2, 0, 0), 0.2); faixaAO(sc, D, 0.55, V(0.27, 0.004, D / 2), new THREE.Euler(-PI / 2, 0, PI / 2), 0.2);
    faixaAO(sc, W, 0.5, V(W / 2, 0.25, 0.003), new THREE.Euler(0, 0, PI), 0.16); faixaAO(sc, D, 0.5, V(0.003, 0.25, D / 2), new THREE.Euler(0, PI / 2, PI), 0.16);
    faixaAO(sc, 0.45, H, V(0.22, H / 2, 0.003), new THREE.Euler(0, 0, -PI / 2), 0.18); faixaAO(sc, 0.45, H, V(0.003, H / 2, 0.22), new THREE.Euler(0, PI / 2, PI / 2), 0.18);
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
    const T = this.tacoPontas(p); const taco = this.itens.taco; taco.visible = true;
    const dir = T.tip.clone().sub(T.butt); const L = dir.length() || 1; dir.divideScalar(L);
    taco.position.copy(T.butt); taco.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
    const t = p.taco; const k = cl(t + 1);
    // mão direita no cabo: em pé segura alto, na tacada segura atrás
    const g = lerp(0.98, 0.5, cl(t)); const pg = T.butt.clone().addScaledVector(dir, g);
    p.ikR = [pg.x, pg.y, pg.z]; p.kR = Math.max(p.kR || 0, k);
    if (t > 0.02) { const br = T.apoioBridge; p.ikL = [br.x, br.y, br.z]; p.kL = Math.max(p.kL || 0, cl(t)); p.oriL = [T.dedos.x, T.dedos.y, T.dedos.z]; }
    p.item = t > 0.5 ? "tacoShot" : t > -0.5 ? "tacoV" : p.item;
  }
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
    if (d.layout !== undefined && !this.salvando && !this.arrasto) { const n = (L) => JSON.stringify({ m: (L && L.m) || {}, off: [...((L && L.off) || [])].sort() }); if (n(d.layout) !== n(this.layoutAtual())) { this.aplicarLayout(d.layout, true); this.navOk = false; } }
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
  restaurar() { const off = [...this.off]; this.aplicarLayout({ off }); this.avisarLayout(); this.log("restaurou os móveis"); }
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
    b.aplicar(p, T, dt); b.desenharRosto(this.vida.rosto(p, { T, dt, humor: this.h, facePropria: !!r.pose._fp }), T);
    b.blob.position.set(pf.x, 0.004, pf.z); b.blob.material.opacity = cl(1 - (p.dy || 0) * 2, 0.3, 1);
    this.moverProps(p, tl, fxk, dt);
    if (this.itens.celular.visible) this.desenharCel(T);
    // bolas da sinuca (coordenadas da própria mesa)
    const B = this.bolas, yb = 0.81;
    const est = this.h === "feliz" ? p.bolas || "ini" : "ini";
    if (est === "ini") { this.bB.position.set(B.R[0], yb, B.R[1]); this.bA.position.set(B.Y[0], yb, B.Y[1]); this.bA.visible = true; this.bA.scale.setScalar(1); }
    else if (est === "jogo") {
      const k1 = fase(tl, TACADA, TACADA + 0.28), k2 = fase(tl, TACADA + 0.28, TACADA + 1.0), k3 = fase(tl, TACADA + 1.0, TACADA + 1.15);
      const cb = k2 > 0 ? [lerp(B.C[0], B.fimB[0], sai(k2)), lerp(B.C[1], B.fimB[1], sai(k2))] : [lerp(B.R[0], B.C[0], k1), lerp(B.R[1], B.C[1], k1)];
      this.bB.position.set(cb[0], yb, cb[1]);
      this.bA.position.set(lerp(B.Y[0], B.pk[0], sai(k2)), yb - 0.06 * k3, lerp(B.Y[1], B.pk[1], sai(k2))); this.bA.scale.setScalar(1 - 0.6 * k3); this.bA.visible = k3 < 1;
      this.bA.rotation.x += dt * 20 * (k2 > 0 && k2 < 1 ? 1 : 0);
    } else if (est === "volta") {   // a bola sai da caçapa e as duas rolam de volta para o lugar
      const k = fase(tl, 0.3, 1.9), sobe = fase(k, 0, 0.18), rola = suave(fase(k, 0.15, 1));
      this.bB.position.set(lerp(B.fimB[0], B.R[0], suave(fase(tl, 0.2, 1.5))), yb, lerp(B.fimB[1], B.R[1], suave(fase(tl, 0.2, 1.5))));
      this.bA.visible = k > 0; this.bA.scale.setScalar(lerp(0.4, 1, sobe)); this.bA.position.set(lerp(B.pk[0], B.Y[0], rola), yb - 0.06 * (1 - sobe), lerp(B.pk[1], B.Y[1], rola)); this.bA.rotation.x -= dt * 12 * (rola > 0 && rola < 1 ? 1 : 0);
    } else { this.bB.position.set(B.fimB[0], yb, B.fimB[1]); this.bA.visible = false; }
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
    if (this.dec.fliperama.outer.visible) { this.joy.rotation.set(jogando ? Math.sin(T * 9) * 0.35 : 0, 0, jogando ? Math.sin(T * 7.3) * 0.35 : 0); this.botoesArc.forEach((bt, i) => { bt.position.y = 1.07 - (jogando && Math.sin(T * 13 + i * 2) > 0.6 ? 0.008 : 0); }); }
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
      if (fx === "dardo" && fxk % 1 > 0.4) { const i = Math.floor(fxk); const key = st.t0 + ":" + i; if (this.dardoKey !== key && i < 3) { this.dardoKey = key; (this.voos ||= []).push({ i, de: b.mR.clone(), t: 0 }); } }
      for (const v of this.voos || []) {
        v.t += dt; const k = cl(v.t / 0.32); const a = V(...this.dardosAlvo[v.i]); const pos = v.de.clone().lerp(a, k); pos.y += Math.sin(PI * k) * 0.18;
        const dd = this.dardos[v.i]; dd.visible = true; dd.position.copy(pos); dd.rotation.set(0, 0, -PI / 2 + (1 - k) * 0.4);
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
    this.vapor.forEach((v, i) => { const k = (T * 0.35 + i / 4) % 1; v.position.set(0.38 + Math.sin(T * 2 + i) * 0.02, 1.0 + k * 0.4, 4.9); v.material.opacity = 0.35 * Math.sin(PI * k); v.scale.setScalar(0.06 + k * 0.12); });
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
    if (this.reduz || T - (this.tTv || -9) > 1 / 15) { this.tTv = T; this.desenharTV(T, this.h === "tranquilo" ? "jogo" : "news"); }
    if (this.reduz || T - (this.tCeu || -9) > 1 / 8) { this.tCeu = T; this.desenharCeu(T); }
    if (this.dec.fliperama.outer.visible && (this.reduz || T - (this.tArc || -9) > (jogando ? 1 / 20 : 1 / 6))) { this.tArc = T; this.desenharArcade(T * (jogando ? 2 : 1)); }
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
  botaoCafe() { return this.pto("cafe", 0.36, 1.3, 4.97); }
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
  // valores do gráfico neste instante (no meio da transição entre a forma antiga e a nova)
  serieAgora() {
    const sa = this.serieAlvo; if (!sa) return [];
    const k = suave((performance.now() - (this.serieT0 || 0)) / 1100); if (k < 1) this.sujo = true;
    const de = this.serieDe && this.serieDe.length === sa.v.length ? this.serieDe : sa.v;
    return sa.v.map((v, i) => lerp(de[i], v, k));
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
    // gráfico do dia: os pontos reais do pregão (cotações a cada 2 minutos); sem eles, o que mudou nesta sessão
    const gx = px + 16, gy = py + 150, gw = 298, gh = 150;
    g.strokeStyle = "rgba(148,163,184,.15)"; g.lineWidth = 1; for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(gx, gy + i * gh / 4); g.lineTo(gx + gw, gy + i * gh / 4); g.stroke(); }
    const sa = this.serieAlvo;
    const hs = sa ? this.serieAgora() : (this.hist.length ? this.hist : [{ v: pct || 0 }]).map((x) => x.v);
    const vals = hs.concat([0]); let mn = Math.min(...vals), mx = Math.max(...vals); if (mx - mn < 0.4) { const c = (mx + mn) / 2; mn = c - 0.2; mx = c + 0.2; }
    const folga = (mx - mn) * 0.08; mn -= folga; mx += folga;
    const yv = (v) => gy + gh - ((v - mn) / (mx - mn)) * gh;
    g.setLineDash([4, 4]); g.strokeStyle = "rgba(148,163,184,.4)"; g.beginPath(); g.moveTo(gx, yv(0)); g.lineTo(gx + gw, yv(0)); g.stroke(); g.setLineDash([]);
    const n = hs.length; const pts = hs.map((v, i) => [gx + (n === 1 ? gw : (i / (n - 1)) * gw), yv(v)]);
    if (n === 1) pts.unshift([gx, pts[0][1]]);
    if (sa) {
      const hora = (ts) => new Date(ts * 1000).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
      g.fillStyle = "#64748B"; g.font = "13px system-ui"; g.fillText(hora(sa.ts[0]), gx, gy + gh + 18); g.textAlign = "right"; g.fillText(sa.hoje ? hora(sa.ts[sa.ts.length - 1]) : "último pregão", gx + gw, gy + gh + 18); g.textAlign = "left";
      const fv = (v) => (v > 0 ? "+" : "") + v.toFixed(2).replace(".", ",") + "%";
      g.font = "12px system-ui"; g.fillStyle = "#94A3B8"; g.fillText(fv(Math.max(...hs)), gx + gw - 60, gy - 6);
    }
    const ultV = hs[hs.length - 1];
    const cor = (sa ? ultV : pct || 0) >= 0 ? "#22C55E" : "#EF4444";
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

  log(txt) {
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const u = this.feed[this.feed.length - 1]; if (u && u.txt === txt && performance.now() - u.ms < 1500) return;
    this.feed.push({ txt: txt.length > 26 ? txt.slice(0, 25) + "…" : txt, hora, ms: performance.now() }); if (this.feed.length > 30) this.feed.shift();
    this.ultimaAcao = performance.now(); this.sujo = true;
  }
  redimensionar() {
    const w = this.el.clientWidth || 600; const h = Math.round(cl(w < 640 ? w * 0.82 : w * 0.6, 300, 660));
    this.renderer.setSize(w, h, false); this.renderer.domElement.style.width = "100%"; this.renderer.domElement.style.height = h + "px";
    if (this.composer) { this.composer.setPixelRatio(this.renderer.getPixelRatio()); this.composer.setSize(w, h); }
    this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); this.sujo = true;
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

}

/* ---------- diretor: monta a fila de passos (rotina do humor, visitas às recompensas, transições) ---------- */
class Diretor {
  constructor(e) { this.e = e; this.t = 0; this.fila = []; this.ant = null; this.entrar = true; this.ciclo = 0; this.novos = []; this.rodada = 0; this.itemAtual = ""; }
  humor(h) { this.h = h; this.entrar = true; }
  replanejar() { this.entrar = true; }
  // item recém-liberado: ele larga o que está fazendo e vai ver
  novidade(id) { if (ITEM_ANIM[id] && !this.novos.includes(id)) { this.novos.push(id); if (!this.e.reduz) this.entrar = true; } }
  rotina() { return (ROTEIROS[this.h] || ROTEIROS.tranquilo)(this.L, this.e, this.ciclo); }
  // transforma passos em uma fila com tempos e caminhos calculados
  compilar(passos, de, t0, extra = {}) {
    const nav = this.e.nav; let pos = de.slice(); let t = t0; const out = [];
    for (const p of passos) {
      if (p.tipo === "andar") {
        const pts = [[pos[0], pos[1]]];
        for (const d of p.destinos) pts.push(...nav.caminho(pts[pts.length - 1], d));
        const segs = []; let dist = 0;
        for (let i = 1; i < pts.length; i++) { const L = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (L > 1e-3) { segs.push({ a: pts[i - 1], b: pts[i], d0: dist, L, yaw: yawPara(pts[i - 1], pts[i]) }); dist += L; } }
        if (!segs.length || dist < 0.06) continue;
        // vira no lugar antes de sair andando, se precisar
        const dy = difAng(pos[2], segs[0].yaw);
        if (Math.abs(dy) > 0.7) { const dur = 0.25 + Math.abs(dy) / 3.2; const ate = [pos[0], pos[1], pos[2] + dy]; out.push({ tipo: "acao", dur, pose: (k, tl, T) => emPe(T, { nod: 0.05 }), t0: t, de: pos.slice(), ate, item: p.item, taco: p.taco, bolas: p.bolas, ...extra }); t += dur; pos = ate; }
        const dur = dist / p.vel; const fim = pts[pts.length - 1];
        out.push({ ...p, ...extra, t0: t, dur, segs, dist, de: pos.slice() }); pos = [fim[0], fim[1], pos[2] + difAng(pos[2], segs[segs.length - 1].yaw)]; t += dur;
      } else { const ate = p.ate ? p.ate.slice() : pos.slice(); if (ate.length < 3) ate[2] = pos[2]; ate[2] = pos[2] + difAng(pos[2], ate[2]); out.push({ ...p, ...extra, t0: t, de: pos.slice(), ate }); pos = ate; t += p.dur; }
    }
    return { out, pos, t };
  }
  fimFila() { const u = this.fila[this.fila.length - 1]; return u ? { t: u.t0 + u.dur, pos: u.tipo === "andar" ? (() => { const s = u.segs[u.segs.length - 1]; return [s.b[0], s.b[1], u.de[2] + difAng(u.de[2], s.yaw)]; })() : u.ate } : null; }
  disponiveis() {
    const e = this.e; const out = [];
    for (const id in ITEM_ANIM) { const o = e.dec[id]; const vis = o && (o.outer ? o.outer.visible : o.visible); if (vis && ITEM_ANIM[id].humores.includes(this.h)) out.push(id); }
    return out;
  }
  // passos de uma visita a um item (o boneco já está de pé)
  visita(id, novo, rt) {
    const e = this.e, ia = ITEM_ANIM[id]; const lug = ia.lugar(e); const q = e.nav.perto(lug[0], lug[1]); const alvo = [q[0], q[1], lug[2]];
    const passos = [A(1.15, [alvo]), F(0.5, (k, tl, T) => emPe(T), { ate: alvo })];
    if (novo) passos.push(...NOVIDADE(ia.ic + ":f"));
    passos.push(...ia.passos(e));
    passos.push(A(1.15, [rt.aprox]));
    if (rt.sentado || rt.entrada.length) passos.push(...rt.entrada);
    else passos.push(F(0.5, (k, tl, T) => emPe(T), { ate: rt.inicio }));
    return passos;
  }
  proximoNovo() {
    while (this.novos.length) { const n = this.novos.shift(); const o = this.e.dec[n]; if (ITEM_ANIM[n] && o && (o.outer ? o.outer.visible : o.visible)) return n; }
    return null;
  }
  // um bloco: entrada (do jeito que está até a rotina), visita a um item ou um ciclo da rotina
  encher() {
    const e = this.e;
    if (this.entrar) {
      this.entrar = false; this.L = e.lugares();
      const rt = this.rotina(); this.padrao = rt.padrao;
      const pos = e.posF ? [e.posF.x, e.posF.z, e.posF.y] : rt.inicio.slice();
      const snap = this.ultimaPose ? { ...this.ultimaPose } : null;
      const novo = this.proximoNovo();
      const snapPose = snap || emPe(0);
      this.fila = []; this.ant = null;
      const sentado = snap && snap.sent > 0.4;
      const mesmoLugar = Math.hypot(pos[0] - rt.inicio[0], pos[1] - rt.inicio[1]) < 0.08;
      if (!novo && (!snap || (sentado && mesmoLugar && rt.sentado))) { this.ciclo = 0; this.aprox = rt.aprox; this.anexar(this.compilar(rt.passos, rt.inicio, this.t)); return; }
      const passos = [];
      if (sentado) { const ond = this.aprox || pos; passos.push(F(1.2, (k, tl, T) => { const r = mistura(snapPose, emPe(T), suave(k)); r.lean += 0.4 * Math.sin(PI * k); return r; }, { ate: e.nav.perto(ond[0], ond[1]).concat([pos[2]]) })); }
      else passos.push(F(0.35, (k, tl, T) => mistura(snapPose, emPe(T), suave(k))));
      e.guardarProps();
      if (novo) { passos.push(...this.visita(novo, true, rt)); this.itemNovo = novo; }
      else {
        passos.push(A(1.15, [rt.aprox]));
        if (rt.entrada.length) passos.push(...rt.entrada);
        else passos.push(F(0.5, (k, tl, T) => emPe(T), { ate: rt.inicio }));
      }
      this.aprox = rt.aprox;
      this.anexar(this.compilar(passos, pos, this.t, novo ? { item_: novo } : {}));
      return;
    }
    const f = this.fimFila(); const de = f ? f.pos : this.rotina().inicio; const t0 = f ? f.t : this.t;
    const rt = this.rotina(); this.aprox = rt.aprox; this.padrao = rt.padrao;
    const disp = this.disponiveis();
    let id = this.proximoNovo(), novo = !!id;
    if (!id && this.ciclo > 0 && disp.length && !this.e.reduz && this.ultimoBloco !== "item") { id = disp[this.rodada % disp.length]; this.rodada++; }
    if (id) {
      const passos = [];
      passos.push(...rt.saida);
      passos.push(...this.visita(id, novo, rt));
      this.anexar(this.compilar(passos, de, t0, { item_: id }));
      this.ultimoBloco = "item";
      return;
    }
    this.ultimoBloco = "rotina";
    this.anexar(this.compilar(rt.passos, rt.inicio, t0));
    this.ciclo++;
  }
  anexar(c) { this.fila.push(...c.out); }
  avaliarPasso(s, tl, T) {
    let pose, pos;
    if (s.tipo === "andar") {
      const d = cl(tl / s.dur) * s.dist;
      let i = s.segs.length - 1; for (let j = 0; j < s.segs.length; j++) if (d <= s.segs[j].d0 + s.segs[j].L) { i = j; break; }
      const sg = s.segs[i], k = cl((d - sg.d0) / sg.L);
      let yaw = sg.yaw;
      const nx = s.segs[i + 1], antes = s.segs[i - 1];
      if (nx && sg.L * (1 - k) < 0.35) yaw = angLerp(sg.yaw, nx.yaw, 0.5 * (1 - sg.L * (1 - k) / 0.35));
      if (antes && sg.L * k < 0.35) yaw = angLerp(antes.yaw, sg.yaw, 0.5 + 0.5 * (sg.L * k / 0.35));
      pos = [lerp(sg.a[0], sg.b[0], k), lerp(sg.a[1], sg.b[1], k), s.de[2] + difAng(s.de[2], yaw)];
      pose = andar(d, s.estilo, T, this.e.boneco.esc);
      if (s.pensativo) { pose.aR = [1.25, -0.25, 2.25]; pose.aL = [0.6, -0.35, 1.5]; pose.nod += 0.18; pose.boca = "foco"; pose.sob = "tenso"; }
      if (s.item === "xicara") pose.aR = [0.6, -0.25, 1.75];
      if (s.taco != null) pose.taco = s.taco;
      pose.item = s.item || ""; if (s.bolas) pose.bolas = s.bolas;
    } else {
      const k = cl(tl / s.dur); const w = suave(k);
      pos = [lerp(s.de[0], s.ate[0], w), lerp(s.de[1], s.ate[1], w), lerp(s.de[2], s.ate[2], w)];
      pose = s.pose(k, tl, T);
      if (s.item && !pose.item) pose.item = s.item;
      if (s.bolas && !pose.bolas) pose.bolas = s.bolas;
      if (s.taco != null && pose.taco === POSE0.taco) pose.taco = s.taco;
    }
    pose._fp = ["aberta", "o", "sorriso", "triste"].includes(pose.boca) || pose.olhos === "F" || pose.olhos === "Z" || pose.sob === "triste";   // a cena pediu uma expressão
    const rt = this.padrao || {}; for (const k in rt) if (!(k in pose) || pose[k] === POSE0[k]) pose[k] = rt[k];
    return { pose, pos };
  }
  // T: tempo forçado (depuração) ou null; dt: passo do relógio
  passo(Tforcado, dt) {
    const e = this.e;
    if (Tforcado != null) { if (this.tForcado == null) { this.tForcado = 0; } this.t = Tforcado; }
    else this.t += e.reduz ? 0 : dt;
    if (this.entrar) this.encher();
    let guarda = 0;
    while ((!this.fila.length || this.fimFila().t < this.t + 2) && guarda++ < 40) this.encher();
    // passos que terminaram: aplica o estado final dos objetos (mesmo se o quadro pulou o passo inteiro)
    while (this.fila.length > 1 && this.t >= this.fila[0].t0 + this.fila[0].dur) { this.ant = this.fila.shift(); e.decidirProps(this.ant, 1, this.ant.dur); }
    const s = this.fila[0]; if (!s) return { pose: emPe(this.t), pos: [4.5, 3.5, 0], s: null, tl: 0 };
    const T = this.t; const tl = Math.min(T - s.t0, s.dur);
    const r = this.avaliarPasso(s, tl, T);
    const B = 0.45;
    if (this.ant && tl < B) {
      const a = this.avaliarPasso(this.ant, this.ant.dur, T); const w = suave(tl / B);
      r.pose = mistura(a.pose, r.pose, w);
      r.pos = [lerp(a.pos[0], r.pos[0], w), lerp(a.pos[1], r.pos[1], w), a.pos[2] + difAng(a.pos[2], r.pos[2]) * w];
    }
    this.itemAtual = s.item_ || "";
    this.ultimaPose = r.pose; r.s = s; r.tl = tl; r.k = s.dur ? cl(tl / s.dur) : 1;
    return r;
  }
}

/* ---------- vitrine: prévia do boneco no perfil ---------- */
export function vitrine(el, d) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
  el.innerHTML = ""; el.appendChild(r.domElement);
  const sc = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.38;
  sc.add(new THREE.HemisphereLight("#FFFFFF", "#C9B79C", 1.0));
  const sol = new THREE.DirectionalLight("#FFF1DE", 2.0); sol.position.set(1.6, 3.2, 2.4); sol.castShadow = true; sol.shadow.mapSize.set(1024, 1024);
  Object.assign(sol.shadow.camera, { left: -1, right: 1, top: 2.2, bottom: -0.2, near: 0.5, far: 8 }); sc.add(sol);
  const rec = new THREE.DirectionalLight("#C7D7FF", 0.7); rec.position.set(-2, 1.5, -1.5); sc.add(rec);
  const chao = new THREE.Mesh(new THREE.CircleGeometry(0.75, 48), new THREE.ShadowMaterial({ opacity: 0.22 })); chao.rotation.x = -PI / 2; chao.receiveShadow = true; sc.add(chao);
  const b = new Boneco(d.cor, d.icone, d.boneco, d.acessorio); sc.add(b.root); b.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const cam = new THREE.PerspectiveCamera(24, 3 / 4, 0.1, 20);
  const filtro = new Filtro(), vida = new Vida();
  let yaw = -0.35, arrastando = false, x0 = 0, ultimoToque = 0, raf = 0, morto = false;
  const t0 = performance.now(); let tAnt = t0;
  const tam = () => { const w = el.clientWidth || 200, h = el.clientHeight || 260; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  tam(); const ro = new ResizeObserver(tam); ro.observe(el);
  const cv = r.domElement; cv.style.touchAction = "pan-y";
  cv.addEventListener("pointerdown", (e) => { arrastando = true; x0 = e.clientX; try { cv.setPointerCapture(e.pointerId); } catch (_) { /* ok */ } ultimoToque = performance.now(); });
  cv.addEventListener("pointermove", (e) => { if (!arrastando) return; yaw += (e.clientX - x0) * 0.012; x0 = e.clientX; ultimoToque = performance.now(); });
  cv.addEventListener("pointerup", () => { arrastando = false; });
  cv.addEventListener("pointercancel", () => { arrastando = false; });
  function quadro() {
    raf = 0; if (morto) return;
    if (!el.isConnected) { destruir(); return; }
    const agora = performance.now(), T = window.__ofVitT != null ? window.__ofVitT : (agora - t0) / 1000, dt = Math.min(0.05, (agora - tAnt) / 1000); tAnt = agora;
    if (!arrastando && agora - ultimoToque > 2500) yaw += dt * 0.35;
    // ciclo: parado, acena, joinha, sorri
    const c = T % 12; let p;
    if (c < 3.5) p = emPe(T, { olhar: [Math.sin(T * 0.7) * 0.6, 0] });
    else if (c < 6) { const w = jan(c, 3.5, 6, 0.4); p = emPe(T, { aR: [lerp(0, 2.6, w), lerp(0.12, 0.5, w), lerp(0.2, 0.9 + 0.35 * Math.sin(T * 9), w)], boca: w > 0.5 ? "sorriso" : "leve", olhos: w > 0.5 ? "F" : "A", boch: 0.4 * w, nod: -0.05 * w, roll: 0.06 * w }); }
    else if (c < 8.5) { const w = jan(c, 6, 8.5, 0.4); p = emPe(T, { aL: [lerp(0, 1.2, w), lerp(0.12, -0.2, w), lerp(0.2, 1.4, w)], mL: w, boca: "sorriso", boch: 0.3, turn: 0.12 * w, nod: -0.04 * w }); }
    else p = emPe(T, { boca: "sorriso", olhos: "A", boch: 0.25, turn: 0.15 * Math.sin(T * 1.2) });
    b.root.rotation.y = yaw;
    const cab = b.head.getWorldPosition(new THREE.Vector3());
    p = vida.passo(p, { T, dt, humor: "feliz", cabeca: cab, yawCorpo: yaw, alvos: [{ nome: "camera", pos: cam.position.clone(), peso: 2 }, { nome: "lado", pos: V(Math.sin(yaw + 1) * 3, 1.4, Math.cos(yaw + 1) * 3), peso: 1 }], legsLivres: true, nariz: cab.clone().add(V(Math.sin(yaw) * 0.15, -0.02, Math.cos(yaw) * 0.15)) });
    p = filtro.passo(p, dt);
    b.aplicar(p, T, dt); b.desenharRosto(vida.rosto(p, { T, dt, humor: "feliz", facePropria: c >= 3.5 && c < 6 }), T);
    const e = b.esc; const vc = window.__ofVitCam; if (vc) { cam.position.set(0, vc[0], vc[1]); cam.lookAt(0, vc[2], 0); } else { cam.position.set(0, 1.0 * e, 4.2 * (0.6 + 0.4 * e)); cam.lookAt(0, 0.9 * e, 0); }
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
    atualizar(n) { b.setAparencia(n.boneco, n.acessorio); b.setCor(n.cor); if (n.icone !== d.icone) b.setIcone(n.icone); d = n; },
    destruir,
  };
}
