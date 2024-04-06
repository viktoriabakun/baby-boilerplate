import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev  - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};