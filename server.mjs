import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('./', import.meta.url);
const types = { html: 'text/html', css: 'text/css', js: 'text/javascript', json: 'application/json', png: 'image/png', webmanifest: 'application/manifest+json' };
const files = ['styles.css', 'app.js', 'core.js', 'sw.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];
const routes = new Map([
  ['/', 'public/index.html'],
  ['/dictionary.json', 'referencias/dicionarios/umbundu-portugues.json'],
  ['/kimbundu.json', 'referencias/dicionarios/kimbundu-dicionario.json'],
  ...files.map(f => [`/${f}`, `public/${f}`]),
]);
const port = Number(process.env.PORT || 4173);
createServer(async (req, res) => {
  const file = routes.get(new URL(req.url, 'http://localhost').pathname);
  if (!file || !['GET', 'HEAD'].includes(req.method)) { res.writeHead(404); res.end('Não encontrado'); return; }
  try {
    const body = await readFile(fileURLToPath(new URL(file, root)));
    res.writeHead(200, { 'Content-Type': `${types[file.split('.').pop()]}; charset=utf-8`, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(500); res.end('Não foi possível carregar o ficheiro.'); }
}).listen(port, '127.0.0.1', () => console.log(`Fala Angola: http://127.0.0.1:${port}`));
