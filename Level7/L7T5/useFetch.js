import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Loading is a boolean
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(url); // API request
        setData(response.data); // Set the fetched data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set the error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (url) {
      fetchData(); // Fetch data only if the URL is provided
    }
  }, [url]);

  return [data, loading, error];
};

export default useFetch;