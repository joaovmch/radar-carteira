
/* ---------- vida: o que faz o boneco parecer gente ----------
   Por cima da rotina: expressões que mudam sozinhas dentro do mesmo humor, olhar que procura coisas
   (os olhos chegam antes da cabeça), manias (coçar o nariz, alongar o pescoço, suspirar, tamborilar),
   transferência de peso quando está em pé e rosto com parâmetros contínuos que se misturam sem saltos. */
const EXPR = {
  neutro: {},
  contente: { sorr: 0.62, feliz: 0.42, boch: 0.38 },
  sorrisao: { sorr: 0.88, abre: 0.32, dentes: 1, feliz: 0.65, boch: 0.55, sobeS: 0.18 },
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
  tranquilo: [["contente", 4, 3, 6], ["sorrisao", 1.4, 1.8, 3.2], ["concentrado", 3, 3, 7], ["surpreso", 1, 0.9, 1.6], ["rindo", 1.2, 1.4, 2.6], ["bocejo", 0.6, 2.4, 3.2], ["pensativo", 1, 2.5, 4.5], ["assovia", 0.8, 2.5, 4], ["neutro", 2, 2, 4]],
  feliz: [["contente", 3, 3, 6], ["sorrisao", 3, 2, 4], ["rindo", 2, 1.5, 3], ["orgulhoso", 2, 2.5, 4.5], ["concentrado", 1.5, 2, 4], ["assovia", 1.2, 2.5, 4], ["neutro", 1, 2, 3]],
  euforico: [["gargalhada", 3, 1.5, 3], ["sorrisao", 2, 1.5, 3], ["grito", 2, 0.9, 1.8], ["rindo", 2, 1.5, 3], ["contente", 1.5, 2, 4]],
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
