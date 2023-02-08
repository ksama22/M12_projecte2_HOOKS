// Componente de un boton
export const Boton = (props) =>{
  return(
      <button onClick={props.funcion}>{props.name}</button>
  )
}