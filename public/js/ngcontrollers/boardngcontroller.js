angular.module('filmschoolApp')
	.controller('BoardController', boardController);

boardController.$inject = ['BoardFactory', '$resource', '$stateParams'];

function boardController (BoardFactory, $resource, $stateParams) {
	var self = this;
	self.all = [];
	self.queryBoards = queryBoards;
	// self.getOneBoard = getOneBoard;
	self.newBoard = newBoard;

	function queryBoards() {
		self.all = BoardFactory.query({});
	}

	queryBoards();

	// function getOneBoard() {
	// 	// self.getOneBoard = BoardFactory.get(function(id) {
	// 	// id = parseInt(id);
	// 	// 	return self.all.find(function(board) {
	// 	// 		return board.id == id;
	// 	// 	});
	// 	// });

	function newBoard() {
		console.log(self.createdBoard);
		var title = self.createdBoard.title;
		var description = self.createdBoard.description;
		console.log(title);
		console.log(description);
		var boardObject = {'title': title, 'description': description};

		BoardFactory.save(boardObject, function(thing) {
				console.log(thing);
				
				// $state.path("/boards/" + response.id);
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