import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <p> Compteur: <h3>{count}</h3></p>

      <div className='Selector'>
        <button onClick={() => setCount(count - 1)}>Decrementation</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

    </div>
  );
}

export default App;