const express = require("express");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/aula", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Rodando na porta ${port} !`);
});
