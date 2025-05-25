import React, { useState } from 'react';
import Task5Basic from './Task5Basic';

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const navItemStyle = {
  margin: '0 15px',
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

const navItemActiveStyle = {
  ...navItemStyle,
  backgroundColor: '#61dafb',
  color: '#282c34',
};

const App5 = () => {
  const [view, setView] = useState("basic");

  return (
    <div style={appStyle}>
      <nav style={navStyle}>
        <h3
          onClick={() => setView("basic")}
          style={view === "basic" ? navItemActiveStyle : navItemStyle}
        >
          Validation Form
        </h3>
        {/* Removed Advanced view */}
      </nav>
      <Task5Basic />
    </div>
  );
};

export default App5;
