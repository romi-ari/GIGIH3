const express = require('express')
const router = express.Router()

const videThumbnailCtrl = require('../app/controllers/videoThumbnailCtrl')
const productCtrl = require('../app/controllers/productCtrl')
const commentCtrl = require('../app/controllers/commentCtrl')

router.get('/video-thumbnail-list', videThumbnailCtrl.videoThumbnailList)
router.get('/product-list', productCtrl.productList)
router.get('/comment-list', commentCtrl.commentList)
router.post('/comment', commentCtrl.createComment)

module.exports = router