console.log('OMDBController.js hello World');

angular.module('filmschoolApp')
	.controller('OmdbController', OmdbController);

	OmdbController.$inject = ["$http","$stateParams"];
	function OmdbController($http, $stateParams) {
		
		var vm = this;

		vm.searchOne = searchOne;
		console.log("inside OmdbController");
		console.log($stateParams.data);
	
	function searchOne() {
		console.log("inside searchOne");
		// console.log($stateParams.data);

		$http.get("https://www.omdbapi.com/?t=" + vm.title)
			.then(function(response) {
				// console.log("inside searchOne.get.then") - >affirmative
				// console.log($stateParams.id);
				 console.log(response.data);
				 vm.returnObject = response.data;
				 console.log(vm.returnObject);
				//vm.oneOmovie = response.data;

		});
}
		// searchOne();
}
