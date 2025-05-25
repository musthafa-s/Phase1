const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let contacts = [];

// GET all contacts
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// POST a new contact
app.post('/api/contacts', (req, res) => {
  const contact = req.body;
  contacts.push(contact);
  res.status(201).json(contact);
});

// DELETE contact by email
app.delete('/api/contacts/:email', (req, res) => {
  const { email } = req.params;
  contacts = contacts.filter(c => c.email !== email);
  res.json({ message: 'Contact deleted' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

