const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! GET");
});

app.post("/post", (req, res) => {
  res.send("Hello World!  POST");
});

app.put("/put", (req, res) => {
  res.send("Hello World! PUT");
});

app.delete("/delete", (req, res) => {
  res.send("Hello World! DELETE");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

// * /users/:userId/books/:bookId
// * /users/34/books/8989
// * { "userId": "34", "bookId": "8989" }
app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});

// Path: APLIC_HIBRID/INTRO_04032024/package.json
