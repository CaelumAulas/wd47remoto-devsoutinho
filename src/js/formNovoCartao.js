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
      // [Declarativa] Template String - ES6
      const $mural = document.querySelector('.mural');
      
      const $cartao = criaCartao(conteudo)
      $mural.insertAdjacentElement(
        'afterbegin', $cartao
      );

      $formNovoCartaoConteudo.value = '';
    } else {
      // [Imperativa]
      // <div class="formNovoCartao-msg">Digite algo por favor</div>
      const $msgErro = document.createElement('div');
      $msgErro.classList.add('formNovoCartao-msg');
      $msgErro.textContent = 'Por favor, preencha alguma coisa';

      $formNovoCartao.insertAdjacentElement('beforeend', $msgErro);


      $msgErro.addEventListener('animationend', function () {
        $msgErro.remove();
      });
      // alert('Por favor, preencha alguma coisa');
    }
  });


  

  $formNovoCartao.classList.remove('no-js')
})();