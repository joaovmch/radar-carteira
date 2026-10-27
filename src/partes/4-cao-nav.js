
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
