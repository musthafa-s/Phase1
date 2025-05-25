const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const Post = require('../models/Post')
const User = require("../models/User");

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = new User({ name, email, age });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    console.log('Incoming POST data:', req.body);

    if (!title || !content || !author) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const userExists = await User.findById(author);
    if (!userExists) {
      return res.status(404).json({ error: 'Author not found' });
    }

    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  

app.get("/api/users", async (req, res) => {
  try {
    const { name, email, limit = 10, skip = 0 } = req.query;

    const query = {};
    if (name) query.name = { $regex: name, $options: "i" };
    if (email) query.email = { $regex: email, $options: "i" };

    const users = await User.find(query)
      .limit(Number(limit))
      .skip(Number(skip));

    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/api/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }
  
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app.get('/api/posts', async (req, res) => {
    try {
      const { author } = req.query;
      const filter = author ? { author } : {};
  
      const posts = await Post.find(filter).populate('author', 'name email');
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.get('/api/users/:id/posts', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      const posts = await Post.find({ author: req.params.id });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
app.put('/api/users/:id', async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { name, email, age },
        { new: true, runValidators: true }
      );
      if (!updatedUser) return res.status(404).json({ error: 'User not found' });
      res.status(200).json(updatedUser);
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({ error: 'Email must be unique' });
      }
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.delete('/api/users/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );
      if (!deletedUser) return res.status(404).json({ error: 'User not found' });
      res.status(200).json({ message: 'User soft deleted', user: deletedUser });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
