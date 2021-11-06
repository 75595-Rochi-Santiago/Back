const mongoose=require('mongoose');

//connect mongoDB
const dbConnection = async ()=>{
  try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    console.log('DB successful connection');
  } catch (error) {
    throw new Error('ERROR CONNECTING DB');
  }
};

module.exports={
  dbConnection,
};
