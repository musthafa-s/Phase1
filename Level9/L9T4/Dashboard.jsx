import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9", 
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  margin: "50px auto",
};

const headingStyle = {
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#007bff", 
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3", 
};

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome to the Dashboard</h2>
      <p style={paragraphStyle}>
        This page is protected. Only visible after login.
      </p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;