const axios = require('axios')
const produtosService = require('../service/produtoService.js')
const crypto = require('crypto');

const generate = function () {
	return crypto.randomBytes(5).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data, validateStatus: false });
};

// Obtém os produtos
test('Should get produtos', async function() {
    const produto1 = await produtosService.saveProduto({ pnome: generate(), descricao: generate() })
    const produto2 = await produtosService.saveProduto({ pnome: generate(), descricao: generate() })
    const produto3 = await produtosService.saveProduto({ pnome: generate(), descricao: generate() })

    const response = await request('http://localhost:3000/produtos', 'get')
    expect(response.status).toBe(200)

    const produtos = response.data

    expect(produtos).toHaveLength(3)

    await produtosService.deleteProduto(produto1.numeroserie)
    await produtosService.deleteProduto(produto2.numeroserie)
    await produtosService.deleteProduto(produto3.numeroserie)
}) 

// Cria os produtos
test('Should save produtos', async function() {
    const data = { pnome: generate(5), descricao: generate() }
    const response = await request( 'http://localhost:3000/produtos', 'post', data)
    expect(response.status).toBe(201)
    
    const produto = response.data

    expect(produto.pnome).toBe(data.pnome);
	expect(produto.descricao).toBe(data.descricao);
	await produtosService.deleteProduto(produto.numeroserie);
}) 

// Não deixa salvar 2 produtos com o mesmo nome
test('Should not save a produto', async function() {
    const data = { pnome: generate(5), descricao: generate() }
    const response1 = await request( 'http://localhost:3000/produtos', 'post', data)
    const response2 = await request( 'http://localhost:3000/produtos', 'post', data)
    expect(response2.status).toBe(409)
    
    const produto = response1.data

    await produtosService.deleteProduto(produto.numeroserie);
}) 

// Atualiza os produtos
test('Should update produtos', async function() {
    const produto = await produtosService.saveProduto({ pnome: generate(5), descricao: generate() }) 
    produto.pnome = generate(5)
    produto.descricao = generate()

    const response = await request( `http://localhost:3000/produtos/${produto.numeroserie}`, 'put', produto)
    expect(response.status).toBe(204)

    const updatedProduto = await produtosService.getProduto(produto.numeroserie)
    expect(updatedProduto.pnome).toBe(produto.pnome);
	expect(updatedProduto.descricao).toBe(produto.descricao);
	await produtosService.deleteProduto(produto.numeroserie);
}) 

// Não atualiza um produto que não existe
test('Should not update a produto', async function() {
    const produto = {
        numeroserie: 1
    }

    const response = await request( `http://localhost:3000/produtos/${produto.numeroserie}`, 'put', produto)
    expect(response.status).toBe(404)
}) 


// Deleta os produtos
test('Should delete a produto', async function() {
    const produto = await produtosService.saveProduto({ pnome: generate(5), descricao: generate() }) 
    const response = await request( `http://localhost:3000/produtos/${produto.numeroserie}`, 'delete')
    expect(response.status).toBe(204)

    const produtos  = await produtosService.getProdutos()
    expect(produtos).toHaveLength(0)
}) 