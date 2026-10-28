
/* ---------- corpo do boneco: tronco inteiro (sem emendas), dobras de tecido, cabelo esculpido, mãos e calçados ---------- */

// mapa de normais gerado no navegador a partir de um desenho de alturas (claro = alto); fica em cache pelo nome
const _nm = new Map();
function mapaNormal(nome, w, h, desenho, forca = 3) {
  if (_nm.has(nome)) return _nm.get(nome);
  const c = document.createElement("canvas"); c.width = w; c.height = h; const g = c.getContext("2d");
  g.fillStyle = "#808080"; g.fillRect(0, 0, w, h); desenho(g, w, h);
  const src = g.getImageData(0, 0, w, h).data, out = g.createImageData(w, h), od = out.data;
  const H = (x, y) => src[((((y % h) + h) % h) * w + (((x % w) + w) % w)) * 4];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) / 255 * forca, dy = (H(x, y + 1) - H(x, y - 1)) / 255 * forca;
    const l = Math.hypot(dx, dy, 1), i = (y * w + x) * 4;
    od[i] = (-dx / l * 0.5 + 0.5) * 255; od[i + 1] = (dy / l * 0.5 + 0.5) * 255; od[i + 2] = (0.5 / l + 0.5) * 255; od[i + 3] = 255;
  }
  g.putImageData(out, 0, 0);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.NoColorSpace; t.anisotropy = 4; t.channel = 1;
  _nm.set(nome, t); return t;
}
// trama do tecido (repete sem emenda): liso (algodão), malha (nervuras), jeans (sarja), tricô (lã), lã fina (paletó)
function trama(g, w, h, tipo) {
  g.save();
  if (tipo === "malha") { for (let x = 0; x < w; x += 4) { g.fillStyle = "rgba(255,255,255,.2)"; g.fillRect(x, 0, 2, h); } }
  else if (tipo === "jeans") { g.strokeStyle = "rgba(255,255,255,.22)"; g.lineWidth = 1.4; for (let i = -h; i < w; i += 4) { g.beginPath(); g.moveTo(i, h); g.lineTo(i + h, 0); g.stroke(); } }
  else if (tipo === "trico") { g.fillStyle = "rgba(255,255,255,.32)"; for (let y = 0; y < h; y += 8) for (let x = 0; x < w; x += 8) { g.beginPath(); g.ellipse(x + 2, y + 4, 1.9, 3.6, -0.55, 0, TAU); g.ellipse(x + 6, y + 4, 1.9, 3.6, 0.55, 0, TAU); g.fill(); } }
  else if (tipo === "la") { for (let y = 0; y < h; y += 2) { g.fillStyle = `rgba(255,255,255,${(y / 2) % 2 ? 0.05 : 0.0})`; g.fillRect(0, y, w, 1); } }
  else { for (let y = 0; y < h; y += 2) { g.fillStyle = `rgba(255,255,255,${(y / 2) % 2 ? 0.08 : 0.02})`; g.fillRect(0, y, w, 1); } for (let x = 0; x < w; x += 2) { g.fillStyle = `rgba(0,0,0,${(x / 2) % 2 ? 0.06 : 0})`; g.fillRect(x, 0, 1, h); } }
  g.restore();
}
// dobra: crista clara com o vale escuro logo abaixo, borrada (a luz faz o volume)
function dobra(g, pts, larg = 9, forca = 0.5, w = 0) {
  const tr = (cor, off, lw, dx) => { g.strokeStyle = cor; g.lineWidth = lw; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x + dx, y + off) : g.moveTo(x + dx, y + off))); g.stroke(); };
  g.save(); g.filter = `blur(${(larg * 0.45).toFixed(1)}px)`; g.lineCap = "round"; g.lineJoin = "round";
  for (const dx of w ? [0, -w, w] : [0]) { tr(`rgba(0,0,0,${forca * 0.75})`, larg * 0.55, larg * 0.7, dx); tr(`rgba(255,255,255,${forca})`, 0, larg, dx); }
  g.restore();
}
function costura(g, x0, y0, x1, y1, w = 0) {
  g.save(); g.filter = "blur(0.7px)";
  for (const dx of w ? [0, -w, w] : [0]) {
    g.strokeStyle = "rgba(0,0,0,.55)"; g.lineWidth = 2.2; g.beginPath(); g.moveTo(x0 + dx, y0); g.lineTo(x1 + dx, y1); g.stroke();
    g.strokeStyle = "rgba(255,255,255,.35)"; g.lineWidth = 1.2; g.beginPath(); g.moveTo(x0 + dx + 2.5, y0 + 1); g.lineTo(x1 + dx + 2.5, y1 + 1); g.stroke();
  }
  g.restore();
}
const onda = (x0, x1, y, amp, n, fase = 0) => { const r = []; for (let i = 0; i <= 12; i++) { const t = i / 12; r.push([lerp(x0, x1, t), y + amp * Math.sin(t * PI * n + fase)]); } return r; };
// mapas de cada peça: tronco (u em volta a partir das costas, v de baixo para cima), manga e perna (u em volta a partir da frente)
const Yt = (y) => (1 - (y + 0.135) / 0.685) * 512;
function nmTronco(tipo) {
  return mapaNormal("tronco-" + tipo, 512, 512, (g, w, h) => {
    trama(g, w, h, tipo);
    // cintura: puxados horizontais na frente e nas costas
    for (const [y, f] of [[0.035, 0.42], [0.085, 0.36], [0.13, 0.28]]) { dobra(g, onda(178, 334, Yt(y), 5, 2, y * 30), 10, f); dobra(g, onda(410, 500, Yt(y + 0.01), 4, 1.5), 9, f * 0.6); dobra(g, onda(12, 102, Yt(y + 0.01), 4, 1.5), 9, f * 0.6); }
    // axilas: dobras em leque do lado para o peito e para as costas
    for (const s of [1, -1]) { const x0 = s > 0 ? 128 : 384;
      [[0.405, 0.33, 70], [0.392, 0.3, 58], [0.38, 0.265, 46]].forEach(([y0, y1, dx], i) => { dobra(g, [[x0 + s * 6, Yt(y0)], [x0 + s * dx * 0.55, Yt((y0 + y1) / 2) + 4], [x0 + s * dx, Yt(y1)]], 8, 0.45 - i * 0.08); dobra(g, [[x0 - s * 6, Yt(y0)], [x0 - s * dx * 0.5, Yt(y1 + 0.02)]], 7, 0.3); }); }
    // costuras do lado e dos ombros, barra pespontada
    costura(g, 128, 0, 128, h); costura(g, 384, 0, 384, h);
    costura(g, 92, Yt(0.475), 164, Yt(0.475)); costura(g, 348, Yt(0.475), 420, Yt(0.475));
    costura(g, 0, Yt(-0.112), w, Yt(-0.112));
  }, 2.6);
}
const Ym = (y) => (1 - (0.1 - y) / 0.7) * 256;
function nmManga(tipo, longa) {
  return mapaNormal("manga-" + tipo + (longa ? "L" : "C"), 256, 256, (g, w, h) => {
    trama(g, w, h, tipo);
    costura(g, 0, Ym(0.035), w, Ym(0.035));
    if (longa) {
      // dobra do cotovelo (por dentro, na frente) e sanfona no punho
      for (const [dy, f] of [[0.02, 0.5], [-0.01, 0.55], [-0.04, 0.45], [-0.07, 0.3]]) dobra(g, onda(-46, 46, Ym(-0.27 + dy), 4, 1, dy * 40), 9, f, w);
      for (const dy of [0, -0.05]) dobra(g, onda(100, 156, Ym(-0.3 + dy), 3, 1), 7, 0.25);
      for (const [y, f] of [[-0.44, 0.35], [-0.47, 0.45], [-0.5, 0.4]]) dobra(g, onda(0, w, Ym(y), 5, 3, y * 50), 8, f);
      costura(g, 0, Ym(-0.525), w, Ym(-0.525));
    } else {
      dobra(g, onda(0, w, Ym(-0.12), 4, 2), 8, 0.35); costura(g, 0, Ym(-0.172), w, Ym(-0.172));
    }
    costura(g, 128, 0, 128, h);
  }, 2.4);
}
const Yp = (y) => (1 - (0.06 - y) / 0.84) * 512;
function nmPerna(tipo) {
  return mapaNormal("perna-" + tipo, 256, 512, (g, w, h) => {
    trama(g, w, h, tipo);
    // virilha: puxados na frente da coxa; joelho: dobras atrás e marcas na frente; tornozelo: sanfona
    for (const [y, f] of [[-0.04, 0.42], [-0.085, 0.34], [-0.13, 0.22]]) dobra(g, [[200, Yp(y + 0.03)], [150, Yp(y)], [70, Yp(y - 0.04)]], 9, f);
    for (const [dy, f] of [[0.03, 0.35], [-0.01, 0.5], [-0.05, 0.45]]) dobra(g, onda(96, 160, Yp(-0.42 + dy), 5, 1.5, dy * 30), 9, f);
    for (const dy of [0.02, -0.03]) dobra(g, onda(-30, 30, Yp(-0.42 + dy), 3, 1), 7, 0.22, w);
    for (const [y, f] of [[-0.69, 0.32], [-0.72, 0.45], [-0.75, 0.4]]) dobra(g, onda(0, w, Yp(y), 6, 2.5, y * 40), 9, f);
    costura(g, 64, 0, 64, h); costura(g, 192, 0, 192, h);
  }, 2.6);
}

