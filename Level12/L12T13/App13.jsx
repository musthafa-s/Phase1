import React, { useEffect } from "react";
import { truncateFile } from "./truncateFile";

const App13 = () => {
  useEffect(() => {
    const existing = localStorage.getItem("sample.txt");
    if (!existing) {
      localStorage.setItem("sample.txt", "This is a sample file with some content.");
    }

    try {
      const result = truncateFile("sample.txt", 20);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <h2>Task 13: Truncate file to 20 characters</h2>;
};

export default App13;
