"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('express'),
    response = _require.response,
    request = _require.request;

var fetch = require('node-fetch');

var getPhrases = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
        res,
        phrases,
        jsonPhrases,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            _context.next = 4;
            return fetch(process.env.PHRASES_URL);

          case 4:
            phrases = _context.sent;
            _context.next = 7;
            return phrases.json();

          case 7:
            jsonPhrases = _context.sent;
            res.json({
              jsonPhrases: jsonPhrases
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPhrases() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  getPhrases: getPhrases
};