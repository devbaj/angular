const controller = require( './controller' );
const path = require( 'path' );

module.exports = app => {
	app.get( '/users/all', controller.allUsers );
	app.put('/users/new', controller.addUser );
	app.post( '/users/login', controller.loginUser );
	app.post( '/records/save', controller.saveGame );
	app.get('/records/load/:userid' , controller.retrieveSavedGames )
	app.all("*", ( req , res )=> {
		return res.sendFile(path.resolve("./public/dist/public/index.html"));
	})
}