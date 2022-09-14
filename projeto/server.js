// Cria uma aplicação express através da função express() na porta 3000.
const express = require('express')
const app = express()

app.use(express.json())

const produtoRoute = require('./server/routes/produtoRoute')
const funcionarioRoute = require('./server/routes/funcionarioRoute')

app.use('/', produtoRoute)
app.use('/', funcionarioRoute)


app.use(function(error, req, res, next){
    if(error.message === 'Produto already exists' || error.message === 'Funcionario already exists'){
        return res.status(409).send(e.message)        
    }
    if(e.message === 'Produto not found' || error.message === 'Funcionario already exists'){
        return res.status(404).send(e.message)
    }
    res.status(500).send(e.message)
})

app.listen(3000)