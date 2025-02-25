const express = require('express');
const { createAccount, depositMoney, withdrawMoney, getBalance } = require('../controllers/accountController');
const router = express.Router();
router.post('/account', createAccount);
router.post('/deposit/:id', depositMoney);
router.post('/withdraw/:id', withdrawMoney);
router.get('/balance/:id', getBalance);
module.exports = router;