var mongoose = require('mongoose');
var users = require('./../controllers/users');
var sessions = require('./../controllers/sessions');

module.exports = function(app){
	app.post('/users', users.create);
	app.post('/sessions', sessions.create);
}