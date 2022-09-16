const axios = require('axios')
const clientesService = require('../service/clienteService.js')
const crypto = require('crypto');

const generate = function () {
	return crypto.randomBytes(5).toString('hex');
};

const request = function (url, method, data) {
	return axios({ url, method, data, validateStatus: false });
};

// Obtém os clientes
test('Should get clientes', async function() {
    const cliente1 = await clientesService.saveCliente({ cnome: generate(), sobrenome: generate() })
    const cliente2 = await clientesService.saveCliente({ cnome: generate(), sobrenome: generate() })
    const cliente3 = await clientesService.saveCliente({ cnome: generate(), sobrenome: generate() })

    const response = await request('http://localhost:3000/clientes', 'get')
    expect(response.status).toBe(200)

    const clientes = response.data

    expect(clientes).toHaveLength(3)

    await clientesService.deleteCliente(cliente1.id)
    await clientesService.deleteCliente(cliente2.id)
    await clientesService.deleteCliente(cliente3.id)
}) 

// Cria os clientes
test('Should save clientes', async function() {
    const data = { cnome: generate(5), sobrenome: generate() }
    const response = await request( 'http://localhost:3000/clientes', 'post', data)
    expect(response.status).toBe(201)
    
    const cliente = response.data

    expect(cliente.cnome).toBe(data.cnome);
	expect(cliente.sobrenome).toBe(data.sobrenome);
	await clientesService.deleteCliente(cliente.id);
}) 

// Não deixa salvar 2 clientes com o mesmo nome
test('Should not save a cliente', async function() {
    const data = { cnome: generate(5), sobrenome: generate() }
    const response1 = await request( 'http://localhost:3000/clientes', 'post', data)
    const response2 = await request( 'http://localhost:3000/clientes', 'post', data)
    expect(response2.status).toBe(409)
    
    const cliente = response1.data

    await clientesService.deleteCliente(cliente.id);
}) 

// Atualiza os clientes
test('Should update clientes', async function() {
    const cliente = await clientesService.saveCliente({ cnome: generate(5), sobrenome: generate() }) 
    cliente.cnome = generate(5)
    cliente.sobrenome = generate()

    const response = await request( `http://localhost:3000/clientes/${cliente.id}`, 'put', cliente)
    expect(response.status).toBe(204)

    const updatedCliente = await clientesService.getCliente(cliente.id)
    expect(updatedCliente.cnome).toBe(cliente.cnome);
	expect(updatedCliente.sobrenome).toBe(cliente.sobrenome);
	await clientesService.deleteCliente(cliente.id);
}) 

// Não atualiza um cliente que não existe
test('Should not update a cliente', async function() {
    const cliente = {
        id: 1
    }

    const response = await request( `http://localhost:3000/clientes/${cliente.id}`, 'put', cliente)
    expect(response.status).toBe(404)
}) 


// Deleta os clientes
test('Should delete a cliente', async function() {
    const cliente = await clientesService.saveCliente({ cnome: generate(5), sobrenome: generate() }) 
    const response = await request( `http://localhost:3000/clientes/${cliente.id}`, 'delete')
    expect(response.status).toBe(204)

    const clientes  = await clientesService.getClientes()
    expect(clientes).toHaveLength(0)
}) 