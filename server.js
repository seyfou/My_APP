// console.clear()
const express=require("express")
const connectDB=require("./config/dbConnect");
const app=express();
require("dotenv").config();

const fileUpload=require('express-fileupload')
app.use(fileUpload({
    useTempFiles: true
})) 

//connect to db
connectDB();
// routes
app.use(express.json());
app.use("/user",require("./routes/user"));
app.use("/card",require("./routes/card"))
app.use("/category",require("./routes/category"));
app.use("/reservation",require("./routes/reservation"))
app.use("/avis",require("./routes/avis"))
app.use("/contact",require("./routes/contact"))
app.use("/",require("./routes/upload"))


//connect to server
PORT=process.env.PORT || 5000;
app.listen(PORT,(err)=>
err?console.log(err):console.log(`server is running on ${PORT}`)
);