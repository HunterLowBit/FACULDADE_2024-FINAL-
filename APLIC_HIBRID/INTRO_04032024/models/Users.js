const moongose = require("mongoose");
const usersSchema = new moongose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = moongose.model("Users", usersSchema);
