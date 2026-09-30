// Importa as frases preenchidas e revistas por um falante para public/frases.json.
// Uso: node tools/importar-frases.mjs frases/frases-para-traduzir.csv
// Só entram linhas com "revisto" = sim e texto na língua; o resto é ignorado.
import { readFileSync, writeFileSync } from 'node:fs';
const ficheiro = process.argv[2];
if (!ficheiro) { console.error('Indica o CSV preenchido.'); process.exit(1); }
const texto = readFileSync(ficheiro, 'utf8').replace(/^﻿/, '');
const linhas = [];
let campo = '', linha = [], aspas = false;
for (let i = 0; i < texto.length; i++) {
  const c = texto[i];
  if (aspas) { if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; } else if (c === '"') aspas = false; else campo += c; }
  else if (c === '"') aspas = true;
  else if (c === ';') { linha.push(campo); campo = ''; }
  else if (c === '\n') { linha.push(campo.replace(/\r$/, '')); linhas.push(linha); linha = []; campo = ''; }
  else campo += c;
}
if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
const [cab, ...rows] = linhas;
const col = nome => cab.findIndex(x => x.toLowerCase().startsWith(nome));
const iCat = col('categoria'), iPt = col('português'), iKim = col('kimbundu'), iUmb = col('umbundu'), iFal = col('falante'), iRev = col('revisto');
const frases = [];
for (const r of rows) {
  if (!/^sim$/i.test((r[iRev] || '').trim())) continue;
  for (const [lingua, i] of [['kimbundu', iKim], ['umbundu', iUmb]]) {
    const t = (r[i] || '').trim();
    if (t) frases.push({ lingua, categoria: r[iCat], pt: r[iPt], texto: t, falante: (r[iFal] || '').trim() });
  }
}
writeFileSync(new URL('../public/frases.json', import.meta.url), JSON.stringify({ frases }, null, 1));
console.log(`${frases.length} frases revistas importadas.`);