/* --- tronco: superelipses empilhadas (peito largo e ombros redondos), com barriga integrada e barra solta --- */
// seções [y, meia largura, meia profundidade, expoente, avanço do peito] em coordenadas da coluna
const SEC_TRONCO = [
  [-0.135, 0.178, 0.13, 2.3, 0.004], [-0.07, 0.169, 0.124, 2.35, 0.004], [0.0, 0.159, 0.116, 2.4, 0.003], [0.1, 0.153, 0.11, 2.5, 0.003],
  [0.2, 0.159, 0.114, 2.6, 0.005], [0.3, 0.173, 0.121, 2.7, 0.009], [0.38, 0.184, 0.12, 2.8, 0.008], [0.437, 0.19, 0.112, 2.7, 0.004],
  [0.475, 0.174, 0.1, 2.45, 0.0], [0.505, 0.14, 0.087, 2.25, 0.0], [0.527, 0.1, 0.073, 2.05, 0.0], [0.542, 0.072, 0.063, 2.0, 0.0], [0.552, 0.052, 0.054, 2.0, 0.0],
];
function secTronco(y) {
  const S = SEC_TRONCO; let i = 0; while (i < S.length - 2 && S[i + 1][0] < y) i++;
  const t = cl((y - S[i][0]) / (S[i + 1][0] - S[i][0]));
  const p0 = S[Math.max(0, i - 1)], p1 = S[i], p2 = S[i + 1], p3 = S[Math.min(S.length - 1, i + 2)];
  const cr = (k) => { const a = p0[k], b = p1[k], c = p2[k], d = p3[k]; return 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t); };
  return [cr(1), cr(2), cr(3), cr(4)];
}
const sgp = (v, e) => Math.sign(v) * Math.pow(Math.abs(v), e);
// o: g (largura do corpo), bar (barriga em metros), ini (altura da barra), folga (roupa por cima), flare (barra mais aberta)
function corpoTronco(o) {
  const g = o.g || 1, bar = o.bar || 0, folga = o.folga || 0, flare = o.flare || 0, ini = o.ini ?? -0.135;
  const ponto = (y, t) => {
    let [a, b, n, zc] = secTronco(y); const em = cl((-y + 0.0) / 0.135) * flare;
    a = (a + folga + em) * g; b = (b + folga + em * 0.7) * g;
    const s = Math.sin(t), c = Math.cos(t);
    let x = a * sgp(c, 2 / n), z = zc * g + b * sgp(s, 2 / n);
    const bb = bar * Math.exp(-(((y - 0.11) / 0.13) ** 2));
    if (bb > 0) { z += bb * Math.pow(Math.max(0, s), 1.4); x *= 1 + (bb / Math.max(a, 0.05)) * 0.22; }
    return [x, z];
  };
  // z da frente do tronco num x e y (para peças coladas no peito)
  const frente = (x, y, eps = 0) => {
    let [a, , n] = secTronco(y); const em = cl(-y / 0.135) * flare; a = (a + folga + em) * g;
    const bb = bar * Math.exp(-(((y - 0.11) / 0.13) ** 2)); const ax = a * (1 + (bb / Math.max(a, 0.05)) * 0.22);
    const ct = cl(sgp(x / ax, n / 2), -1, 1); const t = Math.acos(ct);
    return ponto(y, t)[1] + eps;
  };
  return { ponto, frente, ini, topo: 0.552 };
}
// pesos de pele do tronco: [coluna, quadril, barra da frente, barra de trás]
function pesoTronco(y, s) {
  const wS = suave((y - 0.0) / 0.15), resto = 1 - wS;
  const barra = suave((-0.015 - y) / 0.11) * 0.9, f = 0.5 + 0.5 * cl(s * 1.6, -1, 1);
  return [wS, resto * (1 - barra), resto * barra * f, resto * barra * (1 - f)];
}
function geoTronco(corpo) {
  const N = 64, ini = corpo.ini, topo = corpo.topo;
  const linhas = []; const M = Math.max(24, Math.round((topo - ini) / 0.0105));
  for (let i = 0; i <= M; i++) linhas.push({ y: topo - (topo - ini) * (i / M), k: 1 });
  // barra com espessura: dobra para dentro e sobe um pouco
  linhas.push({ y: ini + 0.002, k: 0.955 }, { y: ini + 0.035, k: 0.94 });
  const pos = [], uv = [], si = [], sw = [], idx = [];
  linhas.forEach(({ y, k }) => {
    for (let j = 0; j <= N; j++) {
      const t = -PI / 2 + (j / N) * TAU; const [x, z] = corpo.ponto(y, t);
      pos.push(x * k, y, z * k); uv.push(j / N, (y + 0.135) / 0.685);
      const w = pesoTronco(y, Math.sin(t)); si.push(0, 1, 2, 3); sw.push(...w);
    }
  });
  for (let i = 0; i < linhas.length - 1; i++) for (let j = 0; j < N; j++) { const a = i * (N + 1) + j, b = a + N + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); geo.setAttribute("uv1", new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(si, 4)); geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(sw, 4)); geo.setIndex(idx);
  geo.computeVertexNormals(); voltarParaFora(geo, V(0, 0.3, 1));
  return geo;
}
// confere se as normais apontam para fora (pela frente do peito); se não, inverte a ordem dos triângulos
function voltarParaFora(geo, dir) {
  const p = geo.attributes.position, n = geo.attributes.normal; let melhor = -1, mz = -1e9;
  for (let i = 0; i < p.count; i++) { const v = p.getX(i) * dir.x + p.getY(i) * dir.y * 0 + p.getZ(i) * dir.z; if (v > mz) { mz = v; melhor = i; } }
  if (n.getZ(melhor) < 0) { const ix = geo.index.array; for (let k = 0; k < ix.length; k += 3) { const t = ix[k + 1]; ix[k + 1] = ix[k + 2]; ix[k + 2] = t; } geo.index.needsUpdate = true; geo.computeVertexNormals(); }
}
// qualquer geometria (em coordenadas da coluna) vira malha com os mesmos pesos do tronco: golas, botões e bolsos acompanham
function pesosComoTronco(geo) {
  const p = geo.attributes.position, n = p.count; const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) { const w = pesoTronco(p.getY(i), cl(p.getZ(i) / 0.11, -1, 1)); si.set([0, 1, 2, 3], i * 4); sw.set(w, i * 4); }
  geo.setAttribute("skinIndex", new THREE.BufferAttribute(si, 4)); geo.setAttribute("skinWeight", new THREE.BufferAttribute(sw, 4));
  return geo;
}

