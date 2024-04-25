const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/expense');
const sequelize = require('./util/database');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use('/', routes);

sequelize
  .sync()
  .then(result => {
    app.listen(3000, () => console.log("Server is running on port 3000"))
  })
  .catch(err => console.log("ERROR ):",err));
