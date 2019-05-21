var Cake = require('./models');

module.exports = {
	getAll: ( req, res ) => {
		Cake.find()
		.then( data => res.json({message: 'success', data: data}))
		.catch( err => res.json({message: 'error', error: err}));
	},
	add: (req, res) => {
		console.log('adding', req.body);
		Cake.create( {
			baker: req.body.name,
			image: req.body.image
		})
		.then( data => res.json({message: 'success', data: data}))
		.catch( err => res.json({message: 'error', error: err}))
	},

	addRating: ( req, res) => {
		console.log('add rating', req.body)
		Cake.findByIdAndUpdate( req.body._id, {$push: {rating: {rating: req.body.rating, comment: req.body.comment}}})
		.then( data => res.json({message: 'success', data: data}))
		.catch( err => res.json({message: 'error', error: err}));
	}

}