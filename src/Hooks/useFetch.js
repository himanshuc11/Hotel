import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return [data, error, loading];
}

export default useFetch;
