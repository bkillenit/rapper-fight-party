http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad

var APIkey = "1c40805213e772508e1d1e73f6fa71c6";

var RapGenius = function() {

}

var artistsSongs = {};

RapGenius.prototype.getRandomSong(artist) {
	var songs = artistsSongs[artist];


}

RapGenius.prototype.getLyric = function(artist) {
	var baseURL = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=" + artist + "&";
	var songStr = "song=" + this.getRandomSong(artist);

	var url = baseURL + songStr;

	
}