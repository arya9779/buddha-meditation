/* Design-system lint. Fails the build on values that bypass the tokens.

   This is the thing that keeps Open Hall alive after handover: a volunteer or
   an agent can read DESIGN.md and still forget, but they cannot merge past this.

   Run: node scripts/check-tokens.mjs        (or: npm run check)                */

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

/* Retired with the courtyard stylesheet. Do not add files here. */
const LEGACY = new Set();

const SCALE = new Set([0, 1, 2, 3, 4, 8, 12, 16, 24, 32, 48, 64, 96]);

const RULES = [
  { id: "raw-hex", re: /#[0-9a-fA-F]{3,8}\b/g, why: "use a colour token" },
  { id: "banned-font", re: /\b(Playfair|Fraunces|Instrument Serif|Geist)\b/g, why: "typeface outside the Meditate with a Monk reference" },
  { id: "shadow", re: /box-shadow\s*:\s*(?!none)/g, why: "the system has no shadows (DESIGN.md §6)" },
  { id: "backdrop", re: /backdrop-filter\s*:/g, why: "no glassmorphism (DESIGN.md §12)" },
];

/* Media-query conditions are breakpoints, not spacing — they get their own
   rule. Blank them out (preserving offsets) before the spacing scan. */
const withoutMediaConditions = (text) =>
  text.replace(/@media[^{]*/g, (m) => " ".repeat(m.length));

function offScalePx(text) {
  const hits = [];
  for (const m of withoutMediaConditions(text).matchAll(/(?<![\w.-])(\d+(?:\.\d+)?)px/g)) {
    const n = Number(m[1]);
    if (!SCALE.has(n)) hits.push({ index: m.index, text: m[0] });
  }
  return hits;
}

/* The system has three breakpoints and only three. */
const BREAKPOINTS = new Set(["62rem", "52rem", "34rem"]);
function badBreakpoints(text) {
  const hits = [];
  for (const q of text.matchAll(/@media[^{]*/g)) {
    for (const w of q[0].matchAll(/(\d+(?:\.\d+)?)(px|rem|em)/g)) {
      if (!BREAKPOINTS.has(w[0])) hits.push({ index: q.index + w.index, text: w[0] });
    }
  }
  return hits;
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (/\.(astro|css)$/.test(entry.name)) out.push(p);
  }
  return out;
}

const files = walk(path.join(root, "src")).filter(
  (f) => !f.endsWith(path.join("styles", "tokens.css")) && !f.endsWith(path.join("styles", "anthropic.css"))
);

let failures = 0;
let legacy = 0;

for (const file of files) {
  const rel = path.relative(root, file).replaceAll("\\", "/");
  const text = fs.readFileSync(file, "utf8");
  const isLegacy = LEGACY.has(rel);
  const found = [];

  for (const rule of RULES) {
    for (const m of text.matchAll(rule.re)) found.push({ at: m.index, what: m[0], why: rule.why });
  }
  for (const hit of offScalePx(text)) {
    found.push({ at: hit.index, what: hit.text, why: "off the space scale (DESIGN.md §5)" });
  }
  for (const hit of badBreakpoints(text)) {
    found.push({ at: hit.index, what: hit.text, why: "breakpoints are 62rem / 52rem / 34rem (DESIGN.md §6)" });
  }
  if (!found.length) continue;

  const line = (i) => text.slice(0, i).split("\n").length;
  if (isLegacy) {
    legacy += found.length;
    continue;
  }
  failures += found.length;
  for (const f of found) console.error(`${rel}:${line(f.at)}  ${f.what}  — ${f.why}`);
}

if (legacy) {
  console.log(`\n${legacy} value(s) in legacy files (${[...LEGACY].join(", ")}) — scheduled for the rebuild, not blocking.`);
}
if (failures) {
  console.error(`\n✕ ${failures} value(s) bypass the design system. Use a token, or change the token.`);
  process.exit(1);
}
console.log("✓ Design system check passed.");
