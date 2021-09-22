const mongoose=require("mongoose");
const schema=mongoose.Schema;
const avisSchema=new schema({
    visitName:{
        type:String,
        required:true
    },
    visitAvis:{
        type:String,
        required:true
    },
    visitEmail:{
        type:String,
        required:true
    },
    visitImg:{
    type:String,
        required:true
    },
    visitDate:{
        type:String,
        required:true  

    }


});


module.exports=mongoose.model("avis",avisSchema)