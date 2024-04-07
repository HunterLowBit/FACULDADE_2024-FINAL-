const User = require("../models/User");
class UserRepository {
  async create(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  }
  async findAll() {
    return User.find();
  }
  async findById(id) {
    return User.findById(id);
  }
  async findById(id, userData) {
    return User.findByIdAndUpdate(id, userData, { new: true });
  }
  async delete(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
// Path: src/repositories/userRepository.js
