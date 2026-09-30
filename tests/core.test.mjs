import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {COURSES,regenHearts,spendHeart,gainHeart,heartWait,buildSteps,WORDS,MOTIVATION,UNITS,MISSIONS,reviewQueue,chapterDone,chapterOpen,normalize,isCorrect,emptyProgress,reward,streak,sanitizeProgress} from '../public/core.js';
test('respostas aceitam acentos e pontuação sem aceitar respostas diferentes',()=>{
 assert.equal(normalize('  ÁGUA! '),'agua');assert.ok(isCorrect('Thank you!','thank you'));assert.ok(!isCorrect('no thank you','thank you'));assert.ok(!isCorrect('água','casa'));
});
test('recompensas preservam progresso e não duplicam palavras, dias ou unidades',()=>{
 let p=reward(emptyProgress(),{xp:20,learned:['ovava'],unit:0},new Date('2026-09-30T12:00:00Z'));
 p=reward(p,{xp:10,learned:['ovava'],unit:0},new Date('2026-09-30T13:00:00Z'));
 assert.equal(p.xp,30);assert.deepEqual(p.learned,['ovava']);assert.deepEqual(p.completed,[0]);assert.equal(p.days.length,1);
});
test('sequência respeita Luanda, ontem e interrupções',()=>{
 assert.equal(streak(['2026-09-28','2026-09-29'],new Date('2026-09-30T12:00:00Z')),2);
 assert.equal(streak(['2026-09-28'],new Date('2026-09-30T12:00:00Z')),0);
 assert.equal(streak(['2026-09-30','2026-10-01'],new Date('2026-09-30T23:30:00Z')),2);
});
test('dados locais inválidos são normalizados',()=>{
 const p=sanitizeProgress({xp:-5,completed:[0,0,17],learned:['ovava','inventado'],days:['bad'],arenaBest:999,arenaVersion:2});
 assert.equal(p.xp,0);assert.deepEqual(p.completed,[0]);assert.deepEqual(p.learned,['ovava']);assert.deepEqual(p.days,[]);assert.deepEqual(p.arenaDone,[0,1,2,3,4,5]);
});
test('vocabulário de todas as lições existe na fonte guardada',async()=>{
 const source=JSON.parse((await readFile(new URL('../referencias/dicionarios/umbundu-portugues.json',import.meta.url),'utf8')).replace(/^\uFEFF/,''));
 for(const word of WORDS)assert.ok(source.entradas.some(row=>normalize(row.portugues)===normalize(word.pt)&&row.palavra.split(/[,;]/).map(x=>normalize(x)).includes(normalize(word.word))),word.word);
});
test('missões usam palavras da fonte e respostas portuguesas correctas',()=>{
 assert.equal(MISSIONS.length,WORDS.length);for(const m of MISSIONS)assert.equal(m.chapter,WORDS[m.wordId].unit);
 for(const mission of MISSIONS){assert.equal(mission.locale,'pt-PT');assert.equal(mission.word,WORDS[mission.wordId].word);assert.ok(mission.answers.includes(WORDS[mission.wordId].pt));}
});
test('cada palavra tem uma imagem motivacional com frase e três cores',()=>{
 assert.equal(MOTIVATION.length,WORDS.length);
 for(const m of MOTIVATION){assert.ok(m.phrase.length>5);assert.equal(m.colors.length,3);}
});
test('recorde antigo não desbloqueia a nova aventura, mas XP e lições mantêm-se',()=>{
 const p=sanitizeProgress({xp:100,completed:[0],arenaBest:6});
 assert.equal(p.xp,100);assert.deepEqual(p.completed,[0]);assert.deepEqual(p.arenaDone,[]);assert.equal(p.arenaVersion,3);
 const updated=reward(reward(p,{xp:10,arena:[6]}),{arena:[6,7]});assert.deepEqual(updated.arenaDone,[6,7]);assert.ok(!chapterDone(updated,1));assert.ok(chapterDone(reward(p,{arena:[4,5,6,7]}),1));assert.ok(chapterOpen(p,0));assert.ok(!chapterOpen(p,1));assert.ok(chapterOpen(reward(p,{unit:1}),1));
});
test('erros ficam guardados até serem acertados à primeira e alimentam a revisão',()=>{
 let p=reward(emptyProgress(),{missed:['ovava','ondjo','inventado']});
 assert.deepEqual(p.mistakes,['ovava','ondjo']);
 assert.deepEqual(reviewQueue(p),[0,1]);
 p=reward(p,{fixed:['ovava']});
 assert.deepEqual(p.mistakes,['ondjo']);
 assert.deepEqual(sanitizeProgress({mistakes:['ovava','ovava','x']}).mistakes,['ovava']);
});
test('cada unidade tem 4 palavras existentes e todas as palavras pertencem a uma unidade',()=>{
 const used=UNITS.flatMap(u=>u.ids);
 assert.equal(UNITS.length,8);assert.equal(new Set(used).size,WORDS.length);
 for(const u of UNITS)assert.equal(u.ids.length,4);
});
test('vocabulário do Kimbundu existe no dicionário e traduz o sentido pretendido',async()=>{
 const source=JSON.parse(await readFile(new URL('../referencias/dicionarios/kimbundu-dicionario.json',import.meta.url),'utf8')).entradas;
 const items=e=>e.s.flatMap(s=>s.d.split(/[;|.]/).map(x=>normalize(x)));
 const k=COURSES.kimbundu;assert.ok(k.WORDS.length>=COURSES.umbundu.WORDS.length);assert.equal(k.UNITS.length*4,k.WORDS.length);assert.equal(k.MOTIVATION.length,k.WORDS.length);assert.equal(new Set(k.UNITS.flatMap(u=>u.ids)).size,k.WORDS.length);assert.equal(k.MISSIONS.length,k.WORDS.length);
 for(const w of k.WORDS)assert.ok(source.some(e=>e.p===w.word&&items(e).some(x=>x===normalize(w.pt)||x.startsWith(normalize(w.pt)+' '))),w.word+' = '+w.pt);
 assert.equal(new Set(k.WORDS.map(w=>w.word)).size,k.WORDS.length);
});
test('progresso por língua respeita o vocabulário de cada curso',()=>{
 const k=COURSES.kimbundu;
 assert.deepEqual(sanitizeProgress({learned:['Mênya','ovava'],mistakes:['Bhata','ondjo']},k).learned,['Mênya']);
 assert.deepEqual(reward(emptyProgress(),{missed:['Bhata']},new Date(),k).mistakes,['Bhata']);
 assert.deepEqual(reviewQueue({mistakes:['Bhata']},5,k),[1]);
});
test('vidas recuperam uma a cada 15 minutos e nunca passam de 5',()=>{
 const t0=1_000_000;let h={value:5,at:t0};
 h=spendHeart(h,t0);h=spendHeart(h,t0);assert.equal(h.value,3);
 assert.equal(regenHearts(h,t0+14*60_000).value,3);
 assert.equal(regenHearts(h,t0+15*60_000).value,4);
 assert.equal(regenHearts(h,t0+31*60_000).value,5);
 assert.equal(regenHearts(h,t0+10*60*60_000).value,5);
 assert.equal(heartWait(h,t0+5*60_000),10*60_000);
 assert.equal(gainHeart({value:5,at:t0},t0).value,5);
 assert.equal(spendHeart({value:0,at:t0},t0).value,0);
 assert.equal(regenHearts({value:'x',at:'y'},t0).value,5);
});
test('lição tem escolher, reconhecer/ouvir e ligar pares; revisão só escolhe e liga',()=>{
 const steps=buildSteps([0,1,2,3],{canListen:true,random:()=>0.5});
 assert.equal(steps.filter(s=>s.kind==='choose').length,4);
 assert.equal(steps.filter(s=>s.kind==='reverse'||s.kind==='listen').length,4);
 assert.ok(steps.some(s=>s.kind==='listen')&&steps.some(s=>s.kind==='reverse'));
 assert.equal(steps.at(-1).kind,'match');
 assert.ok(!buildSteps([0,1,2,3]).some(s=>s.kind==='listen'));
 const rev=buildSteps([4,5],{review:true});assert.deepEqual(rev.map(s=>s.kind),['choose','choose']);
});
