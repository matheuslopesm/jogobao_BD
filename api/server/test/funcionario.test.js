const axios = require('axios')
const funcionariosService = require('../service/funcionarioService.js')
const crypto = require('crypto');

const generate = function () {
	return crypto.randomBytes(5).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data, validateStatus: false });
};

// Obtém os funcionarios
test('Should get funcionarios', async function() {
    const funcionario1 = await funcionariosService.saveFuncionario({ fnome: generate(), datanascimento: '07-10-1999' })
    const funcionario2 = await funcionariosService.saveFuncionario({ fnome: generate(), datanascimento: '06-09-1998' })
    const funcionario3 = await funcionariosService.saveFuncionario({ fnome: generate(), datanascimento: '05-08-1997' })

    const response = await request('http://localhost:3000/funcionarios', 'get')
    expect(response.status).toBe(200)

    const funcionarios = response.data

    expect(funcionarios).toHaveLength(3)

    await funcionariosService.deleteFuncionario(funcionario1.idf)
    await funcionariosService.deleteFuncionario(funcionario2.idf)
    await funcionariosService.deleteFuncionario(funcionario3.idf)
}) 

// Cria os funcionarios
test('Should save funcionarios', async function() {
    const data = { fnome: generate(5), datanascimento: '1999-12-07T02:00:00.000Z' }
    const response = await request( 'http://localhost:3000/funcionarios', 'post', data)
    expect(response.status).toBe(201)
    
    const funcionario = response.data

    expect(funcionario.fnome).toBe(data.fnome);
	expect(funcionario.datanascimento).toBe(data.datanascimento);
	await funcionariosService.deleteFuncionario(funcionario.idf);
}) 

// Não deixa salvar 2 funcionarios com o mesmo nome
test('Should not save a funcionario', async function() {
    const data = { fnome: generate(5), datanascimento: '1999-12-07T02:00:00.000Z' }
    const response1 = await request( 'http://localhost:3000/funcionarios', 'post', data)
    const response2 = await request( 'http://localhost:3000/funcionarios', 'post', data)
    expect(response2.status).toBe(409)
    
    const funcionario = response1.data

    await funcionariosService.deleteFuncionario(funcionario.idf);
}) 

// Atualiza os funcionarios
test('Should update funcionarios', async function() {
    const funcionario = await funcionariosService.saveFuncionario({ fnome: generate(5), datanascimento: '01-11-1998' }) 
    funcionario.fnome = generate(5)
    funcionario.datanascimento = '07-12-1999'

    const response = await request( `http://localhost:3000/funcionarios/${funcionario.idf}`, 'put', funcionario)
    expect(response.status).toBe(204)

    const updatedFuncionario = await funcionariosService.getFuncionario(funcionario.idf)
    expect(updatedFuncionario.fnome).toBe(funcionario.fnome);
	expect(updatedFuncionario.datanascimento).toBe(funcionario.datanascimento);
	await funcionariosService.deleteFuncionario(funcionario.idf);
}) 

// Não atualiza um funcionario que não existe
test('Should not update a funcionario', async function() {
    const funcionario = {
        idf: 1
    }

    const response = await request( `http://localhost:3000/funcionarios/${funcionario.idf}`, 'put', funcionario)
    expect(response.status).toBe(500)
}) 


// Deleta os funcionarios
test('Should delete a funcionario', async function() {
    const funcionario = await funcionariosService.saveFuncionario({ fnome: generate(5), datanascimento: '07-12-1999' }) 
    const response = await request( `http://localhost:3000/funcionarios/${funcionario.idf}`, 'delete')
    expect(response.status).toBe(204)

    const funcionarios  = await funcionariosService.getFuncionarios()
    expect(funcionarios).toHaveLength(0)
}) 