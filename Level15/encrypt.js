// encrypt.js
import { encryptFile, decryptFile } from './src/L15T6/encryption.js';

const inputPath = 'path/to/input.txt';
const outputPath = 'path/to/output.enc';
const password = 'your-password';

// Encrypt the file
encryptFile(inputPath, outputPath, password);

// Decrypt the file
// decryptFile(outputPath, 'path/to/decrypted.txt', password);
