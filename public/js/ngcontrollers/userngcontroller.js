console.log('userngcontroller.js Hello World');

angular.module('filmschoolApp')
	.controller('UserController', userController);

userController.$inject = ['UserFactory', '$resource'];

function userController (UserFactory, $resource) {
	var self = this;
	self.all = [];
	self.queryUsers = queryUsers;

	function queryUsers() {
		self.all = BoardFactory.query({});
		console.log(self.all);
	}

	queryUsers();
}