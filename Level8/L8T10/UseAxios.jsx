import axios from 'axios';
import { useEffect, useState } from 'react';

const cache = new Map();

const useAxios = (url, config = {}, forceRefresh = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refetch = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (cache.has(url) && !forceRefresh) {
        setData(cache.get(url));
        setLoading(false);
        return;
      }

      try {
        const response = await axios({
          url,
          ...config,
        });
        cache.set(url, response.data);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config, forceRefresh, refreshTrigger]);

  return { data, loading, error, refetch };
};

export default useAxios;
