import React, { useEffect } from "react";
import { getFileStats } from "./fileStats";

const App5 = () => {
  useEffect(() => {
    try {
      const stats = getFileStats("sample.txt");
      console.log("File stats:", stats);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>Check console for file stats.</div>;
};

export default App5;
