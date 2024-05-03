const { SHOWINDEXES } = require('sequelize/lib/query-types');
const Signup = require('../models/signup');

exports.postSignup = async (req,res,next) => {

    const { name, email, password } = req.body;
    try{
        const signup = await Signup.create({
            name:name,
            email:email, 
            password:password 
        })
        res.status(201).json(signup);
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to create user details' })
    };
}

exports.getSignup = async(req, res, next) => {
    try{
        const signup = await Signup.findAll();
        res.status(201).json(signup);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to retrieve user details' })
    };
}