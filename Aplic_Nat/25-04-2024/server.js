const express = require("express");
const connectDb = require("./src/database/database");
const app = express();
;

const port = 3000;

connectDb().then(() => {
  console.log("▐▓█▀▀▀▀▀▀▀▀▀█▓▌░▄▄▄▄▄░");
  console.log("▐▓█░░▀░░▀▄░░█▓▌░█▄▄▄█░");
  console.log("▐▓█░░▄░░▄▀░░█▓▌░█▄▄▄█░");
  console.log("▐▓█▄▄▄▄▄▄▄▄▄█▓▌░█████░");
  console.log("░░░░▄▄███▄▄░░░░░█████░");
});



app.listen(port, () =>
  console.log(`Utilizando a porta ${port}!, http://localhost:${port}`)
);
// Path: server.js

