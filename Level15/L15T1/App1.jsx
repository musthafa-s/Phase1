import React, { useState, useEffect } from 'react';
import { addTask, listTasks, updateTask, deleteTask } from './taskController';

const App1 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'pending', dueDate: '' });
  const [filter, setFilter] = useState('');

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await listTasks(filter);
      setTasks(allTasks);
    };
    fetchTasks();
  }, [filter]);

  // Handle task addition
  const handleAddTask = async (e) => {
    e.preventDefault();
    await addTask(newTask);
    setNewTask({ title: '', description: '', status: 'pending', dueDate: '' });
    const updatedTasks = await listTasks(filter);
    setTasks(updatedTasks);
  };

  // Handle task status change
  const handleUpdateTask = async (id, key, value) => {
    await updateTask(id, key, value);
    const updatedTasks = await listTasks(filter);
    setTasks(updatedTasks);
  };

  // Handle task deletion
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const updatedTasks = await listTasks(filter);
    setTasks(updatedTasks);
  };

  // Inline styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px',
    },
    header: {
      textAlign: 'center',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    input: {
      margin: '5px 0',
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      margin: '5px 0',
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    filter: {
      marginBottom: '20px',
    },
    taskList: {
      listStyleType: 'none',
      padding: 0,
    },
    taskItem: {
      backgroundColor: 'white',
      margin: '10px 0',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    taskTitle: {
      color: '#007bff',
    },
    taskButton: {
      marginRight: '10px',
      padding: '5px 10px',
      fontSize: '14px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    toggleButton: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Task Manager</h1>
      <form style={styles.form} onSubmit={handleAddTask}>
        <input
          style={styles.input}
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Status (pending/completed)"
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
        />
        <input
          style={styles.input}
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <button style={styles.button} type="submit">
          Add Task
        </button>
      </form>

      <div style={styles.filter}>
        <label>Filter Tasks: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <div>
              <h3 style={styles.taskTitle}>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>Due Date: {task.dueDate}</p>
              <button
                style={{ ...styles.taskButton, ...styles.toggleButton }}
                onClick={() =>
                  handleUpdateTask(task.id, 'status', task.status === 'pending' ? 'completed' : 'pending')
                }
              >
                Toggle Status
              </button>
              <button
                style={{ ...styles.taskButton, ...styles.deleteButton }}
                onClick={() => handleDeleteTask(task.id)}
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

export default App1;