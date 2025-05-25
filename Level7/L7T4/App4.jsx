import React from 'react';
import useLocalStorage from './useLocalStorage';

const containerStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: 'purple', 
  borderRadius: '10px',
  boxShadow: '0 4px 8pxrgb(1, 1, 1)',
  maxWidth: '400px',
  margin: '50px auto',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  width: '90%',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: 'black',
};

const App4 = () => {
  const [lsValue, setLSValue] = useLocalStorage('my_localstorage', '');

  return (
    <div style={containerStyle}>
      <input
        style={inputStyle}
        placeholder="Enter your text here..."
        value={lsValue}
        onChange={(e) => setLSValue(e.target.value)}
      />
      <p style={paragraphStyle}>{lsValue}</p>
    </div>
  );
};

export default App4;