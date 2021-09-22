const category=require('../models/category');

//post one category
//method post
//path http://localhost:4000/category
//params body
exports.postCategory= async(req, res) => {
  try{  let newCategory = new category({...req.body});
let result=await   newCategory.save()
res.send({result:result, msg:"category added"})
  }
catch(error){
res.send(error)
}
};

  //get all categories
 //method get
 //path http://localhost:4000/category

exports.getCategories=async(req, res) => {
   try{
     let result=await category.find()
     res.send({result:result, msg:"all categories"})
   }
   catch(error){
     res.send("error")
   }
 };

 //get one category
 //method get
//path http://localhost:4000/category/:id
//params _id
// router.get('/:id', async(req, res) => {

 exports.getOneCategory= async(req, res) => {
  try{
    let result=await category.findOne({_id:req.params.id})
    res.send({result:result, msg:"category found"})
  }
  catch(error){
    res.send("error")
  }
};

//delete one category
 //method delete
//path http://localhost:4000/category/:id
//params _id
// router.delete('/:id', async(req, res) => {
  exports.deleteOneCategory=async(req, res) => {
  try{
    let result=await category.deleteOne({_id:req.params.id})
   result.n? res.send({result:result, msg:"category deleted"}):res.send({result:result,msg:'already deleted'})
  }
  catch(error){
    res.send("error")
  }
};

//update one category
 //method put
//path http://localhost:4000/category/:id
//params _id and body
// router.put('/:id', async(req, res) => {
 exports.updateCategory= async(req, res) => {
  try{
    let result=await category.updateOne({_id:req.params.id},{$set:{...req.body}})
   res.send({result:result, msg:"category updated"})
  }
  catch(error){
    res.send("error")
  }
};



