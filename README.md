# Nosso álbum 💛

Site estático, sem dependências. Requer Node.js 20 ou superior.

## Rodar localmente

Execute `npm run dev` e abra http://localhost:3000. Para encerrar, use Ctrl+C no terminal.

## Personalizar

Edite `config.js`: início do contador (com fuso), foto principal, fotos, legendas, recados e carta. Os textos atuais da carta e das fotos são sugestões editáveis, não relatos de acontecimentos.

Coloque as fotos em `public/photos/` e preencha `src`, por exemplo `/public/photos/nossa-foto.jpg`. Preencha também `alt` com uma descrição da imagem. Com `src` vazio, a ilustração reservada continua aparecendo.

As legendas também podem ser editadas diretamente no álbum. Essas alterações ficam apenas neste navegador, em localStorage; para compartilhá-las com todos, atualize `config.js`. Não há upload, banco de dados ou sincronização de fotos.

## Verificar e publicar na Vercel

Execute `npm test` e `npm run build`. O resultado fica em `dist/`.

Quando quiser publicar, envie o projeto para um repositório e importe na Vercel. Selecione o preset **Other**, comando de build `npm run build` e diretório de saída `dist` (já definidos em `vercel.json`). Também pode usar a CLI com `npx vercel` e, depois, `npx vercel --prod`.

O site não tem autenticação: quem tiver acesso ao endereço publicado poderá ver as fotos e os textos. As fontes do Google têm alternativas locais caso não carreguem.
