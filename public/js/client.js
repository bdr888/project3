angular.module("filmschoolApp", ['ui.router', 'ngResource'])
	.config(function($stateProvider,$locationProvider, $urlRouterProvider){
    
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

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
      templateUrl: "/templates/boards/show.html",
      controller: 'BoardController'
    })


    // Movie Routes //

    // put movie routes here

    .state('moviesindex', {
    	url:"/movies",
    	templateUrl: "/templates/movies/show.html",
    	controller: 'MovieController'
    });

    // .state('moviesshow', {
    // 	url:"/movies/:id",
    // 	templateUrl:"/templates/movies/show.html",
    	// controller: 'MovieController'
    // });

    // User Routes //



 


}); //end of module 




