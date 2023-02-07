import { useState } from 'react';
import './App.css';

function App() {
  // Declaracion de la variable magia
  // Con useState le damos un valor predeterminado a la variable magia
  const [magia, setMagia] = useState("Abra Kadabra");
  // Creacion de la funcion para hacer que apareza y desaperezca el texto
  const MagicFun = () => {
    if (magia == null) {
      // con setMagia le añadimos un nuevo valor a magia
      setMagia("Abra Kadabra");
    } else{
      setMagia(null);
    }
  }
  // Declaracion de la variable num
  const[num, setNum] = useState(0);
  // Creacion de las funciones para que al darle al boton se le sume o reste 1 o resete el contador a 0
  // Suma
  const numSum = () =>{
    setNum(num + 1)
  }
  // Suma
  const numSubstrac = () =>{
    setNum(num - 1)
  }
  // Suma
  const numReset = () =>{
    setNum(0)
  }
  const Boton = (props) =>{
    return(
        <button onClick={props.funcion}>{props.name}</button>
    )
  }
  return (
    <div className="App">
      {
      /*
      <Boton funcion={MagicFun} name="Show/Hide"/>
      <div>
        {magia}
      </div>
      */
      }
      {
      /*
      <div>
        {num}
      </div>
      <Boton funcion={numSum} name="Incrementa"/>
      */
      }
      
      <div>
        {num}
      </div>
    
      <Boton funcion={numSum} name="Suma"/>
      <Boton funcion={numSubstrac} name="Resta"/>
      <Boton funcion={numReset} name="Reset"/>
      
    
      
      
      
    </div>
  );
}

export default App;
