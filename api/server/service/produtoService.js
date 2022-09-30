// Aqui é onde estão os papéis de negócio
const produtosData = require('../data/produtoData.js')

// Retorna TODOS produtos
exports.getProdutos = function () {
    return produtosData.getProdutos();
}

// Retorna um Produto pelo seu numero de serie
exports.getProduto = async function (numeroserie) {
    const produto = await produtosData.getProduto(numeroserie)
    if(!produto) throw new Error('Produto not found')
    return produto
}

// Salva um produto pegando pelo seu nome e testando se ele já existe
exports.saveProduto = async function(produto) {
    const existingProduto = await produtosData.getProdutoByPNome(produto.pnome)
    if(existingProduto) throw new Error('Produto already exists')
    return produtosData.saveProduto(produto)
}

// Deleta um produto
exports.deleteProduto = function(numeroserie) {
    return produtosData.deleteProduto(numeroserie)
}

// Atualiza um produto mas antes pega ele na tabela
exports.updateProduto = async function(numeroserie, produto){
    await exports.getProduto(numeroserie)
    return produtosData.updateProduto(numeroserie, produto)
}
