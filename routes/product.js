const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createProduct, updateProduct, deleteProduct, productInfo, productList } = require('../controllers/productController');
const { productSchema, paginationSchema } = require('../validation/productSchema');


// Authentication required for write operations
// Login route
router.post('/create', authMiddleware, productSchema, createProduct);
router.put('/update/:productId', authMiddleware, productSchema, updateProduct);
router.delete('/delete/:productId', authMiddleware, deleteProduct);
router.get('/info/:productId', productInfo);
router.get('/list', paginationSchema, productList);

module.exports = router;
