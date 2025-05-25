// D:\React JS\my-react-app\src\App5.jsx

import React from 'react';
import Task5 from './Task5';

const style = {
  appContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
};

function App5() {
  return (
    <div style={style.appContainer}>
      <h1 style={style.header}>Basic Calculator</h1>
      <Task5 />
    </div>
  );
}

export default App5;
