import { Counter } from '@components//counter/counter.tsx';

import styles from './styles.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <div>Hello world!</div>
    <Counter />
  </div>
);

export default HomePage;