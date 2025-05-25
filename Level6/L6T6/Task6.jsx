

import React, { useState, useEffect } from 'react';
    
const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: 'yellow',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
  };


const Task6 = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={containerStyle}>
      <h1>Getting Messsage from Console</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Stop Timer' : 'Start Timer'}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
};

const TimerComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Logging message every second...');
    }, 1000);

    // Cleanup function to clear the interval when unmounted
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleared on unmount.');
    };
  }, []);

  return <p>Check the console for messages every second.</p>;
};

export default Task6;
