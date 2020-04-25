; (function () {
  const $btnAjuda = document.querySelector('#btnAjuda');


  // Definir um evento de click
  $btnAjuda.addEventListener('click', function () {
    // [Array]: Sempre que queremos agrupar um conjunto de dados
    // [Objeto]: Representar um item que possui vários atributos relacionados


    // const xhr = new XMLHttpRequest();
    // // Verbo HTTP: GET, POST, DELETE, PATCH, PUT...
    // // Status do HTTP: https://httpstatusdogs.com/
    // xhr.open('GET','https://ceep.herokuapp.com/cartoes/instrucoes');
    // xhr.send();
    // xhr.addEventListener('load', function() {
    //   // JSON: JavaScript Object Notation
    //   const respostaConvertida = JSON.parse(xhr.response);
    //   respostaConvertida.instrucoes.reverse().forEach(function (ajuda) {
    //     const $cartao = criaCartao(ajuda.conteudo, ajuda.cor);
    //     document.querySelector('.mural').insertAdjacentElement(
    //       'afterbegin', $cartao
    //     );
    //   });
    // });

    // AJAJ
    // Async JavaScript and JSON

    fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
      .then(function (respostaDoServidor) {
        console.log('Chegou o primeiro pedaço', respostaDoServidor)
        return respostaDoServidor.json();
      }) // O retorno de um .then SEMPRE vai pro próximo que vier abaixo
      .then(function (respostaConvertida) {
        respostaConvertida.instrucoes.reverse().forEach(function (ajuda) {
          const $cartao = criaCartao(ajuda.conteudo, ajuda.cor);
          document.querySelector('.mural').insertAdjacentElement(
            'afterbegin', $cartao
          );
        });
      })
      .catch(function () {
        console.log('Deu algum erro');
        // https://medium.com/@omariosouto/entendendo-como-fazer-ajax-com-a-fetchapi-977ff20da3c6
      })

  });

  $btnAjuda.classList.remove('no-js');
})();




// class Ajuda {
//   constructor(cor, conteudo) {
//     this.cor = cor;
//     this.conteudo = conteudo;
//   }
// }
// new Ajuda('orange', 'Bem vindo!');