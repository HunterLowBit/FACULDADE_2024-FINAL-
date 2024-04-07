const express = require("express");
const routes = require("./routes");
const connectDB = require("./database");

const app = express();
const port = 3000;

connectDB();
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => res.send("TESTE_ROTA!"));
app.listen(port, () =>
  console.log(`Utilizando a porta ${port}!, http://localhost:${port}`)
);
