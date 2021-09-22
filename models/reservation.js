const mongoose=require("mongoose");
const schema=mongoose.Schema;
const reservationSchema=new schema({
  /*   userId:{
        type:String,
        required:true
    }, */
  imgCard:{
      type:String,
      required:true
  },
   titleCard:{
        type:String,
        required:true
    },
    dateRes:{
        type:String,
        default:Date.now()
    },
    
    num:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    }, 

    userName:{
        type:String,
        required:true
    },
    userLastName:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:("non-payé")
    }






});


module.exports=mongoose.model("reservation",reservationSchema)