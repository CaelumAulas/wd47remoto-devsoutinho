;(function() {

  const $busca = $('#busca'); // document.querySelector('#busca')

  // $busca.addEventListener('keyup|keydown|input')
  $busca.on('input', (infosDoEvento) => {
    const elementoEmFocoDuranteOEvento = infosDoEvento.target;
    // console.log('[Texto]: ', this);
    // console.log('[Texto]: ', this.value);
  });


  $busca.removeClass('no-js'); // $busca.classList.remove();
})();


