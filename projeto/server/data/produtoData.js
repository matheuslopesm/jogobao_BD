// Conecta nossa aplicação à tabela "Produto" do banco de dados

const database = require('../infra/database.js')

exports.getProdutos = function(){
    return database.query('SELECT* FROM produto')
}

exports.saveProduto = function(produto) {
    return database.one('INSERT INTO produto (pnome, descricao) values ($1, $2) returning*', [produto.pnome, produto.descricao]);
}

exports.deleteProduto = function (numeroserie) {
    return database.none('DELETE FROM produto WHERE numeroserie = $1', [numeroserie])
}