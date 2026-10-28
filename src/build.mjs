// Gera ../escritorio3d.js (ES module minificado, com o Three.js embutido).
// O código-fonte está dividido em src/partes/ (juntadas em ordem em src/escritorio3d.src.js).
// Uso: npm install  &&  npm run build
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";
const raiz = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ORDEM = ["1-base", "2-boneco", "3-poses", "3b-vida", "4-cao-nav", "6-roteiros", "5-sala", "7-escritorio", "8-texturas", "7b-diretor", "9-vitrine"];
const fonte = ORDEM.map((n) => fs.readFileSync(path.join(raiz, "src/partes", n + ".js"), "utf8")).join("");
fs.writeFileSync(path.join(raiz, "src/escritorio3d.src.js"), "// Arquivo gerado a partir de src/partes/ por src/build.mjs. Edite as partes, não este arquivo.\n" + fonte);
await build({
  entryPoints: [path.join(raiz, "src/escritorio3d.src.js")],
  outfile: path.join(raiz, "escritorio3d.js"),
  bundle: true, format: "esm", minify: true, target: "es2020", legalComments: "eof",
  nodePaths: [path.join(process.cwd(), "node_modules")],
});
console.log("ok");
