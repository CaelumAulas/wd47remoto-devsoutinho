import { Component } from 'react';
import { Titulo } from '../components/Titulo';

// Componentes que mudam valores
class Contador extends Component {
  state = {
    valor: 0,
  };
  incrementa = () => {
    // this.state.valor = this.state.valor + 1;
    // this.render();
    this.setState({
      valor: this.state.valor + 1
    });
  }
  decrementa = () => {
    this.setState({
      valor: this.state.valor - 1
    });
  }

  render() {
    console.log('render foi chamado');
    return (
      <div>
        <p>Valor do contador: {this.state.valor}</p>
        <button onClick={this.incrementa}>Incrementar</button>
        <button onClick={this.decrementa}>Decrementar</button>
      </div>
    );
  }
}

// Componentes que só apresentam coisas
function HomePage() { // Componente
  return (
    <div>
      <Titulo cor={'red'}>Home</Titulo>
      <Contador />
      <a href="/sobre">Sobre</a>
    </div>
  );
}

export default HomePage;