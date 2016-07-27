var stories = require('mongoose');
var storiesDb = stories.model('Story');

module.exports = (function() {
  return {
    getStories: function(req, res){
      storiesDb.find({}, function(err, stories){
        if(err){
          console.log('get stories server error', err);
        } else {
          res.json(stories);
        }
      })
    },
    create: function(req, res){
      console.log('passed server routes');
      story = new storiesDb(req.body);
      story.save(function(err, story){
        if(err){
          console.log('create story server error',err);
        }else{
          console.log('this is new story', story);
          res.json(story);
        }
      })
    }
  }
})();
