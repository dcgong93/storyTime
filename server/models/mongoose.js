var mongoose = require('mongoose');
var SnippetSchema = new mongoose.Schema({
    _users: [{type:Schema.Types.ObjectID, ref:'Userdb'}],
    _stories: [{type:Schema.Types.ObjectID, ref:'Storydb'}],
    content: {type: String}
}, {timestamps: true});

mongoose.model('Snippetdb', SnippetSchema);
// Validations
SnippetSchema.path('content').required(true, 'Content cannot be blank');
