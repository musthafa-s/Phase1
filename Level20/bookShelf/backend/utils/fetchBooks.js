const axios = require('axios');

const fetchBooks = async (query) => {
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  return res.data.items.map((item) => ({
    googleId: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors || ['Unknown'],
  }));
};

module.exports = fetchBooks;
