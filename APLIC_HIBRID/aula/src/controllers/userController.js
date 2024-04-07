const userRepository = require('../repositories/userRepository');

exports.createUser = async (req, res) => {
    try {
        const user = await userRepository.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Implementar os outros métodos.

