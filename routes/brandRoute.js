const express = require("express");
const brandController = require("../controller/brandController"); 

const router = express.Router();

router.get('/getAllBrand', brandController.getAllBrand);
router.get('/getProductsByBrandId/:ID', brandController.getProductsByBrandID);  
router.post('/addBrand', brandController.addBrand);
// router.delete('/deleteBrand/:ID', brandController.deleteBrand);
// router.put('/updateBrand/:ID', brandController.updateBrand);

module.exports = router;
