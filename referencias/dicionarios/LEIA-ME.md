# Referências linguísticas de Angola

Recolha: 30 de setembro de 2026. Os ficheiros distinguem Umbundu de Kimbundu e preservam as formas da fonte, sem inventar traduções ou corrigir grafias automaticamente.

## Umbundu

`umbundu-portugues.json` contém as 798 entradas disponibilizadas pelo Mundumbundu na data de recolha. A contagem foi confirmada pelo serviço público usado pelo próprio site: 798 resultados de 798. É uma cópia de todas as entradas dessa fonte naquele momento, não um dicionário completo de toda a língua.

Fonte: https://www.mundumbundu.ao/
Termos: https://www.mundumbundu.ao/termos
Origem editorial: https://www.mundumbundu.ao/sobre

Os termos permitem consulta gratuita e uso educacional, e proíbem reprodução comercial sem autorização prévia. Este arquivo destina-se a referência educacional. Não pressupõe autorização para publicação ou distribuição comercial.

As palavras, traduções e categorias foram preservadas como recebidas. A categoria da fonte não foi validada. Há grafias históricas e regionais. A página Sobre cita obras de Umbundu e de Quimbundo; a proveniência de cada entrada precisa de confirmação. Não usar como única autoridade linguística.

## Kimbundu

`kimbundu-indice.json` contém 10 060 ligações únicas para páginas de palavras no sitemap público. Não contém as definições do dicionário. O identificador extraído do URL serve para localizar a página e não substitui a grafia oficial da palavra.

Fonte do índice: https://www.kimbundu.org/sitemap.xml
Consulta: https://www.kimbundu.org/pt/
Abordagem editorial: https://www.kimbundu.org/pt/about

O site anuncia 10 688 entradas. O motivo da diferença para o número de URLs não foi confirmado; páginas podem agrupar entradas, mas isso não foi verificado. Não foi identificada licença de reprodução integral da edição digital. Por isso, as definições não foram copiadas em massa. Para completar um dicionário local de Kimbundu, é necessária uma fonte integral com licença adequada ou autorização do titular.

## Consulta futura

Executar no PowerShell, nesta pasta:

    .\consultar.ps1 -Termo agua
    .\consultar.ps1 -Termo muthu -Lingua kimbundu

A busca ignora maiúsculas e acentos. No Umbundu pesquisa palavra e tradução; no Kimbundu pesquisa identificadores e devolve ligações. Nenhum áudio ou frase de exemplo foi criado.

Os ficheiros permanecem em `D:\jogo angola\referencias\dicionarios`. Guardá-los neste projecto permite consultá-los em trabalho futuro; não equivale a memória permanente em todos os chats.

## Actualização: dados completos e autorização

O utilizador do projecto indicou ter recebido autorização dos titulares para usar estes dados na aplicação, com citação das fontes. A autorização não está guardada neste projecto; convém arquivar a resposta escrita.

- **Kimbundu:** `kimbundu-completo.jsonl` (extracção bruta, uma página por linha) e `kimbundu-dicionario.json` (versão compacta usada pela app; gerada por `node tools/compilar-kimbundu.mjs`). Fonte: Kimbundu.org, © Adilson Bacelar, corpus estruturado a partir de material histórico de Assis Júnior (anos 1940). Extraído com `tools/extrair-kimbundu.mjs`, com pausas entre pedidos.
- **Umbundu:** as 798 entradas em `umbundu-portugues.json`. Fonte: Mundumbundu.ao, a partir de José Pereira (1894) e Hélli Chatelain (1889).
- **Kikongo:** não incluído. Não foi extraído por falta de acesso claro aos dados.

O índice `kimbundu-indice.json` (só ligações) mantém-se como referência do sitemap.
