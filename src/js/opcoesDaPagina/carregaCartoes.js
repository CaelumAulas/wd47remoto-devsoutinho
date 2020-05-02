;(() => {

  function seila(dadoQueVemDoServer) {
    dadoQueVemDoServer.cartoes.forEach(function(cartao) {
      criaCartaoNoMural(cartao.conteudo, cartao.cor)
    });
  }

  $.ajax({
    url: "https://ceep.herokuapp.com/cartoes/carregar?usuario=mario.souto@caelum.com.br",
    method: "GET",
    // data: { usuario: "seuemail@email.com.br" },
    dataType: "jsonp",
    success: seila
  })

})();