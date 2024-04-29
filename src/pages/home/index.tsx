import { Counter } from '@components/counter/counter.tsx';
import { HelloWorld } from '@components/hello-world/hello-world.tsx';

export const HomePage = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-blue-200 text-center text-6xl font-bold text-fuchsia-50">
    <HelloWorld />
    <Counter />
  </div>
);
