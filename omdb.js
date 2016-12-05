var omdb = require('omdb'); 
var args = process.argv



omdb.search('process.argv[2]' fucntion(err, movies){
    if (err) {
        return console.log (err); 
    }

    if (movies.length < 1 ) {
        return console.log('No movies were found.')
    }

    movies.forEach (function(movie){
        console.log(movie.title); 
        console.log(movie.year); 
        console.log(movie.imdb.rating); 
        console.log(movie.tomatoes); 
    })
} )