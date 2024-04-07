
const mongoose = require("mongoose");
class User {
  constructor({ nome, email, senha, admin, criado_a, alterado_a }) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.admin = admin;
    this.criado_a = criado_a;
    this.alterado_a = alterado_a;
  }
}

const userSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    admin: { type: Boolean, default: false },
    criado_a: { type: Date, default: Date.now },
    alterado_a: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

userSchema.loadClass(User);

module.exports = mongoose.model("User", userSchema);
