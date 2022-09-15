CREATE DATABASE jogobao_db;

-- Cria tabela Produto
CREATE TABLE produto(
    numeroserie SERIAL NOT NULL PRIMARY KEY,
    pnome VARCHAR(15),
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

-- Cria tabela Venda 
CREATE TABLE venda(
    cod SERIAL NOT NULL PRIMARY KEY,
    datavenda DATE,
    total INT,
    funcionarioid SERIAL NOT NULL,
    clienteid SERIAL NOT NULL,
    FOREIGN KEY (funcionarioid) REFERENCES funcionario (id),
    FOREIGN KEY (clienteid) REFERENCES cliente (id)
);

-- Cria tabela Contem
CREATE TABLE contem(
    prodnumeroserie SERIAL NOT NULL PRIMARY KEY,
    vendacod SERIAL NOT NULL,
    FOREIGN KEY (prodnumeroserie) REFERENCES produto (numeroserie),
    FOREIGN KEY (vendacod) REFERENCES venda (cod)
);

