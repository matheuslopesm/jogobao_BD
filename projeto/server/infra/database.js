// Conecta ao banco de dados

const pgp = require('pg-promise')();

const db = pgp({
    user: 'postgres',
    password: 'postgre123',
    host: 'localhost',
    port: 5432,
    database: 'jogobao_db'
})

module.exports = db;