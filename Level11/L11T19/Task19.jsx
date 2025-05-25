import React, { useEffect } from 'react';

const factorial = (n) => {
  if (n < 0) throw new Error("Negative number");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

const Task19 = () => {
  useEffect(() => {
    const nums = [5, 3, -1];
    nums.forEach(num => {
      try {
        const result = factorial(num);
        console.log(`Factorial of ${num}:`, result);
      } catch (e) {
        console.error(`Error for ${num}: ${e.message}`);
      }
    });
  }, []);

  return <p>Check the console for factorial outputs.</p>;
};

export default Task19;
