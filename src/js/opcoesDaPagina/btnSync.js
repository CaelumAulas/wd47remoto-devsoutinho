// IIFE
;(function() {
  const $btnSync = document.querySelector('#btnSync');

  $btnSync.addEventListener('click', function() {
    const arrayDeCartoes = Array.from(
      document.querySelectorAll('.cartao')
    );
    const cartoesProServer = arrayDeCartoes.map(function(cartao) {
      const conteudo = cartao.querySelector('p').innerText;
      const cor = getComputedStyle(cartao).getPropertyValue('background-color');
  
      const cartaoProServer = {
        conteudo: conteudo,
        cor,
      }
      return cartaoProServer;
    })
  
    console.log('[cartoesProServer]', cartoesProServer);


    // Enviar os cartoesProServer pro server de fato

    // GET, [POST], DELETE...
    const contratoDoServidor = {
      usuario: 'mario.souto@caelum.com.br',
      cartoes: cartoesProServer
    };

    $btnSync.classList.add("botaoSync--esperando");
    $btnSync.classList.remove("botaoSync--sincronizado");
    fetch('https://ceep.herokuapp.com/cartoes/salvar', {
      method: 'POST',
      body: JSON.stringify(contratoDoServidor),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // Pra cada chamada que der certo e for encadeada em sequencia
    .then(function(respostaDoServer) {
      console.log('Request', respostaDoServer);
      if(respostaDoServer.ok) {
        $btnSync.classList.add("botaoSync--sincronizado");
        return;
      }

      throw new Error('Deu algum problema');
    })
    // Pra quando der errado
    .catch(() => {
      console.log('Deu algum erro?');
      $btnSync.classList.add("botaoSync--deuRuim");
    })
    // Ao final de tudo
    .finally(() => {
      $btnSync.classList.remove("botaoSync--esperando");
    })


    // REQUISIÇÃO/REQUEST
    /*
      - Headers (quem envia e quem recebe)
      - PAYLOAD === Body
    */

  });

  

  $btnSync.classList.remove('no-js');
})();