// Junta tudo numa pasta estática `docs/`, pronta para alojar em qualquer serviço HTTPS (GitHub Pages serve esta pasta).
import { cpSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
rmSync('docs', { recursive: true, force: true });
mkdirSync('docs');
cpSync('public', 'docs', { recursive: true });
cpSync('referencias/dicionarios/umbundu-portugues.json', 'docs/dictionary.json');
cpSync('referencias/dicionarios/kimbundu-dicionario.json', 'docs/kimbundu.json');
writeFileSync('docs/.nojekyll', '');
console.log('docs/ pronta.');
