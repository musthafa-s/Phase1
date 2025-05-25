import axios from 'axios';
import React, { useEffect } from 'react';
import { useLoading } from './LoadingContent'; 

const AxiosConfig = () => {
  const { loading, setLoading } = useLoading(); 

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    // Request Interceptor
    axiosInstance.interceptors.request.use((config) => {
      console.log('📤 Request Interceptor:', config);
      setLoading(true);
      config.headers['Authorization'] = 'Bearer dummy_token_123';
      return config;
    });

    // Response Interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        console.log('✅ Response Interceptor:', response.data);
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
        return Promise.reject(error);
      }
    );

    // Actual API call
    axiosInstance
      .get('/posts/1')
      .then((response) => {
        console.log('📦 Final Data:', response.data);
      })
      .catch((error) => {
        console.error('💥 Axios Error:', error.message);
      });
  }, [setLoading]);

  return (
    <div>
      <h2>Axios Global Interceptor Example</h2>
      {loading ? <p>Loading...</p> : <p>Data loaded. Check console.</p>}
    </div>
  );
};

export default AxiosConfig;
