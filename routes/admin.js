const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products')

// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
// })
router.get('/add-product', productsController.getAddProduct)

router.post('/add-product', productsController.postAddProduct)

exports.routes = router;
// exports.products = products;
