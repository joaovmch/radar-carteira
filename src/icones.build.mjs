// Gera ../icones.js com os ícones usados no site (Phosphor Icons, licença MIT).
// Uso: npm i  &&  node src/icones.build.mjs
// Nome do ícone: "nome" (traço regular), "nome:f" (preenchido) ou "nome:d" (duotone).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const raiz = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const base = path.join(raiz, "node_modules/@phosphor-icons/core/assets");

const REG = ["check", "check-circle", "x", "arrows-left-right", "arrow-clockwise", "arrow-right", "caret-right", "map-pin", "sparkle", "house", "monitor",
  "crosshair", "camera", "lock-simple", "lock-simple-open", "trophy", "eye", "confetti", "plant", "smiley-sad", "smiley-nervous", "smiley-meh", "smiley",
  "star", "chart-line-up", "chart-line-down", "coins", "lightning", "chart-pie-slice", "hand-coins", "bank", "globe-hemisphere-west", "shield-check",
  "puzzle-piece", "user-circle", "palette", "t-shirt", "pants", "sneaker", "scissors", "gift", "flag-checkered", "info", "rocket", "medal", "seal-check",
  "target", "piggy-bank", "image", "trash", "eyedropper", "users-three", "calendar-check", "wallet", "vault", "timer", "currency-btc", "money", "warning", "arrows-out-cardinal", "hand-grabbing", "arrow-counter-clockwise", "ruler", "eye-slash", "barbell", "feather", "cube"];
const COR = ["cat", "dog", "bird", "fish", "horse", "rabbit", "butterfly", "cow", "paw-print", "rocket", "diamond", "plant", "fire", "lightning", "target",
  "brain", "bank", "globe-hemisphere-west", "coffee", "dice-five", "shield", "game-controller", "robot", "alien", "ghost", "crown", "planet", "tree",
  "sun", "moon-stars", "chart-line-up", "piggy-bank", "anchor", "mountains", "flower-lotus", "music-notes", "baseball-cap", "graduation-cap",
  "sunglasses", "briefcase", "hand-coins", "rainbow", "star", "medal", "shield-check", "puzzle-piece", "joystick", "disco-ball", "vault",
  "currency-btc", "trophy", "coins", "flame", "crown-simple", "seal-check", "smiley-nervous", "chart-line-down", "cactus", "leaf", "heart", "football",
  "guitar", "paint-brush", "camera", "airplane-tilt", "book-open", "code", "barbell", "pizza", "sailboat"];

const lista = [...REG.map((n) => [n, `regular/${n}.svg`]), ...COR.map((n) => [n + ":d", `duotone/${n}-duotone.svg`]), ...COR.map((n) => [n + ":f", `fill/${n}-fill.svg`])];
const out = {};
for (const [k, f] of lista) {
  const svg = fs.readFileSync(path.join(base, f), "utf8");
  out[k] = [...svg.matchAll(/<path d="([^"]+)"(?: opacity="([\d.]+)")?\s*\/>/g)].map((m) => (m[2] ? [m[1], +m[2]] : m[1]));
  if (!out[k].length) throw new Error("sem path: " + f);
}
const js = `/* Radar da Carteira: ícones (Phosphor Icons, MIT, phosphoricons.com). Gerado por src/icones.build.mjs. */
(function () {
  "use strict";
  const P = ${JSON.stringify(out)};
  const tem = (n) => !!P[n];
  const paths = (n) => (P[n] || P["sparkle"]).map((p) => typeof p === "string" ? \`<path d="\${p}"/>\` : \`<path d="\${p[0]}" opacity="\${p[1]}"/>\`).join("");
  // <svg> pronto para HTML. o: { cls, tam, titulo, cor }
  function svg(n, o = {}) {
    const t = o.tam ? \` width="\${o.tam}" height="\${o.tam}"\` : "";
    const cor = o.cor ? \` style="color:\${o.cor}"\` : "";
    const a11y = o.titulo ? \` role="img" aria-label="\${String(o.titulo).replace(/"/g, "&quot;")}"\` : ' aria-hidden="true"';
    return \`<svg class="ic\${o.cls ? " " + o.cls : ""}" viewBox="0 0 256 256" fill="currentColor"\${t}\${cor}\${a11y} focusable="false">\${paths(n)}</svg>\`;
  }
  // Grupo para usar dentro de outro <svg>: centro (x, y), lado s
  function g(n, x, y, s, cor) {
    const k = s / 256;
    return \`<g transform="translate(\${x - s / 2} \${y - s / 2}) scale(\${k})" fill="\${cor || "currentColor"}">\${paths(n)}</g>\`;
  }
  // Desenha num canvas 2D: centro (x, y), lado s
  const cache = {};
  function desenhar(ctx, n, x, y, s, cor) {
    const l = cache[n] || (cache[n] = (P[n] || []).map((p) => typeof p === "string" ? [new Path2D(p), 1] : [new Path2D(p[0]), p[1]]));
    ctx.save(); ctx.translate(x - s / 2, y - s / 2); ctx.scale(s / 256, s / 256); ctx.fillStyle = cor || "#111";
    const a0 = ctx.globalAlpha;
    for (const [p, a] of l) { ctx.globalAlpha = a0 * a; ctx.fill(p); }
    ctx.restore();
  }
  // <i data-ic="nome"></i> no HTML vira o ícone
  function hidratar(raiz) { (raiz || document).querySelectorAll("i[data-ic]").forEach((el) => { el.outerHTML = svg(el.dataset.ic, { cls: el.className || "" }); }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => hidratar()); else hidratar();
  window.RI = { svg, g, desenhar, tem, hidratar };
})();
`;
fs.writeFileSync(path.join(raiz, "icones.js"), js);
console.log("icones.js", Object.keys(out).length, "ícones,", (js.length / 1024).toFixed(0), "KB");