/* --- casca esculpida sobre a cabeça (cabelo, barba): espessura h(d) em cada direção d, máscara de 0 a 1,
       sulcos que irradiam de um polo (as mechas) e cor de vértice mais escura no fundo dos sulcos --- */
function casca(R, o) {
  const geo = new THREE.SphereGeometry(1, o.seg || 168, o.an || 118, 0, TAU, 0, o.thMax ?? 2.35);
  const p = geo.attributes.position, n = p.count, cores = new Float32Array(n * 3), manter = new Uint8Array(n);
  const P = o.polo ? o.polo.clone().normalize() : null; let A = null, B = null;
  if (P) { A = (Math.abs(P.y) < 0.9 ? V(0, 1, 0) : V(1, 0, 0)).cross(P).normalize(); B = new THREE.Vector3().crossVectors(P, A); }
  const d = new THREE.Vector3(), q = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    d.fromBufferAttribute(p, i).normalize();
    const m = o.mascara ? cl(o.mascara(d)) : 1;
    let h = m > 0 ? o.h(d) * Math.pow(m, 0.6) : 0, c = 1;
    if (P && h > 0 && o.sulcos) {
      q.copy(d).addScaledVector(P, -d.dot(P)); const lq = q.length();
      if (lq > 1e-4) {
        const az = Math.atan2(q.dot(B), q.dot(A)), longe = cl(lq * 2.6), dist = Math.acos(cl(d.dot(P), -1, 1));
        const fase = 0.7 * Math.sin(az * 3 + 1.3) + (o.onda ? o.onda(d, dist) : 0);
        const s = 0.5 + 0.5 * Math.cos(az * o.sulcos + fase), sulco = Math.pow(s, o.agudo || 5) * longe;
        h *= 1 - (o.prof ?? 0.3) * sulco * cl(m * 1.5); c = 1 - 0.34 * sulco;
      }
    }
    if (o.relevo && m > 0) { const r2 = o.relevo(d); h += r2 * m; c *= 0.82 + 0.36 * cl(r2 / (o.relevoMax || 0.02), 0, 1); }
    c *= 0.94 + 0.12 * ruido(i * 0.173);
    manter[i] = m > 0.002 ? 1 : 0;
    const r = R + (o.base ?? 0.0008) + Math.max(0, h);
    p.setXYZ(i, d.x * r, d.y * r, d.z * r); cores[i * 3] = cores[i * 3 + 1] = cores[i * 3 + 2] = c;
  }
  const ix = geo.index.array, novo = [];
  for (let k = 0; k < ix.length; k += 3) if (manter[ix[k]] || manter[ix[k + 1]] || manter[ix[k + 2]]) novo.push(ix[k], ix[k + 1], ix[k + 2]);
  geo.setIndex(novo); geo.setAttribute("color", new THREE.BufferAttribute(cores, 3)); geo.deleteAttribute("uv");
  if (o.forma) o.forma(geo, R);
  geo.computeVertexNormals();
  return geo;
}
// direção a partir de (th: ângulo a partir do topo, ph: em volta, 0 = frente)
const dirCab = (th, ph) => V(Math.sin(th) * Math.sin(ph), Math.cos(th), Math.sin(th) * Math.cos(ph));
const angDe = (d) => [Math.acos(cl(d.y, -1, 1)), Math.atan2(d.x, d.z)];
// relevo de cachos: soma de calombos em pontos espalhados (Fibonacci) da esfera
function calombos(nPts, raio, amp, semente = 1) {
  const pts = []; for (let i = 0; i < nPts; i++) { const y = 1 - 2 * ((i + 0.5) / nPts), r = Math.sqrt(1 - y * y), ph = i * 2.39996 + semente; pts.push([V(r * Math.sin(ph), y, r * Math.cos(ph)), amp * (0.7 + 0.6 * ruido(i + semente))]); }
  const c2 = Math.cos(raio * 2.2);
  return (d) => { let s = 0; for (const [c, a] of pts) { const k = d.dot(c); if (k < c2) continue; const ang = Math.acos(Math.min(1, k)); s += a * Math.exp(-((ang / raio) ** 2)); } return s; };
}

