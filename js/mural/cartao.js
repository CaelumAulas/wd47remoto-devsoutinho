// IIFE - Módulo/Arquivo novo
// - Garantir que não vamos ter conflito de variável
;(function() {
  const cartoes = document.querySelectorAll('.cartao');

  for(const cartao of cartoes) { // ES6 "for of"
    cartao.addEventListener('focusin', function() {
      cartao.classList.add('cartao--focado');
    })
    cartao.addEventListener('focusout', function() {
      cartao.classList.remove('cartao--focado');
    })
  }
})()