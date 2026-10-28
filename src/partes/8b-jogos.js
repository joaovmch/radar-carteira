
/* ---------- jogos de verdade na TV e no fliperama ----------
   Os dois são funções do tempo (determinísticos): o mesmo T desenha sempre a mesma cena, então funcionam
   mesmo quando o relógio pula, e o boneco aperta o botão exatamente quando o herói pula ou a nave atira. */
const hash = (n) => { const s = Math.sin(n * 91.345 + 47.853) * 43758.5453; return s - Math.floor(s); };

// plataforma: o herói (com a camisa na cor do perfil) corre, pula buracos e inimigos, pega moedas
const JOGO_TV = {
  vel: 150, tile: 32, chao: 236, pulo: 0.62, altura: 92,
  // o que tem em cada coluna do mundo: buraco, inimigo, moeda no alto, bloco
  coluna(i) {
    if (i < 6) return { buraco: false };
    const h = hash(i * 1.37), h2 = hash(i * 7.11 + 3);
    const buraco = h < 0.09 && hash((i - 1) * 1.37) >= 0.09;   // buracos de duas colunas
    const buraco2 = hash((i - 1) * 1.37) < 0.09 && hash((i - 2) * 1.37) >= 0.09;
    return { buraco: buraco || buraco2, inimigo: !buraco && !buraco2 && h2 < 0.08, moeda: h2 > 0.82, bloco: h2 > 0.93 };
  },
  // pulos: começa um pouco antes de cada buraco e de cada inimigo
  pulos(ini, fim) {
    const out = []; const T = this.tile, v = this.vel;
    for (let i = Math.floor(ini * v / T) - 2; i <= Math.ceil(fim * v / T) + 6; i++) {
      const c = this.coluna(i), ca = this.coluna(i - 1);
      if ((c.buraco && !ca.buraco) || c.inimigo) { const xo = i * T; const t = (xo - 120 - 34) / v; out.push(t); }
    }
    return out.sort((a, b) => a - b);
  },
  estado(T) {
    const camX = T * this.vel, ps = this.pulos(T - 2, T + 0.2);
    let y = 0, pulando = -1; for (const t0 of ps) { const k = (T - t0) / this.pulo; if (k >= 0 && k < 1) { y = 4 * k * (1 - k) * this.altura; pulando = T - t0; } }
    const moedas = Math.floor(camX / this.tile / 4.8);
    return { camX, y, pulando, moedas, botao: pulando >= 0 && pulando < 0.14 };
  },
  desenhar(g, W, H, T, o = {}) {
    const st = this.estado(T), ti = this.tile, ch = this.chao;
    // céu, sol, nuvens e morros em camadas (parallax)
    const ceu = g.createLinearGradient(0, 0, 0, H); ceu.addColorStop(0, "#38BDF8"); ceu.addColorStop(1, "#BAE6FD"); g.fillStyle = ceu; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(255,255,255,.9)"; for (let i = 0; i < 6; i++) { const x = ((i * 170 - st.camX * 0.15) % (W + 160) + W + 160) % (W + 160) - 80, y = 40 + (i % 3) * 22; g.beginPath(); g.ellipse(x, y, 34, 14, 0, 0, TAU); g.ellipse(x + 26, y - 8, 22, 14, 0, 0, TAU); g.ellipse(x - 24, y - 4, 18, 11, 0, 0, TAU); g.fill(); }
    for (const [vel, cor, amp, base] of [[0.3, "#4ADE80", 50, 200], [0.55, "#22C55E", 34, 214]]) { g.fillStyle = cor; g.beginPath(); g.moveTo(0, H); for (let x = 0; x <= W; x += 8) { const wx = x + st.camX * vel; g.lineTo(x, base - amp * (0.5 + 0.5 * Math.sin(wx * 0.011)) * (0.6 + 0.4 * Math.sin(wx * 0.003))); } g.lineTo(W, H); g.fill(); }
    // chão em blocos, com buracos; moedas girando; blocos de ?; inimigos andando
    const i0 = Math.floor(st.camX / ti) - 1;
    for (let i = i0; i < i0 + W / ti + 3; i++) {
      const c = this.coluna(i), x = i * ti - st.camX;
      if (!c.buraco) { g.fillStyle = "#A16207"; g.fillRect(x, ch, ti, H - ch); g.fillStyle = "#22C55E"; g.fillRect(x, ch, ti, 9); g.fillStyle = "rgba(0,0,0,.15)"; g.fillRect(x + ti - 2, ch + 9, 2, H - ch); g.fillStyle = "#854D0E"; g.fillRect(x + 6, ch + 18, 6, 6); g.fillRect(x + 20, ch + 30, 5, 5); }
      if (c.moeda) { const w = Math.abs(Math.cos(T * 5 + i)) * 7 + 1; g.fillStyle = "#FACC15"; g.beginPath(); g.ellipse(x + 16, ch - 70, w, 9, 0, 0, TAU); g.fill(); g.strokeStyle = "#CA8A04"; g.lineWidth = 2; g.stroke(); }
      if (c.bloco) { g.fillStyle = "#F59E0B"; g.fillRect(x + 2, ch - 120, 28, 28); g.strokeStyle = "#92400E"; g.lineWidth = 2; g.strokeRect(x + 2, ch - 120, 28, 28); g.fillStyle = "#FFF"; g.font = "bold 20px monospace"; g.fillText("?", x + 10, ch - 99); }
      if (c.inimigo) { const pass = x < 120 - 20; const ex = x + Math.sin(T * 3 + i) * 6; if (!pass) { g.fillStyle = "#7C2D12"; g.beginPath(); g.ellipse(ex + 16, ch - 12, 15, 12, 0, PI, 0); g.fill(); g.fillRect(ex + 1, ch - 12, 30, 10); g.fillStyle = "#FFF"; g.fillRect(ex + 8, ch - 20, 5, 6); g.fillRect(ex + 19, ch - 20, 5, 6); g.fillStyle = "#000"; g.fillRect(ex + 10, ch - 18, 2, 3); g.fillRect(ex + 21, ch - 18, 2, 3); }
        else { g.fillStyle = "#7C2D12"; g.fillRect(ex + 2, ch - 5, 28, 5); } }
    }
    // herói: camisa na cor do perfil, calça, boné; pernas alternam correndo
    const hx = 120, hy = ch - 34 - st.y, run = Math.sin(T * 18) > 0; const cor = o.cor || "#2457F5";
    g.fillStyle = "#1E3A8A"; if (st.y > 1) { g.fillRect(hx + 2, hy + 24, 8, 10); g.fillRect(hx + 16, hy + 20, 8, 10); } else { g.fillRect(hx + (run ? 2 : 6), hy + 24, 8, 10); g.fillRect(hx + (run ? 16 : 12), hy + 24, 8, 10); }
    g.fillStyle = cor; g.fillRect(hx, hy + 8, 26, 18); g.fillStyle = "#F1C19A"; g.fillRect(hx + 4, hy - 8, 18, 16); g.fillStyle = "#111"; g.fillRect(hx + 16, hy - 4, 3, 4);
    g.fillStyle = cor; g.fillRect(hx + 2, hy - 12, 22, 6); g.fillRect(hx + 18, hy - 8, 10, 3);
    if (st.pulando >= 0 && st.pulando < 0.2) { g.fillStyle = "rgba(255,255,255,.7)"; for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(hx + 4 + k * 9, ch - 2, 3 + st.pulando * 20, 0, TAU); g.fill(); } }
    // placar
    g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(0, 0, W, 36); g.fillStyle = "#FFF"; g.font = "bold 18px monospace";
    g.fillText("★ " + String(Math.floor(st.camX / 10)).padStart(6, "0"), 12, 25); g.fillText("● ×" + String(st.moedas % 100).padStart(2, "0"), 190, 25); g.fillText("FASE " + (1 + Math.floor(T / 40) % 4) + "-" + (1 + Math.floor(T / 10) % 4), W - 120, 25);
    // momento de comemorar (o boneco levanta os braços no sofá)
    if (o.vitoria > 0) { const k = o.vitoria; g.fillStyle = `rgba(0,0,0,${0.35 * k})`; g.fillRect(0, 0, W, H); g.save(); g.translate(W / 2, H / 2 - 10); g.scale(0.7 + 0.3 * k, 0.7 + 0.3 * k); g.fillStyle = "#FACC15"; g.strokeStyle = "#7C2D12"; g.lineWidth = 6; g.font = "bold 44px system-ui"; g.textAlign = "center"; g.strokeText("FASE COMPLETA!", 0, 0); g.fillText("FASE COMPLETA!", 0, 0); g.restore(); g.textAlign = "left";
      for (let i = 0; i < 24; i++) { const a = i / 24 * TAU + T, r = 60 + 80 * ((T * 1.3 + hash(i)) % 1); g.fillStyle = ["#F43F5E", "#FACC15", "#22C55E", "#38BDF8"][i % 4]; g.fillRect(W / 2 + Math.cos(a) * r, H / 2 + Math.sin(a) * r * 0.6, 5, 5); } }
    return st;
  },
};

