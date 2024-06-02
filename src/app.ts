import express from 'express';

const routes = require('./routes');
const accountRoutes = require('./routes/accountRoute');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', routes);

app.use('/account', accountRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));