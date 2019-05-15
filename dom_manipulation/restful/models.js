const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/tasks' , { useNewUrlParser : true } );

var TaskSchema = new mongoose.Schema ( {
	title : { type : String , required : [ true , 'A title is required' ] } ,
	description : { type : String , default : '' } ,
	completed : { type : Boolean , default : false } ,
} , {
	timestamps : true
} );

var Task = mongoose.model( 'Task' , TaskSchema );
module.exports = Task;