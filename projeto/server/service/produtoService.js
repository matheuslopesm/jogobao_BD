// // Aqui é onde estão os papéis de negócio
// const produtosData = require('../data/produtoData.js')

// exports.getProdutos = function () {
//     return produtosData.getProdutos()
// }

// exports.getProduto = async function (numeroserie) {
//     const produto = await produtosData.getProduto(numeroserie)
//     if(!produto) throw new Error('Produto not found')
//     return produto
// }

// exports.saveProduto = async function(produto) {
//     const existingProduto = await produtosData.getProdutoByPNome(produto.pnome)
//     if(existingProduto) throw new Error('Produto already exists')
//     return produtosData.saveProduto(produto)
// }

// exports.deleteProduto = function(numeroserie) {
//     return produtosData.deleteProduto(numeroserie)
// }

// exports.updateProduto = async function(numeroserie, produto){
//     await exports.getProduto(numeroserie)
//     return produtosData.updateProduto(numeroserie, produto)
// }
