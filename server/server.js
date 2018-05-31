const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ) );

const port = 5000 || process.env.PORT;

app.listen( port, () => {
    console.log( 'listening on port', port );
})