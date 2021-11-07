const validateFields = require('../middlewares/validateFields');
const validateJWT = require('../middlewares/validate_jwt');

module.exports = {
    ...validateFields,
    ...validateJWT,
}