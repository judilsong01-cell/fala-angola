// Junta kimbundu-completo.jsonl num único JSON compacto para a aplicação (referencias/dicionarios/kimbundu-dicionario.json).
import { readFileSync, writeFileSync } from 'node:fs';
const dir = new URL('../referencias/dicionarios/', import.meta.url);
const linhas = readFileSync(new URL('kimbundu-completo.jsonl', dir), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
const vistos = new Set(), entradas = [];
let erros = 0;
for (const l of linhas) {
  if (l.erro || !l.entradas) { erros++; continue; }
  if (vistos.has(l.id)) continue;
  vistos.add(l.id);
  for (const e of l.entradas) {
    entradas.push({
      i: l.id, p: e.lema_moderno || e.lema, o: e.lema !== e.lema_moderno ? e.lema : undefined, h: e.homonimo > 1 ? e.homonimo : undefined,
      c: e.classe ?? undefined, k: e.categorias?.length ? e.categorias : undefined, pl: e.plural?.length ? e.plural : undefined,
      s: e.sentidos.map(s => ({ d: s.pt, x: s.exemplos?.length ? s.exemplos : undefined })), t: e.dominios?.length ? e.dominios : undefined, pg: e.pagina ?? undefined,
    });
  }
}
const saida = {
  lingua: 'kimbundu', data_recolha: new Date().toISOString().slice(0, 10),
  fonte: 'https://www.kimbundu.org/pt/', creditos: 'Kimbundu.org, © Adilson Bacelar. Corpus estruturado a partir de material histórico de Assis Júnior (anos 1940). Utilizado com autorização.',
  nota: 'Grafias e definições seguem a fonte; algumas entradas estão em revisão editorial.', entradas,
};
writeFileSync(new URL('kimbundu-dicionario.json', dir), JSON.stringify(saida));
console.log(`${entradas.length} entradas de ${vistos.size} páginas (${erros} páginas com erro)`);
