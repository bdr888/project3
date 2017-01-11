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
		console.log(this.newBoard);
		self.newBoard = BoardFactory.save('/api/boards/', self.newBoard)
			.then(function(response) {
				var board = response.data;
				$state.path("/boards/" + board.id);
			});

	}


	// 	self.getOneBoard = BoardFactory.get($stateParams.id);
	// 	// console.log();
	// }

	// getOneBoard();

}


// function saveArtist() {
// 		console.log(vm.newArtist);
// 		$http.post('/api/artists/', vm.newArtist)
// 			.then(function(response) {
// 				var artist = response.data;
// 				$location.path("/artists/" + artist.id);
// 			});		
// 	}