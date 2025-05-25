import React, { useEffect } from "react";
import { appendFile } from "./appendFile";

const App3 = () => {
  useEffect(() => {
    appendFile("output.txt", " More content here.")
      .then(console.log)
      .catch(console.error);
  }, []);

  return <div>Check console for append operation result.</div>;
};

export default App3;
