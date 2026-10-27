// Gera ../escritorio3d.js (ES module minificado, com o Three.js embutido).
// Uso: npm i three@0.186.1 esbuild  &&  node src/build.mjs
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";
const raiz = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
await build({
  entryPoints: [path.join(raiz, "src/escritorio3d.src.js")],
  outfile: path.join(raiz, "escritorio3d.js"),
  bundle: true, format: "esm", minify: true, target: "es2020", legalComments: "eof",
  nodePaths: [path.join(process.cwd(), "node_modules")],
});
console.log("ok");
