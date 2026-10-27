/* Radar da Carteira: escritório isométrico animado.
   O humor do boneco segue o resultado do dia da carteira.
   Uso: RadarEscritorio.render(elemento, { pct, valor, cor, emoji, nome, fechado }) */
(function () {
  "use strict";
  const S = 30, C = 0.866, ZK = 0.9;          // escala, cos 30°, achatamento da altura
  const X = 12, Y = 10, H = 6.6;               // tamanho da sala (unidades)
  const P = (x, y, z = 0) => [(x - y) * C * S, (x + y) * 0.5 * S - z * S * ZK];
  const pts = (a) => a.map((p) => P(...p).map((n) => n.toFixed(1)).join(",")).join(" ");
  const sombra = (hex, f) => {
    const n = parseInt(hex.slice(1), 16); const k = (v) => Math.max(0, Math.min(255, Math.round(v * f)));
    return "#" + [n >> 16, (n >> 8) & 255, n & 255].map((v) => k(v).toString(16).padStart(2, "0")).join("");
  };
  // Caixa: só as 3 faces visíveis (topo, frente-esquerda +y, frente-direita +x)
  function caixa(x, y, z, w, d, h, cor, o = {}) {
    const t = o.topo || cor, l = o.esq || sombra(cor, 0.84), r = o.dir || sombra(cor, 0.7);
    const st = o.linha === false ? "" : ` stroke="${sombra(cor, 0.55)}" stroke-width=".6" stroke-linejoin="round"`;
    return `<g${o.cls ? ` class="${o.cls}"` : ""}${st}>
      <polygon points="${pts([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]])}" fill="${r}"/>
      <polygon points="${pts([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]])}" fill="${l}"/>
      <polygon points="${pts([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]])}" fill="${t}"/></g>`;
  }
  // Planos para desenhar "em cima" de uma parede/face: u para a direita, v para baixo, em unidades
  const mat = (a, b, p) => `matrix(${(a * S).toFixed(2)} ${(b * S).toFixed(2)} 0 ${(ZK * S).toFixed(2)} ${p[0].toFixed(1)} ${p[1].toFixed(1)})`;
  const planoY = (x, y, zTopo) => mat(C, 0.5, P(x, y, zTopo));     // face virada para +y (parede do fundo à direita)
  const planoX = (x, y, zTopo) => mat(C, -0.5, P(x, y, zTopo));    // face virada para +x (parede da esquerda)
  const em = (x, y, z, conteudo, cls = "") => { const p = P(x, y, z); return `<g transform="translate(${p[0].toFixed(1)} ${p[1].toFixed(1)})"><g class="${cls}">${conteudo}</g></g>`; };

  const HUMORES = {
    triste: { titulo: "Dia difícil", frase: "Respira. Queda de um dia não muda uma boa carteira.", emoji: "😢" },
    preocupado: { titulo: "De olho nos números", frase: "Mercado no vermelho. Nada de decisão no impulso.", emoji: "😟" },
    tranquilo: { titulo: "Dia tranquilo", frase: "Tudo calmo. Hora de uma partida no videogame.", emoji: "😌" },
    feliz: { titulo: "Dia bom!", frase: "Carteira no verde. Bora uma sinuca para comemorar.", emoji: "😄" },
    euforico: { titulo: "Que dia!", frase: "Alta forte! Comemora, mas lembra: longo prazo.", emoji: "🤩" },
  };
  function humorDe(pct, fechado) {
    if (fechado || pct == null || !isFinite(pct)) return "tranquilo";
    if (pct <= -2) return "triste"; if (pct < -0.3) return "preocupado"; if (pct <= 0.3) return "tranquilo"; if (pct < 2) return "feliz"; return "euforico";
  }

  /* ---------- Cenário ---------- */
  function janela(h) {
    const chuva = h === "triste" || h === "preocupado";
    const ceu = h === "triste" ? ["#64748B", "#94A3B8"] : h === "preocupado" ? ["#7C93B5", "#B6C4D8"] : ["#4FA3FF", "#BFE3FF"];
    const gotas = chuva ? Array.from({ length: 14 }, (_, i) => `<line class="of-chuva" x1="${(0.15 + i * 0.17).toFixed(2)}" y1="-.2" x2="${(0.05 + i * 0.17).toFixed(2)}" y2=".15" style="--d:${((i * 0.37) % 1).toFixed(2)}s"/>`).join("") : "";
    return `<g transform="${planoX(0.03, 3.3, 5.1)}">
      <defs><clipPath id="of-jan" clipPathUnits="userSpaceOnUse"><rect x=".1" y=".1" width="2.3" height="2.1"/></clipPath>
      <linearGradient id="of-ceu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${ceu[0]}"/><stop offset="1" stop-color="${ceu[1]}"/></linearGradient></defs>
      <rect x="-.08" y="-.08" width="2.66" height="2.46" rx=".06" fill="#F8FAFC" stroke="#CBD5E1" stroke-width=".04"/>
      <g clip-path="url(#of-jan)"><rect x="0" y="0" width="2.5" height="2.3" fill="url(#of-ceu)"/>
        ${chuva ? "" : `<g class="of-sol"><circle cx="1.85" cy=".62" r=".3" fill="#FDE047"/>${Array.from({ length: 8 }, (_, i) => `<line x1="1.85" y1=".18" x2="1.85" y2=".05" stroke="#FDE047" stroke-width=".05" stroke-linecap="round" transform="rotate(${i * 45} 1.85 .62)"/>`).join("")}</g>`}
        <g class="of-nuvem"><ellipse cx=".7" cy=".75" rx=".42" ry=".2" fill="${chuva ? "#E2E8F0" : "#FFF"}"/><ellipse cx="1" cy=".66" rx=".32" ry=".22" fill="${chuva ? "#E2E8F0" : "#FFF"}"/></g>
        <g class="of-nuvem d2"><ellipse cx="1.7" cy="1.25" rx=".36" ry=".16" fill="${chuva ? "#CBD5E1" : "#FFF"}" opacity=".9"/></g>
        <g stroke="#E0F2FE" stroke-width=".035" stroke-linecap="round">${gotas}</g>
        <path d="M0 1.9 q.4 -.3 .8 -.1 t.9 -.15 t.9 .1 v.6 h-2.6z" fill="${chuva ? "#4B6B5A" : "#4ADE80"}" opacity=".8"/>
      </g>
      <line x1="1.25" y1=".1" x2="1.25" y2="2.2" stroke="#F8FAFC" stroke-width=".07"/><line x1=".1" y1="1.15" x2="2.4" y2="1.15" stroke="#F8FAFC" stroke-width=".07"/>
      <rect x="-.16" y="2.3" width="2.82" height=".12" rx=".03" fill="#E2E8F0"/>
    </g>`;
  }
  function tv(h) {
    let tela;
    if (h === "tranquilo") tela = `<rect width="3" height="1.7" fill="#1E1B4B"/>${Array.from({ length: 12 }, (_, i) => `<circle cx="${(0.2 + i * 0.25).toFixed(2)}" cy="${(0.2 + (i * 0.37) % 0.5).toFixed(2)}" r=".02" fill="#FFF" opacity=".7"/>`).join("")}
      <rect x="0" y="1.45" width="3" height=".25" fill="#22C55E"/><rect x=".9" y="1.05" width=".5" height=".12" fill="#A16207"/><rect x="2" y=".85" width=".5" height=".12" fill="#A16207"/>
      <g class="of-moeda"><circle cx="1.15" cy=".85" r=".07" fill="#FACC15"/></g><g class="of-pulo"><rect x=".35" y="1.18" width=".2" height=".27" rx=".03" fill="#EF4444"/><rect x=".35" y="1.18" width=".2" height=".08" fill="#1D4ED8"/></g>
      <g class="of-inimigo"><ellipse cx="2.4" cy="1.38" rx=".12" ry=".08" fill="#92400E"/></g>`;
    else if (h === "feliz" || h === "euforico") tela = `<rect width="3" height="1.7" fill="#052E16"/><path class="of-tela-linha" d="M.2 1.4 L.7 1.1 L1.1 1.25 L1.6 .8 L2 .95 L2.75 .3" stroke="#4ADE80" stroke-width=".07" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x=".2" y=".42" font-size=".3" font-weight="800" fill="#4ADE80" font-family="system-ui,sans-serif">${h === "euforico" ? "🚀 ALTA FORTE" : "📈 EM ALTA"}</text>`;
    else tela = `<rect width="3" height="1.7" fill="#2A0A0A"/><path class="of-tela-linha" d="M.2 .35 L.7 .6 L1.1 .5 L1.6 1 L2 .9 L2.75 1.4" stroke="#F87171" stroke-width=".07" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect y="1.42" width="3" height=".28" fill="#7F1D1D"/><g class="of-letreiro"><text x="3" y="1.63" font-size=".2" fill="#FECACA" font-family="system-ui,sans-serif" font-weight="700">MERCADO EM QUEDA · IBOV ▼ · DÓLAR ▲ · CALMA, É LONGO PRAZO ·</text></g>`;
    return `<g transform="${planoY(1.25, 0.08, 4.5)}">
      <rect x="-.1" y="-.1" width="3.2" height="1.9" rx=".08" fill="#0F172A"/>
      <defs><clipPath id="of-tvc" clipPathUnits="userSpaceOnUse"><rect width="3" height="1.7" rx=".03"/></clipPath></defs>
      <g clip-path="url(#of-tvc)" class="of-tela">${tela}<rect width="3" height="1.7" fill="url(#of-brilho)"/></g>
      <circle cx="1.5" cy="1.73" r=".03" fill="#22C55E"/>
    </g>`;
  }
  function monitor(h) {
    const verm = h === "triste" || h === "preocupado";
    const cor = verm ? "#EF4444" : "#22C55E";
    const linha = verm ? "M.1 .25 L.5 .4 L.8 .32 L1.2 .7 L1.5 .62 L2 .95" : "M.1 .95 L.5 .75 L.8 .82 L1.2 .45 L1.5 .55 L2 .18";
    return `<g transform="${planoY(7.25, 0.46, 2.72)}">
      <rect x="-.08" y="-.08" width="2.26" height="1.26" rx=".06" fill="#111827"/>
      <rect width="2.1" height="1.1" fill="#0B1220"/>
      ${[0.3, 0.55, 0.8].map((y) => `<line x1="0" x2="2.1" y1="${y}" y2="${y}" stroke="#1E293B" stroke-width=".02"/>`).join("")}
      <path class="of-tela-linha" d="${linha}" stroke="${cor}" stroke-width=".06" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <text x=".12" y=".22" font-size=".16" fill="${cor}" font-weight="800" font-family="ui-monospace,monospace">${verm ? "▼ CARTEIRA" : "▲ CARTEIRA"}</text>
      <rect class="of-cursor" x="1.9" y=".08" width=".05" height=".14" fill="${cor}"/>
    </g>`;
  }
  function quadro() {
    return `<g transform="${planoX(0.03, 7.6, 4.9)}">
      <rect x="-.08" y="-.08" width="3.16" height="1.56" rx=".05" fill="#B45309"/><rect width="3" height="1.4" fill="#FEF3C7"/>
      <text x="1.5" y=".72" font-size=".62" text-anchor="middle">🐂</text>
      <text x="1.5" y="1.18" font-size=".2" text-anchor="middle" font-weight="800" fill="#92400E" font-family="system-ui,sans-serif" letter-spacing=".02">BUY &amp; HOLD</text>
    </g>`;
  }
  function relogio() {
    const d = new Date(); const hr = (d.getHours() % 12) * 30 + d.getMinutes() / 2, mi = d.getMinutes() * 6;
    return `<g transform="${planoY(4.95, 0.04, 5.75)}">
      <circle cx=".45" cy=".45" r=".45" fill="#FFF" stroke="#1E293B" stroke-width=".07"/>
      ${Array.from({ length: 12 }, (_, i) => `<line x1=".45" y1=".08" x2=".45" y2=".14" stroke="#64748B" stroke-width=".03" transform="rotate(${i * 30} .45 .45)"/>`).join("")}
      <line x1=".45" y1=".45" x2=".45" y2=".22" stroke="#1E293B" stroke-width=".05" stroke-linecap="round" transform="rotate(${hr} .45 .45)"/>
      <line x1=".45" y1=".45" x2=".45" y2=".12" stroke="#1E293B" stroke-width=".03" stroke-linecap="round" transform="rotate(${mi} .45 .45)"/>
      <g class="of-seg" style="transform-origin:.45px .45px"><line x1=".45" y1=".5" x2=".45" y2=".1" stroke="#EF4444" stroke-width=".015"/></g>
      <circle cx=".45" cy=".45" r=".035" fill="#1E293B"/>
    </g>`;
  }
  function planta(x, y) {
    const folhas = [[-18, -28, -30], [14, -30, 28], [-6, -38, -8], [6, -34, 12], [-14, -18, -50], [16, -20, 52]]
      .map(([dx, dy, r]) => `<ellipse cx="${dx * 0.5}" cy="${dy * 0.6}" rx="5" ry="13" fill="${r % 2 ? "#16A34A" : "#22C55E"}" transform="rotate(${r} ${dx * 0.5} ${dy * 0.6 + 10})"/>`).join("");
    return caixa(x, y, 0, 0.7, 0.7, 0.75, "#E07A5F") + em(x + 0.35, y + 0.35, 0.75, folhas, "of-folhas");
  }
  function sinuca(semAmarela) {
    const x = 6.9, y = 5.2, w = 4.4, d = 2.7;
    const pernas = [[x + 0.15, y + d - 0.45], [x + w - 0.45, y + d - 0.45], [x + w - 0.45, y + 0.15]].map(([a, b]) => caixa(a, b, 0, 0.3, 0.3, 1.0, "#5B3A1E")).join("");
    const bolas = [...(semAmarela ? [] : [["#FACC15", 9.6, 6.1]]), ["#EF4444", 9.95, 6.3], ["#1D4ED8", 9.95, 5.9], ["#111827", 10.3, 6.1], ["#16A34A", 10.3, 6.5], ["#F97316", 10.3, 5.7]]
      .map(([c, bx, by]) => em(bx, by, 1.32, `<circle r="4.2" fill="${c}"/><circle cx="-1.3" cy="-1.4" r="1.3" fill="#FFF" opacity=".6"/>`)).join("");
    const cacapas = [[x + 0.2, y + 0.2], [x + w - 0.2, y + 0.2], [x + 0.2, y + d - 0.2], [x + w - 0.2, y + d - 0.2], [x + w / 2, y + 0.18], [x + w / 2, y + d - 0.18]]
      .map(([a, b]) => { const p = P(a, b, 1.3); return `<ellipse cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" rx="5.5" ry="3.2" fill="#0B1F12"/>`; }).join("");
    return pernas + caixa(x, y, 1.0, w, d, 0.3, "#7C4A21", { topo: "#8B5A2B" }) + caixa(x + 0.2, y + 0.2, 1.3, w - 0.4, d - 0.4, 0.001, "#15803D", { linha: false }) + cacapas + bolas;
  }
  function sofa(parte) {
    const c = "#0F766E";
    if (parte === "fundo") return caixa(0.05, 3.9, 0, 0.5, 3.6, 2.15, c, { topo: "#14857B" }) + caixa(0.05, 3.5, 0, 1.6, 0.4, 1.35, c, { topo: "#14857B" })
      + caixa(0.55, 3.9, 0, 1.1, 3.6, 0.85, sombra(c, 0.95), { topo: "#1A9488" }) + caixa(0.6, 4.05, 0.85, 0.9, 1.6, 0.18, "#2BB3A3", { linha: false }) + caixa(0.6, 5.75, 0.85, 0.9, 1.6, 0.18, "#2BB3A3", { linha: false })
      + em(0.35, 7.0, 1.6, `<rect x="-9" y="-9" width="18" height="16" rx="5" fill="#FCD34D" transform="rotate(-10)"/>`);
    return caixa(0.05, 7.5, 0, 1.6, 0.4, 1.35, c, { topo: "#14857B" });
  }
  function mesaCentro() {
    return caixa(2.3, 4.6, 0, 1.2, 2.2, 0.62, "#A16207", { topo: "#CA8A04" })
      + em(2.9, 5.0, 0.62, `<rect x="-4" y="-9" width="8" height="9" rx="2" fill="#F8FAFC"/><path d="M4 -7 q4 0 4 3 t-4 3" stroke="#F8FAFC" stroke-width="1.5" fill="none"/><path class="of-vapor" d="M-1 -12 q-2 -3 0 -6 t0 -6" stroke="#CBD5E1" stroke-width="1.3" fill="none" stroke-linecap="round"/>`)
      + em(2.8, 6.1, 0.62, `<rect x="-8" y="-3" width="16" height="4" rx="2" fill="#1F2937"/><circle cx="-4" cy="-1" r="1" fill="#60A5FA"/><circle cx="4" cy="-1" r="1" fill="#F87171"/>`);
  }
  function mesaPc(h) {
    const pern = [[6.3, 1.35], [9.85, 1.35]].map(([a, b]) => caixa(a, b, 0, 0.15, 0.15, 1.15, "#64748B")).join("");
    return pern + caixa(9.0, 0.05, 0, 0.95, 1.3, 1.15, "#E2E8F0") + [0.35, 0.75].map((z) => em(9.95, 0.7, z, `<rect x="-5" y="-1" width="10" height="2" rx="1" fill="#94A3B8"/>`)).join("")
      + caixa(6.2, 0.05, 1.15, 3.9, 1.6, 0.12, "#F1F5F9", { topo: "#F8FAFC" })
      + caixa(8.15, 0.25, 1.27, 0.3, 0.3, 0.45, "#1F2937") + caixa(7.2, 0.3, 1.7, 2.2, 0.16, 1.1, "#111827") + monitor(h)
      + caixa(7.6, 0.85, 1.27, 1.3, 0.4, 0.05, "#CBD5E1", { linha: false }) + caixa(9.15, 0.95, 1.27, 0.25, 0.35, 0.05, "#CBD5E1", { linha: false })
      + em(6.7, 0.9, 1.27, `<rect x="-4" y="-9" width="8" height="9" rx="2" fill="#2457F5"/><path d="M4 -7 q4 0 4 3 t-4 3" stroke="#2457F5" stroke-width="1.5" fill="none"/>`);
  }
  function cadeira(parte) {
    if (parte === "base") return caixa(7.95, 2.5, 0, 0.15, 0.15, 0.75, "#334155") + caixa(7.55, 2.1, 0.75, 1.0, 0.95, 0.16, "#1E293B", { topo: "#334155" });
    return caixa(7.55, 2.95, 0.9, 1.0, 0.14, 1.15, "#1E293B", { topo: "#334155" });
  }
  function estante(trofeu) {
    const livros = [["#EF4444", 0.22], ["#2457F5", 0.18], ["#F59E0B", 0.25], ["#10B981", 0.2], ["#8B5CF6", 0.22]];
    let x = 10.45; let s = "";
    livros.forEach(([c, w], i) => { s += caixa(x, 0.1, 3.35, w, 0.45, 0.55 + (i % 2) * 0.1, c); x += w + 0.03; });
    return caixa(10.3, 0.05, 3.2, 1.55, 0.6, 0.12, "#A16207") + s + (trofeu ? em(11.55, 0.35, 3.32, `<text font-size="13" text-anchor="middle">🏆</text>`) : "");
  }
  function luminaria(acesa) {
    return caixa(0.55, 8.2, 0, 0.1, 0.1, 3.2, "#1F2937") + em(0.6, 8.25, 3.2, `<path d="M-14 0 L-9 -16 H9 L14 0Z" fill="${acesa ? "#FDE68A" : "#E5E7EB"}" stroke="${acesa ? "#D97706" : "#9CA3AF"}" stroke-width="1"/>${acesa ? `<ellipse class="of-luz" cx="0" cy="24" rx="40" ry="34" fill="url(#of-luzg)"/>` : ""}`);
  }


  /* ---------- Boneco articulado: ombro, cotovelo, quadril e joelho, animado quadro a quadro ---------- */
  const PELE = "#F1C19A", PELE2 = "#DDA47C", CABELO = "#4A2F22", CABELO2 = "#6B4532", CALCA = "#334155", SAPATO = "#1F2937";
  const LB = { coxa: 15, canela: 15, braco: 13, ante: 12.5 };
  const rot = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c - v[1] * s, v[0] * s + v[1] * c]; };
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]], sub = (a, b) => [a[0] - b[0], a[1] - b[1]], mul = (a, k) => [a[0] * k, a[1] * k];
  const comp = (v) => Math.hypot(v[0], v[1]) || 1e-6, uni = (v) => mul(v, 1 / comp(v));
  const lerp = (a, b, k) => a + (b - a) * k, lerpV = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
  const cl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const fase = (t, a, b) => cl((t - a) / (b - a));
  const suave = (k) => k * k * (3 - 2 * k);
  const io = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
  const sai = (k) => 1 - Math.pow(1 - k, 3);
  // Cinemática inversa de 2 ossos: devolve [junta, ponta]. lado +1 dobra para a esquerda da direção
  function ik(o, alvo, a, b, lado) {
    let d = sub(alvo, o); let n = comp(d); const max = a + b - 0.05, min = Math.abs(a - b) + 0.05;
    const u = uni(d); n = cl(n, min, max);
    const cosA = cl((a * a + n * n - b * b) / (2 * a * n), -1, 1);
    return [add(o, mul(rot(u, lado * Math.acos(cosA)), a)), add(o, mul(u, n))];
  }
  const f1 = (n) => n.toFixed(1);
  const pathL = (pts) => "M" + pts.map((p) => f1(p[0]) + " " + f1(p[1])).join(" L");

  // Desenho estático do boneco; as partes com data-r são atualizadas a cada quadro
  function bonecoSvg(o) {
    const costas = o.costas;
    const rosto = costas ? `<path d="M-14 1 q-1 -17 14 -17 q15 0 14 17 q-2 7 -14 7.5 q-12 -.5 -14 -7.5z" fill="${CABELO}"/><path d="M-6 -12 q6 -3 12 0" stroke="${CABELO2}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
      : `<path d="M-14.2 -1 q-.8 -15.5 14.2 -15.5 q15 0 14.2 15.5 q-3 -7.4 -9.6 -8.4 q-3.6 3.8 -11.6 3.2 q-5.8 1 -7.2 5.2z" fill="${CABELO}"/><path d="M-4 -13 q5 -2 9 1" stroke="${CABELO2}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path data-r="sob" d="" stroke="#2B1B14" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <g data-r="oA"><ellipse cx="-4.6" cy="1" rx="1.9" ry="2.4" fill="#2B1B14"/><ellipse cx="4.6" cy="1" rx="1.9" ry="2.4" fill="#2B1B14"/><circle data-r="br1" cx="-4" cy=".1" r=".7" fill="#FFF"/><circle data-r="br2" cx="5.2" cy=".1" r=".7" fill="#FFF"/></g>
        <path data-r="oF" d="M-7 1.6 q2.4 -3.4 4.8 0 M2.2 1.6 q2.4 -3.4 4.8 0" stroke="#2B1B14" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path data-r="oZ" d="M-7 1.4 h4.8 M2.2 1.4 h4.8" stroke="#2B1B14" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <ellipse data-r="bochE" cx="-8.2" cy="5.6" rx="2.6" ry="1.5" fill="#F87171" opacity="0"/><ellipse data-r="bochD" cx="8.2" cy="5.6" rx="2.6" ry="1.5" fill="#F87171" opacity="0"/>
        <path data-r="boca" d="" fill="none" stroke="#2B1B14" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        ${o.lagrima ? `<path class="of-lagrima" d="M-5.4 4 q-1.6 2.6 0 3.6 q1.6 -1 0 -3.6z" fill="#60A5FA"/>` : ""}`;
    const braco = (k) => `<path data-r="${k}1" d="" stroke="var(--of-camisa)" stroke-width="7.6" stroke-linecap="round" fill="none"/><path data-r="${k}2" d="" stroke="${PELE}" stroke-width="6" stroke-linecap="round" fill="none"/><circle data-r="${k}m" r="3.9" fill="${PELE}"/>`;
    const pernas = `<path data-r="pe1" d="" stroke="${CALCA}" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path data-r="pd1" d="" stroke="${CALCA}" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <ellipse data-r="se" rx="6" ry="3.3" fill="${SAPATO}"/><ellipse data-r="sd" rx="6" ry="3.3" fill="${SAPATO}"/>`;
    const tronco = `<g data-r="tronco"><path d="M-11.5 2 Q-12.6 -9 -13.4 -19 Q-13.6 -27.5 -6 -28.5 H6 Q13.6 -27.5 13.4 -19 Q12.6 -9 11.5 2 Q0 5 -11.5 2Z" fill="var(--of-camisa)"/>
      <path d="M-11.5 2 Q0 5 11.5 2 L11.4 -1 Q0 2 -11.4 -1Z" fill="#000" opacity=".12"/>
      ${costas ? `<path d="M0 -27 V0" stroke="#000" stroke-opacity=".08" stroke-width="1.4"/>` : `<path d="M-5 -28 q5 5 10 0" stroke="#000" stroke-opacity=".2" stroke-width="1.6" fill="none"/>${o.emoji ? `<text x="0" y="-11" font-size="9.5" text-anchor="middle">${o.emoji}</text>` : ""}`}</g>`;
    const cabeca = `<g data-r="cab"><circle cx="-13" cy="1" r="3.1" fill="${PELE2}"/><circle cx="13" cy="1" r="3.1" fill="${PELE2}"/><circle r="13.6" fill="${PELE}"/>${rosto}</g>`;
    const item = o.item === "taco" ? `<path data-r="taco" d="" stroke="#B7793A" stroke-width="3.2" stroke-linecap="round"/><path data-r="ponta" d="" stroke="#E8F1FF" stroke-width="3.2" stroke-linecap="round"/>`
      : o.item === "controle" ? `<g data-r="ctrl"><rect x="-10" y="-4.5" width="20" height="9" rx="4.5" fill="#1F2937"/><circle cx="-5" cy="0" r="1.4" fill="#60A5FA"/><circle cx="5" cy="0" r="1.4" fill="#F87171"/><circle cx="0" cy="-2" r=".9" fill="#94A3B8"/></g>` : "";
    const bolas = o.item === "taco" ? `<g data-r="bolaB"><circle r="4.3" fill="#FFF" stroke="#CBD5E1" stroke-width=".6"/></g><g data-r="bolaA"><circle r="4.3" fill="#FACC15"/><circle cx="-1.3" cy="-1.4" r="1.3" fill="#FFF" opacity=".6"/></g>` : "";
    const corpo = costas ? `${pernas}${tronco}${braco("be")}${braco("bd")}${cabeca}` : `${pernas}${tronco}${cabeca}${braco("be")}${braco("bd")}${item}`;
    return `<g class="of-rig" style="--of-camisa:${o.cor || "#2457F5"}">${bolas}<ellipse data-r="sombra" cx="0" cy="${o.sentado ? 22 : 0}" rx="16" ry="5" fill="#000" opacity=".16"/><g data-r="corpo">${corpo}</g></g>`;
  }

  // Poses de cada humor em função do tempo (segundos). Coordenadas locais do boneco (pés em 0,0; y para cima é negativo)
  const BOCA = {
    sorriso: () => ["M-4.6 5.6 q4.6 4.6 9.2 0", false],
    leve: () => ["M-3.2 6.2 q3.2 2.2 6.4 0", false],
    reta: () => ["M-3 6.6 h6", false],
    triste: () => ["M-4 8.6 q4 -3.6 8 0", false],
    foco: () => ["M-2.4 6.6 q1.2 -.6 2.4 0 t2.4 0", false],
    aberta: (a = 1) => [`M-5 5 q5 ${f1(4 + 6 * a)} 10 0 z`, true],
  };
  function poseFeliz(t) {
    const T = t % 6.2;
    const BACK = [-1, -43], FRONT = [34, -47.5], BALL = [83, -48];
    const START_E = [12, -36], START_D = [-2, -30];
    const aim = io(fase(T, 0.1, 0.9)) * (1 - io(fase(T, 3.9, 4.5)));
    let lean = 0.4 * aim, hip = [3 * aim, -31 + 1.5 * aim];
    // golpe: deslocamento da mão de trás ao longo do taco
    let s = 0;
    if (T > 1.0 && T < 2.6) s = -9 * (0.5 - 0.5 * Math.cos(2 * Math.PI * (T - 1.0) / 0.8));
    else if (T >= 2.6 && T < 3.25) s = -17 * io(fase(T, 2.6, 3.25));
    else if (T >= 3.25 && T < 3.37) s = lerp(-17, 11, sai(fase(T, 3.25, 3.37)));
    else if (T >= 3.37 && T < 3.9) s = 11;
    const u = uni(sub(FRONT, BACK));
    let e = lerpV(START_E, FRONT, aim), d = lerpV(START_D, add(BACK, mul(u, s)), aim);
    // comemoração: soquinho no ar com a mão direita, taco na esquerda
    const cel = suave(fase(T, 3.95, 4.35)) * (1 - suave(fase(T, 5.4, 6.0)));
    const pump = Math.abs(Math.sin((T - 4.3) * Math.PI / 0.38));
    if (cel > 0) {
      e = lerpV(e, [-13, -36], cel);
      d = lerpV(d, [18, -68 - 12 * (T > 4.3 && T < 5.4 ? pump : 0)], cel);
      lean = lerp(lean, -0.06, cel); hip = lerpV(hip, [0, -31 - 2 * (T > 4.3 && T < 5.4 ? pump : 0)], cel);
    }
    // taco: entre as duas mãos (mira) ou só na esquerda (comemoração)
    const dirDuas = uni(sub(e, d));
    const buttA = sub(d, mul(dirDuas, 14)), tipDist = comp(sub(BALL, BACK)) - 7;
    const tipA = add(sub(d, mul(dirDuas, 0)), mul(dirDuas, tipDist));
    const dirUma = uni([0.22, -1]); const buttB = sub(e, mul(dirUma, 22)), tipB = add(e, mul(dirUma, 66));
    const butt = lerpV(buttA, buttB, cel), tip = lerpV(tipA, tipB, cel);
    // bolas
    const hitK = sai(fase(T, 3.36, 3.75));
    const bolaB = { p: lerpV(BALL, [121, -46.5], hitK), o: T > 5.6 ? 0 : T > 5.3 ? 1 - fase(T, 5.3, 5.6) : 1 };
    if (T < 0.3) bolaB.o = fase(T, 0, 0.3);
    const yk = sai(fase(T, 3.72, 4.35));
    const bolaA = { p: lerpV([131, -45.4], [186, -33.5], yk), o: T < 0.3 ? fase(T, 0, 0.3) : T > 4.2 ? 0 : 1, s: T > 4.1 ? lerp(1, 0.3, fase(T, 4.1, 4.25)) : 1 };
    const feliz = T > 3.8 && T < 5.6;
    return { hip, lean, tilt: feliz ? -0.08 : 0.05 * aim, headDy: 0, maos: { e, d }, pes: { e: [-7, 0], d: [7 + 2 * aim, 0] },
      olhos: feliz ? "F" : "A", olhar: [1.2 * aim, 0.4 * aim], boca: feliz ? BOCA.aberta(0.6 + 0.4 * pump) : aim > 0.5 ? BOCA.foco() : BOCA.sorriso(), boch: feliz ? 0.6 : 0.3,
      taco: { butt, tip }, bolaB, bolaA };
  }
  function poseEuforico(t) {
    const T = t % 3.4;
    let base = [0, 0], hip = [0, -31], lean = 0, tilt = 0, e = [-15, -24], d = [15, -24], pe = [-7, 0], pd = [7, 0], squash = 1;
    if (T < 0.28) { const k = io(fase(T, 0, 0.28)); hip = [0, -31 + 7 * k]; e = [-17, -22 + 4 * k]; d = [17, -22 + 4 * k]; squash = 1 - 0.06 * k; }
    else if (T < 0.8) { const k = fase(T, 0.28, 0.8); base = [0, -30 * 4 * k * (1 - k)]; const up = sai(fase(T, 0.28, 0.45)); hip = [0, -31 + 7 * (1 - up) - 3 * up];
      e = lerpV([-17, -18], [-25, -80], up); d = lerpV([17, -18], [25, -80], up); pe = [-8, -5 * Math.sin(Math.PI * k)]; pd = [8, -5 * Math.sin(Math.PI * k)]; squash = 1 + 0.05 * Math.sin(Math.PI * k); }
    else if (T < 0.98) { const k = fase(T, 0.8, 0.98); hip = [0, -31 + 6 * Math.sin(Math.PI * k)]; e = [-25, -78 + 8 * Math.sin(Math.PI * k)]; d = [25, -78 + 8 * Math.sin(Math.PI * k)]; squash = 1 - 0.07 * Math.sin(Math.PI * k); }
    else {
      const k = (T - 0.98) / 0.6; const lado = Math.floor(k) % 2 ? 1 : -1; const f = k % 1; const b = Math.sin(Math.PI * f);
      base = [lado * 3 * suave(f) - lado * 1.5, -5 * b]; hip = [lado * 2.5, -31 + 2 * (1 - b)]; lean = lado * 0.13 * b; tilt = -lado * 0.12 * b;
      const cima = [lado * 19, -80], meio = [-lado * 15, -50 - 6 * b];
      e = lado < 0 ? cima : meio; d = lado < 0 ? meio : cima;
      if (T < 1.25) { const w = suave(fase(T, 0.98, 1.25)); e = lerpV([-25, -78], e, w); d = lerpV([25, -78], d, w); }
      pe = [-7 + lado * 2, lado > 0 ? -4 * b : 0]; pd = [7 + lado * 2, lado < 0 ? -4 * b : 0];
    }
    return { base, hip, lean, tilt, maos: { e, d }, pes: { e: pe, d: pd }, squash, olhos: "F", boca: BOCA.aberta(0.7 + 0.3 * Math.abs(Math.sin(t * 7))), boch: 0.75 };
  }
  function poseTranquilo(t) {
    const T = t % 5.0;
    const sway = Math.sin(2 * Math.PI * t / 2.4);
    let e = [-5.5, -22], d = [5.5, -22];
    const tap = (k) => Math.max(0, Math.sin(t * 22 + k)) * 1.2;
    e = add(e, [0, -tap(0)]); d = add(d, [0, -tap(2)]);
    const yes = suave(fase(T, 3.4, 3.65)) * (1 - suave(fase(T, 4.2, 4.6)));
    e = lerpV(e, [-8, -36], yes); d = lerpV(d, [8, -36], yes);
    return { hip: [0, -2], lean: 0.05 * sway * (1 - yes) - 0.04 * yes, tilt: 0.07 * sway + 0.08, maos: { e, d }, pes: { e: [-6.5, 22], d: [6.5, 22] }, sentado: true,
      olhos: yes > 0.5 ? "F" : "A", olhar: [1.5, -0.6], boca: yes > 0.3 ? BOCA.aberta(0.8) : BOCA.leve(), boch: yes > 0.3 ? 0.6 : 0.15,
      ctrl: lerpV(e, d, 0.5) };
  }
  function poseTriste(t) {
    const T = t % 7.0;
    const sigh = Math.sin(Math.PI * fase(T, 2.0, 3.4));
    const olha = suave(fase(T, 4.0, 4.5)) * (1 - suave(fase(T, 5.3, 5.9)));
    const cobre = suave(fase(T, 0, 0.4)) * (1 - suave(fase(T, 1.4, 1.9)));
    let e = [-8, -3], d = [8, -3];
    e = lerpV(e, [-5, -39], cobre); d = lerpV(d, [5, -39], cobre);
    return { hip: [0, -2 - 1.5 * sigh], lean: 0.2 - 0.12 * sigh - 0.12 * olha + 0.05 * cobre, tilt: 0.12 - 0.3 * olha + 0.1 * cobre, headDy: 1.5 * (1 - olha),
      maos: { e, d }, pes: { e: [-6.5, 22], d: [6.5, 22] }, sentado: true, olhos: cobre > 0.5 ? "Z" : "A", olhar: olha > 0.3 ? [-1.4, -1.6] : [0, 1.2],
      sob: "triste", boca: BOCA.triste(), boch: 0 };
  }
  function posePreocupado(t) {
    const T = t % 7.0;
    const cab = suave(fase(T, 3.0, 3.4)) * (1 - suave(fase(T, 4.6, 5.0)));
    const perto = suave(fase(T, 5.0, 5.5)) * (1 - suave(fase(T, 6.5, 7.0)));
    const tE = Math.max(0, Math.sin(t * 24)) * 2.2, tD = Math.max(0, Math.sin(t * 24 + 2.2)) * 2.2;
    let e = [17, -27 - tE], d = [29, -31 - tD];
    e = lerpV(e, [-13, -55], cab); d = lerpV(d, [13, -55], cab);
    e = lerpV(e, [14, -24], perto); d = lerpV(d, [31, -28], perto);
    const shake = cab * Math.sin(t * 16) * 0.13;
    return { hip: [0, -2], lean: 0.12 - 0.14 * cab + 0.16 * perto, tilt: shake + 0.1 * perto, headDy: -1 * cab, maos: { e, d }, pes: { e: [-6, 20], d: [6, 20] }, sentado: true, costas: true,
      balao: cab };
  }
  const POSES = { feliz: poseFeliz, euforico: poseEuforico, tranquilo: poseTranquilo, triste: poseTriste, preocupado: posePreocupado };

  // Aplica a pose no SVG do boneco
  function aplicar(g, p, t) {
    const R = g._r || (g._r = Object.fromEntries([...g.querySelectorAll("[data-r]")].map((n) => [n.dataset.r, n])));
    const base = p.base || [0, 0];
    R.corpo.setAttribute("transform", `translate(${f1(base[0])} ${f1(base[1])})`);
    if (R.sombra) { const k = 1 + base[1] / 60; R.sombra.setAttribute("transform", `translate(0 ${f1(-base[1])}) scale(${k.toFixed(3)})`); R.sombra.setAttribute("opacity", (0.16 * k).toFixed(3)); }
    const hip = p.hip, L = p.lean || 0, sq = p.squash || 1;
    R.tronco.setAttribute("transform", `translate(${f1(hip[0])} ${f1(hip[1])}) rotate(${(L * 57.3).toFixed(2)}) scale(${(2 - sq).toFixed(3)} ${sq.toFixed(3)})`);
    const P2 = (v) => add(hip, rot([v[0], v[1] * sq], L));
    const ombE = P2([-11.3, -24]), ombD = P2([11.3, -24]);
    const pesc = P2([0, -28.5]);
    const cabC = add(add(pesc, rot([0, -12.5], L + (p.tilt || 0))), [0, p.headDy || 0]);
    R.cab.setAttribute("transform", `translate(${f1(cabC[0])} ${f1(cabC[1])}) rotate(${(((p.tilt || 0) + L) * 57.3).toFixed(2)})`);
    // pernas
    const qE = add(hip, rot([-5.4, 0], L * 0.3)), qD = add(hip, rot([5.4, 0], L * 0.3));
    const perna = (q, pe, lado, k1, sap) => {
      let joel; if (p.sentado) joel = add(q, [lado * -1.5, p.costas ? 3 : 6]); else joel = ik(q, pe, LB.coxa, LB.canela, lado)[0];
      R[k1].setAttribute("d", pathL([q, joel, pe]));
      R[sap].setAttribute("cx", f1(pe[0] + lado * -1.2)); R[sap].setAttribute("cy", f1(pe[1] + 1));
    };
    perna(qE, p.pes.e, 1, "pe1", "se"); perna(qD, p.pes.d, -1, "pd1", "sd");
    // braços
    const braco = (omb, mao, lado, k) => {
      const [cot, m] = ik(omb, mao, LB.braco, LB.ante, lado);
      R[k + "1"].setAttribute("d", pathL([omb, cot])); R[k + "2"].setAttribute("d", pathL([cot, m]));
      R[k + "m"].setAttribute("cx", f1(m[0])); R[k + "m"].setAttribute("cy", f1(m[1]));
      return m;
    };
    const mE = braco(ombE, p.maos.e, 1, "be"), mD = braco(ombD, p.maos.d, -1, "bd");
    // rosto
    if (R.boca) {
      const piscar = (t % 3.7) > 3.58;
      const ol = piscar && p.olhos === "A" ? "Z" : p.olhos;
      R.oA.style.display = ol === "A" ? "" : "none"; R.oF.style.display = ol === "F" ? "" : "none"; R.oZ.style.display = ol === "Z" ? "" : "none";
      const o = p.olhar || [0, 0]; R.oA.setAttribute("transform", `translate(${f1(o[0])} ${f1(o[1])})`);
      const [bd, cheia] = p.boca; R.boca.setAttribute("d", bd); R.boca.setAttribute("fill", cheia ? "#7A1F1F" : "none");
      R.sob.setAttribute("d", p.sob === "triste" ? "M-7.8 -3 l5 -2.4 M7.8 -3 l-5 -2.4" : p.olhos === "F" ? "M-7.6 -5.4 q2.5 -2 5 0 M2.6 -5.4 q2.5 -2 5 0" : "M-7.4 -4.6 q2.4 -1.2 4.8 0 M2.6 -4.6 q2.4 -1.2 4.8 0");
      R.bochE.setAttribute("opacity", p.boch || 0); R.bochD.setAttribute("opacity", p.boch || 0);
    }
    if (R.taco && p.taco) {
      const { butt, tip } = p.taco; const u = uni(sub(tip, butt));
      R.taco.setAttribute("d", pathL([butt, sub(tip, mul(u, 5))])); R.ponta.setAttribute("d", pathL([sub(tip, mul(u, 5)), tip]));
    }
    if (R.bolaB && p.bolaB) { R.bolaB.setAttribute("transform", `translate(${f1(p.bolaB.p[0])} ${f1(p.bolaB.p[1])})`); R.bolaB.setAttribute("opacity", p.bolaB.o.toFixed(2)); }
    if (R.bolaA && p.bolaA) { R.bolaA.setAttribute("transform", `translate(${f1(p.bolaA.p[0])} ${f1(p.bolaA.p[1])}) scale(${p.bolaA.s.toFixed(2)})`); R.bolaA.setAttribute("opacity", p.bolaA.o.toFixed(2)); }
    if (R.ctrl) { const c = p.ctrl || lerpV(mE, mD, 0.5); R.ctrl.setAttribute("transform", `translate(${f1(c[0])} ${f1(c[1] + 1)}) rotate(${((p.lean || 0) * 30).toFixed(1)})`); }
    if (g._balao) g._balao.style.opacity = (p.balao || 0).toFixed(2), g._balao.style.transform = `translateY(${f1(6 * (1 - (p.balao || 0)))}px)`;
  }

  /* ---------- Decoração liberada pelas recompensas ---------- */
  const DECOR = [
    { id: "cachorro", nome: "Cachorro", e: "🐶", item: "m_bronze", req: "R$ 1 mil investidos" },
    { id: "aquario", nome: "Aquário", e: "🐠", item: "m_prata", req: "R$ 10 mil investidos" },
    { id: "fliperama", nome: "Fliperama", e: "🕹️", item: "m_ouro", req: "R$ 50 mil investidos" },
    { id: "touro", nome: "Touro de ouro", e: "🐂", item: "m_platina", req: "R$ 100 mil investidos" },
    { id: "globo", nome: "Globo de festa", e: "🪩", item: "m_diamante", req: "R$ 500 mil investidos" },
    { id: "cofre", nome: "Cofre de ouro", e: "💰", item: "m_lenda", req: "R$ 1 milhão investido" },
    { id: "porquinho", nome: "Porquinho", e: "🐷", item: "a_saco", req: "Dividend yield de 6% ou mais" },
    { id: "neon", nome: "Neon ₿", e: "🟠", item: "a_foguete", req: "Ter cripto na carteira" },
    { id: "arcoiris", nome: "Neon arco-íris", e: "🌈", item: "a_arcoiris", req: "Diversificação 70 ou mais" },
    { id: "dardos", nome: "Alvo de dardos", e: "🎯", item: "a_alvo", req: "10 ativos ou mais" },
    { id: "trofeu", nome: "Troféu", e: "🏆", item: "a_estrela", req: "30 dias no Radar" },
  ];
  function cachorro(h) {
    const pos = { triste: [2.4, 7.6], preocupado: [6.6, 3.0], tranquilo: [4.3, 6.9], feliz: [6.3, 9.2], euforico: [3.9, 6.2] }[h];
    const deitado = h === "triste" || h === "tranquilo";
    const corpo = deitado
      ? `<ellipse cx="0" cy="-5" rx="13" ry="6" fill="#C08552"/><circle cx="-11" cy="-8" r="6" fill="#C08552"/><ellipse cx="-15.5" cy="-6.5" rx="2.6" ry="2" fill="#3F2A1D"/><path d="M-9 -13 q-3 4 -1 8" stroke="#8B5A35" stroke-width="3.4" stroke-linecap="round" fill="none"/><path d="M-13 -8.5 h2.4" stroke="#2B1B14" stroke-width="1.1" stroke-linecap="round"/>
         <g class="of-rabo d"><path d="M12 -6 q6 -1 7 -6" stroke="#C08552" stroke-width="3" stroke-linecap="round" fill="none"/></g>${h === "tranquilo" ? `<text class="of-zzz" x="-14" y="-18" font-size="9" font-weight="800" fill="#6366F1">z</text><text class="of-zzz d2" x="-9" y="-24" font-size="7" font-weight="800" fill="#6366F1">z</text>` : ""}`
      : `<g class="${h === "euforico" ? "of-cpula" : "of-crespira"}"><rect x="-9" y="-12" width="18" height="10" rx="5" fill="#C08552"/><rect x="-8" y="-4" width="3.6" height="6" rx="1.6" fill="#B07443"/><rect x="4.4" y="-4" width="3.6" height="6" rx="1.6" fill="#B07443"/>
         <g class="of-ccab"><circle cx="-9" cy="-16" r="6.4" fill="#C08552"/><ellipse cx="-14" cy="-14.6" rx="3" ry="2.2" fill="#3F2A1D"/><circle cx="-10" cy="-17.4" r="1.2" fill="#2B1B14"/><path d="M-5.6 -21 q3 4 1 9" stroke="#8B5A35" stroke-width="3.4" stroke-linecap="round" fill="none"/>${h === "euforico" || h === "feliz" ? `<path d="M-13.6 -12.4 q1.4 3 2.8 0" fill="#F87171"/>` : ""}</g>
         <g class="of-rabo"><path d="M8.5 -10 q6 -2 6 -9" stroke="#C08552" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>`;
    return em(pos[0], pos[1], 0, `<ellipse cx="0" cy="0" rx="13" ry="4" fill="#000" opacity=".14"/>${corpo}`, "of-cao");
  }
  function aquario() {
    const peixes = [["#F97316", 0.35, 0.5, 0], ["#FACC15", 0.8, 0.8, 1.6], ["#38BDF8", 0.5, 1.0, 0.8]].map(([c, x, y, d]) => `<g class="of-peixe" style="--d:${d}s"><g transform="translate(${x} ${y})"><ellipse rx=".14" ry=".08" fill="${c}"/><path d="M.12 0 l.1 -.07 v.14z" fill="${c}"/></g></g>`).join("");
    return caixa(0.1, 8.9, 0, 0.95, 1.0, 1.0, "#5B3A1E", { topo: "#7C4A21" }) + caixa(0.12, 8.95, 1.0, 0.9, 0.9, 0.85, "#7DD3FC", { topo: "#BAE6FD", esq: "#7DD3FC", dir: "#38BDF8" })
      + `<g transform="${planoY(0.14, 9.85, 1.82)}" opacity=".9"><rect width=".86" height=".8" fill="#0EA5E9" opacity=".35"/><path d="M.15 .8 q.05 -.3 .1 0 M.6 .8 q.08 -.4 .12 0" stroke="#16A34A" stroke-width=".05" fill="none"/>${peixes}
        <circle class="of-bolha" cx=".7" cy=".7" r=".03" fill="#FFF" opacity=".8"/><circle class="of-bolha d2" cx=".3" cy=".7" r=".025" fill="#FFF" opacity=".8"/></g>`;
  }
  function fliperama() {
    return caixa(10.75, 1.25, 0, 1.05, 0.95, 2.6, "#7C3AED", { topo: "#8B5CF6" }) + caixa(10.75, 2.0, 1.15, 1.05, 0.4, 0.15, "#1F2937")
      + `<g transform="${planoY(10.85, 2.2, 2.45)}"><rect width=".85" height=".7" rx=".04" fill="#111827"/><g class="of-arcade"><rect x=".1" y=".45" width=".14" height=".14" fill="#22C55E"/><circle cx=".55" cy=".25" r=".07" fill="#FACC15"/><rect x=".6" y=".5" width=".12" height=".08" fill="#F43F5E"/></g><rect y="-.35" width=".85" height=".25" fill="#F472B6"/><text x=".42" y="-.17" font-size=".14" text-anchor="middle" font-weight="900" fill="#FFF" font-family="system-ui,sans-serif">ARCADE</text></g>`;
  }
  function touro() {
    return caixa(11.0, 8.6, 0, 0.8, 0.8, 0.9, "#E5E7EB") + em(11.4, 9.0, 0.9, `<text class="of-ouro" y="0" font-size="24" text-anchor="middle">🐂</text>`);
  }
  function globo(h) {
    const c = P(6, 5, H); const spots = h === "euforico" ? Array.from({ length: 9 }, (_, i) => `<ellipse class="of-spot" cx="${f1(P(2.5 + (i * 2.3) % 7, 3 + (i * 1.7) % 5.5)[0])}" cy="${f1(P(2.5 + (i * 2.3) % 7, 3 + (i * 1.7) % 5.5)[1])}" rx="12" ry="7" fill="${["#F43F5E", "#22D3EE", "#FACC15", "#A855F7"][i % 4]}" style="--d:${(i * 0.3).toFixed(1)}s"/>`).join("") : "";
    return `${spots ? `<g opacity=".28" style="filter:blur(3px)">${spots}</g>` : ""}<line x1="${f1(c[0])}" y1="${f1(c[1])}" x2="${f1(c[0])}" y2="${f1(c[1] + 42)}" stroke="#94A3B8" stroke-width="1.2"/>
      <g transform="translate(${f1(c[0])} ${f1(c[1] + 54)})"><circle r="12" fill="#CBD5E1"/><g class="of-globo">${Array.from({ length: 5 }, (_, i) => `<ellipse rx="${12 - i * 2.4}" ry="12" fill="none" stroke="#94A3B8" stroke-width=".7"/>`).join("")}<line x1="-12" x2="12" stroke="#94A3B8" stroke-width=".7"/><line x1="-11" x2="11" y1="-5" y2="-5" stroke="#94A3B8" stroke-width=".7"/><line x1="-11" x2="11" y1="5" y2="5" stroke="#94A3B8" stroke-width=".7"/></g><circle cx="-4" cy="-4" r="3" fill="#FFF" opacity=".8" class="of-brilho2"/></g>`;
  }
  function cofre() {
    return caixa(9.9, 2.9, 0, 1.1, 0.9, 1.2, "#CA8A04", { topo: "#FACC15" }) + `<g transform="${planoY(10.0, 3.8, 1.05)}"><circle cx=".45" cy=".45" r=".2" fill="none" stroke="#713F12" stroke-width=".06"/><line x1=".45" y1=".25" x2=".45" y2=".65" stroke="#713F12" stroke-width=".05"/></g>`
      + em(10.7, 4.2, 0, `<ellipse cx="0" cy="0" rx="8" ry="3" fill="#FACC15"/><ellipse cx="0" cy="-2" rx="8" ry="3" fill="#FDE047" stroke="#CA8A04" stroke-width=".6"/><ellipse cx="9" cy="2" rx="6" ry="2.4" fill="#FDE047" stroke="#CA8A04" stroke-width=".6"/>`);
  }
  const porquinho = () => em(9.6, 1.25, 1.27, `<g class="of-porco"><ellipse cx="0" cy="-6" rx="8" ry="6" fill="#F9A8D4"/><circle cx="-7" cy="-7" r="3" fill="#F472B6"/><rect x="-2" y="-12.5" width="4" height="1.2" rx=".6" fill="#9D174D"/><circle cx="-3" cy="-8" r=".9" fill="#831843"/></g>`);
  const neon = () => `<g transform="${planoX(0.03, 9.6, 4.6)}"><text class="of-neon" x=".6" y=".95" font-size="1" text-anchor="middle" font-weight="900" fill="#FB923C" font-family="system-ui,sans-serif">₿</text></g>`;
  const arcoiris = () => `<g transform="${planoY(1.95, 0.04, 5.95)}" class="of-neon">${["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6"].map((c, i) => `<path d="M${f1(0.15 + i * 0.12)} .95 a${f1(0.75 - i * 0.12)} ${f1(0.75 - i * 0.12)} 0 0 1 ${f1(1.5 - i * 0.24)} 0" stroke="${c}" stroke-width=".08" fill="none" stroke-linecap="round"/>`).join("")}</g>`;
  const dardos = () => `<g transform="${planoX(0.03, 9.75, 3.0)}"><circle cx=".4" cy=".4" r=".4" fill="#111827"/><circle cx=".4" cy=".4" r=".3" fill="#F43F5E"/><circle cx=".4" cy=".4" r=".19" fill="#FEF3C7"/><circle cx=".4" cy=".4" r=".08" fill="#F43F5E"/><line x1=".42" y1=".38" x2=".7" y2=".2" stroke="#1D4ED8" stroke-width=".04"/></g>`;

  /* ---------- Luz e clima de cada humor ---------- */
  const LUZ = {
    triste: { tint: "#9FB0D6", op: 0.38, feixe: "#CBD5E1", fop: 0.12, lamp: false },
    preocupado: { tint: "#FFC58A", op: 0.22, feixe: "#E2E8F0", fop: 0.14, lamp: true, brilho: "#EF4444" },
    tranquilo: { tint: "#C4B5FD", op: 0.18, feixe: "#FFE7A3", fop: 0.25, lamp: true, brilho: "#818CF8" },
    feliz: { tint: "#FFE7A3", op: 0.16, feixe: "#FFE38A", fop: 0.38, lamp: true, brilho: "#22C55E" },
    euforico: { tint: "#F9A8D4", op: 0.2, feixe: "#FFE38A", fop: 0.4, lamp: true, brilho: "#FACC15" },
  };
  function luz(h) {
    const L = LUZ[h];
    const feixe = `<polygon class="of-feixe" points="${pts([[0, 0.9, 0], [0, 3.2, 0], [5.2, 4.6, 0], [5.2, 2.3, 0]])}" fill="${L.feixe}" opacity="${L.fop}"/>`;
    const tvG = em(2.85, 0.1, 3.5, `<ellipse class="of-glow" rx="62" ry="42" fill="${h === "tranquilo" ? "#818CF8" : h === "feliz" || h === "euforico" ? "#22C55E" : "#EF4444"}" opacity=".13" style="filter:blur(6px)"/>`);
    const pcG = em(8.3, 0.4, 2.3, `<ellipse class="of-glow d2" rx="40" ry="26" fill="${h === "triste" || h === "preocupado" ? "#EF4444" : "#22C55E"}" opacity=".12" style="filter:blur(6px)"/>`);
    return { chao: feixe + tvG + pcG, tint: "" };
  }
  function efeitos(h) {
    if (h !== "euforico") return "";
    const cores = ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6", "#A855F7", "#FACC15"];
    return Array.from({ length: 36 }, (_, i) => `<rect class="of-confete" x="${(-270 + ((i * 97) % 560)).toFixed(0)}" y="-200" width="${5 + (i % 3) * 2}" height="${3 + (i % 2) * 3}" rx="1" fill="${cores[i % cores.length]}" style="--d:${((i * 0.29) % 3).toFixed(2)}s;--t:${(2.6 + (i % 5) * 0.4).toFixed(1)}s;--r:${(i % 2 ? 1 : -1) * (200 + (i * 37) % 400)}deg"/>`).join("")
      + Array.from({ length: 6 }, (_, i) => `<text class="of-confete" x="${-220 + i * 85}" y="-200" font-size="17" style="--d:${(i * 0.6).toFixed(2)}s;--t:${(3.8 + (i % 3) * 0.5).toFixed(1)}s;--r:${(i % 2 ? 1 : -1) * 90}deg">💸</text>`).join("");
  }

  const LUGAR = { feliz: [7.4, 8.95, 0], euforico: [5.2, 5.6, 0], tranquilo: [1.3, 5.7, 0.86], triste: [1.3, 5.0, 0.86], preocupado: [8.05, 2.55, 0.92] };
  function cena(h, o, tem) {
    const L = luz(h); const [lx, ly, lz] = LUGAR[h];
    const rig = em(lx, ly, lz, bonecoSvg({ cor: o.cor, emoji: o.emoji, costas: h === "preocupado", sentado: h === "tranquilo" || h === "triste", item: h === "feliz" ? "taco" : h === "tranquilo" ? "controle" : "", lagrima: h === "triste" }), "of-pos");
    const nuvemTriste = em(1.3, 5.0, 4.25, `<g class="of-nuvemcab"><ellipse cx="0" cy="0" rx="20" ry="9" fill="#94A3B8"/><ellipse cx="-9" cy="-5" rx="11" ry="9" fill="#94A3B8"/><ellipse cx="8" cy="-6" rx="12" ry="10" fill="#A8B5C7"/>
      ${[-12, -4, 4, 12].map((dx, i) => `<line class="of-chuvinha" x1="${dx}" y1="9" x2="${dx - 2}" y2="16" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" style="--d:${i * 0.18}s"/>`).join("")}</g>`);
    const balao = em(8.05, 2.55, 0.92, `<g transform="translate(36 -78)"><g data-balao style="opacity:0"><path d="M-17 -30 h34 a8 8 0 0 1 8 8 v8 a8 8 0 0 1 -8 8 h-20 l-9 8 l1 -8 h-6 a8 8 0 0 1 -8 -8 v-8 a8 8 0 0 1 8 -8z" fill="#FFF" stroke="#CBD5E1"/><text x="0" y="-12.5" font-size="15" text-anchor="middle">😰</text></g></g>`);
    let s = "";
    s += `<polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, Y, 0], [0, Y, 0]])}" fill="#D9A066"/>`;
    for (let i = 1; i < Y; i++) s += `<line x1="${P(0, i)[0]}" y1="${P(0, i)[1]}" x2="${P(X, i)[0]}" y2="${P(X, i)[1]}" stroke="#C48A52" stroke-width="1"/>`;
    for (let i = 1; i < X; i += 3) for (let j = 0; j < Y; j++) { const a = P(i + (j % 2) * 1.5, j), b = P(i + (j % 2) * 1.5, j + 1); s += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#C48A52" stroke-width=".8"/>`; }
    s += `<polygon points="${pts([[0, 0, 0], [0, Y, 0], [0, Y, H], [0, 0, H]])}" fill="#E8EEF7"/>`;
    s += `<polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, 0, H], [0, 0, H]])}" fill="#F4F7FB"/>`;
    s += `<polygon points="${pts([[0, 0, 0], [0, Y, 0], [0, Y, 0.28], [0, 0, 0.28]])}" fill="#CBD5E1"/><polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, 0, 0.28], [0, 0, 0.28]])}" fill="#D7DEE8"/>`;
    s += caixa(-0.25, -0.25, H, X + 0.25, 0.25, 0.18, "#CBD5E1", { linha: false }) + caixa(-0.25, 0, H, 0.25, Y, 0.18, "#CBD5E1", { linha: false });
    s += `<polygon points="${pts([[2.6, 3.6, 0], [9.6, 3.6, 0], [9.6, 9.0, 0], [2.6, 9.0, 0]])}" fill="#E0E7FF" stroke="#C7D2FE" stroke-width="3"/>`;
    s += `<polygon points="${pts([[3.1, 4.1, 0], [9.1, 4.1, 0], [9.1, 8.5, 0], [3.1, 8.5, 0]])}" fill="none" stroke="#A5B4FC" stroke-width="1.5" stroke-dasharray="6 5"/>`;
    s += L.chao;
    s += janela(h) + quadro() + tv(h) + relogio() + estante(tem.trofeu);
    if (tem.neon) s += neon(); if (tem.arcoiris) s += arcoiris(); if (tem.dardos) s += dardos();
    s += planta(0.25, 0.25);
    s += caixa(1.25, 0.1, 0, 3.2, 0.7, 1.05, "#334155", { topo: "#475569" }) + caixa(1.6, 0.25, 1.05, 0.7, 0.45, 0.18, "#F8FAFC") + caixa(3.4, 0.3, 1.05, 0.55, 0.4, 0.3, "#111827");
    s += mesaPc(h);
    if (tem.porquinho) s += porquinho();
    if (tem.fliperama) s += fliperama();
    s += cadeira("base");
    if (h === "preocupado") s += rig;
    s += cadeira("encosto");
    if (h === "preocupado") s += balao;
    if (tem.cofre) s += cofre();
    if (tem.cachorro && h === "preocupado") s += cachorro(h);
    s += sofa("fundo");
    if (h === "tranquilo" || h === "triste") s += rig;
    if (h === "triste") s += nuvemTriste;
    s += sofa("frente");
    s += mesaCentro();
    if (tem.cachorro && (h === "triste" || h === "tranquilo" || h === "euforico")) s += cachorro(h);
    s += luminaria(LUZ[h].lamp);
    if (tem.aquario) s += aquario();
    if (h === "euforico") s += rig;
    s += sinuca(h === "feliz");
    if (h === "feliz") s += rig;
    if (tem.cachorro && h === "feliz") s += cachorro(h);
    s += tem.touro ? touro() : planta(11.0, 9.0);
    if (tem.globo) s += globo(h);
    s += L.tint + efeitos(h);
    return s;
  }

  /* ---------- Laço de animação (um só, pausa fora da tela) ---------- */
  const reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ativo = null, raf = 0, t0 = 0;
  function laco(ts) {
    raf = 0; if (!ativo || !ativo.g.isConnected) { ativo = null; return; }
    const pausado = document.hidden || ativo.el.classList.contains("of-pausa");
    if (!pausado) { const t = (ts - t0) / 1000; aplicar(ativo.g, POSES[ativo.h](t), t); }
    raf = requestAnimationFrame(laco);
  }

  function render(el, d) {
    d = d || {};
    const h = humorDe(d.pct, d.fechado); const info = HUMORES[h];
    const v = d.pct == null || !isFinite(d.pct) ? "" : (d.pct > 0 ? "+" : "") + d.pct.toFixed(2).replace(".", ",") + "%";
    const lib = new Set(d.itens || []); const tem = {}; DECOR.forEach((x) => { tem[x.id] = d.tudo || lib.has(x.item); });
    const chave = [h, d.cor, d.emoji, new Date().getMinutes(), Object.values(tem).join("")].join("|");
    if (el.dataset.chave !== chave) {
      el.dataset.chave = chave;
      el.innerHTML = `<div class="of-palco of-h-${h}" style="--of-tint:${LUZ[h].tint};--of-top:${LUZ[h].op}">
        <svg class="of-svg" viewBox="-292 -215 606 540" role="img" aria-label="Escritório: ${info.titulo}">
          <defs><radialGradient id="of-luzg"><stop offset="0" stop-color="#FEF3C7" stop-opacity=".55"/><stop offset="1" stop-color="#FEF3C7" stop-opacity="0"/></radialGradient>
          <linearGradient id="of-brilho" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF" stop-opacity=".14"/><stop offset=".45" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs>
          ${cena(h, d, tem)}
        </svg>
        <div class="of-card"><span class="of-emo">${info.emoji}</span><div><b>${info.titulo}${d.fechado ? " · mercado fechado" : ""}</b><span>${d.fechado ? "Bolsa fechada hoje. Dia de videogame." : info.frase}</span></div>${v ? `<strong class="${d.pct > 0 ? "up" : d.pct < 0 ? "down" : ""}">${v}</strong>` : ""}</div>
      </div>`;
      const g = el.querySelector(".of-rig"); g._balao = el.querySelector("[data-balao]");
      const novo = !ativo || ativo.h !== h;
      ativo = { el, g, h };
      if (novo) t0 = performance.now();
      aplicar(g, POSES[h](reduz ? 0.5 : (performance.now() - t0) / 1000), 0.5);
      if (!reduz && !raf) raf = requestAnimationFrame(laco);
    } else {
      const s = el.querySelector(".of-card strong"); if (s && v) s.textContent = v;
    }
    return h;
  }
  window.RadarEscritorio = { render, humorDe, HUMORES, DECOR };
})();
