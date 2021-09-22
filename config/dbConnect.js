const mongoose=require("mongoose");
 require("dotenv").config({path:"./.env"});
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI, 
            { useUnifiedTopology: true },
            { useNewUrlParser: true }
            );
        console.log("database is connected")
    } catch (error) {
        console.log("database is not connected")
        console.log(error)
    }
}
module.exports =  connectDB;