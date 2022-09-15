const express = require('express')
const router = express.Router()
const contemsService = require('../service/contemService.js')

//O get serve pra obtenção de um recurso da API

//Pega todos os contems
router.get('/contems', async function(req, res, next) {
    try {
        const contems = await contemsService.getContems()
        res.json(contems)
    } catch (e) {
        next(e)        
    }
}); 

//Cria um contem
router.post('/contems', async function(req, res, next) {
    const contem = req.body
    try {
        const newContem = await contemsService.saveContem(contem)
        res.status(201).json(newContem)     
    } catch (e) {
       next(e)
    }
}); 

// Atualiza um contem
router.put('/contems/:prodnumeroserie', async function(req, res, next) {
    const contem = req.body
    try {
        await contemsService.updateContem(req.params.prodnumeroserie, contem)
        res.status(204).end()   
    } catch (e) {
        next(e)
    }
}); 

//Deleta um contem
router.delete('/contems/:prodnumeroserie', async function(req, res, next) {
    try {
        await contemsService.deleteContem(req.params.prodnumeroserie)
        res.status(204).end()
    } catch (e) {
        next(e)
    }
}); 

// Distribui as rotas em arquivos diferentes
module.exports = router;

