var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
	_users: [{type: Schema.Types.ObjectId, ref:'User'}],
    _stories: [{type: Schema.Types.ObjectId, ref:'Storydb'}],
    content: String
}, {timestamps: true});

mongoose.model('Snippetdb', SnippetSchema);
// Validations
// SnippetSchema.path('content').required(true, 'Content cannot be blank');
