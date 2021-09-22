const express=require('express')
const router=express.Router();

const controllers=require('../controllers/reservation')

require('dotenv').config();
//add reservation
router.post('/', controllers.postReservation)

//get all reservations
router.get("/", controllers.getReservations)

//get one reservation
router.get('/:id',controllers.getOneReservation)
//update reservation
router.put('/:id',controllers.updateReservation)

//delete reservation

router.delete('/:id',controllers.deleteOneReservation)
  module.exports = router;