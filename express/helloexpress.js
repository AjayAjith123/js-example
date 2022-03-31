const express = require("express");
const app = express();
app.get("/", (req, res) => {
  const name = req.query.name;
  res.send(name);
});
app.listen(3000, () => {
  console.log("server runs on 3000 ");
});

// const express = require("express");
// const app = express();
// app.get("/hello", (req, res) => {
//   const name = req.query.name;
//   res.send('hello' + ' ' + name);
// });
// app.listen(3000, () => {
//   console.log("server starts on 3000");
// });

// // const name = req.query.name;
// // res.send('hello' + ' ' + name);
// // });
