const userRepository = require("../repositories/userRepository");
exports.createUser = async (req, res) => {
  try {
    const user = await userRepository.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// implementar outros metodos.
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userRepository.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userRepository.update(id, req.body);
    res.json(user); // 200  - OK
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
