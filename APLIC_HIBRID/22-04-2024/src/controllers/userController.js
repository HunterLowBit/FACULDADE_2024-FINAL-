const User = require("../models/User");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY; // Pega a chave secreta da variável de ambiente

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar se o usuário existe e a senha está correta
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    // Gerar um token JWT válido
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao autenticar usuário" });
  }
};
