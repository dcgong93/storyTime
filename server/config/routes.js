
var mongoose = require('mongoose');
var users = require('./../controllers/users');
var stories = require('./../controllers/stories.js');
var sessions = require('./../controllers/sessions');

module.exports = function(app){
	app.post('/users', users.create);
	app.post('/sessions', sessions.create);
	app.post('/stories', stories.create);
}
