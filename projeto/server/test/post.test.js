const crypto = require('crypto')
const axios = require('axios')
const produtoService = require('../service/produtoService.js')
const { hasUncaughtExceptionCaptureCallback } = require('process')

const generate = function() {
    return crypto.randomBytes(20).toString('hex')
}

test('Should get produtos', async function() {

    // Given - dado que
    const produto1 = await produtoService.saveProduto({ pnome: "jajajaj", descricao: "uhuhhu" })
    const produto2 = await produtoService.saveProduto({ pnome: "dassada", descricao: "aaabbb" })
    const produto3 = await produtoService.saveProduto({ pnome: "jkjasas", descricao: "aaaabb" })

    // When - quando acontecer
    const response = await axios({
        url: 'http://localhost:3000/produtos',
        method: 'get'
    })

    const produtos = response.data
    // Then - então
    expect(produtos).toHaveLength(3)

    await produtoService.deleteProduto(produto1.numeroSerie)
    await produtoService.deleteProduto(produto2.numeroSerie)
    await produtoService.deleteProduto(produto3.numeroSerie)
    
}) 