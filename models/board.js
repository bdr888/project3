module.exports = function (sequelize,Sequelize) {

	var model = sequelize.define("board",{
		// id: Sequelize.STRING,
		//note userID is camel here but refers to id in user model
		// userId: Sequelize.STRING,
		title: Sequelize.STRING,
		description: Sequelize.STRING


	});

	return model;
};