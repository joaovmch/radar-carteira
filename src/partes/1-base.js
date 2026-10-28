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
