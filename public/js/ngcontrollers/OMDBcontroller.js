angular.module('filmschoolApp')
	.controller('OmdbController', OmdbController);

	OmdbController.$inject = ["$http","$stateParams"];
	function OmdbController($http, $stateParams) {
		
		var vm = this;
		var searchResult;
		vm.searchOne = searchOne;
	
	function searchOne() {
		console.log("inside searchOne");
		// console.log($stateParams.data);

		$http.get("https://www.omdbapi.com/?t=" + vm.title)
			.then(function(response) {
				searchResult = response.data;
				// console.log(searchResult);
				 vm.returnObject = response.data;
				 // console.log(vm.returnObject);
				searchResult = vm.returnObject;
		});
	}

	function saveMovie() {
		$http.post('/api/Movie/', vm.returnObject)
			.then(function(response) {
				console.log("saveMovie fired");
				console.log(vm.returnObject);
				var movie = response.data.imdbID;
				$location.path("/movies/" + movie.imdbID);
			});
	}
}