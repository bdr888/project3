//Connect and export all models
var Sequelize = require('sequelize');


//Figure out url for heroku
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


//Begin: Heroku setup*****

var pg = require('pg');

app.get('/db', function (request, response) {
  pg.connect(process.env.postgresql-spherical-79083, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
}); 

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