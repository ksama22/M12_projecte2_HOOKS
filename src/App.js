import './App.css';
import { useState, useEffect } from 'react';

import { ComponentMagia } from './components/Activitat1'
import { ComponentResultat, ComponentButton } from './components/Activitat2-3'
import { ComponenButtonCanviColor, ComponentTextColor } from './components/Activitat4'

function App() {
  //setAge és modificada i, per tant, el valor de useState s’actualitza i obliga a renderitzar App.js.
  const [age, setAge] = useState(7);
  const [edat, setEdat] = useState(7);
  const [colorText, setColorText] = useState("green");
  const [textVisible, setTextVisible] = useState("Hola");


  //Es un escucha que mira si los valores cambian
  useEffect(() => {
    //Este no lo comprueba porque no mira la [edat]
    if (edat >= 18) {
      console.log("Activitat 1 major d'edat");
    }
    //Este lo comprueba porque  mira la [age]
    if (age >= 18) {
      console.log("Activitat 2 major edat");
    }
    // si no pongo ninguna  escucha todos
    // si especifico [ variable1, variable2] solo "observa" esas variables
  }, [age]);


  const togleText = () => {
    setTextVisible(textVisible === "Hola" ? null : "Hola")
  }

  /* Suma la edat  'ComponentButton'*/
  const sumaAge = () => {
    setAge(age + 1);
  }

  /* Suma la edat  'ComponentButton'*/
  const sumaEdat = () => {
    setEdat(edat + 1);
  }
  /* resta la edat 'ComponentButton'*/
  const restaAge = () => {
    setAge(age - 1);
  }
  /* reseteja la edat 'ComponentButton'*/
  const resetAge = () => {
    setAge(0);
  }
  /* Togle el color del text 'ComponentTextColor' */
  const canviColorMain = () => {
    setColorText(colorText === "green" ? "red" : "green")
  }

  return (
    <div className="App">
      Activitat 1
      <div className='exercici'> {/* Mostra Oculta*/}
        <div>{textVisible}</div>
        <ComponentMagia funcio={togleText} />
      </div>
      Activitat 2
      <div className='exercici'>
        <ComponentResultat age={edat} />
        <ComponentButton funcio={sumaEdat} name="Suma" />
      </div>
      Activitat 3
      <div className='exercici'>
        <ComponentResultat age={age} />
        {/* btn, truca a la funció i li suma una unitat a la variable age, modificant el valor de setAge */}
        <ComponentButton funcio={sumaAge} name="Suma" />
        <ComponentButton funcio={restaAge} name="Resta" />
        <ComponentButton funcio={resetAge} name="Reset" />
      </div>
      Activitat 4
      <div className='exercici'>
        <ComponentTextColor ncolor={colorText} />
        <ComponenButtonCanviColor funcio={canviColorMain} />
      </div>

    </div>
  );
}

export default App;
