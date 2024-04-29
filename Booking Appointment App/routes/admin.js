const express=require('express');
const router = express.Router();

const controller = require('../controllers/user');

router.get('/user',controller.getAddProduct);
router.post('/user',controller.postAddProduct);
router.delete('/user/:id',controller.deleteProduct);
router.get('/user/:id',controller.getEditProduct);
router.post('/user/:id',controller.postEditProduct);

module.exports=router;

