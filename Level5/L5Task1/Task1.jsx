import React from 'react';

const listItemStyle = {
  textDecoration: 'none',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease',
};

const listItemCompletedStyle = {
  ...listItemStyle,
  textDecoration: 'line-through',
  backgroundColor: '#d3ffd3',
};

const titleStyle = {
  fontSize: '1.2rem',
  color: '#333',
  marginBottom: '5px',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  marginBottom: '10px',
};

const labelStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  color: '#333',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '8px 12px',
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#e60000',
};

const Task1 = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li
      style={task.completed ? listItemCompletedStyle : listItemStyle}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f8ff')} // Light blue on hover
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = task.completed
          ? '#d3ffd3'
          : '#f9f9f9')
      }
    >
      <div>
        <h3 style={titleStyle}>{task.title}</h3>
        <p style={descriptionStyle}>{task.description}</p>
        <label style={labelStyle}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          Completed
        </label>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task1;