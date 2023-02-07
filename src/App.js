import './App.css';
import { useState } from 'react';
import { ComponentResultat, ComponentButton } from './components/ComponentBtn'
function App() {
  //setAge és modificada i, per tant, el valor de useState s’actualitza i obliga a renderitzar App.js.
  const [age, setAge] = useState(7);

  const sumaAge = () => {
    setAge(age + 1);
  }
  const restaAge = () => {
    setAge(age - 1);
  }
  const resetAge = () => {
    setAge(0);
  }

  const changeStyle = () =>{
    
  }

  return (
    <div className="App">
      <ComponentResultat age={age} />
      <div>
        {/* btn, truca a la funció i li suma una unitat a la variable age, modificant el valor de setAge */}
        <ComponentButton funcio={sumaAge} name="Suma" />
        <ComponentButton funcio={restaAge} name="Resta" />
        <ComponentButton funcio={resetAge} name="Reset" />


      </div>
    </div>
  );
}

export default App;
