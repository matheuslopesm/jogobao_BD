// Conecta nossa aplicação à tabela "Produto" do banco de dados
const database = require('../infra/database.js')

// Consulta TODOS produtos da tabela
exports.getProdutos = function(){
    return database.query('SELECT* FROM produto ORDER BY numeroserie');
}

// Consulta um Produto pelo seu numero de serie
exports.getProduto = function(numeroserie){
    return database.oneOrNone('SELECT* FROM produto WHERE numeroserie = $1', [numeroserie]);
}

// Consulta um produto pelo seu nome
exports.getProdutoByPNome = function(pnome){
    return database.oneOrNone('SELECT* FROM produto WHERE pnome = $1', [pnome]);
}

// Insere valores aos respectivos dados na tabela
exports.saveProduto = function(produto) {
    return database.one('INSERT INTO produto (pnome, valor, empresa, descricao) values ($1, $2, $3, $4) RETURNING*', [produto.pnome, produto.valor, produto.empresa, produto.descricao]);
}

// Atualiza o valor de um produto na tabela
exports.updateProduto = function (numeroserie, produto) {
    return database.none('UPDATE produto SET pnome = $1, valor = $2, empresa = $3, descricao = $4 WHERE numeroserie = $5', [produto.pnome, produto.valor, produto.empresa, produto.descricao, numeroserie]);
}

// Deleta um produto na tabela
exports.deleteProduto = function (numeroserie) {
    return database.none('DELETE FROM produto WHERE numeroserie = $1', [numeroserie]);
}

