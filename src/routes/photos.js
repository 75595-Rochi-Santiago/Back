const { Router } = require('express');
const {getPhotos}=require('../controllers/photos')
const {validateJWT}= require('../middlewares');


const router = Router();

router.get('/',[validateJWT], getPhotos );


module.exports = router;