/* --- mecha esculpida: tubo achatado ao longo de uma curva, com sulcos no comprimento e ponta arredondada --- */
// r(t): raio; o.ach: achatamento (0..1, menor = mais chato); o.ref(p): para onde aponta a face larga; o.sulcos; o.cor
function mecha(pts, r, o = {}) {
  const curva = new THREE.CatmullRomCurve3(pts, false, "centripetal");
  const seg = o.seg || 32, rad = o.rad || 18, ach = o.ach ?? 0.5, nS = o.sulcos ?? 4;
  const fr = curva.computeFrenetFrames(seg, false);
  const pos = [], cor = [], idx = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg, pt = curva.getPointAt(t), tg = fr.tangents[i];
    let nn = fr.normals[i].clone(), bb = fr.binormals[i].clone();
    if (o.ref) { const up = (typeof o.ref === "function" ? o.ref(pt, t) : o.ref).clone(); nn = up.sub(tg.clone().multiplyScalar(up.dot(tg))).normalize(); bb = new THREE.Vector3().crossVectors(tg, nn).normalize(); }
    const rr = (typeof r === "function" ? r(t) : r) * Math.sqrt(cl(t / 0.04)) * Math.sqrt(cl((1 - t) / 0.12));
    const tor = (o.torcao || 0) * t;
    for (let j = 0; j <= rad; j++) {
      const a = (j / rad) * TAU + tor; const ca = Math.cos(a), sa = Math.sin(a);
      const sulco = nS ? Math.pow(0.5 + 0.5 * Math.cos(a * nS * 2 + 0.6), 6) : 0;   // ranhuras nas duas faces
      const k = rr * (1 - 0.16 * sulco);
      const off = nn.clone().multiplyScalar(ca * ach * k).add(bb.clone().multiplyScalar(sa * k));
      pos.push(pt.x + off.x, pt.y + off.y, pt.z + off.z); const c = (o.cor ?? 1) * (1 - 0.3 * sulco) * (0.9 + 0.1 * t); cor.push(c, c, c);
    }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < rad; j++) { const a = i * (rad + 1) + j, b = a + rad + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("color", new THREE.Float32BufferAttribute(cor, 3)); g.setIndex(idx);
  g.computeVertexNormals(); return g;
}
// trança: gomos alternados ao longo da curva
function tranca(pts, r0, r1, n = 11) {
  const curva = new THREE.CatmullRomCurve3(pts, false, "centripetal"); const lista = [];
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n, p = curva.getPointAt(t), tg = curva.getTangentAt(t); const r = lerp(r0, r1, t);
    const gm = new THREE.SphereGeometry(r, 16, 12); gm.scale(1.15, 1.6, 0.9);
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), tg.clone().negate()); const tw = new THREE.Quaternion().setFromAxisAngle(tg, (i % 2 ? 0.55 : -0.55));
    gm.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), i % 2 ? 0.5 : -0.5)); gm.applyQuaternion(q); gm.applyQuaternion(tw); gm.translate(p.x, p.y, p.z);
    lista.push(comCor(gm, 0.92 - (i % 2) * 0.08));
  }
  return juntar(lista);
}

