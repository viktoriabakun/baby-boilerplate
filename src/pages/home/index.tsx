import { Counter } from '@components//counter/counter.tsx';

export const HomePage = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center bg-blue-200 text-center text-[15vw] font-bold text-fuchsia-50">
    <div>Hello world!</div>
    <Counter />
  </div>
);
