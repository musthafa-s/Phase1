import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoading } from './LoadingContent';

const AxiosConfig = () => {
  const { loading, setLoading } = useLoading();
  const [combinedData, setCombinedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    // Request Interceptor
    axiosInstance.interceptors.request.use((config) => {
      setLoading(true);
      config.headers['Authorization'] = 'Bearer dummy_token_123';
      return config;
    });

    // Response Interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        if (error.response) {
          const { status } = error.response;
          if (status === 401) console.error('❌ Unauthorized (401)');
          else if (status === 404) console.error('❌ Not Found (404)');
          else if (status === 500) console.error('❌ Server Error (500)');
          else console.error('❌ Other Error:', error.message);
        }
        setError('Failed to fetch one or more resources.');
        return Promise.reject(error);
      }
    );

    // Make multiple API requests in parallel
    Promise.all([
      axiosInstance.get('/posts/1'),
      axiosInstance.get('/users/1'),
    ])
      .then(([postRes, userRes]) => {
        setCombinedData({
          post: postRes.data,
          user: userRes.data,
        });
        setError(null);
      })
      .catch((err) => {
        console.error('💥 Axios Error:', err.message);
      });
  }, [setLoading]);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Parallel API Requests</h2>
      {loading && <p style={loadingStyle}>Loading data...</p>}
      {error && <p style={errorStyle}>{error}</p>}
      {!loading && combinedData && (
        <div>
          <h3 style={{ color: '#444' }}>Post:</h3>
          <p><strong>{combinedData.post.title}</strong></p>
          <p>{combinedData.post.body}</p>

          <h3 style={{ color: '#444' }}>User:</h3>
          <p><strong>{combinedData.user.name}</strong></p>
          <p>{combinedData.user.email}</p>
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '1.8rem',
  color: '#333',
  marginBottom: '20px',
};

const loadingStyle = {
  color: '#FFA500',
  fontSize: '1.2rem',
};

const errorStyle = {
  color: '#FF0000',
  fontSize: '1.2rem',
};

export default AxiosConfig;
