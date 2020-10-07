const typeBook = `
  type Book {
    _id: ID!
    code: String!
    name: String!
  }`

const BookInput = `
  input BookInput {
    code: String!
    name: String!
  }`

module.exports = {
  typeBook,
  BookInput
}
