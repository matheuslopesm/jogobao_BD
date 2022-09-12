CREATE DATABASE jogobao_db;

CREATE TABLE produto(
    numeroSerie SERIAL NOT NULL PRIMARY KEY,
    pNome VARCHAR(15),
    valor INT,
    empresa VARCHAR(15),
    descricao TEXT
);
