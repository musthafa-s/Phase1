import useFetch from "./useFetch";
import React from "react";

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9', // Light gray background
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '1.5rem',
  color: '#333',
  marginBottom: '20px',
};

const errorStyle = {
  color: 'red',
  fontSize: '1.2rem',
};

const App6 = () => {
  const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <h1 style={headingStyle}>LOADING...</h1>;

  if (error) return <h1 style={errorStyle}>Error: {error}</h1>;

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default App6;