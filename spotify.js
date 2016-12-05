var spotifyWebApi = require('spotify-web-api-node'); 
var args = process.argv

spotifyWebApi.getArtistAlbums(process.argv[2], {limit:10, offset:20}
if (err) {
    console.log(Oh no!); 
}
else {
    console.log(data.body)
}); 

var spotifyApi = new spotifyWebApi(); 
