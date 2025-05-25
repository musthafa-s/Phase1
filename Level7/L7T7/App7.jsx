
import React from 'react';
import useWindowResize from './useWindowResize';

function App7() {
  const { width, height } = useWindowResize();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' ,textAlign:'center'}}>
      <h2>Window Size Tracker</h2>
      <p>
        Width: <strong>{width}px</strong>
      </p>
      <p>
        Height: <strong>{height}px</strong>
      </p>
    </div>
  );
}

export default App7;
