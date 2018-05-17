var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next)
{
    console.log("hi inside the reder");
    res.render('index.html');
});

module.exports=router;