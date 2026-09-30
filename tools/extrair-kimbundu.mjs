// Extrai as entradas do Kimbundu.org (com autorização do utilizador do projecto; fonte a citar: Kimbundu.org, © Adilson Bacelar,
// material de Assis Júnior, anos 1940). Cada página de palavra traz os dados em __NEXT_DATA__.
// Pedidos sequenciais com pausa; retoma de onde parou (ficheiro .jsonl).
import { readFileSync, appendFileSync, existsSync, writeFileSync } from 'node:fs';
const dir = new URL('../referencias/dicionarios/', import.meta.url);
const index = JSON.parse(readFileSync(new URL('kimbundu-indice.json', dir), 'utf8').replace(/^﻿/, '')).entradas;
const out = new URL('kimbundu-completo.jsonl', dir);
const decode = s => s.replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
const done = new Set(existsSync(out) ? readFileSync(out, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l).id) : []);
const todo = index.filter(e => !done.has(e.identificador_url));
const PAUSA = Number(process.env.PAUSA_MS || 350);
const sleep = ms => new Promise(r => setTimeout(r, ms));
console.log(`${done.size} já feitos, ${todo.length} por fazer`);
let ok = 0, falhas = 0;
for (const e of todo) {
  const url = `https://www.kimbundu.org/pt/word/${encodeURIComponent(decode(e.identificador_url))}`;
  let record = null;
  for (let tentativa = 1; tentativa <= 3 && !record; tentativa++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'FalaAngola-educational/0.1 (uso autorizado; contacto do projecto)' } });
      if (res.status === 429 || res.status >= 500) { await sleep(5000 * tentativa); continue; }
      if (!res.ok) { record = { id: e.identificador_url, erro: res.status }; break; }
      const html = await res.text();
      const m = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
      const results = JSON.parse(m[1]).props.pageProps.results ?? [];
      record = {
        id: e.identificador_url, url,
        entradas: results.map(r => ({
          lema: r.lemma, lema_moderno: r.lemma_modern, homonimo: r.homonym_index, classe: r.class_index, categorias: r.part_of_speech,
          plural: (r.forms || []).filter(f => f.kind === 'plural').map(f => f.surface),
          sentidos: (r.senses || []).map(s => ({ pt: s.definition_pt_modern || s.definition_pt, en: s.definition_en, fr: s.definition_fr, exemplos: s.examples || [] })),
          dominios: r.domains || [], revisao_pendente: !!r.needs_review, fonte: r.source_collection, pagina: r.source_page,
        })),
      };
    } catch (err) { await sleep(3000 * tentativa); }
  }
  if (!record) { falhas++; record = { id: e.identificador_url, erro: 'falha de rede' }; }
  else if (!record.erro) ok++;
  appendFileSync(out, JSON.stringify(record) + '\n');
  if ((ok + falhas) % 100 === 0) console.log(`${done.size + ok + falhas}/${index.length} (falhas: ${falhas})`);
  await sleep(PAUSA);
}
console.log(`fim: ${ok} ok, ${falhas} falhas`);
