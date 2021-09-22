const card=require('../models/card');

//post one card
//method post
//path http://localhost:4000/card
//params body
exports.postCard= async(req, res) => {
  try{  let newCard = new card({...req.body});
let result=await   newCard.save()
res.send({result:result, msg:"card added"})
  }
catch(error){
res.send(error)
}
};

  //get all cards
 //method get
 //path http://localhost:4000/card

exports.getCards=async(req, res) => {
   try{
     let result=await card.find()
     res.send({result:result, msg:"all cards"})
   }
   catch(error){
     res.send("error")
   }
 };

 //get one card
 //method get
//path http://localhost:4000/card/:id
//params _id
// router.get('/:id', async(req, res) => {

 exports.getOneCard= async(req, res) => {
  try{
    let result=await card.findOne({_id:req.params.id})
    res.send({result:result, msg:"cardfound"})
  }
  catch(error){
    res.send("error")
  }
};

//delete one card
 //method delete
//path http://localhost:4000/card/:id
//params _id
// router.delete('/:id', async(req, res) => {
  exports.deleteOneCard=async(req, res) => {
  try{
    let result=await card.deleteOne({_id:req.params.id})
   result.n? res.send({result:result, msg:"card deleted"}):res.send({result:result,msg:'already deleted'})
  }
  catch(error){
    res.send("error")
  }
};

//update one card
 //method put
//path http://localhost:4000/card/:id
//params _id and body
// router.put('/:id', async(req, res) => {
 exports.updateCard= async(req, res) => {
  try{
    let result=await card.updateOne({_id:req.params.id},{$set:{...req.body}})
   res.send({result:result, msg:"card updated"})
  }
  catch(error){
    res.send("error")
  }
};



