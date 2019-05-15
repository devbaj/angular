const controller = require ( './controller' );
module.exports = ( app ) => {
	app.get ( '/tasks' , controller.index );
	app.get ( '/tasks/:id' , controller.read_one );
	app.post ( '/tasks' , controller.write_one );
	app.put ( '/tasks/:id' , controller.update );
	app.delete ( '/tasks/:id' , controller.destroy );
}