const Role = require('../models/role');
const User = require('../models/user');


//Validate role DB
const validRole = async(role = '') => {
    const rolExists = await Role.findOne({ role });
    console.log(rolExists)
    if ( !rolExists ) {
        throw new Error(`This role: ${ role }, is not registered in the DB`);
    }
}

//Check if the mail exists
const mailExists = async( mail = '' ) => {
    const mailExists = await User.findOne({ mail });
    if ( mailExists ) {
        throw new Error(`This mail: ${ mail }, is already registered`);
    }
}

//Check if the user exists
const userExistsById = async( id ) => {
    const userExists = await User.findById(id);
    if ( !userExists ) {
        throw new Error(`The id: ${ id }, does not exist`);
    }
}



module.exports = {
    validRole,
    mailExists,
    userExistsById
}

