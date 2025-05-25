import React from 'react';

const ChildComp = React.memo(({ onIncrement }) => {
  console.log('Child Component Rendered');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    width: '300px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
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
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049', // Darker green on hover
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>CHILD COMPONENT</h3>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={onIncrement}
      >
        Click Here!...
      </button>
    </div>
  );
});

export default ChildComp;