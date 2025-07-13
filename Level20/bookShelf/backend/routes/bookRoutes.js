const express = require('express');
const router = express.Router();
const {
  searchBooks,
  addBook,
  getBooks,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.get('/search', searchBooks);
router.post('/', addBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
