// Conecta o app com a API

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Conexão com o banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Base de dados conectada com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};