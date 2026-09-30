const PALETTES = [
  ['#cfe8ef','#7fb8cc','#3f86a3'],['#f6e2c4','#e0a86a','#b5723a'],['#f3e6c8','#d9b56c','#a5763a'],['#f8dcc0','#e6975f','#b9603a'],
  ['#fbeeb8','#f0c65a','#d59a2c'],['#e2eccb','#a9c47d','#6f9250'],['#f7d5d0','#e59a94','#bf5f5c'],['#e0e3f2','#9fa7d3','#666fae'],
];
export const WORDS = [
  {word:'ovava', pt:'água', icon:'water', emoji:'💧', unit:0},
  {word:'ondjo', pt:'casa', icon:'home', emoji:'🏡', unit:0},
  {word:'ombwa', pt:'cão', icon:'paw', emoji:'🐶', unit:0},
  {word:'okulya', pt:'comer', icon:'food', emoji:'🍲', unit:0},
  {word:'esandju', pt:'alegria', icon:'smile', emoji:'😄', unit:1},
  {word:'ekamba', pt:'amigo', icon:'people', emoji:'🤝', unit:1},
  {word:'ocisola', pt:'amor', icon:'heart', emoji:'❤️', unit:1},
  {word:'okwenda', pt:'andar', icon:'steps', emoji:'🚶', unit:1},
  {word:'uti', pt:'árvore', icon:'leaf', emoji:'🌳', unit:2},
  {word:'ombela', pt:'chuva', icon:'water', emoji:'🌧️', unit:2},
  {word:'ondjila', pt:'caminho', icon:'steps', emoji:'🛤️', unit:2},
  {word:'imbo', pt:'aldeia', icon:'home', emoji:'🏘️', unit:2},
  {word:'utwe', pt:'cabeça', icon:'smile', emoji:'🧠', unit:3},
  {word:'omela', pt:'boca', icon:'mic', emoji:'👄', unit:3},
  {word:'etimba', pt:'corpo', icon:'people', emoji:'🧍', unit:3},
  {word:'onyima', pt:'costas', icon:'steps', emoji:'🎒', unit:3},
  {word:'ongombe', pt:'boi', icon:'paw', emoji:'🐂', unit:4},
  {word:'ohombo', pt:'cabra', icon:'paw', emoji:'🐐', unit:4},
  {word:'onyoha', pt:'cobra', icon:'paw', emoji:'🐍', unit:4},
  {word:'olunyihi', pt:'abelha', icon:'leaf', emoji:'🐝', unit:4},
  {word:'okumola', pt:'ver', icon:'search', emoji:'👀', unit:5},
  {word:'okupopya', pt:'falar', icon:'mic', emoji:'🗣️', unit:5},
  {word:'okunywa', pt:'beber', icon:'water', emoji:'🥤', unit:5},
  {word:'okutanga', pt:'ler', icon:'book', emoji:'📖', unit:5},
  {word:'okulongisa', pt:'ensinar', icon:'book', emoji:'🧑🏾‍🏫', unit:6},
  {word:'okusoneha', pt:'escrever', icon:'book', emoji:'✏️', unit:6},
  {word:'okusola', pt:'amar', icon:'heart', emoji:'💛', unit:6},
  {word:'okulila', pt:'chorar', icon:'water', emoji:'😢', unit:6},
  {word:'eteke', pt:'dia', icon:'star', emoji:'🌅', unit:7},
  {word:'utima', pt:'coração', icon:'heart', emoji:'💗', unit:7},
  {word:'ositu', pt:'carne', icon:'food', emoji:'🍖', unit:7},
  {word:'olumbongo', pt:'dinheiro', icon:'diamond', emoji:'💰', unit:7},
];
export const MOTIVATION = [
  'Como a água, segue sempre em frente.','Cada palavra é um tijolo da tua casa.','Com um bom companheiro, o caminho é mais leve.','Alimenta a curiosidade e vais longe.',
  'A alegria de aprender abre todas as portas.','Juntos chegamos mais longe.','Aprende com amor e nunca vais desistir.','Um passo de cada vez, todos os dias.',
  'Como uma árvore, cresce com raízes fortes.','Depois da chuva, tudo floresce.','Todo o caminho começa com um passo.','Uma aldeia aprende junta.',
  'Usa a cabeça e o coração.','A tua voz merece ser ouvida.','Cuida do corpo, cuida da mente.','Leva as tuas palavras contigo, com orgulho.',
  'Com paciência, chega-se longe.','Salta de palavra em palavra, sem medo.','Aprende com calma e atenção.','Pouco a pouco, o mel enche a colmeia.',
  'Abre os olhos: há palavras em toda a parte.','Falar é o melhor treino.','Bebe conhecimento todos os dias.','Ler abre mundos.',
  'Ensinar é aprender duas vezes.','Escreve o que aprendes e não esqueces.','Amar a língua é guardá-la.','Errar faz parte de aprender.',
  'Cada dia é uma nova oportunidade.','Fala com o coração.','Alimenta o corpo e a vontade.','O maior tesouro é o que aprendes.',
].map((phrase,i)=>({phrase,colors:PALETTES[i%PALETTES.length]}));
export const UNITS = [
  {title:'O teu primeiro passo',subtitle:'Água, casa e pequenas descobertas',label:'À tua volta',ids:[0,1,2,3]},
  {title:'Palavras que aproximam',subtitle:'Pessoas, sentimentos e movimento',label:'As nossas ligações',ids:[4,5,6,7]},
  {title:'A terra e o céu',subtitle:'Árvores, chuva, caminhos e aldeias',label:'A natureza',ids:[8,9,10,11]},
  {title:'O corpo que fala',subtitle:'Cabeça, boca, corpo e costas',label:'O corpo',ids:[12,13,14,15]},
  {title:'Os bichos da nossa terra',subtitle:'Boi, cabra, cobra e abelha',label:'Os animais',ids:[16,17,18,19]},
  {title:'Verbos do dia a dia',subtitle:'Ver, falar, beber e ler',label:'Acções',ids:[20,21,22,23]},
  {title:'Aprender e sentir',subtitle:'Ensinar, escrever, amar e chorar',label:'Aprender',ids:[24,25,26,27]},
  {title:'O nosso dia',subtitle:'Dia, coração, carne e dinheiro',label:'A vida',ids:[28,29,30,31]},
];
const STORIES = [["O rio das palavras","A estrela encontrou um rio mágico. Ajuda-a a atravessar!","Splash! Uma ponte apareceu."],["Um abrigo acolhedor","Está a anoitecer. A estrela precisa de um lugar para descansar.","Toc, toc! A porta abriu-se."],["Um amigo de quatro patas","Um companheiro brincalhão quer juntar-se à aventura.","Au, au! Ganhaste um companheiro."],["Pausa para o lanche","A caminhada abriu o apetite. Está na hora de recuperar energia!","Nhami! Energia para continuar."],["A clareira dos sorrisos","As flores só abrem quando descobres esta palavra.","A clareira encheu-se de cor!"],["Juntos até ao fim","A melhor parte da aventura é ter alguém ao nosso lado.","Conseguimos! A aventura sabe melhor em companhia."],["Um coração que ilumina","Uma lanterna só acende com a palavra do amor.","A lanterna acendeu-se!"],["Um passo de cada vez","A estrada é longa, mas cada passo conta.","Passo a passo, avançámos!"],["A árvore da sombra","O sol aperta. Há uma árvore à espera de ser nomeada.","A sombra fresca chegou!"],["A chuva chegou","Nuvens escuras cobrem o céu. Que palavra as faz chover?","Chuá! A terra ficou verde."],["O caminho escondido","O mato fechou a passagem. Só a palavra certa a abre.","O caminho abriu-se!"],["A aldeia ao longe","Ao longe vêem-se telhados e fumo. É a aldeia!","Bem-vindos à aldeia!"],["O chapéu de palha","Um chapéu voou com o vento. Onde deve pousar?","Ficou-te mesmo bem!"],["O canto da manhã","Os pássaros esperam que alguém abra a boca e cante.","A manhã encheu-se de música!"],["A dança da roda","Toda a gente dança. Move o corpo ao ritmo do batuque!","Que dança bonita!"],["A mochila do viajante","A viagem é longa. A mochila vai às costas.","Mochila pronta!"],["O boi teimoso","Um boi bloqueia a estrada. Como se chama?","Muuu! O boi deu passagem."],["A cabra saltitona","Uma cabra saltou a cerca e foge pela colina!","Béé! A cabra voltou."],["Silêncio, há uma cobra","Algo se mexe na erva. Calma e atenção!","A cobra foi-se embora em paz."],["O zumbido do mel","Uma abelha guia-te até à colmeia.","Que doce recompensa!"],["Olhos bem abertos","Há uma surpresa escondida. Só quem vê a encontra.","Encontraste o tesouro!"],["A praça das conversas","Na praça todos falam. É a tua vez!","A praça aplaudiu-te!"],["A fonte fresca","O caminho foi quente. A fonte espera por ti.","Que frescura!"],["O livro antigo","Um livro antigo espera que alguém o leia.","A história começou!"],["A escola debaixo da árvore","As crianças esperam pelo professor. O que se faz na escola?","A lição foi um sucesso!"],["A carta para um amigo","Queres deixar uma mensagem escrita ao teu amigo.","A carta seguiu viagem!"],["A canção do coração","Uma canção só se completa com um verbo bonito.","A canção ecoou!"],["A chuva das lágrimas","Até as estrelas choram às vezes. Depois vem o sol.","Depois da tristeza, o sol voltou."],["O nascer do sol","O céu ficou cor de laranja. Começa um novo…","Um novo dia começou!"],["O tambor do coração","Ouve o bum-bum dentro do peito.","Bum-bum! O ritmo certo."],["O jantar da festa","A festa está quase pronta. Falta o prato principal.","Que banquete!"],["O mercado","No mercado, cada compra precisa de dinheiro.","Negócio fechado!"]];
const THEMES = ["river","home","dog","food","joy","friend"];
// Uma missão por palavra; o capítulo da aventura é a unidade da lição.
const makeMissions = (words, stories) => words.map((w,i)=>({wordId:i,chapter:w.unit,title:stories[i][0],story:stories[i][1],success:stories[i][2],emoji:w.emoji,theme:THEMES[i%THEMES.length],word:w.word,answers:[w.pt],locale:'pt-PT'}));
export const MISSIONS = makeMissions(WORDS, STORIES);
export const chapterMissions = (chapter, course=COURSES.umbundu) => course.MISSIONS.filter(m=>m.chapter===chapter);
export const chapterOpen = (progress, chapter) => chapter===0||progress.completed.includes(chapter);
export const chapterDone = (progress, chapter, course=COURSES.umbundu) => chapterMissions(chapter, course).every(m=>progress.arenaDone.includes(m.wordId));
export const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,' ');
export function isCorrect(answer, expected) { return normalize(answer) === normalize(expected); }
export function dayKey(date = new Date()) { return new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Luanda',year:'numeric',month:'2-digit',day:'2-digit'}).format(date); }
export function emptyProgress() { return {xp:0,completed:[],days:[],learned:[],mistakes:[],arenaDone:[],arenaVersion:3}; }
export function sanitizeProgress(value, course=COURSES.umbundu) {
  const {WORDS,UNITS}=course;
  const v=value && typeof value==='object' ? value : {};
  return {xp:Number.isFinite(v.xp)?Math.max(0,Math.floor(v.xp)):0,
    completed:[...new Set(Array.isArray(v.completed)?v.completed.filter(x=>Number.isInteger(x)&&x>=0&&x<UNITS.length):[])],
    days:[...new Set(Array.isArray(v.days)?v.days.filter(x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)):[])].sort(),
    learned:[...new Set(Array.isArray(v.learned)?v.learned.filter(x=>WORDS.some(w=>w.word===x)):[])],
    mistakes:[...new Set(Array.isArray(v.mistakes)?v.mistakes.filter(x=>WORDS.some(w=>w.word===x)):[])],
    arenaVersion:3,arenaDone:[...new Set(Array.isArray(v.arenaDone)?v.arenaDone.filter(x=>Number.isInteger(x)&&x>=0&&x<WORDS.length):v.arenaVersion===2&&Number.isFinite(v.arenaBest)?Array.from({length:Math.min(6,Math.max(0,Math.floor(v.arenaBest)))},(_,i)=>i):[])]};
}
export function streak(days, now=new Date()) {
  const today=dayKey(now), keys=new Set(days);
  let cursor=new Date(`${today}T12:00:00Z`), total=0;
  if(!keys.has(today)) cursor.setUTCDate(cursor.getUTCDate()-1);
  while(keys.has(dayKey(cursor))) {total++;cursor.setUTCDate(cursor.getUTCDate()-1);}
  return total;
}
export function reward(progress, {xp=0,learned=[],unit=null,arena=[],missed=[],fixed=[]}, now=new Date(), course=COURSES.umbundu) {
  return sanitizeProgress({...progress,mistakes:[...progress.mistakes.filter(x=>!fixed.includes(x)),...missed],xp:progress.xp+xp,days:[...progress.days,dayKey(now)],learned:[...progress.learned,...learned],completed:unit===null?progress.completed:[...progress.completed,unit],arenaDone:[...progress.arenaDone,...arena]},course);
}
export function shuffle(array, random=Math.random) {
  const copy=[...array]; for(let i=copy.length-1;i>0;i--) {const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];} return copy;
}
export function reviewQueue(progress, max=5, course=COURSES.umbundu) { return progress.mistakes.slice(0,max).map(word=>course.WORDS.findIndex(w=>w.word===word)).filter(i=>i>=0); }

