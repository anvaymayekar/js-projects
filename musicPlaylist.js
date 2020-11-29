function Playlist(){
	let songs = []
 	let favourites = []

	this.addSong = function(songname, artist, genre, ratings=0, album="Individual"){
		if (!this.has(songname))
			songs.push({songname, artist, genre, ratings, album})
	}

	this.getPlaylist = function(){
		return songs
	}

	this.has = function(song){
		state = false
		for (let element of songs)
			state = element.songname === song
		
		return state
	}

	this.find = function(song){
		result = songs.find(element => {
			if (element.songname === song)
				return element
		})

		return result
	}

	this.checkFavourite = function(song){
		state = false
		for (let element of favourites)
			if (element.songname === song)
				state = true
		return state
	}

	this.removeSong = function(song){
		for (let i in songs)
			if (songs[i].songname === song)
				songs.splice(i, 1)
	}

	this.getSongsByArtist = function(artist){
		filteredArray = songs.filter(element => {
							if (element.artist === artist)
								return element
						})
		return filteredArray
	}

	this.getSongsByAlbum = function(album){
		filteredArray = songs.filter(element => {
							if (element.album === album)
								return element
						})
		return filteredArray
	}

	this.getSongsByGenre = function(genre){
		filteredArray = songs.filter(element => {
							if (element.genre === genre)
								return element
						})
		return filteredArray
	}

	this.getSongsByRating = function(ratings){
		filteredArray = songs.filter(element => {
							if (element.ratings >= ratings)
								return element
						})
						.sort((a, b) => {return a.ratings - b.ratings})
		return filteredArray
	}

	this.sortByRatings = function(){
		filteredArray = songs.sort((a, b) => {return b.ratings - a.ratings})
		return filteredArray
	}

	this.addFavourite = function(favourite){
		if (!this.checkFavourite(favourite))
			for (let element of songs)
				if (element.songname === favourite){
					favourites.push(element)
				}
	}

	this.getFavourites = function(){
		return favourites
	}

	this.getLength = function(){
		return `Songs in Playlist: ${songs.length}\nFavourites: ${favourites.length}`
	}
}

const play = new Playlist()
play.addSong("Lahore", "Guru Randhawa", "pop", 5)
play.addSong("Lahore", "Guru Randhawa", "pop", 5)
play.addSong("Monster", "Skillet", "hip-hop", 7.5, "Awake")
play.addSong("Radhe-Radhe", "Amit Gupta", "Party", 10, "Dream Girl")
play.addSong("Believer", "Imagine Dragons", "hip-hop", 7.55)
console.log(play.getPlaylist())
play.has("Monster")
play.removeSong("Monster")
play.getSongsByArtist("Guru Randhawa")
play.getPlaylist()
play.sortByRatings()
play.getSongsByRating(5)
play.addFavourite("Lahore")
play.addFavourite("Radhe-Radhe")
play.getFavourites()
const a = play.find("Lahore")
play.getLength()
module.exports = Playlist