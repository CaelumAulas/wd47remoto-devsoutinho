// Não vamos colocar a IIFE
function criaHTMLDoCartao(conteudo) { // cria o template do cartão
  // Como aumentar o ID do contador baseado nos cards da tela
  // Conceito do Delegate
  // Sincronização com Servidor externo
  const contador = 0;

  // Copiem o HTML das Opções do cartão e coloqiuem nessa variável
  const opcoesDoCartao = `
    <div class="opcoesDoCartao">
      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
      </button>

      <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
      <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
      </label>

      <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
      <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
      </label>

      <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
      <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
      </label>

      <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
      <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
      </label>
    </div>
  `;

  const cartao = `
  <article id="cartao_${contador}" class="cartao" tabindex="0">
    ${opcoesDoCartao}
    <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
  </article>
  `;

  return cartao;
}


function criaCartao(conteudo) {
  const htmlDoCartao = criaHTMLDoCartao(conteudo);

  let tagTemplate = document.createElement('tpl')
  tagTemplate.innerHTML = htmlDoCartao;
  const cartao = tagTemplate.querySelector('.cartao');

  cartao.addEventListener('click', function(infosDoEvento) {
    const alvoDoEvento = infosDoEvento.target;
    const isBtnRemove = alvoDoEvento.classList.contains('opcoesDoCartao-remove');
    const isRadioTipo = alvoDoEvento.classList.contains('opcoesDoCartao-radioTipo');

    if(isBtnRemove) {
      cartao.classList.add('cartao--some');
      cartao.addEventListener('transitionend', function() {
        cartao.remove();
      });
    }

    if(isRadioTipo) {
      cartao.style.background = alvoDoEvento.value
    }
  })
  // Tragam o resto dos Event Listeners no arquivo cartao.js
  return cartao;
}