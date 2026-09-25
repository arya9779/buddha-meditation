import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

function serveConcepts() {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
  };
  return {
    name: "serve-design-concepts",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = decodeURIComponent((req.url || "").split("?")[0]);
        if (!raw.startsWith("/design_concept_1") && !raw.startsWith("/design_concept_2")) return next();
        let file = path.normalize(path.join(root, raw));
        if (!file.startsWith(root)) return next();
        if (raw.endsWith("/") || !path.extname(file)) file = path.join(file, "index.html");
        if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return next();
        res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

export default defineConfig({
  site: "https://buddhameditationdc.org",
  vite: { plugins: [serveConcepts()] },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
  },
});
