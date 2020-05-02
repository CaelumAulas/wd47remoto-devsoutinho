1 - Criar uma nova pasta
2 - Acessar ela via terminal (cd projeto-novo)
3 - Criar um outro package.json dentro da pasta nova
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^9.3.6",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
```
4 - `npm install next react react-dom`
5 - Criar uma pasta pages com um arquivo `index.js`
```js
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```
6 - Roda no terminal `npm run dev` e altera o arquivo index.js criado