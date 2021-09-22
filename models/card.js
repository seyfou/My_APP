const mongoose=require("mongoose");
const schema=mongoose.Schema;
const cardSchema=new schema({
    titleCard:{
        type:String,
        required:true
    },
    agentName:{
        type:String,
        required:true
    },
    cardImg:{
        type:String,
        required:true
    },
    
    details:{
        type:Array,
        required:true
    },
    category:{
        type:Array,
        required:true
    }, 

prix:{
    type:Number
}


});


module.exports=mongoose.model("card",cardSchema)