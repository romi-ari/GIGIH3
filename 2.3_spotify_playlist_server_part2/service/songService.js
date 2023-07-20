const songRepo = require('../repository/songRepo')

let idCounterSong = 1

module.exports = {

    async listSong(req) {
        try {
            const id = parseInt(req.params.id)
            const playlist = await songRepo.listSong({
                id,
            })

            return playlist
        } catch (err) {
            return {
                response: 400,
                message: "List song failed",
                error: err.message
            }
        }
    },

    async playSong(req) {
        try {
            const playlistId = parseInt(req.params.playlistId)
            const songId = parseInt(req.params.songId)

            const play = await songRepo.playSong({
                playlistId,
                songId,
            })

            return play
        } catch (err) {
            return {
                response: 400,
                message: "Play song failed",
                error: err.message
            }
        }
    },
    
    async addSong(req) {
        try {
            const idPlaylist = parseInt(req.params.id)
            const title = req.body.title
            const artists = req.body.artists
            const url = req.body.url 
            
            const song = await songRepo.create({
                idPlaylist,
                id: ++idCounterSong,
                title,
                artists,
                url,
                count: 0 
            })
            
            return song
        } catch (err) {
            return {
                response: 400,
                message: "Add song failed",
                error: err.message
            }
        }
    },

    async deleteSong(req) {
        try {
            const playlistId = parseInt(req.params.playlistId)
            const songId = parseInt(req.params.songId)

            const songIndex = await songRepo.delete({
                playlistId,
                songId
            })

            return songIndex
        } catch (err) {
            return {
                response: 400,
                message: "Delete song failed",
                error: err.message
            }
        }
    }

}