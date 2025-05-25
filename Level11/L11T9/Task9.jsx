import React from 'react';

const Task9 = () => {
  function multiply(a, b) {
    return a * b;
  }

  const divide = function (a, b) {
    return a / b;
  };

  const power = (base, exponent) => base ** exponent;

  return (
    <div>
      <p>Multiply(3, 4): {multiply(3, 4)}</p>
      <p>Divide(20, 4): {divide(20, 4)}</p>
      <p>Power(2, 5): {power(2, 5)}</p>
    </div>
  );
};

export default Task9;