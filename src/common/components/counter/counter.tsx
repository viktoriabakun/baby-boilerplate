import { useState } from 'react';

import './styles.css';
// @TODO: remove css file, add tailwind classes

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};