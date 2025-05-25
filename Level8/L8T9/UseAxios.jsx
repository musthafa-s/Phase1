import axios from "axios";
import { useEffect, useRef, useState } from "react";


const UseAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef(null); 

  const fetchData = async ({ url, method = 'GET', data = {}, params = {} }) => {
    controllerRef.current = new AbortController();
    setLoading(true);
    try {
      const result = await axios({
        url,
        method,
        data,
        params,
        signal: controllerRef.current.signal, // Pass signal to axios
      });
      setResponse(result.data);
      setError('');
    } catch (err) {
      if (axios.isCancel(err) || err.code === 'ERR_CANCELED') {
        console.log('Request canceled:', err.message);
      } else {
        setError(err.response ? err.response.data : err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
        console.log('Component unmounted: request aborted');
      }
    };
  }, []);

  return { response, error, loading, fetchData };
};

export default UseAxios;
