import React, { useEffect, useState } from 'react';
import LargeList from './LargeList';

const App6 = () => {
  const [count, setCount] = useState(0);
  const [listData] = useState(() => {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      value: `Item ${i}`,
    }));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1); // Corrected the syntax for updating state
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Counter: {count}</h1>
      <LargeList items={listData} />
    </div>
  );
};

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
};

export default App6;