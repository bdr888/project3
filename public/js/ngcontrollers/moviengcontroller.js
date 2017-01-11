console.log('moviengcontroller.js hello World');

angular.module('filmschoolApp')
	.controller('MovieController', movieController)
	.controller('OmdbController', omdbController);

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


    // /////////////////////////////////////////////////////////
		}

	omdbController.$inject = ['OmdbFactory','$resource'];
	function omdbController (OmdbFactory,$resource) {
		console.log('hit omdbController!');
		
		  function saveMovie (){
			// Figure out what goes here:
			var self = this;
			    self.$watch('search', function() {
      		fetch();
    	});

    	self.search = "Sherlock Holmes";

    	function fetch() {
      		omdbFactory.get("https://www.omdbapi.com/?t=" + self.search + "&tomatoes=true&plot=full")
        	.then(function(response) {
          	self.details = response.data;
        });

      		omdbFactory.get("https://www.omdbapi.com/?s=" + self.search)
        	.then(function(response) {
          	self.related = response.data;
        });
    }
    //movie as argument?
    self.update = function(movie) {
      self.search = movie.Title;
    };
	}
	}
