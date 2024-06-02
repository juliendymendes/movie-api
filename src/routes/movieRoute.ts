import express from "express";

const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/discover', movieController.discoverMovies);

export default router;