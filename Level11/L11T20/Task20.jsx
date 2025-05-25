import React, { useEffect } from 'react';

const operateOnArray = (arr, callback) => {
  return arr.map(callback);
};

const double = num => num * 2;
const square = num => num * num;
const toString = num => num.toString();

const Task20 = () => {
  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5];

    console.log("Doubled:", operateOnArray(numbers, double));
    console.log("Squared:", operateOnArray(numbers, square));
    console.log("To String:", operateOnArray(numbers, toString));
  }, []);

  return <p>Check the console for higher-order function results.</p>;
};

export default Task20;
