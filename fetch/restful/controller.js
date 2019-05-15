var Task = require ( './models' );

module.exports = {
	index : ( req , res ) => {
		Task.find ( { } )
		.then ( data => {
			console.log ( 'displaying all data:' , data );
			res.json( { message : 'success' , data : data} );
		} )
		.catch ( err => {
			console.log ( 'error:' , err );
			res.json ( { message : 'error' , error : err } );
		} )
	} ,
	read_one : ( req , res ) => {
		Task.findById( req.params.id )
		.then ( data => {
			console.log ( 'displaying one task' , data );
			res.json ( { message : 'success' , data : data } );
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( { message : 'error' , error : error} );
		} )
	} ,
	write_one : ( req , res ) => {
		Task.create ( {
			title : req.body.title ,
			description : req.body.description ,
			completed : req.body.completed ,
		} )
		.then ( data => {
			console.log ( 'successfully added' , data );
			res.json ( { message : 'success' , data : data } );
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( { message : 'error' , error : err } );
		} )
	} ,
	update : ( req , res ) => {
		Task.findByIdAndUpdate ( req.params.id , {
			title : req.body.title ,
			description : req.body.description ,
			complete : req.body.completed
		} )
		.then ( data => {
			console.log ( 'successfully updated' , data );
			res.json ( { message : 'success' , data : data } );
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( { message : 'error' , error: err } );
		} )
	} ,
	destroy : ( req , res ) => {
		Task.findByIdAndDelete ( req.params.id )
		.then ( data => {
			console.log ( 'successfully deleted' , data );
			res.json ( { message : 'success' , data : data } );
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( { message : 'error' , error : err } );
		} )
	}
}