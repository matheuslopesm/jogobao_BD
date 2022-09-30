CREATE DATABASE jogobao_db;

-- Cria tabela Produto
CREATE TABLE produto(
    numeroserie SERIAL NOT NULL PRIMARY KEY,
    pnome VARCHAR(100),
    valor MONEY,
    empresa VARCHAR(50),
    descricao TEXT
);

-- Cria tabela Funcionário
CREATE TABLE funcionario(
    idf SERIAL NOT NULL PRIMARY KEY,
    fnome VARCHAR(50),
    sobrenome VARCHAR(50),
    datanascimento VARCHAR(10)
);

-- Cria tabela Cliente
CREATE TABLE cliente(
    idc SERIAL NOT NULL PRIMARY KEY,
    cnome VARCHAR(50),
    sobrenome VARCHAR(50),
    datanascimento VARCHAR(10)
);

-- Cria tabela Venda 
CREATE TABLE venda(
    cod SERIAL NOT NULL PRIMARY KEY,
    datavenda VARCHAR(10),
    funcionarioid SERIAL NOT NULL,
    clienteid SERIAL NOT NULL,
    FOREIGN KEY (funcionarioid) REFERENCES funcionario (idf),
    FOREIGN KEY (clienteid) REFERENCES cliente (idc)
);

-- Cria tabela Contem
CREATE TABLE contem(
    prodnumeroserie SERIAL NOT NULL,
    vendacod SERIAL NOT NULL,
);

-- Seta 2 chaves primárias para a tabela Contem
ALTER TABLE contem ADD PRIMARY KEY (prodnumeroserie, vendacod)

-- Seta 2 chaves estrangeiras na tabela Contem
ALTER TABLE contem FOREIGN KEY (prodnumeroserie) REFERENCES produto (numeroserie);
ALTER TABLE contem FOREIGN KEY (vendacod) REFERENCES venda (cod);


