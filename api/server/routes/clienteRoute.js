const express = require('express')
const router = express.Router()
const clientesService = require('../service/clienteService.js')

//O get serve pra obtenção de um recurso da API

//Pega todos os clientes
router.get('/clientes', async function(req, res, next) {
    try {
        const clientes = await clientesService.getClientes()
        res.json(clientes)
    } catch (e) {
        next(e)        
    }
}); 

//Cria um cliente
router.post('/clientes', async function(req, res, next) {
    const cliente = req.body
    try {
        const newCliente = await clientesService.saveCliente(cliente)
        res.status(201).json(newCliente)     
    } catch (e) {
       next(e)
    }
}); 

// Atualiza um cliente
router.put('/clientes/:idc', async function(req, res, next) {
    const cliente = req.body
    try {
        await clientesService.updateCliente(req.params.idc, cliente)
        res.status(204).end()   
    } catch (e) {
        next(e)
    }
}); 

//Deleta um cliente
router.delete('/clientes/:idc', async function(req, res, next) {
    try {
        await clientesService.deleteCliente(req.params.idc)
        res.status(204).end()
    } catch (e) {
        next(e)
    }
}); 

// Distribui as rotas em arquivos diferentes
module.exports = router;

