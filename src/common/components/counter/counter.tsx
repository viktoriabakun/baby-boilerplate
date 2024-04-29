import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <button onClick={increment} className="flex items-center gap-5 text-2xl">
      <span>{count}</span>
      <span>+</span>
    </button>
  );
};
