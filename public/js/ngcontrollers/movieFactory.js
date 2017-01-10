console.log("movieFactory.js Hello World");

angular.module("filmschoolApp")
.factory("MovieFactory", Movie);

Movie.$inject = ['$resource'];

function Movie($resource) {
	return $resource(
		'http://localhost:3000/api/movie/:id'
		);
}