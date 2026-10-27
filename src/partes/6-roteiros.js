
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
const vibra = (tl, dur, o = {}) => { const up = jan(tl, 0, dur, 0.3), pump = Math.abs(Math.sin(tl * PI / 0.42)) * up; return { aR: [lerp(0, 2.55 + 0.3 * pump, up), 0.25, lerp(0.2, 0.9 - 0.5 * pump, up)], dy: 0.03 * pump, olhos: up > 0.5 ? "F" : "A", boca: up > 0.3 ? "aberta" : "sorriso", boch: 0.7, ...o }; };

// L: lugares no mundo (dependem de onde estão os móveis); e: a cena (para alvos ao vivo)
const ROTEIROS = {
  tranquilo: (L) => ({ inicio: L.sofaS, aprox: L.sofaP, sentado: true, sentPose: (T) => sentado(T, 0.62, { lean: -0.1 }), padrao: { boca: "leve", boch: 0.15 }, passos: [
    F(16, (k, tl, T) => {
      const curva = Math.sin(tl * 0.9) * 0.08 + Math.sin(tl * 2.3) * 0.03;
      const yes = jan(tl, 6.2, 7.5) + jan(tl, 12.6, 13.6);
      const tap = (x) => Math.max(0, Math.sin(T * 10 + x)) * 0.12;
      const base = [0.85, -0.22, 1.25];
      return sentado(T, 0.62, { lean: -0.1 + curva * 0.3 - 0.08 * yes, side: curva, nod: 0.15 - 0.25 * yes, turn: curva * 0.6,
        aL: [lerp(base[0] + tap(0), 2.7, yes), lerp(base[1], 0.5, yes), lerp(base[2], 0.4, yes)], aR: [lerp(base[0] + tap(2), 2.7, yes), lerp(base[1], 0.5, yes), lerp(base[2], 0.4, yes)],
        item: "controle", boca: yes > 0.4 ? "aberta" : "foco", olhos: yes > 0.5 ? "F" : "A", boch: 0.15 + 0.5 * yes, dy: 0.04 * yes * Math.abs(Math.sin(tl * 9)) });
    }, { tv: "jogo" }),
    F(1.3, levantarDe((T) => emPe(T), (T) => sentado(T, 0.62, { lean: -0.1 })), { ate: L.sofaP }),
    F(3.0, (k, tl, T) => { const w = jan(tl, 0.1, 2.8, 0.6); return emPe(T, { aL: [2.95 * w, 0.25, 0.3], aR: [2.95 * w, 0.25, 0.3], lean: -0.12 * w, side: Math.sin(tl * 2.2) * 0.12 * w, nod: -0.2 * w, olhos: w > 0.5 ? "Z" : "A", boca: w > 0.5 ? "o" : "leve", dy: 0.03 * w }); }),
    A(1.15, [L.cafeP]),
    F(5.0, (k, tl, T) => { const w = jan(tl, 0.3, 4.6, 0.5); const m = Math.sin(tl * 3) * 0.1 * fase(tl, 1, 3);
      return emPe(T, { aL: [1.0 * w, -0.1, 1.0 * w], aR: [(1.05 + m) * w, -0.12, 0.9 * w], lean: 0.08 * w, nod: 0.25 * w, olhar: [0, 1] }); }, { ate: L.cafeP }),
    F(4.6, (k, tl, T) => { const g = jan(tl, 0.8, 2.0, 0.35) + jan(tl, 2.9, 3.9, 0.35);
      return emPe(T, { aR: [0.6 + 0.7 * g, -0.25, 1.75 + 0.35 * g], nod: -0.3 * g, olhos: g > 0.5 ? "Z" : "A", boca: g > 0.5 ? "reta" : "sorriso", boch: 0.35, item: "xicara" }); }, { ate: [L.cafeP[0], L.cafeP[1], L.cafeP[2] + PI * 0.8] }),
    A(1.1, [L.sofaP], { item: "xicara" }),
    F(1.3, sentarDe((T) => emPe(T, { aR: [0.6, -0.25, 1.75] }), (T) => sentado(T, 0.62, { lean: -0.1, aR: [0.6, -0.25, 1.75] })), { ate: L.sofaS, item: "xicara" }),
    F(2.2, (k, tl, T) => { const w = jan(tl, 0.1, 2.1, 0.5); return sentado(T, 0.62, { lean: -0.1 + 0.35 * w, aR: [lerp(0.6, 0.95, w), -0.2, lerp(1.75, 0.9, w)], aL: [0.4 * w, 0.0, 0.8 * w], item: tl < 1.1 ? "xicara" : "controle" }); }),
  ] }),
  feliz: (L, e) => ({ inicio: L.sinP, aprox: L.sinP, sentado: false, padrao: { boca: "sorriso", boch: 0.35 }, passos: [
    F(1.4, (k, tl, T) => emPe(T, { taco: lerp(-1, 0, suave(fase(tl, 0.2, 1.1))), lean: 0.12 * jan(tl, 0, 1.4, 0.4), boca: "leve" }), { bolas: "ini" }),
    F(2.6, (k, tl, T) => { const r = Math.sin(tl * 9) * 0.12 * jan(tl, 0.4, 2.2); return emPe(T, { taco: 0, aL: [1.4 + r, 0.1, 1.9], nod: -0.25, olhar: [0, -1.5], boca: "leve" }); }, { bolas: "ini" }),
    F(5.6, (k, tl, T) => poseTacada(tl, T)),
    F(3.0, (k, tl, T) => { const v = vibra(tl, 3.0); return emPe(T, { ...v, taco: 0, aL: v.aR, aR: undefined, bolas: "fim" }); }),
    A(1.25, [L.monP], { taco: 0, bolas: "fim" }),
    F(4.6, (k, tl, T) => { const up = jan(tl, 1.4, 3.6, 0.4); const nod = Math.sin(tl * 6) * 0.1 * jan(tl, 0.3, 1.3);
      return emPe(T, { taco: 0, aL: [lerp(0, 1.3, up), -0.15, lerp(0.2, 1.7, up)], lean: 0.1, nod: 0.05 + nod, boca: up > 0.5 ? "aberta" : "sorriso", olhos: up > 0.5 ? "F" : "A" }); }, { bolas: "fim", ate: L.monP }),
    A(1.25, [L.sinP], { taco: 0, bolas: "fim" }),
    F(1.6, (k, tl, T) => emPe(T, { taco: lerp(0, -1, suave(fase(tl, 0.3, 1.2))), lean: 0.15 * jan(tl, 0, 1.6, 0.4), bolas: tl < 1.1 ? "fim" : "ini" })),
  ] }),
  euforico: (L) => ({ inicio: L.danca, aprox: L.danca, sentado: false, padrao: { olhos: "F", boch: 0.8 }, passos: [
    F(3.6, (k, tl, T) => poseFesta(tl, T), { fx: "globo" }),
    F(3.4, (k, tl, T) => poseFesta(tl, T), { fx: "globo" }),
    F(2.2, (k, tl, T) => { const s = io(k); const r = emPe(T, { aL: [1.5, 1.2, 0.2], aR: [1.5, 1.2, 0.2], boca: "aberta", olhos: "F", boch: 0.8 }); r.yawAdd = s * TAU; r.dy = 0.12 * Math.sin(PI * k); return r; }),
    F(4.4, (k, tl, T) => { const c = (tl % 1.1) / 1.1; const joga = c < 0.55 ? io(c / 0.55) : 1 - sai((c - 0.55) / 0.45);
      const r = emPe(T, { aL: [0.5, 0.2, 1.3], aR: [lerp(0.3, 2.8, joga), 0.15, lerp(1.4, 0.2, joga)], lean: -0.08 * joga, nod: -0.15 * joga, dy: 0.05 * joga, item: c < 0.5 ? "nota" : "", boca: "aberta", olhos: "F", boch: 0.8 });
      r.solta = c > 0.5 && c < 0.6 ? Math.floor(tl / 1.1) + 1 : 0; return r; }),
    A(2.2, [L.monP], { estilo: "corre" }),
    F(3.4, (k, tl, T) => { const j = (tl % 0.85) / 0.85, h = Math.sin(PI * j);
      return emPe(T, { dy: 0.35 * h, aL: [2.9, 0.4, 0.2], aR: [2.9, 0.4, 0.2], lL: [0.3 * h, 0.7 * h], lR: [0.3 * h, 0.7 * h], boca: "aberta", olhos: "F" }); }, { ate: L.monP }),
    A(2.2, [L.danca], { estilo: "corre" }),
    F(5.0, (k, tl, T) => poseFesta(1.05 + (tl % 2.48), T), { ate: L.danca, fx: "globo" }),
  ] }),
  preocupado: (L, e) => ({ inicio: L.cadS, aprox: L.cadP, sentado: true, sentPose: (T) => sentado(T, 0.6, { lean: 0.22 }), padrao: { sob: "tenso", boca: "foco" }, passos: [
    F(9, (k, tl, T) => {
      const perto = jan(tl, 3.0, 5.6, 0.6), coca = jan(tl, 6.6, 7.9, 0.3);
      const tE = Math.max(0, Math.sin(T * 14)) * 0.025, tD = Math.max(0, Math.sin(T * 14 + 2.2)) * 0.025;
      const kb = e.teclado(); const dx = Math.sin(T * 3.1) * 0.03;
      return sentado(T, 0.6, { lean: 0.24 + 0.14 * perto, nod: 0.08 + 0.06 * Math.sin(tl * 1.7) - 0.1 * perto, hz: 0.02,
        ikL: [kb.L.x + dx, kb.L.y + tE, kb.L.z], kL: 1, ikR: [kb.R.x - dx, kb.R.y + tD, kb.R.z], kR: 1 - coca,
        aR: [lerp(0.5, 2.3, coca), lerp(-0.12, 0.6, coca), lerp(1.07, 2.4 + 0.15 * Math.sin(T * 16), coca)], item: "tecla",
        olhar: [0.3 * Math.sin(tl * 2), -0.6] }); }, { mon: "foco" }),
    F(3.6, (k, tl, T) => { const c = jan(tl, 0, 3.6, 0.45); const sh = Math.sin(T * 9) * 0.12 * c;
      return sentado(T, 0.6, { lean: 0.22 - 0.3 * c, nod: -0.1 * c, turn: sh, aL: [lerp(0.5, 2.5, c), lerp(-0.12, 0.7, c), lerp(1.07, 2.3, c)], aR: [lerp(0.5, 2.5, c), lerp(-0.12, 0.7, c), lerp(1.07, 2.3, c)], balao: jan(tl, 0.3, 3.4, 0.3), balaoT: "smiley-nervous", boca: "o", abre: 0.4 }); }),
    F(1.3, levantarDe((T) => emPe(T), (T) => sentado(T, 0.6, { lean: 0.2 })), { ate: L.cadP }),
    A(0.85, [L.ritmo1, L.ritmo2, L.cadP], { pensativo: true }),
    F(3.4, (k, tl, T) => { const w = jan(tl, 0.1, 3.3, 0.4); const sus = Math.sin(PI * fase(tl, 0.8, 2.2));
      return emPe(T, { aR: [lerp(0, 1.3, w), -0.25, lerp(0.2, 2.2, w)], alt: 0.89 - 0.02 * sus, nod: 0.25 * w, lean: 0.06 * sus, olhos: sus > 0.6 ? "Z" : "A", boca: "triste", sob: "triste", balao: jan(tl, 0.6, 3.0), balaoT: "chart-line-down" }); }, { ate: [L.cadP[0], L.cadP[1], L.cadP[2] + PI * 0.3] }),
    F(1.3, sentarDe((T) => emPe(T), (T) => sentado(T, 0.6, { lean: 0.22 })), { ate: L.cadS }),
  ] }),
  triste: (L) => ({ inicio: L.polS, aprox: L.polP, sentado: true, sentPose: (T) => sentado(T, 0.6, { lean: 0.32, nod: 0.35, aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05] }), padrao: { sob: "triste", boca: "triste", nuvem: 1, lagrima: 1 }, passos: [
    F(11.5, (k, tl, T) => {
      const cobre = jan(tl, 0.2, 4.6, 0.6), sus = Math.sin(PI * fase(tl, 5.2, 6.8)), olha = jan(tl, 7.2, 11.2, 0.6);
      return sentado(T, 0.6, { lean: 0.32 + 0.25 * cobre - 0.12 * olha + 0.04 * sus, nod: 0.35 + 0.25 * cobre - 0.3 * olha, turn: -0.5 * olha,
        aL: [lerp(0.72, 1.55, cobre), lerp(-0.1, -0.32, cobre), lerp(1.05, 2.45, cobre)], aR: [lerp(0.72, 1.55, cobre), lerp(-0.1, -0.32, cobre), lerp(1.05, 2.45, cobre)],
        olhos: cobre > 0.5 ? "Z" : "A", olhar: olha > 0.3 ? [-1.4, -0.6] : [0, 1.2], dy: -0.01 * sus });
    }),
    F(1.6, levantarDe((T) => emPe(T, { lean: 0.12, nod: 0.3 }), (T) => sentado(T, 0.6, { lean: 0.32, nod: 0.35, aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05] })), { ate: L.polP }),
    A(0.62, [L.janP], { estilo: "triste" }),
    F(9.5, (k, tl, T) => { const mao = jan(tl, 0.8, 7.8, 0.6), sus = Math.sin(PI * fase(tl, 3.6, 5.2)), enc = jan(tl, 5.6, 7.4, 0.5);
      return emPe(T, { aL: [lerp(0, 1.75, mao), -0.1 * mao, lerp(0.2, 0.55, mao)], alt: 0.89 - 0.02 * sus, lean: 0.06 + 0.1 * enc, nod: 0.1 + 0.3 * enc - 0.1 * mao, side: -0.05 * enc, olhar: [0, -0.5] }); }, { ate: L.janP }),
    A(0.62, [L.polP], { estilo: "triste" }),
    F(1.6, sentarDe((T) => emPe(T, { lean: 0.12, nod: 0.3 }), (T) => sentado(T, 0.6, { lean: 0.32, nod: 0.35, aL: [0.72, -0.1, 1.05], aR: [0.72, -0.1, 1.05] })), { ate: L.polS }),
  ] }),
};

