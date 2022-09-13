// Cria uma aplicação express através da função express() na porta 3000.
const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./server/routes/produtoRoute.js'))

app.listen(3000)