var express = require('express');
var router = express.Router();
var pModel = require('../model/product');

router.post('/',(req,res)=>{
    try {
        pModel(req.body).save();
        res.send("product added")
    } catch (error) {
        res.send(error)
    }
})

router.get('/product',async(req,res)=>{
    try {
        var data = await pModel.find();
        res.send(data)
    } catch (error) {                                                                      
        res.send(error)              
                          }
})
//delete
router.delete('/delete/:id', async (req, res) => {
    try {
      console.log(req.params.id);
      await pModel.findByIdAndDelete(req.params.id);
      res.send("deleted");
    } catch (error) {
      res.send(error);
    }
  });
  //update
  router.put('/update/:id', async (req, res) => {
    try {
      await pModel.findOneAndUpdate(req.body._id,req.body);
          res.send("updated");
    } catch (error) {
        res.send(error)
    }
});
module.exports =router;



