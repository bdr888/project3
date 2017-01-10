// setup //
var express = require('express');
var app = express();
var router = require('./config/routes.js');
var env = require('dotenv').config();
var port = process.env.DATABASE_URL || 3000;

// dependencies //
var bodyParser = require('body-parser');

// middleware //
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// app.use(function(req, res){
//    res.sendFile(__dirname + '/public/index.html');
// });


// start server //
app.listen(port, function() {
	console.log("listening on " + port);
});