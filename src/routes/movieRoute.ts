import express from "express";

const router = express.Router();
const movieController = require('../controllers/movieController');

// get filmes by category
router.get('/category/:category', movieController.getMoviesByCategory);

router.get('/discover', movieController.discoverMovies);


export default router;