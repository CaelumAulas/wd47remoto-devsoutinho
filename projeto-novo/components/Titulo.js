// Criar componentes é criar funções criam tags do HTML
export function Titulo(props) { // Componente
  return (
    <h1 style={{ color: props.cor }}>
      Titulo da página é:
      {props.children}
    </h1>
  );
}