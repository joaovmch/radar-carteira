/* Valoriza+: escritório isométrico animado.
   O humor do boneco segue o resultado do dia da carteira.
   Uso: RadarEscritorio.render(elemento, { pct, valor, cor, emoji, nome, fechado }) */
(function () {
  "use strict";
  const ICG = (n, x, y, t, c) => (window.RI ? window.RI.g(n, x, y, t, c) : "");
  const ICS = (n) => (window.RI ? window.RI.svg(n) : "");
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
    triste: { titulo: "Dia difícil", frase: "Respira. Queda de um dia não muda uma boa carteira.", ic: "smiley-sad" },
    preocupado: { titulo: "De olho nos números", frase: "Mercado no vermelho. Nada de decisão no impulso.", ic: "smiley-nervous" },
    tranquilo: { titulo: "Dia tranquilo", frase: "Tudo calmo. Hora de uma partida no videogame.", ic: "smiley-meh" },
    feliz: { titulo: "Dia bom!", frase: "Carteira no verde. Bora uma sinuca para comemorar.", ic: "smiley" },
    euforico: { titulo: "Que dia!", frase: "Alta forte! Comemora, mas lembra: longo prazo.", ic: "confetti" },
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
      <text x=".2" y=".42" font-size=".3" font-weight="800" fill="#4ADE80" font-family="system-ui,sans-serif">${h === "euforico" ? "ALTA FORTE" : "EM ALTA"}</text>`;
    else tela = `<rect width="3" height="1.7" fill="#2A0A0A"/><path class="of-tela-linha" d="M.2 .35 L.7 .6 L1.1 .5 L1.6 1 L2 .9 L2.75 1.4" stroke="#F87171" stroke-width=".07" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect y="1.42" width="3" height=".28" fill="#7F1D1D"/><g class="of-letreiro"><text x="3" y="1.63" font-size=".2" fill="#FECACA" font-family="system-ui,sans-serif" font-weight="700">MERCADO EM QUEDA · IBOV ▼ · DÓLAR ▲ · CALMA, É LONGO PRAZO ·</text></g>`;
    return `<g transform="${planoY(2.6, 0.08, 4.5)}">
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
    return `<g transform="${planoX(0.03, 6.6, 5.0)}">
      <rect x="-.08" y="-.08" width="3.16" height="1.56" rx=".05" fill="#B45309"/><rect width="3" height="1.4" fill="#FEF3C7"/>
      ${ICG("cow:f", 1.5, .5, .6, "#B45309")}
      <text x="1.5" y="1.18" font-size=".2" text-anchor="middle" font-weight="800" fill="#92400E" font-family="system-ui,sans-serif" letter-spacing=".02">BUY &amp; HOLD</text>
    </g>`;
  }
  function relogio() {
    const d = new Date(); const hr = (d.getHours() % 12) * 30 + d.getMinutes() / 2, mi = d.getMinutes() * 6;
    return `<g transform="${planoY(5.95, 0.04, 5.75)}">
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
    return caixa(10.3, 0.05, 3.2, 1.55, 0.6, 0.12, "#A16207") + s + (trofeu ? em(11.55, 0.35, 3.32, ICG("trophy:f", 0, -5, 13, "#F5B400")) : "");
  }
  const DECOR = [
    { id: "cachorro", nome: "Cachorro", ic: "dog", item: "m_bronze", req: "R$ 1 mil investidos" },
    { id: "aquario", nome: "Aquário", ic: "fish", item: "m_prata", req: "R$ 10 mil investidos" },
    { id: "fliperama", nome: "Fliperama", ic: "joystick", item: "m_ouro", req: "R$ 50 mil investidos" },
    { id: "touro", nome: "Touro de ouro", ic: "cow", item: "m_platina", req: "R$ 100 mil investidos" },
    { id: "globo", nome: "Globo de festa", ic: "disco-ball", item: "m_diamante", req: "R$ 500 mil investidos" },
    { id: "cofre", nome: "Cofre de ouro", ic: "vault", item: "m_lenda", req: "R$ 1 milhão investido" },
    { id: "porquinho", nome: "Porquinho", ic: "piggy-bank", item: "a_saco", req: "Dividend yield de 6% ou mais" },
    { id: "neon", nome: "Neon ₿", ic: "currency-btc", item: "a_foguete", req: "Ter cripto na carteira" },
    { id: "arcoiris", nome: "Neon arco-íris", ic: "rainbow", item: "a_arcoiris", req: "Diversificação 70 ou mais" },
    { id: "dardos", nome: "Alvo de dardos", ic: "target", item: "a_alvo", req: "10 ativos ou mais" },
    { id: "trofeu", nome: "Troféu", ic: "trophy", item: "a_estrela", req: "30 dias no Valoriza+" },
  ];
  function cachorro(h) {
    const pos = CAO[h];
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
    return caixa(11.0, 8.6, 0, 0.8, 0.8, 0.9, "#E5E7EB") + em(11.4, 9.0, 0.9, `<g class="of-ouro">${ICG("cow:f", 0, -8, 24, "#E0A100")}</g>`);
  }
  function globo(h) {
    const c = P(6, 5, H); const spots = h === "euforico" ? Array.from({ length: 9 }, (_, i) => `<ellipse class="of-spot" cx="${f1(P(2.5 + (i * 2.3) % 7, 3 + (i * 1.7) % 5.5)[0])}" cy="${f1(P(2.5 + (i * 2.3) % 7, 3 + (i * 1.7) % 5.5)[1])}" rx="12" ry="7" fill="${["#F43F5E", "#22D3EE", "#FACC15", "#A855F7"][i % 4]}" style="--d:${(i * 0.3).toFixed(1)}s"/>`).join("") : "";
    return `${spots ? `<g opacity=".3">${spots}</g>` : ""}<line x1="${f1(c[0])}" y1="${f1(c[1])}" x2="${f1(c[0])}" y2="${f1(c[1] + 42)}" stroke="#94A3B8" stroke-width="1.2"/>
      <g transform="translate(${f1(c[0])} ${f1(c[1] + 54)})"><circle r="12" fill="#CBD5E1"/><g class="of-globo">${Array.from({ length: 5 }, (_, i) => `<ellipse rx="${12 - i * 2.4}" ry="12" fill="none" stroke="#94A3B8" stroke-width=".7"/>`).join("")}<line x1="-12" x2="12" stroke="#94A3B8" stroke-width=".7"/><line x1="-11" x2="11" y1="-5" y2="-5" stroke="#94A3B8" stroke-width=".7"/><line x1="-11" x2="11" y1="5" y2="5" stroke="#94A3B8" stroke-width=".7"/></g><circle cx="-4" cy="-4" r="3" fill="#FFF" opacity=".8" class="of-brilho2"/></g>`;
  }
  function cofre() {
    return caixa(9.9, 2.9, 0, 1.1, 0.9, 1.2, "#CA8A04", { topo: "#FACC15" }) + `<g transform="${planoY(10.0, 3.8, 1.05)}"><circle cx=".45" cy=".45" r=".2" fill="none" stroke="#713F12" stroke-width=".06"/><line x1=".45" y1=".25" x2=".45" y2=".65" stroke="#713F12" stroke-width=".05"/></g>`
      + em(10.7, 4.2, 0, `<ellipse cx="0" cy="0" rx="8" ry="3" fill="#FACC15"/><ellipse cx="0" cy="-2" rx="8" ry="3" fill="#FDE047" stroke="#CA8A04" stroke-width=".6"/><ellipse cx="9" cy="2" rx="6" ry="2.4" fill="#FDE047" stroke="#CA8A04" stroke-width=".6"/>`);
  }
  const porquinho = () => em(9.6, 1.25, 1.27, `<g class="of-porco"><ellipse cx="0" cy="-6" rx="8" ry="6" fill="#F9A8D4"/><circle cx="-7" cy="-7" r="3" fill="#F472B6"/><rect x="-2" y="-12.5" width="4" height="1.2" rx=".6" fill="#9D174D"/><circle cx="-3" cy="-8" r=".9" fill="#831843"/></g>`);
  const neon = () => `<g transform="${planoX(0.03, 9.6, 4.6)}"><text class="of-neon" x=".6" y=".95" font-size="1" text-anchor="middle" font-weight="900" fill="#FB923C" font-family="system-ui,sans-serif">₿</text></g>`;
  const arcoiris = () => `<g transform="${planoY(3.35, 0.04, 5.95)}" class="of-neon">${["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6"].map((c, i) => `<path d="M${f1(0.15 + i * 0.12)} .95 a${f1(0.75 - i * 0.12)} ${f1(0.75 - i * 0.12)} 0 0 1 ${f1(1.5 - i * 0.24)} 0" stroke="${c}" stroke-width=".08" fill="none" stroke-linecap="round"/>`).join("")}</g>`;
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
    const tvG = em(4.1, 0.1, 3.5, `<ellipse class="of-glow" rx="66" ry="46" fill="url(#of-g-${h === "tranquilo" ? "roxo" : h === "feliz" || h === "euforico" ? "verde" : "verm"})" opacity=".5"/>`);
    const pcG = em(8.3, 0.4, 2.3, `<ellipse class="of-glow d2" rx="44" ry="30" fill="url(#of-g-${h === "triste" || h === "preocupado" ? "verm" : "verde"})" opacity=".45"/>`);
    return { chao: feixe + tvG + pcG, tint: "" };
  }
  function efeitos(h) {
    if (h !== "euforico") return "";
    const cores = ["#F43F5E", "#F59E0B", "#22C55E", "#3B82F6", "#A855F7", "#FACC15"];
    return Array.from({ length: 36 }, (_, i) => `<rect class="of-confete" x="${(-270 + ((i * 97) % 560)).toFixed(0)}" y="-200" width="${5 + (i % 3) * 2}" height="${3 + (i % 2) * 3}" rx="1" fill="${cores[i % cores.length]}" style="--d:${((i * 0.29) % 3).toFixed(2)}s;--t:${(2.6 + (i % 5) * 0.4).toFixed(1)}s;--r:${(i % 2 ? 1 : -1) * (200 + (i * 37) % 400)}deg"/>`).join("")
      + Array.from({ length: 6 }, (_, i) => `<g class="of-confete" style="--d:${(i * 0.6).toFixed(2)}s;--t:${(3.8 + (i % 3) * 0.5).toFixed(1)}s;--r:${(i % 2 ? 1 : -1) * 90}deg">${ICG("money:f", -220 + i * 85, -206, 17, "#16A34A")}</g>`).join("");
  }

  const LUGAR = { feliz: [7.4, 8.95, 0], euforico: [5.2, 5.6, 0], tranquilo: [1.3, 5.7, 0.86], triste: [1.3, 5.0, 0.86], preocupado: [8.05, 2.55, 0.92] };

  /* ---------- Móveis na disposição nova (sofá de frente para a TV) ---------- */
  const SOFA = "#0F766E", SOFA2 = "#14857B", SOFA3 = "#2BB3A3";
  const sofaA = () => caixa(2.1, 3.4, 0, 0.3, 1.3, 1.2, SOFA, { topo: SOFA2 }) + caixa(2.4, 3.5, 0, 3.4, 0.8, 0.8, sombra(SOFA, 0.95), { topo: "#1A9488" })
    + caixa(2.5, 3.55, 0.8, 1.6, 0.7, 0.14, SOFA3, { linha: false }) + caixa(4.15, 3.55, 0.8, 1.6, 0.7, 0.14, SOFA3, { linha: false });
  const sofaB = () => caixa(2.4, 4.3, 0, 3.4, 0.42, 1.85, SOFA, { topo: SOFA2 }) + em(2.75, 4.35, 1.85, `<rect x="-10" y="-14" width="20" height="16" rx="6" fill="#FCD34D" transform="rotate(8)"/>`);
  const sofaC = () => caixa(5.8, 3.4, 0, 0.3, 1.32, 1.2, SOFA, { topo: SOFA2 });
  const POL = "#B45309";
  const poltronaA = () => caixa(0.1, 3.95, 0, 0.42, 1.3, 1.95, POL, { topo: "#C2620F" }) + caixa(0.1, 3.7, 0, 1.3, 0.28, 1.15, POL, { topo: "#C2620F" })
    + caixa(0.52, 3.98, 0, 0.85, 1.24, 0.7, sombra(POL, 0.95), { topo: "#D97706" }) + caixa(0.56, 4.02, 0.7, 0.78, 1.16, 0.14, "#F59E0B", { linha: false });
  const poltronaB = () => caixa(0.1, 5.22, 0, 1.3, 0.28, 1.15, POL, { topo: "#C2620F" });
  function mesaCentro(controle) {
    return caixa(3.3, 1.15, 0, 1.6, 0.72, 0.5, "#A16207", { topo: "#CA8A04" })
      + em(3.65, 1.4, 0.5, `<rect x="-4" y="-9" width="8" height="9" rx="2" fill="#F8FAFC"/><path d="M4 -7 q4 0 4 3 t-4 3" stroke="#F8FAFC" stroke-width="1.5" fill="none"/><path class="of-vapor" d="M-1 -12 q-2 -3 0 -6 t0 -6" stroke="#CBD5E1" stroke-width="1.3" fill="none" stroke-linecap="round"/>`)
      + em(4.45, 1.6, 0.5, `<rect x="-9" y="-3" width="13" height="4" rx="1" fill="#F43F5E" transform="rotate(-8)"/><rect x="-8" y="-6" width="12" height="3" rx="1" fill="#3B82F6" transform="rotate(4)"/>`)
      + (controle ? em(4.1, 1.35, 0.5, `<rect x="-8" y="-3" width="16" height="4" rx="2" fill="#1F2937"/><circle cx="-4" cy="-1" r="1" fill="#60A5FA"/><circle cx="4" cy="-1" r="1" fill="#F87171"/>`) : "");
  }
  const rack = () => caixa(2.45, 0.1, 0, 3.3, 0.7, 1.0, "#334155", { topo: "#475569" }) + caixa(2.75, 0.25, 1.0, 0.7, 0.45, 0.16, "#F8FAFC") + caixa(4.95, 0.28, 1.0, 0.5, 0.4, 0.32, "#111827")
    + em(3.7, 0.75, 0.5, `<rect x="-14" y="-2" width="28" height="3" rx="1.5" fill="#1E293B"/>`);
  function cafeteira() {
    return caixa(0.05, 6.9, 0, 0.8, 1.0, 1.05, "#E2E8F0", { topo: "#F8FAFC" }) + caixa(0.12, 7.1, 1.05, 0.5, 0.55, 0.72, "#1F2937", { topo: "#374151" })
      + em(0.62, 7.35, 1.55, `<circle r="1.5" fill="#22C55E" class="of-led"/>`) + em(0.5, 7.75, 1.05, `<rect x="-3" y="-6" width="6" height="6" rx="1.5" fill="#FFF"/>`)
      + em(0.45, 7.25, 1.05, `<path class="of-vapor" d="M0 -6 q-2 -3 0 -6 t0 -6" stroke="#CBD5E1" stroke-width="1.2" fill="none" stroke-linecap="round"/>`);
  }
  const luminaria2 = (acesa) => caixa(0.5, 5.7, 0, 0.1, 0.1, 3.0, "#1F2937") + em(0.55, 5.75, 3.0, `<path d="M-14 0 L-9 -16 H9 L14 0Z" fill="${acesa ? "#FDE68A" : "#E5E7EB"}" stroke="${acesa ? "#D97706" : "#9CA3AF"}" stroke-width="1"/>${acesa ? `<ellipse class="of-luz" cx="0" cy="26" rx="44" ry="36" fill="url(#of-luzg)"/>` : ""}`);

  /* ---------- Boneco articulado ---------- */
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
  const janelaT = (t, a, b, r = 0.35) => suave(fase(t, a, a + r)) * (1 - suave(fase(t, b - r, b)));   // sobe em a, desce até b
  function ik(o, alvo, a, b, lado) {
    const d = sub(alvo, o); const u = uni(d); const n = cl(comp(d), Math.abs(a - b) + 0.05, a + b - 0.05);
    const cosA = cl((a * a + n * n - b * b) / (2 * a * n), -1, 1);
    return [add(o, mul(rot(u, lado * Math.acos(cosA)), a)), add(o, mul(u, n))];
  }
  const f1 = (n) => n.toFixed(1);
  const pathL = (pts) => "M" + pts.map((p) => f1(p[0]) + " " + f1(p[1])).join(" L");

  function bonecoSvg(o) {
    const braco = (k) => `<path data-r="${k}1" stroke="var(--of-camisa)" stroke-width="7.6" stroke-linecap="round" fill="none"/><path data-r="${k}2" stroke="${PELE}" stroke-width="6" stroke-linecap="round" fill="none"/><circle data-r="${k}m" r="3.9" fill="${PELE}"/>`;
    return `<g class="of-rig" style="--of-camisa:${o.cor || "#2457F5"}"><ellipse data-r="sombra" rx="16" ry="5" fill="#000" opacity=".16"/>
      <g data-r="flip"><g data-r="corpo">
        <g data-r="pernas"><path data-r="pe1" stroke="${CALCA}" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path data-r="pd1" stroke="${CALCA}" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <ellipse data-r="se" rx="6" ry="3.3" fill="${SAPATO}"/><ellipse data-r="sd" rx="6" ry="3.3" fill="${SAPATO}"/></g>
        <g data-r="bracosAtras"></g>
        <g data-r="tronco"><path d="M-11.5 2 Q-12.6 -9 -13.4 -19 Q-13.6 -27.5 -6 -28.5 H6 Q13.6 -27.5 13.4 -19 Q12.6 -9 11.5 2 Q0 5 -11.5 2Z" fill="var(--of-camisa)"/>
          <path d="M-11.5 2 Q0 5 11.5 2 L11.4 -1 Q0 2 -11.4 -1Z" fill="#000" opacity=".12"/>
          <g data-r="peito"><path d="M-5 -28 q5 5 10 0" stroke="#000" stroke-opacity=".2" stroke-width="1.6" fill="none"/>${o.icone ? ICG(o.icone + ":f", 0, -14.5, 9, "rgba(255,255,255,.92)") : ""}</g>
          <path data-r="costasT" d="M0 -27 V0" stroke="#000" stroke-opacity=".08" stroke-width="1.4"/></g>
        <g data-r="cab"><circle cx="-13" cy="1" r="3.1" fill="${PELE2}"/><circle cx="13" cy="1" r="3.1" fill="${PELE2}"/><circle r="13.6" fill="${PELE}"/>
          <g data-r="rosto"><path d="M-14.2 -1 q-.8 -15.5 14.2 -15.5 q15 0 14.2 15.5 q-3 -7.4 -9.6 -8.4 q-3.6 3.8 -11.6 3.2 q-5.8 1 -7.2 5.2z" fill="${CABELO}"/><path d="M-4 -13 q5 -2 9 1" stroke="${CABELO2}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
            <path data-r="sob" stroke="#2B1B14" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <g data-r="oA"><ellipse cx="-4.6" cy="1" rx="1.9" ry="2.4" fill="#2B1B14"/><ellipse cx="4.6" cy="1" rx="1.9" ry="2.4" fill="#2B1B14"/><circle cx="-4" cy=".1" r=".7" fill="#FFF"/><circle cx="5.2" cy=".1" r=".7" fill="#FFF"/></g>
            <path data-r="oF" d="M-7 1.6 q2.4 -3.4 4.8 0 M2.2 1.6 q2.4 -3.4 4.8 0" stroke="#2B1B14" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <path data-r="oZ" d="M-7 1.4 h4.8 M2.2 1.4 h4.8" stroke="#2B1B14" stroke-width="1.6" fill="none" stroke-linecap="round"/>
            <ellipse data-r="bochE" cx="-8.2" cy="5.6" rx="2.6" ry="1.5" fill="#F87171" opacity="0"/><ellipse data-r="bochD" cx="8.2" cy="5.6" rx="2.6" ry="1.5" fill="#F87171" opacity="0"/>
            <path data-r="boca" stroke="#2B1B14" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path data-r="lagr" class="of-lagrima" d="M-5.4 4 q-1.6 2.6 0 3.6 q1.6 -1 0 -3.6z" fill="#60A5FA"/></g>
          <g data-r="nuca"><path d="M-14 1 q-1 -17 14 -17 q15 0 14 17 q-2 7 -14 7.5 q-12 -.5 -14 -7.5z" fill="${CABELO}"/><path d="M-6 -12 q6 -3 12 0" stroke="${CABELO2}" stroke-width="1.6" fill="none" stroke-linecap="round"/></g></g>
        <g data-r="bracos">${braco("be")}${braco("bd")}
          <path data-r="taco" stroke="#B7793A" stroke-width="3.2" stroke-linecap="round"/><path data-r="ponta" stroke="#E8F1FF" stroke-width="3.2" stroke-linecap="round"/>
          <g data-r="ctrl"><rect x="-10" y="-4.5" width="20" height="9" rx="4.5" fill="#1F2937"/><circle cx="-5" cy="0" r="1.4" fill="#60A5FA"/><circle cx="5" cy="0" r="1.4" fill="#F87171"/></g>
          <g data-r="xic"><rect x="-4" y="-8" width="8" height="9" rx="2" fill="#FFF" stroke="#CBD5E1" stroke-width=".6"/><path d="M4 -6 q4 0 4 3 t-4 3" stroke="#FFF" stroke-width="1.6" fill="none"/></g>
          <g data-r="giz"><rect x="-2.6" y="-2.6" width="5.2" height="5.2" rx="1" fill="#3B82F6"/></g>
          <g data-r="nota"><rect x="-7" y="-4" width="14" height="8" rx="1.2" fill="#86EFAC" stroke="#16A34A" stroke-width=".8"/><circle r="2" fill="none" stroke="#16A34A" stroke-width=".8"/></g></g>
      </g></g>
      <g data-r="nuvem"><g class="of-nuvemcab"><ellipse cx="0" cy="0" rx="20" ry="9" fill="#94A3B8"/><ellipse cx="-9" cy="-5" rx="11" ry="9" fill="#94A3B8"/><ellipse cx="8" cy="-6" rx="12" ry="10" fill="#A8B5C7"/>
        ${[-12, -4, 4, 12].map((dx, i) => `<line class="of-chuvinha" x1="${dx}" y1="9" x2="${dx - 2}" y2="16" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" style="--d:${i * 0.18}s"/>`).join("")}</g></g>
      <g data-r="balao"><path d="M-17 -30 h34 a8 8 0 0 1 8 8 v8 a8 8 0 0 1 -8 8 h-20 l-9 8 l1 -8 h-6 a8 8 0 0 1 -8 -8 v-8 a8 8 0 0 1 8 -8z" fill="#FFF" stroke="#CBD5E1"/><g data-r="balaoT"></g></g>
    </g>`;
  }

  const BOCA = {
    sorriso: () => ["M-4.6 5.6 q4.6 4.6 9.2 0", false], leve: () => ["M-3.2 6.2 q3.2 2.2 6.4 0", false], reta: () => ["M-3 6.6 h6", false],
    triste: () => ["M-4 8.6 q4 -3.6 8 0", false], foco: () => ["M-2.4 6.6 q1.2 -.6 2.4 0 t2.4 0", false],
    aberta: (a = 1) => [`M-5 5 q5 ${f1(4 + 6 * a)} 10 0 z`, true], o: (a = 1) => [`M-2.4 6.6 a2.4 ${f1(1.6 + 1.8 * a)} 0 1 0 4.8 0 a2.4 ${f1(1.6 + 1.8 * a)} 0 1 0 -4.8 0`, true],
  };

  // Aplica a pose no SVG
  function aplicar(g, p, t) {
    const R = g._r || (g._r = Object.fromEntries([...g.querySelectorAll("[data-r]")].map((n) => [n.dataset.r, n])));
    const costas = p.vista === "costas";
    if (g._vista !== p.vista) {      // muda a ordem: de costas os braços ficam atrás do tronco
      g._vista = p.vista;
      (costas ? R.bracosAtras : R.corpo).appendChild(R.bracos);
      if (!costas) R.corpo.appendChild(R.bracos);
      R.rosto.style.display = costas ? "none" : ""; R.nuca.style.display = costas ? "" : "none";
      R.peito.style.display = costas ? "none" : ""; R.costasT.style.display = costas ? "" : "none";
    }
    R.flip.setAttribute("transform", p.flip === -1 ? "scale(-1 1)" : "");
    const base = p.base || [0, 0];
    R.corpo.setAttribute("transform", `translate(${f1(base[0])} ${f1(base[1])})`);
    const sy = p.sentado ? 22 : 0; const k = 1 + base[1] / 60;
    R.sombra.setAttribute("transform", `translate(${f1(base[0] * (p.flip || 1))} ${sy}) scale(${k.toFixed(3)})`); R.sombra.setAttribute("opacity", (0.16 * k).toFixed(3));
    const hip = p.hip, L = p.lean || 0, sq = p.squash || 1;
    R.tronco.setAttribute("transform", `translate(${f1(hip[0])} ${f1(hip[1])}) rotate(${(L * 57.3).toFixed(2)}) scale(${(2 - sq).toFixed(3)} ${sq.toFixed(3)})`);
    const P2 = (v) => add(hip, rot([v[0], v[1] * sq], L));
    const ombE = P2([-11.3, -24]), ombD = P2([11.3, -24]), pesc = P2([0, -28.5]);
    const cabC = add(add(pesc, rot([0, -12.5], L + (p.tilt || 0))), [0, p.headDy || 0]);
    R.cab.setAttribute("transform", `translate(${f1(cabC[0])} ${f1(cabC[1])}) rotate(${(((p.tilt || 0) + L) * 57.3).toFixed(2)})`);
    const qE = add(hip, rot([-5.4, 0], L * 0.3)), qD = add(hip, rot([5.4, 0], L * 0.3));
    const perna = (q, pe, lado, k1, sap) => {
      const joel = p.sentado ? add(q, [lado * -1.5 + (pe[0] - q[0]) * 0.25, costas ? 3 : 6]) : ik(q, pe, LB.coxa, LB.canela, lado)[0];
      R[k1].setAttribute("d", pathL([q, joel, pe]));
      R[sap].setAttribute("cx", f1(pe[0] + lado * -1.2)); R[sap].setAttribute("cy", f1(pe[1] + 1));
    };
    perna(qE, p.pes.e, 1, "pe1", "se"); perna(qD, p.pes.d, -1, "pd1", "sd");
    const braco = (omb, mao, lado, k2) => {
      const [cot, m] = ik(omb, mao, LB.braco, LB.ante, lado);
      R[k2 + "1"].setAttribute("d", pathL([omb, cot])); R[k2 + "2"].setAttribute("d", pathL([cot, m]));
      R[k2 + "m"].setAttribute("cx", f1(m[0])); R[k2 + "m"].setAttribute("cy", f1(m[1]));
      return m;
    };
    const mE = braco(ombE, p.maos.e, 1, "be"), mD = braco(ombD, p.maos.d, -1, "bd");
    // rosto
    const piscar = (t % 3.9) > 3.76;
    const ol = piscar && p.olhos === "A" ? "Z" : p.olhos || "A";
    R.oA.style.display = ol === "A" ? "" : "none"; R.oF.style.display = ol === "F" ? "" : "none"; R.oZ.style.display = ol === "Z" ? "" : "none";
    const o = p.olhar || [0, 0]; R.oA.setAttribute("transform", `translate(${f1(o[0])} ${f1(o[1])})`);
    const [bd, cheia] = p.boca || BOCA.leve(); R.boca.setAttribute("d", bd); R.boca.setAttribute("fill", cheia ? "#7A1F1F" : "none");
    R.sob.setAttribute("d", p.sob === "triste" ? "M-7.8 -3 l5 -2.4 M7.8 -3 l-5 -2.4" : p.sob === "tenso" ? "M-7.8 -5.6 l5 1.4 M7.8 -5.6 l-5 1.4" : ol === "F" ? "M-7.6 -5.4 q2.5 -2 5 0 M2.6 -5.4 q2.5 -2 5 0" : "M-7.4 -4.6 q2.4 -1.2 4.8 0 M2.6 -4.6 q2.4 -1.2 4.8 0");
    R.bochE.setAttribute("opacity", p.boch || 0); R.bochD.setAttribute("opacity", p.boch || 0);
    R.lagr.style.display = p.lagrima ? "" : "none";
    // objetos na mão
    const it = p.item || "";
    let taco = p.taco;
    if (it === "tacoUma") taco = { butt: add(mE, [-2, 20]), tip: add(mE, [5, -62]) };
    const mostraTaco = !!taco && (it === "taco" || it === "tacoUma");
    R.taco.style.display = R.ponta.style.display = mostraTaco ? "" : "none";
    if (mostraTaco) { const u = uni(sub(taco.tip, taco.butt)); R.taco.setAttribute("d", pathL([taco.butt, sub(taco.tip, mul(u, 5))])); R.ponta.setAttribute("d", pathL([sub(taco.tip, mul(u, 5)), taco.tip])); }
    R.ctrl.style.display = it === "controle" ? "" : "none";
    if (it === "controle") { const c = lerpV(mE, mD, 0.5); R.ctrl.setAttribute("transform", `translate(${f1(c[0])} ${f1(c[1] + 1)}) rotate(${(L * 30).toFixed(1)})`); }
    R.xic.style.display = it === "xicara" ? "" : "none"; if (it === "xicara") R.xic.setAttribute("transform", `translate(${f1(mD[0])} ${f1(mD[1] + 2)})`);
    R.giz.style.display = p.giz ? "" : "none"; if (p.giz) R.giz.setAttribute("transform", `translate(${f1(mE[0])} ${f1(mE[1] - 2)})`);
    R.nota.style.display = it === "nota" ? "" : "none"; if (it === "nota") R.nota.setAttribute("transform", `translate(${f1(mD[0])} ${f1(mD[1] - 3)}) rotate(-20)`);
    const fl = p.flip || 1, topo = add(add(cabC, base), [0, -34]);
    R.nuvem.style.display = p.nuvem ? "" : "none"; if (p.nuvem) R.nuvem.setAttribute("transform", `translate(${f1(topo[0] * fl)} ${f1(topo[1])})`);
    const b = p.balao || 0; R.balao.style.display = b > 0.01 ? "" : "none";
    if (b > 0.01) { R.balao.setAttribute("transform", `translate(${f1(cabC[0] * fl + 30)} ${f1(cabC[1] - 6 + 6 * (1 - b))})`); R.balao.setAttribute("opacity", b.toFixed(2)); if (p.balaoT && R.balaoT.dataset.ic !== p.balaoT) { R.balaoT.dataset.ic = p.balaoT; R.balaoT.innerHTML = ICG(p.balaoT, 0, -18, 14, p.balaoT === "chart-line-down" ? "#DC2626" : "#F59E0B"); } }
  }

  /* ---------- Poses ---------- */
  const resp = (T) => Math.sin(T * 2 * Math.PI / 3.8);
  const emPe = (T, o = {}) => ({ hip: [0, -31 + 0.5 * resp(T)], lean: 0, tilt: 0.025 * Math.sin(T * 0.8), maos: { e: [-13.5, -31 + 0.4 * resp(T)], d: [13.5, -31 + 0.4 * resp(T)] }, pes: { e: [-6, 0], d: [6, 0] }, ...o });
  const sentCostas = (T, o = {}) => ({ hip: [0, -2 + 0.4 * resp(T)], lean: 0.04, tilt: 0, maos: { e: [-13, -6], d: [13, -6] }, pes: { e: [-6, 20], d: [6, 20] }, sentado: true, ...o });
  const sentFrente = (T, o = {}) => ({ hip: [0, -2 + 0.4 * resp(T)], lean: 0.05, tilt: 0, maos: { e: [-7, -3], d: [9, -3] }, pes: { e: [3, 25], d: [15, 27] }, sentado: true, ...o });
  // andar: d = distância (unidades)
  function poseAndar(d, est, T) {
    const corre = est === "corre", tri = est === "triste";
    const ph = d / (corre ? 0.85 : 0.6) * Math.PI;
    const s = Math.sin(ph), c = Math.cos(ph);
    const lift = corre ? 6.5 : tri ? 2.2 : 3.8, sw = corre ? 8 : tri ? 2 : 5;
    const bob = Math.abs(c) * (corre ? 3.2 : 1.6);
    return {
      hip: [s * 0.9, -31 + bob - (corre ? 2 : 0) + (tri ? 1.5 : 0)], lean: tri ? 0.14 : corre ? 0.08 : 0.02, tilt: tri ? 0.16 : -0.025 * s, headDy: tri ? 2.2 : 0,
      maos: { e: [-13.5 - (corre ? 3 : 0), -31 + s * sw * 0.55 - (corre ? 10 : 0) + (tri ? 2 : 0)], d: [13.5 + (corre ? 3 : 0), -31 - s * sw * 0.55 - (corre ? 10 : 0) + (tri ? 2 : 0)] },
      pes: { e: [-5.5, -Math.max(0, s) * lift + 1.4 * c], d: [5.5, -Math.max(0, -s) * lift - 1.4 * c] },
    };
  }
  // tacada de sinuca (tempo local 0..5.6)
  const BACK = [-1, -43], FRONT = [34, -47.5], BALL = [83, -48], START_E = [12, -36], START_D = [-2, -30];
  function poseTacada(T) {
    const aim = io(fase(T, 0.2, 1.1)) * (1 - io(fase(T, 4.4, 5.4)));
    let s = 0;
    if (T > 1.3 && T < 2.9) s = -9 * (0.5 - 0.5 * Math.cos(2 * Math.PI * (T - 1.3) / 0.8));
    else if (T >= 2.9 && T < 3.6) s = -17 * io(fase(T, 2.9, 3.6));
    else if (T >= 3.6 && T < 3.72) s = lerp(-17, 11, sai(fase(T, 3.6, 3.72)));
    else if (T >= 3.72) s = 11 * (1 - fase(T, 4.3, 5.0));
    const u = uni(sub(FRONT, BACK));
    const e = lerpV(START_E, FRONT, aim), d = lerpV(START_D, add(BACK, mul(u, s)), aim);
    const dir = uni(sub(e, d)), tipDist = comp(sub(BALL, BACK)) - 7;
    const hitK = sai(fase(T, 3.71, 4.15)), yk = sai(fase(T, 4.05, 4.75));
    const olhaBola = fase(T, 3.75, 4.6);
    return { hip: [3 * aim, -31 + 1.5 * aim], lean: 0.4 * aim, tilt: 0.05 * aim, maos: { e, d }, pes: { e: [-7, 0], d: [7 + 2 * aim, 0] },
      olhar: [1.2 * aim + 1.2 * olhaBola, 0.4 * aim], boca: aim > 0.5 && T < 3.8 ? BOCA.foco() : BOCA.sorriso(), sob: aim > 0.6 && T < 3.7 ? "tenso" : "", boch: 0.2,
      item: "taco", taco: { butt: sub(d, mul(dir, 14)), tip: add(d, mul(dir, tipDist)) },
      bolas: { B: lerpV(BALL, [121, -46.5], hitK), A: lerpV([131, -45.4], [186, -33.5], yk), Ao: T > 4.62 ? 0 : 1, As: T > 4.5 ? lerp(1, 0.3, fase(T, 4.5, 4.62)) : 1 } };
  }

  /* ---------- Roteiros (cada humor é uma rotina longa que se repete) ---------- */
  const SOFA_P = [4.1, 3.0, 0], SOFA_S = [4.1, 3.85, 0.92], CAD_P = [8.05, 3.5, 0], CAD_S = [8.05, 2.55, 0.92], POL_P = [1.8, 4.6, 0], POL_S = [1.12, 4.6, 0.84];
  const CAFE_P = [1.5, 7.4, 0], JAN_P = [0.95, 2.05, 0], SIN_P = [7.4, 8.95, 0], DAN_P = [4.4, 6.9, 0], MON_P = [9.35, 2.3, 0];
  const A = (vel, via, x = {}) => ({ tipo: "andar", vel, via, ...x });
  const F = (dur, pose, x = {}) => ({ tipo: "acao", dur, pose, ...x });
  const sentarDe = (fim, dePe, sent) => (k, tl, T) => { const w = suave(k); const a = dePe(T), b = sent(T); const r = mistura(a, b, w); r.sentado = w > 0.5; if (!r.sentado) { r.hip = [r.hip[0], lerp(-31, -16, w * 2)]; r.lean = (r.lean || 0) + 0.25 * Math.sin(Math.PI * k); } return r; };
  const levantarDe = (dePe, sent) => (k, tl, T) => { const w = 1 - suave(k); const r = mistura(dePe(T), sent(T), w); r.sentado = w > 0.5; if (!r.sentado) { r.hip = [r.hip[0], lerp(-31, -16, w * 2)]; r.lean = (r.lean || 0) + 0.3 * Math.sin(Math.PI * k); } return r; };

  const ROTEIROS = {
    tranquilo: { inicio: SOFA_S, padrao: { boca: BOCA.leve(), boch: 0.15 }, passos: [
      F(17, (k, tl, T) => {
        const tap = (x) => Math.max(0, Math.sin(T * 9 + x)) * 1.3;
        const curva = Math.sin(tl * 0.9) * 0.07 + Math.sin(tl * 2.3) * 0.03;
        const yes = janelaT(tl, 6.2, 7.6) + janelaT(tl, 13.0, 14.2);
        const ah = janelaT(tl, 10.0, 11.0);
        const e = lerpV([-6.5, -24 - tap(0)], [-9, -42], yes), d = lerpV([6.5, -24 - tap(2)], [9, -42], yes);
        return sentCostas(T, { lean: curva - 0.05 * yes + 0.12 * ah, tilt: -curva * 0.6 + 0.05 * ah, headDy: -1.2 * yes, maos: { e: lerpV(e, [-6, -20], ah), d: lerpV(d, [6, -20], ah) }, item: "controle", base: [0, -2.5 * yes * Math.abs(Math.sin(tl * 8))] });
      }, { vista: "costas", apos: "sofaA" }),
      F(1.1, levantarDe((T) => emPe(T, { vista: "costas" }), (T) => sentCostas(T)), { ate: SOFA_P, vista: "costas", apos: "sofaA" }),
      F(3.0, (k, tl, T) => { const w = janelaT(tl, 0.1, 2.8, 0.6); const lado = Math.sin(tl * 2.2) * 0.12 * w;
        return emPe(T, { maos: { e: lerpV([-13.5, -31], [-9, -82], w), d: lerpV([13.5, -31], [9, -82], w) }, lean: lado, tilt: -0.15 * w, hip: [0, -31 - 2 * w] }); }, { vista: "costas" }),
      A(1.25, [[6.45, 3.1], [6.45, 5.0], [1.9, 5.9], CAFE_P]),
      F(5.0, (k, tl, T) => { const pega = janelaT(tl, 0.3, 4.6, 0.5); return emPe(T, { maos: { e: lerpV([-13.5, -31], [-6, -40], pega), d: lerpV([13.5, -31], [6, -42 + 2 * Math.sin(tl * 3) * fase(tl, 1, 3)], pega) }, lean: 0.06 * pega, tilt: 0.12 * pega }); }, { vista: "costas", flip: -1 }),
      F(4.6, (k, tl, T) => { const gole = janelaT(tl, 0.6, 1.9, 0.4) + janelaT(tl, 2.8, 3.9, 0.4);
        return emPe(T, { maos: { e: [-13.5, -31], d: lerpV([9, -36], [4, -64], gole) }, tilt: -0.12 * gole, olhos: gole > 0.5 ? "Z" : "A", boca: gole > 0.5 ? BOCA.reta() : BOCA.sorriso(), boch: 0.35, item: "xicara" }); }, { vista: "frente" }),
      A(1.15, [[1.9, 5.9], [6.45, 5.0], [6.45, 3.1], SOFA_P], { item: "xicara" }),
      F(1.1, sentarDe(SOFA_S, (T) => emPe(T), (T) => sentCostas(T)), { ate: SOFA_S, vista: "costas", apos: "sofaA", item: "xicara" }),
      F(2.0, (k, tl, T) => { const w = janelaT(tl, 0.1, 1.9, 0.5); return sentCostas(T, { lean: 0.04 + 0.25 * w, maos: { e: [-13, -6], d: lerpV([8, -26], [10, -10], w) }, item: tl < 1.0 ? "xicara" : "controle" }); }, { vista: "costas", apos: "sofaA" }),
    ] },
    feliz: { inicio: SIN_P, padrao: { boca: BOCA.sorriso(), boch: 0.3 }, passos: [
      F(3.2, (k, tl, T) => { const r = Math.sin(tl * 9) * 2.5 * janelaT(tl, 0.4, 2.8);
        return emPe(T, { maos: { e: [20 + r, -74 + Math.cos(tl * 9) * 1.5], d: [16, -36] }, item: "taco", taco: { butt: [14, 0], tip: [24, -80] }, giz: true, olhar: [1, -1.5], tilt: -0.08, boca: BOCA.leve() }); }, { vista: "frente" }),
      F(5.6, (k, tl) => poseTacada(tl), { vista: "frente" }),
      F(3.0, (k, tl, T) => { const pump = Math.abs(Math.sin(tl * Math.PI / 0.42)) * janelaT(tl, 0.2, 2.8, 0.3); const up = janelaT(tl, 0.0, 2.9, 0.35);
        return emPe(T, { maos: { e: [-13, -36], d: lerpV([13.5, -31], [18, -70 - 12 * pump], up) }, hip: [0, -31 - 2 * pump], lean: -0.05 * up, tilt: -0.1 * up, olhos: up > 0.5 ? "F" : "A", boca: up > 0.3 ? BOCA.aberta(0.6 + 0.4 * pump) : BOCA.sorriso(), boch: 0.6, item: "tacoUma", bolas: "fim" }); }, { vista: "frente" }),
      A(1.3, [[6.35, 8.7], [6.35, 3.55], [9.35, 3.55], MON_P], { item: "tacoUma", bolas: "fim" }),
      F(4.6, (k, tl, T) => { const up = janelaT(tl, 1.0, 3.4, 0.4); const nod = Math.sin(tl * 6) * 0.08 * janelaT(tl, 0.3, 4.3);
        return emPe(T, { maos: { e: [-13, -36], d: lerpV([13.5, -31], [17, -70], up) }, lean: 0.12, tilt: nod, item: "tacoUma" }); }, { vista: "costas", flip: -1 }),
      A(1.3, [[9.35, 3.55], [6.35, 3.55], [6.35, 8.7], SIN_P], { item: "tacoUma" }),
      F(0.8, (k, tl, T) => emPe(T, { maos: { e: [-13, -36], d: [13.5, -31] }, item: "tacoUma" }), { vista: "frente" }),
    ] },
    euforico: { inicio: DAN_P, padrao: { olhos: "F", boch: 0.75 }, passos: [
      F(3.4, (k, tl, T) => poseFesta(tl, T), { vista: "frente" }),
      F(3.4, (k, tl, T) => poseFesta(tl, T), { vista: "frente" }),
      F(2.4, (k, tl, T) => { const q = Math.floor(tl / 0.2) % 4; const b = Math.abs(Math.sin(tl * Math.PI / 0.4));
        return emPe(T, { maos: { e: [-26, -54], d: [26, -54] }, base: [0, -4 * b], vista: q === 2 ? "costas" : "frente", flip: q === 1 ? -1 : 1, boca: BOCA.aberta(0.8), olhos: "F" }); }, { vista: "frente" }),
      F(4.2, (k, tl, T) => { const c = (tl % 1.4) / 1.4; const joga = c < 0.55 ? io(c / 0.55) : 1 - sai((c - 0.55) / 0.45);
        return emPe(T, { maos: { e: [-11, -36], d: lerpV([12, -30], [22, -84], joga) }, lean: -0.08 * joga, tilt: -0.1 * joga, base: [0, -3 * joga], item: c < 0.5 ? "nota" : "", boca: BOCA.aberta(0.5 + 0.5 * joga), olhos: "F" }); }, { vista: "frente" }),
      A(2.3, [[6.4, 4.9], [9.35, 3.55], MON_P], { estilo: "corre" }),
      F(3.4, (k, tl, T) => { const j = (tl % 0.85) / 0.85; const h = Math.sin(Math.PI * j);
        return emPe(T, { base: [0, -16 * h], maos: { e: [-22, -78], d: [22, -78] }, pes: { e: [-7, -3 * h], d: [7, -3 * h] }, squash: 1 + 0.04 * h }); }, { vista: "costas", flip: -1 }),
      A(2.3, [[9.35, 3.55], [6.4, 4.9], DAN_P], { estilo: "corre" }),
      F(5.1, (k, tl, T) => poseFesta(1.0 + (tl % 2.4), T), { vista: "frente" }),
    ] },
    preocupado: { inicio: CAD_S, padrao: { sob: "tenso", boca: BOCA.foco() }, passos: [
      F(9, (k, tl, T) => { const tE = Math.max(0, Math.sin(T * 13)) * 2.2, tD = Math.max(0, Math.sin(T * 13 + 2.2)) * 2.2;
        const perto = janelaT(tl, 3.0, 5.6, 0.6), coca = janelaT(tl, 6.6, 7.8, 0.3);
        const d = lerpV([29, -31 - tD], [10, -60 + 2 * Math.sin(T * 14)], coca);
        return sentCostas(T, { lean: 0.12 + 0.12 * perto, tilt: 0.06 * perto + 0.05 * Math.sin(tl * 1.7), maos: { e: lerpV([17, -27 - tE], [15, -25], perto), d: lerpV(d, [31, -29], perto * (1 - coca)) } }); }, { vista: "costas", apos: "cadeiraA" }),
      F(3.6, (k, tl, T) => { const cab = janelaT(tl, 0.0, 3.6, 0.45); const sh = Math.sin(T * 9) * 0.12 * cab;
        return sentCostas(T, { lean: 0.12 - 0.16 * cab, tilt: sh, maos: { e: lerpV([17, -27], [-13, -56], cab), d: lerpV([29, -31], [13, -56], cab) }, balao: janelaT(tl, 0.3, 3.4, 0.3), balaoT: "smiley-nervous" }); }, { vista: "costas", apos: "cadeiraA" }),
      F(1.1, levantarDe((T) => emPe(T), (T) => sentCostas(T)), { ate: CAD_P, vista: "costas", apos: "cadeiraA" }),
      A(0.95, [[6.75, 3.55], [9.5, 3.55], [6.75, 3.55], [8.05, 3.55]], { pensativo: true }),
      F(3.2, (k, tl, T) => { const w = janelaT(tl, 0.1, 3.1, 0.4); const sus = Math.sin(Math.PI * fase(tl, 0.8, 2.2));
        return emPe(T, { maos: { e: [-13.5, -31], d: lerpV([13.5, -31], [6, -64], w) }, hip: [0, -31 - 1.6 * sus], tilt: 0.14 * w, olhos: sus > 0.6 ? "Z" : "A", boca: BOCA.triste(), sob: "triste", balao: janelaT(tl, 0.6, 2.8), balaoT: "chart-line-down" }); }, { vista: "frente" }),
      F(1.1, sentarDe(CAD_S, (T) => emPe(T), (T) => sentCostas(T)), { ate: CAD_S, vista: "costas", apos: "cadeiraA" }),
    ] },
    triste: { inicio: POL_S, padrao: { sob: "triste", boca: BOCA.triste(), nuvem: true, lagrima: true }, passos: [
      F(11.5, (k, tl, T) => {
        const cobre = janelaT(tl, 0.2, 2.0, 0.45), sus = Math.sin(Math.PI * fase(tl, 2.8, 4.4)), olha = janelaT(tl, 5.2, 7.0, 0.5), bal = janelaT(tl, 8.0, 11.0, 0.6);
        let e = [-7, -3], d = [9, -3];
        e = lerpV(e, [-4, -40], cobre); d = lerpV(d, [5, -40], cobre);
        return sentFrente(T, { hip: [0, -2 - 1.6 * sus], lean: 0.2 - 0.1 * sus - 0.12 * olha + 0.06 * cobre + 0.05 * Math.sin(tl * 2.4) * bal, tilt: 0.12 - 0.3 * olha + 0.1 * cobre, headDy: 1.5 * (1 - olha), maos: { e, d },
          olhos: cobre > 0.5 ? "Z" : "A", olhar: olha > 0.3 ? [-1.6, -1.6] : [0, 1.2] }); }, { vista: "frente", apos: "poltronaA" }),
      F(1.6, levantarDe((T) => emPe(T, { lean: 0.12, tilt: 0.14 }), (T) => sentFrente(T, { lean: 0.2, tilt: 0.12 })), { ate: POL_P, vista: "frente", apos: "poltronaA" }),
      A(0.7, [[1.8, 3.3], JAN_P], { estilo: "triste" }),
      F(9.5, (k, tl, T) => { const mao = janelaT(tl, 0.6, 7.6, 0.6), sus = Math.sin(Math.PI * fase(tl, 3.6, 5.2)), enc = janelaT(tl, 5.6, 7.4, 0.5);
        return emPe(T, { maos: { e: lerpV([-13.5, -31], [-12, -72], mao), d: [13.5, -31 + 1.5 * sus] }, hip: [0, -31 - 1.5 * sus], lean: 0.05 + 0.08 * enc, tilt: 0.1 + 0.12 * enc }); }, { vista: "costas", flip: -1 }),
      A(0.7, [[1.8, 3.3], POL_P], { estilo: "triste" }),
      F(1.6, sentarDe(POL_S, (T) => emPe(T, { lean: 0.12, tilt: 0.14 }), (T) => sentFrente(T, { lean: 0.2, tilt: 0.12 })), { ate: POL_S, vista: "frente", apos: "poltronaA" }),
    ] },
  };
  // pulos e dança (usado no eufórico)
  function poseFesta(tt, T) {
    let base = [0, 0], hip = [0, -31], lean = 0, tilt = 0, e = [-15, -24], d = [15, -24], pe = [-7, 0], pd = [7, 0], squash = 1;
    if (tt < 0.28) { const k = io(fase(tt, 0, 0.28)); hip = [0, -31 + 7 * k]; e = [-17, -22 + 4 * k]; d = [17, -22 + 4 * k]; squash = 1 - 0.06 * k; }
    else if (tt < 0.8) { const k = fase(tt, 0.28, 0.8); base = [0, -30 * 4 * k * (1 - k)]; const up = sai(fase(tt, 0.28, 0.45)); hip = [0, -31 + 7 * (1 - up) - 3 * up];
      e = lerpV([-17, -18], [-25, -80], up); d = lerpV([17, -18], [25, -80], up); pe = [-8, -5 * Math.sin(Math.PI * k)]; pd = [8, -5 * Math.sin(Math.PI * k)]; squash = 1 + 0.05 * Math.sin(Math.PI * k); }
    else if (tt < 0.98) { const k = fase(tt, 0.8, 0.98); hip = [0, -31 + 6 * Math.sin(Math.PI * k)]; e = [-25, -78 + 8 * Math.sin(Math.PI * k)]; d = [25, -78 + 8 * Math.sin(Math.PI * k)]; squash = 1 - 0.07 * Math.sin(Math.PI * k); }
    else {
      const k = (tt - 0.98) / 0.6; const lado = Math.floor(k) % 2 ? 1 : -1; const f = k % 1; const b = Math.sin(Math.PI * f);
      base = [lado * 3 * suave(f) - lado * 1.5, -5 * b]; hip = [lado * 2.5, -31 + 2 * (1 - b)]; lean = lado * 0.13 * b; tilt = -lado * 0.12 * b;
      const bra = (l) => { const cima = [l * 19, -80], meio = [-l * 15, -50 - 6 * b]; return l < 0 ? [cima, meio] : [meio, cima]; };
      const w = suave(cl(f / 0.3)); const [e1, d1] = bra(-lado), [e2, d2] = bra(lado);
      e = k < 1 ? e2 : lerpV(e1, e2, w); d = k < 1 ? d2 : lerpV(d1, d2, w);
      if (tt < 1.25) { const w = suave(fase(tt, 0.98, 1.25)); e = lerpV([-25, -78], e, w); d = lerpV([25, -78], d, w); }
      pe = [-7 + lado * 2, lado > 0 ? -4 * b : 0]; pd = [7 + lado * 2, lado < 0 ? -4 * b : 0];
    }
    return { base, hip, lean, tilt, maos: { e, d }, pes: { e: pe, d: pd }, squash, olhos: "F", boca: BOCA.aberta(0.7 + 0.3 * Math.abs(Math.sin(T * 7))), boch: 0.75 };
  }

  function mistura(a, b, w) {
    if (w >= 1) return b; if (w <= 0) return { ...a };
    const r = { ...b };
    for (const k of ["hip", "base", "olhar"]) if (a[k] || b[k]) r[k] = lerpV(a[k] || [0, k === "hip" ? -31 : 0], b[k] || [0, k === "hip" ? -31 : 0], w);
    for (const k of ["lean", "tilt", "headDy", "boch", "balao"]) r[k] = lerp(a[k] || 0, b[k] || 0, w);
    r.squash = lerp(a.squash || 1, b.squash || 1, w);
    r.maos = { e: lerpV(a.maos.e, b.maos.e, w), d: lerpV(a.maos.d, b.maos.d, w) };
    r.pes = { e: lerpV(a.pes.e, b.pes.e, w), d: lerpV(a.pes.d, b.pes.d, w) };
    if (a.taco && b.taco) r.taco = { butt: lerpV(a.taco.butt, b.taco.butt, w), tip: lerpV(a.taco.tip, b.taco.tip, w) };
    if (w < 0.5) { r.sentado = a.sentado; if (a.item && !b.item) r.item = a.item; }
    return r;
  }

  // Compila o roteiro: tempos e posições de cada passo
  function compilar(rt) {
    let pos = rt.inicio.slice(); let t = 0; const out = [];
    for (const p of rt.passos) {
      const de = pos.slice();
      if (p.tipo === "andar") {
        const pts = [de, ...p.via]; let dist = 0; const segs = [];
        for (let i = 1; i < pts.length; i++) { const L = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (L > 1e-6) segs.push({ a: pts[i - 1], b: pts[i], d0: dist, L }); dist += L; }
        const dur = dist / p.vel; out.push({ ...p, t0: t, dur, segs, dist, de }); pos = [pts[pts.length - 1][0], pts[pts.length - 1][1], 0]; t += dur;
      } else { const ate = p.ate || pos; out.push({ ...p, t0: t, de, ate }); pos = ate.slice(); t += p.dur; }
    }
    return { passos: out, total: t, padrao: rt.padrao || {} };
  }
  function avaliarPasso(s, tl, T, rt) {
    let pose, pos, vista = s.vista || "frente", flip = s.flip || 1;
    if (s.tipo === "andar") {
      const d = cl(tl / s.dur, 0, 1) * s.dist;
      let sg = s.segs[s.segs.length - 1]; for (const x of s.segs) if (d <= x.d0 + x.L) { sg = x; break; }
      const k = cl((d - sg.d0) / sg.L, 0, 1);
      // curva suave nas quinas: mistura a direção com a do próximo trecho perto do fim
      pos = [lerp(sg.a[0], sg.b[0], k), lerp(sg.a[1], sg.b[1], k), 0];
      const dx = sg.b[0] - sg.a[0], dy = sg.b[1] - sg.a[1]; const sx = dx - dy, syy = (dx + dy) * 0.58;
      vista = syy < -0.05 * Math.hypot(dx, dy) ? "costas" : "frente"; flip = sx >= 0 ? 1 : -1;
      if (vista === "costas") flip = -flip;
      pose = poseAndar(d, s.estilo, T);
      if (s.pensativo) { pose.maos.d = [5, -62]; pose.maos.e = [-3, -38]; pose.tilt = (pose.tilt || 0) + 0.08; pose.boca = BOCA.foco(); }
      if (s.item === "xicara") pose.maos.d = [9, -36 + (pose.maos.d[1] + 31) * 0.3];
      if (s.item === "tacoUma") pose.maos.e = [-13, -36 + (pose.maos.e[1] + 31) * 0.3];
      pose.olhar = [1.2, 0.5];
      pose.item = s.item || ""; if (s.bolas) pose.bolas = s.bolas;
    } else {
      const k = cl(tl / s.dur, 0, 1);
      pos = s.de === s.ate ? s.de : [lerp(s.de[0], s.ate[0], suave(k)), lerp(s.de[1], s.ate[1], suave(k)), lerp(s.de[2], s.ate[2], suave(k))];
      pose = s.pose(k, tl, T);
      if (s.item && !pose.item) pose.item = s.item;
      if (pose.vista) vista = pose.vista; if (pose.flip) flip = pose.flip;
    }
    pose = { ...rt.padrao, ...pose };
    pose.vista = vista; pose.flip = flip;
    return { pose, pos, apos: s.apos };
  }
  function avaliar(rt, T) {
    const tt = ((T % rt.total) + rt.total) % rt.total;
    let i = rt.passos.findIndex((s) => tt < s.t0 + s.dur); if (i < 0) i = rt.passos.length - 1;
    const s = rt.passos[i], tl = tt - s.t0;
    const r = avaliarPasso(s, tl, T, rt);
    const B = 0.4;
    if (tl < B) {   // transição suave a partir do fim do passo anterior
      const ant = rt.passos[(i - 1 + rt.passos.length) % rt.passos.length];
      const pa = avaliarPasso(ant, ant.dur - 1e-3, T, rt).pose;
      const w = suave(tl / B);
      if (pa.vista === r.pose.vista && pa.flip === r.pose.flip) r.pose = { ...mistura(pa, r.pose, w), vista: r.pose.vista, flip: r.pose.flip };
      else if (w < 0.5 && pa.sentado === r.pose.sentado) { /* virando: troca a vista no meio */ r.pose = { ...mistura(pa, r.pose, w), vista: r.pose.vista, flip: r.pose.flip }; }
    }
    return r;
  }

  /* ---------- Cena com objetos ordenados por profundidade ---------- */
  function montar(h, o, tem) {
    const L = luz(h);
    let fundo = "";
    fundo += `<polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, Y, 0], [0, Y, 0]])}" fill="#D9A066"/>`;
    for (let i = 1; i < Y; i++) fundo += `<line x1="${P(0, i)[0]}" y1="${P(0, i)[1]}" x2="${P(X, i)[0]}" y2="${P(X, i)[1]}" stroke="#C48A52" stroke-width="1"/>`;
    for (let i = 1; i < X; i += 3) for (let j = 0; j < Y; j++) { const a = P(i + (j % 2) * 1.5, j), b = P(i + (j % 2) * 1.5, j + 1); fundo += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#C48A52" stroke-width=".8"/>`; }
    fundo += `<polygon points="${pts([[0, 0, 0], [0, Y, 0], [0, Y, H], [0, 0, H]])}" fill="#E8EEF7"/><polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, 0, H], [0, 0, H]])}" fill="#F4F7FB"/>`;
    fundo += `<polygon points="${pts([[0, 0, 0], [0, Y, 0], [0, Y, 0.28], [0, 0, 0.28]])}" fill="#CBD5E1"/><polygon points="${pts([[0, 0, 0], [X, 0, 0], [X, 0, 0.28], [0, 0, 0.28]])}" fill="#D7DEE8"/>`;
    fundo += caixa(-0.25, -0.25, H, X + 0.25, 0.25, 0.18, "#CBD5E1", { linha: false }) + caixa(-0.25, 0, H, 0.25, Y, 0.18, "#CBD5E1", { linha: false });
    fundo += `<polygon points="${pts([[2.6, 5.0, 0], [9.6, 5.0, 0], [9.6, 9.4, 0], [2.6, 9.4, 0]])}" fill="#E0E7FF" stroke="#C7D2FE" stroke-width="3"/><polygon points="${pts([[3.1, 5.5, 0], [9.1, 5.5, 0], [9.1, 8.9, 0], [3.1, 8.9, 0]])}" fill="none" stroke="#A5B4FC" stroke-width="1.5" stroke-dasharray="6 5"/>`;
    fundo += L.chao + janela(h) + quadro() + tv(h) + relogio() + estante(tem.trofeu);
    if (tem.neon) fundo += neon(); if (tem.arcoiris) fundo += arcoiris(); if (tem.dardos) fundo += dardos();
    const objs = [];
    const add_ = (id, b, svg) => { if (svg) objs.push({ id, b, svg }); };
    add_("planta1", [0.25, 0.25, 0.95, 0.95], planta(0.25, 0.25));
    add_("rack", [2.45, 0.1, 5.75, 0.8], rack());
    add_("mesaPc", [6.2, 0.05, 10.1, 1.65], mesaPc(h) + (tem.porquinho ? porquinho() : ""));
    if (tem.fliperama) add_("fliper", [10.75, 1.25, 11.8, 2.2], fliperama());
    add_("cadeiraA", [7.55, 2.1, 8.55, 2.95], cadeira("base"));
    add_("cadeiraB", [7.55, 2.95, 8.55, 3.09], cadeira("encosto"));
    add_("mesaC", [3.3, 1.15, 4.9, 1.87], mesaCentro(h !== "tranquilo"));
    add_("poltronaA", [0.1, 3.7, 1.4, 5.22], poltronaA());
    add_("poltronaB", [0.1, 5.22, 1.4, 5.5], poltronaB());
    add_("sofaA", [2.1, 3.4, 5.8, 4.3], sofaA());
    add_("sofaB", [2.4, 4.3, 5.8, 4.72], sofaB());
    add_("sofaC", [5.8, 3.4, 6.1, 4.72], sofaC());
    add_("lamp", [0.5, 5.7, 0.6, 5.8], luminaria2(LUZ[h].lamp));
    add_("cafe", [0.05, 6.9, 0.85, 7.9], cafeteira());
    if (tem.cofre) add_("cofre", [9.9, 2.9, 11.0, 3.8], cofre());
    if (tem.aquario) add_("aquario", [0.1, 8.9, 1.05, 9.9], aquario());
    add_("sinuca", [6.9, 5.2, 11.3, 7.9], sinuca(h === "feliz") + (h === "feliz" ? em(SIN_P[0], SIN_P[1], 0, `<g data-bola="B"><circle r="4.3" fill="#FFF" stroke="#CBD5E1" stroke-width=".6"/></g><g data-bola="A"><circle r="4.3" fill="#FACC15"/><circle cx="-1.3" cy="-1.4" r="1.3" fill="#FFF" opacity=".6"/></g>`) : ""));
    if (tem.cachorro) { const c = CAO[h]; add_("cao", [c[0] - 0.3, c[1] - 0.2, c[0] + 0.3, c[1] + 0.2], cachorro(h)); }
    add_("planta2", [11.0, 8.6, 11.8, 9.8], tem.touro ? touro() : planta(11.0, 9.0));
    const topo = (tem.globo ? globo(h) : "") + efeitos(h);
    return { fundo, objs, topo };
  }
  const CAO = { triste: [2.0, 6.3], preocupado: [6.7, 2.4], tranquilo: [5.0, 5.4], feliz: [6.2, 9.35], euforico: [5.9, 7.7] };

  /* ---------- Laço de animação ---------- */
  const reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ativo = null, raf = 0, t0 = 0;
  function quadroDe(at, T) {
    const { pose, pos, apos } = avaliar(at.rt, T);
    const sp = P(pos[0], pos[1], pos[2]);
    at.w.setAttribute("transform", `translate(${f1(sp[0])} ${f1(sp[1])})`);
    aplicar(at.g, pose, T);
    // profundidade: entra depois do último objeto que ele já passou
    let idx = -1;
    if (apos) idx = at.objs.findIndex((o) => o.id === apos);
    else {
      // só conta objeto que cruza com o boneco na tela; entra depois do último que está atrás dele
      const r = 0.25, c = [pos[0] - r, pos[1] - r, pos[0] + r, pos[1] + r];
      const sx0 = (pos[0] - pos[1]) * C * S - 20, sx1 = sx0 + 40;
      let antes = Infinity;
      at.objs.forEach((o, i) => {
        if ((o.b[2] - o.b[1]) * C * S < sx0 || (o.b[0] - o.b[3]) * C * S > sx1) return;
        if (o.b[2] <= c[0] + 0.02 || o.b[3] <= c[1] + 0.02) idx = i;          // objeto atrás do boneco
        else if (c[2] <= o.b[0] + 0.02 || c[3] <= o.b[1] + 0.02) antes = Math.min(antes, i);  // boneco atrás do objeto
      });
      if (idx >= antes) idx = antes - 1;
    }
    if (idx !== at.idx) { at.idx = idx; const ref = idx + 1 < at.objs.length ? at.objs[idx + 1].el : at.fim; ref.parentNode.insertBefore(at.w, ref); }
    // bolas da sinuca
    if (at.bolas) {
      const b = pose.bolas;
      if (b && b !== "fim") { at.bolas.B.setAttribute("transform", `translate(${f1(b.B[0])} ${f1(b.B[1])})`); at.bolas.A.setAttribute("transform", `translate(${f1(b.A[0])} ${f1(b.A[1])}) scale(${b.As.toFixed(2)})`); at.bolas.A.setAttribute("opacity", b.Ao); }
      else if (b === "fim") { at.bolas.B.setAttribute("transform", "translate(121 -46.5)"); at.bolas.A.setAttribute("opacity", 0); }
      else { at.bolas.B.setAttribute("transform", `translate(${BALL[0]} ${BALL[1]})`); at.bolas.A.setAttribute("transform", "translate(131 -45.4)"); at.bolas.A.setAttribute("opacity", 1); }
    }
  }
  function laco(ts) {
    raf = 0; if (!ativo || !ativo.g.isConnected) { ativo = null; return; }
    if (!document.hidden && !ativo.el.classList.contains("of-pausa")) quadroDe(ativo, window.__ofT != null ? window.__ofT : (ts - t0) / 1000);
    raf = requestAnimationFrame(laco);
  }

  function render(el, d) {
    d = d || {};
    const h = humorDe(d.pct, d.fechado); const info = HUMORES[h];
    const v = d.pct == null || !isFinite(d.pct) ? "" : (d.pct > 0 ? "+" : "") + d.pct.toFixed(2).replace(".", ",") + "%";
    const lib = new Set(d.itens || []); const tem = {}; DECOR.forEach((x) => { tem[x.id] = d.tudo || lib.has(x.item); });
    const chave = [h, d.cor, d.icone, new Date().getMinutes(), Object.values(tem).join("")].join("|");
    if (el.dataset.chave === chave) { const s = el.querySelector(".of-card strong"); if (s && v) s.textContent = v; return h; }
    el.dataset.chave = chave;
    const c = montar(h, d, tem);
    el.innerHTML = `<div class="of-palco of-h-${h}" style="--of-tint:${LUZ[h].tint};--of-top:${LUZ[h].op}">
      <svg class="of-svg" viewBox="-292 -215 606 540" role="img" aria-label="Escritório: ${info.titulo}">
        <defs><radialGradient id="of-luzg"><stop offset="0" stop-color="#FEF3C7" stop-opacity=".55"/><stop offset="1" stop-color="#FEF3C7" stop-opacity="0"/></radialGradient>
        ${["roxo:#818CF8", "verde:#22C55E", "verm:#EF4444"].map((x) => { const [n, c] = x.split(":"); return `<radialGradient id="of-g-${n}"><stop offset="0" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`; }).join("")}
        <linearGradient id="of-brilho" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF" stop-opacity=".14"/><stop offset=".45" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs>
        ${c.fundo}${c.objs.map((o) => `<g data-o="${o.id}">${o.svg}</g>`).join("")}<g data-fim></g><g data-rigw>${bonecoSvg({ cor: d.cor, icone: d.icone })}</g>${c.topo}
      </svg>
      <div class="of-card"><span class="of-emo">${ICS(info.ic)}</span><div><b>${info.titulo}${d.fechado ? " · mercado fechado" : ""}</b><span>${d.fechado ? "Bolsa fechada hoje. Dia de videogame." : info.frase}</span></div>${v ? `<strong class="${d.pct > 0 ? "up" : d.pct < 0 ? "down" : ""}">${v}</strong>` : ""}</div>
    </div>`;
    const svg = el.querySelector("svg");
    const objs = c.objs.map((o) => ({ ...o, el: svg.querySelector(`[data-o="${o.id}"]`) }));
    const w = svg.querySelector("[data-rigw]");
    const bolasEl = svg.querySelector('[data-bola="B"]') ? { B: svg.querySelector('[data-bola="B"]'), A: svg.querySelector('[data-bola="A"]') } : null;
    const novo = !ativo || ativo.h !== h;
    ativo = { el, g: w.querySelector(".of-rig"), w, h, objs, fim: svg.querySelector("[data-fim]"), idx: null, rt: RT[h], bolas: bolasEl };
    if (novo) t0 = performance.now();
    quadroDe(ativo, reduz ? 2 : (performance.now() - t0) / 1000);
    if (!reduz && !raf) raf = requestAnimationFrame(laco);
    return h;
  }
  const RT = Object.fromEntries(Object.entries(ROTEIROS).map(([k, v]) => [k, compilar(v)]));
  window.RadarEscritorio = { render, humorDe, HUMORES, DECOR, _avaliar: (h, t) => avaliar(RT[h], t), _total: (h) => RT[h].total };
})();
