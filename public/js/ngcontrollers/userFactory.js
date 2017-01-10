console.log("userFactory.js Hello World");

angular.module("filmschoolApp")
	.factory("UserFactory", User);

User.$inject = ['$resource'];

function User($resource) {
	return $resource(
		'http://localhost:3000/api/user/:id'
		);
}