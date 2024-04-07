const mongoose = require("mongoose");
const mongo_key = require("./mongo_key/key");

const connectDb = async () => {
  try {
    await mongoose.connect(mongo_key, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
// Path: database.js
