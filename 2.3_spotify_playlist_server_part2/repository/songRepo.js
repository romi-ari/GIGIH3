const spotify = require('../model/spotifyModel')

module.exports = {

    listSong(listArgs) {
        const playlist = spotify.find((song) => song.id === listArgs.id)
        return playlist.songs.sort((a, b) => b.count - a.count)
    },

    playSong(playArgs) {
        const playlist = spotify.find((playlist) => playlist.id === playArgs.playlistId)
        const song = playlist.songs.find((song) => song.id === playArgs.songId)
        return ++song.count

    },

    create(createArgs) {
        const playlistIndex = spotify.findIndex((song) => song.id === createArgs.idPlaylist)
        if(playlistIndex !== -1) {
            const removeIdPlaylist = {
                id: createArgs.id,
                title: createArgs.title,
                artists: createArgs.artists,
                url: createArgs.url,
                count: createArgs.count
            }
            spotify[playlistIndex].songs.push(removeIdPlaylist)

            return removeIdPlaylist
        } 
    },

    delete(deleteArgs) {
        const playlistIndex = spotify.findIndex((song) => song.id === deleteArgs.playlistId)
    
        if(playlistIndex !== -1) {
            const playlist = spotify[playlistIndex]
            
            const songIndex = playlist.songs.findIndex((song) => song.id === deleteArgs.songId)
        
            if(songIndex !== -1) {
                const deleteSong = playlist.songs.splice(songIndex, 1)
                return deleteSong
            }   
        }
    },

}