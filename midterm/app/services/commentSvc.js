const commentRepo = require('../repositories/commentRepo')

module.exports = {

    async commentList() {
        try {
            const listComment = await commentRepo.findAll()
            
            return { listComment }
        } catch (error) {
            return {
                response: 404,
                msg: "Comment list not found",
                error: error.message,
            }
        }
    },

    async createComment(req) {
        try {
            const username = req.body.username
            const postComment = req.body.postComment

            const comment = await commentRepo.create({
                username, postComment
            })
            
            return { comment }
        } catch (error) {
            return {
                response: 404,
                status: "Fail",
                msg: "Failed to post comment",
                error: error.message,
            }
        }
    }
}