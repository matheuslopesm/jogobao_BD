const express = require('express')
const router = express.Router()
const produtosService = require('../service/produtoService.js')

// O get serve pra obtenção de um recurso da API

//Pega todos os produtos
router.get('/produtos', async function(req, res) {
    const produtos = await produtosService.getProdutos()
    res.json(produtos)
}); 

// //Pega só um produto pelo seu numeroSerie
// router.get('/produtos/:numeroSerie', async function(req, res) {
// }); 

// //Cria um produto
// router.post('/produtos', async function(req, res) {
// }); 

// //Faz uma alteração do produto
// router.put('/produtos/:numeroSerie', async function(req, res) {
// }); 

// //Deleta um produto
// router.delete('/produtos/:numeroSerie', async function(req, res) {
// }); 

// Distribui as rotas em arquivos diferentes
module.exports = router;