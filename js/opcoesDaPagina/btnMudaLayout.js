

const btnMudaLayout = document.querySelector('#btnMudaLayout');

// Organizar essas lógicas
function mudaTexto() {
  if(btnMudaLayout.textContent.trim() == 'Linhas') {
    btnMudaLayout.textContent = 'Colunas';
  } else {
    btnMudaLayout.textContent = 'Linhas';
  }
}
// Acontece uma ação - Executa uma função ao final disso
// callback - chamada de retorno
btnMudaLayout.onclick = mudaTexto;