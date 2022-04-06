const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json() , cors())
const typeDefinition = `
type Query  { 
   welcome: String
}`
const  resolverObject = {
   Query : {
      greeting: () => 'welcome!!....'
   }
}
const {makeExecutableSchema} = require('graphql-tools')

const schema = makeExecutableSchema({typeDefs:typeDefinition, resolvers:resolverObject})

const {graphqlExpress,graphiqlExpress} = require('apollo-server-express')

app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.listen(4000, () =>  console.log(`server is up and running ${port}`))