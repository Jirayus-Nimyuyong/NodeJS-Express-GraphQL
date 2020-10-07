const { buildSchema } = require('graphql')
const { typeUser, UserInput } = require('./user')
const { typeBook, BookInput } = require('./book')
const { typeEvent, EventInput } = require('./event')
const schema = buildSchema(`
  ${typeUser}
  ${UserInput}
  ${typeBook}
  ${BookInput}
  ${typeEvent}
  ${EventInput}
  type RootQuery {
      books: [Book!]!
      users: [User!]!
      event: [Event!]!
  }
  type RootMutation {
      createUser(userInput: UserInput): User
      createBook(bookInput: BookInput): Book
      createEvent(eventInput: EventInput): Event
  }
  schema {
      query: RootQuery
      mutation: RootMutation
  }
`)

module.exports = schema
