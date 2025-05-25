import React, { useState } from 'react';
import Task1 from './Task1';
import { Formik, Form, Field } from 'formik';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f0f8ff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
  maxWidth: '600px',
  margin: '20px auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '20px',
};

const labelStyle = {
  fontSize: '1rem',
  color: '#333',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  marginTop: '10px',
  transition: 'background-color 0.3s ease',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  width: '100%',
};

const listItemStyle = {
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontSize: '1rem',
  color: '#333',
};

const App1 = () => {
  const [tasks, setTasks] = useState([]); // Initial empty tasks array

  const handleSubmit = (values) => {
    const newTask = {
      id: Date.now(), // Generate unique id based on time
      title: values.title,
      description: values.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    // Mark as completed
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    // Remove the task from state
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Task Manager</h1>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={handleSubmit}
      >
        <Form style={formStyle}>
          <div>
            <label htmlFor="title" style={labelStyle}>
              Title
            </label>
            <Field
              id="title"
              name="title"
              placeholder="Task Title"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="description" style={labelStyle}>
              Description
            </label>
            <Field
              id="description"
              name="description"
              placeholder="Task Description"
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </Form>
      </Formik>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={listItemStyle}>
            <Task1
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;