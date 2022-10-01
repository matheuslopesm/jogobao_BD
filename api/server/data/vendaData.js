// Conecta nossa aplicação à tabela "Venda" do banco de dados

const database = require('../infra/database.js')

exports.getVendas = function(){
    return database.query('SELECT* FROM venda')
}

exports.getVenda = function(cod){
    return database.oneOrNone('SELECT* FROM venda WHERE cod = $1', [cod])
}

exports.getVendaByCod = function(cod){
    return database.oneOrNone('SELECT* FROM venda WHERE cod = $1', [cod])
}

exports.saveVenda = function(venda) {
    return database.one('INSERT INTO venda (datavenda, clienteid, funcionarioid) values ($1) returning*', [venda.datavenda, venda.clienteid, venda.funcionarioid]);
}

exports.updateVenda = function (cod, venda) {
    return database.none('UPDATE venda SET datavenda = $1, clienteid = $2, funcionarioid = $3 WHERE cod = $2', [venda.datavenda, venda.clienteid, venda.funcionarioid, cod])
}

exports.deleteVenda = function (cod) {
    return database.none('DELETE FROM venda WHERE cod = $1', [cod])
}