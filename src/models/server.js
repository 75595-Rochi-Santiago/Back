const cors=require('cors');
const express=require('express');
const {dbConnection}=require('../db/config')

class Server {
  constructor() {
    this.app=express();
    this.port=process.env.PORT;

    // path endpoints
    this.usersPath='/api/usuarios';

    //ConnectDB
    this.connectDB()

    // middlewares
    this.middlewers();

    // routes
    this.routes();
  }

  async connectDB(){
       //dev mongo
       await dbConnection();
  }


  middlewers() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes(){
         this.app.use(this.usersPath,require('../routes/users'))
  }
  listen(){
         this.app.listen(this.port,()=>{
                console.log('Server running on port ', this.port)
         })
  }
}
module.exports = Server;