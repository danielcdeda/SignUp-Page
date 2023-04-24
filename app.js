const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstN = req.body.firstN
    const secondN = req.body.secondN
    const email = req.body.email

    console.log(firstN, secondN, email);
})


app.listen(2048, function(){
    console.log("Working on port 2048!");
});