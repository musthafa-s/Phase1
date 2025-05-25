import React, { useEffect } from 'react';

const Task17 = () => {
  useEffect(() => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combinedArray = [...arr1, ...arr2];

    const obj1 = { name: "Alice", age: 25 };
    const obj2 = { city: "New York", job: "Engineer" };
    const combinedObj = { ...obj1, ...obj2 };

    const copiedArr = [...arr1];
    copiedArr.push(100);

    console.log("Combined Array:", combinedArray);
    console.log("Combined Object:", combinedObj);
    console.log("Original Array:", arr1);
    console.log("Copied & Modified Array:", copiedArr);
  }, []);

  return <p>Check the console for spread results.</p>;
};

export default Task17;
