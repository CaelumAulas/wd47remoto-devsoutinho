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


    // [Capítulo 15]

    // [Design Pattern: Delegate]
    // É possível saber se um elemento filho de outro foi clicado
    // Lembra do efeito de jogar pedrinha na agua
    cartao.addEventListener('click', function(infosDoEvento) {
      const alvoDoEvento = infosDoEvento.target;
      console.log('[alvoDoEvento]', alvoDoEvento);
      const corQueVamosAplicar = alvoDoEvento.value
      console.log('[corQueVamosAplicar]', corQueVamosAplicar);

      if(Boolean(corQueVamosAplicar)) { // O if SEMPRE converte o nosso valor
        // para "true" ou "false"
        console.log('Cor que vai ser aplicada', corQueVamosAplicar);
        // Só aplicamos no cartão
        cartao.style.background = corQueVamosAplicar;
      }
    })

  }
})()