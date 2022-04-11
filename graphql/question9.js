const express=require("express")
const app=express();
const bodyParser=require("body-parser");
const {gql ,GraphQLClient,request} = require('graphql-request');
app.use('/client',(req,res)=>{
    const client=gql`
    query city ($search:string) {
        city {
          id
          name
          is_connected_city
        }
      }`
      const search = {
          search :`${req.query.name}%`
      }
      const ajith=new GraphQLClient( 'https://dcore.fr8.in/v1/graphql',{
          method:'post',
          headers:{'content-type' : 'application/json' },
          body:JSON.stringfy(
{              query:client,
              variable:search
         }         )
        })
          const data =  variable.request(client,search);
            res.json(data);
        })
        app.listen(4000,() => {
            console.log("server runs on 4000");
        })




      

