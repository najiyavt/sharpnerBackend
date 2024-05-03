const express = require('express');

const controllers = require('../controllers/signup');

const router = express.Router();

router.post('/user/signup',controllers.postSignup);
router.get('/user/signup' , controllers.getSignup)

module.exports=router;