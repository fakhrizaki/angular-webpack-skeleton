module.exports = function(app) {
	app.controller('HelloController', ['$scope', 'HelloService', function($scope, HelloService) {
		$scope.controllerMessage = "I am Hello controller";
		$scope.serviceMessage = HelloService.message;
	}]);
};
