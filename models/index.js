//Connect and export all models
var Sequelize = require('sequelize');


//figure out url for heroku
var sequelize = new Sequelize('postgres://rkevinbloomquist@localhost:5432/filmschool');

//Brings in Sequelize and sequelize note: Caps/syntax
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;


var Board = sequelize.import("./board");
var Movie = sequelize.import("./movie");
var User = sequelize.import("./user");
var MovieBoard = sequelize.import("./movie-board");

//not sure if below will autogenerate through relationship declaration
//note: dash in file name now camel case
// var MovieBoard = sequelize.import("./movie-board");


Board.belongsTo(User);
User.hasMany(Board);

Movie.belongsToMany(Board, {through:MovieBoard});
Board.belongsToMany(Movie, {through:MovieBoard});
//stopped here:

Module.exports.models = {
	User: User,
	Board: Board,
	Movie: Movie
};