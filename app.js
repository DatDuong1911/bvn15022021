var express = require('express')
var bodyParser = require('body-parser')
var port = 6666
var app = express()






app.listen(port, function() {
    console.log("Chay tai port: " + port);
})