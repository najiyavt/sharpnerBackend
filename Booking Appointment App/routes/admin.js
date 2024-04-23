const express=require('express')
const router=express.Router()

const controller = require('../controllers/admin');

router.post('/user',controller.postUser);
router.get('/user',controller.getUser);
router.delete('/user/:userId',controller.DeleteUser);

module.exports=router;