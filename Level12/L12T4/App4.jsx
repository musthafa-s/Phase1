import React, { useEffect } from "react";
import { fileExists } from "./fileExists";

const App4 = () => {
  useEffect(() => {
    const filename = "test.txt";
    const exists = fileExists(filename);
    console.log(`${filename} exists:`, exists);
  }, []);

  return <div>File existence check in console.</div>;
};

export default App4;
