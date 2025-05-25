import React, { useEffect, useState } from 'react';
import { getEntries, deleteEntry } from './journalController';
import EntryForm from './EntryForm';

const App2 = () => {
  const [entries, setEntries] = useState([]);

  const loadEntries = () => {
    setEntries(getEntries());
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handleDelete = (id) => {
    deleteEntry(id);
    loadEntries();
  };

  // Inline styles
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '15px',
      padding: '10px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '5px',
    },
    description: {
      color: '#555',
      marginBottom: '10px',
    },
    deleteButton: {
      padding: '5px 10px',
      fontSize: '14px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    deleteButtonHover: {
      backgroundColor: '#c82333',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Journal Entries</h1>
      <EntryForm onAdd={loadEntries} />
      <ul style={styles.list}>
        {entries.map((entry) => (
          <li key={entry.id} style={styles.listItem}>
            <div>
              <h3 style={styles.title}>{entry.title}</h3>
              <p style={styles.description}>{entry.description}</p>
              <button
                style={styles.deleteButton}
                onClick={() => handleDelete(entry.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App2;