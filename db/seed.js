var DB = require("../models").models;

var sampleUsers = [

	{
	name: "Buff"
	},

	{
	name: "Auteur"
	}

];
console.log("sampleUsers: " + sampleUsers);

var sampleBoards = [

	{
	title: "Shark Movies",
	description: "Movies about sharks"
	},

	{
	title: "Survival Movies",
	description: "Movies where main character is in a survival situation"
	},

	{
	//note id omitted
	title: "Water Movies",
	description: "Movies set in or around water"
	}


];
console.log("sampleBoards: "+ sampleBoards);

var sampleMovies = [
	{
	imdbID:"111111"
	},

	{
	imdbID:"222222"
	},

	{
	imdbID:"333333"
	},

	{
	imdbID:"444444"
	},

	{
	imdbID:"555555"
	}

];
console.log("sampleMovies: "+ sampleMovies);

var userCreate = function() {
	return DB.User.create({
		name: 'Student'
	})
	// add relational categories .then 
	.then(function(user){
		sampleBoards.forEach(function(board){
			board.userID = user.id;
	});
	DB.User.bulkCreate(sampleUsers);
	});
};

var boardCreate = function() {
	return DB.Board.create({
		title:"Test board",
		description:"Makin boards"
	})
	.then(function(board){
	DB.Board.bulkCreate(sampleBoards);
	});

};

var movieCreate = function() {
	return DB.Movie.bulkCreate([{
		imdbID: "000000"
	},
	{
		imdbID: "111111"
	}])
	.then(function(movie){
	DB.Movie.bulkCreate(sampleMovies);
	});
};

userCreate()
.then(boardCreate)
.then(movieCreate)
.then(function(){
	process.exit();
});

