// // IIFE - Módulo/Arquivo novo
// // - Garantir que não vamos ter conflito de variável
// ; (function () {
//   const cartoes = document.querySelectorAll('.cartao');

//   for (const cartao of cartoes) { // ES6 "for of"


//     // [Capítulo 15]

//     // [Design Pattern: Delegate]
//     // É possível saber se um elemento filho de outro foi clicado
//     // Lembra do efeito de jogar pedrinha na agua    
//     // cartao.addEventListener('click', function (infosDoEvento) {
//     //   const alvoDoEvento = infosDoEvento.target;
//     //   const corQueVamosAplicar = alvoDoEvento.value
//     //   if (corQueVamosAplicar) { // O if SEMPRE converte o nosso valor
//     //     cartao.style.background = corQueVamosAplicar;
//     //   }
//     // })

//     // [Testa o Change]
//     // cartao.addEventListener("change", function (event) {
//     //   const elementoSelecionado = event.target
//     //   const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
//     //   if (isRadioTipo) {
//     //     cartao.style.backgroundColor = elementoSelecionado.value
//     //   }
//     // })
//     // Tenta fazer o código do remove aqui ao invés de fazer no outro arquivo
//     // - ./projeto-wd47/js/mural/opcoesDoCartao-remove.js
//     // Checa se estamos clicando no botão de remover e faz o removeCartao

//     cartao.addEventListener('click', function(infosDoEvento) {
//       const alvoDoEvento = infosDoEvento.target;
//       const isBtnRemove = alvoDoEvento.classList.contains('opcoesDoCartao-remove');
//       const isRadioTipo = alvoDoEvento.classList.contains('opcoesDoCartao-radioTipo');

//       if(isBtnRemove) {
//         cartao.classList.add('cartao--some');
//         cartao.addEventListener('transitionend', function() {
//           cartao.remove();
//         });
//       }

//       if(isRadioTipo) {
//         cartao.style.background = alvoDoEvento.value
//       }
//     })


//     cartao.addEventListener('keydown', function(infosDoEvento) {
//       // Elemento focado no momento que apertamos uma tecla
//       const alvoDoEvento = infosDoEvento.target;
//       const teclaPressionada = infosDoEvento.key;
//       const isEnterPressionado = teclaPressionada === 'Enter';
//       const isEspacoPressionado = teclaPressionada === ' ';
      
//       if(isEnterPressionado || isEspacoPressionado) {
//         console.log('Apertaram uma tecla e foi:', teclaPressionada);
//         alvoDoEvento.click();
//       }
//     })

//   }
// })()