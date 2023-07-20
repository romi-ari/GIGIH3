const spotify = require('../model/spotifyModel')

module.exports = {
    
    findAll() {
        return spotify
    },

    create(createArgs) {
        return spotify.push(createArgs)
    },

    update(updateArgs) {
        const index = spotify.findIndex((playlist) => playlist.id === updateArgs.id)
  
        if (index) {
            spotify[index].playlist = updateArgs.playlist
        }

        return updateArgs 
    },

    delete(deleteArgs) {
        const index = spotify.findIndex((playlist) => playlist.id === deleteArgs.id)
        
        if (index) {
            spotify.splice(index, 1)
        }

        return deleteArgs  
    }
}