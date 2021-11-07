const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    let city = req.body.cityName;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=21883d23e06ddd37b8135cb86fb05bbe&units=" + unit;
    
    https.get(url, function(response){

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const weatherDescription = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h1>Temperature in " + city + " is " + temp + " degrees Celcius.</h1>");
            res.write("<p>The weather is currently " + weatherDescription + ".<p>");
            res.write("<img src=" + imageURL+ ">");
            res.send();
        });
    });
});

app.listen(3000), function(){
    console.log("Server is running on port 3000.");
};