module.exports = function (sequelize, Sequelize) {
	
	var model = sequelize.define("movie",{
		imdbID:Sequelize.STRING
	});
	return model;
};