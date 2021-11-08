const { response } = require('express');
const bcryptjs = require('bcryptjs')
const User = require('../models/user');
const { generateJWT } = require('../helpers/generate_jwt');


const login = async(req, res = response) => {

    const { mail, password } = req.body;

    try {
      
        // mail verify
        const user = await User.findOne({ mail });
        if ( !user ) {
            return res.status(400).json({
                   ok:false,
                msg: 'Incorrect user or password -mail'
            });
        }

        // user verify
        if ( !user.state ) {
            return res.status(400).json({
                   ok:false,
                msg: 'Incorrect user or password -state'
            });
        }

        // pass verify
        const validatePassword = bcryptjs.compareSync( password, user.password );
        if ( !validatePassword ) {
            return res.status(400).json({
               ok:false,
               msg: 'Incorrect user or password -pass'
            });
        }

        // generate JWT
        const token = await generateJWT( user.id );

        res.json({
            user,
            token,
            ok:true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error'
        });
    }   

}
const revalidateToken = async(req, res = response) => {

       const {uid,name}=req;
       //console.log(">>>>>REQ",req);

       const token= await generateJWT(uid);
       res.json({
              ok:true,
              uid,
              name,
              token
       })
}


module.exports = {
    login,
    revalidateToken
}
