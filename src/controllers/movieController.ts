import { Request, Response } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.discoverMovies = async (req: Request, res: Response) => {

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI0Nzg5ZWZhYmNhNGM0NjNmYTAyMzRhNmNhMzRmZiIsInN1YiI6IjYyOGE0YzE0ZjEwYTFhNzVjN2IzMjdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xg3U6g6iB80XF21CO9EIbnszGPjIpGKlU4fAnBjsrgo'
      }
    };
    
    fetch(url, options)
      .then((res: { json: () => any; }) => res.json())
      .then((json: any) => res.send(json))
      .catch((err: string) => console.error('error:' + err));
}

// filmes por categoria
exports.getMoviesByCategory = async (req: Request, res: Response) => {
    const { category } = req.params;
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${category}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI0Nzg5ZWZhYmNhNGM0NjNmYTAyMzRhNmNhMzRmZiIsInN1YiI6IjYyOGE0YzE0ZjEwYTFhNzVjN2IzMjdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xg3U6g6iB80XF21CO9EIbnszGPjIpGKlU4fAnBjsrgo'
      }
    };
    
    fetch(url, options)
      .then((res: { json: () => any; }) => res.json())
      .then((json: any) => res.send(json))
      .catch((err: string) => console.error('error:' + err));
}

exports.getMoviesByCategoryInWatchlist = async (req: Request, res: Response) => {
  
  const { profile_id } = req.params;

  if (!profile_id) {
    return res.status(400).json({ error: 'profile_id é obrigatório' });
  }

  try {
    // Buscar todas as watchlists do profile_id especificado
    const watchlistItems = await prisma.watchlist.findMany({
      where: { profile_id: parseInt(profile_id) },
      select: { category: true },
    });

    // Agregar todas as categorias em uma única lista
    let allCategories: number[] = [];
    watchlistItems.forEach((item: any) => {
      allCategories = allCategories.concat(item.category);
    });

    // Remover duplicatas
    const uniqueCategories = [...new Set(allCategories)];

    // Encontrar a categoria mais frequente
    const categoryFrequency: { [key: number]: number } = {};
    allCategories.forEach(cat => {
      categoryFrequency[cat] = (categoryFrequency[cat] || 0) + 1;
    });

    const mostFrequentCategory = Object.keys(categoryFrequency).reduce((a, b) => 
      categoryFrequency[parseInt(a)] > categoryFrequency[parseInt(b)] ? a : b
    );

    console.log({
      uniqueCategories,
      mostFrequentCategory: parseInt(mostFrequentCategory),
    });
  
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${parseInt(mostFrequentCategory)}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI0Nzg5ZWZhYmNhNGM0NjNmYTAyMzRhNmNhMzRmZiIsInN1YiI6IjYyOGE0YzE0ZjEwYTFhNzVjN2IzMjdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xg3U6g6iB80XF21CO9EIbnszGPjIpGKlU4fAnBjsrgo'
      }
    };
    
    fetch(url, options)
      .then((res: { json: () => any; }) => res.json())
      .then((json: any) => (
        // retornar apenas o id dos filmes
        res.send(json.results.map((movie: { id: any; }) => movie.id))
      ))
      .catch((err: string) => console.error('error:' + err));
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }

}