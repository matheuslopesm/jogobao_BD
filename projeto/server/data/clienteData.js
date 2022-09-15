// Conecta nossa aplicação à tabela "Produto" do banco de dados

const database = require('../infra/database.js')

exports.getClientes = function(){
    return database.query('SELECT* FROM cliente')
}

exports.getCliente = function(id){
    return database.oneOrNone('SELECT* FROM cliente WHERE id = $1', [id])
}

exports.getClienteByCNome = function(cnome){
    return database.oneOrNone('SELECT* FROM cliente WHERE cnome = $1', [cnome])
}

exports.saveCliente = function(cliente) {
    return database.one('INSERT INTO cliente (cnome, sobrenome) values ($1, $2) returning*', [cliente.cnome, cliente.sobrenome]);
}

exports.updateCliente = function (id, cliente) {
    return database.none('UPDATE cliente SET cnome = $1, sobrenome = $2 WHERE id = $3', [cliente.cnome, cliente.sobrenome, id])
}

exports.deleteCliente = function (id) {
    return database.none('DELETE FROM cliente WHERE id = $1', [id])
}

