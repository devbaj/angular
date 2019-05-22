var Product = require('./models');

module.exports = {

	readAll: (req, res) => {
		Product.find()
		.then(data => res.json({success: true, payload: data}))
		.catch(err => res.json({success: false, error: err}));
	},

	readOne: (req, res) => {
		Product.findById(req.params.id)
		.then(data => res.json({success: true, payload: data}))
		.catch(err => res.json({success: false, error: err}));
	},

	create: (req, res) => {
		Product.create(req.body)
		.then(data => res.json({success: true, payload: data}))
		.catch(err => res.json({success: false, error: err}));
	},

	update: (req, res) => {
		Product.findByIdAndUpdate(req.params.id, req.body)
		.then(data => res.json({success: true, payload: data}))
		.catch(err => res.json({success: false, error: err}));
	},

	delete: (req, res) => {
		Product.findByIdAndDelete(req.params.id)
		.then(data => res.json({success: true, payload: data}))
		.catch(err => res.json({success: false, error: err}));
	}
}