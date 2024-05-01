const userController = require("../controllers/userController");
const router = require("express").Router();
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router.post("/users", userController.createUser);

module.exports = router;
