import React, { useEffect } from "react";

const Task1 = () => {
  useEffect(() => {
    var myVar = "Your Name";
    let myLet = 25;
    const myConst = "Blue";

    console.log("myVar:", myVar);
    console.log("myLet:", myLet);
    console.log("myConst:", myConst);
  }, []);

  return (
    <div>
      <p>Check the console for the output of variable declaration using var, let, and const.</p>
    </div>
  );
};

export default Task1;
