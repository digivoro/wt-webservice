const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// GET
app.get("/", function (req, res) {
   res.sendFile(__dirname+"/index.html"); 
});

//POST
app.post("/", function (req, res) {
    
});

// LISTEN
app.listen(3000, function () {
    console.log("Server running on port 3000");
});