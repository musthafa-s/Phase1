import React from 'react';
import useInput from './useInput';

const containerStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: 'grey',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '450px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '1.8rem',
  color: '#333',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  width: '90%',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const paragraphStyle = {
  marginTop: '15px',
  fontSize: '1.2rem',
  color: 'black',
};

const App3 = () => {
  const input = useInput('');

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Custom useInput Hook</h2>
      <input
        type="text"
        {...input}
        placeholder="Type something..."
        style={inputStyle}
      />
      <p style={paragraphStyle}>
        You typed: <strong>{input.value}</strong>
      </p>
    </div>
  );
};

export default App3;