const books = []

const createBook = (args) => {
  try {
    const book = {
      _id: Math.random().toString(),
      code: args.bookInput.code,
      name: args.bookInput.name
    }
    books.push(book)
    return book
  } catch (error) {
    console.log(error)
  }
}

const getBook = () => {
  try {
    return books
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createBook,
  getBook
}
