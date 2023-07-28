const productRepo = require('../repositories/productRepo')

module.exports = {

    async productList() {
        try {
            const listProduct = await productRepo.findAll()
            
            return { listProduct }
        } catch (error) {
            return {
                response: 404,
                msg: "Product list not found",
                error: error.message,
            }
        }
    }
}