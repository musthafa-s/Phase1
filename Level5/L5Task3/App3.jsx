import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Task3 from './Task3';


const blogPosts = [
  { id: 1, title: 'First Post', shortDescription: 'This is the first post.', content: 'This is the full content of the first post.' },
  { id: 2, title: 'Second Post', shortDescription: 'This is the second post.', content: 'This is the full content of the second post.' },
  { id: 3, title: 'Third Post', shortDescription: 'This is the third post.', content: 'This is the full content of the third post.' }
];

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: '20px auto',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
};

const blogListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const blogPostSummaryStyle = {
  padding: '15px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const postLinkStyle = {
  textDecoration: 'none',
  color: '#333',
};

const postLinkHoverStyle = {
  color: '#007BFF',
};

function App3() {
  return (
    <Router>
      <div style={appStyle}>
        <h1 style={headerStyle}>MS Blog</h1>
        <Routes>
          
          <Route
            path="/"
            element={
              <div style={blogListStyle}>
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    style={blogPostSummaryStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <Link
                      to={`/post/${post.id}`}
                      style={postLinkStyle}
                      onMouseOver={(e) => (e.target.style.color = postLinkHoverStyle.color)}
                      onMouseOut={(e) => (e.target.style.color = postLinkStyle.color)}
                    >
                      <h2>{post.title}</h2>
                      <p>{post.shortDescription}</p>
                    </Link>
                  </div>
                ))}
              </div>
            }
          />

          
          <Route
            path="/post/:id"
            element={<Task3 posts={blogPosts} />}
          />

        
          <Route
            path="*"
            element={<h2 style={{ textAlign: 'center', color: '#ff4d4d' }}>404 - Page Not Found</h2>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App3;
