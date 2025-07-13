const Book = require('../models/Book');
const fetchBooks = require('../utils/fetchBooks');

const searchBooks = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: 'Query missing' });
  const results = await fetchBooks(q);
  res.json(results);
};

const addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

const getBooks = async (req, res) => {
  const { userId } = req.query;
  const books = await Book.find({ userId });
  res.json(books);
};

const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
};

module.exports = {
  searchBooks,
  addBook,
  getBooks,
  updateBook,
  deleteBook,
};
