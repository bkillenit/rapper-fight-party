# chartlyrics
chartlyrics API wrapper for chartlyrics.com

## Examples
```javascript
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
```

## API
This API uses A+/Promises - see here: http://promisesaplus.com/

### .searchLyrics(artist, song)
Allows you to search for lyrics by artist and song. This function takes 
two parameters, artist and song. It will return a list of artists/songs 
that match the given criteria if any. See above for an example.

### .matchLyrics(lyricText)
Allows you to search for lyrics by matching them with other songs. This function 
takes one parameter, lyricText. It will return a list of artists/songs that match the 
given lyrics provided. See above for an example.

### .getLyrics(artist, song)
Allows you to directly access song lyrics by artist and song. This function takes
two parameters, artist and song. It will return the exact song including it's 
properties such as lyricId and lyricChecksum and most importantly the lyrics. See 
above for an example.

### .getLyricsById(lyricsId, lyricsChecksum)
Allows you to directly access song lyrics by id and checksum. This function takes
two parameters, lyricId and lyricChecksum. It will return the exact song including it's 
properties such as lyricId and lyricChecksum and most importantly the lyrics. See above 
for an example.

### .addLyrics(options)
Allows you to request to add custom lyrics to an existing track. This function takes
four options, trackId, trackChecksum, lyric, and email. It will return whether or
not the request has been sent for review. All options are mandatory. See above for 
an example.

Need more information? See docs here: http://www.chartlyrics.com/api.aspx

## Stopwords and Characters
The following stop words and characters (will not) cannot be used in the search string.

	about, after, all, also, an, and, another, any, are, as, at, be, because, been, before, being, between, both, but, by, came, can, come, could, did, do, does, each, else, for, from, get, got, had, has, have, he, her, here, him, himself, his, how, if, in, into, is, it, its, just, like, make, many, me, might, more, most, much, must, my, never, no, now, of, on, only, or, other, our, out, over, re, said, same, see, should, since, so, some, still, such, take, than, that, the, their, them, then, there, these, they, this, those, through, to, too, under, up, use, very, want, was, way, we, well, were, what, when, where, which, while, who, will, with, would, you, your

	( ) [ ] ' ! . : ; , " | ~ ? !


## Bugs/Errors
If you encountered unexpected behavior or bugs in this module, please report the issue
or submit a pull request.

## License
Copyright (c) 2014 OPFL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
