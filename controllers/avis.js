const avis=require('../models/avis');

//post one avis
//method post
//path http://localhost:4000/avis
//params body
exports.postAvis= async(req, res) => {
  try{  let newAvis = new avis({...req.body});
let result=await   newAvis.save()
res.send({result:result, msg:"avis added"})
  }
catch(error){
res.send(error)
console.log(error)
}
};

  //get all avis
 //method get
 //path http://localhost:4000/avis

exports.getAllavis=async(req, res) => {
   try{
     let result=await avis.find()
     res.send({result:result, msg:"all avis"})
   }
   catch(error){
     res.send("error")
     console.log(error)
   }
 };

 //get one avis
 //method get
//path http://localhost:4000/avis:id
//params _id
// router.get('/:id', async(req, res) => {

 exports.getOneAvis= async(req, res) => {
  try{
    let result=await avis.findOne({_id:req.params.id})
    res.send({result:result, msg:"avis found"})
  }
  catch(error){
    res.send("error")
    console.log(error)
  }
};

//delete one avis
 //method delete
//path http://localhost:4000/avis/:id
//params _id
// router.delete('/:id', async(req, res) => {
  exports.deleteOneAvis=async(req, res) => {
  try{
    let result=await avis.deleteOne({_id:req.params.id})
   result.n? res.send({result:result, msg:"avis deleted"}):res.send({result:result,msg:'already deleted'})
  }
  catch(error){
    res.send("error")
    console.log(error)
  }
};

//update one avis
 //method put
//path http://localhost:4000/avis/:id
//params _id and body
// router.put('/:id', async(req, res) => {
 exports.updateAvis= async(req, res) => {
  try{
    let result=await avis.updateOne({_id:req.params.id},{$set:{...req.body}})
   res.send({result:result, msg:"avis updated"})
  }
  catch(error){
    res.send("error")
    console.log(error)
  }
};



