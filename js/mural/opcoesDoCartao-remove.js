// // IIFE
// // Imediatly Invocked Function by Expression
// // Função que executa automagicamente
// // Module Pattern
// ;(function () { // Todo arquivo rodando no Node tem isso em volta dele
//   // As variáveis por padrão são globais
//   // Variáveis dentro de funções são "locais", pertecem a função que elas foram criadas

//   // - selecionar o primeiro botão de apagar
//   const btnsRemove = document.querySelectorAll('.opcoesDoCartao-remove');

//   // - criar um addEventListener de click || - criar a função que apaga
  
//   // Statements também tem escopo (if, while, for...)
//   for(let indice = 0; indice < btnsRemove.length; indice++) {
//     console.log('[indice]', indice)
//     btnsRemove[indice].addEventListener('click', function () {
//       //   - selecionar o cartão lá dentro para poder apagar
//       console.log('[indice]', indice)
//       console.log('btnsRemove[indice]', btnsRemove[indice]);
//       const cartao = btnsRemove[indice].parentNode.parentNode;
//       cartao.classList.add('cartao--some');
//       // Fazendo o botão ripple do Google com isso aqui: https://www.youtube.com/watch?v=YyoSLwngaKs
//       cartao.addEventListener('transitionend', function() {
//         cartao.remove();
//       });
//     });
//   }
  
//   // forEach

// })();