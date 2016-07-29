var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StorySchema = new mongoose.Schema({
    title: String,
    genre: String,
    content: String,
    _snippets: [{type:Schema.Types.ObjectId, ref:'Snippet'}],
    _user: {type:Schema.Types.ObjectId, ref:'User'},
}, {timestamps: true});

mongoose.model('Story', StorySchema);
// Validations
StorySchema.path('title').required(true, 'Title cannot be blank');
StorySchema.path('genre').required(true, 'Genre cannot be blank');
StorySchema.path('content').required(true, 'Story cannot be blank');
