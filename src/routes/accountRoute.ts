import express from 'express';

const router = express.Router();
const accountController = require('../controllers/accountController');

// Rota para criar conta
router.post('/create', accountController.createAccount);

// Rota para login
router.post('/login', accountController.login);

export default router;