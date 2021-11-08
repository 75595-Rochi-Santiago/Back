"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _excluded = ["_id", "password", "mail"];

var _require = require('express'),
    response = _require.response,
    request = _require.request;

var bcryptjs = require('bcryptjs');

var User = require('../models/user');

var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
        res,
        _req$query,
        _req$query$from,
        from,
        _req$query$to,
        to,
        query,
        _yield$Promise$all,
        _yield$Promise$all2,
        total,
        users,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            _req$query = req.query, _req$query$from = _req$query.from, from = _req$query$from === void 0 ? 0 : _req$query$from, _req$query$to = _req$query.to, to = _req$query$to === void 0 ? 5 : _req$query$to;
            query = {
              state: true
            };
            _context.next = 6;
            return Promise.all([User.countDocuments(query), User.find(query).skip(Number(from)).limit(Number(to))]);

          case 6:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
            total = _yield$Promise$all2[0];
            users = _yield$Promise$all2[1];
            res.json({
              total: total,
              users: users
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUsers() {
    return _ref.apply(this, arguments);
  };
}();

var postUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
        _req$body,
        name,
        mail,
        password,
        role,
        user,
        salt,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : response;
            _req$body = req.body, name = _req$body.name, mail = _req$body.mail, password = _req$body.password, role = _req$body.role;
            user = new User({
              name: name,
              mail: mail,
              password: password,
              role: role
            });
            salt = bcryptjs.genSaltSync();
            user.password = bcryptjs.hashSync(password, salt);
            _context2.next = 7;
            return user.save();

          case 7:
            res.json({
              user: user
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var putUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var res,
        id,
        _req$body2,
        _id,
        password,
        mail,
        others,
        salt,
        user,
        _args3 = arguments;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : response;
            id = req.params.id;
            _req$body2 = req.body, _id = _req$body2._id, password = _req$body2.password, mail = _req$body2.mail, others = (0, _objectWithoutProperties2["default"])(_req$body2, _excluded);

            if (password) {
              salt = bcryptjs.genSaltSync();
              others.password = bcryptjs.hashSync(password, salt);
            }

            _context3.next = 6;
            return User.findByIdAndUpdate(id, others);

          case 6:
            user = _context3.sent;
            res.json(user);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function putUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var patchUsers = function patchUsers(req) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : response;
  res.json({
    msg: 'patch API - controller'
  });
};

var DeleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var res,
        id,
        user,
        _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : response;
            id = req.params.id;
            _context4.next = 4;
            return User.findByIdAndUpdate(id, {
              state: false
            });

          case 4:
            user = _context4.sent;
            res.json(user);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function DeleteUser(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  getUsers: getUsers,
  postUser: postUser,
  putUser: putUser,
  patchUsers: patchUsers,
  DeleteUser: DeleteUser
};