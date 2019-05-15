var models = require( './models' );
var User = models.User;
var Location = models.Location;
var Game = models.Game;

module.exports = {
	index: ( req , res ) => {
		console.log( 'index route' );
	}
}