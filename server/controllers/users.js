var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {

		create: function(req, res){
			var user = new User(req.body);
			user.save(function(err){
				if (err) {
					console.log('ohooooo problem saving newUser', user);
					res.json(err);
				}else{
					res.json(user);
				}
			})
		},
		getCurrentuser: function(req, res) {
			User.find({_id: req.params.id}, function(err, result) {
				if(err) {
					console.log("Not Working", err);
				} else {
					res.json(result);
				}
			})
		},
		// update: function(req, res) {
		// 	User.findOneAndUpdate({_id: req.body.id}, function (err, result) {
		// 		if(err) {
		// 			console.log("Couldn't find User", err);
		// 		} else {
		// 			// result.fname = req.body.fname;
		// 			// result.lname = req.body.lname;
		// 			// result.email = req.body.email;
		// 			// result.bio = req.body.bio;
		// 			result.update(
		// 				{fname: req.body.fname,
		// 				lname: req.body.lname,
		// 				email: req.body.email,
		// 				bio: req.body.bio}
		// 			)
		// 		}
		// 	})
		// }
		update: function(req, res) {
			User.findOneAndUpdate({_id: req.body.id}, {$set:{fname:req.body.fname, lname: req.body.lname, email: req.body.email, bio: req.body.bio}}, {new: true}, function(err, result) {
				if(err) {
					console.log(err);
				} else {
					res.json(result);
				}
			})
		}

		// getMongooses: function(req, res){
		// 	mongooseDb.find({}, function(err, mongooses){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('getmongooses function mongooses controller');
		// 		} else {
		// 			res.json(mongooses);
		// 		}
		// 	})
		// }
	}
})();
