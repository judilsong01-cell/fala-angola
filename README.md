# Fala Angola

Protótipo local de aprendizagem de idiomas, com identidade própria, lições curtas de Umbundu e uma aventura de palavras por voz ou teclado.

## Abrir

Com Node.js 18 ou superior, nesta pasta:

    npm start

Abrir http://127.0.0.1:4173 no navegador. Não é preciso instalar dependências. O servidor fica acessível apenas neste computador.

## O que está implementado

- Duas unidades, oito palavras de Umbundu, respostas de escolha múltipla e correcção imediata.
- Desbloqueio da segunda unidade após concluir a primeira.
- Seis missões de Umbundu com rio mágico, abrigo, cão, lanche, flores e amigos; 15 segundos por palavra, tentativas e avanço da estrela.
- Reconhecimento de respostas em português usando SpeechRecognition: o jogador diz o significado da palavra de Umbundu. Alternativa por teclado e mensagens quando a voz está indisponível.
- Pesquisa nas 798 entradas guardadas de Umbundu, com paginação e atribuição.
- XP, sequência diária no fuso de Luanda, palavras aprendidas e conquistas guardadas em localStorage.
- Layout adaptado a telemóvel e computador, navegação por teclado e redução de animações.

## Limites da primeira versão

As lições nacionais disponíveis são de Umbundu. Kimbundu, Kikongo e Cokue estão identificados como em preparação. A aventura usa o mesmo vocabulário de Umbundu das lições. Não há bandeiras. O recorde do antigo desafio internacional é separado do novo percurso, mantendo os restantes pontos e lições.

O reconhecimento identifica palavras; não mede a qualidade da pronúncia. Depende do navegador, microfone, idioma e serviço de voz; pode enviar áudio ao fornecedor do navegador. Só começa mediante clique explícito. A aplicação não guarda áudio nem transcrições. A voz real precisa de validação pelo utilizador num navegador compatível; não há voz sintética ou pronúncia inventada para Umbundu.

O vocabulário de Umbundu vem de Mundumbundu e mantém as limitações descritas em `referencias/dicionarios/LEIA-ME.md`. Nas lições, algumas entradas com alternativas usam a primeira forma completa da fonte. É material para referência educacional, ainda sem revisão independente por falantes. Não pressupõe licença de distribuição comercial.

Sem conta, servidor de progresso, competição com outras pessoas ou sincronização entre dispositivos. Fontes visuais são carregadas do Google Fonts quando há ligação; o layout tem fontes alternativas locais.

## Verificação

    npm test

Os testes cobrem respostas, progresso, sequências de dias, integridade do vocabulário face à fonte e configuração dos desafios.

## Actualização: duas línguas

- Escolhe **Umbundu** ou **Kimbundu** no botão da língua (canto superior). O Umbundu tem 8 unidades (32 palavras) e o Kimbundu 31 unidades (124 palavras, incluindo números de 1 a 8), revisão de erros e aventura de voz por capítulos. O progresso é separado por língua; os dias seguidos contam para ambas.
- O vocabulário do Kimbundu vem do dicionário do Kimbundu.org (Assis Júnior, anos 1940); um teste confirma que cada palavra existe na fonte com a tradução indicada.
- Dicionário completo: 798 entradas de Umbundu (Mundumbundu.ao) e 10 688 de Kimbundu (Kimbundu.org). Fontes citadas na aplicação, utilizadas com autorização.
- Para publicar: `npm run build` e alojar a pasta `docs/` com HTTPS.

## Online e créditos

- Site: https://judilsong01-cell.github.io/fala-angola/ (abre no telemóvel e pode ser instalado; funciona offline depois da primeira visita).
- Fontes e autorizações: ver [CREDITOS.md](CREDITOS.md).
- `kimbundu-completo.jsonl` (extracção bruta) não vai para o repositório; gera-se com `node tools/extrair-kimbundu.mjs` e compila-se com `node tools/compilar-kimbundu.mjs`.

## Vidas e exercícios

- Cada lição mistura escolher a palavra, reconhecer o significado, **ouvir** (o português é lido em voz alta e escolhes a palavra; só aparece quando o aparelho tem voz em português) e **ligar pares**.
- Cinco vidas: perdes uma por cada erro nas lições e recuperas uma a cada 15 minutos. Quem fica sem vidas pode rever os erros e ganhar uma. A revisão e a aventura de voz não gastam vidas.

## Frases para um falante

Em [frases/](frases/LEIA-ME.md) estão os ficheiros para um falante preencher. Depois de revistos, `node tools/importar-frases.mjs <ficheiro.csv>` gera `public/frases.json`. Nada entra na app sem revisão de um falante.

## Endereço próprio (domínio)

1. Compra o domínio no registo que preferires (ex.: `faladangola.com`).
2. No DNS do domínio: quatro registos `A` para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`, e um `CNAME` de `www` para `judilsong01-cell.github.io`.
3. Diz-me o domínio e eu ligo-o ao GitHub Pages (ficheiro `docs/CNAME` e definição do site), ou faz-o em *Settings → Pages → Custom domain*.
4. Quando o GitHub validar o DNS, activa *Enforce HTTPS*.
