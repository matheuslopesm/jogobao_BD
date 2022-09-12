// Aqui é onde estão as camadas de negócio
const produtosData = require('../data/produtoData.js')

exports.getProdutos = function () {
    return produtosData.getProdutos()
}

exports.saveProduto = function(produto) {
    return produtosData.saveProduto(produto)
}

exports.deleteProduto = function(numeroSerie) {
    return produtosData.deleteProduto(numeroSerie)
}

