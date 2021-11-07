
const { Router } = require('express');
const {getPhrases}=require('../controllers/phrases')


const router = Router();

router.get('/', getPhrases );


module.exports = router;