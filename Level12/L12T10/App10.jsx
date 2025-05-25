import React, { useEffect } from "react";
import { deleteFile } from "./deleteFile";

const App10 = () => {
  useEffect(() => {
    try {
      const result = deleteFile("sample.txt");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>File deletion in progress.</div>;
};

export default App10;
