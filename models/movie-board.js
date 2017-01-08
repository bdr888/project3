// Might autogenerate through relationships
// revisit/refactor after initial server spinup

module.exports = function (sequelize, Sequelize) {
	
	var model = sequelize.define("movieboard",{
		// !!!need to define these columns - board id and movie id?
		imdbID:Sequelize.STRING
	});
	return model;
};