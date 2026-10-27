
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
// caminhada: o passo acompanha a distância percorrida (sem pé deslizando)
function andar(dist, est, T, esc = 1) {
  const corre = est === "corre", tri = est === "triste";
  const passo = corre ? 2.1 : tri ? 0.95 : 1.32;
  const perna = 0.88 * esc;
  const amp = Math.asin(cl(passo / (4 * perna), 0, 0.85)) * (corre ? 1.05 : 1);
  const ph = (dist / passo) * TAU, s = Math.sin(ph), c = Math.cos(ph);
  const kb = corre ? 1.3 : tri ? 0.6 : 0.85;
  const r = P({
    lL: [amp * s, 0.1 + kb * Math.max(0, c) * Math.max(0, c + 0.2)], lR: [-amp * s, 0.1 + kb * Math.max(0, -c) * Math.max(0, -c + 0.2)],
    aL: [-amp * 0.9 * s, 0.1, (corre ? 1.35 : 0.32) + 0.18 * Math.max(0, -s)], aR: [amp * 0.9 * s, 0.1, (corre ? 1.35 : 0.32) + 0.18 * Math.max(0, s)],
    lean: corre ? 0.2 : tri ? 0.16 : 0.06, twist: 0.09 * s, turn: -0.1 * s, side: 0.025 * c, roll: -0.02 * c, nod: tri ? 0.45 : 0.03 * Math.abs(c), boca: tri ? "triste" : corre ? "aberta" : "leve",
  });
  r.alt = 0.07 + 0.82 * Math.cos(amp * Math.abs(s)) + (corre ? 0.05 * Math.abs(c) : 0.012 * Math.abs(c));
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
    for (const k of NUM) r[k] = this.mola(k, p[k] ?? POSE0[k], dt, k === "yawAdd" ? 30 : w);
    for (const k of ARR) r[k] = (p[k] || POSE0[k]).map((v, i) => this.mola(k + i, v, dt, w * 1.1));
    for (const k of ["ikL", "ikR"]) {
      if (!p[k]) { if (this.x[k + "0"] != null) r[k] = [0, 1, 2].map((i) => this.x[k + i]); continue; }
      if (this.x[k + "0"] == null) { p[k].forEach((v, i) => { this.x[k + i] = v; this.v[k + i] = 0; }); r[k] = p[k]; continue; }
      r[k] = p[k].map((v, i) => this.mola(k + i, v, dt, w * 1.3));
    }
    return r;
  }
}
