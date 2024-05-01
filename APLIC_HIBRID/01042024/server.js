const express = require("express");
const routes = require("./src/routes/userRoutes");
const connectDb = require("./database");

const app = express();
const port = 3000;

app.use(express.json());

connectDb().then(() => {
  console.log("Conectado ao MongoDB");
});

app.use("/user", routes);

app.get("/", (req, res) => res.send("TESTE_ROTA!"));
app.listen(port, () =>
  console.log(`Utilizando a porta ${port}!, http://localhost:${port}`)
);
// Path: server.js
