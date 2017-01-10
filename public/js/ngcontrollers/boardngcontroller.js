console.log('boardngcontroller.js hello world');

angular.module('filmschoolApp')
	.controller('BoardController', boardController);

boardController.$inject = ['BoardFactory', '$resource'];

function boardController (BoardFactory, $resource) {
	var self = this;
	self.all = [];
	self.queryBoards = queryBoards;

	function queryBoards() {
		self.all = BoardFactory.query({});
		console.log(self.all);
	}

	queryBoards();

	// function showBoards() {
	// 	console.log()
	// }

}

