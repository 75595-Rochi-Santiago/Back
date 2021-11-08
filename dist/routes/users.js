"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('express-validator'),
    check = _require2.check;

var _require3 = require('../helpers/db-validators'),
    validRole = _require3.validRole,
    mailExists = _require3.mailExists,
    userExistsById = _require3.userExistsById;

var _require4 = require('../controllers/user'),
    getUsers = _require4.getUsers,
    postUser = _require4.postUser,
    putUser = _require4.putUser,
    DeleteUser = _require4.DeleteUser,
    patchUsers = _require4.patchUsers;

var _require5 = require('../middlewares'),
    validateFields = _require5.validateFields,
    validateJWT = _require5.validateJWT;

var router = Router(); //Get users paged

router.get('/', getUsers);
router.put('/:id', [check('id', 'Not a valid ID').isMongoId(), check('id').custom(userExistsById), check('role').custom(validRole), validateFields], putUser); //Create User

router.post('/', [check('name', 'The name is required').not().isEmpty(), check('password', 'The password must be more than 6 characters').isLength({
  min: 6
}), check('mail', 'The mail is not valid').isEmail(), check('mail').custom(mailExists), check('role').custom(validRole), validateFields], postUser); //Update User

router.put('/:id', [check('id', 'Not a valid ID').isMongoId(), check('id').custom(userExistsById), check('rol').custom(validRole), validateFields], putUser); //Delete User

router["delete"]('/:id', [validateJWT, check('id', 'Not a valid ID').isMongoId(), check('id').custom(userExistsById), validateFields], DeleteUser);
router.patch('/', patchUsers);
module.exports = router;