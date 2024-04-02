const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}) );


app.use('/add-product', (req,res,next) => {
    //console.log("In another middleware!");
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Products</button></form>")
});
app.use('/product' ,(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
})
app.use('/', (req,res,next) => {
    //console.log("In another middleware!");
    res.send('<h2>Hello from Express Js !</h2>')
});

const server = http.createServer(app);

server.listen(2000 , () => console.log('Server started on port 2000'));
