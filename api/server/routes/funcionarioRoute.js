const express = require('express')
const router = express.Router()
const funcionariosService = require('../service/funcionarioService.js')

//O get serve pra obtenção de um recurso da API

//Pega todos os funcionarios
router.get('/funcionarios', async function(req, res, next) {
    try {
        const funcionarios = await funcionariosService.getFuncionarios()
        res.json(funcionarios)
    } catch (e) {
        next(e)        
    }
}); 

//Cria um funcionario
router.post('/funcionarios', async function(req, res, next) {
    const funcionario = req.body
    try {
        const newFuncionario = await funcionariosService.saveFuncionario(funcionario)
        res.status(201).json(newFuncionario)     
    } catch (e) {
       next(e)
    }
});

// Atualiza um funcionario
router.put('/funcionarios/:idf', async function(req, res, next) {
    const funcionario = req.body
    try {
        await funcionariosService.updateFuncionario(req.params.idf, funcionario)
        res.status(204).end()   
    } catch (e) {
        next(e)
    }
}); 

//Deleta um funcionario
router.delete('/funcionarios/:idf', async function(req, res, next) {
    try {
        await funcionariosService.deleteFuncionario(req.params.idf)
        res.status(204).end()
    } catch (e) {
        next(e)
    }
}); 

// Distribui as rotas em arquivos diferentes
module.exports = router;
