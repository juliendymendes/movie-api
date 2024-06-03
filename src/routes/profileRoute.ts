import express from 'express';
const router = express.Router();
const profileController = require('../controllers/profileController');

// Rota para criar perfil
router.post('/create', profileController.createProfile);
export default router;