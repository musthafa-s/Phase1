import React, { useEffect } from "react";
import { copyFile } from "./copyFile";

const App9 = () => {
  useEffect(() => {
    try {
      
      localStorage.setItem("sample.txt", "This is the sample content.");

      const result = copyFile("sample.txt", "copy_sample.txt");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>File copy operation in progress.</div>;
};

export default App9;
