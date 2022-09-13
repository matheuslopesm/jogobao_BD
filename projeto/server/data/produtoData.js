// Conecta nossa aplicação à tabela "Produto" do banco de dados

const database = require('../infra/database.js')

exports.getProdutos = function(){
    return database.query('SELECT* FROM produto')
}

exports.getProduto = function(numeroserie){
    return database.oneOrNone('SELECT* FROM produto WHERE numeroserie = $1', [numeroserie])
}

exports.getProdutoByPNome = function(pnome){
    return database.oneOrNone('SELECT* FROM produto WHERE pnome = $1', [pnome])
}

exports.saveProduto = function(produto) {
    return database.one('INSERT INTO produto (pnome, descricao) values ($1, $2) returning*', [produto.pnome, produto.descricao]);
}

exports.updateProduto = function (numeroserie, produto) {
    return database.none('UPDATE produto SET pnome = $1, descricao = $2 WHERE numeroserie = $3', [produto.pnome, produto.descricao, numeroserie])
}

exports.deleteProduto = function (numeroserie) {
    return database.none('DELETE FROM produto WHERE numeroserie = $1', [numeroserie])
}

