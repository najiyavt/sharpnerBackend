const Sequalize = require('sequelize');
const sequalize = new Sequalize('node-complete','root','najiyavt@2001' , {
    dialect: 'mysql',
    host: 'localhost'
});
module.exports=sequalize;