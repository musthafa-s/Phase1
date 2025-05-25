
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function App10() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState('');

  const handleBackup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/backup', {
        source,
        destination,
      });
      setStatus(res.data.message);
    } catch (err) {
      setStatus(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📦 Data Backup Tool</h1>
      <input
        type="text"
        placeholder="Source Directory"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="border p-2 block mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Backup Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 block mb-4 w-full"
      />
      <button onClick={handleBackup} className="bg-blue-600 text-white px-4 py-2 rounded">
        Backup Now
      </button>
      <p className="mt-4">{status}</p>
    </div>
  );
}

export default App10;