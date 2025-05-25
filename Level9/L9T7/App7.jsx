import React, { useState, useMemo, useCallback } from 'react';

const findPrimes = (limit) => {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
};

const PrimeList = React.memo(({ primes, onClear }) => {
  console.log('PrimeList rendered');
  return (
    <div>
      <h3>Prime Numbers:</h3>
      <ul>
        {primes.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Primes</button>
    </div>
  );
});

const App7 = () => {
  const [limit, setLimit] = useState(100);
  const [showPrimes, setShowPrimes] = useState(true);

  const primes = useMemo(() => findPrimes(limit), [limit]);

  const handleClearPrimes = useCallback(() => {
    setShowPrimes(false);
  }, []);

  const handleReset = () => {
    setShowPrimes(true);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Prime Number Finder</h1>
      <div style={inputContainerStyle}>
        <label htmlFor="limit" style={labelStyle}>
          Enter Limit:
        </label>
        <input
          id="limit"
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={inputStyle}
        />
      </div>
      {showPrimes && <PrimeList primes={primes} onClear={handleClearPrimes} />}
      {!showPrimes && (
        <button onClick={handleReset} style={buttonStyle}>
          Reset
        </button>
      )}
    </div>
  );
};

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: 'green',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '20px',
};

const inputContainerStyle = {
  marginBottom: '20px',
  backgroundColor:'blue'
};

const labelStyle = {
  marginRight: '10px',
  fontSize: '1rem',
  color: 'black',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default App7;