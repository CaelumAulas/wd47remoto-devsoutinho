;(function() {
  const $btnAjuda = document.querySelector('#btnAjuda');


  // Definir um evento de click
  $btnAjuda.addEventListener('click', function() {
    // [Array]: Sempre que queremos agrupar um conjunto de dados
    // [Objeto]: Representar um item que possui vários atributos relacionados

    const ajudas = [
      { cor: 'orange', conteudo: 'Bem vindo!'}, /// 0
      { cor: 'lime', conteudo: 'Você pode criar cartões'}, /// 1
    ]

    ajudas.reverse().forEach(function(ajuda) {
      const $cartao = criaCartao(ajuda.conteudo, ajuda.cor);
      // $cartao.style.background = ajuda.cor;

      document.querySelector('.mural').insertAdjacentElement(
        'afterbegin', $cartao
      );
    });
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