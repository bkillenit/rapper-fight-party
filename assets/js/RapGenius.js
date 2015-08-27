// example get request: http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad

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

	$.get(baseURL, requestObj).done(function(data){
		var lyrics = data.Lyric.split('\n');
		var randIndex = Math.floor(Math.random() * lyrics.length);
		randomLyric = lyrics[randIndex];
	});

	return randomLyric;
}