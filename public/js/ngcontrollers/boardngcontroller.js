angular.module('filmschoolApp')
	.controller('BoardController', boardController);

boardController.$inject = ['BoardFactory', '$resource', '$stateParams', '$state'];

function boardController (BoardFactory, $resource, $stateParams, $state) {
	var self = this;
	self.all = [];
	self.queryBoards = queryBoards;
	// self.getOneBoard = getOneBoard;
	self.newBoard = newBoard;

	function queryBoards() {
		self.all = BoardFactory.query({});
	}
	queryBoards();

ArtistNewController.$inject = ["$http", "$location"];
function ArtistNewController($http, $location) {
	var vm = this;
	vm.saveArtist = saveArtist;

	function saveArtist() {
		console.log(vm.newArtist);
		$http.post('/api/artists/', vm.newArtist)
			.then(function(response) {
				var artist = response.data;
				$location.path("/artists/" + artist.id);
			});		
	}

}

	// function getOneBoard() {
	// 	// self.getOneBoard = BoardFactory.get(function(id) {
	// 	// id = parseInt(id);
	// 	// 	return self.all.find(function(board) {
	// 	// 		return board.id == id;
	// 	// 	});
	// 	// });

	function newBoard() {
		// self.board = new Board();

		// console.log(self.createdBoard);
		// console.log(self.createdBoard.title);
		// var title = self.createdBoard.title;
		// var description = self.createdBoard.description;
		// console.log(title);
		// console.log(description);
		var boardObject = {'title': self.createdBoard.title, 'description': self.createdBoard.description};

		BoardFactory.save(boardObject, function() {
				console.log(self.createdBoard);
				
				// $state.go("/boards/" + response.id);
			});

	}
}

// newBoardController.$inject = ["$http", "$location"];
// function newBoardController($http, $location) {
// 	var self = this;
// 	self.newBoard = newBoard;

// 	function saveBoard() {
// 		console.log(self.newBoard);
// 		$http.post('/api/boards/', self.newBoard)
// 			.then(function(response) {
// 				var board = response.data;
// 				$location.path("/artists/" + board.id);
// 			});		
// 	}

// }