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
      templateUrl: "/templates/boards/index.html",
      controller: 'BoardController as boardController'
       // as boardController
    });

    // .state('boardshow', {
    //   url: "/boards/:_id",
    //   templateUrl: "/templates/boards/show.html",
    //   controller: 'BoardController'
    // });


    // Movie Routes //
    // put movie routes here


}); //end of module 




