// src/L15T6/encryption.js
const crypto = require('crypto');
const fs = require('fs');

function encryptFile(inputPath, outputPath, password) {
  const cipher = crypto.createCipher('aes-256-cbc', password);
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  input.pipe(cipher).pipe(output);

  output.on('finish', () => {
    console.log('File encrypted successfully.');
  });
}

function decryptFile(inputPath, outputPath, password) {
  const decipher = crypto.createDecipher('aes-256-cbc', password);
  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  input.pipe(decipher).pipe(output);

  output.on('finish', () => {
    console.log('File decrypted successfully.');
  });
}

module.exports = { encryptFile, decryptFile };
