import React from "react";
import Task6 from "./Task6";

const App6 = () => {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Movie Database Search</h1>
      <Task6 />
    </div>
  );
};

const styles = {
  appContainer: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    color: "#333",
  },
};
export default App6;