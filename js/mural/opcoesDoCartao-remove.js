// - selecionar o primeiro botão de apagar
const btnRemove = document.querySelector('.opcoesDoCartao-remove');

// - criar um addEventListener de click || - criar a função que apaga
btnRemove.addEventListener('click', function () {
  //   - selecionar o cartão lá dentro para poder apagar
  const cartao = btnRemove.parentNode.parentNode;

  cartao.classList.add('cartao--some');

  // Fazendo o botão ripple do Google com isso aqui: https://www.youtube.com/watch?v=YyoSLwngaKs
  // 500ms
  cartao.addEventListener('transitionend', function() {
    cartao.remove();
  });
})