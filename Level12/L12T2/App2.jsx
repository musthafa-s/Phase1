// src/L12T2/App2.jsx
import React, { useState } from "react";
import { writeToFile } from "./writeFile";

const App2 = () => {
  const [message, setMessage] = useState("");

  const handleWrite = () => {
    const result = writeToFile();
    setMessage(result);
  };

  return (
    <div>
      <h2>Task 2: Write to File</h2>
      <button onClick={handleWrite}>Write "Hello, Node.js!" to output.txt</button>
      <p>{message}</p>
    </div>
  );
};

export default App2;
