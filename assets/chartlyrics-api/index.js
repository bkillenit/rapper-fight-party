module.exports = (function() {
	'use strict';

	var util = require('util'), 
		request = require('request'), 
		Promise = require('promise'),
		parseString = Promise.denodeify(require('xml2js').parseString);

	var ENDPOINTS = {
		SEARCH_LYRIC: 'SearchLyric',
		SEARCH_LYRIC_DIRECT: 'SearchLyricDirect',
		SEARCH_LYRIC_TEXT: 'SearchLyricText',
		GET_LYRIC: 'GetLyric', 
		ADD_LYRIC: 'AddLyric'
	}, BASE_URL = 'http://api.chartlyrics.com', API_VERSION = 'apiv1.asmx', 
	USER_AGENT = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:26.0) Gecko/20100101 Firefox/26.0';

	// Shorthand request
	function makeRequest(options) {
		return new Promise(function(resolve, reject) {
			request(options, function(err, response, body) {
				if(err) return reject(err);
				else if(response.statusCode !== 200) return reject(new Error('Invalid response code: ' + response.statusCode));
				else if(body) resolve(parseString(body));
			});
		});
	}

	return {
		// Searchs a list of artists and songs similar to provided artist and song 
		searchLyrics: function(artist, song) {
			if(!artist) return Promise.reject(new Error('You must define an artist'));
			if(!song) return Promise.reject(new Error('You must define a song'));

			return makeRequest({ url: util.format('%s/%s/%s?artist=%s&song=%s', BASE_URL, API_VERSION, ENDPOINTS.SEARCH_LYRIC, artist, song), 
				headers: { 'User-Agent': USER_AGENT } });
		},
		// Matches any artists/songs related to given lyrics
		matchLyrics: function(lyricText) {
			if(!lyricText) return Promise.reject(new Error('You must provide lyrics to match')); 
			
			return makeRequest({ url: util.format('%s/%s/%s?lyricText=%s', BASE_URL, API_VERSION, ENDPOINTS.SEARCH_LYRIC_TEXT, lyricText),
				headers: { 'User-Agent': USER_AGENT } });
		},
		// Directly access song lyrics by artist and song 
		getLyrics: function(artist, song) {
			if(!artist) return Promise.reject(new Error('You must define an artist'));
			if(!song) return Promise.reject(new Error('You must define a song'));

			return makeRequest({ url: util.format('%s/%s/%s?artist=%s&song=%s', BASE_URL, API_VERSION, ENDPOINTS.SEARCH_LYRIC_DIRECT, 
				artist, song), headers: { 'User-Agent': USER_AGENT } });
		},
		// Directly access song lyrics by lyric id and checksum //
		getLyricsById: function(lyricId, lyricChecksum) {
			if(!lyricId) return Promise.reject(new Error('You must define the lyric id of the song'));
			if(!lyricChecksum) return Promise.reject(new Error('You must define the checksum of the song'));

			return makeRequest({ url: util.format('%s/%s/%s?lyricId=%d&lyricCheckSum=%s', BASE_URL, API_VERSION, ENDPOINTS.GET_LYRIC, 
				lyricId, lyricChecksum), headers: { 'User-Agent': USER_AGENT } });			
		},
		// Request to add custom lyrics to song
		addLyrics: function(options) {
			if(!options.trackId) return Promise.reject(new Error('You must define the track id'));
			if(!options.trackChecksum) return Promise.reject(new Error('You must define the track checksum'));
			if(!options.lyric) return Promise.reject(new Error('You must define the new lyric'));
			if(!options.email) return Promise.reject(new Error('You must define your email'));

			return makeRequest({ url: util.format('%s/%s/%s?trackId=%d&trackCheckSum=%s&lyric=%s&email=%s', BASE_URL, API_VERSION, 
				ENDPOINTS.ADD_LYRIC, options.trackId, options.trackChecksum, options.lyric, options.email), headers: { 'User-Agent': USER_AGENT } 
			});
		}
	};

})();