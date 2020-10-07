const express = require('express')
const config = require('config')
const graphqlHTTP = require('express-graphql')
const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')
const PORT = config.get('app.port') || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', (req, res) => { res.json('API Running !!!') })
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
)

app.listen(PORT, () => {
  console.log(`Server Startd on Port ${PORT}`)
})
