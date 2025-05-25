import React, { useMemo } from "react";

const About = () => {
  const heavyCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) sum += i;
    return sum;
  }, []);

  return (
    <>
      <h2>About</h2>
      <p>Heavy calculation result: {heavyCalculation}</p>
    </>
  );
};

export default React.memo(About);
