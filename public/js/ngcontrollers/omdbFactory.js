angular.module("filmschoolApp")
 .factory("OmdbFactory", Omovie);

Omovie.$inject= ['$resource'];

function Omovie($resource) {
	return $resource(
		'http://www.omdbapi.com/t=?'
		);
}