const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const fs= require('fs');


const app= express();
//const dataRouter = require('./routes/data');
const messageRouter = require('./routes/message');
const loginRouter = require('./routes/login');

app.use(bodyParser.urlencoded());

//app.use(dataRouter);
app.use(loginRouter);
app.use(messageRouter);

// app.get('/message' , (req,res,next) => {
//     fs.readFile('message.txt' , )
//     res.send()
// })

app.listen(3000, () => console.log('port 3000 started listening'))