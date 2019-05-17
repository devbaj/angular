var models = require( './models' );
var User = models.User;
var Location = models.Location;
var Game = models.Game;

module.exports = {

	allUsers: ( req , res ) => {
    User.find()
    .then( data => {
      console.log("found users", data);
      var userNameList = [];
      for ( let user of data){
        userNameList.push(user.username);
      }
      res.json({users: userNameList})
    })
    .catch(err => res.json(err))
	} ,

	addUser: ( req , res ) => {
		console.log( req.body );
		User.create( req.body )
		.then( data => res.json( { message: 'success' , data: data } ) )
		.catch( err => res.json( { message: 'error' , error: err } ) );
	} ,

	loginUser: ( req , res ) => {
    console.log( 'request:', req.body);
		User.findOne( { username: req.body.username } )
		.then( data => {
      console.log('found user');
      console.log(data);
			if ( data.pin != req.body.pin ) {
        res.json( {
          message: 'error' ,
          error: 'incorrect PIN'
        } )
      } else {
        res.json ( {
          message: 'success' ,
          data: {
            username: data.username,
            userid: data._id,
          }
        } )
      }
		} )
		.catch(err => res.json( { message: 'error' , error: err } ) )
	},

	saveGame: ( req , res ) => {
		console.log( req.body );
	}
}