import express from 'express';
const router = express.Router();
const profileController = require('../controllers/profileController');

// Rota para criar perfil
router.post('/create', profileController.createProfile);
router.get('/', profileController.getAllByAccount);
export default router;