const express = require("express");
const app = express();
app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send('hello' + ' ' + name);
});
app.listen(3000, () => {
  
  console.log("server starts on 3000");
});
