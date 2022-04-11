const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {gql, GraphQLClient}=require('graphql-request')
app.use(bodyParser.json())

app.get('/cityname',async(req,res) => {
    const query = gql`
    query city($search: String) {
    city(where: {name: {_ilike: $search}}) {
    id
    name
    is_connected_city
    }
  }`
  const any = {
      search : `%${req.query.name}%`
  }
  const anyvariable =new GraphQLClient('https://dcore.fr8.in/v1/graphql',{
    method:'POST',
    header: {'Content-type':'application/json'},
            query:query,
         variable:any

    })
    const value = await anyvariable.request(query,any)
    res.json(value.city);

})
    
    app.listen(4000,() =>{
        console.log("setver runs in 4000");
    })

 

