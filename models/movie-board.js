// Might autogenerate through relationships
// revisit/refactor after initial server spinup

module.exports = function (sequelize, Sequelize) {
	
	var model = sequelize.define("moviesBoards",{
		// !!!need to define these columns - board id and movie id?
		// Ans: relationship auto created movieId and boardId
		// still need to populate
		imdbID:Sequelize.STRING
	});
	return model;
};