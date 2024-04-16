const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const user = new User({ nome, email, senha: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Usuário criado com sucesso!" });
};

module.exports = { create };