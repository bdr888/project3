module.exports = function (sequelize, Sequelize) {
	
	var model = sequelize.define("movie",{
		Title: Sequelize.STRING,
		Year: Sequelize.STRING,
		Rated: Sequelize.STRING,
		Released: Sequelize.STRING,
		Runtime: Sequelize.STRING,
		Genre: Sequelize.STRING,
		Director: Sequelize.STRING,
		Writer: Sequelize.STRING,
		Actors: Sequelize.STRING,
		Plot: Sequelize.STRING,
		Language: Sequelize.STRING,
		Country: Sequelize.STRING,
		Awards: Sequelize.STRING,
		Poster: Sequelize.STRING,
		Metascore: Sequelize.STRING,
		imdbRating: Sequelize.STRING,
		imdbVotes: Sequelize.STRING,
		imdbID: Sequelize.STRING,
		Type: Sequelize.STRING,
		Response: Sequelize.STRING,
		boardID: Sequelize.STRING
	});
	return model;
};