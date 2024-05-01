const express = require("express");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://robsonpereira98:hlbdev1@hlbdev1.le63zst.mongodb.net/?retryWrites=true&w=majority&appName=hlbdev1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Rodando na porta ${port} !`);
});
