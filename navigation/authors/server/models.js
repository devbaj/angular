const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

var AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Author name must be provided`'],
		minlength: 3
	}
}, {
	timestamps: true
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;