const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const client = require("@mailchimp/mailchimp_marketing");

const app = express();
client.setConfig({apiKey: "4b80286443a2b71afffe58a667e7e30e-us14",  server: "us14",});

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    app.post("/", function(req, res){
        const firstName = req.body.fName;
        const lastName = req.body.lName;
        const email = req.body.email;
        console.log(firstName, lastName, email);
       
        const subscribingUser = {
          firstName: firstName,
          lastName: lastName,
          email: email
        }
        const run = async () => {
          const response = await client.lists.addListMember("1712e348ada", {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
              FNAME: subscribingUser.firstName,
              LNAME: subscribingUser.lastName
            }
            
          });
       
          if (response.statusCode===200){
            
            res.send("Succesfully subscribing to our Newsletters");
          } else {
            res.send("Subcribing failed, please try again");
          }
       
          console.log(response);
        }
        
          run();
      });
})

app.listen(2048, function(){
    console.log("Working on port 2048!");
});



// API Key
// 4b80286443a2b71afffe58a667e7e30e-us14

// LIST ID 
// 10f1fc523e