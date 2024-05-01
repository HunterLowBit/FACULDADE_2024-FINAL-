class UserRepository {
  async create(userData) {
    const user = new User(userData);
    return user.save();
  }

  async findAll() {
    return User.find();
  }

  async findById(id) {
    return User.findById(id);
  }

  async updateById(id, userData) {
    return User.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();

// Path: src/repositories/userRepository.js
