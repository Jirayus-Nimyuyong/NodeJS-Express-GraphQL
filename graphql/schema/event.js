const typeEvent = `
    type Event {
        _id: ID!
        code: String!
        name: String!
    }`

const EventInput = `
    input EventInput {
        code: String!
        name: String!
    }`

module.exports = {
  typeEvent,
  EventInput
}
