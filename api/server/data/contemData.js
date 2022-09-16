// Conecta nossa aplicação à tabela "Contem" do banco de dados

const database = require('../infra/database.js')

exports.getContems = function(){
    return database.query('SELECT* FROM contem')
}

exports.getContem = function(prodnumeroserie){
    return database.oneOrNone('SELECT* FROM contem WHERE prodnumeroserie = $1', [prodnumeroserie])
}

exports.getContemByVendaCod = function(vendacod){
    return database.oneOrNone('SELECT* FROM contem WHERE vendacod = $1', [vendacod])
}

exports.saveContem = function(contem) {
    return database.one('INSERT INTO contem (prodnumeroserie, vendacod) values ($1, $2) returning*', [contem.prodnumeroserie, contem.vendacod]);
}

exports.updateContem = function (prodnumeroserie, contem) {
    return database.none('UPDATE contem SET prodnumeroserie = $1, vendacod = $2 WHERE prodnumeroserie = $3', [contem.prodnumeroserie, contem.vendacod, prodnumeroserie])
}

exports.deleteContem = function (prodnumeroserie) {
    return database.none('DELETE FROM contem WHERE prodnumeroserie = $1', [prodnumeroserie])
}