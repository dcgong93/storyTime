var mongoose = require('mongoose');
var StorySchema = new mongoose.Schema({
    title: {type: String},
    genre: {type: String},
    _snippet: [{type:Schema.Types.ObjectID, ref:'Snippetdb'}]
}, {timestamps: true});

mongoose.model('Storydb', StorySchema);
// Validations
StorySchema.path('title').required(true, 'Title cannot be blank');
StorySchema.path('genre').required(true, 'Genre cannot be blank');
