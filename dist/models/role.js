"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var RoleSchema = Schema({
  role: {
    type: String,
    required: [true, 'this role is required']
  }
});
module.exports = model('Role', RoleSchema);