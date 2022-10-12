// Cria uma aplicação express através da função express() na porta 3000.
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const produtoRoute = require('./server/routes/produtoRoute')
const funcionarioRoute = require('./server/routes/funcionarioRoute')
const clienteRoute = require('./server/routes/clienteRoute')
const vendaRoute = require('./server/routes/vendaRoute')

app.use('/', produtoRoute)
app.use('/', funcionarioRoute)
app.use('/', clienteRoute)
app.use('/', vendaRoute)

app.use(function(error, req, res, next){
    if(error.message === 'Produto already exists' || error.message === 'Funcionario already exists' || error.message === 'Cliente already exists' || error.message === 'Venda already exists'){
        return res.status(409).send(error.message)        
    }
    if(error.message === 'Produto not found' || error.message === 'Funcionario not found' || error.message === 'Cliente not found' || error.message === 'Venda not found'){
        return res.status(404).send(error.message)
    }
    res.status(500).send(error.message)
})

app.listen(3000)