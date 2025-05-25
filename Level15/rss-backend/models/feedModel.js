const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: String,
  description: String,
  read: { type: Boolean, default: false }, // Default is 'false' meaning the feed is unread
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feed', feedSchema);
