"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/phrases'),
    getPhrases = _require2.getPhrases;

var _require3 = require('../middlewares'),
    validateJWT = _require3.validateJWT;

var router = Router();
router.get('/', [validateJWT], getPhrases);
module.exports = router;