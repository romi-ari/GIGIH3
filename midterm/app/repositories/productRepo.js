const product = require('../models/productModel')

module.exports = {

    findAll() {
        try {
            return product.find({})
        } catch (error) {
            throw new Error("Data not found") 
        }
    }
} 