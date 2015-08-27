// example get request: http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad
var chartlyrics = require('chartlyrics');

var RapGenius = function() {
}

var artistsSongs = {
	'kanye west':['stronger','jesus walks','through the wire','gold digger'],
	'eminem':['lose yourself','not afraid','the real slim shady','rap god'],
	'rick ross':['box chevy','911','i\'m not a star','hold me back'],
	'schoolboy q':['studio','collard greens','man of the year','hell of a night'],
	'tupac':['life goes on','thugz mansion','hit em up','dear mama'],
	'snoop dogg':['drop it like it\'s hot','i wanna rock','young,wild & free','doggy dogg world']
};

RapGenius.prototype.getRandomSong = function(artist) {
	var songs = artistsSongs[artist];
	var randIndex = Math.floor(Math.random() * songs.length);

	return songs[randIndex];
}

RapGenius.prototype.getLyric = function(artist) {
	var artist = artist;
	var song = this.getRandomSong(artist);

	// Important: You can only call one of these functions at a single time. Calling the following
	// functions all at once will result in only the last call working. This is done intentionally
	// by chartlyrics to limit and prevent abuse of their API.

	// Search for artist and song
	// Returns a list of possible artists/songs related to given artist and song
	chartlyrics.getLyrics(artist, song)
	.then(function(results) {
		return results;
	})
	.catch(function(err) {
		console.error(err);
	});
}