const path = require('path');
const rootDir = require('../util/path');
exports.getAddProduct = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};
exports.postAddProduct = (req,res,next) => {
    res.redirect('/')
};
exports.getProduct = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
};
