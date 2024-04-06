import { useState } from 'react';

import styles from './styles.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div className={styles.counter}>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};