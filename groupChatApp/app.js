const http = require('http');
const express = require('express');
const fs = require('fs');
//const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.urlencoded({extended:false}));
app.get('/login', (req,res,next) => {
    fs.readFile('message.txt' , {encoding:'utf-8'} , (err , data) => {
        if(err){
            console.log(err);
        }
        res.send(`<body><form action='/submit' method='POST'><input type='text' name='title'><button type='submit'>Login</button></form></body>`);
    })
});
app.post('/submit' ,(req,res,next) => {
    res.redirect('/')
})
app.get('/' , (req,res,next) => {
    fs.readFile('message.txt' , {encoding:'utf-8'} , (err,data) => {
        res.send(`<body><div>${data}</div><form action='/submit' method='POST'><input type='text' name='title'><button type='submit'>Send</button></form></body>`);
    })
})

const server = http.createServer(app);
server.listen(3000, () => console.log("listening 3000"))