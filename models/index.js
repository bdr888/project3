//Connect and export all models
var Sequelize = require('sequelize');


//figure out url for heroku
var sequelize = new Sequelize('postgres://rkevinbloomquist@localhost:5432/project3');

//Brings in Sequelize and sequelize note: Caps/syntax
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;


var Board = sequelize.import("./board");
var Movie = sequelize.import("./movie");
var User = seqelize.import("./user");
//note: dash in file name now camel case
var MovieBoard = sequelize.import("./movie-board");

//stopped here finish adding relationships
