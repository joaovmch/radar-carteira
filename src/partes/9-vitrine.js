
/* ---------- vitrine: prévia do boneco no perfil ---------- */
export function vitrine(el, d) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
  el.innerHTML = ""; el.appendChild(r.domElement);
  const sc = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.38;
  sc.add(new THREE.HemisphereLight("#FFFFFF", "#C9B79C", 1.0));
  const sol = new THREE.DirectionalLight("#FFF1DE", 2.0); sol.position.set(1.6, 3.2, 2.4); sol.castShadow = true; sol.shadow.mapSize.set(1024, 1024);
  Object.assign(sol.shadow.camera, { left: -1, right: 1, top: 2.2, bottom: -0.2, near: 0.5, far: 8 }); sc.add(sol);
  const rec = new THREE.DirectionalLight("#C7D7FF", 0.7); rec.position.set(-2, 1.5, -1.5); sc.add(rec);
  const chao = new THREE.Mesh(new THREE.CircleGeometry(0.75, 48), new THREE.ShadowMaterial({ opacity: 0.22 })); chao.rotation.x = -PI / 2; chao.receiveShadow = true; sc.add(chao);
  const b = new Boneco(d.cor, d.icone, d.boneco, d.acessorio); sc.add(b.root); b.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const cam = new THREE.PerspectiveCamera(24, 3 / 4, 0.1, 20);
  const filtro = new Filtro(), vida = new Vida();
  let yaw = -0.35, arrastando = false, x0 = 0, ultimoToque = 0, raf = 0, morto = false;
  const t0 = performance.now(); let tAnt = t0;
  const tam = () => { const w = el.clientWidth || 200, h = el.clientHeight || 260; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  tam(); const ro = new ResizeObserver(tam); ro.observe(el);
  const cv = r.domElement; cv.style.touchAction = "pan-y";
  cv.addEventListener("pointerdown", (e) => { arrastando = true; x0 = e.clientX; try { cv.setPointerCapture(e.pointerId); } catch (_) { /* ok */ } ultimoToque = performance.now(); });
  cv.addEventListener("pointermove", (e) => { if (!arrastando) return; yaw += (e.clientX - x0) * 0.012; x0 = e.clientX; ultimoToque = performance.now(); });
  cv.addEventListener("pointerup", () => { arrastando = false; });
  cv.addEventListener("pointercancel", () => { arrastando = false; });
  function quadro() {
    raf = 0; if (morto) return;
    if (!el.isConnected) { destruir(); return; }
    const agora = performance.now(), T = window.__ofVitT != null ? window.__ofVitT : (agora - t0) / 1000, dt = Math.min(0.05, (agora - tAnt) / 1000); tAnt = agora;
    if (!arrastando && agora - ultimoToque > 2500) yaw += dt * 0.35;
    // ciclo: parado, acena, joinha, sorri
    const c = T % 12; let p;
    if (c < 3.5) p = emPe(T, { olhar: [Math.sin(T * 0.7) * 0.6, 0] });
    else if (c < 6) { const w = jan(c, 3.5, 6, 0.4); p = emPe(T, { aR: [lerp(0, 2.6, w), lerp(0.12, 0.5, w), lerp(0.2, 0.9 + 0.35 * Math.sin(T * 9), w)], boca: w > 0.5 ? "sorriso" : "leve", olhos: w > 0.5 ? "F" : "A", boch: 0.4 * w, nod: -0.05 * w, roll: 0.06 * w }); }
    else if (c < 8.5) { const w = jan(c, 6, 8.5, 0.4); p = emPe(T, { aL: [lerp(0, 1.2, w), lerp(0.12, -0.2, w), lerp(0.2, 1.4, w)], mL: w, boca: "sorriso", boch: 0.3, turn: 0.12 * w, nod: -0.04 * w }); }
    else p = emPe(T, { boca: "sorriso", olhos: "A", boch: 0.25, turn: 0.15 * Math.sin(T * 1.2) });
    b.root.rotation.y = yaw;
    const cab = b.head.getWorldPosition(new THREE.Vector3());
    p = vida.passo(p, { T, dt, humor: "feliz", cabeca: cab, yawCorpo: yaw, alvos: [{ nome: "camera", pos: cam.position.clone(), peso: 2 }, { nome: "lado", pos: V(Math.sin(yaw + 1) * 3, 1.4, Math.cos(yaw + 1) * 3), peso: 1 }], legsLivres: true, nariz: cab.clone().add(V(Math.sin(yaw) * 0.15, -0.02, Math.cos(yaw) * 0.15)) });
    p = filtro.passo(p, dt);
    b.aplicar(p, T, dt); b.desenharRosto(vida.rosto(p, { T, dt, humor: "feliz", facePropria: c >= 3.5 && c < 6 }), T);
    const e = b.esc; const vc = window.__ofVitCam; if (vc) { cam.position.set(0, vc[0], vc[1]); cam.lookAt(0, vc[2], 0); } else { cam.position.set(0, 1.0 * e, 4.2 * (0.6 + 0.4 * e)); cam.lookAt(0, 0.9 * e, 0); }
    r.render(sc, cam);
    raf = requestAnimationFrame(quadro);
  }
  function destruir() {
    if (morto) return; morto = true; if (raf) cancelAnimationFrame(raf); ro.disconnect();
    sc.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    r.dispose(); if (r.domElement.parentNode) r.domElement.remove();
  }
  raf = requestAnimationFrame(quadro);
  return {
    atualizar(n) { b.setAparencia(n.boneco, n.acessorio); b.setCor(n.cor); if (n.icone !== d.icone) b.setIcone(n.icone); d = n; },
    destruir,
  };
}
