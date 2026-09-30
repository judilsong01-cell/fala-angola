// Gera os ícones e o ecrã de arranque Android (estrela dourada sobre creme). Sem dependências. Execução: node tools/icons-android.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, readdirSync, existsSync } from 'node:fs';
const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc = b => { let c = ~0; for (const x of b) c = crcTable[(c ^ x) & 255] ^ (c >>> 8); return ~c >>> 0; };
const chunk = (type, data) => { const t = Buffer.from(type), len = Buffer.alloc(4), sum = Buffer.alloc(4); len.writeUInt32BE(data.length); sum.writeUInt32BE(crc(Buffer.concat([t, data]))); return Buffer.concat([len, t, data, sum]); };
const star = (cx, cy, R, r) => Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, d = i % 2 ? r : R; return [cx + d * Math.cos(a), cy + d * Math.sin(a)]; });
const inside = (x, y, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) if ((p[i][1] > y) !== (p[j][1] > y) && x < (p[j][0] - p[i][0]) * (y - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0]) c = !c; return c; };
function png(w, h, radius, { transparent = false } = {}) {
  const poly = star(w / 2, h * 0.53, radius, radius * 0.42), S = w * h > 600000 ? 1 : 3, raw = Buffer.alloc(h * (w * 4 + 1));
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; for (let x = 0; x < w; x++) {
    let hit = 0; for (let a = 0; a < S; a++) for (let b = 0; b < S; b++) if (inside(x + (a + .5) / S, y + (b + .5) / S, poly)) hit++;
    const t = hit / (S * S), o = y * (w * 4 + 1) + 1 + x * 4;
    raw[o] = transparent ? 234 : Math.round(251 * (1 - t) + 234 * t); raw[o + 1] = transparent ? 189 : Math.round(248 * (1 - t) + 189 * t); raw[o + 2] = transparent ? 101 : Math.round(242 * (1 - t) + 101 * t); raw[o + 3] = transparent ? Math.round(255 * t) : 255; } }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}
const res = new URL('../android/app/src/main/res/', import.meta.url);
const dens = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
for (const [d, size] of Object.entries(dens)) {
  const fg = size * 108 / 48;
  writeFileSync(new URL(`mipmap-${d}/ic_launcher.png`, res), png(size, size, size * .36));
  writeFileSync(new URL(`mipmap-${d}/ic_launcher_round.png`, res), png(size, size, size * .36));
  writeFileSync(new URL(`mipmap-${d}/ic_launcher_foreground.png`, res), png(fg, fg, fg * .26, { transparent: true }));
}
// fundo do ícone adaptável e ecrã de arranque
writeFileSync(new URL('values/ic_launcher_background.xml', res), '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#FBF8F2</color>\n</resources>\n');
for (const dir of readdirSync(res).filter(n => n.startsWith('drawable-') && existsSync(new URL(`${n}/splash.png`, res)))) {
  const land = dir.includes('land'), w = land ? 960 : 540, h = land ? 540 : 960;
  writeFileSync(new URL(`${dir}/splash.png`, res), png(w, h, Math.min(w, h) * .22));
}
if (existsSync(new URL('drawable/splash.png', res))) writeFileSync(new URL('drawable/splash.png', res), png(540, 960, 540 * .22));
console.log('ícones e ecrã de arranque Android gerados');
