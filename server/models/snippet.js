var mongoose = require('mongoose');
var SnippetSchema = new mongoose.Schema({
    _users: [{type:mongoose.Types.ObjectId, ref:'User'}],
    _stories: [{type:mongoose.Types.ObjectId, ref:'Storydb'}],
    content: {type: String}
}, {timestamps: true});

mongoose.model('Snippetdb', SnippetSchema);
// Validations
SnippetSchema.path('content').required(true, 'Content cannot be blank');
