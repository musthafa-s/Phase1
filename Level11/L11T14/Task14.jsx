import React, { useEffect } from "react";

function Task14() {
  useEffect(() => {
    const day = 6;
    let message = "";

    switch (day) {
      case 1:
        message = "Monday";
        break;
      case 2:
        message = "Tuesday";
        break;
      case 3:
        message = "Wednesday";
        break;
      case 4:
        message = "Thursday";
        break;
      case 5:
        message = "Friday";
        break;
      case 6:
        message = "Saturday\nIt's the weekend!";
        break;
      case 7:
        message = "Sunday\nIt's the weekend!";
        break;
      default:
        message = "Invalid day number";
    }

    console.log(message);
  }, []);

  return <p>Check the console for the output.</p>;
}

export default Task14;
