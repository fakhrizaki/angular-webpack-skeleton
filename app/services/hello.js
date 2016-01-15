module.exports = function(app) {
	app.service('HelloService', function() {
		return { message: 'I have been returned by HelloService' };
	})
};
