const express = require('express')
const apiRouter = express.Router()

const playlistController = require('../controller/playlistController')
const songController = require('../controller/songController')

//=======Playlist Route=======//
apiRouter.get('/playlists', playlistController.listPlaylist)
apiRouter.post('/playlist', playlistController.createPlaylist)
apiRouter.put('/playlist/:id', playlistController.updatePlaylist)
apiRouter.delete('/playlist/:id', playlistController.deletePlaylist)

//=======Song Route=======//

//Get play count
apiRouter.get('/playlist/:id/song', songController.listSong)
//Play song
apiRouter.get('/playlist/:playlistId/song/:songId', songController.playSong)
apiRouter.post('/playlist/:id/song', songController.addSong)
apiRouter.delete('/playlist/:playlistId/song/:songId', songController.deleteSong)

module.exports = apiRouter
