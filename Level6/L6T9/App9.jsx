import React, { useEffect, useRef, useState } from 'react';
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '20px',
  width: '300px',
};

const outputStyle = {
  fontSize: '1.5rem',
  color: '#333',
  marginBottom: '20px',
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

const App9 = () => {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Input</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        style={inputStyle}
      />
      <h2 style={outputStyle}>{input}</h2>
      <button onClick={handleFocus} style={buttonStyle}>
        FOCUS
      </button>
    </div>
  );
};


export default App9;