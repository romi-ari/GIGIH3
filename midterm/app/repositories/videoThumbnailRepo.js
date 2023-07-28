const videoThumbnail = require('../models/videoThumbnailModel')

module.exports = {

    findAll() {
        try {
            return videoThumbnail.find({})
        } catch (error) {
            throw new Error("Data not found") 
        }
    }
} 