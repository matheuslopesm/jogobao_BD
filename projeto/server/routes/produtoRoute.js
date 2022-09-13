const express = require('express')
const router = express.Router()
const produtosService = require('../service/produtoService.js')

//O get serve pra obtenção de um recurso da API

//Pega todos os produtos
router.get('/produtos', async function(req, res) {
    const produtos = await produtosService.getProdutos()
    res.json(produtos)
}); 

//Cria um produto
router.post('/produtos', async function(req, res) {
    const produto = req.body
    try {
        const newProduto = await produtosService.saveProduto(produto)
        res.status(201).json(newProduto)     
    } catch (e) {
        res.status(409).send(e.message)        
    }
}); 

// Atualiza um produto
router.put('/produtos/:numeroserie', async function(req, res) {
    const produto = req.body
    try {
        await produtosService.updateProduto(req.params.numeroserie, produto)
        res.status(204).end()   
    } catch (e) {
        res.status(404).send(e.message)
    }
}); 

//Deleta um produto
router.delete('/produtos/:numeroserie', async function(req, res) {
    await produtosService.deleteProduto(req.params.numeroserie)
    res.status(204).end()
}); 

// Distribui as rotas em arquivos diferentes
module.exports = router;

