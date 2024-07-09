function ListadoResultados(props) {
    return (
      <ul>
        {props.resultados.map((elemento) => 
          <li>El elemento {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
        )}
      </ul>
    );
  }
  
  export default ListadoResultados;