"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.userSchema = userSchema;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function userSchema() {
  new _mongoose["default"].Schema({
    id: _mongoose["default"].Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
}
