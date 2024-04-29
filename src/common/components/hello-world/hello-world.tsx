import { helloWorld } from '@components/hello-world/data.ts';
import { useEffect, useRef, useState } from 'react';

export const HelloWorld = () => {
  const indexRef = useRef(0);
  const [greeting, setGreeting] = useState(helloWorld[indexRef.current]);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % helloWorld.length;
      setGreeting(helloWorld[indexRef.current]);
    }, 2000); // Change greeting every 1000ms (1 second)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return <div>{greeting}</div>;
};
