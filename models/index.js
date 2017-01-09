//Include
var express = require('express');
var app = express();

//Connect and export all models
var Sequelize = require('sequelize');

// var db = require('../db/dbSetup');
// db.connect({
//   heroku: process.env.DATABASE_URL,
//   localuser: process.env.DB_USER,
// });


//Figure out url for heroku
// var env = require('../.env');
// var env = require('dotenv').config();
require('dotenv').config();
console.log(process.env.DB_USER);
var sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DB_USER);

//Brings in Sequelize and sequelize note: Caps/syntax
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;


var Board = sequelize.import("./board");
var Movie = sequelize.import("./movie");
var User = sequelize.import("./user");
//not sure if below will autogenerate through relationship declaration
//note: dash in file name now camel case
var MovieBoard = sequelize.import("./movie-board");



//Begin: Heroku setup*****

// var pg = require('pg');

// app.get('/db', function (request, response) {
//   pg.connect(process.env.postgresql-spherical-79083, function(err, client, done) {
//     client.query('SELECT * FROM boards', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// }); 

//End: Heroku setup*****

Board.belongsTo(User);
User.hasMany(Board);

Movie.belongsToMany(Board, {through:MovieBoard,foreignKey: 'movieId'});
Board.belongsToMany(Movie, {through:MovieBoard,foreignKey: 'boardId'});
//stopped here:

module.exports.models = {
	User: User,
	Board: Board,
	Movie: Movie,
	MovieBoard: MovieBoard
};