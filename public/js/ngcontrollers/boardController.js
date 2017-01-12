angular.module("filmschoolApp")
	.controller("BoardIndexController", BoardIndexController)
	.controller("BoardShowController", BoardShowController)
	.controller("BoardNewController", BoardNewController)
	.controller("BoardEditController", BoardEditController);

BoardIndexController.$inject = ["$http"];
function BoardIndexController($http) {
	var vm = this;
	vm.deleteBoard = deleteBoard;

	function getAllBoards() {
		$http.get('/api/board')
			.then(function(response) {
				vm.allBoards = response.data;
			});		
	}

	function deleteBoard(board) {
		$http.delete('/api/board/'+board.id)
			.then(function(response) {
				var boardIndex = vm.allBoards.indexOf(board);
				vm.allBoards.splice(boardIndex, 1);
			});
	}

	getAllBoards();
}

BoardShowController.$inject = ["$http", "$routeParams"];
function BoardShowController($http, $routeParams) {
	var vm = this;
	
	function getOneBoard() {
		console.log($routeParams.id);
		$http.get('/api/board/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneBoard = response.data;
			});			
	}

	getOneBoard();
}

BoardNewController.$inject = ["$http", "$location"];
function BoardNewController($http, $location) {
	var vm = this;
	vm.saveBoard = saveBoard;
	

	function saveBoard() {
		$http.post('/api/board/', vm.newBoard)
			.then(function(response) {
				console.log(vm.newBoard);
				var board = response.data;
				$location.path("/boards/" + board.id);
			});		
	}

}

BoardEditController.$inject = ["$http", "$routeParams", "$location"];
function BoardEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateBoard = updateBoard;

	function getBoard() {
		console.log($routeParams.id);
		$http.get('/api/board/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedBoard = response.data;
			});			
	}

	function updateBoard() {
		$http.put('/api/board/'+$routeParams.id, vm.updatedBoard)
			.then(function(response) {
				var board = response.data;
				$location.path("/board/" + board.id);
			});			
	}

	getBoard();
}