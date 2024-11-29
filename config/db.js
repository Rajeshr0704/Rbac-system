const mongoose = require('mongoose');
const connectDb = async ()=>{
   mongoose.connect(process.env.MONGO_URI).then((conn) =>{
    console.log(`MongoDB is connected to ${conn.connection.host}`)
   })
};

module.exports = connectDb;