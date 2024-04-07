const mongoose = require("mongoose");
const mongo_key = require("./mongo_key/key");
const connectDB = async () => {
  try {
    await mongoose.connect(mongo_key, {
      useNewUrlParser: true,
      newUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("erro ao conectar ao MongoDB", error);
    process.exit(1);
  }
};

module.export = connectDB;
// Path: database.js
