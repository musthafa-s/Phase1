const Task = require('../models/Task');


const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.status(200).json(tasks);
};


const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  if (!title) {
    res.status(400).json({ message: 'Title is required' });
    return;
  }

  const task = await Task.create({
    user: req.user._id,   
    title,
    description,
    dueDate,
  });

  res.status(201).json(task);
};


const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized to update this task' });
  }

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } 
  );

  res.status(200).json(updatedTask);
};


const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized to delete this task' });
  }

  await task.remove();

  res.status(200).json({ message: 'Task deleted successfully' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
