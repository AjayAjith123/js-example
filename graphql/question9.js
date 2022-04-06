// const express = require("express");
// const graphqlHttp = require('express-graphql');
// const app = express();

// app.use('/graphql',graphqlHttp(
//     {
// graphql:
//     }
// ));

// app.listen(4000, ()=>{
// console.log("server running on 4000");
// });




// //import { Express } from 'express'
// const express = require('express')
// const expressGraphQl = require('express-graphql')
// const app = express()

// app.request('/graphql',expressGraphQl()
// ({
//     graphiql:true
// }))
// app.listen(4000, () => 
//  console.log("server runs on 4000"))



 const express = require('express')
 
 const graphqlHttp = require('express-graphql')
 
 const app = express();

 app.use('/graphql', graphqlHttp({

 }))

app.listen(4000, () =>{
    console.log('server runs on 4000')
});





























