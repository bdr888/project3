console.log("client.js hello world");

angular.module("filmschoolApp", ['ui.router', 'ngResource'])
	.config(function($stateProvider,$locationProvider, $urlRouterProvider){
    
    console.log("client.js");

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    // For any unmatched url, redirect to /boards
  	// $urlRouterProvider.otherwise("/templates/boards/show.html");

    $stateProvider
    .state('boardsindex', {
      url: "/boards",
      templateUrl: "/templates/boards/show.html",
      controller: 'BoardController'
    });

    	//Main Routes
      // .when('/', {
      //   templateUrl: '/templates/home.html'
      // })
      // .when('/about', {
      // 	templateUrl: '/templates/about.html'
      // })

			//Artist Routes
			  
			// index
			// .when('/boards', {
			// 	templateUrl: '/templates/boards/show.html',
			// 	controller: "BoardController as boardController"
			// });

		// 	// new
		// 	.when('/artists/new', {
		// 		templateUrl: '/templates/artists/new.html',
		// 		controller: "ArtistNewController as artistNewController"
		// 	})

		// 	// show
		// 	.when('/artists/:id', {
		// 		templateUrl: '/templates/artists/show.html',
		// 		controller: "ArtistShowController as artistController"
		// 	})

		// 	// edit
		// 	.when('/artists/:id/edit', {
		// 		templateUrl: '/templates/artists/edit.html',
		// 		controller: "ArtistEditController as artistEditController"
		// 	})

		// 	//Manager Routes
			  
		// 	// index
		// 	.when('/managers', {
		// 		templateUrl: '/templates/managers/index.html',
		// 		controller: "ManagerIndexController as managersController"
		// 	})

		// 	// new
		// 	.when('/managers/new', {
		// 		templateUrl: '/templates/managers/new.html',
		// 		controller: "ManagerNewController as managerNewController"
		// 	})

		// 	// show
		// 	.when('/managers/:id', {
		// 		templateUrl: '/templates/managers/show.html',
		// 		controller: "ManagerShowController as managerController"
		// 	})

		// 	// edit
		// 	.when('/managers/:id/edit', {
		// 		templateUrl: '/templates/managers/edit.html',
		// 		controller: "ManagerEditController as managerEditController"
		// 	})	

		// 	//Song Routes
			  
		// 	// index
		// 	.when('/songs', {
		// 		templateUrl: '/templates/songs/index.html',
		// 		controller: "SongIndexController as songsController"
		// 	})

		// 	// new
		// 	.when('/songs/new', {
		// 		templateUrl: '/templates/songs/new.html',
		// 		controller: "SongNewController as songNewController"
		// 	})

		// 	// show
		// 	.when('/songs/:id', {
		// 		templateUrl: '/templates/songs/show.html',
		// 		controller: "SongShowController as songController"
		// 	})

		// 	// edit
		// 	.when('/songs/:id/edit', {
		// 		templateUrl: '/templates/songs/edit.html',
		// 		controller: "SongEditController as songEditController"
		// 	});					
  });
