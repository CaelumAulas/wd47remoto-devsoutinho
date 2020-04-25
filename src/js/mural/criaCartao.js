// IIFE
;(function() {

let contador = 0;

function criaHTMLDoCartao(conteudo, cor) { // cria o template do cartão
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
  <article id="cartao_${contador}" class="cartao" tabindex="0" style="background: ${cor};">
    ${opcoesDoCartao}
    <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
  </article>
  `;

  return cartao;
}

function adicionaEventListenersNoCartao(cartao) {
  cartao.addEventListener('keydown', function(infosDoEvento) {
    // Elemento focado no momento que apertamos uma tecla
    const alvoDoEvento = infosDoEvento.target;
    const teclaPressionada = infosDoEvento.key;
    const isEnterPressionado = teclaPressionada === 'Enter';
    const isEspacoPressionado = teclaPressionada === ' ';
    
    if(isEnterPressionado || isEspacoPressionado) {
      console.log('Apertaram uma tecla e foi:', teclaPressionada);
      alvoDoEvento.click();
    }
  })

  cartao.addEventListener('focusin', function () {
    cartao.classList.add('cartao--focado');
  })
  cartao.addEventListener('focusout', function () {
    cartao.classList.remove('cartao--focado');
  })

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
}

function criaCartao(conteudo, cor = '#EBEF40') {
  const htmlDoCartao = criaHTMLDoCartao(conteudo, cor);

  let tagTemplate = document.createElement('tpl')
  tagTemplate.innerHTML = htmlDoCartao;
  const cartao = tagTemplate.querySelector('.cartao');

  adicionaEventListenersNoCartao(cartao);

  contador++;
  return cartao;
}

// Módulo
// Revealing Module Pattern
window.criaCartao = criaCartao;

})();