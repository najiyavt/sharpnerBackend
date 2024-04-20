const path = require('path')

const rootDir =require('../util/path');
const express = require('express');
const router = express.Router();
const shop = require('../controller/products')

router.get('/',(shop.getProduct))
module.exports=router;