const express = require('express');
const categoryController = require("../controller/categoryController")

const router = express.Router();

router.get('/getAllCategories', categoryController.getAllCategories);
router.get('/getProductsByCategoryId/:ID', categoryController.getProductsByCategoryId);
router.post('/addCategory', categoryController.addCategory);
router.delete('/deleteCategory/:ID', categoryController.deleteCategory);
router.put('/updateCategory/:ID', categoryController.updateCategory);

module.exports = router;
