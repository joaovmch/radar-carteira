
/* ---------- sinuca de verdade: física das bolas (tabelas, caçapas, choques), escolha da jogada e gravação ----------
   Tudo em coordenadas da mesa na posição original (a mesa pode ser movida; o grupo dela leva as bolas junto).
   Cada tacada é simulada inteira na hora de planejar (passo fixo, determinístico) e gravada a 60 quadros por
   segundo: na hora da tacada o escritório só toca a gravação, então a bola sai exatamente quando o taco bate. */
const SIN = { x0: 5.8, x1: 8.0, z0: 3.85, z1: 4.95, r: 0.03, y: 0.81 };
const SIN_CORES = ["#F8FAFC", "#FACC15", "#1D4ED8", "#DC2626", "#7C3AED", "#F97316", "#16A34A", "#7F1D1D", "#111827", "#FACC15"];
class MesaSinuca {
  constructor(cacapas) {
    this.cac = cacapas.map(([x, z], i) => ({ x, z, r: i < 4 ? 0.058 : 0.05 }));
    this.bolas = this.rack(); this.intacto = true; this.seq = 0; this.planos = new Map();
  }
  // nove bolas em losango (1 na frente, 9 no meio) e a branca na marca de saída
  rack() {
    const r = SIN.r + 0.0008, ap = [7.45, 4.4], out = [{ n: 0, x: 6.35, z: 4.4, em: true }];
    const ordem = [1, 2, 3, 4, 9, 5, 6, 7, 8], linhas = [1, 2, 3, 2, 1]; let k = 0;
    linhas.forEach((q, i) => { for (let j = 0; j < q; j++) { const n = ordem[k++]; out.push({ n, x: ap[0] + i * r * Math.sqrt(3), z: ap[1] + (j - (q - 1) / 2) * 2 * r, em: true }); } });
    return out;
  }
  copia(est) { return est.map((b) => ({ ...b })); }
  // simula a partir de um estado com a branca saindo na velocidade (vx, vz); devolve quadros (60/s) e o resultado
  simular(est, vx, vz) {
    const B = this.copia(est).map((b) => ({ ...b, vx: 0, vz: 0, cai: -1, cx: 0, cz: 0 })), r = SIN.r, dt = 1 / 240, e = 0.95, eb = 0.8, atr = 0.62;
    const branca = B.find((b) => b.n === 0); branca.vx = vx; branca.vz = vz;
    const quadros = []; const caidas = []; let primeiro = -1; let t = 0;
    const grava = () => quadros.push(B.map((b) => [b.x, b.z, b.em ? 1 : 0, b.cai]));
    grava();
    for (let passo = 0; passo < 240 * 12; passo++) {
      let mexe = false;
      for (const b of B) {
        if (!b.em) continue; const s = Math.hypot(b.vx, b.vz); if (s < 1e-4) { b.vx = b.vz = 0; continue; }
        mexe = true; const ns = Math.max(0, s - atr * dt); b.vx *= ns / s; b.vz *= ns / s; b.x += b.vx * dt; b.z += b.vz * dt;
        // caçapa: a bola cai se o centro chega perto da boca
        const c = this.cac.find((q) => Math.hypot(b.x - q.x, b.z - q.z) < q.r); if (c) { b.em = false; b.cai = t; b.cx = c.x; b.cz = c.z; b.x = c.x; b.z = c.z; b.vx = b.vz = 0; caidas.push(b.n); continue; }
        if (b.x < SIN.x0 + r) { b.x = 2 * (SIN.x0 + r) - b.x; b.vx = -b.vx * eb; b.vz *= 0.96; }
        if (b.x > SIN.x1 - r) { b.x = 2 * (SIN.x1 - r) - b.x; b.vx = -b.vx * eb; b.vz *= 0.96; }
        if (b.z < SIN.z0 + r) { b.z = 2 * (SIN.z0 + r) - b.z; b.vz = -b.vz * eb; b.vx *= 0.96; }
        if (b.z > SIN.z1 - r) { b.z = 2 * (SIN.z1 - r) - b.z; b.vz = -b.vz * eb; b.vx *= 0.96; }
      }
      for (let i = 0; i < B.length; i++) for (let j = i + 1; j < B.length; j++) {
        const a = B[i], b = B[j]; if (!a.em || !b.em) continue;
        const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz); if (d >= 2 * r || d < 1e-6) continue;
        const nx = dx / d, nz = dz / d, vr = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz;
        if (vr > 0) { const j2 = vr * (1 + e) / 2; a.vx -= j2 * nx; a.vz -= j2 * nz; b.vx += j2 * nx; b.vz += j2 * nz; if (primeiro < 0 && (a.n === 0 || b.n === 0)) primeiro = a.n === 0 ? b.n : a.n; }
        const corr = (2 * r - d) / 2 + 1e-5; a.x -= nx * corr; a.z -= nz * corr; b.x += nx * corr; b.z += nz * corr;
      }
      t += dt; if (passo % 4 === 3) grava();
      if (!mexe && t > 0.3) break;
    }
    grava();
    const final = B.map((b) => ({ n: b.n, x: b.x, z: b.z, em: b.em }));
    return { quadros, final, caidas, primeiro, dur: t };
  }
  // o caminho de a até b está livre (nenhuma bola, fora as ignoradas, a menos de "folga" da reta)?
  livre(est, ax, az, bx, bz, ign, folga) {
    const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1;
    return est.every((q) => { if (!q.em || ign.includes(q.n)) return true; const t = cl(((q.x - ax) * dx + (q.z - az) * dz) / L2); return Math.hypot(ax + dx * t - q.x, az + dz * t - q.z) > folga; });
  }
  // escolhe a próxima tacada a partir do estado atual. ok(x, z): o lugar onde o jogador fica é alcançável?
  planejar(ok, aleat = Math.random) {
    const id = ++this.seq; let pre = this.copia(this.bolas), rack = false;
    const obj = pre.filter((b) => b.em && b.n > 0);
    if (obj.length < 3) { pre = this.rack(); rack = true; }
    const saida = rack || this.intacto; this.intacto = false;
    const br = pre.find((b) => b.n === 0);
    if (!br.em) { br.em = true; br.x = 6.35; br.z = 4.4; while (!this.livre(pre, br.x, br.z, br.x, br.z, [0], 2.2 * SIN.r)) br.z += 0.07; }
    const r = SIN.r; let melhor = null;
    // onde ele fica: atrás da branca, um pouco à direita da linha; se não couber, chega mais perto da mesa
    const posJogador = (u, d = 0.92) => { const dir = [u[1], -u[0]]; return [br.x - u[0] * d - dir[0] * 0.13, br.z - u[1] * d - dir[1] * 0.13]; };
    const fora = (p) => p[0] < 5.55 || p[0] > 8.25 || p[1] < 3.6 || p[1] > 5.2;
    const distOk = (u) => [0.92, 0.82, 0.72].find((d) => { const p = posJogador(u, d); return fora(p) && ok(p[0], p[1], Math.atan2(u[0], u[1])); });
    const pode = (u) => distOk(u) != null;
    let jogada = null;
    if (saida) {   // saída: forte na bola da frente, quase reta
      const alvo = pre.find((b) => b.n === 1); const a = Math.atan2(alvo.z - br.z, alvo.x - br.x) + (aleat() - 0.5) * 0.02;
      const u = [Math.cos(a), Math.sin(a)]; if (pode(u)) jogada = { u, v: 6.6 + aleat() * 0.6, alvo: 1, cacapa: -1, quebra: true };
    }
    if (!jogada) {
      const cands = [];
      for (const b of pre) {
        if (!b.em || b.n === 0) continue;
        for (let ci = 0; ci < this.cac.length; ci++) {
          const c = this.cac[ci]; const bp = [c.x - b.x, c.z - b.z], dbp = Math.hypot(...bp); if (dbp < 0.05) continue; const nb = [bp[0] / dbp, bp[1] / dbp];
          const G = [b.x - nb[0] * 2 * r, b.z - nb[1] * 2 * r]; const ag = [G[0] - br.x, G[1] - br.z], d1 = Math.hypot(...ag); if (d1 < 0.08) continue;
          const u = [ag[0] / d1, ag[1] / d1]; const cosc = u[0] * nb[0] + u[1] * nb[1]; if (cosc < 0.42) continue;
          if (ci >= 4 && Math.abs(nb[1]) < 0.82) continue;   // caçapa do meio: só entra bola que vem de frente
          if (!this.livre(pre, br.x, br.z, G[0], G[1], [0, b.n], 2 * r + 0.004)) continue;
          if (!this.livre(pre, b.x, b.z, c.x, c.z, [b.n], 2 * r + 0.004)) continue;
          if (!pode(u)) continue;
          const nota = cosc * 2.2 - d1 * 0.35 - dbp * 0.45 + aleat() * 0.5;
          cands.push({ u, nota, d1, dbp, cosc, alvo: b.n, cacapa: ci });
        }
      }
      cands.sort((a, b) => b.nota - a.nota);
      const c = cands[Math.floor(aleat() * Math.min(2, cands.length))];
      if (c) jogada = { u: c.u, v: cl(1.15 + 0.85 * (c.d1 + c.dbp) / Math.max(c.cosc, 0.55), 1.4, 3.4), alvo: c.alvo, cacapa: c.cacapa };
    }
    if (!jogada) {   // sem jogada limpa: bate firme na bola mais perto que dá para alcançar
      const lista = pre.filter((b) => b.em && b.n > 0).map((b) => { const d = Math.hypot(b.x - br.x, b.z - br.z); return { b, d, u: [(b.x - br.x) / d, (b.z - br.z) / d] }; }).sort((a, b) => a.d - b.d);
      for (const q of lista) if (pode(q.u)) { jogada = { u: q.u, v: 2.2, alvo: q.b.n, cacapa: -1 }; break; }
      if (!jogada) for (let a = 0; a < TAU; a += 0.2) { const u = [Math.cos(a), Math.sin(a)]; if (pode(u)) { jogada = { u, v: 1.8, alvo: -1, cacapa: -1 }; break; } }
      if (!jogada) jogada = { u: [-1, 0], v: 1.5, alvo: -1, cacapa: -1 };
    }
    // às vezes erra um pouquinho a mira (gente de verdade)
    const erro = jogada.quebra ? 0 : (aleat() < 0.3 ? (aleat() < 0.5 ? -1 : 1) * (0.022 + aleat() * 0.03) : (aleat() - 0.5) * 0.008);
    const a0 = Math.atan2(jogada.u[1], jogada.u[0]) + erro; const u = [Math.cos(a0), Math.sin(a0)];
    const sim = this.simular(pre, u[0] * jogada.v, u[1] * jogada.v);
    const acertou = sim.caidas.some((n) => n > 0) && !sim.caidas.includes(0);
    const plano = { id, pre, rack, u, jogada, sim, acertou, branca: sim.caidas.includes(0), stance: posJogador(u, distOk(u) ?? 0.92), yaw: Math.atan2(u[0], u[1]), tip: [br.x - u[0] * 0.035, br.z - u[1] * 0.035] };
    this.planos.set(id, plano); if (this.planos.size > 6) this.planos.delete(this.planos.keys().next().value);
    this.bolas = sim.final;   // a próxima jogada parte de onde esta termina
    return plano;
  }
}
