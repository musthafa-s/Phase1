import React, { useEffect } from 'react';
import UseAxios from './UseAxios';

const AxiosComponent = () => {
  const { response, error, loading, fetchData } = UseAxios();

  useEffect(() => {
    fetchData({ url: 'https://jsonplaceholder.typicode.com/posts/1' });
  }, []);

  return (
    <div style={styles.container}>
      <h2>🚀 Axios with Cancel </h2>

      {loading && <p style={styles.loading}>Loading...</p>}

      {error && <p style={styles.error}>❌ Error: {error}</p>}

      {response && (
        <div style={styles.card}>
          <h3>{response.title}</h3>
          <p>{response.body}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosComponent;


const styles = {
  container: {
    fontFamily: 'Arial',
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  loading: {
    color: '#FFA500',
  },
  error: {
    color: 'red',
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: '10px',
    borderRadius: '6px',
  },
};
