import React from "react";
import useAxios from "./UseAxios";

const Posts = () => {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useAxios('https://jsonplaceholder.typicode.com/posts');

  return (
    <div style={containerStyle}>
      <h2>📄 Posts</h2>
      <button onClick={refetch} style={buttonStyle}>🔄 Refresh</button>

      {loading && <p style={loadingStyle}>Loading...</p>}
      {error && <p style={errorStyle}>Error: {error}</p>}

      {posts && (
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const containerStyle = {
  fontFamily: 'Arial',
  padding: '20px',
  maxWidth: '600px',
  margin: 'auto',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
};

const buttonStyle = {
  marginBottom: '10px',
  padding: '8px 16px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const loadingStyle = {
  color: '#FFA500',
};

const errorStyle = {
  color: '#FF4136',
};

export default Posts;
