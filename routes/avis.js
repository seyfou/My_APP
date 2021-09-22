const express=require('express')
const router=express.Router();

const controllers=require('../controllers/avis')

require('dotenv').config();
//add avis
router.post('/', controllers.postAvis)

//get all avis
router.get("/", controllers.getAllavis)

//get one avis
router.get('/:id',controllers.getOneAvis)
//update avis
router.put('/:id',controllers.updateAvis)

//delete avis

router.delete('/:id',controllers.deleteOneAvis)
  module.exports = router;