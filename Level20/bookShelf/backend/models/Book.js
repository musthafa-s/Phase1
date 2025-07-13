const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  googleId: String,
  title: String,
  authors: [String],
  category: { type: String, enum: ['Read', 'Currently Reading', 'Want to Read'] },
  rating: Number,
  notes: String,
});

module.exports = mongoose.model('Book', bookSchema);
