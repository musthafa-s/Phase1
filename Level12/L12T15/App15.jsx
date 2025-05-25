import React, { useEffect, useState } from "react";
import { isFile } from "./isFile";

const App15 = () => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    setResult(isFile("sample.txt"));
  }, []);

  return <h2>Task 15: Is "sample.txt" a file? {result ? "Yes" : "No"}</h2>;
};

export default App15;