// nave do fliperama: a nave segue o próximo inimigo, atira em intervalos e os inimigos explodem
const JOGO_NAVE = {
  inimigo(i) { const fila = Math.floor(i / 6), col = i % 6; return { t0: i * 0.55, x: 16 + col * 19 + (fila % 2) * 9, fila }; },
  estado(T) {
    // alvo: o inimigo vivo mais antigo; cada inimigo morre 1,2 s depois de aparecer
    const iAlvo = Math.max(0, Math.floor((T - 0.9) / 0.55) + 1); const a = this.inimigo(iAlvo), b = this.inimigo(iAlvo + 1);
    const k = cl(((T - 0.9) / 0.55) % 1 * 2.2); const x = lerp(a.x, b.x, suave(k));
    const vx = (b.x - a.x) * (k > 0 && k < 1 ? 1 : 0);
    const tiro = ((T - 0.9) / 0.55) % 1; const atira = tiro > 0.55 && tiro < 0.72;
    return { x, vx, atira, iAlvo };
  },
  desenhar(g, W, H, T) {
    const st = this.estado(T);
    g.fillStyle = "#05030F"; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 40; i++) { const y = ((hash(i) * H + T * (20 + hash(i + 9) * 60)) % H); g.fillStyle = `rgba(255,255,255,${0.3 + hash(i + 2) * 0.7})`; g.fillRect(hash(i + 5) * W, y, 1.5, 1.5); }
    // inimigos: descem em formação; os já abatidos viram explosão
    for (let i = Math.max(0, st.iAlvo - 2); i < st.iAlvo + 10; i++) {
      const e = this.inimigo(i); const idade = T - e.t0; if (idade < 0) continue;
      const morte = e.t0 + 0.9 + 0.55 * 0 + 0.55 * (i - Math.floor((e.t0) / 0.55)) ; const tMorte = 0.9 + 0.55 * (i + 1) - 0.55 * 0.3;
      const y = 14 + Math.min(idade, 3) * 14 + e.fila * 0; const x = e.x + Math.sin(T * 2 + i) * 4;
      if (T < tMorte) { g.fillStyle = ["#F43F5E", "#22C55E", "#A855F7", "#FACC15"][i % 4]; g.fillRect(x - 6, y - 4, 12, 8); g.fillRect(x - 8, y, 3, 5); g.fillRect(x + 5, y, 3, 5); g.fillStyle = "#000"; g.fillRect(x - 3, y - 2, 2, 2); g.fillRect(x + 1, y - 2, 2, 2); }
      else if (T - tMorte < 0.35) { const k = (T - tMorte) / 0.35; for (let q = 0; q < 8; q++) { const a = q / 8 * TAU; g.fillStyle = q % 2 ? "#FDE047" : "#FB923C"; g.fillRect(x + Math.cos(a) * 14 * k, y + Math.sin(a) * 14 * k, 3 * (1 - k) + 1, 3 * (1 - k) + 1); } }
      void morte;
    }
    // tiros
    for (let q = 0; q < 3; q++) { const tt = ((T - 0.9) / 0.55) % 1 - 0.55 - q * 0.0; if (tt > 0 && tt < 0.45) { const by = 104 - tt / 0.45 * 80; g.fillStyle = "#67E8F9"; g.fillRect(st.x - 1, by, 2, 7); } }
    // nave
    g.fillStyle = "#38BDF8"; g.beginPath(); g.moveTo(st.x, 100); g.lineTo(st.x - 8, 114); g.lineTo(st.x + 8, 114); g.fill(); g.fillStyle = "#F43F5E"; g.fillRect(st.x - 2, 114, 4, 3 + (Math.floor(T * 20) % 2) * 2);
    g.fillStyle = "#FDE047"; g.font = "bold 8px monospace"; g.fillText("1UP " + String(st.iAlvo * 100).padStart(6, "0"), 3, 9); g.fillStyle = "#F472B6"; g.fillText("HI 099999", 78, 9);
    return st;
  },
};