/* --- mãos: palma cheia (caixa arredondada), dedos grossos e juntos, polegar com a base carnuda --- */
function superElipsoide(rx, ry, rz, e = 2.6, seg = 22, seg2 = 16) {
  const g = new THREE.SphereGeometry(1, seg, seg2); const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); const k = Math.pow(Math.pow(Math.abs(x), e) + Math.pow(Math.abs(y), e) + Math.pow(Math.abs(z), e), -1 / e); p.setXYZ(i, x * k * rx, y * k * ry, z * k * rz); }
  g.computeVertexNormals(); return g;
}
function montarMao(hand, lado, pele, peleSom) {
  // punho e palma (palma virada para −X na direita e +X na esquerda; dedos para −Y; indicador do lado +Z)
  mesh(superElipsoide(0.022, 0.024, 0.031, 2.2), pele, hand, 0, -0.008, 0);
  mesh(superElipsoide(0.0205, 0.041, 0.0415, 2.7, 26, 18), pele, hand, lado * 0.002, -0.052, 0.001);
  esf(hand, pele, 0.02, -lado * 0.012, -0.045, 0.026, { s: [0.85, 1.35, 0.9], seg: 16, seg2: 12 });   // base do polegar
  const lista = [];
  [[-0.0285, 0.024, 0.0112], [-0.0095, 0.03, 0.0122], [0.0095, 0.032, 0.0124], [0.0285, 0.029, 0.0118]].forEach(([z, len, r]) => {
    const p1 = new THREE.Group(); p1.position.set(0, -0.088, z); hand.add(p1);
    caps(p1, pele, r, len, 0, -len / 2 + 0.002, 0);
    esf(p1, pele, r * 1.04, lado * 0.003, 0.002, 0, { seg: 12, seg2: 10 });   // nó do dedo
    const p2 = new THREE.Group(); p2.position.y = -len - 0.002; p1.add(p2);
    caps(p2, pele, r * 0.95, len * 0.78, 0, -len * 0.39, 0);
    esf(p2, peleSom, r * 0.62, lado * 0.0072, -len * 0.62, 0, { s: [0.45, 0.8, 1], seg: 10, seg2: 8, cast: false });   // unha
    lista.push({ p1, p2 });
  });
  const t1 = new THREE.Group(); t1.position.set(-lado * 0.014, -0.036, 0.034); t1.rotation.set(0.4, 0, lado * 0.5); hand.add(t1);
  caps(t1, pele, 0.0145, 0.026, 0, -0.018, 0);
  const t2 = new THREE.Group(); t2.position.y = -0.04; t1.add(t2);
  caps(t2, pele, 0.0132, 0.022, 0, -0.013, 0);
  esf(t2, peleSom, 0.008, lado * 0.008, -0.019, 0, { s: [0.45, 0.8, 1], seg: 10, seg2: 8, cast: false });
  lista.push({ p1: t1, p2: t2, polegar: true });
  return lista;
}

