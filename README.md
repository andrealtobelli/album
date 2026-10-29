# Nosso álbum 💛

Site estático, sem dependências. O projeto configura Node.js 22 para o build na Vercel.

## Rodar localmente

Execute `npm run dev` e abra http://localhost:3000. Para encerrar, use Ctrl+C no terminal.

## Personalizar

Edite `config.js`: início do contador (com fuso), foto principal, fotos, legendas, recados e carta. Os textos atuais da carta e das fotos são sugestões editáveis, não relatos de acontecimentos.

Coloque as fotos em `public/photos/` e preencha `src`, por exemplo `/public/photos/nossa-foto.jpg`. Preencha também `alt` com uma descrição da imagem. Com `src` vazio, a ilustração reservada continua aparecendo.

As legendas também podem ser editadas diretamente no álbum. Essas alterações ficam apenas neste navegador, em localStorage; para compartilhá-las com todos, atualize `config.js`. Não há upload, banco de dados ou sincronização de fotos.

## Verificar e publicar na Vercel

Execute `npm test` e `npm run build`. O resultado fica em `dist/`.

1. Envie os arquivos atualizados para o GitHub (`git add .`, `git commit -m "Prepara publicação na Vercel"` e `git push`).
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Deixe **Root Directory** na raiz do repositório. Use o preset **Other**, comando de build `npm run build` e diretório de saída `dist` (já definidos em `vercel.json`). Não é necessário configurar variáveis de ambiente.
4. Clique em **Deploy**. Os próximos pushes na branch de produção atualizarão o site pela integração com o GitHub.

Se preferir o terminal, execute `npx vercel` na pasta do projeto para uma prévia e `npx vercel --prod` para publicar em produção. O servidor local não precisa ficar ligado para o site publicado funcionar.

O site não tem autenticação: quem tiver acesso ao endereço publicado poderá ver as fotos e os textos. As fontes do Google têm alternativas locais caso não carreguem.
