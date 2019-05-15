const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/ninja_gold' , { useNewUrlParser: true } );

TurnSchema = new mongoose.Schema( {
	location: { type: String , required: true } ,
	goldChange: { type: Number , required: true } ,
} , {
	timestamps : true
} )

GameSchema = new mongoose.Schema( {
	turnNumber: { type: Number , default: 0 } ,
	gold: { type: Number , default: 0 },
	isOver: { type: Boolean , default: false } ,
	turnLog: [ TurnSchema ]
} , {
	timestamps: true
} )
var Game = mongoose.model( 'Game' , GameSchema );

UserSchema = new mongoose.Schema( {
	username: {
		type : String,
		required: [ true , 'Username is required' ],
		minlength: 3 ,
		lowercase: true
	} ,
	pin: {
		type: Number ,
		required: [ true , 'PIN is required' ] ,
		min: 1000 ,
		max: 9999
	} ,
	games: [ GameSchema ]
} , {
	timestamps: true
} )
var User = mongoose.model( 'User' , UserSchema );

module.exports = {
	Game: Game ,
	User: User
}