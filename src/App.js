import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import './App2.css'

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operation, setOperation] = useState('add');

  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <div>
        <label>
          Число X:
          <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Число Y:
          <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <button onClick={() => setOperation('add')}>Додати</button>
        <button onClick={() => setOperation('subtract')}>Відняти</button>
        <button onClick={() => setOperation('multiply')}>Множити</button>
        <button onClick={() => setOperation('divide')}>Ділити</button>
        <button onClick={() => setOperation('power')}>Зведення в ступінь</button>
      </div>
      <Calculator x={x} y={y} operation={operation} />
    </div>
  );
}

export default App;
