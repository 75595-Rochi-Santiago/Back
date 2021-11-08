"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Role = require('../models/role');

var User = require('../models/user'); //Validate role DB


var validRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var role,
        rolExists,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            role = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            _context.next = 3;
            return Role.findOne({
              role: role
            });

          case 3:
            rolExists = _context.sent;
            console.log(rolExists);

            if (rolExists) {
              _context.next = 7;
              break;
            }

            throw new Error("This role: ".concat(role, ", is not registered in the DB"));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validRole() {
    return _ref.apply(this, arguments);
  };
}(); //Check if the mail exists


var mailExists = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var mail,
        mailExists,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mail = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
            _context2.next = 3;
            return User.findOne({
              mail: mail
            });

          case 3:
            mailExists = _context2.sent;

            if (!mailExists) {
              _context2.next = 6;
              break;
            }

            throw new Error("This mail: ".concat(mail, ", is already registered"));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function mailExists() {
    return _ref2.apply(this, arguments);
  };
}(); //Check if the user exists


var userExistsById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var userExists;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return User.findById(id);

          case 2:
            userExists = _context3.sent;

            if (userExists) {
              _context3.next = 5;
              break;
            }

            throw new Error("The id: ".concat(id, ", does not exist"));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function userExistsById(_x) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  validRole: validRole,
  mailExists: mailExists,
  userExistsById: userExistsById
};