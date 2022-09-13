const axios = require('axios')
const produtosService = require('../service/produtoService.js')
const crypto = require('crypto');

const generate = function () {
	return crypto.randomBytes(5).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data });
};

test('Should get produtos', async function() {
    const produto1 = await produtosService.saveProduto({ pnome: generate(), descricao: generate() })
    const produto2 = await produtosService.saveProduto({ pnome: generate(), descricao: generate() })
    const produto3 = await produtosService.saveProduto({ pnome: generate(), descricao: generate() })

    const response = await request('http://localhost:3000/produtos', 'get')
    const produtos = response.data

    expect(produtos).toHaveLength(3)

    await produtosService.deleteProduto(produto1.numeroserie)
    await produtosService.deleteProduto(produto2.numeroserie)
    await produtosService.deleteProduto(produto3.numeroserie)
}) 

test.only('Should save produtos', async function() {
    const data = { pnome: generate(5), descricao: generate() }
    const response = await request( 'http://localhost:3000/produtos', 'post', data)
    const produto = response.data

    expect(produto.pnome).toBe(data.pnome);
	expect(produto.descricao).toBe(data.descricao);
	await produtosService.deleteProduto(produto.numeroserie);
}) 
