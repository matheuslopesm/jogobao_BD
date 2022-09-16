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
    return database.one('INSERT INTO venda (datavenda, total) values ($1, $2) returning*', [venda.datavenda, venda.total]);
}

exports.updateVenda = function (cod, venda) {
    return database.none('UPDATE venda SET datavenda = $1, total = $2 WHERE cod = $3', [venda.datavenda, venda.total, cod])
}

exports.deleteVenda = function (cod) {
    return database.none('DELETE FROM venda WHERE cod = $1', [cod])
}