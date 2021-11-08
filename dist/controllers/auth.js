"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('express'),
    response = _require.response;

var bcryptjs = require('bcryptjs');

var User = require('../models/user');

var _require2 = require('../helpers/generate_jwt'),
    generateJWT = _require2.generateJWT;

var login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var res,
        _req$body,
        mail,
        password,
        user,
        validatePassword,
        token,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            _req$body = req.body, mail = _req$body.mail, password = _req$body.password;
            _context.prev = 2;
            _context.next = 5;
            return User.findOne({
              mail: mail
            });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              ok: false,
              msg: 'Incorrect user or password -mail'
            }));

          case 8:
            if (user.state) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              ok: false,
              msg: 'Incorrect user or password -state'
            }));

          case 10:
            // pass verify
            validatePassword = bcryptjs.compareSync(password, user.password);

            if (validatePassword) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              ok: false,
              msg: 'Incorrect user or password -pass'
            }));

          case 13:
            _context.next = 15;
            return generateJWT(user.id);

          case 15:
            token = _context.sent;
            res.json({
              user: user,
              token: token,
              ok: true
            });
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(500).json({
              msg: 'Internal server error'
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 19]]);
  }));

  return function login(_x) {
    return _ref.apply(this, arguments);
  };
}();

var revalidateToken = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        uid,
        name,
        token,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : response;
            uid = req.uid, name = req.name; //console.log(">>>>>REQ",req);

            _context2.next = 4;
            return generateJWT(uid);

          case 4:
            token = _context2.sent;
            res.json({
              ok: true,
              uid: uid,
              name: name,
              token: token
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function revalidateToken(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  login: login,
  revalidateToken: revalidateToken
};