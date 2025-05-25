import React, { useContext } from 'react';
import { ThemeContext } from './App7';

const User = () => {
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    backgroundColor: theme === 'Light' ? 'white' : 'black',
    color: theme === 'Light' ? 'black' : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    width: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  };

  const fontStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={fontStyle}>User Component</h1>
    </div>
  );
};

export default User;