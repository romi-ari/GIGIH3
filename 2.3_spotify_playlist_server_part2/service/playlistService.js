const playlistRepo = require('../repository/playlistRepo')

let idCounterPlaylist = 1
 
module.exports = {

    async listPlaylist() {
        try {
            const spotify = playlistRepo.findAll()

            return spotify
        } catch (err) {
            return {
                response: 400,
                message: "List song failed",
                error: err.message
            }
        }
    },

    async createPlaylist(req) {
        try {
            const playlist = req.body.playlist
            
            const createNewPlaylist = await playlistRepo.create({
                id: ++idCounterPlaylist, 
                playlist, 
                songs:[]
            })
            
            return createNewPlaylist
        } catch (err) {
            return {
                response: 400,
                message: "Create playlist failed",
                error: err.message
            }
        }
    },

    async updatePlaylist(req) {
        try {
            const id = parseInt(req.params.id)
            const playlist = req.body.playlist
    
            const updateNewPlaylist = await playlistRepo.update({
                id, playlist
            })

            return updateNewPlaylist
        } catch (err) {
            return {
                response: 400,
                message: "Update playlist failed",
                error: err.message
            }
        }
        
    },

    async deletePlaylist(req) {
        try {
            const id = parseInt(req.params.id)

            const deleteNewPlaylist = await playlistRepo.delete({
                id
            })

            return deleteNewPlaylist
        } catch (err) {
            return {
                response: 400,
                message: "Delete playlist failed",
                error: err.message
            }
        }
    }



}

