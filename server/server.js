// includes
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const movieRouter = require( './routers/movie.router' );
const app = express();

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

// router
app.use( '/movie', movieRouter );

// port
const port = 5000 || process.env.PORT;


// server up
app.listen( port, () => {
    console.log( 'listening on port', port );
}); // end server up