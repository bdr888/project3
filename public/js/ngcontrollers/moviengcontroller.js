console.log('moviengcontroller.js hello World');

angular.module('filmschoolApp')
	.controller('MovieController', movieController);

	movieController.$inject = ['MovieFactory','$resource'];
	function movieController (MovieFactory,$resource) {
		var self = this;
		self.all = [];
		self.queryMovies = queryMovies;

		function queryMovies () {
			self.all = MovieFactory.query({});
			console.log(self.all);
		}
		queryMovies();

	}
