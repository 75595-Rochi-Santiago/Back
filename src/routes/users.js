
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { validRole, mailExists, userExistsById } = require('../helpers/db-validators');
const {        
       getUsers,
       postUser,
       putUser,
       DeleteUser,
       patchUsers
        } = require('../controllers/user');



const router = Router();

//Get users
router.get('/', getUsers );

router.put('/:id',[
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom( userExistsById ),
    check('role').custom( validRole ), 
    validateFields
],putUser );

//Create User
router.post('/',[
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must be more than 6 characters').isLength({ min: 6 }),
    check('mail', 'The email is not valid').isEmail(),
    check('mail').custom( mailExists ),
    check('role').custom(validRole),
    validateFields
], postUser );

//Update User
router.put('/:id',[
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom( userExistsById ),
    check('rol').custom( validRole ), 
    validateFields
],putUser );

//Delete User
router.delete('/:id',[
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom( userExistsById ),
    validateFields
],DeleteUser );

router.patch('/', patchUsers );





module.exports = router;