import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f9f9f9", // Light gray background
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  margin: "50px auto",
};

const headingStyle = {
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#007bff", // Blue button
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3", // Darker blue on hover
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login Page</h2>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;