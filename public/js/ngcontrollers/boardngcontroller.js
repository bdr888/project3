angular.module('filmschoolApp')
	.controller('BoardController', boardController);

boardController.$inject = ['BoardFactory', '$resource', '$stateParams'];

function boardController (BoardFactory, $resource, $stateParams) {
	var self = this;
	self.all = [];
	self.queryBoards = queryBoards;
	// self.getOneBoard = getOneBoard;


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



	// 	self.getOneBoard = BoardFactory.get($stateParams.id);
	// 	// console.log();
	// }

	// getOneBoard();

}
