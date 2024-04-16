const express = require("express");
const connectDb = require("./src/database/database");
const app = express();
const port = 3000;

connectDb().then(() => {
    console.log("banco conectado");
});

app.get("/", (req, res) => res.send("TESTE_ROTA!"));
app.listen(port, () =>
  console.log(`Utilizando a porta ${port}!, http://localhost:${port}`)
);
// Path: index.js
