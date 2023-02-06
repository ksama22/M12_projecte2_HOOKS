import './App.css';
import { useState } from 'react';

function App() {
  //Hooks
  const [age, setAge] = useState(0);

  const serMasViejo = () => {
    setAge(age + 1);
  }

  return (
    <div className="App">
      <div>{age} años</div>
      <div>
        <button onClick={serMasViejo}>Ser mas viejo</button>
      </div>
    </div>
  );
}

export default App;
