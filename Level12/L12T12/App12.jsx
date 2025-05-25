import React, { useEffect } from "react";
import { unwatchFile } from "./unwatchFile";

const App12 = () => {
  useEffect(() => {
    unwatchFile("sample.txt");
  }, []);

  return <h2>Task 12: Unwatch file simulated in console.</h2>;
};

export default App12;
