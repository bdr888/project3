console.log('boardController.js hello world');

var db = require('../models/index.js');
var User = db.models.User;
var Board = db.models.Board;
var Movie = db.models.Movie;
// var MovieBoard = db.models.MovieBoard;

function index(req, res) {
	Board.findAll().then(function(boards) {
		res.json(boards);
		console.log("board controller index route?");
	});
}

function show(req, res) {
  Board.findById(req.params.id)
  .then(function(board){
    if(!board) return error(res, "not found");
    //Board.sing();
    //Board.shout();
    console.log(board);
    res.json(board);
  });	
}

function create(req, res) {
	Board.create(req.body).then(function(board){
    if(!board) return error(res, "not saved");
    res.json(board);
  });
}

function update(req, res) {
  Board.findById(req.params.id)
  .then(function(board){
    if(!board) return error(res, "not found");
    return board.updateAttributes(req.body);
  })
  .then(function(board){
    res.json(board);
  });
}

function destroy(req, res) {
  Board.findById(req.params.id)
  .then(function(board){
    if(!board) return error(res, "not found");
    return board.destroy();
  })
  .then(function(){
    res.redirect("/board");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;