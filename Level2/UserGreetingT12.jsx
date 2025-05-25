import React, { useState } from 'react';
import Task12 from './Task12';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
};

const buttonStyle = {
  height: '48px',
  minWidth: '100px',
  borderRadius: '0.25rem',
  padding: '0.5rem',
  fontSize: '1rem',
  backgroundColor: 'aliceblue',
  color: 'mediumblue',
  cursor: 'pointer',
  margin: '10px 0',
  border: 'none',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: 'lightblue',
};

const UserGreetingT12 = ({ isLoggedIn, userName }) => {
  const [showTask12, setShowTask12] = useState(false);

  const handleLogin = () => {
    setShowTask12(true);
  };

  return (
    <div style={containerStyle}>
      {isLoggedIn ? (
        <h2 style={headingStyle}>Welcome Back Mr {userName}!</h2>
      ) : (
        <div>
          <h2 style={headingStyle}>Please Log In to Continue</h2>
          <button
            style={buttonStyle}
            onClick={handleLogin}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Login
          </button>
          {showTask12 && <Task12 />}
        </div>
      )}
    </div>
  );
};

export default UserGreetingT12;
