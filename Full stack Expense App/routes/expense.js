const express = require('express');
const router = express.Router();

const controller = require('../controllers/expense');

router.get('/expense',controller.getExpense);
router.post('/expense',controller.postExpense);
router.delete('/expense/:id',controller.deleteExpense);
// router.get('/expense/:id',controller.getEditExpense);
// router.post('/expense/:id',controller.postEditExpense);
module.exports=router;