import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  maxWidth: '600px',
  margin: '50px auto',
  backgroundColor: '#f9f9f9', 
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '1.8rem',
  color: '#333',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#555',
  marginBottom: '10px',
};

function App8() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);


  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}> Debounced Search</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Type to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />
      <p style={paragraphStyle}>
        <strong>Search Term:</strong> {searchTerm}
      </p>
      <p style={paragraphStyle}>
        <strong>Debounced Term:</strong> {debouncedSearchTerm}
      </p>
    </div>
  );
}

export default App8;