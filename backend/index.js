const express = require('express')
const { graphqlHTTP } = require('express-graphql')
// const cors = require('cors')

// database
const schema = require('./graphql/schema')
const root = require('./graphql/root')

// server
const port = process.env.PORT || 4000
const app = express()
// app.use(cors())
app.use(express.static('./'));
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});