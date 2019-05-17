const controller = require( './controller' );
const path = require( 'path' );

module.exports = app => {
	app.get( '/users/all', controller.allUsers );
	app.put('/users/new', controller.addUser );
	app.post( '/users/login', controller.loginUser );
	app.post( '/game/save', controller.saveGame );
	app.all("*", ( req , res , next )=> res.sendFile(path.resolve("./public/dist/public/index.html")))
}