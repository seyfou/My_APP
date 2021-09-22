const mongoose=require("mongoose");
const schema=mongoose.Schema;
const contactSchema=new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
    type:String,
        required:true
    },
    message:{
        type:String,
            required:true
        },
    date:{
            type:String,
            default:Date.now()
        },


});


module.exports=mongoose.model("contact",contactSchema)