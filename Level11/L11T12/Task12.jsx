import React, { useEffect } from "react";

function Task12() {
  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      let row = "";
      for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
      }
      console.log(row);
    }
  }, []);

  return <p>Check the console for multiplication table.</p>;
}

export default Task12;