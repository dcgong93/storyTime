
var mongoose = require('mongoose');
var users = require('./../controllers/users');
var stories = require('./../controllers/stories.js');
var sessions = require('./../controllers/sessions');
var snippets = require('./../controllers/snippets');


module.exports = function(app){
	app.post('/users', users.create);
	// app.post('/user_image', users.upload);
	app.post('/sessions', sessions.create);
	app.post('/stories', stories.create);
	app.get('/stories', stories.getStories);
	app.post('/snippets', snippets.create);
	app.get('/story/:id', stories.getStory);
	app.get('/snippets', snippets.getAll);
}
