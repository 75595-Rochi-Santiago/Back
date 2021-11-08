"use strict";

var jwt = require('jsonwebtoken');

var generateJWT = function generateJWT() {
  var uid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Promise(function (resolve, reject) {
    var payload = {
      uid: uid
    };
    jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
      expiresIn: '7d'
    }, function (err, token) {
      if (err) {
        console.log(err);
        reject('The token could not be generated');
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = {
  generateJWT: generateJWT
};