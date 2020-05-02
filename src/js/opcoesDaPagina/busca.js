;(function() {

  const $busca = $('#busca'); // document.querySelector('#busca')

  // $busca.addEventListener('keyup|keydown|input')
  $busca.on('input', (infosDoEvento) => {
    const elementoEmFocoDuranteOEvento = infosDoEvento.target;
    const valorDaBusca = elementoEmFocoDuranteOEvento.value;
    const $cartoes = document.querySelectorAll('.cartao');

    // Qualquer card que tenha o texto que digitarmos
    $cartoes.forEach(($cartao) => {
            // jQuery: $($cartao).find('p').text();
      const conteudo = $cartao.querySelector('p').textContent;
      const conteudoNormalizado = conteudo.toLowerCase();
      const valorDaBuscaNormalizado = valorDaBusca.toLowerCase().trim();

      if(conteudoNormalizado.includes(valorDaBuscaNormalizado)) {
        $cartao.style.display = 'block';
        return
      }
      $cartao.style.display = 'none';
    });
  });
  $busca.removeClass('no-js'); // $busca.classList.remove();
})();


