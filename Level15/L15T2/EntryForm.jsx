// EntryForm.jsx
import React, { useState } from 'react';
import { createEntry } from './journalController';

const EntryForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createEntry({ title, content, tags: tags.split(',').map(tag => tag.trim()) });
    setTitle('');
    setContent('');
    setTags('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <br />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <br />
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma separated)" />
      <br />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
