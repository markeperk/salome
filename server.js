//definititions and requires

var express = require('express');
var bodyParser = require('body-parser')


var app = express();

//database
// var mongoUri = "mongodb://localhost:27017/pproject";

//initializing mongoose

// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function() {
// 	console.log("Connected to db at " + mongoUri);
// });

//port
var port = 8000;
app.listen(port);

//bodyParser

app.use(bodyParser.json());

//static 

app.use(express.static(__dirname+'/public'));
