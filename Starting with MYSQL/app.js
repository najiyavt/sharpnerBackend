const mysql=require('mysql2');

const pool=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: 'SUresh@1289'
});

let db=pool.promise();

db.query('select * from products').then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})