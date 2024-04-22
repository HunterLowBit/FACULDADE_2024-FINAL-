const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/authenticate", (req, res) => {
  const token = generateToken(req.body.user);
  res.send({ token });
});
router.get("/protected", expressJwt({ secret: SECRET_KEY }), (req, res) => {
  res.send("Esta é uma rota protegida");
});
router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
