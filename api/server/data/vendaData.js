// Conecta nossa aplicação à tabela "Venda" do banco de dados

const database = require('../infra/database.js')

exports.getVendas = function(){
    return database.query('SELECT* FROM venda ORDER BY cod')
}

exports.getVenda = function(cod){
    return database.oneOrNone('SELECT* FROM venda WHERE cod = $1', [cod])
}

exports.getVendaByCod = function(cod){
    return database.oneOrNone('SELECT* FROM venda WHERE cod = $1', [cod])
}

exports.saveVenda = function(venda) {
    return database.one('INSERT INTO venda (datavenda, clienteid, funcionarioid, produtonumeroserie) values ($1, $2, $3, $4) returning*', [venda.datavenda, venda.clienteid, venda.funcionarioid, venda.produtonumeroserie]);
}

exports.updateVenda = function (cod, venda) {
    return database.none('UPDATE venda SET datavenda = $1, clienteid = $2, funcionarioid = $3, produtonumeroserie = $4 WHERE cod = $5', [venda.datavenda, venda.clienteid, venda.funcionarioid, venda.produtonumeroserie, cod])
}

exports.deleteVenda = function (cod) {
    return database.none('DELETE FROM venda WHERE cod = $1', [cod])
}