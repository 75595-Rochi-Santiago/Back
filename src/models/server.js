const express=require('express');
const cors=require('cors');
const {dbConnection}=require('../db/config')

class Server {
  constructor() {
    this.app=express();
    this.port=process.env.PORT;

    // path endpoints
    this.usersPath='/api/users';
    this.authPath='/api/auth';
    this.phrasesPath='/api/phrases'
    this.photosPath='/api/photos'

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
         this.app.use(this.authPath,require('../routes/auth'));
         this.app.use(this.usersPath,require('../routes/users'));
         this.app.use(this.phrasesPath,require('../routes/phrases'));
         this.app.use(this.photosPath, require('../routes/photos'))

  }
  listen(){
         this.app.listen(this.port,()=>{
                console.log('Server running on port ', this.port)
         })
  }
}
module.exports = Server;