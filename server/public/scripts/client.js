let myApp = angular.module( 'myApp', [] );

myApp.controller( 'LaunchpadController', ['$http', function( $http ) {
    // use "vm" as the name in script
    let vm = this;
    vm.movies = [];

    // simple click event
    vm.testClick = function() {
        console.log( 'test click' )
    };// end testClick

    // gets UI movie
    vm.getMovie = function() {
        let newMovie = {
            title: vm.movieIn
        }
        // ajax POST call
        $http({
            method: 'POST',
            url: '/movie',
            data: newMovie
        }).then( function( response ) {
            console.log( 'Adding movie as', response );
            vm.requestMovies();
        }).catch( function( error ) {
            console.log( 'Error on POST:', error );
        });
        vm.movieIn = '';
    } // end getMovie

    vm.removeMe = function( index ) {
        let movieToDelete = vm.movies[index];
        $http({
            method: 'DELETE',
            url: `/movie?id=${movieToDelete.id}`
        }).then( function( response ) {
            console.log( 'Deleted movie ', movieToDelete );
            vm.requestMovies();            
        }).catch( function( error ) {
            console.log( 'Error deleting movie: ', error );
        })
    } // end removeMe

    // ajax get call
    vm.requestMovies = function() {
        $http({
            method: 'GET',
            url: '/movie'
        }).then( function( response ) {
            console.log( 'Got response from the server: ', response );
            vm.movies = response.data;
        }).catch( function( error ) {
            console.log( 'Error on GET: ', error );
        })
    }

    // Get movies when controller loads
    console.log( 'LaunchpadController is created' );
    vm.requestMovies();

}]); //end Controller
