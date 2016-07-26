var stories = require('./../controllers/stories.js')
module.exports = function(app){

	app.post('/stories', function(req, res){
		console.log('in server routes');
		stories.create(req,res);
	})
}
