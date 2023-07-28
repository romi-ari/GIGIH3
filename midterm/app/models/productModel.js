const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    ProductID: {type: Number},
    LinkProduct: {type: String},
    Title: {type: String},
    Price: {type: String},
    VideoID: {
        type: Schema.Types.ObjectId,
        ref: "VideoThumbnail"
    }
})

const product = mongoose.model('product', productSchema)

module.exports = product