// Não vamos colocar a IIFE
function criaHTMLDoCartao(conteudo) {

  // Copiem o HTML das Opções do cartão e coloqiuem nessa variável
  const opcoesDoCartao = `
    <div class="opcoesDoCartao">
      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
      </button>

      <input type="radio" name="corDoCartao1" value="#EBEF40" id="corPadrão-cartao1" class="opcoesDoCartao-radioTipo" checked>
      <label for="corPadrão-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
      </label>

      <input type="radio" name="corDoCartao1" value="#F05450" id="corImportante-cartao1" class="opcoesDoCartao-radioTipo">
      <label for="corImportante-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
      </label>

      <input type="radio" name="corDoCartao1" value="#92C4EC" id="corTarefa-cartao1" class="opcoesDoCartao-radioTipo">
      <label for="corTarefa-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
      </label>

      <input type="radio" name="corDoCartao1" value="#76EF40" id="corInspiração-cartao1" class="opcoesDoCartao-radioTipo">
      <label for="corInspiração-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
      </label>
    </div>
  `;

  const cartao = `
  <article id="cartao_1" class="cartao" tabindex="0">
    ${opcoesDoCartao}
    <p class="cartao-conteudo" contenteditable tabindex="0">
       ${conteudo}
    </p>
  </article>
  `;

  return cartao;
}