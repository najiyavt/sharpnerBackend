var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/admin')
const sequalize = require('./util/database')
const error= require('./controllers/error')

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',routes);

app.use(error.get404)

sequalize
  .sync()
  .then(result => {
    app.listen(4000,() => console.log(" 4000 is Working"))
      console.log(result);
    })
  .catch(err => console.log("ERROR:",err))

//app.listen(4000,() => console.log('Started Working'))