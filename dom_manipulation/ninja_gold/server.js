const express = require ( 'express' );
const app = express( );
const bodyParser = require( 'body-parser' );
app.use( express.static( __dirname + '/public/dist/public' ) );
app.use( bodyParser.json( ) );
require( './routes' );
const server = app.listen( 8000 , () => {
	console.log( 'server listening on port 8000' );
})