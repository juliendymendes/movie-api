import express from "express";

const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/category/:category', movieController.getMoviesByCategory);

router.get('/recomended/:profile_id', movieController.getMoviesByCategoryInWatchlist);

router.get('/discover', movieController.discoverMovies);


export default router;