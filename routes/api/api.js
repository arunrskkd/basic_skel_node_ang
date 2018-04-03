var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stock = require('../models/stock');



router.get('/viewstock', function (req, res, next) {
    Stock.find().exec().then((data) => { res.json(data) }).catch((err) => { res.send(err) });
});




router.post('/add', function (req, res) {
 
    var stock = new Stock({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description,
    
      });

      stock.save((err,data) => { 
           
        try {
            
                if (err) {
                throw (err);
                }
                res.send("sucess news" + req.body.name) ;
            
            } catch (err) {
            res.sendStatus(500);
            }
         
    });

});

router.post('/updatestock', function (req, res) {
  var upsertData ={
    name:req.body.name,
    quantity:req.body.quantity,
    price:req.body.price,
    description:req.body.description,
  }  

  Stock.update({ _id: req.body.id }, upsertData, { multi: false }, function(err) {
    if(err) { throw err; }
    res.send("sucess");
});
  

});

router.get('/deletestock/:id', function (req, res) {
   
   
    Stock.findOneAndRemove({_id: req.params.id}, function(err){
        if(err) { throw err;}
        res.send("sucess");
    })
    
});







module.exports = router;