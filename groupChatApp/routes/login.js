const express = require('express');
const fs=require('fs')
const router = express.Router();

router.get('/login' , ( req,res,next) => {
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">
    <input id="username" type="text" name="username" placeholder="login">
    <button type="submit">add</button>
</form>`);

});
router.post('/product' , (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;