var Author = require('./models');

module.exports = {
	all: (req, res) => {
		Author.find()
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}))
	},

	add: (req, res) => {
		Author.create( req.body )
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}));
	},

	fetch: (req, res) => {
		Author.findById(req.params.id)
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}));
	},

	update: (req, res) => {
		Author.findByIdAndUpdate(req.params.id, {name: req.body.author.name})
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}));
	},

	delete: (req, res) => {
		Author.findByIdAndDelete(req.params.id)
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}));
	},

	addQuote: (req, res) => {
		console.log(req.body)
		Author.findByIdAndUpdate(req.params.authorid, {$push: {quotes: {content: req.body.content}}})
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}));
	},

	updateQuote: (req, res) => {
		if (req.body.value > 0) {
			Author.findOneAndUpdate( {'quotes._id': req.params.quoteid}, {$inc: {'quotes.$.score': 1}})
			.then(data => res.json({success: true, package: data}))
			.catch(err => res.json({success: false, error: err}));
		} else {
			Author.findOneAndUpdate( {'quotes._id': req.params.quoteid}, {$inc: {'quotes.$.score': -1}})
			.then(data => res.json({success: true, package: data}))
			.catch(err => res.json({success: false, error: err}));
		}
	},

	deleteQuote: (req, res) => {
		Author.findOneAndUpdate({'quotes._id': req.params.quoteid}, {$pull: {quotes: {'quotes._id': req.params.quoteid}}})
		.then( data => res.json({success: true, package: data}))
		.catch( err => res.json({success: false, error: err}))
	}
}