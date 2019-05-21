var controller = require('./controller');
const path = require('path');

module.exports = app => {
	app.get('/api/authors', controller.all);
	app.post('/api/authors', controller.add);
	app.get('/api/authors/:id', controller.fetch);
	app.post('/api/authors/:id', controller.update);
	app.delete('/api/authors/:id', controller.delete);

	app.all("*", (req, res) => {
		return res.sendFile(path.resolve("./public/dist/public/index.html"));
	});
}