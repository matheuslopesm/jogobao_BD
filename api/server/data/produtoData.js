// Conecta nossa aplicação à tabela "Produto" do banco de dados

const database = require('../infra/database.js')

// Consulta TODOS produtos da tabela
exports.getProdutos = function(){
    return database.query('SELECT* FROM produto')
}

// Consulta um Produto pelo seu numero de serie
exports.getProduto = function(numeroserie){
    return database.oneOrNone('SELECT* FROM produto WHERE numeroserie = $1', [numeroserie])
}

// Consulta um produto pelo seu nome
exports.getProdutoByPNome = function(pnome){
    return database.oneOrNone('SELECT* FROM produto WHERE pnome = $1', [pnome])
}

// Insere valores aos respectivos dados na tabela
exports.saveProduto = function(produto) {
    return database.one('INSERT INTO produto (pnome, descricao) values ($1, $2) returning*', [produto.pnome, produto.descricao]);
}

// Atualiza o valor de um produto na tabela
exports.updateProduto = function (numeroserie, produto) {
    return database.none('UPDATE produto SET pnome = $1, descricao = $2 WHERE numeroserie = $3', [produto.pnome, produto.descricao, numeroserie])
}

// Deleta um produto na tabela
exports.deleteProduto = function (numeroserie) {
    return database.none('DELETE FROM produto WHERE numeroserie = $1', [numeroserie])
}

