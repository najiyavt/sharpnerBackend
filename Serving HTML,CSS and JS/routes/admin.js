const path = require('path');

const express = require('express');
const rootDir =require('../util/path');
const router=express.Router();

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views' , 'add-product.html'))
})
router.post('/add-product' , (req,res,next) => {
    res.redirect('/');
});
router.get('/contactus' , (req,res,next) => {
    res.sendFile(path.join(rootDir,'views' ,'contact-us.html'))
});
router.post('/success' , (req,res,next) => {
    res.sendFile(path.join(rootDir,'views' ,'success.html'))
    //redirect('/admin/success')
});
module.exports=router;