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
	title: "Movies about bikes",
	description: "Movies where a bicycle plays a role in the plot"
	},

	{
	title: "Wes Anderson movies",
	description: "Wes Anderson collection"
	},

	{
	//note id omitted
	title: "Batman movies",
	description: "All Batman movies"
	},

	{
	//note id omitted
	title: "Space survival movies",
	description: "Like Alien or Event Horizon, surviving on a spaceship"
	},

	{
	//note id omitted
	title: "Movies set in China",
	description: "Movies with scenes in China"
	},

	{
	//note id omitted
	title: "Jennifer Lawrence",
	description: "Movies with Jennifer Lawrence"
	},

	{
	//note id omitted
	title: "Best supporting actress",
	description: "Movies that won an Oscar for Best Supporting Actress"
	}


];
console.log("sampleBoards: "+ sampleBoards);

var sampleMovies = [

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


var boardCreate = function() {
	return DB.Board.create({
		title:"Test board",
		description:"Makin boards"
	})
	.then(function(board){
	DB.Board.bulkCreate(sampleBoards);
	});

};

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

var movieCreate = function() {
	return DB.Movie.bulkCreate([{
Title: "Jaws",
Year: "1975",
Rated: "PG",
Released: "20 Jun 1975",
Runtime: "124 min",
Genre: "Adventure, Drama, Thriller",
Director: "Steven Spielberg",
Writer: "Peter Benchley (screenplay), Carl Gottlieb (screenplay), Peter Benchley (based on the novel by)",
Actors: "Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary",
Plot: "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and a grizzled fisherman set out to stop it.",
Language: "English",
Country: "USA",
Awards: "Won 3 Oscars. Another 10 wins & 16 nominations.",
Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg",
Metascore: "86",
imdbRating: "8.0",
imdbVotes: "424,356",
imdbID: "tt0073195",
Type: "movie",
Response: "True"
},
	{
Title: "The Shallows",
Year: "2016",
Rated: "PG-13",
Released: "24 Jun 2016",
Runtime: "86 min",
Genre: "Drama, Horror, Thriller",
Directr: "Jaume Collet-Serra",
Writer: "Anthony Jaswinski",
Actors: "Blake Lively, Óscar Jaenada, Angelo Josue Lozano Corzo, Brett Cullen",
Plot: "A mere 200 yards from shore, surfer Nancy is attacked by a great white shark, with her short journey to safety becoming the ultimate contest of wills.",
Language: "English, Spanish",
Country: "USA",
Awards: "2 nominations.",
Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTA4MzU4Ml5BMl5BanBnXkFtZTgwNjUxNjczODE@._V1_SX300.jpg",
Metascore: "59",
imdbRating: "6.4",
imdbVotes: "59,522",
imdbID: "tt4052882",
Type: "movie",
Response: "True"
}
	])
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

