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
	}
}