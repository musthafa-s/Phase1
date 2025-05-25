import React, { useEffect } from "react";
import { listDirectory } from "./listDirectory";

const App8 = () => {
  useEffect(() => {
    try {
      const result = listDirectory();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>Listing directory contents in progress.</div>;
};

export default App8;
