// Cria uma aplicação express através da função express() na porta 3000.
const express = require('express')
const app = express()

app.use(express.json())

const produtoRoute = require('./server/routes/produtoRoute')
const funcionarioRoute = require('./server/routes/funcionarioRoute')
const clienteRoute = require('./server/routes/clienteRoute')

app.use('/', produtoRoute)
app.use('/', funcionarioRoute)
app.use('/', clienteRoute)


app.use(function(error, req, res, next){
    if(error.message === 'Produto already exists' || error.message === 'Funcionario already exists' || error.message === 'Cliente already exists'){
        return res.status(409).send(e.message)        
    }
    if(error.message === 'Produto not found' || error.message === 'Funcionario not found' || error.message === 'Cliente not found'){
        return res.status(404).send(e.message)
    }
    res.status(500).send(e.message)
})

app.listen(3000)