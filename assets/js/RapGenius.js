// example get request: http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad
var makeRequest = function(options) {
	return new Promise(function(resolve, reject) {
		request(options, function(err, response, body) {
			if(err) return reject(err);
			else if(response.statusCode !== 200) return reject(new Error('Invalid response code: ' + response.statusCode));
			else if(body) resolve(parseString(body));
		});
	});
}

var RapGenius = function() {
	
}

var artistsSongs = {
	'kanye west': ['stronger', 'jesus walks', 'through the wire', 'gold digger'],
	'eminem': ['lose yourself', 'not afraid', 'the real slim shady', 'rap god'],
	'rick ross': ['box chevy', '911', 'i\'m not a star', 'hold me back'],
	'schoolboy q': ['studio', 'collard greens', 'man of the year', 'hell of a night'],
	'tupac': ['life goes on', 'thugz mansion', 'hit em up', 'dear mama'],
	'snoop dogg': ['drop it like it\'s hot', 'i wanna rock', 'young, wild & free', 'doggy dogg world']
};

RapGenius.prototype.getRandomSong = function(artist) {
	var songs = artistsSongs[artist];
	var randIndex = Math.floor(Math.random() * songs.length);

	return songs[randIndex];
}

RapGenius.prototype.getLyric = function(artist) {
	var baseURL = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect";

	var requestObj = {};
	requestObj.artist = artist;
	requestObj.song = this.getRandomSong(artist);

	var randomLyric = "";

	// $.ajax({
	// 	url: baseURL,
	// 	data: requestObj,
	// 	dataType: 'xml',
	// 	success: function(data){
	// 		var lyrics = data.Lyric.split('\n');
	// 		var randIndex = Math.floor(Math.random() * lyrics.length);
	// 		randomLyric = lyrics[randIndex];
	// 		alert(data);
	// 		return randomLyric;
	// 	},
	// 	error: function(error) {
	// 		this.getLyric(artist);
	// 	}
	// });

	return makeRequest({ url: util.format('%s/%s/%s?artist=%s&song=%s', BASE_URL, API_VERSION, ENDPOINTS.SEARCH_LYRIC_DIRECT, 
				artist, song), headers: { 'User-Agent': USER_AGENT } });


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
}