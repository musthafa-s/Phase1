
import express from 'express';
import cors from 'cors';
import { performBackup } from './backup.js'; 

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/backup', async (req, res) => {
  const { source, destination } = req.body;

  try {
    await performBackup(source, destination);
    res.json({ message: 'Backup completed successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
