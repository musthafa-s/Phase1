import React from 'react';
import { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: 'green',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2rem',
  color: 'Black',
  marginBottom: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  backgroundColor: '#fff',
  padding: '10px 20px',
  margin: '10px 0',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontSize: '1.2rem',
  color: '#333',
};

const Task11 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "Prayer"
    },
    {
      id: 2,
      item: "Read Books"
    },
    {
      id: 3,
      item: "Workout"
    },
    {
      id: 4,
      item: "Go to College"
    }
  ]);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Daily Routine:</h1>
      <ul style={listStyle}>
        {items.map((item) => (
          <li key={item.id} style={listItemStyle}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task11;