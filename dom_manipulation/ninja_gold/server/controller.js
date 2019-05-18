var models = require( './models' );
var User = models.User;
var Game = models.Game;

module.exports = {

	allUsers: ( req , res ) => {
    User.find()
    .then( data => {
      // console.log("found users", data);
      var userNameList = [];
      for ( let user of data){
        userNameList.push(user.username);
      }
      res.json({users: userNameList})
    })
    .catch(err => res.json(err))
	} ,

	addUser: ( req , res ) => {
		// console.log( req.body );
		User.create( req.body )
		.then( data => res.json( { message: 'success' , data: data } ) )
		.catch( err => res.json( { message: 'error' , error: err } ) );
	} ,

	loginUser: ( req , res ) => {
    // console.log( 'request:', req.body);
		User.findOne( { username: req.body.username } )
		.then( data => {
      // console.log('found user');
      // console.log(data);
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
		// todo : check if game already exists and update if it does; otherwise write new game
		console.log( 'looking up game:' , req.body);
		if ( '_id' in req.body ) {
			// User.findOneAndUpdate( {'games._id': req.body._id} , {})
			console.log( ' game is in db ')
			// * game already exists in db
		} else {
			// * game has never been saved before
			console.log('game not in db')
		}
		User.findOneAndUpdate( {'games._id' : req.body._id} , {$set: { 'games.$.gold': req.body.gold , 'games.$.turnNumber': req.body.turns, 'games.$.isOver': req.body.isOver, 'games.$.turnLog': req.body.actvityLog} } )
		.then( data => {
			if (data === null) {
				User.findByIdAndUpdate()
			} else {

			}
		})
		.catch( err => {
			console.log( 'error finding game' , err );
		})
		// User.findByIdAndUpdate( req.body.userid, { $push: { games: { gold: req.body.gold, turnNumber: req.body.turns, isOver: req.body.isOver, turnLog: req.body.activityLog} } } )
		// .then( data => {
			// console.log( 'USER INFO' , data );
		// })
		// .catch ( err => console.log('error:' , err));
		// res.json({message: 'success'});
	} ,

	retrieveSavedGames: (req , res) => {
		console.log(req.params);
		User.findById( req.params.userid )
		.then( data => {
			console.log('USER SAVE DATA')
			console.log( data );
			res.json( { message: 'success', data: data.games } );
		})
		.catch( err => console.log('error', err))
	}

}