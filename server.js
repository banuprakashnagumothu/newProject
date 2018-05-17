var express=require('express');
var path=require('path');
var bodyParse=require('body-parser');


var index=require('./routes/index.js');


var app=express();

var port=8000;

// view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

var siege = require("siege");
siege()
    .on(80)
    .for(10000000).times
    .get('http://192.168.2.64/mr_mrs_web/public/')
    .attack()
app.use('/api/customer/check-mobile',index);

app.listen(port,function()
{
    console.log("server started at"+port);
});
