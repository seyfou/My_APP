const express=require('express')
const router=express.Router();

const controllers=require('../controllers/contact')

require('dotenv').config();
//add avis
router.post('/', controllers.postContact)

//get all avis
router.get("/", controllers.getAllContacts)

//get one avis
router.get('/:id',controllers.getOneContact)
//update avis
router.put('/:id',controllers.updateContact)

//delete avis

router.delete('/:id',controllers.deleteOneContact)
  module.exports = router;