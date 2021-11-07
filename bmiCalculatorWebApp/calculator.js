//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    let num1 = Number(req.body.w);
    let num2 = Number(req.body.h);
    let result = num1 / (num2 * num2);
    res.send("Your BMI is " + result);
});



app.listen(3000, function(){
    console.log("Server is runnning on port 3000.")
});
