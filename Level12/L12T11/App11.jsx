import React, { useEffect } from "react";
import { watchFile } from "./watchFile";

const App11 = () => {
  useEffect(() => {
    try {
      const result = watchFile("sample.txt");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>File watch operation in progress.</div>;
};

export default App11;
