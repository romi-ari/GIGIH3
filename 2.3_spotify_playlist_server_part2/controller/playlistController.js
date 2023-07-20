const { listPlaylist, createPlaylist, updatePlaylist, deletePlaylist } = require('../service/playlistService')

module.exports = {

    listPlaylist(req, res) {
        listPlaylist(req).then(data => {
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

    createPlaylist(req, res) {
        createPlaylist(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(201).json({
                    status: "OK",
                    message: "Create playlist success",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    },

    updatePlaylist(req, res) {
        updatePlaylist(req).then(data => {
            if(data.response){
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    message: "Update playlist success",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    },

    deletePlaylist(req, res) {
        deletePlaylist(req).then(data => {
            if(data.response){
                res.status(data.response).json({
                    message: data.message,
                    error: data.error,
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    message: "Delete playlist success",
                    data,
                })
            }
        }).catch(err => {
            res.status(400).json({
                error: err.message
            })
        })
    }
}