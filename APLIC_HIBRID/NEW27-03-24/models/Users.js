const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = mongoose.model("Users", usersSchema);
