import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported

const url = "https://jsonplaceholder.typicode.com/posts";

const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const resp = await axios.post(url, { name, email, message });
      setResponse(resp.data); // Store the response data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
      setResponse(null); // Clear any previous response
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Form</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      {response && <p style={successStyle}>Form submitted successfully!</p>}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

// CSS styles
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '1.8rem',
  color: '#333',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  height: '100px',
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

const successStyle = {
  color: 'green',
  marginTop: '20px',
};

const errorStyle = {
  color: 'red',
  marginTop: '20px',
};

export default PostRequest;