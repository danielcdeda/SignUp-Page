const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})


app.listen(2048, function(){
    console.log("Working on port 2048!")
})