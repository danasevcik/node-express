const path = require('path');
const rootDir = require('../util/path');
const products = [];

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.postAddProduct = (req, res, next) => {
  console.log('req.body', req.body);
  products.push({title: req.body.title});
  res.redirect('/')
}