/* --- calçados (coordenadas do tornozelo; sola toca o chão em y = −0,076; bico para +Z) --- */
// sola: contorno do pé extrudado para baixo, com borda arredondada
function solaGeo(comp, larg, alt, bisel = 0.007, bico = 1) {
  const s = new THREE.Shape(); const L0 = -0.068, L1 = L0 + comp, w = larg / 2, wc = w * 0.8;
  s.moveTo(0, L0); s.bezierCurveTo(wc * 1.15, L0, wc, L0 + 0.03, wc * 1.02, L0 + 0.06);
  s.bezierCurveTo(w * 1.02, L0 + comp * 0.55, w * 1.08, L1 - 0.05, w * 0.7 * bico, L1 - 0.012);
  s.quadraticCurveTo(0, L1 + 0.008, -w * 0.7 * bico, L1 - 0.012);
  s.bezierCurveTo(-w * 1.08, L1 - 0.05, -w * 1.02, L0 + comp * 0.55, -wc * 1.02, L0 + 0.06);
  s.bezierCurveTo(-wc, L0 + 0.03, -wc * 1.15, L0, 0, L0);
  const g = new THREE.ExtrudeGeometry(s, { depth: alt - 2 * bisel, bevelEnabled: true, bevelThickness: bisel, bevelSize: bisel, bevelSegments: 3, curveSegments: 18 });
  g.rotateX(PI / 2); g.translate(0, -0.076 + alt - bisel, 0); g.computeVertexNormals(); return g;
}
// cabedal: arcos ao longo do pé (largura w(u) e altura h(u)), fechados no bico e no calcanhar;
// o.u0/o.u1 recortam o comprimento, o.a0/o.a1 o arco (painel do cadarço) e o.off afasta da superfície
function cabedalGeo(y0, comp, w, h, o = {}) {
  const NU = o.nu || 44, NA = o.na || 26, pos = [], idx = []; const z0 = -0.07, u0 = o.u0 ?? 0, u1 = o.u1 ?? 1, a0 = o.a0 ?? 0, a1 = o.a1 ?? PI, off = o.off || 0;
  for (let i = 0; i <= NU; i++) {
    const u = lerp(u0, u1, i / NU), z = z0 + comp * u; const fim = Math.sqrt(cl(u / 0.09)) * Math.sqrt(cl((1 - u) / 0.12));
    const ww = w(u) * fim + off, hh = h(u) * Math.pow(fim, 0.6) + off;
    for (let j = 0; j <= NA; j++) { const a = lerp(a0, a1, j / NA); pos.push(Math.cos(a) * ww, y0 + Math.sin(a) * hh, z); }
  }
  for (let i = 0; i < NU; i++) for (let j = 0; j < NA; j++) { const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
// tipos: 0 tênis, 1 cano alto, 2 sapato social, 3 bota, 4 tênis de corrida
function montarCalcado(tipo, M2) {
  const g = new THREE.Group(); const { cor, sola, det, cadarco, faixa } = M2;
  if (tipo === 2) {
    mesh(solaGeo(0.215, 0.083, 0.016, 0.004, 0.8), sola, g);
    const w = (u) => lerp(0.036, 0.041, Math.sin(u * PI)) * (u > 0.8 ? lerp(1, 0.78, (u - 0.8) / 0.2) : 1), h = (u) => lerp(0.07, 0.025, suave(u)) + 0.004;
    mesh(cabedalGeo(-0.062, 0.218, w, h), cor, g);
    mesh(cabedalGeo(-0.062, 0.218, w, h, { u0: 0.36, u1: 0.62, a0: PI / 2 - 0.42, a1: PI / 2 + 0.42, off: 0.0015, nu: 12, na: 10 }), cor, g);
    for (let i = 0; i < 3; i++) { const u = 0.4 + i * 0.07, z = -0.07 + 0.218 * u; bloco(g, det, [-0.012, -0.0012, -0.0014], [0.012, 0.0012, 0.0014], 0.0008).position.set(0, -0.062 + h(u) + 0.002, z); }
    bloco(g, sola, [-0.03, -0.076, -0.07], [0.03, -0.056, -0.025], 0.004);
    return g;
  }
  const alta = tipo === 1 || tipo === 3, corrida = tipo === 4, bota = tipo === 3;
  const sAlt = bota ? 0.032 : corrida ? 0.038 : 0.03;
  mesh(solaGeo(0.228, bota ? 0.094 : 0.09, sAlt, 0.008), sola, g);
  if (faixa) mesh(new THREE.TorusGeometry(1, 0.0032, 6, 64), faixa, g, 0, -0.076 + sAlt * 0.55, 0.046, { rx: PI / 2, s: [0.0462, 0.1175, 1] });
  const y0 = -0.076 + sAlt - 0.004;
  const w = (u) => lerp(0.038, 0.046, Math.sin(u * PI * 0.9)), h = (u) => (bota ? 0.085 : 0.078) * (1 - 0.62 * suave((u - 0.35) / 0.65)) + 0.008;
  mesh(cabedalGeo(y0, 0.226, w, h), cor, g);
  // borracha na ponta (tênis e cano alto) e biqueira branca no cano alto
  if (tipo === 0 || tipo === 1) mesh(cabedalGeo(y0, 0.226, w, (u) => Math.min(h(u), 0.021), { u0: 0.78, off: 0.002, nu: 14 }), sola, g);
  if (tipo === 1) mesh(cabedalGeo(y0, 0.226, w, (u) => h(u) * 0.78, { u0: 0.84, off: 0.0016, nu: 10 }), det, g);
  // painel do cadarço, ilhós e cadarço seguindo a curva do peito do pé
  if (!bota) mesh(cabedalGeo(y0, 0.226, w, h, { u0: 0.3, u1: 0.74, a0: PI / 2 - 0.5, a1: PI / 2 + 0.5, off: 0.0016, nu: 16, na: 10 }), det, g);
  for (let i = 0; i < 4; i++) { const u = 0.36 + i * 0.09, z = -0.07 + 0.226 * u, yy = y0 + h(u) * Math.pow(Math.sqrt(cl(u / 0.09)) * Math.sqrt(cl((1 - u) / 0.12)), 0.6) + 0.004; const ang = Math.atan2(h(u + 0.01) - h(u - 0.01), 0.226 * 0.02);
    bloco(g, cadarco, [-0.02, -0.0022, -0.0034], [0.02, 0.0022, 0.0034], 0.0018, { rx: -ang }).position.set(0, yy, z); }
  esf(g, cor, 0.026, 0, y0 + 0.078, 0.004, { s: [0.92, 0.4, 1.0], seg: 16, seg2: 10 });   // língua
  mesh(new THREE.TorusGeometry(0.036, 0.011, 10, 26), alta ? cor : det, g, 0, y0 + 0.085, -0.024, { rx: PI / 2 + 0.25, s: [1.05, 1.15, 1] });
  esf(g, det, 0.03, 0, y0 + 0.03, -0.06, { s: [1.18, 1.05, 0.42], seg: 16, seg2: 12 });   // reforço do calcanhar
  if (alta) { cil(g, cor, 0.047, 0.05, 0.075, 0, y0 + 0.11, -0.014, { seg: 26 }); mesh(new THREE.TorusGeometry(0.046, 0.009, 8, 26), bota ? cor : det, g, 0, y0 + 0.148, -0.014, { rx: PI / 2 }); if (!bota) esf(g, det, 0.016, 0.047, y0 + 0.098, -0.016, { s: [0.25, 1, 1], seg: 12, seg2: 8 }); }
  if (corrida) for (const s of [-1, 1]) mesh(cabedalGeo(y0, 0.226, w, h, { u0: 0.32, u1: 0.62, a0: s > 0 ? 0.25 : PI - 0.65, a1: s > 0 ? 0.65 : PI - 0.25, off: 0.0014, nu: 12, na: 6 }), faixa || det, g);
  return g;
}
// retângulo de cantos arredondados num THREE.Shape
function rrShape(s, x, y, w, h, r) { s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s; }
