(function() {
	'use strict';

	var chartlyrics = require('chartlyrics');

	// Important: You can only call one of these functions at a single time. Calling the following
	// functions all at once will result in only the last call working. This is done intentionally
	// by chartlyrics to limit and prevent abuse of their API.

	// Search for artist and song
	// Returns a list of possible artists/songs related to given artist and song
	chartlyrics.searchLyrics('Michael Jackson', 'Bad')
	.then(function(results) {
		console.log(results);
	})
	.catch(function(err) {
		console.error(err);
	});
	
	// Finds lyrics of a song by any lyrics given
	// Returns a list of possible artists/songs related to given lyrics
	chartlyrics.matchLyrics("Just to tell you once again you know I'm bad")
	.then(function(songs) {
		console.log(songs);
	})
	.catch(function(err) {
		console.error(err);
	}); 

	// Get lyrics by artist and song 
	// Returns the lyrics of the song (if found)
	chartlyrics.getLyrics('Michael Jackson', 'Bad')
	.then(function(lyrics) {
		console.log(lyrics);
	})
	.catch(function(err) {
		console.error(err);
	}); 
	
	// Get lyrics by id and checksum 
	// Returns the lyrics of the song (if found)
	chartlyrics.getLyricsById(1710, '1bc24124e168aa20d99e462cabb82942')
	.then(function(lyrics) {
		console.log(lyrics);
	})
	.catch(function(err) {
		console.error(err);
	});

	// Request to add your own lyrics to songs 
	// Returns a response stating whether or not the request is under review
	chartlyrics.addLyrics({
		trackId: 10896985,
		trackChecksum: 'daf30e31233776e57c1625fba21fabca',
		lyric: 'La la la la',
		email: 'your@email.com'
	}).then(function(response) {
		console.log(response);
	}).catch(function(err) {
		console.error(err);
	}); 

})();