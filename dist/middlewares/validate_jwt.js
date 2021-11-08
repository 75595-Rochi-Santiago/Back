"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('express'),
    request = _require.request,
    response = _require.response;

var jwt = require('jsonwebtoken');

var User = require('../models/user');

var validateJWT = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
        res,
        next,
        token,
        _jwt$verify,
        uid,
        user,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            next = _args.length > 2 ? _args[2] : undefined;
            token = req.header('x-token');

            if (token) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              ok: false,
              msg: 'There is no token in the request'
            }));

          case 6:
            _context.prev = 6;
            _jwt$verify = jwt.verify(token, process.env.SECRETORPRIVATEKEY), uid = _jwt$verify.uid;
            _context.next = 10;
            return User.findById(uid);

          case 10:
            user = _context.sent;

            if (!user) {
              res.status(401).json({
                ok: false,
                msg: 'Token not valid'
              });
            }

            if (!user.state) {
              res.status(401).json({
                ok: false,
                msg: 'Token not valid'
              });
            }

            req.user = user;
            req.uid = uid;
            req.name = user.name;
            next();
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](6);
            console.log(_context.t0);
            res.status(401).json({
              ok: false,
              msg: 'Token not valid'
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 19]]);
  }));

  return function validateJWT() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  validateJWT: validateJWT
};