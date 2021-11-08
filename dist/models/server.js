"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var express = require('express');

var cors = require('cors');

var _require = require('../db/config'),
    dbConnection = _require.dbConnection;

var Server = /*#__PURE__*/function () {
  function Server() {
    (0, _classCallCheck2["default"])(this, Server);
    this.app = express();
    this.port = process.env.PORT; // path endpoints

    this.usersPath = '/api/users';
    this.authPath = '/api/auth';
    this.phrasesPath = '/api/phrases';
    this.photosPath = '/api/photos'; //ConnectDB

    this.connectDB(); // middlewares

    this.middlewers(); // routes

    this.routes();
  }

  (0, _createClass2["default"])(Server, [{
    key: "connectDB",
    value: function () {
      var _connectDB = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dbConnection();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function connectDB() {
        return _connectDB.apply(this, arguments);
      }

      return connectDB;
    }()
  }, {
    key: "middlewers",
    value: function middlewers() {
      this.app.use(cors());
      this.app.use(express.json());
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use(this.authPath, require('../routes/auth'));
      this.app.use(this.usersPath, require('../routes/users'));
      this.app.use(this.phrasesPath, require('../routes/phrases'));
      this.app.use(this.photosPath, require('../routes/photos'));
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log('Server running on port ', _this.port);
      });
    }
  }]);
  return Server;
}();

module.exports = Server;