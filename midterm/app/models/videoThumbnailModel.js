const mongoose = require('mongoose')

const videoThumbnailSchema = new mongoose.Schema({
    VideoID: {type: Number},
    UrlImageThumbnail: {type: String},
})

const videoThumbnail = mongoose.model('videoThumbnail', videoThumbnailSchema)

module.exports = videoThumbnail