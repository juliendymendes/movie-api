import { Request, Response } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Adicionar filme à lista de watchlist
exports.addMovie = async (req: Request, res: Response) => {
    const { movie_id, profile_id, category } = req.body;

    if(!movie_id || !profile_id || !category) return res.status(400).json({ error: 'Dados incompletos' });
        
    try{
        const watchlist = await prisma.watchlist.create({
            data: {
                movie_id,
                profile_id,
                category
            },
        });
        return res.json(watchlist);
    } catch (error) {
        return res.status(400).send(error);
    }
    
}

// Visualizar lista para assistir
exports.getWatchlist = async (req: Request, res: Response) => {
  const profile_id = parseInt(req.params.profile_id);

  if (!profile_id) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }

  try {
    const watchlist = await prisma.watchlist.findMany({
      where: {
        profile_id,
      },
    });

    return res.json({ results: watchlist });
  } catch (error) {
    console.error('Erro ao buscar a watchlist:', error);
    return res.status(500).json({ error: 'Erro ao buscar a watchlist' });
  }
}

// Procurar filme na watchlist por categoria
exports.getWatchlistByCategory = async (req: Request, res: Response) => {
    const { category } = req.body;

  if (!category || !Array.isArray(category)) {
    return res.status(400).json({ error: 'Dados de categoria inválidos' });
  }

  try {
    // Buscar itens da watchlist onde a categoria contém qualquer um dos itens fornecidos
    const watchlistItems = await prisma.watchlist.findMany({
      where: {
        category: {
          hasSome: category,  // Usa hasSome para encontrar qualquer item da lista de categorias
        },
      },
    });

    res.json(watchlistItems);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens da watchlist' });
  }
    
}