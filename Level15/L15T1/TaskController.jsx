// taskController.jsx (browser-compatible using localStorage)

const TASKS_KEY = 'tasks';

const getStoredTasks = () => {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const addTask = async (task) => {
  const tasks = getStoredTasks();
  const newTask = { id: Date.now().toString(), ...task };
  tasks.push(newTask);
  saveTasks(tasks);
};

export const listTasks = async (filter = '') => {
  const tasks = getStoredTasks();
  return filter ? tasks.filter(t => t.status === filter) : tasks;
};

export const updateTask = async (id, key, value) => {
  const tasks = getStoredTasks();
  const updated = tasks.map(task => task.id === id ? { ...task, [key]: value } : task);
  saveTasks(updated);
};

export const deleteTask = async (id) => {
  const tasks = getStoredTasks();
  const filtered = tasks.filter(task => task.id !== id);
  saveTasks(filtered);
};
