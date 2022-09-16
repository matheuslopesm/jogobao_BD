const express = require('express')
const router = express.Router()
const vendasService = require('../service/vendaService.js')

//O get serve pra obtenção de um recurso da API

//Pega todas as vendas
router.get('/vendas', async function(req, res, next) {
    try {
        const vendas = await vendasService.getVendas()
        res.json(vendas)
    } catch (e) {
        next(e)        
    }
}); 

//Cria uma venda
router.post('/vendas', async function(req, res, next) {
    const venda = req.body
    try {
        const newVenda = await vendasService.saveVenda(venda)
        res.status(201).json(newVenda)     
    } catch (e) {
       next(e)
    }
}); 

// Atualiza uma venda
router.put('/vendas/:cod', async function(req, res, next) {
    const venda = req.body
    try {
        await vendasService.updateVenda(req.params.cod, venda)
        res.status(204).end()   
    } catch (e) {
        next(e)
    }
}); 

//Deleta uma venda
router.delete('/vendas/:cod', async function(req, res, next) {
    try {
        await vendasService.deleteVenda(req.params.cod)
        res.status(204).end()
    } catch (e) {
        next(e)
    }
}); 

// Distribui as rotas em arquivos diferentes
module.exports = router;

