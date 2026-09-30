// Gera os ficheiros para um falante preencher (frases/). Execução: node tools/gerar-frases.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { COURSES } from '../public/core.js';
const dir = new URL('../frases/', import.meta.url);
mkdirSync(dir, { recursive: true });
const csv = rows => '﻿' + rows.map(r => r.map(c => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';')).join('\r\n') + '\r\n';

const frases = {
  'Cumprimentos': ['Bom dia.', 'Boa tarde.', 'Boa noite.', 'Olá, como estás?', 'Estou bem, obrigado.', 'Até amanhã.', 'Até logo.', 'Seja bem-vindo.', 'Com licença.', 'Desculpa.'],
  'Apresentações': ['Como te chamas?', 'Chamo-me ...', 'Muito prazer.', 'De onde és?', 'Sou de Angola.', 'Falo um pouco de [língua].', 'Quantos anos tens?', 'Estou a aprender a tua língua.'],
  'Cortesia': ['Obrigado.', 'Muito obrigado.', 'De nada.', 'Por favor.', 'Sim.', 'Não.', 'Não percebo.', 'Podes repetir?', 'Fala mais devagar, por favor.'],
  'Família': ['Esta é a minha mãe.', 'Este é o meu pai.', 'Tenho dois filhos.', 'O meu irmão está em casa.', 'Como está a tua família?'],
  'Casa e comida': ['Tenho fome.', 'Tenho sede.', 'Quero água.', 'A comida está boa.', 'Onde é a casa?', 'Vamos comer.', 'Quanto custa?', 'Não tenho dinheiro.'],
  'Lugares e direcções': ['Onde fica a escola?', 'Onde fica o mercado?', 'Vai em frente.', 'Vira à direita.', 'Vira à esquerda.', 'Está perto.', 'Está longe.', 'Quero ir à aldeia.'],
  'Tempo': ['Que horas são?', 'Hoje é um bom dia.', 'Amanhã vou trabalhar.', 'Ontem choveu.', 'Está a chover.', 'Está calor.', 'Está frio.'],
  'Sentimentos': ['Estou feliz.', 'Estou cansado.', 'Estou doente.', 'Tenho medo.', 'Gosto muito de ti.', 'Estou com saudades.', 'Tudo vai correr bem.'],
  'Aprender': ['Como se diz isto na tua língua?', 'O que significa esta palavra?', 'Sabes ler?', 'O professor ensina na escola.', 'Quero aprender mais palavras.', 'Conta até cinco.'],
};
let id = 0;
const a = [['id', 'categoria', 'português', 'kimbundu (preencher)', 'umbundu (preencher)', 'observações / outra forma', 'falante (nome ou iniciais)', 'revisto (sim/não)']];
for (const [cat, list] of Object.entries(frases)) for (const p of list) a.push([++id, cat, p, '', '', '', '', '']);
writeFileSync(new URL('frases-para-traduzir.csv', dir), csv(a));

// Exemplos que o dicionário do Kimbundu já traz, sem tradução: o falante escreve o sentido em português e confirma a grafia.
const prioridade = new Set(COURSES.kimbundu.WORDS.map(w => w.word));
const fonte = JSON.parse(readFileSync(new URL('../referencias/dicionarios/kimbundu-dicionario.json', import.meta.url), 'utf8')).entradas;
const vistos = new Set(), linhas = [];
for (const e of fonte) for (const s of e.s) for (const x of s.x || []) {
  const k = `${e.p}|${x}`; if (vistos.has(k)) continue; vistos.add(k);
  linhas.push([prioridade.has(e.p) ? 'sim' : '', e.p, s.d, x, '', '', '']);
}
linhas.sort((p, q) => (q[0] === 'sim') - (p[0] === 'sim') || p[1].localeCompare(q[1], 'pt'));
const b = [['prioridade', 'palavra (Kimbundu.org)', 'definição do dicionário', 'exemplo em kimbundu', 'tradução em português (preencher)', 'grafia correcta? (sim / corrigir aqui)', 'falante']];
linhas.forEach(l => b.push(l));
writeFileSync(new URL('exemplos-kimbundu-para-traduzir.csv', dir), csv(b));
console.log(`${id} frases para traduzir e ${linhas.length} exemplos do dicionário (${linhas.filter(l => l[0]).length} de palavras das lições).`);
