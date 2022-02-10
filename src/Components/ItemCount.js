import React, { useState } from "react";


const App = () => {

  

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Romina");

  const handlerCounterUp = () => {
    setCounter(counter + 1);
    alert("Incrementaste en 1");
  };

  return (
    <div className="ItemCount">
      <h1>Ejemplo clase</h1>
      <p>{counter}</p>
      <button onClick={handlerCounterUp}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
      <p>{name}</p>
      <button onClick={() => setName("Julieta")}>Actualizar</button>
    </div>
  );
};


export default App;