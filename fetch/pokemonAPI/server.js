const express = require ( 'express' );
const app = express( );
app.use ( express.static( __dirname + '/public/dist/public' ) );
const server = app.listen( 8000 , () => {
	console.log('server listening on port 8000')
})