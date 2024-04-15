const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/exemplo", (req, res) => {
  res.json({ message: "Rota Get Funcionando" });
});

router.post("/exemplo", (req, res) => {
  const { body } = req.body;
  res.json({
    message: `Rota Post Funcionando com o
        corpo: ${body}`,
  });
  console.log(body);
});

router.get("/", userController.getAllUsers); // http://localhost:3000/user
router.post("/", userController.createUser); // http://localhost:3000/user
router.put("/:id", userController.updateUser); // http://localhost:3000/user
router.delete("/:id", userController.deleteUser); // http://localhost:3000/user
router.get("/:id", userController.getUserById); // http://localhost:3000/user


module.exports = router;
// Path: src/routes/userRoutes.js
