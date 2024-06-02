import express from 'express';
const routerProfile = express.Router();
const profileController = require('../controllers/profileController');

// Rota para criar perfil
routerProfile.post('/create', profileController.createProfile);
export default routerProfile;