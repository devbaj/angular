var controller = require('./controller');
const path = require('path');

module.exports = app => {
	app.get('/api/authors', controller.all);
	app.post('/api/authors', controller.add);
	app.get('/api/authors/:id', controller.fetch);
	app.post('/api/authors/:id', controller.update);
  app.delete('/api/authors/:id', controller.delete);
  app.post('/api/authors/:authorid/quotes', controller.addQuote);
  app.post('/api/authors/:authorid/quotes/:quoteid', controller.updateQuote);
  app.delete('/api/quotes/:quoteid', controller.deleteQuote)

	app.all("*", (req, res) => {
		return res.sendFile(path.resolve("./public/dist/public/index.html"));
	});
}