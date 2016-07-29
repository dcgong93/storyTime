var snippets = require('mongoose');
var snippetsDb = snippets.model('Snippet');
var Story = snippets.model('Story');

module.exports = (function() {
  return {
    create: function(req, res){
      console.log('passed server routes\n\n\n\n', req.body);
      var snippet = new snippetsDb(req.body);
      snippet.save(function(err, newSnippet){
        if(err){
          console.log('create SNIPPET server error',err);
        }else{
          console.log('============>', newSnippet._stories, newSnippet._id);
          Story.findByIdAndUpdate(newSnippet._stories, {$push: {_snippets: newSnippet._id}}, function(error, conf){
            var story = new Story(newSnippet);
            story.save(function(err){
              if(error){
                console.log(error);
              }else{
                console.log('this is new SNIPPET\n\n\n\n', newSnippet._id);
                // newSnippet.populate('_users').exec(function(err, result){
                //   if (err) {
                //     console.log(err);
                //   }else{
                //     res.json(result);
                //   }
                // })
                res.json(newSnippet);
              }
            })
          });

        }
      })
    },

    getAll: function(req, res){
      console.log("+++++++++++++++++++++++++++++++++++++++++++" ,req.params);
      snippetsDb.find({_stories: req.params.id}).populate('_users').exec(function(err, result){
        if (err) {
          console.log(err);
        }else{
          res.json(result);
        }
      })
    }
  }
})();
