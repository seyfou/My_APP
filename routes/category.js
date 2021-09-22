const express=require('express')
const router=express.Router();

const controllers=require('../controllers/category')

require('dotenv').config();
//add category
router.post('/', controllers.postCategory)

//get all category
router.get("/", controllers.getCategories)

//get one category
router.get('/:id',controllers.getOneCategory)
//update category
router.put('/:id',controllers.updateCategory)

//delete category

router.delete('/:id',controllers.deleteOneCategory)
  module.exports = router;