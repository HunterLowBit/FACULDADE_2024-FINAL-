const mongoose = require("mongoose");
const conenctDB = async () => {
  try {
    await mongoose.connect(
      "sua string de conexão, por exemplo: mongodb://localhost:27017/teste",
      {
        useNewUrlParser: true,
        newUnifiedTopology: true,
      }
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("erro ao conectar ao MongoDB", error);
    process.exit(1);
  }
};

module.export = conectDB;
