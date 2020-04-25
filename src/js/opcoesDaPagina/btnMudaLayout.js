// Pegar/Achar o elemento no html
const btnMudaLayout = document.querySelector('#btnMudaLayout');

// Organizar essas lógicas
function mudaTexto() {
  if(btnMudaLayout.textContent.trim() === 'Linhas') {
    btnMudaLayout.textContent = 'Colunas';
  } else {
    btnMudaLayout.textContent = 'Linhas';
  }
}

function mudaLayout() {
  const mural = document.querySelector('.mural');
  console.log('condicional do mudaLayout', mural.classList.contains('mural--linha'));
  mural.classList.toggle('mural--linha');
  // if(mural.classList.contains('mural--linha')) {
  //   mural.classList.remove('mural--linha');
  // } else {
  //   mural.classList.add('mural--linha');
  // }
}

btnMudaLayout.addEventListener('click', mudaTexto)
btnMudaLayout.addEventListener('click', mudaLayout)

// toggle

// Acontece uma ação - Executa uma função ao final disso
// callback - chamada de retorno

// function mudaTextoELayout() {
//   mudaTexto()
//   mudaLayout()
// }
// btnMudaLayout.onclick = mudaTextoELayout;


// adicionaEscutadorDeEventosDoUsuarioOuNaoNecessariamente

// Progressive Enhancement // Carregamento Progressivo
// Feature Flag 
btnMudaLayout.classList.remove('no-js');