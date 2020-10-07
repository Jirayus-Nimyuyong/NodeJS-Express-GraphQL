const { createBook, getBook } = require('./function/controller')

module.exports = {
  createBook: createBook,
  books: getBook
}
