import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { LEVELS, LADDER, LADDER_RULE, NOTES } from "../data.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const axes = ["cranial", "caudal", "anterior", "posterior", "lateral", "medial"];
const ids = ["Ia", "Ib", "II", "IIa", "IIb", "III", "IVa", "IVb", "V", "Va", "Vb", "Vc", "VIa", "VIb", "VIIa", "VIIb", "VIII", "IX", "Xa", "Xb"];

if (LEVELS.length !== 20) fail("se esperaban 20 niveles");
if (LEVELS.map((level) => level.id).join(",") !== ids.join(",")) fail("el orden de los niveles no coincide");
for (const level of LEVELS) {
  for (const key of ["name", "group", "table", "risk", ...axes]) {
    if (typeof level[key] !== "string" || !level[key].trim()) fail(level.id + " sin " + key);
  }
}
if (LADDER.length !== 9) fail("la escalera debe tener 9 peldaños");
if (!LADDER_RULE.includes("hioides")) fail("falta la regla de la escalera");
if (NOTES.length !== 6) fail("se esperaban 6 matices");

const forbidden = ["drive." + "google", "Google " + "Drive", "pendiente de revisión", "Álex", "Grok " + "Bot"];
const siteFiles = ["index.html", "styles.css", "app.js", "data.js", "sw.js", "manifest.webmanifest", "README.md"];
for (const name of siteFiles) {
  const file = join(root, name);
  const text = readFileSync(file, "utf8");
  for (const term of forbidden) {
    if (text.includes(term)) fail(file + " contiene «" + term + "»");
  }
}

const manifest = JSON.parse(readFileSync(join(root, "manifest.webmanifest"), "utf8"));
for (const key of ["name", "short_name"]) {
  if (manifest[key] !== "Cerviganglios") fail("manifest." + key);
}
if (manifest.display !== "standalone") fail("display");
if (manifest.lang !== "es") fail("lang");
if (!manifest.start_url.startsWith(".")) fail("start_url debe ser relativa");
if (!manifest.scope.startsWith(".")) fail("scope debe ser relativo");
const sizes = new Set(manifest.icons.map((icon) => icon.sizes + ":" + icon.purpose));
for (const needed of ["192x192:any", "512x512:any", "512x512:maskable"]) {
  if (!sizes.has(needed)) fail("falta el icono " + needed);
}

const html = readFileSync(join(root, "index.html"), "utf8");
for (const needed of [
  "apple-touch-icon",
  "apple-mobile-web-app-capable",
  "apple-mobile-web-app-status-bar-style",
  "apple-mobile-web-app-title",
  "viewport-fit=cover",
  "https://doi.org/10.1016/j.radonc.2013.10.010",
  "Grégoire V et al. Radiother Oncol 2014;110(1):172-181",
  "sin ánimo de lucro",
  "juicio clínico",
]) {
  if (!html.includes(needed)) fail("index.html sin " + needed);
}
if (!html.includes("env(safe-area-inset") && !readFileSync(join(root, "styles.css"), "utf8").includes("safe-area-inset")) {
  fail("faltan safe-area-insets");
}
const css = readFileSync(join(root, "styles.css"), "utf8");
if (/(?:href|src)\s*=\s*["']\//.test(html)) fail("hay una ruta interna absoluta en el HTML");
if (/url\(\s*["']?\//.test(css)) fail("hay una ruta absoluta en el CSS");

console.log("comprobar: ok (" + LEVELS.length + " niveles, " + NOTES.length + " matices)");

function fail(message) {
  console.error(message);
  process.exit(1);
}
