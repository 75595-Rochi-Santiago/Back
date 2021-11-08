const { request, response } = require('express');
const jwt = require('jsonwebtoken')
const User=require('../models/user');

const validateJWT=async(req=request, res=response,next)=>{

       const token=req.header('x-token');
       if(!token){
              return res.status(401).json({
                     ok:false,
                     msg:'There is no token in the request'
              })
       }

       try {
              const {uid}=jwt.verify(token,process.env.SECRETORPRIVATEKEY);
              const user=await User.findById(uid);

              if(!user){
                     res.status(401).json({
                            ok:false,
                            msg:'Token not valid'
                     })
              }

              if(!user.state){
                     res.status(401).json({
                            ok:false,
                            msg:'Token not valid'
                     })
              }
              req.user=user;
              req.uid=uid;
              req.name=user.name;
              next();
       } catch (error) {
              console.log(error)
              res.status(401).json({
                     ok:false,
                     msg:'Token not valid'
              })
       }
}

module.exports={
       validateJWT
};