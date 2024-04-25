"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;

var _User = require("../models/User");

var getAll = function getAll(req, res) {
  var users;
  return regeneratorRuntime.async(function getAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_User.userSchema.find());

        case 2:
          users = _context.sent;
          res.status(200).json(users);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getAll = getAll;

var getById = function getById(req, res) {
  var id, user;
  return regeneratorRuntime.async(function getById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_User.userSchema.findById(id));

        case 3:
          user = _context2.sent;
          res.status(200).json(user);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getById = getById;

var create = function create(req, res) {
  var _req$body, name, email, password, user;

  return regeneratorRuntime.async(function create$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_User.userSchema.create({
            name: name,
            email: email,
            password: password
          }));

        case 3:
          user = _context3.sent;
          res.status(201).json(user);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.create = create;

var update = function update(req, res) {
  var id, _req$body2, name, email, password, user;

  return regeneratorRuntime.async(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_User.userSchema.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password
          }));

        case 4:
          user = _context4.sent;
          res.status(200).json(user);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.update = update;

var remove = function remove(req, res) {
  var id, user;
  return regeneratorRuntime.async(function remove$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_User.userSchema.findByIdAndDelete(id));

        case 3:
          user = _context5.sent;
          res.status(200).json(user);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.remove = remove;