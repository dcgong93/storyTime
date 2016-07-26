var stories = require('mongoose');
var storiesDb = stories.model('Story');

module.exports = (function() {
  return {
    // getProducts: function(req, res){
    //   productsDb.find({}, function(err, products){
    //     if(err){
    //       console.log('get products server error', err);
    //     } else {
    //       res.json(products);
    //     }
    //   })
    // },
    create: function(req, res){
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
