// Componente que añade un valor que servira como contador
export const Texto = (props) => {
    return(
      <div>
        <h4 style={{color: props.colorTxt }}>{props.contenido}</h4>
      </div>
    )
  }