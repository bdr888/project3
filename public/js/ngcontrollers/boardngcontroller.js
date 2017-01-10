angular.module('filmschoolApp')
	.controller('BoardController', boardController);

boardController.$inject = ['BoardFactory', '$resource'];

function squareController (SquareFactory, $resource) {
	var self = this;
	self.all = [];
	self.queryBoards = queryBoards;

	function queryBoards() {
		self.all = BoardFactory.query({});
		console.log(self.all);
	}

	queryBoards();

}