import React from 'react';
import Task1 from './Task1';

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9', // Light gray background
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '20px auto',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '1.8rem',
  color: '#333',
};

const App1 = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>USETOGGLE TASK</h1>
      <Task1 />
    </div>
  );
};

export default App1;