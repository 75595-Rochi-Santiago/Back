"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/photos'),
    getPhotos = _require2.getPhotos;

var _require3 = require('../middlewares'),
    validateJWT = _require3.validateJWT;

var router = Router(); //get next page, previous page and values from the current page

router.get('/', [validateJWT], getPhotos);
module.exports = router;