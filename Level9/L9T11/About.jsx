import React from "react";

const About = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🍕 About Us</h1>
      <p style={descriptionStyle}>
        Welcome to <strong>Pizza Paradise</strong>, where we serve the most delicious and authentic pizzas in town! Our mission is to bring people together over great food and create unforgettable dining experiences.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Pizza"
        style={imageStyle}
      />
      <p style={descriptionStyle}>
        At Pizza Paradise, we use only the freshest ingredients and traditional recipes to craft our pizzas. From classic Margherita to gourmet creations, we have something for everyone. Whether you're dining in, taking out, or ordering delivery, we promise to make every bite memorable.
      </p>
      <h2 style={subHeadingStyle}>Why Choose Us?</h2>
      <ul style={listStyle}>
        <li>🍕 Fresh and high-quality ingredients</li>
        <li>🍕 Wide variety of pizzas and sides</li>
        <li>🍕 Friendly and welcoming atmosphere</li>
        <li>🍕 Fast and reliable delivery service</li>
      </ul>
      <p style={descriptionStyle}>
        Thank you for choosing Pizza Paradise. We look forward to serving you!
      </p>
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

const subHeadingStyle = {
  fontSize: "1.8rem",
  color: "#333",
  marginBottom: "15px",
};

const descriptionStyle = {
  fontSize: "1.2rem",
  color: "#555",
  marginBottom: "20px",
  lineHeight: "1.6",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  marginBottom: "20px",
};

const listStyle = {
  textAlign: "left",
  margin: "0 auto",
  maxWidth: "600px",
  fontSize: "1.2rem",
  color: "#555",
  lineHeight: "1.8",
};

export default About;