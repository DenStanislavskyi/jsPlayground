const express = require("express");

const app = express();

app.get("/", function(req, res){
res.send("hello");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: d@mail.com");
    });

app.get("/about", function(req, res){
    res.send("I am a Front-end developer.");
    });

app.listen(3000, function(){
    console.log("Server srarted on port 3000.")
});