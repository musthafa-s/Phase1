import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App9() {
  const [notes, setNotes] = useState([]);         // initialize as array to prevent map() error
  const [folder, setFolder] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);  // loading state for better UX
  const [error, setError] = useState(null);        // error state for handling errors

  const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:5000/api/notes', {
        params: { folder },
      });

      // Defensive check: make sure res.data.notes is always an array
      if (Array.isArray(res.data.notes)) {
        setNotes(res.data.notes);
      } else {
        setNotes([]);
      }
    } catch (err) {
      console.error('Error fetching notes:', err);
      setError('Failed to load notes.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    if (!folder || !title || !content) {
      alert('Please fill in folder, title, and content.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/notes', {
        folder,
        title,
        content,
      });
      setTitle('');
      setContent('');
      fetchNotes();
    } catch (err) {
      console.error('Error creating note:', err);
      setError('Failed to create note.');
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📓 Markdown Notes</h1>

      <div className="mb-4 space-x-2">
        <input
          value={folder}
          onChange={e => setFolder(e.target.value)}
          placeholder="Folder"
          className="border p-1"
        />
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-1"
        />
      </div>

      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content (Markdown supported)"
        className="border p-2 w-full mb-2"
        rows={5}
      />
      <button
  onClick={handleCreate} // Calls handleCreate on click
  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
>
  Create Note
</button>


      {loading && <p className="text-yellow-600 mt-4">Loading notes...</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}

      <h2 className="mt-6 font-semibold">📝 Notes:</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes found.</p>
      ) : (
        <ul className="list-disc ml-4">
          {notes.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App9;
