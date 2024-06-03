import express from 'express';
const router = express.Router();
const watchlistController = require('../controllers/watchlistController');

// Adicionar filme à lista de watchlist
router.post('/add', watchlistController.addMovie);

// Procurar filme na watchlist por categoria
router.get('/category/', watchlistController.getWatchlistByCategory);

// Visualizar lista para assistir
router.get('/:profile_id', watchlistController.getWatchlist);


export default router;