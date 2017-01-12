module.exports = function (sequelize,Sequelize) {

	var model = sequelize.define("board",{
		title: Sequelize.STRING,
		description: Sequelize.STRING


	});

	return model;
};