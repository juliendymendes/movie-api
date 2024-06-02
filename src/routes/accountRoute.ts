const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Rota para criar conta
router.post('/create', accountController.createAccount);

module.exports = router;