const reservation=require('../models/reservation');

//post one reservation
//method post
//path http://localhost:4000/reservation
//params body
exports.postReservation= async(req, res) => {
  try{  let newReservation = new reservation({...req.body});
let result=await   newReservation.save()
res.send({result:result, msg:"reservation added"})
  }
catch(error){
  console.log(error)
res.send(error)
}
};

  //get all reservations
 //method get
 //path http://localhost:4000/reservation

exports.getReservations=async(req, res) => {
   try{
     let result=await reservation.find()
     res.send({result:result, msg:"all reservations"})
   }
   catch(error){
     res.send("error")
   }
 };

 //get one reservation
 //method get
//path http://localhost:4000/reservation/:id
//params _id
// router.get('/:id', async(req, res) => {

 exports.getOneReservation= async(req, res) => {
  try{
    let result=await reservation.findOne({_id:req.params.id})
    res.send({result:result, msg:"reservation found"})
  }
  catch(error){
    res.send("error")
  }
};

//delete one reservation
 //method delete
//path http://localhost:4000/reservation/:id
//params _id
// router.delete('/:id', async(req, res) => {
  exports.deleteOneReservation=async(req, res) => {
  try{
    let result=await reservation.deleteOne({_id:req.params.id})
   result.n? res.send({result:result, msg:"reservation deleted"}):res.send({result:result,msg:'already deleted'})
  }
  catch(error){
    res.send("error")
  }
};

//update one reservation
 //method put
//path http://localhost:4000/reservation/:id
//params _id and body
// router.put('/:id', async(req, res) => {
 exports.updateReservation= async(req, res) => {
  try{
    let result=await reservation.updateOne({_id:req.params.id},{$set:{...req.body}})
   res.send({result:result, msg:"reservation updated"})
  }
  catch(error){
    res.send("error")
  }
};



