const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user');
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(' Connected to MongoDB'))
  .catch((err) => console.log(' MongoDB connection error:', err));

app.get('/user-schema', (req, res) => {
  const userSchemaPaths = Object.keys(User.schema.paths).reduce((acc, key) => {
    acc[key] = User.schema.paths[key].instance; 
    return acc;
  }, {});
  res.json(userSchemaPaths);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});