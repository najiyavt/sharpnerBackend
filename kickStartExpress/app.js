const http = require('http');
const express = require('express')

const app= express();
app.use((req,res,next) => {
    console.log("In the middleware!");
    next();
})
app.use((req,res,next) => {
    console.log("In another middleware!");
    res.send('<h2>Hello from Express Js ..</h2>')
});
const server = http.createServer(app);

server.listen(2000 , () => console.log('Server started on port 2000'));
