
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
