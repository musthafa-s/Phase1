// markdown-notes/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const {
  createNote,
  listNotes,
  viewNote,
  editNote,
  deleteNote,
  searchNotes
} = require('./utils/notesManager');

app.use(cors());
app.use(express.json());

// Create Note
app.post('/api/notes', async (req, res) => {
  const { folder, title, content } = req.body;
  await createNote(folder, title, content);
  res.send({ message: 'Note created' });
});

// List Notes
app.get('/api/notes', async (req, res) => {
  const { folder = '' } = req.query;
  const list = await listNotes(folder);
  res.send({ notes: list });
});

// View Note
app.get('/api/notes/:folder/:title', async (req, res) => {
  const { folder, title } = req.params;
  const content = await viewNote(folder, title);
  res.send({ content });
});

// Edit Note
app.put('/api/notes', async (req, res) => {
  const { folder, title, newContent } = req.body;
  await editNote(folder, title, newContent);
  res.send({ message: 'Note updated' });
});

// Delete Note
app.delete('/api/notes/:folder/:title', async (req, res) => {
  const { folder, title } = req.params;
  await deleteNote(folder, title);
  res.send({ message: 'Note deleted' });
});

// Search Notes
app.get('/api/search', async (req, res) => {
  const { query, folder = '' } = req.query;
  const result = await searchNotes(query, folder);
  res.send({ matches: result });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
