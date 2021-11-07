const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields,validateJWT } = require('../middlewares');
const { login,revalidateToken } = require('../controllers/auth');


const router = Router();

router.post('/login',[
    check('mail', 'The mail is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields
],login );

router.get('/renew',[
       validateJWT
],revalidateToken );



module.exports = router;