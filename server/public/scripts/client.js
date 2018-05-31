let myApp = angular.module( 'myApp', [] );

myApp.controller( 'LaunchpadController', function() {
    // use "vm" as the name in script
    let vm = this;
    vm.movies = [];

    vm.testClick = function(){
        console.log( 'test click' )
    };// end testClick

    vm.getMovie = function(){
        vm.movies.push( vm.movieIn );
        console.log( 'your movies:', vm.movies );
        vm.movieIn = '';
    } // end getMovie

    vm.removeMe = function( index ){
        console.log( 'in removeMe', index );
        vm.movies.splice( index, 1 );
    } // end removeMe
}); //end Controller
