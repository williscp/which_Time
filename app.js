/**
 * Created by tyler on 3/5/2017.
 */
var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/src/client'));
//Store all HTML files in view folder.
//app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
    res.sendFile('index.html');
    //It will find and locate index.html from View or Scripts
});

app.listen(1337, function(){
    console.log("Running at Port 1337");
});