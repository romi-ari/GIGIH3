const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    Username: {type: String},
    Comment: {type: String},
    timestamp: {type: String},
    VideoID: {
        type: Schema.Types.ObjectId,
        ref: "VideoThumbnail"
    }
})

const comment = mongoose.model('comment', commentSchema)

module.exports = comment