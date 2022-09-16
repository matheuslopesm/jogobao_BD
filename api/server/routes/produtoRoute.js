const express = require('express')
const router = express.Router()
const produtosService = require('../service/produtoService.js')

//O get serve pra obtenção de um recurso da API

//Pega todos os produtos
router.get('/produtos', async function(req, res, next) {
    try {
        const produtos = await produtosService.getProdutos()
        res.json(produtos)
    } catch (e) {
        next(e)        
    }
}); 

//Cria um produto
router.post('/produtos', async function(req, res, next) {
    const produto = req.body
    try {
        const newProduto = await produtosService.saveProduto(produto)
        res.status(201).json(newProduto)     
    } catch (e) {
       next(e)
    }
}); 

// Atualiza um produto
router.put('/produtos/:numeroserie', async function(req, res, next) {
    const produto = req.body
    try {
        await produtosService.updateProduto(req.params.numeroserie, produto)
        res.status(204).end()   
    } catch (e) {
        next(e)
    }
}); 

//Deleta um produto
router.delete('/produtos/:numeroserie', async function(req, res, next) {
    try {
        await produtosService.deleteProduto(req.params.numeroserie)
        res.status(204).end()
    } catch (e) {
        next(e)
    }
}); 

// Distribui as rotas em arquivos diferentes
module.exports = router;

