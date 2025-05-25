import React, { useCallback, useState } from 'react';
import ChildComp from './ChildComp';

// PARENT FUNCTION
const App10 = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleIncrement = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff', // Light blue background
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    width: '400px',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '20px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049', // Darker green on hover
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>PARENT COMPONENT</h2>
      <p style={paragraphStyle}>Count: {count}</p>
      <p style={paragraphStyle}>Clicks: {clicks}</p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <ChildComp onIncrement={handleIncrement} />
    </div>
  );
};

export default App10;