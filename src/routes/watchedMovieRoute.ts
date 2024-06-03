import express from "express";

const router = express.Router();
const watchedMovieController = require('../controllers/watchedMovieController');

router.post('/create', watchedMovieController.createWatchedMovie);

export default router;