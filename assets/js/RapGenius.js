var RapGenius = function() {
	
}

var artistsSongs = {
	'kanye-west': [window.throughTheWire.split('\n'), window.goldDigger.split('\n'), window.jesusWalks.split('\n'), window.stronger.split('\n')],
	'eminem': [window.loseYourself.split('\n'), window.notAfraid.split('\n'), window.theRealSlimShady.split('\n'), window.rapGod.split('\n')],
	'rick-ross': [window.boxChevy.split('\n'), window.nine.split('\n'), window.imNotAStar.split('\n'), window.holdMeBack.split('\n')],
	'schoolboy q': [window.studio.split('\n'), window.collardGreens.split('\n'), window.manOfTheYear.split('\n'), window.hellOfANight.split('\n')],
	'tupac': [window.lifeGoesOn.split('\n'), window.thugzMansion.split('\n'), window.hitEmUp.split('\n'), window.dearMama.split('\n')],
	'snoop-dogg': [window.dropItlikeItsHot.split('\n'), window.iWannaRock.split('\n'), window.youngWildFree.split('\n'), window.doggyDoggWorld.split('\n')]
};

RapGenius.prototype.getRandomSong = function(artist) {
	var songs = artistsSongs[artist];
	var randIndex = Math.floor(Math.random() * songs.length);

	return songs[randIndex];
}

RapGenius.prototype.getLyric = function(artist) {
	if(artist === 'default') return;
	
	var lyrics = this.getRandomSong(artist);
	var randIndex = Math.floor(Math.random() * lyrics.length);

	return lyrics[randIndex];
}