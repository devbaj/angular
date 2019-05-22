const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

var QuoteSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
		minlength: 3
	},
	score: {
		type: Number,
		required: true,
		default: 0
	}
}, {
	timestamps: true
})

var AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Author name must be provided`'],
		minlength: 3
	},
	quotes: [QuoteSchema]
}, {
	timestamps: true
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;