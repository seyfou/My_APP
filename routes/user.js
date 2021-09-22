const express=require('express')
const router=express.Router();

const {registerRules,loginRules,validation}=require("../middleware/validator")
const isAuth=require('../middleware/passport')
const controllers=require('../controllers/user')
// router.get("/", (req,res)=>{
//     res.send("hello world")
// });
require('dotenv').config();
//register

router.post('/register',registerRules(),validation, controllers.register)

//login
router.post("/login",loginRules(),validation, controllers.login)

//get cuurrent user
router.get("/current", isAuth(), controllers.current)


//get all users
router.get("/",controllers.getUsers)


  module.exports = router;

  //delete One user
  router.delete('/:id',controllers.deleteOneUser)


  //update User
router.put('/:id',controllers.updateUser)
  module.exports = router;