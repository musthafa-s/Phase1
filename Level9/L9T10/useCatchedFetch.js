import { useEffect, useState } from "react";

const cache = {};

const useCachedFetch = (url) => {
  const [data, setData] = useState(cache[url] || []);
  const [loading, setLoading] = useState(!cache[url]);

  useEffect(() => {
    if (!cache[url]) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          cache[url] = json;
          setData(json);
          setLoading(false);
        });
    }
  }, [url]);

  return { data, loading };
};

export default useCachedFetch;