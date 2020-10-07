const typeUser = `
    type User {
        _id: ID!
        code: String!
        name: String!
        password: String!
        type: Float!
        mobilePhone: String!
        email: String!
    }`

const UserInput = `
    input UserInput {
        code: String!
        name: String!
        password: String!
        type: Float!
        mobilePhone: String!
        email: String!
    }`

module.exports = {
  typeUser,
  UserInput
}
