CREATE DATABASE jogobao_db;

-- Cria tabela Produto
CREATE TABLE produto(
    numeroSerie SERIAL NOT NULL PRIMARY KEY,
    pNome VARCHAR(15),
    valor INT,
    empresa VARCHAR(15),
    descricao TEXT
);

-- Cria tabela Funcionário
CREATE TABLE funcionario(
    id SERIAL NOT NULL PRIMARY KEY,
    fnome VARCHAR(15),
    sobrenome VARCHAR(15),
    datanascimento DATE
);

-- Cria tabela Cliente
CREATE TABLE cliente(
    id SERIAL NOT NULL PRIMARY KEY,
    cnome VARCHAR(15),
    sobrenome VARCHAR(15),
    datanascimento DATE
);