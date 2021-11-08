"use strict";

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var validateFields = function validateFields(req, res, next) {
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  validateFields: validateFields
};