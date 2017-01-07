module.exports = function(sequelize, Sequelize) {

	var model = sequelize.define("user", {
		// research passport modeling to see if a password key is needed

		name: Sequelize.STRING,
		// fill outdata model once "hello world" is established

	});
	return model;
};