import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: 'aqua',
  fontFamily: 'Arial, sans-serif',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '20px',
  width: '300px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '1.5rem',
  color: 'black',
};

const Task3 = () => {
  const [name, setName] = useState('');
  return (
    <div style={containerStyle}>
      <input
        type="text"
        style={inputStyle}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2 style={headingStyle}>{name}</h2>
    </div>
  );
};

export default Task3;