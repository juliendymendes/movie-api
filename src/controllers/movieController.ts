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