
const { Router } = require('express');
const {getPhrases}=require('../controllers/phrases')
const {validateJWT}= require('../middlewares');

const router = Router();

router.get('/',[validateJWT], getPhrases );


module.exports = router;