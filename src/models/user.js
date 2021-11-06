
const {Schema, model}=require('mongoose')


const UserSchema=Schema({
       name:{
              type:String,
              required: [true, 'The name is required']
       },
       mail:{
              type:String,
              required: [true, 'The mail is required'],
              unique:true
       },
       password:{
              type:String,
              required: [true, 'The password is required']
       },
       role:{
              type:String,
              required: true,
              enum:['ADMIN_ROLE','USER_ROLE']
       },
       state:{
              type:Boolean,
              default:true
       }
});



module.exports=model('User', UserSchema)