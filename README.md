# Desafio Jera

Este guia fornece instruções passo a passo sobre como configurar e rodar a aplicação Node.js e um contêiner Docker para o banco de dados.

## Pré-requisitos


- [Node.js](https://nodejs.org/) (v14.x ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Docker](https://www.docker.com/) (para rodar o banco de dados PostgreSQL em um contêiner)

## 1. Clonar o Repositório

Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/juliendymendes/movie-api.git
cd movie-api
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Configurar banco de dados no Docker

Verifique se possui o Docker instalado e em execução. Em seguida, execute o seguinte comando

```bash
docker-compose up -d
```


## 4. Configurar variáveis de ambiente
Crie um arquivo .env e copie o seguinte código:
```bash
PORT=3000
CONNECTION_STRING=postgresql://localhost

DATABASE_URL="postgresql://movie_user:Desafio1509@localhost:5432/movies_db"
```

## 5. Executar migrações do prisma
Com o contêiner Docker em funcionamento, execute o seguinte comando:
```bash
prisma generate
prisma migrate dev
```
## 6. Iniciar aplicação
```bash
npm start
```

A aplicação estará disponível no endereço http://localhost:3000
