const { commentList, createComment } = require('../services/commentSvc')

module.exports = {

    commentList(req,res) {
        commentList(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    },

    createComment(req,res) {
        createComment(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    status: data.status,
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "Success",
                    data
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    }
}