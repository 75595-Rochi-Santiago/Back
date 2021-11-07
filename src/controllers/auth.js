const { response } = require('express');
const bcryptjs = require('bcryptjs')
const User = require('../models/user');
const { generateJWT } = require('../helpers/generate_jwt');


const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
      
        // email verify
        const user = await User.findOne({ email });
        if ( !user ) {
            return res.status(400).json({
                msg: 'Incorrect user or password'
            });
        }

        // user verify
        if ( !user.estado ) {
            return res.status(400).json({
                msg: 'Incorrect user or password'
            });
        }

        // pass verify
        const validatePassword = bcryptjs.compareSync( password, user.password );
        if ( !validatePassword ) {
            return res.status(400).json({
                msg: 'Incorrect user or password'
            });
        }

        // generate JWT
        const token = await generateJWT( user.id );

        res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}



module.exports = {
    login
}
