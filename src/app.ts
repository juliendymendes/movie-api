import express from 'express';
import cors from 'cors';

const routes = require('./routes');
const accountRoutes = require('./routes/accountRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações avançadas de CORS
const corsOptions = {
    origin: '*', // Substitua pelo domínio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  };

app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.use('/account', accountRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));