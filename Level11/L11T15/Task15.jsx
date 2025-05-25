import React, { useEffect } from 'react';

const divideNumbers = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const Task15 = () => {
  useEffect(() => {
    const numbers = [
      [10, 2],
      [20, 4],
      [15, 0]
    ];

    numbers.forEach(([a, b]) => {
      try {
        const result = divideNumbers(a, b);
        console.log(`${a} / ${b} = ${result}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      } finally {
        console.log("Attempted division\n");
      }
    });
  }, []);

  return <p>Check the console for results.</p>;
};

export default Task15;
