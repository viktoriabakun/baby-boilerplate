import { Counter } from '@components//counter/counter.tsx';

import './styles.css';
// @TODO: remove css file, add tailwind classes

const HomePage = () => (
  <div className="container">
    <div>Hello world!</div>
    <Counter />
  </div>
);

export default HomePage;