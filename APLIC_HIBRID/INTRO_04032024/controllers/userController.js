const User = require('../models/Users');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });   
    }
}

exports.createUser = async (req, res) => {
    const user = req.body;
    
    try {
        const savedUser = await User.create(user);
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}