// Kimbundu: mesmos temas e ordem das unidades. Palavra e tradução vêm do dicionário do Kimbundu.org (Assis Júnior, anos 1940).
const KIM_WORDS = [
  ['Mênya','água'],['Bhata','casa'],['Mbua','cão'],['Kúria','comer'],['Kiuéue','alegria'],['Kámba','amigo'],['Kizola','amor'],['Kwenda','andar'],
  ['Mâvu','terra'],['Nvula','chuva'],['Njila','caminho'],['Sanzala','povoado'],['Mâútue','cabeça'],['Dikánu','boca'],['Mukútu','corpo'],['Mujinjingu','costas'],
  ['Ngómbe','boi'],['Même','cabra'],['Nyoxa','cobra'],['Nyiki','abelha'],['Kúmona','ver'],['Kuzwela','falar'],['Kûnua','beber'],['Kútanga','ler'],
  ['Kulónga','ensinar'],['Kusoneka','escrever'],['Kúzola','gostar'],['Kuríla','chorar'],['Kizúa','dia'],['Muxima','coração'],['Nyama','carne'],['Kitari','dinheiro'],
];
const KIM_EXTRA = {8:{emoji:'🌍',icon:'leaf'},26:{emoji:'💛'}};
const KIM_STORY = {8:['Os pés na terra','O caminho está seco. Só a palavra certa faz a terra florescer.','A terra ficou cheia de verde!']};
const KIM_PHRASE = {8:'Com os pés na terra, chega-se mais longe.',11:'Um povoado aprende junto.',26:'Gostar da língua é guardá-la.'};
const KIM_UNIT = {2:{subtitle:'Terra, chuva, caminhos e povoados'},6:{subtitle:'Ensinar, escrever, gostar e chorar'}};
// Unidades 9 a 20 do Kimbundu (só existem neste curso): palavra, tradução, ícone, emoji, frase motivacional.
const KIM_MORE = [
  ['Mâma','mãe','people','👩🏾','A língua da mãe é a mais doce.'],['Pái','pai','people','👨🏾','Quem aprende com o pai aprende para a vida.'],['Môna','filho','people','👶🏾','Cada palavra que ensinas é uma herança.'],['Phange','irmão','people','🧑🏾‍🤝‍🧑🏾','Aprender em família é aprender duas vezes.'],
  ['Iala','homem','people','👨🏾','Fala com firmeza e ouve com respeito.'],['Múkaji','mulher','people','👩🏾','A sabedoria também se conta em palavras.'],['Kúku','avô','people','👴🏾','Os mais velhos guardam as nossas palavras.'],['Ndongixi','mestre','book','🧑🏾‍🏫','Um bom mestre nunca deixa de aprender.'],
  ['Túbhya','fogo','star','🔥','Mantém acesa a vontade de aprender.'],['Ditari','pedra','leaf','🪨','Pedra a pedra se constrói uma língua.'],['Tetembua','estrela','star','⭐','Segue a tua estrela, palavra a palavra.'],['Dituta','nuvem','water','☁️','Depois da nuvem, o sol volta sempre.'],
  ['Disu','olho','search','👁️','Olha bem: cada palavra tem uma história.'],['Lukwaku','mão','people','✋🏾','Com as mãos construímos e aprendemos.'],['Dizunu','nariz','smile','👃🏾','Fareja novas palavras por todo o lado.'],['Kináma','perna','steps','🦵🏾','Pernas firmes fazem longas caminhadas.'],
  ['Sánji','galinha','paw','🐔','Grão a grão, enche a galinha o papo.'],['Ngátu','gato','paw','🐱','Curiosidade é o melhor guia.'],['Nzamba','elefante','paw','🐘','Quem aprende devagar não esquece.'],['Xixikinya','formiga','paw','🐜','Pequenos esforços, grandes resultados.'],
  ['Léte','leite','food','🥛','Alimenta-te de palavras todos os dias.'],['Môngwa','sal','food','🧂','Uma pitada de prática dá sabor à língua.'],['Dihónjo','banana','food','🍌','Doce é a recompensa de quem persiste.'],['Sabola','cebola','food','🧅','Cada camada revela mais uma palavra.'],
  ['Dibítu','porta','home','🚪','Cada palavra nova abre uma porta.'],['Mêza','mesa','home','🍽️','À mesa também se aprende a falar.'],['Pôko','faca','food','🔪','Afia a memória com prática diária.'],['Lópa','roupa','people','👕','Veste-te de coragem para falar.'],
  ['Dijina','nome','book','🏷️','Cada coisa tem um nome; descobre-o.'],['Kizwelu','palavra','mic','💬','Uma palavra certa muda tudo.'],['Divulu','livro','book','📚','Um livro aberto é uma janela.'],['Xikola','escola','book','🏫','A escola da vida nunca fecha.'],
  ['Kúzeka','dormir','smile','😴','Descansa: o cérebro aprende enquanto dormes.'],['Kubana','dar','heart','🎁','Partilha o que aprendes.'],['Kuya','ir','steps','🚶🏾','Vai sempre em frente.'],['Kwiza','vir','steps','👋🏾','Vem aprender de novo amanhã.'],
  ['Kuijia','saber','star','💡','Saber é o primeiro passo para falar.'],['Kukalakala','trabalhar','diamond','⚒️','Trabalho constante, língua firme.'],['Kusumba','comprar','diamond','🛒','Investe tempo em aprender.'],['Kukinga','esperar','clock','⏳','Quem espera com esforço alcança.'],
  ['Diônene','grande','star','🏔️','Sonha grande, aprende todos os dias.'],['Múuabe','bonito','leaf','🌺','Há beleza em cada palavra nova.'],['Vélu','velho','people','👵🏾','A idade traz as palavras mais sábias.'],['Bhonzo','frio','water','❄️','Mesmo no frio, continua a aprender.'],
  ['Nzála','fome','food','🥣','Tem fome de saber.'],['Paze','paz','heart','🕊️','Aprender traz paz.'],['Dinyota','sede','water','🚰','Sede de aprender nunca faz mal.'],['Kîri','verdade','star','✅','Fala a verdade, com palavras certas.'],
  ['Umoxi','um','star','1️⃣','Tudo começa com um primeiro passo.'],['Iari','dois','star','2️⃣','Dois a aprender avançam mais depressa.'],['Atatu','três','star','3️⃣','Três vezes por semana já faz diferença.'],['Awana','quatro','star','4️⃣','Quatro palavras por dia, e o resto vem.'],
  ['Kitánu','cinco','star','5️⃣','Cinco minutos por dia chegam para começar.'],['Tusamanu','seis','star','6️⃣','Seis dias seguidos: já é um hábito!'],['Sambwadi','sete','star','7️⃣','Uma semana inteira a aprender!'],['Dinake','oito','star','8️⃣','Oito é o número de quem não desiste.'],
  ['Hundungulu','preto','leaf','⚫','Até a noite escura tem estrelas.'],['Wisu','verde','leaf','🟢','Verde é a cor de quem está a crescer.'],['Nanu','alto','steps','📏','Aponta alto e aprende todos os dias.'],['Nvama','rico','diamond','💎','O saber é a maior riqueza.'],
  ['Manyinga','sangue','heart','🩸','A língua corre nas nossas veias.'],['Kibha','pele','people','🖐🏾','Sente cada palavra como tua.'],['Hâxi','doente','smile','🤒','Até doente se pode aprender uma palavra.'],['Kalolo','calor','star','🌞','O calor da prática derrete a dúvida.'],
  ['Ndíngu','capim','leaf','🌾','O capim cresce pouco a pouco; tu também.'],['Utokwa','cinza','water','🌫️','Da cinza renasce o fogo.'],['Ulu','ouro','diamond','🥇','Cada palavra aprendida vale ouro.'],['Vinyu','vinho','food','🍷','O que é bom amadurece com o tempo.'],
  ['Háma','cama','home','🛏️','Dorme bem e acorda a saber mais.'],['Sabhi','chave','lock','🔑','Cada palavra é uma chave.'],['Máta','tomate','food','🍅','Cultiva o teu vocabulário com paciência.'],['Dilalânza','laranja','food','🍊','Aprender é fruta que se colhe todos os dias.'],
  ['Kabalu','cavalo','paw','🐴','Vai a galope, mas com cuidado.'],['Béngu','rato','paw','🐭','Pequeno, mas esperto, aprende depressa.'],['Ngúju','tambor','mic','🥁','Dá ritmo à tua aprendizagem.'],['Kwimbila','cantar','mic','🎤','Cantar ajuda a guardar as palavras.'],
  ['Kúlenga','correr','steps','🏃🏾','Corre atrás dos teus sonhos.'],['Kutumbuka','saltar','steps','🤸🏾','Salta os obstáculos, um de cada vez.'],['Kuzowa','nadar','water','🏊🏾','Mergulha na língua sem medo.'],['Kuvumuka','voar','star','✈️','Com palavras, voas mais longe.'],
  ['Kuxikama','sentar','home','🪑','Senta-te e concentra-te: cinco minutos bastam.'],['Kútala','olhar','search','🔎','Olha com atenção e vais aprender.'],['Kujímba','esquecer','smile','🤔','Esquecer faz parte; revê e recorda.'],['Kusukula','lavar','water','🧼','Limpa a mente e recomeça.'],
  ['Kúlamba','cozinhar','food','🍳','Cozinha o teu saber em lume brando.'],['Kukánda','cavar','leaf','⛏️','Cava fundo para encontrar o tesouro.'],['Kujika','fechar','lock','🔒','Fecha o dia com uma palavra nova.'],['Kubokona','entrar','home','🏠','Entra no mundo da língua.'],
  ['Kutúnda','sair','steps','👋','Sai da zona de conforto.'],['Kusánga','encontrar','search','🧭','Quem procura encontra.'],['Kukubuka','cair','leaf','🍂','Cair é levantar-se outra vez.'],['Kunjongona','cortar','food','✂️','Corta as dúvidas com prática.'],
];
const KIM_MORE_UNITS = [
  ['A nossa família','Mãe, pai, filho e irmão','A família'],['Pessoas à nossa volta','Homem, mulher, avô e mestre','As pessoas'],['Fogo, pedra e estrelas','O céu e a terra','O céu'],['Olhos, mãos e passos','Olho, mão, nariz e perna','O corpo II'],
  ['Mais bichos','Galinha, gato, elefante e formiga','Os animais II'],['À mesa','Leite, sal, banana e cebola','A comida'],['Dentro de casa','Porta, mesa, faca e roupa','A casa'],['Palavras e escola','Nome, palavra, livro e escola','A escola'],
  ['Verbos em movimento','Dormir, dar, ir e vir','Acções II'],['Saber e fazer','Saber, trabalhar, comprar e esperar','Acções III'],['Como são as coisas','Grande, bonito, velho e frio','As qualidades'],['O que sentimos e vivemos','Fome, paz, sede e verdade','A vida II'],
  ['Contar: 1 a 4','Um, dois, três e quatro','Números I'],['Contar: 5 a 8','Cinco, seis, sete e oito','Números II'],['Como são as coisas II','Preto, verde, alto e rico','As qualidades II'],['Corpo e saúde','Sangue, pele, doente e calor','A saúde'],
  ['Coisas da terra','Capim, cinza, ouro e vinho','A terra II'],['Casa e horta','Cama, chave, tomate e laranja','A horta'],['Bichos e música','Cavalo, rato, tambor e cantar','A música'],['Em movimento','Correr, saltar, nadar e voar','O movimento'],
  ['Pequenas acções','Sentar, olhar, esquecer e lavar','Acções IV'],['Mãos à obra','Cozinhar, cavar, fechar e entrar','Acções V'],['Ir e vir','Sair, encontrar, cair e cortar','Acções VI'],
].map(([title,subtitle,label],i)=>({title,subtitle,label,ids:[0,1,2,3].map(k=>32+i*4+k)}));
const KIM_MORE_STORY = ['Um novo desafio espera a estrela. Descobre esta palavra para avançar!','A estrela encontrou uma pista. O que significa esta palavra?','O caminho continua. Só falta descobrir esta palavra.','Mais uma porta fechada. A palavra certa é a chave!'];
const KIM_MORE_SUCCESS = ['Muito bem! Mais uma porta se abriu.','Conseguiste! A estrela sorri.','Certo! O caminho continua.','Excelente! A aventura avança.'];
const KIM_MORE_WORDS = KIM_MORE.map(([word,pt,icon,emoji],i)=>({word,pt,icon,emoji,unit:8+Math.floor(i/4)}));
const KIM_MORE_STORIES = KIM_MORE_WORDS.map((w,i)=>[`Desafio: ${w.pt}`,KIM_MORE_STORY[i%4],KIM_MORE_SUCCESS[i%4]]);
const KIM_MORE_MOTIVATION = KIM_MORE.map(([,,,,phrase],i)=>({phrase,colors:PALETTES[(i+3)%PALETTES.length]}));
const KIM_WORDS_FULL = [...WORDS.map((w,i)=>({...w,word:KIM_WORDS[i][0],pt:KIM_WORDS[i][1],...KIM_EXTRA[i]})),...KIM_MORE_WORDS];
const KIM_STORIES = [...STORIES.map((s,i)=>KIM_STORY[i]||s),...KIM_MORE_STORIES];
const KIM_UNITS = [...UNITS.map((u,i)=>({...u,...KIM_UNIT[i]})),...KIM_MORE_UNITS];
const KIM_MOTIVATION = [...MOTIVATION.map((m,i)=>KIM_PHRASE[i]?{...m,phrase:KIM_PHRASE[i]}:m),...KIM_MORE_MOTIVATION];
export const COURSES = {
  umbundu:{id:'umbundu',name:'Umbundu',WORDS,UNITS,MISSIONS,MOTIVATION,dictionary:'dictionary.json'},
  kimbundu:{id:'kimbundu',name:'Kimbundu',WORDS:KIM_WORDS_FULL,UNITS:KIM_UNITS,MISSIONS:makeMissions(KIM_WORDS_FULL,KIM_STORIES),MOTIVATION:KIM_MOTIVATION,dictionary:'kimbundu.json'},
};

