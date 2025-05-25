import React from 'react';
import { organizeFiles } from './FileOrganizer.jsx';

const App3 = () => {
  return (
    <div>
      <h2>📁 File Organizer (Simulated)</h2>
      <button onClick={organizeFiles}>Organize Files</button>
    </div>
  );
};

export default App3;
