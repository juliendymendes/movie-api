import { Request, Response } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar novo perfil
exports.createWatchedMovie = async (req: Request, res: Response) => {
    const { movie_id, profile_id } = req.body;

    if(!movie_id || !profile_id) return res.status(400).json({ error: 'Dados incompletos' });
    try{
        const watchedMovie = await prisma.watchedMovies.create({
            data: {
							movie_id,
							profile_id
            },
        });
        return res.json(watchedMovie);
    } catch (error) {
        return res.status(400).send(error);
    }
}

