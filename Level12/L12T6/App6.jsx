import React, { useEffect } from "react";
import { renameFile } from "./renameFile";

const App6 = () => {
  useEffect(() => {
    
    if (!localStorage.getItem("original.txt")) {
      localStorage.setItem("original.txt", "This is the original file content.");
      console.log('File "original.txt" created with sample content.');
    }

    try {
      const result = renameFile("original.txt", "renamed.txt");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>File renaming in progress.</div>;
};

export default App6;
