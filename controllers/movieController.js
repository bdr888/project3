console.log('movieController.js hello world');

var db = require('../models/index.js');
var User = db.models.User;
var Board = db.models.Board;
var Movie = db.models.Movie;
// var MovieBoard = db.models.MovieBoard;


function index(req, res) {
	Movie.findAll().then(function(movies) {
		res.json(movies);
	});
}

function show(req, res) {
	Movie.findById(req.params.id)
	.then(function(movie) {
		if(!movie) console.log("no movie");	
		res.json(movie);
	});
}

function create(req, res) {
	Movie.create(req.body)
	.then(function(movie){
		if(!movie) console.log("no movie");
	console.log(movie);
		res.json(movie);
	});
}

function update(req, res) {
	Movie.findById(req.params.id)
	.then(function(movie) {
		if(!movie) console.log("no movie");
		return movie.updateAttributes(req.body);
	})
	.then(function(movie) {
		res.json(movie);
	});
}

function destroy(req, res) {
  Board.findById(req.params.id)
  .then(function(movie){
    if(!movie) return error(res, "not found");
    return movie.destroy();
  })
  .then(function(){
    res.redirect("/movie");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
