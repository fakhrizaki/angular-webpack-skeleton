require('./hello.scss');

module.exports = function(app) {
	app.directive('hello', function() {
		return {
			restrict: 'E',
			scope: {},
			template: require('./hello.html'),
			controllerAs: 'vm',
			controller: function($timeout) {
				var vm = this
				vm.name = 'I am your Hello directive'
				$timeout(function() {
					vm.name = 'after timeout';
				}, 3000);
			}
		}
	})
};
