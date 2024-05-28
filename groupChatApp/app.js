const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const fs= require('fs');

const app= express();
const messageRouter = require('./routes/message');
const loginRouter = require('./routes/login');

app.use(bodyParser.urlencoded());

app.use(loginRouter);
app.use(messageRouter);

app.listen(3000, () => console.log('port 3000 started listening'))