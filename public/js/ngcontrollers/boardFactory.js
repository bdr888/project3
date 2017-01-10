angular.module("filmschoolApp")
 .factory("BoardFactory", Board);

Board.$inject= ['$resource'];

function Board($resource) {
	return $resource(
		'http://localhost:3000/api/board/:id'
		);
}