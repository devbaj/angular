const controller = require('./controller');
const path = require('path');

module.exports = app => {
	app.get('/api/products', controller.readAll);
	app.get('/api/products/:id', controller.readOne);
	app.post('/api/products', controller.create);
	app.put('/api/products/:id', controller.update);
	app.delete('/api/products/:id', controller.delete);

	app.all("*", (req, res) => res.sendFile(path.resolve("./public/dist/public/index.html")))
}