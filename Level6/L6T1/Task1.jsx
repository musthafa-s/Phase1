import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f8ff', // Light blue background
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#4CAF50', // Green button
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#45a049', // Darker green on hover
};

const Task1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Count: {count}</h2>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
};

export default Task1;