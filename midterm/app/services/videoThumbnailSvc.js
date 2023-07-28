const videoThumbnailRepo = require('../repositories/videoThumbnailRepo')

module.exports = {

    async videoThumbnailList() {
        try {
            const listVideo = await videoThumbnailRepo.findAll()
            
            return { listVideo }
        } catch (error) {
            return {
                response: 404,
                msg: "Video thumbnail list not found",
                error: error.message,
            }
        }
    }
}