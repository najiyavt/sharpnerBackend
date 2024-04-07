const express= require('express');
const fs=require('fs')
const router=express.Router();

router.get('/' , (req,res,next) => {
    fs.readFile('username.txt' , (err,data) => {
        if(err){
            console.log(err);
            data='No chat exist';
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
    method="POST"><input type="text" id="message" name="message" placeholder="message">
    <input type="hidden" id="username" name="username">
    <button type="submit">Send</button></form>`);
    })
});
router.post('/' , (req,res,next) => {
    //data.push(`${req.body.username} : ${req.body.message}`);
    console.log(`${req.body.username} : ${req.body.message}`);
    fs.writeFile('username.txt' ,` ${req.body.username}:${req.body.message}` ,{flag:'a'} , (err) => {
        err ? console.log(err):res.redirect('/');
    })
})
module.exports=router;