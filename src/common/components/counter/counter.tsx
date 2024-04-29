import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div className="flex items-center gap-5 text-[7vw]">
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
