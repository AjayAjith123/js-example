var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/home", (req, res) => {
  // console.log(req.body);
  res.send('name :' + req.body.name);
  // res.send('age :' + req.body.age);
});

app.listen(3000, () => {
  console.log("server starts on 3000");
});
    


