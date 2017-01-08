// Might autogenerate through relationships
// revisit/refactor after initial server spinup

module.exports = function (sequelize, Sequelize) {
	
	var model = sequelize.define("movieboard",{
		imdbID:Sequelize.STRING
	});
	return model;
};