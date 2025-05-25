import React, { useEffect } from "react";

function Task11() {
  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const squared = numbers.map((n) => n * n);
    const oddNumbers = numbers.filter((n) => n % 2 !== 0);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Numbers and Square Roots:");
    numbers.forEach((n) => console.log(n, Math.sqrt(n)));

    console.log("Squared:", squared);
    console.log("Odd Numbers:", oddNumbers);
    console.log("Sum:", sum);
  }, []);

  return <p>Check the console for output.</p>;
}

export default Task11;