import React, { useEffect } from "react";
import { countLines } from "./countLines";

const App17 = () => {
  useEffect(() => {
    try {
      const result = countLines("sample.txt");
      console.log(`Total lines: ${result}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <h2>Task 17: Count number of lines in sample.txt</h2>;
};

export default App17;