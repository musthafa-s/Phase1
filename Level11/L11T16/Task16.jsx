import React, { useEffect } from 'react';

const createCounter = () => {
  let count = 0;
  return () => ++count;
};

const Task16 = () => {
  useEffect(() => {
    const counterA = createCounter();
    const counterB = createCounter();

    console.log("Counter A:", counterA()); // 1
    console.log("Counter A:", counterA()); // 2
    console.log("Counter B:", counterB()); // 1
    console.log("Counter B:", counterB()); // 2
    console.log("Counter A:", counterA()); // 3
  }, []);

  return <p>Check the console for counter values.</p>;
};

export default Task16;
