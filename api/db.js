const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgre123",
    host: "localhost",
    port: 5432,
    database: "jogobao_db"
});

module.exports = pool;