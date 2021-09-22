const mongoose=require("mongoose");
const schema=mongoose.Schema;
const categorySchema=new schema({
    typeCategory:{
        type:String,
        required:true
    },
    description:{
        type:String,
     
    },
    categoryImage:{
        type:String,
    }
   
});


module.exports=mongoose.model("category",categorySchema)