var express = require('express');
var router = express.Router();
var userModel = require('../model/user');
var pModel = require('../model/product');

router.post('/',async (req,res)=>{
    try {
        userModel(req.body).save();
        res.send("user Added")
    } catch (error) {
        res.send(error)
    }
})

//api to login
router.post('/login',async(req,res)=>{
    const user = await userModel.findOne({email:req.body.email})
  if (!user){
    return res.send("User not found")
  }
  try{
    if(user.password ===req.body.password){
        res.send("Login successful!!")
    }else{
       res.send("invalid credentials")
    }
  }catch (error) {
    res.send(error)
  }
})
module.exports = router;
       
