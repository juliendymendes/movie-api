import express from 'express';
import cors from 'cors';

import routeIndex from './routes/index';
import accountRoutes from './routes/accountRoute';
import movieRoutes from './routes/movieRoute';
import profileRoutes from './routes/profileRoute';

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();

// Configurações avançadas de CORS
const corsOptions = {
    origin: '*', // Substitua pelo domínio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  };

app.use(cors());

app.use(express.json());
app.use('/api', routeIndex);

app.use('/account', accountRoutes);
app.use('/movie', movieRoutes);
app.use('/profile', profileRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));