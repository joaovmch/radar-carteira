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
