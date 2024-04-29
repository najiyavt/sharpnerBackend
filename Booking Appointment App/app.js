const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes/admin');
const sequelize = require('./util/database')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',routes);

sequelize
  .sync()
  .then(result => {
    console.log(result);
    app.listen(4000 ,() => console.log("3000 is Working:>"))
  })
  .catch(err => console.log(err))
