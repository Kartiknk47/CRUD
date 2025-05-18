const express = require('express');
const productController = require('../controller/productsController')

const router = express.Router();

router.get('/getAllProducts', productController.getAllProducts)
router.get('/getProductsById/:ID', productController.getProductsById)
router.post('/addProduct', productController.addProduct)
router.delete('/deleteProduct/:ID', productController.deleteProduct)
router.put('/updateProduct/:ID', productController.updateProduct)



module.exports = router;