- Como o navegador funciona? https://www.youtube.com/watch?v=kDy62zaCHZE&feature=emb_logo

## Padronizando Códigos
- https://www.alura.com.br/artigos/como-automatizar-um-styleguide-em-projetos-dicas-de-react-003
    - https://standardjs.com/
    - https://eslint.org/

## Code review
- https://hipsters.tech/guia-do-iniciante-em-github-hipsters-184/
- https://hipsters.tech/pull-requests-e-code-review-hipsters-64/

## Feature Flags
- https://launchdarkly.com/


## Clean Code
- Tem o livro, mas tem os vídeos: https://www.youtube.com/watch?v=9w3o9NHXqu0&list=PLMdYygf53DP5Sc6yFYs6ZmjsuuA2fu0TK

## Dicas pra vida
- Vagas: https://github.com/frontendbr/vagas/issues 
- Testes: https://github.com/felipefialho/frontend-challenges

## Contato 
- https://twitter.com/omariosouto
- https://linkedin.com/in/omariosouto
- https://github.com/omariosouto

## Jogo com JS
- https://www.youtube.com/watch?v=jOAU81jdi-c

## Como saber os events importantes do JS?
- https://developer.mozilla.org/en-US/docs/Web/Events

## VsCode dicas
- https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes

## Dicas de animação
- https://airbnb.design/lottie/ (Precisa de alguuém que manje de After Effects)
- https://greensock.com/ (é paga mas o de Timeline não)

## Trabalhando com Eventos
- Konami Code: https://www.youtube.com/watch?v=6KS4t97yMlI

## Livro aberto de design patterns
- https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
    - Foca em aprender o que vc ganha usando e não em decorar nominhos

## Como fazer tutorial de entrada para novos usuários:
- https://introjs.com/

## Promisse Chain
- https://www.youtube.com/watch?v=kjhu1LEmRpY&list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi

## Animate API
- https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

## Barra de progresso de upload com JavaScript
- https://www.youtube.com/watch?v=H-091qVG6LM

## Clean Architecture: Uncle Bob
- https://www.youtube.com/watch?v=Nsjsiz2A9mg


## Como funciona o this na arrow function?
function()
O this, vai ser referente ao objeto no momento da execução.

arrow function () => {}
O this, vai ser referente ao objeto no momento de criação.

```js
const teste = () => {}

const teste = bla => {
    console.log(bla)
}

const teste = (bla, outroParam) => {
    console.log(bla, outroParam)
}
```

## Ferramentas para lidar com buscas e gráficos
- https://www.elastic.co/kibana
- https://www.elastic.co/
- https://www.algolia.com/
- https://www.chartjs.org/

## Ferramentas para visualização de dados
- https://www.youtube.com/watch?v=Gojqw9BQ5qY
- Pandas
- https://looker.com/#exit-popup

## Guia de Design Systems
- https://github.com/alexpate/awesome-design-systems

## Performance com Sérgio Lopes
- https://www.youtube.com/watch?v=EMCBd3kw4zs

## Como funciona o import/export
- https://www.alura.com.br/artigos/como-funciona-o-import-e-export-do-javascript

## Cypress
- https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

## You Don't Know JS
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md

## Para ver mais sobre SW
- https://mastery.games/serviceworkies/

============

# Exercício 01
> Capitulo 08 - Exercício: Removendo cartões com JavaScript
Pg: 78

- Aplicar o código que apaga cartões em todos os cartões da página
```js
onclick="this.parentNode.parentNode.remove()"
```

## Usuário
- clica no botão
- ve o cartão sumindo 

## Dev
- atrelar um código no click do botão
- fazer o elemento desejado sumir da página


## Exercicio 02
- Texto do botão linhas, tem que virar colunas
- Blocos ficarem um embaixo do outro ao invés de na horizontal
