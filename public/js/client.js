angular.module("filmschoolApp", ['ui.router', 'ngResource'])
	.config(function($stateProvider,$locationProvider, $urlRouterProvider){
    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // For any unmatched url, redirect to /boards
  	// $urlRouterProvider.otherwise("/templates/boards/show.html");

    $stateProvider

    // User Routes //

    // this is just an example...
    // .state('login', {
    //   url: "/home",
    //   templateUrl: "/templates/users/login.html",
    //   controller: 'UserController'
    // })

    // Board Routes //

    .state('boardsindex', {
      url: "/boards",
      templateUrl: "/templates/boards/index.html",
      controller: 'BoardIndexController as BoardIndexController'
    })

    // .state('boardshow', {
    //   url: "/boards/{boardid}",
    //   templateUrl: "/templates/boards/show.html",
    //   controller: 'BoardController as boardController'
    // });

    .state('boardsnew', {
        url: "/boards/new",
        templateUrl: "/templates/boards/new.html",
        controller: 'BoardNewController as BoardNewController'
    })



    // Movie Routes //

    // put movie routes here

    .state('moviesindex', {
    	url:"/movies",
    	templateUrl: "/templates/movies/show.html",
    	controller: 'MovieIndexController as MovieIndexController'
    })

    .state('movieSearch', {
    	url:"/search",
    	templateUrl: "/templates/movies/movieSearch.html",
    	controller: 'OmdbController as omdbController'

    })
    .state('moviesnew', {
        url: "/movies/new",
        templateUrl: "/templates/movies/new.html",
        controller: 'MovieNewController as MovieNewController'
    });

 //    $stateProvider
	// //omdb search route
 //    .state('OMDBsearch',{
 //    	url:"https://www.omdbapi.com/?t=",
 //    	templateUrl: "/templates/movies/movieSearch.html",
 //    	controller: 'OmdbController as omdbController'

    // });

    // .state('moviesshow', {
    // 	url:"/movies/:id",
    // 	templateUrl:"/templates/movies/show.html",
    	// controller: 'MovieController'
    // });

    // User Routes //



 


}); //end of module 




