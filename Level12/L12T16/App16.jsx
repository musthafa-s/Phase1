import React, { useEffect } from "react";
import { changePermissions } from "./changePermissions";

const App16 = () => {
  useEffect(() => {
    try {
      const result = changePermissions("sample.txt", "read-only");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <h2>Task 16: Simulate permission change to read-only</h2>;
};

export default App16;