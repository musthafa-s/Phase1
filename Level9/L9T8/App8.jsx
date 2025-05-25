import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

const App8 = () => {
  return (
    <Router>
      <div style={appContainerStyle}>
        <h1 style={headingStyle}>Product Search App</h1>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const appContainerStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  margin: "50px auto",
};

const headingStyle = {
  fontSize: "2rem",
  color: "#333",
  marginBottom: "20px",
};

export default App8;