import React, { useEffect } from "react";
import { clearFile } from "./clearFile";

const App20 = () => {
  useEffect(() => {
    try {
      const result = clearFile("sample.txt");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <h2>Task 20: Clear contents of sample.txt</h2>;
};

export default App20;