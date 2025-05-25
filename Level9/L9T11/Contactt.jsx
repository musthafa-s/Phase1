import React from "react";

const Contactt = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>📞 Contact Us</h1>
      <p style={descriptionStyle}>
        We'd love to hear from you! Reach out to us using the form below or via the contact details provided.
      </p>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" style={textareaStyle}></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
      <div style={contactDetailsStyle}>
        <h3>📍 Visit Us</h3>
        <p>123 Pizza Street, Food City, FL 12345</p>
        <h3>📧 Email</h3>
        <p>contact@pizzarestaurant.com</p>
        <h3>📞 Phone</h3>
        <p>(123) 456-7890</p>
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

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginBottom: "30px",
};

const formGroupStyle = {
  textAlign: "left",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontSize: "1rem",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
  height: "100px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#ff6347", 
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const contactDetailsStyle = {
  textAlign: "left",
  marginTop: "30px",
};

export default Contactt;