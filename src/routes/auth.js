const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { login } = require('../controllers/auth');


const router = Router();

router.post('/login',[
    check('mail', 'The mail is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields
],login );



module.exports = router;