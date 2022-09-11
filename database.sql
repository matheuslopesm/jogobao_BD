CREATE DATABASE jogobao_db;

CREATE TABLE funcionario(
    cpf CHAR(11) PRIMARY KEY,
    fNome VARCHAR(15),
    sobrenome VARCHAR(15),
    dataNascimento DATE,
    salario INT,
    sexo CHAR(1)
);
