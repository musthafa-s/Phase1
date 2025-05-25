import React from "react";

const Header = React.memo(() => {
  console.log("Header rendered");
  return <h1>🔧 React Performance Optimized App</h1>;
});

export default Header;