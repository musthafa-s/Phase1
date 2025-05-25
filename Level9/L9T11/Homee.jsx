import React from "react";
import { Link } from "react-router-dom";

const Homee = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🍕 Welcome to Pizza Paradise</h1>
      <p style={descriptionStyle}>
        Explore our delicious menu, learn more about us, or get in touch. Use the dashboard below to navigate through our website.
      </p>
      <div style={dashboardStyle}>
        <Link to="/menu" style={linkStyle}>
          <div style={cardStyle}>
            <h2>📋 Menu</h2>
            <p>Check out our delicious offerings.</p>
          </div>
        </Link>
        <Link to="/about" style={linkStyle}>
          <div style={cardStyle}>
            <h2>ℹ️ About Us</h2>
            <p>Learn more about our story.</p>
          </div>
        </Link>
        <Link to="/contact" style={linkStyle}>
          <div style={cardStyle}>
            <h2>📞 Contact</h2>
            <p>Get in touch with us.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};


const containerStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  margin: "50px auto",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#ff6347", 
  marginBottom: "20px",
};

const descriptionStyle = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "30px",
};

const dashboardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

cardStyle["&:hover"] = {
  transform: "scale(1.05)",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
};

export default Homee;