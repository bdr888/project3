console.log("Board Factory");

angular.module("filmschoolApp")
 .factory("BoardFactory", Board);

Board.$inject= ['$resource'];

function Board($resource) {
	return $resource(
		'http://localhost:3000/:id',
		null,
		{'query': {method: 'GET', isArray: false }}
		);
}