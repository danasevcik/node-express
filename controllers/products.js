const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.postAddProduct = (req, res, next) => {
  console.log('req.body', req.body);
  const product = new Product('test');
  res.redirect('/')
}

exports.getShop = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}
