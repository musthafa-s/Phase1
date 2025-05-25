import React, { useEffect } from "react";
import { chmodFile } from "./chmodFile";

const App14 = () => {
  useEffect(() => {
    chmodFile("sample.txt", "755");
  }, []);

  return <h2>Task 14: Simulate chmod on file</h2>;
};

export default App14;
