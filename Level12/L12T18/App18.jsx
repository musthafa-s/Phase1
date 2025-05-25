import React, { useEffect } from "react";
import { duplicateFile } from "./duplicateFile";

const App18 = () => {
  useEffect(() => {
    try {
      const result = duplicateFile("sample.txt", "copy_sample.txt");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <h2>Task 18: Duplicate sample.txt to copy_sample.txt</h2>;
};

export default App18;