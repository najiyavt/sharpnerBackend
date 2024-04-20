const path = require('path');

const express = require('express');
const rootDir =require('../util/path');
const router=express.Router();

const addProduct = require('../controller/products');
const contact = require('../controller/contactus')

router.get('/add-product',(addProduct.getAddProduct))
router.post('/add-product' , (addProduct.postAddProduct));
router.get('/contactus' , (contact.getContact));
router.post('/success' , (contact.postSuccess));

module.exports=router;