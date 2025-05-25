import React, { useState } from 'react';
import useDocument from './useDocument';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9', 
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  fontSize: '1.8rem',
  color: '#333',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#8B0000', 
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#A52A2A', 
};

const App6 = () => {
  const [count, setCount] = useState(0);

  useDocument(count);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>Document Title Changer</header>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => setCount(count + 1)}
      >
        CHANGE TITLE
      </button>
    </div>
  );
};

export default App6;