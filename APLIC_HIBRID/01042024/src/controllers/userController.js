const userRepository = require("../repositories/userRepository");
exports.createUser = async (req, res) => {
  try {
    const user = await userRepository.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// implementar outros metodos.
