import React, { useEffect } from "react";
import { searchWord } from "./searchWord";

const App19 = () => {
  useEffect(() => {
    try {
      const count = searchWord("sample.txt", "file");
      console.log(`'file' occurs ${count} times`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <h2>Task 19: Search word 'file' in sample.txt</h2>;
};

export default App19;