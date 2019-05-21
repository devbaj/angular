const controller = require('./controller');

module.exports = app => {
	app.get('/cakes', controller.getAll);
	app.post('/cakes', controller.add);
	app.post('/cakes/:id', controller.addRating)
}