/* ---------- animações das recompensas: cada item liberado ganha a sua ---------- */
const ITEM_ANIM = {
  cachorro: { humores: ["triste", "preocupado", "tranquilo", "feliz", "euforico"], ic: "dog",
    lugar: (e) => e.lugar("cachorro", [1.35, 5.42, 0]),
    passos: (e) => [
      F(1.4, (k, tl, T) => emPe(T, { nod: 0.35, olhar: [0, 1.2], boca: "sorriso", boch: 0.3 }), { fx: "caoVem" }),
      F(5.2, (k, tl, T) => { const a = jan(tl, 0, 5.2, 0.7); const c = e.alvoCao(); const s = Math.sin(tl * 5) * 0.06;
        return agachado(T, a, { ikR: [c.x + s, c.y + 0.1, c.z], kR: a, nod: 0.3 * a, boca: "sorriso", olhos: tl > 2 ? "F" : "A", boch: 0.5, olhar: [0, 1] }); }, { fx: "caoCarinho" }),
      F(1.2, (k, tl, T) => emPe(T, { ...vibra(tl, 1.2) }), { fx: "caoCarinho" }),
    ] },
  aquario: { humores: ["preocupado", "tranquilo", "feliz", "euforico"], ic: "fish",
    lugar: (e) => e.lugar("aquario", [0.98, 6.835, -PI / 2]),
    passos: (e) => [
      F(1.0, (k, tl, T) => emPe(T, { nod: 0.2, olhar: [0, 0.6] })),
      F(4.6, (k, tl, T) => { const a = jan(tl, 0, 4.6, 0.6); const t = e.pto("aquario", 0.35, 1.38, 6.835); const sh = Math.sin(T * 18) * 0.02 * fase(tl, 1, 1.4) * (1 - fase(tl, 3.4, 3.8));
        return emPe(T, { ikR: [t.x + sh, t.y, t.z], kR: a, lean: 0.12 * a, nod: 0.3 * a, mR: 0.3 + 0.4 * Math.abs(Math.sin(T * 12)) * a, boca: "sorriso", olhar: [0, 1] }); }, { fx: "racao" }),
      F(1.6, (k, tl, T) => emPe(T, { boca: "sorriso", olhos: "F", boch: 0.5, nod: 0.1 })),
    ] },
  fliperama: { humores: ["tranquilo", "feliz", "euforico"], ic: "joystick",
    lugar: (e) => e.lugar("fliperama", [5.29, 1.42, PI]),
    passos: (e) => [
      F(7.0, (k, tl, T) => { const a = jan(tl, 0, 7.0, 0.6); const [l, r] = e.alvoArcade(); const bt = Math.max(0, Math.sin(T * 13)) * 0.02;
        return emPe(T, { ikL: [l.x, l.y, l.z], kL: a, ikR: [r.x, r.y - bt, r.z], kR: a, lean: 0.1 * a, nod: -0.05 + 0.04 * Math.sin(T * 6), side: 0.03 * Math.sin(T * 3), boca: "foco", olhar: [0, -0.3], mL: 0.9 * a }); }, { fx: "arcade" }),
      F(1.8, (k, tl, T) => { const up = jan(tl, 0, 1.8, 0.3); return emPe(T, { aL: [2.8 * up, 0.4, 0.3], aR: [2.8 * up, 0.4, 0.3], dy: 0.1 * Math.abs(Math.sin(tl * 7)) * up, boca: "aberta", olhos: "F", boch: 0.8 }); }),
    ] },
  touro: { humores: ["tranquilo", "feliz", "euforico"], ic: "cow",
    lugar: (e) => { const c = e.alvoTouro(); const p = e.lugar("touro", [5.4, 6.75]); return [p[0], p[1], yawPara(p, [c.x, c.z])]; },
    passos: (e) => [
      F(3.6, (k, tl, T) => { const a = jan(tl, 0, 3.6, 0.6); const c = e.alvoTouro(); const s = Math.sin(tl * 6) * 0.05;
        return emPe(T, { ikR: [c.x + s, c.y + 0.04, c.z + s * 0.5], kR: a, lean: 0.18 * a, boca: "sorriso", olhos: tl > 1.5 ? "F" : "A", boch: 0.45 }); }),
      F(2.0, (k, tl, T) => emPe(T, { ...vibra(tl, 2.0) })),
    ] },
  cofre: { humores: ["preocupado", "tranquilo", "feliz", "euforico"], ic: "vault",
    lugar: (e) => e.lugar("cofre", [7.62, 1.63, PI / 2]),
    passos: (e) => [
      F(1.8, (k, tl, T) => { const a = suave(fase(tl, 0, 0.8)); const m = e.alvoCofre(); return agachado(T, 0.55 * a, { ikR: [m.x, m.y, m.z], kR: a, porta: 1.9 * suave(fase(tl, 0.9, 1.8)), boca: "o", abre: 0.4 }); }, { fx: "cofre" }),
      F(2.0, (k, tl, T) => { const pega = jan(tl, 0, 1.3, 0.4); const d = e.pto("cofre", 8.54, 0.32, 1.63); return agachado(T, 0.55 * (1 - suave(fase(tl, 1.0, 2.0))), { ikR: [d.x, d.y, d.z], kR: pega, porta: 1.9, item: tl > 0.8 ? "moeda" : "", boca: "sorriso", olhos: "F", boch: 0.6 }); }, { fx: "cofre" }),
      F(1.8, (k, tl, T) => emPe(T, { aR: [1.0, -0.1, 1.5], porta: 1.9, item: "moeda", olhar: [0, -1.6 * jan(tl, 0.2, 1.4)], nod: -0.35 * jan(tl, 0.2, 1.4), boca: "aberta", olhos: "A", fxk: fase(tl, 0.15, 1.35) }), { fx: "moedaJoga" }),
      F(1.9, (k, tl, T) => { const a = jan(tl, 0, 1.9, 0.5); const m = e.alvoCofre(); return agachado(T, 0.55 * a, { ikR: [m.x, m.y, m.z], kR: a * fase(tl, 0.6, 1.0), porta: 1.9 * (1 - suave(fase(tl, 0.9, 1.7))), item: tl < 0.7 ? "moeda" : "", boca: "sorriso" }); }, { fx: "cofre" }),
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
      F(1.0, (k, tl, T) => emPe(T, { aR: [0.5 * suave(k), -0.1, 1.3 * suave(k)], item: tl > 0.5 ? "moeda" : "", nod: 0.2 })),
      F(1.8, (k, tl, T) => { const a = jan(tl, 0, 1.8, 0.4); const p = e.alvoPorco(); return emPe(T, { ikR: [p.x, p.y + 0.12, p.z], kR: a, lean: 0.25 * a, nod: 0.35, item: tl < 0.9 ? "moeda" : "", olhar: [0, 1], boca: "sorriso" }); }, { fx: "porco" }),
      F(1.4, (k, tl, T) => emPe(T, { ...vibra(tl, 1.4) })),
    ] },
  neon: { humores: ["tranquilo", "feliz", "euforico"], ic: "currency-btc",
    lugar: () => [1.55, 6.6, -PI / 2],
    passos: (e) => [
      F(4.6, (k, tl, T) => { const a = jan(tl, 0, 4.6, 0.5); const olhaNeon = jan(tl, 2.6, 4.4, 0.3);
        return emPe(T, { aR: [lerp(0, 1.05, a), -0.25, lerp(0.2, 2.0, a)], aL: [0.3 * a, -0.2, 0.9 * a], item: "celular", nod: lerp(0.35, -0.3, olhaNeon) * a, olhar: [0, lerp(1, -1.2, olhaNeon)], boca: olhaNeon > 0.5 ? "sorriso" : "foco", boch: 0.3 }); }),
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
    passos: () => [0, 1, 2].map((i) => F(1.6, (k, tl, T) => {
      const prep = suave(fase(tl, 0.1, 0.7)), vai = suave(fase(tl, 0.7, 0.92)), volta = suave(fase(tl, 1.1, 1.6));
      const a0 = [0.2, 0.1, 0.3], a1 = [1.75, -0.1, 2.35], a2 = [1.35, -0.1, 0.25];
      const aR = tl < 0.7 ? a0.map((v, j) => lerp(v, a1[j], prep)) : tl < 1.1 ? a1.map((v, j) => lerp(v, a2[j], vai)) : a2.map((v, j) => lerp(v, a0[j], volta));
      return emPe(T, { aR, twist: -0.15 * prep + 0.25 * vai - 0.1 * volta, lean: 0.06 * vai, item: tl < 0.82 ? "dardo" : "", boca: "foco", olhar: [0, -0.2], lL: [0.18 * prep, 0.1], fxk: i + (tl >= 0.82 ? 0.5 : 0) });
    }, { fx: "dardo" })).concat([F(1.6, (k, tl, T) => emPe(T, { ...vibra(tl, 1.6) }), { fx: "dardo" })]) },
  globo: { humores: ["tranquilo", "feliz", "euforico"], ic: "disco-ball",
    lugar: (e) => e.lugares().danca,
    passos: () => [F(6.2, (k, tl, T) => poseFesta(tl % 3.1 + (tl > 3.1 ? 1.05 : 0), T), { fx: "globo" })] },
};
// item novo: surpresa e comemoração antes da animação do item
const NOVIDADE = (ic) => [
  F(2.6, (k, tl, T) => { const a = jan(tl, 0, 2.6, 0.3); return emPe(T, { aL: [1.9 * a, -0.45, 2.3 * a], aR: [1.9 * a, -0.45, 2.3 * a], boca: "o", abre: 0.9, olhos: "A", boch: 0.6, balao: jan(tl, 0.1, 2.5, 0.3), balaoT: ic, dy: 0.05 * Math.sin(PI * fase(tl, 0, 0.4)) }); }, { fx: "novidade" }),
  F(1.7, (k, tl, T) => poseFesta(tl, T)),
];
