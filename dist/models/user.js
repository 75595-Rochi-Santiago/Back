"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _excluded = ["__v", "password", "_id"];

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  mail: {
    type: String,
    required: [true, 'The mail is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'The password is required']
  },
  role: {
    type: String,
    required: true,
    "enum": ['ADMIN_ROLE', 'USER_ROLE']
  },
  state: {
    type: Boolean,
    "default": true
  }
});

UserSchema.methods.toJSON = function () {
  var _this$toObject = this.toObject(),
      __v = _this$toObject.__v,
      password = _this$toObject.password,
      _id = _this$toObject._id,
      user = (0, _objectWithoutProperties2["default"])(_this$toObject, _excluded);

  user.uid = _id;
  return user;
};

module.exports = model('User', UserSchema);