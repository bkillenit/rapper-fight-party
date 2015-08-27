// Tests for input errors using the chartlyrics API
var assert = require('assert'), chartlyrics = require('../index');

describe('Search for various songs/artists', function() {
	describe('#searchLyrics(artist, song)', function() {
		it('should return error if no artist is defined', function() {
			assert.throws(chartlyrics.searchLyrics('bad').then(function(results) {}).catch(function(err) { throw err; }));
		});
		it('should return error if no song is defined', function() {
			assert.throws(chartlyrics.searchLyrics('michael jackson').then(function(results) {})
			.catch(function(err) { throw err; }));
		});
	});
});

describe('Match given lyrics', function() {
	describe('#matchLyrics(lyricText)', function() {
		it('should return error if no lyric text is defined', function() {
			assert.throws(chartlyrics.matchLyrics().then(function(songs) {}).catch(function(err) { throw err; }));
		});
	});
});

describe('Get lyrics by artist and song directly', function() {
	describe('#getLyrics(artist, song)', function() {
		it('should return error if no artist is defined', function() {
			assert.throws(chartlyrics.getLyrics('bad').then(function(lyrics) {}).catch(function(err) { throw err; }));
		});
		it('should return error if no song is defined', function() {
			assert.throws(chartlyrics.getLyrics('michael jackson').then(function(lyrics) {}).catch(function(err) { throw err; }));
		});
	});
});

describe('Get lyrics by id and checksum', function() {
	describe('#getLyricsById(lyricsId, lyricsChecksum)', function() {
		it('should return error if no lyrics id is defined', function() {
			assert.throws(chartlyrics.getLyricsById('1bc24124e168aa20d99e462cabb82942').then(function(lyrics) {})
				.catch(function(err) { throw err; }));
		});
		it('should return error if no lyrics checksum is defined', function() {
			assert.throws(chartlyrics.getLyricsById(1710).then(function(lyrics) {}).catch(function(err) { throw err; }));
		});
	});
});

describe('Add new lyrics', function() {
	describe('#addLyrics(options)', function() {
		it('should return error if no track id is defined', function() {
			assert.throws(chartlyrics.addLyrics({ trackChecksum: 'daf30e31233776e57c1625fba21fabca', lyric: 'La la la la', 
				email: 'your@email.com'}).then(function(response) {}).catch(function(err) { throw err; }));
		});
		it('should return error if no track checksum is defined', function() {
			assert.throws(chartlyrics.addLyrics({ trackId: 10896985, lyric: 'La la la la', email: 'your@email.com'})
			.then(function(response) {}).catch(function(err) { throw err; }));
		});
		it('should return error if no new lyrics are added', function() {
			assert.throws(chartlyrics.addLyrics({ trackId: 10896985, trackChecksum: 'daf30e31233776e57c1625fba21fabca', 
				email: 'your@email.com'}).then(function(response) {}).catch(function(err) { throw err; }));
		});
		it('should return error if no contact email is defined', function() {
			assert.throws(chartlyrics.addLyrics({ trackId: 10896985, trackChecksum: 'daf30e31233776e57c1625fba21fabca', lyric: 'La la la la' })
			.then(function(response) {}).catch(function(err) { throw err; }));
		});
	});
});