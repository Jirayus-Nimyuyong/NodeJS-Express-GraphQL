const { createUser, getUser } = require('./function/controller')

module.exports = {
  createUser: createUser,
  users: getUser
}
