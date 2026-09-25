import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..", process.argv[3] || ".");
const types = { ".html":"text/html", ".css":"text/css", ".js":"text/javascript", ".json":"application/json", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".png":"image/png", ".webp":"image/webp", ".svg":"image/svg+xml", ".ico":"image/x-icon", ".woff2":"font/woff2" };
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(root, url);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end("not found"); }
  res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(Number(process.argv[2]) || 4599, () => console.log("http://localhost:4599"));
