import { useState } from 'react';
import './style.css';

export default function App() {
  const [text, setText] = useState('');
  const expensiveFunction = () => {
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
      total += i;
    }
    return total;
  };

  const sum = expensiveFunction();
  console.log('render');
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a text"
      />
      <span>Total:{sum}</span>
    </div>
  );
}
