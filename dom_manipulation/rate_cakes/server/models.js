const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakes', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

var RateSchema = new mongoose.Schema( {
	rating: {
		type: Number,
		required: true
	},
	comment: String
} , {
	timestamps: true
})

var CakeSchema = new mongoose.Schema( {
	baker: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	rating: [RateSchema]
}, {
	timestamps: true
} )

var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;