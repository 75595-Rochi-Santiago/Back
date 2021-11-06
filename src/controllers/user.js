const {response, request}=require('express');
const bcryptjs = require('bcryptjs');
const User=require('../models/user');



const getUsers=async (req=request, res=response)=> {
       const {from=0, to=5}=req.query;
       const query={estado:true};
       const [total,users] = await Promise.all([
              User.countDocuments(query),
              User.find(query)
                     .skip(Number(from))
                     .limit(Number(to))
       ]);
       res.json({
              total,
              users
       })
}

const postUser=async (req, res=response)=> {
       const {name,mail,password,role}=req.body;
       const user = new User({name, mail, password,role});
       const salt=bcryptjs.genSaltSync();
       user.password=bcryptjs.hashSync(password, salt);
       await user.save();
       res.json({
              user
       })
}

const putUser=async (req, res=response)=> {
       const id = req.params.id;
       const {_id,password,mail,...others}=req.body;
       if(password){
              const salt=bcryptjs.genSaltSync();
              resto.password=bcryptjs.hashSync(password, salt);
       }
       const user=await User.findByIdAndUpdate(id,others);
       res.json(user);
}

const patchUsers=(req, res=response)=> {
       res.json({
              msg:'patch API - controller'
       })
}

const DeleteUser=async(req, res=response)=> {
       const{id}=req.params;
       const user= await User.findByIdAndUpdate(id,{state:false});
       res.json(user);
}





module.exports={
       getUsers,
       postUser,
       putUser,
       patchUsers,
       DeleteUser
}