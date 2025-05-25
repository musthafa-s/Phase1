const containerStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f0f8ff", 
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  margin: "50px auto",
};

const headingStyle = {
  fontSize: "2rem",
  color: "#333",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  color: "#555",
};

const Home = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome Home!</h2>
      <p style={paragraphStyle}>This is a public page.</p>
    </div>
  );
};

export default Home;