
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

UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}


module.exports=model('User', UserSchema)