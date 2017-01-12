console.log('moviengcontroller.js hello World');

angular.module('filmschoolApp')
	.controller('MovieController', movieController)
	.controller('OmdbController', omdbController);

	movieController.$inject = ['$http'];
	function movieController ($http) {
		var vm = this;
		vm.all = [];
		vm.queryMovies = queryMovies;

		function queryMovies () {
			vm.all = MovieFactory.query({});
			console.log(vm.all);
		}
		queryMovies();


    // /////////////////////////////////////////////////////////
		}

	omdbController.$inject = ['$http'];
	function omdbController ($http) {
		console.log('hit omdbController!');

		var vm = this;



    function fetch(search) {
      $http.get("https://www.omdbapi.com/?t=" + vm.search + "&tomatoes=true&plot=full")
        .then(function(response) {
          vm.details = response.data;
        });
    }


      $http.get("https://www.omdbapi.com/?s=" + vm.search)
        .then(function(response) {
          vm.related = response.data;
        });
    }

 //    $scope.update = function(movie) {
 //      vm.search = movie.Title;
 //    };

 //    $scope.select = function() {
 //      vm.setSelectionRange(0, vm.value.length);
 //    };
  
	
	// }
