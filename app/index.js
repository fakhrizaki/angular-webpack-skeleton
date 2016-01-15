var angular = require('angular');
var app = angular.module('app', []);

require('./directives')(app);
require('./services')(app);
require('./controllers')(app);

app.run(function() {
	console.log('Angular !');
});
