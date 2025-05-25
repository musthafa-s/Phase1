import React, { useEffect } from "react";
import { createDirectory } from "./createDirectory";

const App7 = () => {
  useEffect(() => {
    try {
      const result = createDirectory("new_folder");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>Directory creation in progress.</div>;
};

export default App7;
