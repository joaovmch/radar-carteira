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

  /* ---------- Boneco ---------- */
  const PELE = "#F1C19A", CABELO = "#4A2F22", CALCA = "#334155";
  function rosto(h) {
    const olhos = h === "euforico" || h === "feliz"
      ? `<path d="M-6.5 -64 q2.2 -3 4.4 0 M2.1 -64 q2.2 -3 4.4 0" stroke="#2B1B14" stroke-width="1.8" fill="none" stroke-linecap="round"/>`
      : h === "triste" ? `<g class="of-olhos"><path d="M-7.5 -65 l4.2 -2 M7.5 -65 l-4.2 -2" stroke="#2B1B14" stroke-width="1.4" stroke-linecap="round"/><circle cx="-4.4" cy="-62" r="1.7" fill="#2B1B14"/><circle cx="4.4" cy="-62" r="1.7" fill="#2B1B14"/></g>`
      : h === "preocupado" ? `<g class="of-olhos"><path d="M-7.5 -67 l4.5 -1.4 M7.5 -67 l-4.5 -1.4" stroke="#2B1B14" stroke-width="1.4" stroke-linecap="round"/><circle cx="-4.4" cy="-63" r="1.9" fill="#2B1B14"/><circle cx="4.4" cy="-63" r="1.9" fill="#2B1B14"/></g>`
      : `<g class="of-olhos"><circle cx="-4.4" cy="-63" r="1.9" fill="#2B1B14"/><circle cx="4.4" cy="-63" r="1.9" fill="#2B1B14"/></g>`;
    const boca = h === "euforico" ? `<path d="M-5 -58 q5 7 10 0 z" fill="#7A1F1F"/><path d="M-3 -55.4 q3 1.6 6 0" stroke="#F87171" stroke-width="1.4" fill="none"/>`
      : h === "feliz" ? `<path d="M-4.5 -58 q4.5 4.5 9 0" stroke="#2B1B14" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
      : h === "tranquilo" ? `<path d="M-3.5 -57.6 q3.5 2.2 7 0" stroke="#2B1B14" stroke-width="1.5" fill="none" stroke-linecap="round"/>`
      : h === "preocupado" ? `<path d="M-4.5 -56.8 q1.5 -1.6 3 0 t3 0 t3 0" stroke="#2B1B14" stroke-width="1.4" fill="none" stroke-linecap="round"/>`
      : `<path d="M-4 -55.6 q4 -3.6 8 0" stroke="#2B1B14" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
    const extra = h === "triste" ? `<path class="of-lagrima" d="M-5 -59 q-1.6 2.6 0 3.6 q1.6 -1 0 -3.6z" fill="#60A5FA"/>`
      : h === "preocupado" ? `<path class="of-suor" d="M10.5 -70 q-2 3.2 0 4.4 q2 -1.2 0 -4.4z" fill="#7DD3FC"/>`
      : h === "euforico" || h === "feliz" ? `<ellipse cx="-8" cy="-58.5" rx="2.6" ry="1.5" fill="#F87171" opacity=".55"/><ellipse cx="8" cy="-58.5" rx="2.6" ry="1.5" fill="#F87171" opacity=".55"/>` : "";
    return olhos + boca + extra;
  }
  function cabeca(h, costas) {
    return `<g class="of-cabeca">
      <circle cx="-12.6" cy="-62" r="3" fill="${sombra(PELE, 0.93)}"/><circle cx="12.6" cy="-62" r="3" fill="${sombra(PELE, 0.93)}"/>
      <circle cx="0" cy="-63" r="13" fill="${PELE}"/>
      ${costas ? `<path d="M-13.4 -61 q-1 -16 13.4 -16 q14.4 0 13.4 16 q-2 4 -13.4 4.4 q-11.4 -.4 -13.4 -4.4z" fill="${CABELO}"/>`
               : `<path d="M-13.6 -63 q-.6 -14 13.6 -14 q14 0 13.6 14 q-3 -7 -9 -8 q-3 3.6 -11 3 q-5.4 1 -7.2 5z" fill="${CABELO}"/>${rosto(h)}`}
    </g>`;
  }
  function braco(lado, ang, cls = "", mao = "") {
    const x = lado * 12.5;
    return `<g transform="translate(${x} -46)"><g class="of-braco ${cls}" style="--a:${ang}deg"><rect x="-3.4" y="-1" width="6.8" height="20" rx="3.4" fill="var(--of-camisa)"/><circle cx="0" cy="20" r="3.6" fill="${PELE}"/>${mao}</g></g>`;
  }
  // pose: "pe" | "sentado" | "costas"; centro no chão (ou no assento) em 0,0
  function boneco(h, pose, o = {}) {
    const sent = pose !== "pe";
    const pernas = sent
      ? (pose === "costas" ? `<rect x="-11" y="-24" width="22" height="9" rx="4" fill="${CALCA}"/>`
        : `<rect x="-11" y="-25" width="10" height="13" rx="4" fill="${CALCA}"/><rect x="1" y="-25" width="10" height="13" rx="4" fill="${CALCA}"/>
           <rect x="-10" y="-14" width="8" height="34" rx="3.5" fill="${CALCA}"/><rect x="2" y="-14" width="8" height="34" rx="3.5" fill="${CALCA}"/>
           <ellipse cx="-6" cy="20.5" rx="5.6" ry="3" fill="#1F2937"/><ellipse cx="6" cy="20.5" rx="5.6" ry="3" fill="#1F2937"/>`)
      : `<g class="of-pernas"><rect x="-10" y="-26" width="8.6" height="25" rx="4" fill="${CALCA}"/><rect x="1.4" y="-26" width="8.6" height="25" rx="4" fill="${CALCA}"/>
         <ellipse cx="-6" cy="-.6" rx="6" ry="3.2" fill="#1F2937"/><ellipse cx="6" cy="-.6" rx="6" ry="3.2" fill="#1F2937"/></g>`;
    const tronco = `<path d="M-13.5 -26 v-17 q0 -8 8 -8 h11 q8 0 8 8 v17 q0 3 -3 3 h-21 q-3 0 -3 -3z" fill="var(--of-camisa)"/>
      <path d="M-5 -51 q5 5 10 0" stroke="${sombra("#000000", 1)}" stroke-opacity=".18" stroke-width="1.6" fill="none"/>
      ${!sent || pose === "sentado" ? (o.emoji ? `<text x="0" y="-33" font-size="9.5" text-anchor="middle">${o.emoji}</text>` : "") : ""}`;
    // braços por humor
    let bE = braco(-1, 12), bD = braco(1, -12), item = "";
    if (h === "euforico") { bE = braco(-1, 150, "of-aceno"); bD = braco(1, -150, "of-aceno d2"); }
    else if (h === "feliz") { bE = braco(-1, -52); bD = braco(1, -78); item = `<g class="of-taco"><line x1="-6" y1="-30" x2="64" y2="-50" stroke="#B7793A" stroke-width="3" stroke-linecap="round"/><line x1="58" y1="-48.3" x2="64" y2="-50" stroke="#E8F1FF" stroke-width="3" stroke-linecap="round"/></g>`; }
    else if (h === "tranquilo") { bE = braco(-1, -38); bD = braco(1, 38); item = `<g class="of-controle"><rect x="-9" y="-31" width="18" height="8" rx="4" fill="#1F2937"/><circle cx="-4.4" cy="-27" r="1.3" fill="#60A5FA"/><circle cx="4.4" cy="-27" r="1.3" fill="#F87171"/></g>`; }
    else if (h === "preocupado") { bE = braco(-1, 160, "of-coca"); bD = braco(1, -160, "of-coca d2"); }
    else if (h === "triste") { bE = braco(-1, -25); bD = braco(1, 25); }
    const corpo = pose === "costas" ? `${pernas}${bE}${bD}${tronco}${cabeca(h, true)}` : `${pernas}${tronco}${cabeca(h, false)}${bE}${bD}${item}`;
    return `<g class="of-boneco of-${h} of-${pose}" style="--of-camisa:${o.cor || "#2457F5"}"><ellipse class="of-sombra" cx="0" cy="${pose === "sentado" ? 22 : sent ? 2 : 0}" rx="15" ry="5" fill="#000" opacity=".16"/><g class="of-corpo">${corpo}</g></g>`;
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
  function sinuca() {
    const x = 6.9, y = 5.2, w = 4.4, d = 2.7;
    const pernas = [[x + 0.15, y + d - 0.45], [x + w - 0.45, y + d - 0.45], [x + w - 0.45, y + 0.15]].map(([a, b]) => caixa(a, b, 0, 0.3, 0.3, 1.0, "#5B3A1E")).join("");
    const bolas = [["#FACC15", 9.6, 6.1], ["#EF4444", 9.95, 6.3], ["#1D4ED8", 9.95, 5.9], ["#111827", 10.3, 6.1], ["#16A34A", 10.3, 6.5], ["#F97316", 10.3, 5.7]]
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
  function estante() {
    const livros = [["#EF4444", 0.22], ["#2457F5", 0.18], ["#F59E0B", 0.25], ["#10B981", 0.2], ["#8B5CF6", 0.22]];
    let x = 10.45; let s = "";
    livros.forEach(([c, w], i) => { s += caixa(x, 0.1, 3.35, w, 0.45, 0.55 + (i % 2) * 0.1, c); x += w + 0.03; });
    return caixa(10.3, 0.05, 3.2, 1.55, 0.6, 0.12, "#A16207") + s + em(11.55, 0.35, 3.32, `<text font-size="13" text-anchor="middle">🏆</text>`);
  }
  function luminaria() {
    return caixa(0.55, 8.6, 0, 0.1, 0.1, 3.2, "#1F2937") + em(0.6, 8.65, 3.2, `<path d="M-14 0 L-9 -16 H9 L14 0Z" fill="#FDE68A" stroke="#D97706" stroke-width="1"/><ellipse class="of-luz" cx="0" cy="24" rx="40" ry="34" fill="url(#of-luzg)"/>`);
  }

  function efeitos(h) {
    if (h === "euforico") {
      const cores = ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6", "#A855F7", "#FACC15"];
      const conf = Array.from({ length: 34 }, (_, i) => `<rect class="of-confete" x="${(-270 + ((i * 97) % 560)).toFixed(0)}" y="-200" width="${5 + (i % 3) * 2}" height="${3 + (i % 2) * 3}" rx="1" fill="${cores[i % cores.length]}" style="--d:${((i * 0.29) % 3).toFixed(2)}s;--t:${(2.6 + (i % 5) * 0.4).toFixed(1)}s;--r:${(i % 2 ? 1 : -1) * (200 + (i * 37) % 400)}deg"/>`).join("");
      const notas = Array.from({ length: 7 }, (_, i) => `<text class="of-confete nota" x="${-220 + i * 75}" y="-200" font-size="18" style="--d:${(i * 0.55).toFixed(2)}s;--t:${(3.6 + (i % 3) * 0.5).toFixed(1)}s;--r:${(i % 2 ? 1 : -1) * 120}deg">💸</text>`).join("");
      const luzes = [["#F43F5E", -40], ["#3B82F6", 0], ["#22C55E", 40]].map(([c, a], i) => `<g transform="translate(${P(6, 5, H)[0].toFixed(1)} ${P(6, 5, H)[1].toFixed(1)})"><polygon class="of-holofote" points="0,0 -46,250 46,250" fill="${c}" opacity=".11" style="--a:${a}deg;--d:${i * 0.6}s"/></g>`).join("");
      return { fundo: luzes, frente: conf + notas };
    }
        return { fundo: "", frente: "" };
  }

  function cena(h, o) {
    const B = (pose, x, y, z) => em(x, y, z, boneco(h, pose, o), "of-pos");
    const nuvemTriste = (x, y, z) => em(x, y, z, `<g class="of-nuvemcab"><ellipse cx="0" cy="0" rx="20" ry="9" fill="#94A3B8"/><ellipse cx="-9" cy="-5" rx="11" ry="9" fill="#94A3B8"/><ellipse cx="8" cy="-6" rx="12" ry="10" fill="#A8B5C7"/>
      ${[-12, -4, 4, 12].map((dx, i) => `<line class="of-chuvinha" x1="${dx}" y1="9" x2="${dx - 2}" y2="16" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" style="--d:${i * 0.18}s"/>`).join("")}</g>`);
    const balao = (x, y, z, t) => em(x, y, z, `<g class="of-balao"><path d="M-17 -30 h34 a8 8 0 0 1 8 8 v8 a8 8 0 0 1 -8 8 h-12 l-6 7 l-1 -7 h-15 a8 8 0 0 1 -8 -8 v-8 a8 8 0 0 1 8 -8z" fill="#FFF" stroke="#CBD5E1"/><text x="0" y="-12.5" font-size="15" text-anchor="middle">${t}</text></g>`);
    const bolaBranca = h === "feliz" ? em(8.6, 6.95, 1.32, `<g class="of-bola"><circle r="4.3" fill="#FFF" stroke="#CBD5E1" stroke-width=".6"/></g>`) : "";
    const fx = efeitos(h);
    // Ordem: do fundo para a frente
    let s = "";
    s += `<polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, Y, 0], [0, Y, 0]])}" fill="#D9A066"/>`;
    for (let i = 1; i < Y; i++) s += `<line x1="${P(0, i)[0]}" y1="${P(0, i)[1]}" x2="${P(X, i)[0]}" y2="${P(X, i)[1]}" stroke="#C48A52" stroke-width="1"/>`;
    for (let i = 1; i < X; i += 3) for (let j = 0; j < Y; j++) { const a = P(i + (j % 2) * 1.5, j), b = P(i + (j % 2) * 1.5, j + 1); s += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#C48A52" stroke-width=".8"/>`; }
    s += `<polygon points="${pts([[0, 0, 0], [0, Y, 0], [0, Y, H], [0, 0, H]])}" fill="#E8EEF7"/>`;
    s += `<polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, 0, H], [0, 0, H]])}" fill="#F4F7FB"/>`;
    s += `<polygon points="${pts([[0, 0, 0], [0, Y, 0], [0, Y, 0.28], [0, 0, 0.28]])}" fill="#CBD5E1"/><polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, 0, 0.28], [0, 0, 0.28]])}" fill="#D7DEE8"/>`;
    s += caixa(-0.25, -0.25, H, X + 0.25, 0.25, 0.18, "#CBD5E1", { linha: false }) + caixa(-0.25, 0, H, 0.25, Y, 0.18, "#CBD5E1", { linha: false });
    s += fx.fundo;
    s += `<polygon points="${pts([[2.6, 3.6, 0], [9.6, 3.6, 0], [9.6, 9.0, 0], [2.6, 9.0, 0]])}" fill="#E0E7FF" stroke="#C7D2FE" stroke-width="3"/>`;
    s += `<polygon points="${pts([[3.1, 4.1, 0], [9.1, 4.1, 0], [9.1, 8.5, 0], [3.1, 8.5, 0]])}" fill="none" stroke="#A5B4FC" stroke-width="1.5" stroke-dasharray="6 5"/>`;
    s += janela(h) + quadro() + tv(h) + relogio() + estante();
    s += planta(0.25, 0.25);
    s += caixa(1.25, 0.1, 0, 3.2, 0.7, 1.05, "#334155", { topo: "#475569" }) + caixa(1.6, 0.25, 1.05, 0.7, 0.45, 0.18, "#F8FAFC") + caixa(3.4, 0.3, 1.05, 0.55, 0.4, 0.3, "#111827");
    s += mesaPc(h);
    s += cadeira("base");
    if (h === "preocupado") s += B("costas", 8.05, 2.55, 0.92) + balao(8.6, 2.5, 3.4, "😰");
    s += cadeira("encosto");
    s += sofa("fundo");
    if (h === "tranquilo") s += B("sentado", 1.3, 5.7, 0.86);
    if (h === "triste") s += B("sentado", 1.3, 5.0, 0.86) + nuvemTriste(1.3, 5.0, 4.15);
    s += sofa("frente");
    s += mesaCentro();
    s += luminaria();
    if (h === "euforico") s += B("pe", 5.2, 5.6, 0);
    s += sinuca() + bolaBranca;
    if (h === "feliz") s += B("pe", 7.4, 8.95, 0);
    s += planta(11.0, 9.0);
    s += fx.frente;
    return s;
  }

  function render(el, d) {
    d = d || {};
    const h = humorDe(d.pct, d.fechado); const info = HUMORES[h];
    const v = d.pct == null || !isFinite(d.pct) ? "" : (d.pct > 0 ? "+" : "") + d.pct.toFixed(2).replace(".", ",") + "%";
    const chave = [h, d.cor, d.emoji, new Date().getMinutes()].join("|");
    if (el.dataset.chave !== chave) {
      el.dataset.chave = chave;
      el.innerHTML = `<div class="of-palco of-h-${h}">
        <svg class="of-svg" viewBox="-292 -215 606 540" role="img" aria-label="Escritório: ${info.titulo}">
          <defs><radialGradient id="of-luzg"><stop offset="0" stop-color="#FEF3C7" stop-opacity=".55"/><stop offset="1" stop-color="#FEF3C7" stop-opacity="0"/></radialGradient>
          <linearGradient id="of-brilho" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF" stop-opacity=".14"/><stop offset=".45" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs>
          ${cena(h, d)}
        </svg>
        <div class="of-card"><span class="of-emo">${info.emoji}</span><div><b>${info.titulo}${d.fechado ? " · mercado fechado" : ""}</b><span>${d.fechado ? "Bolsa fechada hoje. Dia de videogame." : info.frase}</span></div>${v ? `<strong class="${d.pct > 0 ? "up" : d.pct < 0 ? "down" : ""}">${v}</strong>` : ""}</div>
      </div>`;
    } else {
      const s = el.querySelector(".of-card strong"); if (s && v) s.textContent = v;
    }
    return h;
  }
  window.RadarEscritorio = { render, humorDe, HUMORES };
})();
