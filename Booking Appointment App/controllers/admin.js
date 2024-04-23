const User = require('../models/user');

exports.postUser = (req,res,next) => {
    console.log(req.body);
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
    User.create({
        name:name,
        phone:phone,
        email:email
    })
    .then(result => {
        console.log(result.dataValues);
        res.send(result.dataValues)
    })
    .catch(err => console.log(err))
}

exports.getUser = (req,res,next) => {
    User.findAll()
    .then(result => {
        const data = result.map(i => i.dataValues);
        console.log(data);
        res.send(data);
    })
    .catch(err => console.log(err))
}

exports.DeleteUser= (req,res,next) => {
    const id = req.params.id;
    User.findByPk(id)
    .then(result =>{
        if(!result){ 
           console.log(id);
        }
        return result.destroy();
    })
    .then(() => {
        console.log("DELETED!");
        res.send(200)
    })
    .catch(err => console.log("ERROR:",err))
}



