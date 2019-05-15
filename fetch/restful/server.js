const express = require ( 'express' );
const app = express ( );
const bodyParser = require ( 'body-parser' );
app.use ( bodyParser.json ( ) );
app.use ( express.static ( __dirname + '/public/dist/public' ) );
require ( './routes' ) ( app );
const server = app.listen ( 8000 , ( ) => {
	console.log ( 'server listening on port 8000' );
} )