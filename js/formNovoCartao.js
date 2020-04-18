// IIFE
// - Permite com que não tenhamos que nos preocupar com nome de variável
// 0 conflitos
;(function() {
  const $formNovoCartao = document.querySelector('.formNovoCartao');

  $formNovoCartao.addEventListener('submit', function(infosDoEvento) {
    infosDoEvento.preventDefault();

    const $formNovoCartaoConteudo = document.querySelector('.formNovoCartao-conteudo');
    const conteudo = $formNovoCartaoConteudo.value;
    const hasConteudo = Boolean(conteudo);

    if(hasConteudo) {
      // cria o cartão
    } else {
      alert('Por favor, preencha alguma coisa');
    }
  });


  

  $formNovoCartao.classList.remove('no-js')
})();