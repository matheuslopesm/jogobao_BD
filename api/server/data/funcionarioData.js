// Conecta nossa aplicação à tabela "Funcionario" do banco de dados

const database = require('../infra/database.js')

exports.getFuncionarios = function(){
    return database.query('SELECT* FROM funcionario ORDER BY idf')
}

exports.getFuncionario = function(idf){
    return database.oneOrNone('SELECT* FROM funcionario WHERE idf = $1', [idf])
}

exports.getFuncionarioByFNome = function(fnome){
    return database.oneOrNone('SELECT* FROM funcionario WHERE fnome = $1', [fnome])
}

exports.saveFuncionario = function(funcionario) {
    return database.one('INSERT INTO funcionario (fnome, sobrenome, datanascimento) values ($1, $2, $3) returning*', [funcionario.fnome, funcionario.sobrenome, funcionario.datanascimento]);
}

exports.updateFuncionario = function (idf, funcionario) {
    return database.none('UPDATE funcionario SET fnome = $1, sobrenome = $2, datanascimento = $3 WHERE idf = $4', [funcionario.fnome, funcionario.sobrenome,funcionario.datanascimento, idf])
}

exports.deleteFuncionario = function (idf) {
    return database.none('DELETE FROM funcionario WHERE idf = $1', [idf])
}