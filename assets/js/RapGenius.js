var RapGenius = function() {
	this.badwords = ['anal','anus','arse','ass','ballsack','balls','bastard','bitch','biatch','bloody','blowjob','blow job','bollock','bollok','boner','boob','bugger','bum','butt','buttplug','clitoris','cock','coon','crap','cunt','damn','dick','dildo','dyke','fag','feck','fellate','fellatio','felching','fuck','f u c k','fudgepacker','fudge packer','flange','Goddamn','God damn','hell','homo','jerk','jizz','knobend','knob end','labia','lmao','lmfao','muff','nigger','nigga','omg','penis','piss','poop','prick','pube','pussy','queer','scrotum','sex','shit','s hit','sh1t','slut','smegma','spunk','tit','tosser','turd','twat','vagina','wank','whore','wtf'];
}

var artistsSongs = {
	'kanye-west': [window.throughTheWire.split('\n'), window.goldDigger.split('\n'), window.jesusWalks.split('\n'), window.stronger.split('\n')],
	'eminem': [window.loseYourself.split('\n'), window.notAfraid.split('\n'), window.theRealSlimShady.split('\n'), window.rapGod.split('\n')],
	'rick-ross': [window.boxChevy.split('\n'), window.nine.split('\n'), window.imNotAStar.split('\n'), window.holdMeBack.split('\n')],
	'schoolboy-q': [window.studio.split('\n'), window.collardGreens.split('\n'), window.manOfTheYear.split('\n'), window.hellOfANight.split('\n')],
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

	var filtered = lyrics[randIndex].toLowerCase();
	this.badwords.forEach(function(word) {
		filtered = filtered.split(word).join(word[0]+Array(word.length).join("*"));
	})
	return filtered;
}