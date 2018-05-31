const express = require( 'express' );
const router = express.Router();

let movieId = 2;
const movieArray = [ 
    {
        title: 'Star Wars',
        id: 1
    }
];

router.get( '/', ( req, res ) => {
    console.log( 'In /movies GET' );
    res.send( movieArray );
});

router.post( '/', ( req, res ) => {
    let movie = req.body;
    movie.id = movieId++;
    console.log( 'In /movies POST with data ', movie );
    movieArray.push( movie );
    res.sendStatus( 201 );
});

router.delete( '/', ( req, res ) => {
    let id = req.query.id;
    console.log( 'In /movies DELETE' );
    for ( let i = 0; i < movieArray.length; i++ ) {
        let movie = movieArray[i];
        if ( id == movie.id ) {
            movieArray.splice( i, 1 );
        }
    }
    res.sendStatus( 200 );
});

module.exports = router;