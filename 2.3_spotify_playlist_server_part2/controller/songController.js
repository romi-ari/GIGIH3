const { addSong, deleteSong, listSong, playSong } = require('../service/songService')

module.exports = {

    listSong(req, res) {
        listSong(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    },

    playSong(req, res) {
        playSong(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    },

    addSong(req, res) {
        addSong(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    },

    deleteSong(req, res) {
        deleteSong(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    },

}