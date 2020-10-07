const userResolvers = require('./user/controller')
const bookResolvers = require('./book/controller')
const eventResolvers = require('./event/controller')

const rootResolvers = {
  ...userResolvers,
  ...bookResolvers,
  ...eventResolvers
}

module.exports = rootResolvers
