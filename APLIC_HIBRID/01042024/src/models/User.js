
const mongoose = require("mongoose");
class User {
  constructor({ nome, email, senha, admin, created_at, updated_at }) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.admin = admin;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

const userSchema = new mongoose.Schema(
  { nome: String, email: String, senha: String, admin: Boolean, created_at: Date, updated_at: Date },
  { timestamps: true }
);

userSchema.loadClass(User);

module.exports = mongoose.model("User", userSchema);
// Path: src/models/User.js
