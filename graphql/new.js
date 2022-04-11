var express = require('express');
var graphqlHttp  = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = buildSchema(`
    type query{
        hi:String
    }`);
var root = { hi:()=> {
        return'hi everyone';
    }
};

var app = express();
app.use('/graphql', graphqlHttp({
schema: schema,
rootvalue: root,
graphiql: true
}))
app.listen(4000, ()=> {
    console.log("server runs on 4000")
});