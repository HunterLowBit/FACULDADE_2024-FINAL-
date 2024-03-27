const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send(req.params);
    const { userId, bookId } = req.params;
    console.log(`userId: ${userId}, bookId: ${bookId}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
