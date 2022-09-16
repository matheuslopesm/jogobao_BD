// Conecta nossa aplicação à tabela "Funcionario" do banco de dados

const database = require('../infra/database.js')

exports.getFuncionarios = function(){
    return database.query('SELECT* FROM funcionario')
}

exports.getFuncionario = function(id){
    return database.oneOrNone('SELECT* FROM funcionario WHERE id = $1', [id])
}

exports.getFuncionarioByFNome = function(fnome){
    return database.oneOrNone('SELECT* FROM funcionario WHERE fnome = $1', [fnome])
}

exports.saveFuncionario = function(funcionario) {
    return database.one('INSERT INTO funcionario (fnome, datanascimento) values ($1, $2) returning*', [funcionario.fnome, funcionario.datanascimento]);
}

exports.updateFuncionario = function (id, funcionario) {
    return database.none('UPDATE funcionario SET fnome = $1, datanascimento = $2 WHERE id = $3', [funcionario.fnome, funcionario.datanascimento, id])
}

exports.deleteFuncionario = function (id) {
    return database.none('DELETE FROM funcionario WHERE id = $1', [id])
}