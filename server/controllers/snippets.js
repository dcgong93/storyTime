var snippets = require('mongoose');
var snippetsDb = snippets.model('Snippet');

module.exports = (function() {
  return {
    create: function(req, res){
      console.log('passed server routes');
      snippet = new snippetsDb(req.body);
      snippet.save(function(err, snippet){
        if(err){
          console.log('create SNIPPET server error',err);
        }else{
          console.log('this is new SNIPPET', snippet);
          res.json(snippet);
        }
      })
    }
  }
})();
