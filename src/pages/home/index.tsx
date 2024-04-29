import { Counter } from '@components//counter/counter.tsx';

const HomePage = () => (
  <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-blue-200 text-fuchsia-50 font-bold text-[15vw]">
    <div>Hello world!</div>
    <Counter />
  </div>
);

export default HomePage;