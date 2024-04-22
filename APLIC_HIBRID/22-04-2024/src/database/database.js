const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://robsonpereira98:hlbdev1@hlbdev1.le63zst.mongodb.net/?retryWrites=true&w=majority&appName=hlbdev1",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
// Path: database.js
