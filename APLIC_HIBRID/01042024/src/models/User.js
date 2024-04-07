const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  admin: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
