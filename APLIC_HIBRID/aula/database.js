const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("sua strin de conexão", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Db conectado com sucesso");
  } catch (error) {
    console.error("Conexão com o mongo db zoada: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
