module.exports = function(sequelize, Sequelize) {

	var model = sequelize.define("user", {
		// research passport modeling to see if a password key is needed

		id: Sequelize.STRING,
		name: Sequelize.STRING,

	});
	return model;
};