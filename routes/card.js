const express=require('express')
const router=express.Router();

const controllers=require('../controllers/card')

require('dotenv').config();
//add card
router.post('/', controllers.postCard)

//get all card
router.get("/", controllers.getCards)

//get one card
router.get('/:id',controllers.getOneCard)
//update Card
router.put('/:id',controllers.updateCard)

//delete card

router.delete('/:id',controllers.deleteOneCard)
  module.exports = router;