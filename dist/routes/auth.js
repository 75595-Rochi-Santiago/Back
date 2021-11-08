"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('express-validator'),
    check = _require2.check;

var _require3 = require('../middlewares'),
    validateFields = _require3.validateFields,
    validateJWT = _require3.validateJWT;

var _require4 = require('../controllers/auth'),
    login = _require4.login,
    revalidateToken = _require4.revalidateToken;

var router = Router();
router.post('/login', [check('mail', 'The mail is required').isEmail(), check('password', 'The password is required').not().isEmpty(), validateFields], login);
router.get('/renew', [validateJWT], revalidateToken);
module.exports = router;