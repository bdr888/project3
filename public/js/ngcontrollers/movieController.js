console.log("movieController Hello world!");

angular.module("filmschoolApp")
	.controller("MovieIndexController", MovieIndexController)
	.controller("MovieShowController", MovieShowController)
	.controller("MovieNewController", MovieNewController);
	// .controller("MovieEditController", MovieEditController);

MovieIndexController.$inject = ["$http"];
function MovieIndexController($http) {
	var vm = this;
	console.log("inside MovieIndexController");
	// vm.deleteMovie = deleteMovie;

	function getAllMovies() {
		console.log("inside getAllMovies");
		$http.get('/api/movie')
			.then(function(response) {
				console.log(response);
				vm.allMovies = response.data;
			});		
	}

	function deleteMovie(movie) {
		$http.delete('/api/movie/'+movie.id)
			.then(function(response) {
				var movieIndex = vm.allMovies.indexOf(movie);
				vm.allMovies.splice(movieIndex, 1);
			});
	}

	getAllMovies();
}

MovieShowController.$inject = ["$http", "$stateParams"];
function MovieShowController($http, $stateParams) {
	var vm = this;
	
	function getOneMovie() {
		console.log($stateParams.id);
		$http.get('/api/movie/'+$stateParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneMovie = response.data;
			});			
	}

	getOneMovie();
}

MovieNewController.$inject = ["$http", "$location"];
function MovieNewController($http, $location) {
	console.log("inside MovieNewController");

	console.log(saveMovie);
	
	var vm = this;
	vm.saveMovie= saveMovie;

	function saveMovie() {
		console.log("inside saveMovie" + vm);
		$http.post('/api/Movie/', vm.newMovie)
			.then(function(response) {
				console.log(vm.newMovie);
				var movie = response.data.imdbID;
				$location.path("/movies/" + movie.imdbID);
			});		
	}

}