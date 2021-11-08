"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('express'),
    response = _require.response,
    request = _require.request;

var fetch = require('node-fetch');

var _require2 = require('../helpers/getDataPage'),
    getDataPage = _require2.getDataPage;

var getPhotos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
        res,
        _req$query,
        _req$query$offset,
        offset,
        _req$query$limit,
        limit,
        photos,
        jsonphotos,
        data,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _args.length > 0 && _args[0] !== undefined ? _args[0] : request;
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            _req$query = req.query, _req$query$offset = _req$query.offset, offset = _req$query$offset === void 0 ? 0 : _req$query$offset, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit;
            _context.next = 5;
            return fetch(process.env.PHOTOS_URL);

          case 5:
            photos = _context.sent;
            _context.next = 8;
            return photos.json();

          case 8:
            jsonphotos = _context.sent;
            data = getDataPage(jsonphotos, offset, limit);
            res.json({
              data: data
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPhotos() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  getPhotos: getPhotos
};