// Vidas (estilo Duolingo): 5 no máximo, recuperam uma a cada 15 minutos. Funções puras, o estado é {value, at}.
export const HEART_MAX = 5, HEART_MS = 15 * 60 * 1000;
export function regenHearts(h, now = Date.now()) {
  const value = Number.isFinite(h?.value) ? Math.min(HEART_MAX, Math.max(0, Math.floor(h.value))) : HEART_MAX;
  let at = Number.isFinite(h?.at) ? Math.min(h.at, now) : now;
  if (value >= HEART_MAX) return { value: HEART_MAX, at: now };
  const gained = Math.floor((now - at) / HEART_MS);
  if (!gained) return { value, at };
  const next = Math.min(HEART_MAX, value + gained);
  return { value: next, at: next >= HEART_MAX ? now : at + gained * HEART_MS };
}
export function spendHeart(h, now = Date.now()) { const r = regenHearts(h, now); return { value: Math.max(0, r.value - 1), at: r.value >= HEART_MAX ? now : r.at }; }
export function gainHeart(h, now = Date.now()) { const r = regenHearts(h, now); const value = Math.min(HEART_MAX, r.value + 1); return { value, at: value >= HEART_MAX ? now : r.at }; }
export function heartWait(h, now = Date.now()) { const r = regenHearts(h, now); return r.value >= HEART_MAX ? 0 : Math.max(0, r.at + HEART_MS - now); }

// Sequência de exercícios de uma lição: 1) escolher a palavra, 2) reconhecer o significado ou ouvir, 3) ligar pares.
export function buildSteps(ids, { review = false, canListen = false, random = Math.random } = {}) {
  const steps = ids.map(id => ({ kind: 'choose', id }));
  if (!review) {
    const kinds = canListen ? ['reverse', 'listen'] : ['reverse'];
    shuffle(ids, random).forEach((id, i) => steps.push({ kind: kinds[i % kinds.length], id }));
  }
  if (ids.length >= 3) steps.push({ kind: 'match', ids: [...ids] });
  return steps;
}
