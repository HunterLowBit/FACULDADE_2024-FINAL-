const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota para autenticação
router.post("/authenticate", userController.authenticate);

// Protege as rotas abaixo com o middleware verifyToken
router.use(userController.verifyToken);

// Rotas protegidas
router.get("/protected", userController.protected);

// Rotas CRUD de usuários
router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
