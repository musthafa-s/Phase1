// src/L15T6/App6.jsx
import React, { useState } from 'react';
const { encryptFile, decryptFile } = require('./encryption');

function App6() {
  const [inputPath, setInputPath] = useState('');
  const [outputPath, setOutputPath] = useState('');
  const [password, setPassword] = useState('');

  const handleEncrypt = () => {
    encryptFile(inputPath, outputPath, password);
  };

  const handleDecrypt = () => {
    decryptFile(inputPath, outputPath, password);
  };

  return (
    <div>
      <h1>File Encryption Tool</h1>
      <input
        type="text"
        placeholder="Input File Path"
        value={inputPath}
        onChange={(e) => setInputPath(e.target.value)}
      />
      <input
        type="text"
        placeholder="Output File Path"
        value={outputPath}
        onChange={(e) => setOutputPath(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt}>Decrypt</button>
    </div>
  );
}

export default App6;
