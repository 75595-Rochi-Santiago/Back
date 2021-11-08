const { Router } = require('express');
const {getPhotos}=require('../controllers/photos')
const {validateJWT}= require('../middlewares');


const router = Router();

//get next page, previous page and values from the current page
router.get('/',[validateJWT], getPhotos );


module.exports = router;